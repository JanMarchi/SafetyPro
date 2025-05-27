'use client';

import React from 'react';

const CompaniesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Gestão de Empresas</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600">Aqui você poderá gerenciar as empresas cadastradas no sistema.</p>
        {/* Placeholder para a tabela de empresas, formulários de cadastro/edição, etc. */}
      </div>
    </div>
  );
};

export default CompaniesPage;