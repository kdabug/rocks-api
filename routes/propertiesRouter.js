const { Router } = require("express");
const propertiesRouter = Router();
const { Property } = require("../models");

propertiesRouter.get("/", async (req, res) => {
  try {
    const allProperties = await Property.findAll();
    const properties = allProperties.map(property => property.dataValues);
    res.json({ properties: properties });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
});

propertiesRouter.post("/post", async (req, res) => {
  try {
    const { body } = req;
    const property = await Property.create(body);
    res.json({ property: property.dataValues });
  } catch (e) {
    console.log(e);
  }
});

propertiesRouter.get("/:id", async (req, res) => {
  try {
    const oneProperty = await Property.findByPk(req.params.id);
    res.json({ property: oneProperty });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
});

propertiesRouter.delete("/:id/delete", async (req, res) => {
  try {
    const oneProperty = await Property.findByPk(req.params.id);
    const allProperties = await Property.findAll();
    oneProperty.destroy();
    const properties = allProperties.map(property => property.dataValues);
    res.json({ properties: properties });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
});

propertiesRouter.put("/:id/update", async (req, res) => {
  try {
    const oneProperty = await Property.findByPk(req.params.id);
    const { body } = req;
    const property = await oneProperty.update(body);
    const allProperties = await Property.findAll();
    const properties = allProperties.map(property => property.dataValues);
    res.json({ properties: properties });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
});

module.exports = propertiesRouter;
