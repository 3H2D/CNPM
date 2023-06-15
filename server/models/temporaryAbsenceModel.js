module.exports = (sequelize, DataTypes) => {

    const TemporaryAbsence = sequelize.define("temporary_absence", {
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
        Destination: {
            type: DataTypes.STRING,
        },
        Reason: {
            type: DataTypes.STRING,
        },
    
    })

    return TemporaryAbsence

}