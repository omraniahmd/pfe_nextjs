// Importation des dépendances
import { useState } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Composant WorkValidation
export default function WorkValidation() {
  // États pour les valeurs des champs de texte
  const [description, setDescription] = useState('');
  const [endDate, setEndDate] = useState(new Date());
  const [name, setName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [carCode, setCarCode] = useState('');
  const [remarks, setRemarks] = useState('');

  // Fonction pour envoyer les données par email
  function sendEmail() {
    // Validation des champs obligatoires (vous pouvez ajouter d'autres vérifications si nécessaire)
    if (!description || !endDate || !name || !employeeId) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Construction du corps de l'email
    const emailBody = `Description du travail : ${description}
Date de fin de travail : ${endDate}
Nom de l'agent : ${name}
Matricule de l'agent : ${employeeId}
Code de la voiture utilisée : ${carCode}
Remarques : ${remarks}`;

    // Envoi de l'email (cette étape dépend de votre configuration d'envoi d'email)
    // Remplacez "adresse@email.com" par l'adresse email de destination
    // et "Objet de l'email" par l'objet souhaité pour l'email
    const emailTo = 'adresse@email.com';
    const emailSubject = 'Objet de l\'email';
    const emailLink = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = emailLink;
  }

  return (
    <div className="bg-gray-400 p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Formulaire de validation du travail</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-center font-bold text-lg">Description du travail :</label>
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 w-full"
          />
        </div>
        <div>
          <label className="block text-center font-bold text-lg">Date de fin de travail :</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 w-full"
          />
        </div>
        <div>
          <label className="block text-center font-bold text-lg">Nom de(s) l'agent :</label>
          <textarea
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 w-full"
          />
        </div>
        <div>
          <label className="block text-center font-bold text-lg">Matricule de(s) l'agent :</label>
          <textarea
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 w-full"
          />
        </div>
        <div>
          <label className="block text-center font-bold text-lg">Code de la voiture utilisée :</label>
          <textarea
            type="text"
            value={carCode}
            onChange={(e) => setCarCode(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 w-full"
          />
        </div>
        <div>
          <label className="block text-center font-bold text-lg">Remarques :</label>
          <textarea
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 w-full"
          ></textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={sendEmail}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded  bottom-4"
        >
          Envoyer
        </motion.button>
      </div>
    </div>
  );
}
