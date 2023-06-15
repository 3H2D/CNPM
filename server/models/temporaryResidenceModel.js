module.exports = (sequelize, DataTypes) => {

    const TemporaryResidence = sequelize.define("temporary_residence", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        PersonID: {
            type: DataTypes.INTEGER
        },
        StartDate: {
            type: DataTypes.DATE,
        },
        EndDate: {
            type: DataTypes.DATE
        },
        PreviousResidenceAddress: {
            type: DataTypes.STRING,
        },
    
    })

    return TemporaryResidence

}