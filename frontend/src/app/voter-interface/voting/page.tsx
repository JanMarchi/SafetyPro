'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Candidate {
  id: number;
  name: string;
  photo: string;
  bio: string;
}

const mockCandidates: Candidate[] = [
  {
    id: 1,
    name: 'Candidato A',
    photo: '/path/to/photoA.jpg', // Substituir por caminho real ou URL
    bio: 'Biografia curta do Candidato A.',
  },
  {
    id: 2,
    name: 'Candidato B',
    photo: '/path/to/photoB.jpg', // Substituir por caminho real ou URL
    bio: 'Biografia curta do Candidato B.',
  },
  // Adicionar mais candidatos conforme necessário
];

const VotingPage = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null);
  const router = useRouter();

  const handleVote = () => {
    if (selectedCandidate !== null) {
      // Lógica para registrar o voto (enviar para o backend)
      console.log(`Voto confirmado para o candidato ID: ${selectedCandidate}`);
      // Após registrar o voto e garantir que a chave expire:
      router.push('/voter-interface/success'); // Redireciona para a tela de sucesso
    } else {
      alert('Por favor, selecione um candidato antes de confirmar.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Tela de Votação</h1>
        <p className="text-gray-600 mb-8 text-center">Selecione seu candidato e confirme seu voto.</p>

        <div className="space-y-6">
          {mockCandidates.map((candidate) => (
            <div
              key={candidate.id}
              className={`flex items-center p-4 border rounded-md cursor-pointer ${selectedCandidate === candidate.id ? 'border-indigo-500 ring-2 ring-indigo-500' : 'border-gray-300'}`}
              onClick={() => setSelectedCandidate(candidate.id)}
            >
              <img
                src={candidate.photo}
                alt={`Foto de ${candidate.name}`}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="flex-grow">
                <h2 className="text-lg font-semibold text-gray-800">{candidate.name}</h2>
                <p className="text-gray-600 text-sm">{candidate.bio}</p>
              </div>
              <input
                type="radio"
                name="candidate"
                value={candidate.id}
                checked={selectedCandidate === candidate.id}
                onChange={() => setSelectedCandidate(candidate.id)}
                className="form-radio h-5 w-5 text-indigo-600"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleVote}
          className="mt-8 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Confirmar Voto
        </button>
      </div>
    </div>
  );
};

export default VotingPage;