const { Chakra, Rock, Property, Color } = require("./models");

const main = async () => {
  await Property.destroy({
    where: {}
  });
  await Rock.destroy({
    where: {}
  });
  await Chakra.destroy({
    where: {}
  });
  await Color.destroy({
    where: {}
  });

  const selfAcceptance = await Property.create({ name: "self-acceptance" });
  const sobriety = await Property.create({ name: "sobriety" });
  const protection = await Property.create({ name: "protection" });
  const innerStability = await Property.create({ name: "inner-stability" });
  const materialStability = await Property.create({ name: "material-stability" });
  const positivity = await Property.create({ name: "positivity" });
  const truthfullness = await Property.create({ name: "truthfullness" });
  const courage = await Property.create({ name: "courage" });
  const honesty = await Property.create({ name: "honesty" });
  const charity = await Property.create({ name: "charity" });
  const love = await Property.create({ name: "love" });
  const grounding = await Property.create({ name: "grounding" });
  const maternal = await Property.create({ name: "maternal" });
  const paternal = await Property.create({ name: "paternal" });
  const manifestation = await Property.create({ name: "manifestation" });
  const dreamer = await Property.create({ name: "dreamer" });
  const emotive = await Property.create({ name: "emotive" });
  const creativity = await Property.create({ name: "creativity" });
  const health = await Property.create({ name: "health" });

  const amethyst = await Rock.create({
    name: "amethyst",
    uses:
      "strengthen family bonding, make tough decisions, heal and balance energy"
  });
  const roseQuartz = await Rock.create({
    name: "rose quartz",
    uses: "letting go of toxic energy"
  });

  const blue = await Color.create({ name: "blue" });
  const pink = await Color.create({ name: "pink" });
  const purple = await Color.create({ name: "purple" });
  const green = await Color.create({ name: "green" });


  const heart = await Chakra.create({ name: "heart", color: "green" });
  const throat = await Chakra.create({ name: "throat", color: "blue" });
  const thirdEye = await Chakra.create({ name: "thirdEye", color: "purple" });
  const crown = await Chakra.create({ name: "crown", color: "green" });
  const solarPlexis = await Chakra.create({
    name: "solar plexis",
    color: "yellow"
  });
  const sacral = await Chakra.create({ name: "sacral", color: "orange" });
  const root = await Chakra.create({ name: "root", color: "red, brown" });

  await roseQuartz.addColor(pink);
  await roseQuartz.setChakra(heart);
  await roseQuartz.addProperty(selfAcceptance);
  await amethyst.addProperty(selfAcceptance);
  await amethyst.addProperty(sobriety);
  await amethyst.addColor(purple);
  await amethyst.setChakra(thirdEye);
};
main();
