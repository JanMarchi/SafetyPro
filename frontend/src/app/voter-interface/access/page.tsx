'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const AccessPage = () => {
  const [key, setKey] = useState('');
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica para validar a chave
    if (key === 'chavevalida') { // Exemplo de validação
      router.push('/voter-interface/voting'); // Redireciona para a tela de votação
    } else {
      alert('Chave inválida!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Acesso à Votação</h1>
        <p className="text-gray-600 mb-8 text-center">Por favor, insira sua chave única de votação para prosseguir.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="votingKey" className="block text-sm font-medium text-gray-700">Chave de Votação</label>
            <input
              type="text"
              id="votingKey"
              name="votingKey"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Digite sua chave única"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Acessar Votação
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccessPage;