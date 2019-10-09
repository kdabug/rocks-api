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

const User = sequelize.define('user', {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unique: true, // checks if email is already being used
    allowNull: false,
    validate: {
      isEmail: { // checks if input is in email form
        msg: 'please enter a valid email address'
      },
      notNull: { // message given if null
        msg: 'please enter an email address'
      }
    }
  },
  username: {
    type: Sequelize.STRING,
    unique: true, // checks if username is already being used
    allowNull: false,
    validate: {
      notNull: { // message given if null
        msg: 'please enter a username'
      }
    }
  },
  password_digest: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { // message given if null
        msg: 'please enter a password'
      }
    }
  }
});

const Rock = sequelize.define("rock", {
  name: {
    type: Sequelize.STRING,
    unique: true, // checks if email is already being used
    allowNull: false
  },
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

User.belongsToMany(Rock, { through: 'favorite_rocks' });
Rock.belongsToMany(User, { through: 'favorite_rocks' });

module.exports = {
  Chakra,
  Color,
  Rock,
  Property,
  sequelize
};
