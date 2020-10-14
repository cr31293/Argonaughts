module.exports = function(sequelize, DataTypes) {
    const Team = sequelize.define("Team", {
        teamName: {
            type: DataTypes.STRING,
            allownull: false,
            unique: true
        },
        teamRank: {
            type: DataTypes.STRING,
            allownull: true
        },
        battleStatus: {
            type: DataTypes.BOOLEAN,
            default: false
        },
        wins: {
            type: DataTypes.INTEGER,
            allownull:false,
            default: 0
        },
        losses: {
            type: DataTypes.INTEGER,
            allownull:false,
            default: 0
        },
        winRate: {
            type: DataTypes.FLOAT,
            allownull:false,
            default: 0
        },
        playerCount: {
            type: DataTypes.INTEGER,
            allownull: false,
        }
    });        

    return Team;
};    