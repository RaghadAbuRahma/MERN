const playerController = require('../controllers/player.controller');
module.exports = function(app){
    app.get('/api/players', playerController.allPlayers);
    app.post('/api/players/new', playerController.createPlayer);
    app.delete('/api/players/:id', playerController.deletePlayer);
    app.get('/api/players/:id', playerController.getPlayer);
    app.patch('/api/players/:id/edit', playerController.UpdatePlayer);


}