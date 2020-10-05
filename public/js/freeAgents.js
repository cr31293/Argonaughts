$(document).ready(() => {
  $.get("/api/user_data").then(data.forEach(() => {
    const cardFormat = `
<div class="card">
  <div class="card-header">
    <span>${data.playerName}</span>
  </div>
  <div class="card-body">
    <h5 class="card-title">Player Info</h5>
    <ul class="card-text member-info">
      <li>${data.rank}</li>
    </ul>
    <a class="btn btn-primary btn-lg" href="#" role="button">Recruit</a>
  </div>
</div>
`;
    $("#freeAgents").prepend(cardFormat);
  }));
});