
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';

const Home = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Load Posts" onPress={fetchPosts} />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detail', { postId: item.id })}>
            <View style={styles.item}>
              <Text style={styles.title}>{item.id}: {item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#282A36',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: 'gray',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5, 
  },
  title: {
    fontSize: 20,
  },
});

export default Home;