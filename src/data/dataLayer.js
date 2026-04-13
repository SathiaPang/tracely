// ================================
// Tracely Data Layer
// All storage goes through here.
// ================================

function getAll(key) {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : []
}

function saveAll(key, items) {
    localStorage.setItem(key, JSON.stringify(items))
}

// ---------- Products ----------

export function getProducts() {
    return getAll('tracely_products')
}

export function addProduct(product) {
    const products = getProducts()
    const newProduct = {
        ...product,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
    }
    products.push(newProduct)
    saveAll('tracely_products', products)
    return newProduct
}

export function updateProduct(id, updates) {
    const products = getProducts().map(p =>
        p.id === id ? { ...p, ...updates } : p
    )
    saveAll('tracely_products', products)
}

export function deleteProduct(id) {
    const products = getProducts().filter(p => p.id !== id)
    saveAll('tracely_products', products)
}

// ---------- B&M Log ----------

export function getBMEntries() {
    return getAll('tracely_bm')
}

export function addBMEntry(entry) {
    const entries = getBMEntries()
    const newEntry = {
        ...entry,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
    }
    entries.push(newEntry)
    saveAll('tracely_bm', entries)
    return newEntry
}

export function updateBMEntry(id, updates) {
    const entries = getBMEntries().map(e =>
        e.id === id ? { ...e, ...updates } : e
    )
    saveAll('tracely_bm', entries)
}

export function deleteBMEntry(id) {
    const entries = getBMEntries().filter(e => e.id !== id)
    saveAll('tracely_bm', entries)
}