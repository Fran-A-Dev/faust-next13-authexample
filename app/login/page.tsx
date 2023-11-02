"use client";
import { useState } from "react";
import { loginAction } from "../my-account/actions";
// import { onLogin } from "@faustwp/experimental-app-router";

import { useFormState, useFormStatus } from "react-dom";

const initialFormState = {
  error: null,
};

export default function LoginPage() {
  // @ts-ignore
  const [state, formAction] = useFormState(loginAction, initialFormState);

  console.log(state);

  return (
    <>
      <div>
        <h2 className="flex justify-center">Login Here</h2>
        {state.error && (
          <p
            className="text-red-500"
            dangerouslySetInnerHTML={{ __html: state.error }}
          ></p>
        )}
      </div>
      <form action={formAction}>
        <fieldset>
          <label htmlFor="usernameEmail">Username or Email</label>
          <input type="name" name="usernameEmail" required />
        </fieldset>

        <fieldset>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </fieldset>

        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
}
