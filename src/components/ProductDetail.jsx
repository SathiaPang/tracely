import { competitorColors, categoryColors, getTag } from '../data/colors'

function ProductDetail({ product, onClose, onDelete }) {
    return (
        <div style={{
            backgroundColor: '#fff',
            border: '1px solid #e0ddd6',
            borderRadius: '10px',
            padding: '24px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '20px'
            }}>
                <div>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', fontWeight: 700, letterSpacing: '-0.3px' }}>{product.productName}</h3>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <span style={getTag(competitorColors, product.competitor)}>{product.competitor}</span>
                        <span style={getTag(categoryColors, product.category)}>{product.category}</span>
                        <span style={{ fontSize: '12px', color: '#aaa', marginLeft: '4px' }}>Tracked {product.dateTracked}</span>
                    </div>
                </div>
                <button onClick={onClose} style={{ background: '#f5f4f0', border: 'none', width: '32px', height: '32px', borderRadius: '8px', fontSize: '16px', cursor: 'pointer', color: '#888', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
            </div>

            {product.terms && (
                <div style={{ marginBottom: '16px' }}>
                    <div style={sectionLabel}>Terms & Conditions</div>
                    <p style={sectionText}>{product.terms}</p>
                </div>
            )}

            {product.observations && (
                <div style={{
                    marginBottom: '16px',
                    padding: '14px 16px',
                    background: 'linear-gradient(135deg, #f0f7f0 0%, #f5faf5 100%)',
                    borderRadius: '10px',
                    borderLeft: '3px solid #2C5F2D'
                }}>
                    <div style={{ ...sectionLabel, color: '#2C5F2D' }}>Observations</div>
                    <p style={sectionText}>{product.observations}</p>
                </div>
            )}

            {product.sourceUrl && (
                <div style={{ marginBottom: '16px' }}>
                    <div style={sectionLabel}>Source</div>
                    <a href={product.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#2C5F2D' }}>{product.sourceUrl}</a>
                </div>
            )}

            <div style={{ display: 'flex', gap: '8px', paddingTop: '14px', borderTop: '1px solid #f0ede6' }}>
                <button onClick={() => onDelete(product.id)} style={{ padding: '7px 16px', backgroundColor: '#fff', color: '#c53030', border: '1px solid #f0c4c4', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontFamily: 'inherit', fontWeight: 500, transition: 'all 0.15s' }}>Delete</button>
            </div>
        </div>
    )
}

const sectionLabel = {
    fontSize: '11px',
    fontWeight: 600,
    color: '#aaa',
    marginBottom: '6px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
}

const sectionText = {
    margin: 0,
    fontSize: '14px',
    lineHeight: '1.7',
    color: '#333'
}

export default ProductDetail