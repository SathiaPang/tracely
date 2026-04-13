import { useState } from 'react'

const emptyForm = {
    competitor: '',
    category: '',
    productName: '',
    terms: '',
    observations: '',
    sourceUrl: '',
    dateTracked: new Date().toISOString().split('T')[0]
}

function AddProductForm({ onSave, onCancel }) {
    const [form, setForm] = useState(emptyForm)

    function handleChange(field, value) {
        setForm({ ...form, [field]: value })
    }

    function handleSubmit() {
        if (!form.productName || !form.competitor || !form.category) {
            alert('Please fill in product name, competitor, and category')
            return
        }
        onSave(form)
    }

    return (
        <div style={{
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '16px'
        }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px' }}>Add Product</h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                <div>
                    <label style={labelStyle}>Product Name *</label>
                    <input
                        style={inputStyle}
                        value={form.productName}
                        onChange={e => handleChange('productName', e.target.value)}
                        placeholder="e.g. Postpaid Premium"
                    />
                </div>

                <div>
                    <label style={labelStyle}>Competitor *</label>
                    <select
                        style={inputStyle}
                        value={form.competitor}
                        onChange={e => handleChange('competitor', e.target.value)}
                    >
                        <option value="">Select...</option>
                        <option>Cellcard</option>
                        <option>Metfone</option>
                        <option>MekongNet</option>
                        <option>Ezecom</option>
                    </select>
                </div>

                <div>
                    <label style={labelStyle}>Category *</label>
                    <select
                        style={inputStyle}
                        value={form.category}
                        onChange={e => handleChange('category', e.target.value)}
                    >
                        <option value="">Select...</option>
                        <option>Mobility</option>
                        <option>Connectivity</option>
                        <option>ICT</option>
                    </select>
                </div>

                <div>
                    <label style={labelStyle}>Date Tracked</label>
                    <input
                        style={inputStyle}
                        type="date"
                        value={form.dateTracked}
                        onChange={e => handleChange('dateTracked', e.target.value)}
                    />
                </div>
            </div>

            <div style={{ marginBottom: '12px' }}>
                <label style={labelStyle}>Terms & Conditions</label>
                <textarea
                    style={{ ...inputStyle, minHeight: '60px', resize: 'vertical' }}
                    value={form.terms}
                    onChange={e => handleChange('terms', e.target.value)}
                    placeholder="e.g. 12-month contract required"
                />
            </div>

            <div style={{ marginBottom: '12px' }}>
                <label style={labelStyle}>Observations</label>
                <textarea
                    style={{ ...inputStyle, minHeight: '60px', resize: 'vertical' }}
                    value={form.observations}
                    onChange={e => handleChange('observations', e.target.value)}
                    placeholder="Your analysis — what does this mean for Smart?"
                />
            </div>

            <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>Source URL</label>
                <input
                    style={inputStyle}
                    value={form.sourceUrl}
                    onChange={e => handleChange('sourceUrl', e.target.value)}
                    placeholder="https://..."
                />
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={handleSubmit} style={saveButtonStyle}>Save Product</button>
                <button onClick={onCancel} style={cancelButtonStyle}>Cancel</button>
            </div>
        </div>
    )
}

const labelStyle = {
    display: 'block',
    fontSize: '13px',
    fontWeight: 600,
    color: '#555',
    marginBottom: '6px'
}

const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '14px',
    fontFamily: 'inherit',
    backgroundColor: '#f9f9f6',
    outline: 'none',
    boxSizing: 'border-box',
    appearance: 'none',
    WebkitAppearance: 'none'
}

const saveButtonStyle = {
    padding: '10px 24px',
    backgroundColor: '#2C5F2D',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 600,
    boxShadow: '0 1px 3px rgba(44,95,45,0.3)'
}

const cancelButtonStyle = {
    padding: '8px 20px',
    backgroundColor: 'transparent',
    color: '#555',
    border: '1px solid #ddd',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px'
}

export default AddProductForm