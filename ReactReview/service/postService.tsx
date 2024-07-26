import axiosInstance from '../constants/API';

export interface IPost { 
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getPosts = () => axiosInstance.get<IPost[]>('/posts'); 
