module.exports = (sequelize, DataTypes) => {

    const Feedback = sequelize.define("feedback", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Content: {
            type: DataTypes.TEXT
        },
        Category: {
            type: DataTypes.STRING,
        },
        Status: {
            type: DataTypes.STRING,
        },
    
    })

    return Feedback

}