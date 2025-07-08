import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import axios from 'axios';

const API_URL = 'https://www.omdbapi.com/';
const API_KEY = 'efa41ce4';

export default function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [exactSearch, setExactSearch] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);

  useEffect(() => {
    if (query.length < 3) {
      setResults([]);
      return;
    }

    if (typingTimeout) clearTimeout(typingTimeout);

    const timeout = setTimeout(() => {
      searchMovies(query);
    }, 500);

    setTypingTimeout(timeout);
  }, [query, exactSearch]);

  const searchMovies = async (searchText) => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL, {
        params: {
          apikey: API_KEY,
          s: searchText,
        },
      });

      let movies = response.data.Search || [];

      if (exactSearch) {
        movies = movies.filter(movie =>
          movie.Title.toLowerCase() === searchText.trim().toLowerCase()
        );
      }

      const detailedResults = await Promise.all(
        movies.map(async (movie) => {
          try {
            const detailResponse = await axios.get(API_URL, {
              params: {
                apikey: API_KEY,
                i: movie.imdbID,
              },
            });
            return { ...movie, imdbRating: detailResponse.data.imdbRating };
          } catch {
            return { ...movie, imdbRating: 'N/A' };
          }
        })
      );

      setResults(detailedResults);
    } catch (error) {
      console.error('Error al buscar películas:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const toggleSearchMode = () => {
    setExactSearch(!exactSearch);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 Examen...</Text>

      <TextInput
        placeholder="Buscar película..."
        style={styles.input}
        value={query}
        onChangeText={setQuery}
        placeholderTextColor="#888"
      />

      <TouchableOpacity onPress={toggleSearchMode} style={styles.toggleButton}>
        <Text style={styles.toggleButtonText}>
          🔍 Búsqueda: {exactSearch ? 'Exacta' : 'Aproximada'}
        </Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 20 }} />}

      <FlatList
        data={results}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.Poster !== 'N/A' ? item.Poster : 'https://via.placeholder.com/100x150?text=No+Image' }}
              style={styles.poster}
            />
            <View style={styles.info}>
              <Text style={styles.movieTitle}>{item.Title}</Text>
              <Text style={styles.text}>🎞 Año: {item.Year}</Text>
              <Text style={styles.text}>⭐ Rating: {item.imdbRating}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    color: '#111827',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#d1d5db',
    marginBottom: 10,
  },
  toggleButton: {
    backgroundColor: '#2563eb',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  toggleButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  list: {
    paddingBottom: 80,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  poster: {
    width: 100,
    height: 150,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  info: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
    color: '#1f2937',
  },
  text: {
    fontSize: 14,
    color: '#4b5563',
  },
});
