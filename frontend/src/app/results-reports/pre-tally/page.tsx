'use client';

import React, { useState, useEffect } from 'react';

const PreTallyDashboard = () => {
  const [totalVotes, setTotalVotes] = useState(0);
  const [quorumPercentage, setQuorumPercentage] = useState(0);
  const [timeLeft, setTimeLeft] = useState('Calculando...');

  useEffect(() => {
    // Simular dados em tempo real
    const interval = setInterval(() => {
      setTotalVotes(prev => prev + Math.floor(Math.random() * 5)); // Aumenta votos aleatoriamente
      setQuorumPercentage(Math.min(100, Math.floor(Math.random() * 100))); // Simula percentual de quórum

      // Simular tempo restante (ex: eleição termina em 24 horas)
      const electionEndTime = new Date();
      electionEndTime.setHours(electionEndTime.getHours() + 24);
      const now = new Date();
      const diff = electionEndTime.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft('Eleição Encerrada');
        clearInterval(interval);
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Painel de Acompanhamento da Eleição</h1>
        <p className="text-gray-600 mb-8 text-center">Acompanhe o progresso da eleição em tempo real.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-blue-50 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-blue-700">Total de Votos</h2>
            <p className="text-4xl font-bold text-blue-900 mt-2">{totalVotes}</p>
          </div>

          <div className="p-6 bg-green-50 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-green-700">Quórum</h2>
            <p className="text-4xl font-bold text-green-900 mt-2">{quorumPercentage}%</p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-yellow-700">Tempo Restante</h2>
            <p className="text-4xl font-bold text-yellow-900 mt-2">{timeLeft}</p>
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-8 text-center">Os resultados detalhados serão divulgados após o encerramento da eleição.</p>
      </div>
    </div>
  );
};

export default PreTallyDashboard;