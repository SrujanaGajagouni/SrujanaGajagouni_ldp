import axiosInstance from './axiosInstance';

export interface Post { 
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getPosts = () => axiosInstance.get<Post[]>('/posts'); 
