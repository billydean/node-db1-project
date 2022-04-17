const router = require('express').Router()
const mid = require('./accounts-middleware');
const Accounts = require('./accounts-model');

router.get('/', async (req, res, next) => {
  try {
    const accounts = await Accounts.getAll();
    res.json(accounts);
  } catch (err) {
    next(err);
  }
})

router.get('/:id', mid.checkAccountId, async (req, res, next) => {
  res.json(req.account);
})

router.post('/', mid.checkAccountPayload, mid.checkAccountNameUnique,  (req, res, next) => {
  // DO YOUR MAGIC
  try {
    
  } catch (err) {
    next(err);
  }
})

router.put('/:id', mid.checkAccountId, mid.checkAccountPayload, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', mid.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    
  } catch (err) {
    next(err);
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = router;
