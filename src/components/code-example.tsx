import React from 'react';

export interface CodeExampleProps {
  language: string;
  title: string;
  code: string;
  description: string;
}

export const CodeExample: React.FC<CodeExampleProps> = ({ language, title, code, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gray-100 p-4 border-b">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-600">{language}</span>
          <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">{title}</span>
        </div>
      </div>
      <div className="p-6">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto mb-4">
          <code className="text-sm">{code}</code>
        </pre>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};
