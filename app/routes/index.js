module.exports = function(application) {
    application.get('/', (req, res) => {
        res.send('Loucura');
    })
}