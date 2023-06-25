import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ItemName = () => {
  const [isAddingMaintenanceWork, setIsAddingMaintenanceWork] = useState(false);
  const [isAddingSurveillanceWork, setIsAddingSurveillanceWork] = useState(false);
  const [maintenanceWorkText, setMaintenanceWorkText] = useState('');
  const [surveillanceWorkText, setSurveillanceWorkText] = useState('');
  const [maintenanceWorkList, setMaintenanceWorkList] = useState([]);
  const [surveillanceWorkList, setSurveillanceWorkList] = useState([]);
  const [editingMaintenanceIndex, setEditingMaintenanceIndex] = useState(null);
  const [editingSurveillanceIndex, setEditingSurveillanceIndex] = useState(null);

  const handleAddMaintenanceWork = () => {
    setIsAddingMaintenanceWork(true);
  };

  const handleAddSurveillanceWork = () => {
    setIsAddingSurveillanceWork(true);
  };

  const handleSaveMaintenanceWork = () => {
    if (maintenanceWorkText.trim() !== '') {
      if (editingMaintenanceIndex !== null) {
        setMaintenanceWorkList((prevList) =>
          prevList.map((work, index) =>
            index === editingMaintenanceIndex ? maintenanceWorkText : work
          )
        );
        setEditingMaintenanceIndex(null);
      } else {
        setMaintenanceWorkList((prevList) => [...prevList, maintenanceWorkText]);
      }
      setMaintenanceWorkText('');
      setIsAddingMaintenanceWork(false);
    }
  };

  const handleSaveSurveillanceWork = () => {
    if (surveillanceWorkText.trim() !== '') {
      if (editingSurveillanceIndex !== null) {
        setSurveillanceWorkList((prevList) =>
          prevList.map((work, index) =>
            index === editingSurveillanceIndex ? surveillanceWorkText : work
          )
        );
        setEditingSurveillanceIndex(null);
      } else {
        setSurveillanceWorkList((prevList) => [...prevList, surveillanceWorkText]);
      }
      setSurveillanceWorkText('');
      setIsAddingSurveillanceWork(false);
    }
  };

  const handleCancelMaintenanceWork = () => {
    setMaintenanceWorkText('');
    setIsAddingMaintenanceWork(false);
    setEditingMaintenanceIndex(null);
  };

  const handleCancelSurveillanceWork = () => {
    setSurveillanceWorkText('');
    setIsAddingSurveillanceWork(false);
    setEditingSurveillanceIndex(null);
  };

  const handleMaintenanceWorkTextChange = (event) => {
    setMaintenanceWorkText(event.target.value);
  };

  const handleSurveillanceWorkTextChange = (event) => {
    setSurveillanceWorkText(event.target.value);
  };

  const handleEditMaintenanceWork = (index) => {
    const work = maintenanceWorkList[index];
    setMaintenanceWorkText(work);
    setIsAddingMaintenanceWork(true);
    setEditingMaintenanceIndex(index);
  };

  const handleEditSurveillanceWork = (index) => {
    const work = surveillanceWorkList[index];
    setSurveillanceWorkText(work);
    setIsAddingSurveillanceWork(true);
    setEditingSurveillanceIndex(index);
  };

  const handleDeleteMaintenanceWork = (index) => {
    setMaintenanceWorkList((prevList) => prevList.filter((_, i) => i !== index));
  };

  const handleDeleteSurveillanceWork = (index) => {
    setSurveillanceWorkList((prevList) => prevList.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="border-b-2 mb-4 p-2">
        <h1 className="text-2xl font-bold mb-2">Maintenance</h1>
        {!isAddingMaintenanceWork ? (
          <motion.button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            onClick={handleAddMaintenanceWork}
          >
            Ajouter Travail
          </motion.button>
        ) : (
          <>
            <textarea
              value={maintenanceWorkText}
              onChange={handleMaintenanceWorkTextChange}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <div className="flex gap-4">
              <motion.button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                onClick={handleSaveMaintenanceWork}
              >
                Enregistrer
              </motion.button>
              <motion.button
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
                onClick={handleCancelMaintenanceWork}
              >
                Annuler
              </motion.button>
            </div>
          </>
        )}
        {maintenanceWorkList.length > 0 && (
          <table className="border-collapse border border-gray-300 mt-2">
            <tbody>
              {maintenanceWorkList.map((work, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {index === editingMaintenanceIndex ? (
                      <textarea
                        value={maintenanceWorkText}
                        onChange={handleMaintenanceWorkTextChange}
                        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                      />
                    ) : (
                      work
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {index === editingMaintenanceIndex ? (
                      <>
                        <button
                          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-lg mr-2"
                          onClick={handleSaveMaintenanceWork}
                        >
                          Enregistrer
                        </button>
                        <button
                          className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-2 rounded-lg"
                          onClick={handleCancelMaintenanceWork}
                        >
                          Annuler
                        </button>
                      </>
                    ) : (
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-lg"
                        onClick={() => handleEditMaintenanceWork(index)}
                      >
                        Modifier
                      </button>
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-lg"
                      onClick={() => handleDeleteMaintenanceWork(index)}
                    >
                      Supprimer
                    </button>
                    <Link href="/Workvalidation">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-lg ml-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="border-b-2 mb-4 p-2">
        <h1 className="text-2xl font-bold mb-2">Surveillance</h1>
        {!isAddingSurveillanceWork ? (
          <motion.button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            onClick={handleAddSurveillanceWork}
          >
            Ajouter Travail
          </motion.button>
        ) : (
          <>
            <textarea
              value={surveillanceWorkText}
              onChange={handleSurveillanceWorkTextChange}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <div className="flex gap-4">
              <motion.button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                onClick={handleSaveSurveillanceWork}
              >
                Enregistrer
              </motion.button>
              <motion.button
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
                onClick={handleCancelSurveillanceWork}
              >
                Annuler
              </motion.button>
            </div>
          </>
        )}
        {surveillanceWorkList.length > 0 && (
          <table className="border-collapse border border-gray-300 mt-2">
            <tbody>
              {surveillanceWorkList.map((work, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {index === editingSurveillanceIndex ? (
                      <textarea
                        value={surveillanceWorkText}
                        onChange={handleSurveillanceWorkTextChange}
                        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                      />
                    ) : (
                      work
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {index === editingSurveillanceIndex ? (
                      <>
                        <button
                          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-lg mr-2"
                          onClick={handleSaveSurveillanceWork}
                        >
                          Enregistrer
                        </button>
                        <button
                          className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-2 rounded-lg"
                          onClick={handleCancelSurveillanceWork}
                        >
                          Annuler
                        </button>
                      </>
                    ) : (
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-lg"
                        onClick={() => handleEditSurveillanceWork(index)}
                      >
                        Modifier
                      </button>
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-lg"
                      onClick={() => handleDeleteSurveillanceWork(index)}
                    >
                      Supprimer
                    </button>
                    <Link href="/Workvalidation">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-lg ml-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ItemName;
