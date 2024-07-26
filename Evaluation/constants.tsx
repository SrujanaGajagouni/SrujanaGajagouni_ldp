import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';


export interface Posts {
  id: number;
  title: string;
  body: string; 
}



export const getPosts = () => axios.get<Posts[]>(API_URL);