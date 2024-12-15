import React from 'react';

const WebhookTable = ({ webhooks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Resource Name</th>
            <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Post URL</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300">
          {webhooks.map((webhook) => (
            <tr key={webhook.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{webhook.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{webhook.resource_name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{webhook.post_url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WebhookTable;
