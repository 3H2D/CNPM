module.exports = (sequelize, DataTypes) => {

    const Household = sequelize.define("household", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        HouseholdNumber: {
            type: DataTypes.STRING,
        },
        Location: {
            type: DataTypes.TEXT
        },
        HouseholderId: {
            type: DataTypes.INTEGER
        },
    
    })

    return Household

}