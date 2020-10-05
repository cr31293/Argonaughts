$(document).ready(() => {
  $.get("/api/freeAgents").then(data => {
    console.log(data);
    const user = data;

  for (let i = 0; i < user.length; i++) { 
    const cardFormat = `
<div class="card">
  <div class="card-header">
    <span>${user[i].playerName}</span>
  </div>
  <div class="card-body">
    <h5 class="card-title">Player Info</h5>
    <ul class="card-text member-info">
      <li>${user[i].rank}</li>
    </ul>
    <a class="btn btn-primary btn-lg" href="#" role="button">Recruit</a>
  </div>
</div>
`;
$("#freeAgents").prepend(cardFormat);
  }});
});