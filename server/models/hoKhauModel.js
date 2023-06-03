module.exports = (sequelize, DataTypes) => {

    const HoKhau = sequelize.define("ho_khau", {
        MaHo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        IDChuHo: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        SoThanhVien: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        DiaChi: {
            type: DataTypes.TEXT
        },
    
    })

    return HoKhau

}