const express = require('express');
const router = express.Router();
const officecontroller = require('../officecontroller');

router.get('/login',officecontroller.getLogin)
router.post('/login',officecontroller.postLogin);

router.get('/',officecontroller.getOfficeHome)
//router.get('/officeHome',officecontroller.getAgentsProfile);

router.get('/agents',officecontroller.getAgent)
router.get('/availableProperty',officecontroller.getavailableProperty )
router.get('/propertySold',officecontroller.getPropertySold )
router.get('/propertyRented',officecontroller.getPropertyRented )
router.get('/viewOwner',officecontroller.getViewOwner )
router.get('/addAgent',officecontroller.getaddAgent )


module.exports = router;