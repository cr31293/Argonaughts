$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.playerName);
    $(".member-info").append(`<li>${data.email}</li>`);
    $(".member-info").append(`<li>${data.rank}</li>`);
    $(".member-info").append(`<li>${data.teamId}</li>`);
    $(".member-info").append(`<li>${data.mercenaryStatus}</li>`);
  });
});
