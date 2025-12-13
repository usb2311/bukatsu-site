interface CodeExampleProps {
  language: string;
  title: string;
  code: string;
  description: string;
}

export function CodeExample({ language, title, code, description }: CodeExampleProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between">
        <span>{title}</span>
        <span className="text-sm bg-blue-600 px-3 py-1 rounded">{language}</span>
      </div>
      <div className="p-4">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{code}</code>
        </pre>
        <p className="text-gray-600 mt-4">{description}</p>
      </div>
    </div>
  );
}
