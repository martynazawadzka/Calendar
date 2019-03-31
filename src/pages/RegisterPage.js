import React from "react";
import { Link } from "react-router-dom";

import TextInput from "../components/TextInput/TextInput";
import Button from "../components/Button/Button";

const RegisterPage = () => {
  return (
    <main>
      <section>
        <h1>Sign up</h1>
        <TextInput title="Email" />
        <TextInput title="User name" />
        <TextInput title="Password" />
        <TextInput title="Repeat password" />
        <Button text="Sign up" />
      </section>
      <section>
        <div>
          Do you already have an account in MyCalendar?
          <Button text="Sign in">
            <Link to="/login" />
          </Button>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
