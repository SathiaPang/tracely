export const competitorColors = {
    Cellcard: { bg: '#fdf0ef', text: '#FF7900', border: '#AB5001' },
    Metfone: { bg: '#ebf2ff', text: '#DB1A21', border: '#2F2F2F' },
    MekongNet: { bg: '#e6f5f0', text: '#F47F20', border: '#F7C4A5' },
    Ezecom: { bg: '#fef3eb', text: '#FF7900', border: '#AB5001' }
}

export const categoryColors = {
    Mobility: { bg: '#f0edfa', text: '#3c2878', border: '#d4caf0' },
    Connectivity: { bg: '#e8f3fb', text: '#0a4872', border: '#b5d8f0' },
    ICT: { bg: '#fbf4e5', text: '#5c3e06', border: '#e8d5a8' }
}

export const activityColors = {
    Promotion: { bg: '#fef3eb', text: '#6e3206' },
    Campaign: { bg: '#ebf2ff', text: '#1a3a7a' },
    Launch: { bg: '#e6f5f0', text: '#064d3b' },
    Partnership: { bg: '#f0edfa', text: '#3c2878' },
    Other: { bg: '#f2f2ee', text: '#555' }
}

export function getTag(colorMap, key) {
    const color = colorMap[key] || { bg: '#f2f2ee', text: '#555', border: '#ddd' }
    return {
        padding: '2px 10px',
        borderRadius: '12px',
        fontSize: '13px',
        fontWeight: 500,
        backgroundColor: color.bg,
        color: color.text,
        display: 'inline-block'
    }
}