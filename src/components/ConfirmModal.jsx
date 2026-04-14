function ConfirmModal({ message, onConfirm, onCancel }) {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            backdropFilter: 'blur(2px)'
        }}
            onClick={onCancel}
        >
            <div
                style={{
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    padding: '24px',
                    width: '360px',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                    animation: 'fadeIn 0.15s ease-out'
                }}
                onClick={e => e.stopPropagation()}
            >
                <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 700 }}>Are you sure?</h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: '#666', lineHeight: '1.5' }}>{message}</p>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                    <button onClick={onCancel} style={{
                        padding: '8px 18px',
                        backgroundColor: '#f5f4f0',
                        color: '#555',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontFamily: 'inherit',
                        fontWeight: 500
                    }}>
                        Cancel
                    </button>
                    <button onClick={onConfirm} style={{
                        padding: '8px 18px',
                        backgroundColor: '#c53030',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontFamily: 'inherit',
                        fontWeight: 600
                    }}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal