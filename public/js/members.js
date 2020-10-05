$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  $.get("/api/user-fetch").then(data => {
    console.log(data);
    $(".member-name").text(data.playerName);
    $(".member-info").append(`<li>Rank: ${data.rank}</li>`);
    

    if (!data.teamId) {
      console.log(data);
      
      $(".team-info").append("To view your team information please create or join a team!");
      $(".team-info").append(`</br><a class="btn btn-primary btn-lg m-2" href="../teamSignup.html" role="button">Create A Team</a>`);
        
        
    } else {
      ($.get("/api/team-data")).then(data => {  
        console.log(data);
        $(".team-name").text(data.teamName);
        $(".member-info").append(`<li>Current Team: ${data.teamName}</li>`);
        $(".team-info").append(`<li>Team Rank: ${data.teamRank}</li>`);
        $(".team-info").append(`<li>Wins: ${data.wins}</li>`);
        $(".team-info").append(`<li>Losses: ${data.losses}</li>`);
        $(".team-info").append(`<li>Win Rate: ${data.winRate}</li>`);
      }
      );}
  });
});