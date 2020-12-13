'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CritereDemeure extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            CritereDemeure.belongsTo(models.Critere);
            CritereDemeure.belongsTo(models.Demeure);
        }
    };
    CritereDemeure.init({}, {
        sequelize,
        modelName: 'CritereDemeure',
    });
    return CritereDemeure;
};
