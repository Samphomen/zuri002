const express = require('express');
const router = express.Router();
const User = require('../model')
const {Op} = require('sequelize')

// Create a new person
router.post('/', async (req, res) => {
    try {
      const { name, value } = req.body;
      const user = await User.create({ name, value });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error creating user' });
    }
  });
  
//   // Fetch details of a person by ID or name
//   router.get('/:param', async (req, res) => {
//     try {
//       const {param} = req.params
//       const user = await User.findOne({
//         where: { [Op.or]: [{ id:param }, { name: param }] },
//       });
//       if (!user) {
//         return res.status(404).json({ error: 'User not found' });
//       }
//       res.json({id: user.id, name: user.name});
//     } catch (error) {
//       console.log(error.message);
//       res.status(500).json({ error: 'Error fetching user' });
//     }
//   });
  
//   // Update details of an existing person by ID or name
//   router.put('/:param', async (req, res) => {
//     try {
//       const { param } = req.params;
//       const { name, value } = req.body;
//       const user = await User.findOne({
//         where: { [Op.or]: [{ id: param }, { name: param }] },
//       });
//       if (!user) {
//         return res.status(404).json({ error: 'User not found' });
//       }
//       await user.update({ name, value });
//       res.json(user);
//     } catch (error) {
//       res.status(500).json({ error: 'Error updating User' });
//     }
//   });
  
//   // Remove a person by ID or name
//   router.delete('/:param', async (req, res) => {
//     try {
//       const { param } = req.params;
//       const user = await User.findOne({
//         where: { [Op.or]: [{ id: param }, { name: param }] },
//       });
//       if (!user) {
//         return res.status(404).json({ error: 'User not found' });
//       }
//       await user.destroy();
//       res.status(204).send();
//     } catch (error) {
//       res.status(500).json({ error: 'Error deleting User' });
//     }
// });



router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({id: user.id, name: user.name});
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user' });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, value } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.update({ name, value });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error updating user' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.destroy();
    res.status(204).json({message: 'User deleted Successfully'});
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user' });
  }
});

module.exports = router;

  
  
  
  
  
  