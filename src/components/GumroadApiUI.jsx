import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Button from './ui/Button'
import Input from './ui/Input'
import Select from './ui/Select'
import ResultBox from './ui/ResultBox'
import Tabs from './ui/Tabs'
import WebhookTable from './WebhookTable'
import Card from './ui/Card'

const tabs = [
  { value: 'get', label: 'GET Request' },
  { value: 'put', label: 'PUT Request' },
]

const resourceTypes = [
  { value: 'sale', label: 'sale' },
  { value: 'refund', label: 'refund' },
  { value: 'dispute', label: 'dispute' },
  { value: 'dispute_won', label: 'dispute_won' },
  { value: 'cancellation', label: 'cancellation' },
  { value: 'subscription_updated', label: 'subscription_updated' },
  { value: 'subscription_ended', label: 'subscription_ended' },
]

export default function GumroadApiUI() {
  const [activeTab, setActiveTab] = useState('get')
  const [accessToken, setAccessToken] = useState('')
  const [resourceType, setResourceType] = useState('sale')
  const [postUrl, setPostUrl] = useState('')
  const [result, setResult] = useState('')
  const [webhooks, setWebhooks] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleGetRequest = async () => {
    setIsLoading(true)
    setResult('')
    try {
      const response = await fetch(`https://api.gumroad.com/v2/resource_subscriptions?access_token=${accessToken}&resource_name=${resourceType}`)
      if (!response.ok) {
        const errorText = await response.text()
        let errorMessage = `HTTP Error ${response.status}`
        try {
          const errorJson = JSON.parse(errorText)
          errorMessage = ` ${errorJson.message || errorJson.error || errorText}`
        } catch {
          errorMessage = ` ${errorText || 'Invalid token or unauthorized access'}`
        }
        throw new Error(errorMessage)
      }
      const data = await response.json()
      setResult(JSON.stringify(data, null, 2))
      if (data.success && data.resource_subscriptions) {
        setWebhooks(data.resource_subscriptions)
      }
    } catch (error) {
      setResult(` ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  const handlePutRequest = async () => {
    setIsLoading(true)
    setResult('')
    try {
      const response = await fetch('https://api.gumroad.com/v2/resource_subscriptions', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_token: accessToken,
          resource_name: resourceType,
          post_url: postUrl,
        }),
      })
      if (!response.ok) {
        const errorText = await response.text()
        let errorMessage = `HTTP Error ${response.status}`
        try {
          const errorJson = JSON.parse(errorText)
          errorMessage = `${errorJson.message || errorJson.error || errorText}`
        } catch {
          errorMessage = `${errorText || 'Invalid token or unauthorized access'}`
        }
        throw new Error(errorMessage)
      }
      const data = await response.json()
      setResult(JSON.stringify(data, null, 2))
    } catch (error) {
      setResult(` ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-8 transition-colors duration-200">
      <Toaster position="top-right" />
      <Card className="p-4 sm:p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Gumroad API Request</h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Execute GET or PUT requests to Gumroad's resource subscriptions endpoint
            </p>
          </div>

          <div className="space-y-4">
            <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

            {activeTab === 'get' ? (
              <>
                <div className="space-y-4">
                  <Input
                    placeholder="Enter your access token"
                    value={accessToken}
                    onChange={(e) => setAccessToken(e.target.value)}
                    className="w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Select
                      value={resourceType}
                      onChange={(e) => setResourceType(e.target.value)}
                      options={resourceTypes}
                      className="w-full sm:w-40 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    />
                    <Button
                      onClick={handleGetRequest}
                      disabled={isLoading || !accessToken}
                      className="w-full sm:flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                    >
                      {isLoading ? 'Loading...' : 'Get Subscriptions'}
                    </Button>
                  </div>
                </div>
                {webhooks && (
                  <WebhookTable 
                    webhooks={webhooks} 
                    accessToken={accessToken}
                    onWebhooksChange={setWebhooks}
                    className="dark:bg-gray-800"
                  />
                )}
              </>
            ) : (
              <div className="space-y-4">
                <Input
                  placeholder="Enter your access token"
                  value={accessToken}
                  onChange={(e) => setAccessToken(e.target.value)}
                  className="w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
                <div className="flex flex-col sm:flex-row gap-3">
                  <Select
                    value={resourceType}
                    onChange={(e) => setResourceType(e.target.value)}
                    options={resourceTypes}
                    className="w-full sm:w-40 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                  <Input
                    placeholder="Enter post URL"
                    value={postUrl}
                    onChange={(e) => setPostUrl(e.target.value)}
                    className="w-full sm:flex-1 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                </div>
                <div>
                  <Button
                    onClick={handlePutRequest}
                    disabled={isLoading || !accessToken || !postUrl}
                    className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                  >
                    {isLoading ? 'Executing...' : 'Execute PUT'}
                  </Button>
                </div>
              </div>
            )}
          </div>

          {result && (
            <div className="space-y-2">
              <p className="text-gray-900 dark:text-white font-medium">Result:</p>
              <ResultBox content={result} className="dark:bg-gray-800 dark:text-white" />
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
