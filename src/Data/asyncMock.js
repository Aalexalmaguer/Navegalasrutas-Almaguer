const products = [
    { 
        id: '1', 
        name: 'Camiseta Básica', 
        price: 250, 
        category: 'ropa', 
        img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 
        description: 'Camiseta de algodón 100% de alta calidad.' 
    },
    { 
        id: '2', 
        name: 'Jeans Slim Fit', 
        price: 800, 
        category: 'ropa', 
        img: 'https://images.unsplash.com/photo-1542272617-08f08315805d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 
        description: 'Pantalones vaqueros corte moderno.' 
    },
    { 
        id: '3', 
        name: 'Zapatillas Urbanas', 
        price: 1200, 
        category: 'calzado', 
        img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 
        description: 'Zapatillas cómodas para el día a día.' 
    },
    { 
        id: '4', 
        name: 'Gorra Vintage', 
        price: 300, 
        category: 'accesorios', 
        img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 
        description: 'Gorra estilo retro ajustable.' 
    },
];

/**
 * Returns a promise that resolves with the list of all products after a delay.
 * @returns {Promise<Array<Object>>} Promise resolving to an array of product objects.
 */
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(products);
        }, 1000);
    });
};

/**
 * Returns a product by its ID.
 * @param {string} productId - The ID of the product to retrieve.
 * @returns {Promise<Object|null>} Resolves with the product object if found, otherwise resolves with null.
 */
export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find(prod => prod.id === productId);
            resolve(product ? product : null);
        }, 1000);
    });
};

/**
 * Returns a promise that resolves with the list of products matching the given category after a delay.
 * @param {string} categoryId - The category to filter products by.
 * @returns {Promise<Array<Object>>} Promise resolving to an array of product objects.
 */
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
        }, 1000);
    });
};