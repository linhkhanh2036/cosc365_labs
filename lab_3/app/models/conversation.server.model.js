const db = require('../../config/db');

exports.getAllCv = async function() {
    console.log('Request to get all conversations from the database...');

    const conn = await db.getPool().getConnection();
    const query = 'select * from lab2_conversations';
    const [rows] = await conn.query(query);
    conn.release();
    return rows;
};

exports.getOneCv = async function( id ) {
    console.log( `Request to get conversation ${id} from the database...` );
    const conn = await db.getPool().getConnection();
    const query = 'select * from lab2_conversations where convo_id = ?';
    const [ rows ] = await conn.query( query, [ id ] );
    conn.release();
    return rows;
};

exports.insertCv = async function(convoName) {

    console.log(`Resquest to insert ${convoName} into the database...`);

    const conn = await db.getPool().getConnection();
    const query = 'insert into lab2_conversations (convo_name) values (?)';
    const [result] = await conn.query(query, [convoName]);
    conn.release();
    return result;
};

exports.alterCv = async function(name, id) {

    console.log(`Request to alter ${id} into the database...`);

    const conn = await db.getPool().getConnection();
    const query = 'update lab2_conversations set convo_name = ? where convo_id = ?';
    const [result] = await conn.query(query, [name, id]);
    conn.release();
    return result;
};

exports.removeCv = async function(convoId) {

    console.log(`Request to delete ${convoId} into the database...`);

    const conn = await db.getPool().getConnection();
    const query = 'delete from lab2_conversations where convo_id = ?';
    const [result] = await conn.query(query, [convoId]);
    conn.release();
    return result;
};

exports.getAllMess = async function(id) {

    console.log(`Request to get all messages into the database...`);

    const conn = await db.getPool().getConnection();
    const query = 'select * from lab2_messages where convo_id = ?';
    const [results] = await conn.query(query, [id]);
    conn.release();
    return results;
};

exports.getOneMess = async function(id1, id2) {
    console.log(`Request to get a message which convoId = ${id1} and messageId = ${id2} into the database...`);

    const conn = await db.getPool().getConnection();
    const query = 'select * from lab2_messages where convo_id = ? and message_id = ?';
    const [results] = await conn.query(query, [id1, id2]);
    conn.release();
    return results;
};

exports.insertMess = async function(message, convoId, messId) {
    console.log(`Resquest to insert ${convoId} into the database...`);

    const conn = await db.getPool().getConnection();
    const query = 'insert into lab2_messages (message, convo_id, user_id) values (?, ?, ?) ';
    const [result] = await conn.query(query, [message, convoId, messId]);
    conn.release();
    return result;
}
