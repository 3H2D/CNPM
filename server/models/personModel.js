module.exports = (sequelize, DataTypes) => {

    const Person = sequelize.define("person", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING,
        },
        Birthday: {
            type: DataTypes.DATE
        },
        BirthPlace: {
            type: DataTypes.TEXT
        },
        OriginPlace: {
            type: DataTypes.TEXT
        },
        ResidencyRegistrationDate: {
            type: DataTypes.DATE
        },
        PreviousResidencyAddress: {
            type: DataTypes.STRING
        },
        IsHouseholder: {
            type: DataTypes.BOOLEAN
        },
        RelationshipWithHouseholder: {
            type: DataTypes.STRING
        },
        CCCD: {
            type: DataTypes.STRING
        }
    
    })

    return Person

}