$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  $.get("/api/user-fetch").then(data => {
    $(".member-name").text(data.playerName);
    $(".member-info").append(`<li>${data.rank}</li>`);
    $(".member-info").append(`<li>${data.teamId}</li>`);
    $(".member-info").append(`<li>${data.mercenaryStatus}</li>`);

    if (!data.teamId) {
      console.log(data);
      
      $(".team-info").append("To view your team information please create or join a team!");
      $(".team-info").append(`</br><a class="btn btn-primary btn-lg m-2" href="../teamSignup.html" role="button">Create A Team</a>`);
      $(".team-info").append(`<a class="btn btn-primary btn-lg m-2" href="#" role="button">Join A Team</a>`);
        
        
    } else {
      ($.get("/api/team-data")).then(data => {  
        console.log(data);
        $(".team-name").text(data.teamName);
        $(".team-info").append(`<li>${data.teamRank}</li>`);
        $(".team-info").append(`<li>${data.wins}</li>`);
        $(".team-info").append(`<li>${data.losses}</li>`);
        $(".team-info").append(`<li>${data.winRate}</li>`);
      }
      );}
  });
});