import { competitorColors, categoryColors } from '../data/colors'

const competitors = ['Cellcard', 'Metfone', 'MekongNet', 'Ezecom']
const categories = ['Mobility', 'Connectivity', 'ICT']

function FilterBar({ filters, onFilterChange }) {

    function toggleFilter(field, value) {
        const current = filters[field]
        onFilterChange({
            ...filters,
            [field]: current === value ? '' : value
        })
    }

    const hasFilters = filters.search || filters.category || filters.competitor

    return (
        <div style={{
            position: 'sticky',
            top: '0',
            zIndex: 10,
            paddingBottom: '12px',
            marginBottom: '4px'
        }}>
            {/* Search row */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '10px'
            }}>
                <div style={{
                    flex: 1,
                    position: 'relative'
                }}>
                    <span style={{
                        position: 'absolute',
                        left: '14px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#bbb',
                        fontSize: '15px',
                        pointerEvents: 'none'
                    }}>⌕</span>
                    <input
                        type="text"
                        placeholder="Search across all fields..."
                        value={filters.search}
                        onChange={e => onFilterChange({ ...filters, search: e.target.value })}
                        style={{
                            width: '100%',
                            padding: '11px 14px 11px 38px',
                            border: '1px solid #ddd',
                            borderRadius: '10px',
                            fontSize: '14px',
                            fontFamily: 'inherit',
                            backgroundColor: '#fff',
                            outline: 'none',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                            transition: 'border-color 0.15s, box-shadow 0.15s'
                        }}
                    />
                </div>
                {hasFilters && (
                    <button
                        onClick={() => onFilterChange({ search: '', category: '', competitor: '' })}
                        style={{
                            padding: '8px 14px',
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            backgroundColor: '#fff',
                            color: '#999',
                            cursor: 'pointer',
                            fontSize: '12px',
                            fontFamily: 'inherit',
                            fontWeight: 500,
                            whiteSpace: 'nowrap'
                        }}
                    >
                        Clear all
                    </button>
                )}
            </div>

            {/* Filter chips row */}
            <div style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'center'
            }}>
                {/* Categories */}
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    {categories.map(cat => {
                        const active = filters.category === cat
                        const color = categoryColors[cat]
                        return (
                            <button
                                key={cat}
                                onClick={() => toggleFilter('category', cat)}
                                style={{
                                    padding: '6px 14px',
                                    borderRadius: '8px',
                                    border: active ? `1.5px solid ${color.text}` : '1px solid transparent',
                                    cursor: 'pointer',
                                    fontSize: '13px',
                                    fontFamily: 'inherit',
                                    fontWeight: active ? 600 : 500,
                                    backgroundColor: active ? color.bg : '#fff',
                                    color: active ? color.text : '#888',
                                    boxShadow: active ? 'none' : '0 1px 2px rgba(0,0,0,0.04)',
                                    transition: 'all 0.15s'
                                }}
                            >
                                {cat}
                            </button>
                        )
                    })}
                </div>

                {/* Divider */}
                <div style={{ width: '1px', height: '20px', backgroundColor: '#ddd' }} />

                {/* Competitors */}
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    {competitors.map(comp => {
                        const active = filters.competitor === comp
                        const color = competitorColors[comp]
                        return (
                            <button
                                key={comp}
                                onClick={() => toggleFilter('competitor', comp)}
                                style={{
                                    padding: '6px 14px',
                                    borderRadius: '8px',
                                    border: active ? `1.5px solid ${color.text}` : '1px solid transparent',
                                    cursor: 'pointer',
                                    fontSize: '13px',
                                    fontFamily: 'inherit',
                                    fontWeight: active ? 600 : 500,
                                    backgroundColor: active ? color.bg : '#fff',
                                    color: active ? color.text : '#888',
                                    boxShadow: active ? 'none' : '0 1px 2px rgba(0,0,0,0.04)',
                                    transition: 'all 0.15s'
                                }}
                            >
                                <span style={{
                                    display: 'inline-block',
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: color.text,
                                    marginRight: '6px',
                                    opacity: active ? 1 : 0.4
                                }} />
                                {comp}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FilterBar