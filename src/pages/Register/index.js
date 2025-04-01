import {useState} from "react";
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import {Form, Button, Message, Container, Header} from 'semantic-ui-react';
import {toast} from "react-toastify";

import {register as registerSdk} from './sdk';

const Register = () => {
  const {register, handleSubmit} = useForm();

  const navigate = useNavigate();

  const [errors, setErrors] = useState([]);

  const onSubmit = async (data) => {
    const response = await registerSdk(data);

    if (response.error) {
      setErrors(response.error);
    } else {
      toast.success('Account created successfully');
      navigate('/login');
    }

  };

  return (
    <Container text>
      <Header as='h2' textAlign='center' content='Create your account'/>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>First Name</label>
          <input
            {...register('first_name', {
              required: 'First Name is required',
              minLength: {
                value: 2,
                message: 'First Name must be at least 2 characters'
              }
            })}
            placeholder='First Name'
          />
          {errors.first_name && (
            <Message negative>
              <p>{errors.first_name.message}</p>
            </Message>
          )}
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            {...register('last_name', {
              required: 'Last Name is required',
              minLength: {
                value: 2,
                message: 'Last Name must be at least 2 characters'
              }
            })}
            placeholder='Last Name'
          />
          {errors.last_name && (
            <Message negative>
              <p>{errors.last_name.message}</p>
            </Message>
          )}
        </Form.Field>

        <Form.Field>
          <label>Username</label>
          <input
            {...register('username', {
              required: 'Username is required',
              minLength: {
                value: 2,
                message: 'Username must be at least 2 characters'
              }
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
          <label>Email</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            placeholder='Email'
          />
          {errors.email && (
            <Message negative>
              <p>{errors.email.message}</p>
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
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register; 