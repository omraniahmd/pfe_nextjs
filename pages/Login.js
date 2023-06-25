import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const router = useRouter();

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setIsValidEmail(inputValue.includes("@"));
  };

  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    setPassword(inputValue);
    setIsValidPassword(inputValue.length >= 6); // Example: Password must be at least 6 characters long
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      setIsValidEmail(email.trim() !== "");
      setIsValidPassword(password.trim() !== "");
    } else if (isValidEmail && isValidPassword) {
      // Perform your login authentication logic here
      // Assuming the login is successful, redirect the user to Itemname.js
      router.push("/Itemname");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 mb-4"
        viewBox="0 0 20 20"
        fill="currentColor"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-1.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm0-9a1 1 0 100-2 1 1 0 000 2zm0 9a1 1 0 100-2 1 1 0 000 2zm0-6a1 1 0 100-2 1 1 0 000 2zm0 2a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </motion.svg>
      <motion.h1
        className="text-2xl font-bold mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Login
      </motion.h1>
      <motion.form
        className="flex flex-col gap-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        onSubmit={handleLogin}
      >
        <input
          type="email"
          placeholder="Email"
          className={`px-4 py-2 rounded-lg border ${
            !isValidEmail && email.trim() === "" && "border-red-500"
          } focus:outline-none focus:border-blue-500`}
          value={email}
          onChange={handleEmailChange}
        />
        {!isValidEmail && email.trim() === "" && (
          <p className="text-red-500">Veuillez saisir votre adresse email.</p>
        )}
        <input
          type="password"
          placeholder="Password"
          className={`px-4 py-2 rounded-lg border ${
            !isValidPassword && password.trim() === "" && "border-red-500"
          } border-gray-300 focus:outline-none focus:border-blue-500`}
          value={password}
          onChange={handlePasswordChange}
        />
        {!isValidPassword && password.trim() === "" && (
          <p className="text-red-500">Veuillez saisir votre mot de passe.</p>
        )}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
        >
          Login
        </button>
        <Link href="/Passwordreset" className="text-blue-500 underline">
          Mot de passe oublié ?
        </Link>
      </motion.form>
    </div>
  );
};

export default Login;
