const { Router } = require("express");
const chakrasRouter = Router();
const { Chakra } = require("../models");

chakrasRouter.get("/", async (req, res) => {
  try {
    const allChakras = await Chakra.findAll();
    const chakras = allChakras.map(chakra => chakra.dataValues);
    res.json({ chakras: chakras });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
});

chakrasRouter.post("/post", async (req, res) => {
  try {
    const { body } = req;
    const chakra = await Chakra.create(body);
    res.json({ chakra: chakra.dataValues });
  } catch (e) {
    console.log(e);
  }
});

chakrasRouter.get("/:id", async (req, res) => {
  try {
    const oneChakra = await Chakra.findByPk(req.params.id);
    res.json({ chakra: oneChakra });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
});

chakrasRouter.delete("/:id/delete", async (req, res) => {
  try {
    const oneChakra = await Chakra.findByPk(req.params.id);
    const allChakras = await Chakra.findAll();
    oneChakra.destroy();
    const chakras = allChakras.map(chakra => chakra.dataValues);
    res.json({ chakras: chakras });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
});

chakrasRouter.put("/:id/update", async (req, res) => {
  try {
    const oneChakra = await Chakra.findByPk(req.params.id);
    const { body } = req;
    const chakra = await oneChakra.update(body);
    const allChakras = await Chakra.findAll();
    const chakras = allChakras.map(chakra => chakra.dataValues);
    res.json({ chakras: chakras });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
});

module.exports = chakrasRouter;
