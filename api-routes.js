let router = require('express').Router()
router.get('/', function(req, res){
    res.json({
        status:'API is Working',
        message: 'Welcome to RESTHub crafted with love hihi!'
    })
})

// Import contact controller
var contactController = require('./contactController');
// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
// Export API routes
module.exports = router;