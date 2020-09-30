module.exports = function(sequelize, DataTypes) {
    const Team = sequelize.define("Team", {
        team_name: {
            type: DataTypes.STRING,
            allownull: false,
            unique: true
        },
        player1_id: {
            type: DataTypes.INTEGER,
            allownull: true
        },
        player2_id: {
            type: DataTypes.INTEGER,
            allownull: true
        },
        player3_id: {
            type: DataTypes.INTEGER,
            allownull: true
        },
        player4_id: {
            type: DataTypes.INTEGER,
            allownull: true
        },
        player5_id: {
            type: DataTypes.INTEGER,
            allownull: true
        },
        team_rank: {
            type: DataTypes.STRING,
            allownull: false
        },
        battle_status: {
            default: false
        }
    });        

    return Team;
};    