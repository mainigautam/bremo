const path = require('path')
const Bin = require('./Bin')
const LinkPad = require('./LinkPad')
const Notes = require('./Notes')
const Archives = require('./Archives')

const apiRoutes = (app) => {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        next();
      });
    app.get('/', (req, res) => {
        res.sendFile(path.resolve('../server/public/build/index.html'))
    })
    app.get('/Linkpad', (req, res) => {
        res.sendFile(path.resolve('../server/public/build/index.html'))
    })
    app.get('/Reminders', (req, res) => {
        res.sendFile(path.resolve('../server/public/build/index.html'))
    })
    app.get('/Archive', (req, res) => {
        res.sendFile(path.resolve('../server/public/build/index.html'))
    })
    app.get('/Trash', (req, res) => {
        res.sendFile(path.resolve('../server/public/build/index.html'))
    })
    LinkPad(app);
    Notes(app);
    Bin(app);
    Archives(app);
}
module.exports = apiRoutes;