import Product from '../models/product';
import Cart from '../models/cart';

const getProducts = (req: any, res: any, next: any) => {
    const products = Product.findAll();
    res.render('shop/product-list', { products: products, pageTitle: 'Shop', path: '/' });
};

const saveProductToCart = (req: any, res: any, next: any) => {};

const getCheckout = (req: any, res: any, next: any) => {
    res.render('shop/checkout', { path: '/checkout', pageTitle: 'Checkout' });
};

const getIndex = (req: any, res: any, next: any) => {
    const products = Product.findAll();
    res.render('shop/index', { products: products, pageTitle: 'Shop', path: '/' });
};

const showCart = (req: any, res: any, next: any) => {
    Cart.fetchCart((cart: any) => {
        res.render('shop/cart', { cart, pageTitle: 'Cart', path: '/cart' });
    });
};

export default {
    getIndex,
    showCart,
    getProducts,
    getCheckout,
};
