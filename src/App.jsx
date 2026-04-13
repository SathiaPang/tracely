import { useState } from 'react'
import Header from './components/Header'
import ProductTracker from './pages/ProductTracker'
import BMLog from './pages/BMLog'

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