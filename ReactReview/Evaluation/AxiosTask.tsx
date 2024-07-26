import React, { useEffect, useState } from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { getPosts } from '../service/postService'; 
import { Post } from '../service/postService';

const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setPosts(response.data);
      } catch (err) {
        console.error('Failed to fetch posts');
      }
    };

    fetchPosts();
  }, []);

  return (
    <Box padding={2}>
      <Typography variant="h3">Posts</Typography>
      <List>
        {posts.map(post => (
          <ListItem key={post.id}>
            <ListItemText
              primary={<Typography variant="h5">{post.title}</Typography>}
              secondary={<Typography variant="body1">{post.body}</Typography>}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PostsList;
