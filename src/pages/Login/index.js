import { useState } from "react";
import { useForm } from 'react-hook-form';
import { Form, Button, Message, Container, Header } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { login } from './sdk';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      
      if (response.error) {
        setErrors(response.error);
        toast.error('Login failed');
      } else {
        // Store the access token
        localStorage.setItem("token", response.access);
        // Set user as authenticated
        setUser({ isAuthenticated: true });
        toast.success('Login successful');
        navigate('/');
      }
    } catch (error) {
      setErrors([error.message]);
      toast.error('Login failed');
    }
  };

  return (
    <Container text>
      <Header as='h2' textAlign='center' content='Sign in to your account' />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>Username</label>
          <input
            {...register('username', {
              required: 'Username is required',
            })}
            placeholder='Username'
          />
          {errors.username && (
            <Message negative>
              <p>{errors.username.message}</p>
            </Message>
          )}
        </Form.Field>

        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              }
            })}
            placeholder='Password'
          />
          {errors.password && (
            <Message negative>
              <p>{errors.password.message}</p>
            </Message>
          )}
        </Form.Field>

        <Button type='submit' primary fluid>
          Sign in
        </Button>
      </Form>
    </Container>
  );
};

export default Login; 