
module.exports = (app) => {
    const indexControler = require('./../Controler/indexControler.js')

    app.route('/all').get(indexControler.all)


}