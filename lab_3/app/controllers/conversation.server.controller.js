const conversation = require('../models/conversation.server.model');

exports.listCv = async function(req, res) {
    console.log('\nRequest to list conversations...');

    try {
        const result = await conversation.getAllCv();
        res.status(200)
            .send(result);
    } catch(err) {
        res.status(500)
            .send(`ERROR getting conversations ${err}`);
    }
};

exports.readCv = async function(req, res) {
    const id = req.params.id;

    console.log(`\nRequest to list a conversation ${id} ...`);


    try {
        const result = await conversation.getOneCv(id);
        res.status(200)
            .send(result);
    } catch(err) {
        res.status(500)
            .send(`ERROR getting conversation ${id}: ${err}`);
    }
};

exports.createCv = async function(req, res) {
    console.log('\nRequest to create a conversation...');

    const convoName = req.body.convo_name;
    try {
        const result = await conversation.insertCv(convoName);
        res.status(200)
            .send(result);
    } catch(err) {
        res.status(500)
            .send(`ERROR creating a conversation ${err}`);
    }
};

exports.deleteCv = async function(req, res) {
    console.log('\nRequest to delete a conversation...');

    const id = req.params.id;
    try {
        const result = await conversation.removeCv(id);
        res.status(200)
            .send(result);
    } catch(err) {
        res.status(500)
            .send(`ERROR deleting conversations ${id}: ${err}`);
    }
};

exports.updateCv = async function(req, res) {
    console.log('\nRequest to update a conversation...');

    const id = req.params.id;
    const name = req.body.convo_name;
    try {
        const result = await conversation.alterCv(name, id);
        res.status(200)
            .send(result);
    } catch(err) {
        res.status(500)
            .send(`ERROR updating conversations ${id}: ${err}`);
    }
};

exports.listMess = async function(req, res) {
    console.log('\nRequest to get all messages...');

    const id = req.params.id;
    try {
        const result = await conversation.getAllMess(id);
        res.status(200)
            .send(result);
    } catch(err) {
        res.status(500)
            .send(`ERROR getting messages with convo_id = ${id}: ${err}`);
    }
};

exports.listAMess = async function(req, res) {
    console.log('\nRequest to get all messages...');

    const convoId = req.params.id;
    const messId = req.params.id;
    try {
        const result = await conversation.getOneMess(convoId, messId);
        res.status(200)
            .send(result);
    } catch(err) {
        res.status(500)
            .send(`ERROR getting messages with convo_id = ${convoId}: ${err}`);
    }
};


exports.createMess = async function(req, res) {
    console.log('\nRequest to create a conversation...');

    const convoId = req.params.id;
    const userId = req.body.user_id;
    const message = req.body.message;

    try {
        const result = await conversation.insertMess(message, convoId, userId);
        res.status(200)
            .send(result);
    } catch(err) {
        res.status(500)
            .send(`ERROR creating a conversation ${err}`);
    }
};

