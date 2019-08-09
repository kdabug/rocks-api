const { Chakra, Rock, Property, Color } = require("./models");

const selfAcceptance = await Property.create({ name: "self-acceptance" });
const sobriety = await Property.create({ name: "sobriety" });

const amethyst = await Rock.create({
  name: "amethyst",
  uses: "strengthen family bonding, make tough decisions"
});
const roseQuartz = await Rock.create({
  name: "rose quartz",
  uses: "letting go of toxic energy"
});

const blue = await Color.create({ name: "blue" });
const green = await Color.create({ name: "green" });

const heart = await Chakra.create({ name: "heart" });
const throat = await Chakra.create({ name: "throat" });
const thirdEye = await Chakra.create({ name: "thirdEye" });
const crown = await Chakra.create({ name: "crown" });
const solarPlexis = await Chakra.create({ name: "solar plexis" });
const sacral = await Chakra.create({ name: "sacral" });
const root = await Chakra.create({ name: "root" });
