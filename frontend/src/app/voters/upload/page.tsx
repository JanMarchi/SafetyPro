'use client';

import React from 'react';

const VotersUploadPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Upload em Massa de Eleitores</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600">Aqui você poderá fazer o upload de um arquivo CSV/Excel com os dados dos eleitores.</p>
        {/* Placeholder para o formulário de upload de arquivo */}
        <div className="mt-4">
          <input type="file" accept=".csv, .xls, .xlsx" className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-indigo-50 file:text-indigo-700
            hover:file:bg-indigo-100"
          />
          <button className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Realizar Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default VotersUploadPage;