module.exports = (sequelize, DataTypes) => {

    const FeedbackResponse = sequelize.define("feedback_response", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ResponseContent: {
            type: DataTypes.TEXT
        },
    
    })

    return FeedbackResponse

}