'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('CritereDemeures', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            DemeureId: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                allowNull: false,
                references: {
                    model: 'Demeures',
                    key: 'id'
                },
                unique: 'CritereDemeure'
            },
            CritereId: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                allowNull: false,
                references: {
                    model: 'Criteres',
                    key: 'id'
                },
                unique: 'CritereDemeure'
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        })
            // Unique
            .then(function () {
                return queryInterface.sequelize.query(
                    'ALTER TABLE `CritereDemeures` ADD UNIQUE `unique_index`(`CritereId`, `DemeureId`)'
                );
            });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('CritereDemeures');
    }
};
