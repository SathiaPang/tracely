import { useState, useEffect } from 'react'
import { getBMEntries, addBMEntry, deleteBMEntry } from '../data/dataLayer'
import { competitorColors, categoryColors, activityColors, getTag } from '../data/colors'
import AddBMForm from '../components/AddBMForm'
import FilterBar from '../components/FilterBar'
import BMDetail from '../components/BMDetail'
import ConfirmModal from '../components/ConfirmModal'

function BMLog() {
    const [entries, setEntries] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [selectedId, setSelectedId] = useState(null)
    const [hoveredId, setHoveredId] = useState(null)
    const [deleteId, setDeleteId] = useState(null)
    const [filters, setFilters] = useState({
        search: '',
        category: '',
        competitor: ''
    })

    useEffect(() => {
        setEntries(getBMEntries())
    }, [])

    function handleSave(formData) {
        addBMEntry(formData)
        setEntries(getBMEntries())
        setShowForm(false)
    }

    function handleDelete() {
        deleteBMEntry(deleteId)
        setEntries(getBMEntries())
        setSelectedId(null)
        setDeleteId(null)
    }

    const filtered = entries.filter(e => {
        if (filters.category && e.category !== filters.category) return false
        if (filters.competitor && e.competitor !== filters.competitor) return false
        if (filters.search) {
            const term = filters.search.toLowerCase()
            const searchable = [
                e.title, e.competitor, e.category,
                e.activityType, e.summary, e.week
            ].join(' ').toLowerCase()
            if (!searchable.includes(term)) return false
        }
        return true
    })

    const selectedEntry = entries.find(e => e.id === selectedId)

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px'
            }}>
                <div>
                    <h2 style={{ margin: 0, fontSize: '22px', fontWeight: 700, letterSpacing: '-0.5px' }}>Brand & Marketing Log</h2>
                    <p style={{ margin: '2px 0 0', fontSize: '13px', color: '#999' }}>
                        Showing {filtered.length} of {entries.length} entr{entries.length !== 1 ? 'ies' : 'y'}
                    </p>
                </div>
                {!showForm && (
                    <button onClick={() => setShowForm(true)} style={addButtonStyle}>+ Add Entry</button>
                )}
            </div>

            {showForm && (
                <AddBMForm
                    onSave={handleSave}
                    onCancel={() => setShowForm(false)}
                />
            )}

            <FilterBar filters={filters} onFilterChange={setFilters} />

            {filtered.length === 0 ? (
                <div style={{
                    padding: '56px',
                    textAlign: 'center',
                    color: '#888',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    border: '1px dashed #d0cdc4'
                }}>
                    <p style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 500 }}>
                        {entries.length === 0 ? 'No entries yet' : 'No entries match your filters'}
                    </p>
                    <p style={{ margin: 0, fontSize: '14px', color: '#aaa' }}>
                        {entries.length === 0
                            ? 'Click "+ Add Entry" to log a competitor activity'
                            : 'Try adjusting your filters'
                        }
                    </p>
                </div>
            ) : (
                <div style={{
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: '1px solid #e0ddd6',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
                }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Title</th>
                                <th style={thStyle}>Competitor</th>
                                <th style={thStyle}>Category</th>
                                <th style={thStyle}>Type</th>
                                <th style={thStyle}>Week</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(entry => (
                                <tr
                                    key={entry.id}
                                    onClick={() => setSelectedId(selectedId === entry.id ? null : entry.id)}
                                    onMouseEnter={() => setHoveredId(entry.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    style={{
                                        borderTop: '1px solid #f0ede6',
                                        cursor: 'pointer',
                                        backgroundColor:
                                            selectedId === entry.id ? '#f7f6f2'
                                                : hoveredId === entry.id ? '#fafaf8'
                                                    : 'transparent',
                                        transition: 'background-color 0.15s'
                                    }}
                                >
                                    <td style={tdStyle}><span style={{ fontWeight: 600 }}>{entry.title}</span></td>
                                    <td style={tdStyle}><span style={getTag(competitorColors, entry.competitor)}>{entry.competitor}</span></td>
                                    <td style={tdStyle}><span style={getTag(categoryColors, entry.category)}>{entry.category}</span></td>
                                    <td style={tdStyle}><span style={getTag(activityColors, entry.activityType)}>{entry.activityType}</span></td>
                                    <td style={{ ...tdStyle, color: '#999', fontSize: '13px' }}>{entry.week}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {selectedEntry && (
                <div style={{ marginTop: '16px' }}>
                    <BMDetail
                        entry={selectedEntry}
                        onClose={() => setSelectedId(null)}
                        onDelete={id => setDeleteId(id)}
                    />
                </div>
            )}

            {deleteId && (
                <ConfirmModal
                    message="This entry will be permanently deleted. This action cannot be undone."
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteId(null)}
                />
            )}
        </div>
    )
}

const addButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#2C5F2D',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 600,
    fontFamily: 'inherit',
    boxShadow: '0 1px 3px rgba(44,95,45,0.3)'
}

const thStyle = {
    textAlign: 'left',
    padding: '12px 18px',
    fontSize: '11px',
    fontWeight: 600,
    color: '#aaa',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    backgroundColor: '#fafaf7',
    borderBottom: '1px solid #f0ede6'
}

const tdStyle = {
    padding: '14px 18px',
    fontSize: '14px'
}

export default BMLog