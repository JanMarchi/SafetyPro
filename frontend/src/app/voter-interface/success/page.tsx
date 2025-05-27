'use client';

import React from 'react';

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Voto Registrado com Sucesso!</h1>
        <p className="text-gray-700 text-lg mb-6">Seu voto foi registrado com sucesso. Obrigado por participar!</p>
        <p className="text-gray-500 text-sm">Você pode fechar esta janela agora.</p>
      </div>
    </div>
  );
};

export default SuccessPage;