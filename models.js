const Sequelize = require("sequelize");
let sequelize;
if (process.env.DATABASE_URL) {
  console.log("called");
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    logging: true,
    operatorsAliases: false,
    define: {
      underscored: true
    }
  });
} else {
  sequelize = new Sequelize({
    database: "rocksdb",
    dialect: "postgresql",
    operatorAliases: false,
    define: {
      underscored: true
    }
  });
}
const Rock = sequelize.define("rock", {
  name: Sequelize.STRING,
  uses: Sequelize.TEXT
});

const Property = sequelize.define("property", {
  name: Sequelize.STRING
});

const Color = sequelize.define("color", {
  name: Sequelize.STRING
});

const Chakra = sequelize.define("chakra", {
  name: Sequelize.STRING,
  meaning: Sequelize.TEXT,
  color: Sequelize.STRING
});

//one to many
Rock.belongsTo(Chakra);
Chakra.hasMany(Rock);

//many to many
Rock.belongsToMany(Property, { through: "rock_property" });
Property.belongsToMany(Rock, { through: "rock_property" });
Rock.belongsToMany(Color, { through: "rock_color" });
Color.belongsToMany(Rock, { through: "rock_color" });

module.exports = {
  Chakra,
  Color,
  Rock,
  Property,
  sequelize
};
