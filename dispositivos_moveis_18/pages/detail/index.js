
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Detail = ({ route }) => {
  const { postId } = route.params;
  const [post, setPost] = useState(null);

  const fetchPost = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (!post) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ID: {post.id}</Text>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={{color:'#ddd'}}>{post.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#282A36',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color:"#ddd",
  },
});

export default Detail;
