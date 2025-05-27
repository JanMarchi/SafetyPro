'use client';

import React from 'react';

const VotersListPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Visualização e Busca de Eleitores</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600">Aqui você poderá visualizar, buscar e exportar a lista de eleitores.</p>
        {/* Placeholder para filtros, tabela paginada e botões de exportação */}
        <div className="mt-4">
          <div className="flex space-x-4 mb-4">
            <input type="text" placeholder="Buscar por nome" className="p-2 border rounded-md" />
            <input type="text" placeholder="Filtrar por setor" className="p-2 border rounded-md" />
            <select className="p-2 border rounded-md">
              <option value="">Situação</option>
              <option value="active">Ativo</option>
              <option value="inactive">Inativo</option>
            </select>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Buscar</button>
          </div>
          <div className="border rounded-md p-4">
            <p className="text-gray-600">[Tabela de eleitores paginada aqui]</p>
          </div>
          <div className="mt-4 flex space-x-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">Exportar CSV</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">Exportar PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotersListPage;