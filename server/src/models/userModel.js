const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
    const User = sequelize.define("user", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "user",
      },
    })
    
    User.beforeCreate((user) => {
       user.password = user.password
         ? bcrypt.hashSync(user.password, 10)
         : null;
     });

     return User;
}
