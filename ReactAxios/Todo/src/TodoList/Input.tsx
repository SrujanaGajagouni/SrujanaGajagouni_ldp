import React, { useState, useEffect } from 'react';
import { Button, TextField, List, ListItem, ListItemText, IconButton, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../api/inputdetails';

interface Todo {
  id: number;
  title: string;
  dateTime: string; 
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [newDateTime, setNewDateTime] = useState<string>(''); 
  const [editTodoId, setEditTodoId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState<string>('');
  const [editDateTime, setEditDateTime] = useState<string>(''); 

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await getTodos();
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleAddTodo = async () => {
    if (newTodo.trim() && newDateTime.trim()) {
      try {
        await createTodo({ title: newTodo, dateTime: newDateTime });
        setNewTodo('');
        setNewDateTime('');
        fetchTodos();
      } catch (error) {
        console.error('Error creating todo:', error);
      }
    } else {
      console.error('Title and DateTime are required');
    }
  };

  const handleUpdateTodo = async (id: number) => {
    if (editTitle.trim() && editDateTime.trim()) {
      try {
        await updateTodo(id, { title: editTitle, dateTime: editDateTime });
        setEditTitle('');
        setEditDateTime('');
        setEditTodoId(null);
        fetchTodos();
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    } else {
      console.error('Title and DateTime are required');
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <Stack spacing={2} padding={2}>
      <Stack direction="row" spacing={2}>
        <TextField
          label="New To-Do"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          fullWidth
        />
        <TextField
          label="Date & Time"
          type="text"
          value={newDateTime}
          onChange={(e) => setNewDateTime(e.target.value)}
          fullWidth
          placeholder="yyyy-mm-ddThh:mm"
        />
        <Button variant="contained" onClick={handleAddTodo}>
          Add
        </Button>
      </Stack>

      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id} secondaryAction={
            <>
              <IconButton edge="end" aria-label="edit" onClick={() => {
                setEditTodoId(todo.id);
                setEditTitle(todo.title);
                setEditDateTime(todo.dateTime);
              }}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            </>
          }>
            {editTodoId === todo.id ? (
              <Stack direction="row" spacing={1} alignItems="center">
                <TextField
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <TextField
                  type="text"
                  value={editDateTime}
                  onChange={(e) => setEditDateTime(e.target.value)}
                  placeholder="yyyy-mm-ddThh:mm"
                />
                <Button variant="contained" onClick={() => handleUpdateTodo(todo.id)}>
                  Save
                </Button>
                <Button variant="outlined" onClick={() => {
                  setEditTodoId(null);
                  setEditTitle('');
                  setEditDateTime('');
                }}>
                  Cancel
                </Button>
              </Stack>
            ) : (
              <ListItemText primary={todo.title} secondary={`Due: ${todo.dateTime}`} />
            )}
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default TodoList;
