'use client';

import React from 'react';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard da Empresa</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Card: Eleições Ativas, Agendadas e Finalizadas */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Status das Eleições</h2>
          <p className="text-gray-600">Eleições Ativas: 0</p>
          <p className="text-gray-600">Eleições Agendadas: 0</p>
          <p className="text-gray-600">Eleições Finalizadas: 0</p>
        </div>

        {/* Card: Gráfico de Participação por Eleição */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Participação por Eleição</h2>
          <p className="text-gray-600">[Gráfico de participação aqui]</p>
        </div>

        {/* Card: Alertas de Prazos, Pendências e Irregularidades */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Alertas</h2>
          <p className="text-gray-600">Nenhum alerta no momento.</p>
        </div>

        {/* Card: Total de Votos Computados */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Total de Votos</h2>
          <p className="text-gray-600">Votos Computados: 0</p>
        </div>

        {/* Card: Quórum Alcançado (% de Votantes) */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Quórum</h2>
          <p className="text-gray-600">Quórum Alcançado: 0%</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600">Este é o dashboard da empresa, onde serão exibidas informações relevantes sobre as eleições.</p>
      </div>
    </div>
  );
};

export default DashboardPage;