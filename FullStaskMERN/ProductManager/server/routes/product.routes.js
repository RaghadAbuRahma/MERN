
const ProductController = require('../controllers/ProductController');
module.exports = function(app){
    app.post('/api/product', ProductController.addNewProduct);
    app.get('/api/products' , ProductController.allProducts);
    app.get('/api/products/:id' , ProductController.findProduct);
    app.patch('/api/products/:id/edit', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);


}

