interface LanguageCardProps {
  name: string;
  description: string;
  features: string[];
  color: string;
}

export function LanguageCard({ name, description, features, color }: LanguageCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
      <div className={`inline-block px-4 py-2 rounded-lg mb-4 ${color}`}>
        <h3 className="text-white">{name}</h3>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <div>
        <p className="text-sm mb-2">学習内容：</p>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-600 text-sm flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
