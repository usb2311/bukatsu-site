import React from 'react';

export interface LanguageCardProps {
  name: string;
  description: string;
  features: string[];
  color: string;
}

export const LanguageCard: React.FC<LanguageCardProps> = ({ name, description, features, color }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className={`${color} h-32 flex items-center justify-center`}>
        <h3 className="text-2xl font-bold text-white">{name}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-800">主な学習項目：</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-700 flex items-start">
                <span className={`${color} w-2 h-2 rounded-full mr-2 mt-1.5 flex-shrink-0`}></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
