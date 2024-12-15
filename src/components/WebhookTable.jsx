import React from 'react';
import toast from 'react-hot-toast';

const WebhookTable = ({ webhooks, accessToken, onWebhooksChange, className = "" }) => {
  if (!webhooks?.length) {
    return null;
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://api.gumroad.com/v2/resource_subscriptions/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_token: accessToken,
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast.success('Webhook deleted successfully');
        // Remove the webhook from the table
        onWebhooksChange(webhooks.filter(webhook => webhook.id !== id));
      } else {
        toast.error(data.message || 'Failed to delete webhook');
      }
    } catch (error) {
      toast.error('Error deleting webhook: ' + error.message);
    }
  };

  return (
    <div className={`overflow-hidden rounded-lg border border-gray-200 ${className}`}>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resource Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Post URL</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {webhooks.map((webhook) => (
              <tr key={webhook.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleDelete(webhook.id)}
                    className="text-sm text-red-600 hover:text-red-900 font-medium transition-colors"
                  >
                    Delete
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{webhook.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{webhook.resource_name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate max-w-md">{webhook.post_url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WebhookTable;
