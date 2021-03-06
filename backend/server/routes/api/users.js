const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const router = require('express').Router();
const Users = require('../../../database/models/users');
const db = require('../../../database/index');

router.post('/register', async (req, res, next) => {
  const { name, username, email, password } = req.body;
  if (!email) {
    return res.status(422).send({
      error: {
        email: 'is required',
      },
    });
  }

  if (!password) {
    return res.status(422).send({
      error: {
        password: 'is required',
      },
    });
  }

  if (!name) {
    return res.status(422).send({
      error: {
        name: 'is required',
      },
    });
  }

  if (!username) {
    return res.status(422).send({
      error: {
        username: 'is required',
      },
    });
  }

  const user = { name, email, username, password };

  const finalUser = new Users(user);

  await finalUser.setPassword(password);

  return finalUser.save()
    .then(() => res.send({ user: finalUser.toAuthJSON() }))
    .catch((err) => res.send({ error: 'Register failed' }));
});

//POST login route (optional, everyone has access)
router.post('/login', (req, res, next) => {
  const { body: { email, password } } = req;
  if (!email) {
    return res.status(422).send({
      errors: {
        email: 'is required',
      },
    });
  }

  if (!password) {
    return res.status(422).send({
      errors: {
        password: 'is required',
      },
    });
  }
  return passport.authenticate('local', { session: true }, (err, passportUser, info) => {

    if (err) return res.status(422).send({ error: err });

    if (!passportUser) return res.status(401).send(info);

    req.logIn(passportUser, (err) => {
      if (err) return next(err);
      return res.status(200).send(passportUser.toAuthJSON());
    });

  })(req, res, next);
});

router.get('/current', async (req, res) => {
  if (!req.user) return res.end();

  const { user: { _id, name, username, email } } = req;
  if (req.isAuthenticated()) {
    const user = { _id, name, username, email };
    return res.send(user);
  }
});

router.patch('/updateUser/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, username, password } = req.body;

  let filter;
  if (name) filter = { name };
  if (email) filter = { email };
  if (password) {
    bcrypt.genSalt(10, async (err, salt) => {
      bcrypt.hash(password, salt, async (err, hashed) => {
        const updated = await Users.updateOne({ _id:mongoose.Types.ObjectId(`${id}`) }, { password: hashed });
        if (updated) return res.status(200).send({ success: 'Information updated' });
        if (!updated) return res.status(400).send({ error: 'Information could not be updated at this time' });
      });
     });
     return;
  }

  const updated = await Users.updateOne({_id:mongoose.Types.ObjectId(`${id}`)}, filter);

  if (updated) res.status(200).send({ success: 'Information updated' });
  if (!updated) res.status(400).send({error: 'Information could not be updated at this time' });
});

router.put('/deleteUser/:id', async (req, res) => {
  const { id }  = req.params;

  const deleted = await Users.deleteOne({ _id:mongoose.Types.ObjectId(`${id}`) });

  if (deleted) res.status(200).send({ success: 'User has been deleted' });
  if (!deleted) res.status(200).send({ error: 'User could not be deleted at this time' });
});

module.exports = router;