import React from 'react';

const TheoryIntro = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 border-b pb-4">O que é um cluster de computadores?</h1>
      
      <p className="text-gray-700 leading-relaxed">
        Um <a href="https://pt.wikipedia.org/wiki/Cluster" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">cluster de computadores</a> é um conjunto
        de computadores conectados de forma solta ou estreita que trabalham juntos para que,
        em muitos aspectos, possam ser vistos como um único sistema.
      </p>
    </div>
  );
};

export default TheoryIntro;
