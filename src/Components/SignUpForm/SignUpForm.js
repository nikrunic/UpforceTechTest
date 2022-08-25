import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "./SignUpForm.scss";

const SignupSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
});

export const SignUpForm = ({ tabKey }) => {
  const [agreement, setAgreement] = useState(false);
  const [message, setMessage] = useState();
  const [show, setShow] = useState(false);
  const api = "http://wren.in:3200/api/sign-up";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit = (data) => {
    try {
      if (agreement) {
        axios
          .post(`${api}/${tabKey}`, data)
          .then((response) => {
            setShow(true);
            setMessage("Thanks! your account has been successfully created.");
          })
          .catch((error) => {
            setShow(true);
            setMessage("oops! there is something wrong with the system. please contact our team at support@UpforceTech.com");
          });
      } else {
        setShow(true);
        setMessage("oops! there is something wrong with the system. please contact our team at support@UpforceTech.com");
      }
    } catch (error) {}
  };

  return (
    <React.Fragment>
      <h3 className="text-center text-capitalize">
        Create Your {tabKey} Account
      </h3>
      <Form
        className="signup-form"
        autoComplete="nope"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Group className="mb-4">
          <Form.Label>First Name*</Form.Label>
          <Form.Control
            autoComplete="nope"
            type="text"
            placeholder="First name"
            {...register("first_name")}
          />
          {errors.first_name && (
            <p>
              {errors.first_name?.type === "required" &&
                "First name is required"}
            </p>
          )}
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Last Name*</Form.Label>
          <Form.Control
            autoComplete="nope"
            type="text"
            placeholder="Last name"
            {...register("last_name")}
          />
          {errors.last_name && <p>{errors.last_name.message}</p>}
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Username*</Form.Label>
          <Form.Control
            autoComplete="nope"
            type="text"
            placeholder="username"
            {...register("username")}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            autoComplete="nope"
            type="email"
            placeholder="email"
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Password*</Form.Label>
          <Form.Control
            autoComplete="nope"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </Form.Group>
        <Form.Check className="mb-4">
          <Form.Check.Input
            value={agreement}
            onChange={() => setAgreement(!agreement)}
          />
          <Form.Check.Label>
            I agree to the{" "}
            {
              <a href="#" target="_blank">
                Terms and Conditions.
              </a>
            }
          </Form.Check.Label>
        </Form.Check>
        <div className="text-center">
          <Button
            variant="primary"
            className="px-5 text-uppercase"
            type="submit"
            disabled={!agreement}
          >
            Sign UP
          </Button>
        </div>
      </Form>
      {message && (
        <ToastContainer position="top-end" className="p-3">
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Body>{message ?? ""}</Toast.Body>
          </Toast>
        </ToastContainer>
      )}
    </React.Fragment>
  );
};
