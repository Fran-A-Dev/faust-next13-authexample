"use client";
import React from "react";

// Assuming you have typings installed for react-dom
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitButton: React.FC = () => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className="btn-primary">
      {pending ? <span>Submitting...</span> : <span>Submit</span>}
    </button>
  );
};

export default SubmitButton;