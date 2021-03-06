const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { catchErrors } = require('../handlers/errorHandlers');

const sayHello = (req, res) => {
  res.json({
    name: "adam"
  })
}

router.get('/', sayHello);

// Sign In
router.post('/users/sign-in', userController.signIn);

// Sign Up
router.post('/users/sign-up',
  userController.validateUser,
  userController.signUp
  // userController.signIn
);

// Lists
router.post('/lists/create', userController.createList);
router.post('/lists/update', userController.updateList);

// Items
router.post('/items/', userController.getAllItems);
router.post('/items/create', userController.createItem);
router.post('/items/update', userController.updateItem);
router.post('/items/delete', userController.deleteItem);

module.exports = router;