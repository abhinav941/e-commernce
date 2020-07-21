import Product from '../models/product';

const getAddProduct = (req: any, res: any, next: any) => {
    res.render('admin/add-product', { docTitle: 'Add Product', path: '/admin/add-product' });
};

const postAddProduct = (req: any, res: any, next: any) => {
    console.log(req.body);

    const { title, imageUrl, description, price } = req.body;
    const product = new Product({ title, imageUrl, description, price });
    product.save();
    res.redirect('/');
};

const getProducts = (req: any, res: any, next: any) => {
    const products = Product.findAll();
    res.render('admin/products', { products: products, docTitle: 'Products', path: '/admin/products' });
};

export default { postAddProduct, getAddProduct, getProducts };
