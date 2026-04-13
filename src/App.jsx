import { useState } from 'react'
import Header from '../src/components/Header'
import ProductTracker from '../src/pages/ProductTracker'
import BMLog from '../src/pages/BMLog'

function App() {
  const [activeTab, setActiveTab] = useState('products')

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f0' }}>
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <main style={{ padding: '24px' }}>
        {activeTab === 'products' && <ProductTracker />}
        {activeTab === 'bm' && <BMLog />}
      </main>
    </div>
  )
}

export default App