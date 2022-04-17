const db = require('../../data/db-config');
//imported database for knex
//below, commented sql syntax to be translated into knex

const getAll = () => {
  // select * from accounts
  return db('accounts');
}

const getById = id => {
  // select * from accounts where id = x
  return db('accounts').where({ 'id': id }).first();
}

const create = async account => {
  // insert accounts (x,y,z) values (x,y,z)
  const [id] = await db('accounts').insert(account);
  return getById(id);
}

const updateById = async (id, account) => {
  // update accounts set (... = ...) where x=z
  db('accounts').where('id', id).update
}

const deleteById = id => {
  // delete from accounts where id='id'
  return db('accounts').where('id', id).delete();
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
