const conversations = require('../controllers/conversation.server.controller');

module.exports = function(app) {

    app.route('/api/conversations')
        .get(conversations.listCv)
        .post(conversations.createCv);

     app.route('/api/conversations/:id')
         .get(conversations.readCv)
         .put(conversations.updateCv)
         .delete(conversations.deleteCv);

     app.route('/api/conversations/:id/messages')
         .get(conversations.listMess)
         .post(conversations.createMess);

     app.route('/api/conversations/:id/messages/:id')
         .get(conversations.listAMess);
};