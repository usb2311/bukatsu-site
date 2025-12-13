import { LucideIcon } from 'lucide-react';

interface ActivityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ActivityCard({ icon: Icon, title, description }: ActivityCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
