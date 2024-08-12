const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.get('/api/authors', AuthorController.allAuthors);
    app.post('/api/authors/new', AuthorController.createAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
    app.get('/api/authors/:id', AuthorController.getAuthor);
    app.patch('/api/authors/:id/edit', AuthorController.UpdateAuthor);


}

