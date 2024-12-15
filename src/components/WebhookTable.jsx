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
    <div className={`overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Resource Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Post URL</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
            {webhooks.map((webhook) => (
              <tr key={webhook.id} className="hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(webhook.id)}
                    className="text-sm text-red-600 hover:text-red-900 dark:text-red-500 dark:hover:text-red-400 font-medium transition-colors"
                  >
                    Delete
                  </button>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{webhook.id}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">{webhook.resource_name}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 break-words">{webhook.post_url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WebhookTable;
