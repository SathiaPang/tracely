import { competitorColors, categoryColors, activityColors, getTag } from '../data/colors'

function BMDetail({ entry, onClose, onDelete }) {
    return (
        <div style={{
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '16px'
            }}>
                <div>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>{entry.title}</h3>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <span style={getTag(competitorColors, entry.competitor)}>{entry.competitor}</span>
                        <span style={getTag(categoryColors, entry.category)}>{entry.category}</span>
                        <span style={getTag(activityColors, entry.activityType)}>{entry.activityType}</span>
                        {entry.week && <span style={{ fontSize: '13px', color: '#888' }}>Week: {entry.week}</span>}
                    </div>
                </div>
                <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', color: '#888', padding: '4px 8px' }}>✕</button>
            </div>

            {entry.summary && (
                <div style={{ marginBottom: '14px', padding: '12px', backgroundColor: '#f0f4f8', borderRadius: '8px', borderLeft: '3px solid #4a8bc2' }}>
                    <div style={sectionLabel}>Summary</div>
                    <p style={sectionText}>{entry.summary}</p>
                </div>
            )}

            {entry.sourceUrl && (
                <div style={{ marginBottom: '14px' }}>
                    <div style={sectionLabel}>Source</div>
                    <a href={entry.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#2563eb' }}>{entry.sourceUrl}</a>
                </div>
            )}

            <div style={{ display: 'flex', gap: '8px', paddingTop: '12px', borderTop: '1px solid #eee' }}>
                <button onClick={() => onDelete(entry.id)} style={{ padding: '6px 14px', backgroundColor: 'transparent', color: '#c53030', border: '1px solid #e8c4c4', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontFamily: 'inherit' }}>Delete</button>
            </div>
        </div>
    )
}

const sectionLabel = {
    fontSize: '13px',
    fontWeight: 600,
    color: '#888',
    marginBottom: '4px'
}

const sectionText = {
    margin: 0,
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#333'
}

export default BMDetail