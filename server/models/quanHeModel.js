module.exports = (sequelize, DataTypes) => {

    const QuanHe = sequelize.define("quan_he", {
        MaHo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        IDThanhVien: {
            type: DataTypes.STRING,
            allowNull: false
        },
        QuanHe: {
            type: DataTypes.TEXT
        },
    
    })

    return QuanHe

}