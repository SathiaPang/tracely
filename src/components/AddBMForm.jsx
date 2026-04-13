import { useState } from 'react'

const emptyForm = {
    competitor: '',
    category: '',
    week: '',
    activityType: '',
    title: '',
    summary: '',
    sourceUrl: '',
    dateTracked: new Date().toISOString().split('T')[0]
}

function AddBMForm({ onSave, onCancel }) {
    const [form, setForm] = useState(emptyForm)

    function handleChange(field, value) {
        setForm({ ...form, [field]: value })
    }

    function handleSubmit() {
        if (!form.title || !form.competitor || !form.category || !form.activityType) {
            alert('Please fill in title, competitor, category, and activity type')
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
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px' }}>Add B&M Entry</h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                <div>
                    <label style={labelStyle}>Title *</label>
                    <input
                        style={inputStyle}
                        value={form.title}
                        onChange={e => handleChange('title', e.target.value)}
                        placeholder="e.g. Metfone Khmer New Year promo"
                    />
                </div>

                <div>
                    <label style={labelStyle}>Competitor *</label>
                    <select style={inputStyle} value={form.competitor} onChange={e => handleChange('competitor', e.target.value)}>
                        <option value="">Select...</option>
                        <option>Cellcard</option>
                        <option>Metfone</option>
                        <option>MekongNet</option>
                        <option>Ezecom</option>
                    </select>
                </div>

                <div>
                    <label style={labelStyle}>Category *</label>
                    <select style={inputStyle} value={form.category} onChange={e => handleChange('category', e.target.value)}>
                        <option value="">Select...</option>
                        <option>Mobility</option>
                        <option>Connectivity</option>
                        <option>ICT</option>
                    </select>
                </div>

                <div>
                    <label style={labelStyle}>Activity Type *</label>
                    <select style={inputStyle} value={form.activityType} onChange={e => handleChange('activityType', e.target.value)}>
                        <option value="">Select...</option>
                        <option>Promotion</option>
                        <option>Campaign</option>
                        <option>Launch</option>
                        <option>Partnership</option>
                        <option>Other</option>
                    </select>
                </div>

                <div>
                    <label style={labelStyle}>Week</label>
                    <input
                        style={inputStyle}
                        type="week"
                        value={form.week}
                        onChange={e => handleChange('week', e.target.value)}
                    />
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
                <label style={labelStyle}>Summary</label>
                <textarea
                    style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }}
                    value={form.summary}
                    onChange={e => handleChange('summary', e.target.value)}
                    placeholder="What happened? What's the impact?"
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
                <button onClick={handleSubmit} style={saveButtonStyle}>Save Entry</button>
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

export default AddBMForm