import React from 'react';

export const FileTableHeader = () => {
  const headers = [
    'File',
    'Type',
    'Size',
    'Modified',
    'Uploaded By',
    'Actions',
  ];

  return (
    <thead className="bg-gray-50">
      <tr>
        {headers.map((header, index) => (
          <th
            key={header}
            className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
              index === headers.length - 1 ? 'text-right' : ''
            }`}
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};