const express = require('express');
const router = express.Router();

const inventoryController = require('../controllers/inventoryController');

//Get Request which will obtain all items in inventory
router.get('/', inventoryController.getInventory, (req, res) => {
  console.log(res.locals.itemList);
  return res.status(200).send(res.locals.itemList);
});

//Post Request to add new items to inventory
router.post('/', inventoryController.createInventory,  (req, res) => {
  return res.status(200).send(res.locals.item);
});

//Patch Request to update an existing item in inventory
router.patch('/', inventoryController.updateInventory,  (req, res) => {
  return res.status(200).send(res.locals.item);
});

//Delete Request to delete an existing item in inventory
router.delete('/', inventoryController.deleteInventory,  (req, res) => {
  return res.status(200).send(res.locals.item);
});

module.exports = router;