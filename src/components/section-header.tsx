import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
      {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
    </div>
  );
};
