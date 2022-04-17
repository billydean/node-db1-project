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
  try {
    const account = await Accounts.getById(req.params.id);
    res.json(account);
  } catch (err) {
    next(err);
  }
})

router.post('/', mid.checkAccountPayload, mid.checkAccountNameUnique,  async (req, res, next) => {
  try {
    const createdAccount = await Accounts.create({
      name: req.body.name.trim(),
      budget: req.body.budget,
    });
    res.status(201).json(createdAccount);
  } catch (err) {
    next(err);
  }
})

router.put('/:id', mid.checkAccountId, mid.checkAccountPayload, async (req, res, next) => {
  try {
    const updated = await Accounts.updateById(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', mid.checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    await Accounts.deleteById(req.params.id);
    res.json(req.account);
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
