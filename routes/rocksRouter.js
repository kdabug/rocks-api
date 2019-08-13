const { Router } = require("express");
const rocksRouter = Router();
const { Rock } = require("../models");

rocksRouter.get("/", async (req, res) => {
  try {
    const allRocks = await Rock.findAll();
    const rocks = allRocks.map(rock => rock.dataValues);
    res.json({ rocks: rocks });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
});

rocksRouter.post("/post", async (req, res) => {
  try {
    const { body } = req;
    const rock = await Rock.create(body);
    res.json({ rock: rock.dataValues });
  } catch (e) {
    console.log(e);
  }
});

rocksRouter.get("/:id", async (req, res) => {
  try {
    const oneRock = await Rock.findByPk(req.params.id);
    res.json({ rock: oneRock });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
});

rocksRouter.delete("/:id/delete", async (req, res) => {
  try {
    const oneRock = await Rock.findByPk(req.params.id);
    const allRocks = await Rock.findAll();
    oneRock.destroy();
    const rocks = allRocks.map(rock => rock.dataValues);
    res.json({ rocks: rocks });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
});

rocksRouter.put("/:id/update", async (req, res) => {
  try {
    const oneRock = await Rock.findByPk(req.params.id);
    const { body } = req;
    const rock = await oneRock.update(body);
    const allRocks = await Rock.findAll();
    const rocks = allRocks.map(rock => rock.dataValues);
    res.json({ rocks: rocks });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
});

module.exports = rocksRouter;
