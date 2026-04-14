import { useState, useEffect } from 'react'
import { getProducts, addProduct, deleteProduct } from '../data/dataLayer'
import { competitorColors, categoryColors, getTag } from '../data/colors'
import AddProductForm from '../components/AddProductForm'
import FilterBar from '../components/FilterBar'
import ProductDetail from '../components/ProductDetail'
import ConfirmModal from '../components/ConfirmModal'

function ProductTracker() {
    const [products, setProducts] = useState([])
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
        setProducts(getProducts())
    }, [])

    function handleSave(formData) {
        addProduct(formData)
        setProducts(getProducts())
        setShowForm(false)
    }

    function handleDelete() {
        deleteProduct(deleteId)
        setProducts(getProducts())
        setSelectedId(null)
        setDeleteId(null)
    }

    const filtered = products.filter(p => {
        if (filters.category && p.category !== filters.category) return false
        if (filters.competitor && p.competitor !== filters.competitor) return false
        if (filters.search) {
            const term = filters.search.toLowerCase()
            const searchable = [
                p.productName, p.competitor, p.category,
                p.terms, p.observations
            ].join(' ').toLowerCase()
            if (!searchable.includes(term)) return false
        }
        return true
    })

    const selectedProduct = products.find(p => p.id === selectedId)

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px'
            }}>
                <div>
                    <h2 style={{ margin: 0, fontSize: '22px', fontWeight: 700, letterSpacing: '-0.5px' }}>Product Tracker</h2>
                    <p style={{ margin: '2px 0 0', fontSize: '13px', color: '#999' }}>
                        Showing {filtered.length} of {products.length} product{products.length !== 1 ? 's' : ''}
                    </p>
                </div>
                {!showForm && (
                    <button onClick={() => setShowForm(true)} style={addButtonStyle}>+ Add Product</button>
                )}
            </div>

            {showForm && (
                <AddProductForm
                    onSave={handleSave}
                    onCancel={() => setShowForm(false)}
                />
            )}

            <FilterBar filters={filters} onFilterChange={setFilters} />

            {filtered.length === 0 ? (
                <div style={emptyStyle}>
                    <p style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 500 }}>
                        {products.length === 0 ? 'No products yet' : 'No products match your filters'}
                    </p>
                    <p style={{ margin: 0, fontSize: '14px', color: '#aaa' }}>
                        {products.length === 0
                            ? 'Click "+ Add Product" to get started'
                            : 'Try adjusting your filters'
                        }
                    </p>
                </div>
            ) : (
                <div style={tableWrapperStyle}>
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Product</th>
                                <th style={thStyle}>Competitor</th>
                                <th style={thStyle}>Category</th>
                                <th style={thStyle}>Date Tracked</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(product => (
                                <tr
                                    key={product.id}
                                    onClick={() => setSelectedId(selectedId === product.id ? null : product.id)}
                                    onMouseEnter={() => setHoveredId(product.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    style={{
                                        borderTop: '1px solid #f0ede6',
                                        cursor: 'pointer',
                                        backgroundColor:
                                            selectedId === product.id ? '#f7f6f2'
                                                : hoveredId === product.id ? '#fafaf8'
                                                    : 'transparent',
                                        transition: 'background-color 0.15s'
                                    }}
                                >
                                    <td style={tdStyle}><span style={{ fontWeight: 600 }}>{product.productName}</span></td>
                                    <td style={tdStyle}><span style={getTag(competitorColors, product.competitor)}>{product.competitor}</span></td>
                                    <td style={tdStyle}><span style={getTag(categoryColors, product.category)}>{product.category}</span></td>
                                    <td style={{ ...tdStyle, color: '#999', fontSize: '13px' }}>{product.dateTracked}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {selectedProduct && (
                <div style={{ marginTop: '16px' }}>
                    <ProductDetail
                        product={selectedProduct}
                        onClose={() => setSelectedId(null)}
                        onDelete={id => setDeleteId(id)}
                    />
                </div>
            )}

            {deleteId && (
                <ConfirmModal
                    message="This product will be permanently deleted. This action cannot be undone."
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

const emptyStyle = {
    padding: '56px',
    textAlign: 'center',
    color: '#888',
    backgroundColor: '#fff',
    borderRadius: '10px',
    border: '1px dashed #d0cdc4'
}

const tableWrapperStyle = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    border: '1px solid #e0ddd6',
    boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
}

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse'
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

export default ProductTracker