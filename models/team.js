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
            allownull:true
        },
        losses: {
            type: DataTypes.INTEGER,
            allownull:true
        },
        winRate: {
            type: DataTypes.FLOAT,
            allownull: true
        },
        playerCount: {
            type: DataTypes.INTEGER,
            allownull: false
        }
    });        

    return Team;
};    