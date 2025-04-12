import { ErrorMessage, Formik } from "formik";
import { Form, Input } from "formik-semantic-ui-react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Message, Header, Segment } from "semantic-ui-react";
import { toast } from "react-toastify";

import { register as registerSdk } from "./sdk";
import { RegisterSchema } from "./schema";

import styles from "../styles.module.css";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data, actions) => {
    const { setErrors } = actions;

    const response = await registerSdk(data);
    if (response.ok) {
      toast.success("Account created successfully");
      navigate("/login");
    }
    setErrors(response);
  };

  const initialValues = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <Header as="h2" textAlign="center">
          Create your account
        </Header>
        <Formik
          validationSchema={RegisterSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Segment>
                <Input
                  fluid
                  name="first_name"
                  icon="user"
                  iconPosition="left"
                  placeholder="First Name"
                />
                <ErrorMessage name="first_name" component="div" />

                <Input
                  fluid
                  name="last_name"
                  icon="user"
                  iconPosition="left"
                  placeholder="Last Name"
                />
                <ErrorMessage name="last_name" component="div" />

                <Input
                  fluid
                  name="username"
                  icon="user circle"
                  iconPosition="left"
                  placeholder="Username"
                />
                <ErrorMessage name="username" component="div" />

                <Input
                  fluid
                  name="email"
                  icon="mail"
                  iconPosition="left"
                  placeholder="Email"
                  type="email"
                />
                <ErrorMessage name="email" component="div" />

                <Input
                  fluid
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
                <ErrorMessage name="password" component="div" />

                <Input
                  fluid
                  name="confirm_password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Confirm Password"
                  type="password"
                />
                <ErrorMessage name="confirm_password" component="div" />

                <Button
                  color="blue"
                  fluid
                  size="large"
                  type="submit"
                  loading={isSubmitting}
                >
                  Register
                </Button>
              </Segment>
            </Form>
          )}
        </Formik>
        <Message className={styles.message}>
          Already have an account?{" "}
          <Link to="/login" className={styles.link}>
            Sign in
          </Link>
        </Message>
      </div>
    </div>
  );
};

export default Register;
