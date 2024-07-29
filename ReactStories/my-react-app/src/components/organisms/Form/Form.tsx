import React, { useState, useEffect } from 'react';
import FormField from '../../molecules/FormField/FormField';
import Button from '../../atoms/Button/Button';
import './Form.css';

const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [genderError, setGenderError] = useState('');

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  const validateName = (name: string) => {
    if (!/^[a-zA-Z]+$/.test(name)) {
      setNameError('Name should only contain alphabetic characters');
    } else {
      setNameError('');
    }
  };

  const validateEmail = (email: string) => {
    if (!/^[\w.+-]+@gmail\.com$/.test(email)) {
      setEmailError('Email should be a valid Gmail address ending with @gmail.com');
    } else {
      setEmailError('');
    }
  };

  const validateGender = (gender: string) => {
    if (!['Male', 'Female', 'Other'].includes(gender)) {
      setGenderError('Gender is required and should be either Male, Female, or Other');
    } else {
      setGenderError('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    if (id === 'name') {
      setName(value);
      validateName(value);
    } else if (id === 'email') {
      setEmail(value);
      validateEmail(value);
    } else if (id === 'gender') {
      setGender(value);
      validateGender(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    validateName(name);
    validateEmail(email);
    validateGender(gender);

    if (!nameError && !emailError && !genderError && gender) {
      console.log('Submitted Data:', { name, email, gender });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        label="Name"
        id="name"
        type="text"
        value={name}
        onChange={handleInputChange}
        error={nameError}
      />
      <FormField
        label="Email"
        id="email"
        type="email"
        value={email}
        onChange={handleInputChange}
        error={emailError}
      />
      <FormField
        label="Gender"
        id="gender"
        type="select"
        value={gender}
        onChange={handleInputChange}
        options={['', 'Male', 'Female', 'Other']}
        error={genderError}
      />
      <Button text="Submit" type="submit" />
    </form>
  );
};

export default Form;
