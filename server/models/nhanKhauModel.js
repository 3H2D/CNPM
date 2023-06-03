module.exports = (sequelize, DataTypes) => {

    const NhanKhau = sequelize.define("nhan_khau", {
        ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        CCCD: {
            type: DataTypes.STRING(12)
        },
        Ten: {
            type: DataTypes.STRING
        },
        Tuoi: {
            type: DataTypes.INTEGER
        },
        SDT: {
            type: DataTypes.STRING(12)
        }
    
    })

    return NhanKhau

}