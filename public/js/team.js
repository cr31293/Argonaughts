$(document).ready(() => {
  $.get("/api/team-data").then(data => {
    $(".team-name").text(data.teamName);
    $(".team-info").append(`<li>${data.teamRank}</li>`);
    $(".team-info").append(`<li>${data.wins}</li>`);
    $(".team-info").append(`<li>${data.losses}</li>`);
    $(".team-info").append(`<li>${data.winRate}</li>`);
    $(".team-info").append(`<a class="btn btn-primary btn-lg m-2" href="#" role="button">Join A Team</a>`);
  });
});
  