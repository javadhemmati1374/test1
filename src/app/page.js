"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

// Redux action
const submitForm = (data) => ({
  type: "SUBMIT_FORM",
  payload: data,
});

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm({ firstName, lastName }));
    router.push("/result");
  };

  return (
    <div className="container mx-auto h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-[300px] p-6 border rounded-2xl bg-gray-100"
      >
        <div className="mb-5">
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            نام
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
            placeholder="نام"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            نام خانوادگی
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
            placeholder="نام خانوادگی"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white mt-4 w-[100%] bg-blue-700 hover:bg-blue-800 font-bold rounded-lg text-sm px-5 py-2.5"
        >
          ارسال
        </button>
      </form>
    </div>
  );
};

export default Form;
