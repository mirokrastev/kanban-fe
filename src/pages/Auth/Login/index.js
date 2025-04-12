import { ErrorMessage, Formik } from "formik";
import { Form, Input } from "formik-semantic-ui-react";
import { Button, Message, Header, Segment } from "semantic-ui-react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

import { login } from "./sdk";
import { useAuth } from "../../../contexts/AuthContext";
import { LoginSchema } from "./schema";

import styles from "../styles.module.css";

const Login = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    const { setFieldError } = actions;

    const response = await login(values);
    const data = await response.json();

    if (!response.ok) {
      setFieldError("password", "Invalid username or password");
    } else {
      localStorage.setItem("token", data.access);
      setUser({ isAuthenticated: true });
      toast.success("Login successful");
      navigate("/");
    }
  };

  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <Header as="h2" textAlign="center">
          Sign in to your account
        </Header>
        <Formik
          validationSchema={LoginSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Segment>
                <Input
                  name="username"
                  label="Username"
                  placeholder="Enter your username"
                  icon="user"
                  iconPosition="left"
                />
                <Input
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  icon="lock"
                  iconPosition="left"
                />
                <ErrorMessage name="password" component="div" />

                <Button
                  color="blue"
                  fluid
                  size="large"
                  type="submit"
                  loading={isSubmitting}
                  disabled={isSubmitting}
                >
                  Sign In
                </Button>
              </Segment>
            </Form>
          )}
        </Formik>
        <Message className={styles.message}>
          New to us?{" "}
          <Link to="/register" className={styles.link}>
            Sign up
          </Link>
        </Message>
      </div>
    </div>
  );
};

export default Login;
