module.exports = (sequelize, Sequelize) => {
    const Dtype = sequelize.define("dtype", {
        id_: {
            type: Sequelize.STRING
        },
        make: {
            type: Sequelize.STRING
        },
        model: {
            type: Sequelize.STRING
        },
        rackUnit: {
            type: Sequelize.STRING
        },
        weight: {
            type: Sequelize.STRING
        },
        psuNo: {
            type: Sequelize.STRING
        },
        power: {
            type: Sequelize.STRING
        }
    });
    // Note: using `force: true` will drop the table if it already exists
    // Now the `dtypes` table in the database corresponds to the model definition
    Dtype.sync({ force: true })
    return Dtype;
};