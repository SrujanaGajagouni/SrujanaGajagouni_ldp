import axios from 'axios';

const API_URL = 'http://localhost:4000/Todo';


export interface Todo {
  id: number;
  title: string;
  dateTime: string; 
}

export interface TodoPayload {
  title: string;
  dateTime: string;
}

export const getTodos = () => axios.get<Todo[]>(API_URL);

export const createTodo = (payload: TodoPayload) => axios.post<Todo>(API_URL, payload);

export const updateTodo = (id: number, payload: TodoPayload) => axios.put<Todo>(`${API_URL}/${id}`, payload);

export const deleteTodo = (id: number) => axios.delete(`${API_URL}/${id}`);
