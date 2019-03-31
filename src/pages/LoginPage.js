import React from "react";
import { Link } from "react-router-dom";

import TextInput from "../components/TextInput/TextInput";
import Button from "../components/Button/Button";

const LoginPage = () => {
  return (
    <main>
      <section>
        <h1>Log in</h1>
        <TextInput title="Email or user name" />
        <TextInput title="Password" />
        <Button text="Log in" />
      </section>
      <section>
        <div>
          Is it your first time in MyCalendar?
          <Button text="Create account">
            <Link to="/register" />
          </Button>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
