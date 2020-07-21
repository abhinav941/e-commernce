import Product from '../models/product';
import Cart from '../models/cart';

const getProducts = (req: any, res: any, next: any) => {
  Product.fetchAll((products: any) => {
    res.render('shop/product-list', { prods: products, docTitle: 'Shop', path: '/' });
  });
};

const saveProductToCart = (req: any, res: any, next: any) => {};

const getCheckout = (req: any, res: any, next: any) => {
  res.render('shop/checkout', { path: '/checkout', docTitle: 'Checkout' });
};

const getIndex = (req: any, res: any, next: any) => {
  Product.fetchAll((products: any) => {
    res.render('shop/index', { prods: products, docTitle: 'Shop', path: '/' });
  });
};

const showCart = (req: any, res: any, next: any) => {
  Cart.fetchCart((cart: any) => {
    res.render('shop/cart', { cart, docTitle: 'Cart', path: '/cart' });
  });
};

export default {
  getIndex,
  showCart,
  getProducts,
  getCheckout,
};
