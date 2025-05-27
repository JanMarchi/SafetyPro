'use client';

import React from 'react';

const CreateElectionPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Criar Nova Eleição</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form className="space-y-4">
          <div>
            <label htmlFor="electionName" className="block text-sm font-medium text-gray-700">Nome da Eleição</label>
            <input type="text" id="electionName" name="electionName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Ex: CIPA 2025" />
          </div>
          <div>
            <label htmlFor="votingPeriodStart" className="block text-sm font-medium text-gray-700">Período de Votação (Início)</label>
            <input type="datetime-local" id="votingPeriodStart" name="votingPeriodStart" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="votingPeriodEnd" className="block text-sm font-medium text-gray-700">Período de Votação (Fim)</label>
            <input type="datetime-local" id="votingPeriodEnd" name="votingPeriodEnd" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="titularVacancies" className="block text-sm font-medium text-gray-700">Vagas para Titulares</label>
            <input type="number" id="titularVacancies" name="titularVacancies" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" min="0" />
          </div>
          <div>
            <label htmlFor="substituteVacancies" className="block text-sm font-medium text-gray-700">Vagas para Suplentes</label>
            <input type="number" id="substituteVacancies" name="substituteVacancies" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" min="0" />
          </div>
          <div>
            <label htmlFor="voteType" className="block text-sm font-medium text-gray-700">Tipo de Voto</label>
            <select id="voteType" name="voteType" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
              <option value="single">Único</option>
              <option value="multiple">Múltiplo</option>
            </select>
          </div>
          <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Criar Eleição
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateElectionPage;