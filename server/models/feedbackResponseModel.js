module.exports = (sequelize, DataTypes) => {

    const FeedbackResponse = sequelize.define("feedback_response", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        FeedbackID: {
            type: DataTypes.INTEGER,
        },
        ResponseContent: {
            type: DataTypes.TEXT
        },
        ResponderID: {
            type: DataTypes.INT
        }
    
    })

    return FeedbackResponse

}