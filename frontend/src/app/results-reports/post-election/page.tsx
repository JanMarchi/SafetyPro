'use client';

import React from 'react';

interface CandidateResult {
  id: number;
  name: string;
  votes: number;
  elected: 'titular' | 'suplente' | null;
}

const mockResults: CandidateResult[] = [
  { id: 1, name: 'Candidato X', votes: 150, elected: 'titular' },
  { id: 2, name: 'Candidato Y', votes: 120, elected: 'titular' },
  { id: 3, name: 'Candidato Z', votes: 90, elected: 'suplente' },
  { id: 4, name: 'Candidato W', votes: 70, elected: null },
];

const PostElectionResultsPage = () => {
  const handleDownloadReport = (format: 'pdf' | 'csv') => {
    alert(`Baixando relatório em formato ${format.toUpperCase()}... (Funcionalidade a ser implementada)`);
    // Lógica para gerar e baixar o relatório PDF/CSV
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Resultados da Eleição</h1>
        <p className="text-gray-600 mb-8 text-center">Confira os resultados finais da eleição.</p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Candidatos Mais Votados</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-md">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">Candidato</th>
                  <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">Votos</th>
                  <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockResults.sort((a, b) => b.votes - a.votes).map((candidate) => (
                  <tr key={candidate.id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b text-gray-800">{candidate.name}</td>
                    <td className="py-2 px-4 border-b text-gray-800">{candidate.votes}</td>
                    <td className="py-2 px-4 border-b">
                      {candidate.elected === 'titular' && (
                        <span className="px-2 py-1 text-xs font-semibold leading-tight text-green-700 bg-green-100 rounded-full">Eleito (Titular)</span>
                      )}
                      {candidate.elected === 'suplente' && (
                        <span className="px-2 py-1 text-xs font-semibold leading-tight text-blue-700 bg-blue-100 rounded-full">Eleito (Suplente)</span>
                      )}
                      {candidate.elected === null && (
                        <span className="px-2 py-1 text-xs font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full">Não Eleito</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Relatórios</h2>
          <button
            onClick={() => handleDownloadReport('pdf')}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md inline-flex items-center mr-4"
          >
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            Download PDF
          </button>
          <button
            onClick={() => handleDownloadReport('csv')}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md inline-flex items-center"
          >
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 6H0v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6h-2V4H2v2zm0 2h16v10H2V8zm10 2h4v2h-4v-2zm0 4h4v2h-4v-2zm-6-4h4v2H6v-2zm0 4h4v2H6v-2z"/></svg>
            Download CSV
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostElectionResultsPage;