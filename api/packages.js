const { Router } = require('express');
const db = require('../pkgs.json');

const pack = new Router();

pack.use('/:id', (req, res, next) => {
  const id = Number(req.params.id);
  const package = db.packages.find((p) => p.id === id);

  if (!package) {
    return res.status(404).end();
  }

  req.package = package;
  next();
})

pack.get('/:id', (req, res, next) => {
  res.json(req.package);
});

pack.patch('/:id', (req, res, next) => {
  const update = req.body.package;
  const newPackage = { ...req.package, ...update };
  // store the new data in files
  res.json(newPackage);
});

module.exports = pack;
