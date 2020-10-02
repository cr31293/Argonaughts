$(document).ready(() => {
  $.get("/api/user_data").then(data => {
    $(".team-name").text(data.teamName);
    $(".team-info").append(`<li>${data.teamRank}</li>`);
    $(".team-info").append(`<li>${data.wins}</li>`);
    $(".team-info").append(`<li>${data.losses}</li>`);
    $(".team-info").append(`<li>${data.winRate}</li>`);
  });
});
  