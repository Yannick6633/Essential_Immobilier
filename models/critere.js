'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Critere extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Critere.belongsToMany(models.Demeure, {through: models.CritereDemeure})
            Critere.hasMany(models.CritereDemeure);
        }
    };
    Critere.init({
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Critere',
    });
    return Critere;
};
