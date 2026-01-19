import React from 'react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-4">Dashboard</h1>
      
      <p className="text-gray-700 dark:text-gray-300">
        Monitoramento do cluster Apuana.
      </p>

      <div className="w-full aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <iframe 
          src="https://lookerstudio.google.com/embed/reporting/4e7493f2-053e-4729-a2ce-d55969f1bdbc/page/0WTPD" 
          frameBorder="0" 
          style={{ border: 0, width: '100%', height: '100%' }} 
          allowFullScreen
          title="Cluster Dashboard"
        ></iframe>
      </div>
    </div>
  );
};

export default Dashboard;
