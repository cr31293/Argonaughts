$(document).ready(() => {
  $.get("/api/free-agents").then(data => {
    console.log(data);
    const user = data;

    for (let i = 0; i < user.length; i++) { 
      const cardFormat = `
<div class="card m-1">
  <div class="card-header">
    <span>Player Info</span>
  </div>
  <div class="card-body">
    <h5 class="card-title">${user[i].playerName}</h5>
    <ul class="card-text">
      <li>Rank: ${user[i].rank}</li>
    </ul>
    <a class="btn btn-primary btn-lg" href="#" role="button">Recruit</a>
  </div>
</div>
`;
      $("#freeAgents").prepend(cardFormat);
    }});
});