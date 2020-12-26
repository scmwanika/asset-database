module.exports = (sequelize, Sequelize) => {
    const Asset = sequelize.define("asset", {
        customerName: {
            type: Sequelize.STRING
        },
        site: {
            type: Sequelize.STRING
        },
        room: {
            type: Sequelize.STRING
        },
        rack: {
            type: Sequelize.STRING
        },
        rackUnit: {
            type: Sequelize.STRING
        },
        deviceName: {
            type: Sequelize.STRING
        },
        serialNumber: {
            type: Sequelize.STRING
        },
        orientation: {
            type: Sequelize.STRING
        },
        chassiSlot: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        functionalGroup: {
            type: Sequelize.STRING
        },
        po: {
            type: Sequelize.STRING
        },
        assetTag: {
            type: Sequelize.STRING
        },
        ip: {
            type: Sequelize.STRING
        },
        notes: {
            type: Sequelize.STRING
        }
    });
    // Note: using `force: true` will drop the table if it already exists
    // Now the `assets` table in the database corresponds to the model definition
    Asset.sync({ force: true })
    return Asset;
};