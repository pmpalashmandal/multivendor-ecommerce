const User = require('../models/userModel');

const authSeller = async (req, res, next) => {
  try {
    const user = await User.findOne({
      _id: req.user.id,
    });
    if (user.role === 'user' || user.role === 'admin') {
      return res.status(400).json({ msg: 'Seller Recources Access Denied.' });
    }
    next();
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = authSeller;
