import React, { useState } from "react";
import { motion } from "framer-motion";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isResetSuccessful, setIsResetSuccessful] = useState(false);

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
  };

  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    setPassword(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour réinitialiser le mot de passe

    // Après la réinitialisation réussie, mettez à jour l'état pour afficher un message de succès
    setIsResetSuccessful(true);
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
        Réinitialisation du mot de passe
      </motion.h1>
      {isResetSuccessful ? (
        <motion.p
          className="text-green-500 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Votre mot de passe a été réinitialisé avec succès.
        </motion.p>
      ) : (
        <motion.form
          className="flex flex-col gap-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Nouveau mot de passe"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            Réinitialiser le mot de passe
          </button>
        </motion.form>
      )}
    </div>
  );
};

export default PasswordReset;
