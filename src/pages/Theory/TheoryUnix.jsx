import React from 'react';

const TheoryUnix = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 border-b pb-4">UNIX</h1>
      
      <p className="text-gray-700 leading-relaxed">
        Todos os clusters geralmente são executados em distribuições GNU/Linux. 
        Portanto, é geralmente exigido um conhecimento mínimo de GNU/Linux e BASH para usá-los.
      </p>
      
      <p className="text-gray-700">
        Consulte o seguinte tutorial <a href="https://docs.alliancecan.ca/wiki/Linux_introduction" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Linux introduction</a> para 
        obter um guia básico sobre como começar com o Linux.
      </p>
    </div>
  );
};

export default TheoryUnix;
