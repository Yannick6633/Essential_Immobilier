'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Demeure extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Demeure.belongsToMany(models.Critere, {through: models.CritereDemeure})
            Demeure.hasMany(models.CritereDemeure);
        }
    };
    Demeure.init({
        title: DataTypes.STRING,
        price: DataTypes.INTEGER,
        city: DataTypes.STRING,
        piece: DataTypes.INTEGER,
        description: DataTypes.TEXT,
        image: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Demeure',
    });
    return Demeure;
};
