import React from 'react';

export interface ActivityCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <Icon className="w-12 h-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
