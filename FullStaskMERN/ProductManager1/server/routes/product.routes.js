
const ProductController = require('../controllers/ProductController');
module.exports = function(app){
    app.post('/api/product', ProductController.addNewProduct);
    app.get('/api/products' , ProductController.allProducts);
    app.get('/api/products/:id' , ProductController.findProduct);
}

