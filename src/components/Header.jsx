function Header({ activeTab, onTabChange }) {
    return (
        <header style={{
            background: '#1a1a18',
            padding: '0 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '56px'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                <h1 style={{ margin: 0, fontSize: '18px', color: '#fff', letterSpacing: '-0.5px' }}>
                    <span style={{ fontWeight: 700 }}>Tracely</span>
                    <span style={{ color: '#666', fontWeight: 400, fontSize: '12px', marginLeft: '10px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>CI Hub</span>
                </h1>

                <nav style={{ display: 'flex', gap: '2px' }}>
                    {[
                        { key: 'products', label: 'Product Tracker' },
                        { key: 'bm', label: 'B&M Log' }
                    ].map(tab => (
                        <button
                            key={tab.key}
                            onClick={() => onTabChange(tab.key)}
                            style={{
                                padding: '6px 16px',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontSize: '13px',
                                fontWeight: activeTab === tab.key ? 600 : 400,
                                backgroundColor: activeTab === tab.key ? 'rgba(255,255,255,0.12)' : 'transparent',
                                color: activeTab === tab.key ? '#fff' : '#777',
                                fontFamily: 'inherit',
                                transition: 'all 0.15s'
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>

            <div style={{ fontSize: '12px', color: '#555' }}>
                Smart Axiata · CBO Team
            </div>
        </header>
    )
}

export default Header