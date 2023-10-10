import React, { useState } from "react";
import FormInput from "./Form/FormInput";

export const Register = ({ setShowLoginPopup, setShowRegisterPopup }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center px-4 bg-black bg-opacity-60 absolute z-40">
      <div className="w-full md:w-5/12 bg-white p-8 rounded-2xl relative">
        <div
          onClick={() => setShowRegisterPopup(false)}
          className="p-1 rounded-full bg-gray-200 text-gray-800 absolute z-50 right-4 top-4 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h1 className="text-3xl text-gray-800 font-semibold">
          Welcome to <span className="text-[#eb0612] font-bold">MovieList</span>
        </h1>
        <p className="font-semibold leading-5 text-sm mt-2 text-gray-500">
          Welcome to our movie database app! We are happy to invite you to
          explore the amazing world of movies.
        </p>
        <div className="flex flex-col gap-2 w-full mt-4">
          <FormInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <FormInput
            label="Username"
            type="text"
            placeholder="Enter your username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            error={errors.username}
          />
          <FormInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            error={errors.password}
          />
          <button className="py-2 px-4 mt-2 font-semibold bg-[#eb0612] rounded-md text-white w-full hover:scale-y-105">
            Register
          </button>
        </div>
        <div className="flex gap-2 justify-between items-center w-full my-2">
          <span className="w-full bg-gray-300 h-[1px]"></span>
          <span className="font-medium text-gray-600">Or</span>
          <span className="w-full bg-gray-300 h-[1px]"></span>
        </div>
        <button className="py-2 px-4 font-semibold bg-gray-200 rounded-md text-black w-full flex gap-2 items-center justify-center hover:scale-y-105">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 34 34"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M33.32 17.3864C33.32 16.181 33.2118 15.0219 33.0109 13.9091H17V20.4851H26.1491C25.755 22.6101 24.5573 24.4105 22.7568 25.616V29.8814H28.2509C31.4654 26.9219 33.32 22.5637 33.32 17.3864Z"
              fill="#4285F4"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 34.0001C21.59 34.0001 25.4382 32.4778 28.2509 29.8814L22.7568 25.616C21.2345 26.636 19.2873 27.2387 17 27.2387C12.5722 27.2387 8.82451 24.2482 7.48769 20.23H1.80814V24.6346C4.60541 30.1905 10.3545 34.0001 17 34.0001Z"
              fill="#34A853"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.48768 20.2301C7.14768 19.2101 6.9545 18.1206 6.9545 17.0001C6.9545 15.8796 7.14768 14.7901 7.48768 13.7701V9.36554H1.80812C0.656758 11.6605 -6.10352e-05 14.2569 -6.10352e-05 17.0001C-6.10352e-05 19.7433 0.656758 22.3397 1.80812 24.6347L7.48768 20.2301Z"
              fill="#FBBC05"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 6.76144C19.4959 6.76144 21.7368 7.61916 23.4986 9.30371L28.3745 4.4278C25.4304 1.68461 21.5823 6.10352e-05 17 6.10352e-05C10.3545 6.10352e-05 4.60541 3.80961 1.80814 9.36553L7.48769 13.7701C8.82451 9.75189 12.5722 6.76144 17 6.76144Z"
              fill="#EA4335"
            />
          </svg>
          <span className="text-gray-800">Connect with Google</span>
        </button>
        <div className="flex justify-center items-center w-full mt-3">
          <p className="text-center text-gray-600 font-medium">
            Already have an account?{" "}
            <span
              onClick={() => {
                setShowLoginPopup(true);
                setShowRegisterPopup(false);
              }}
              className="font-semibold underline text-[#eb0612] cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
