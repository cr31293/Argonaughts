$(document).ready(() => {
    // Getting references to our form and input
    const teamCreateForm = $("form.teamCreate");
    const nameInput = $("input#teamName-input");

  
    // When the signup button is clicked, we validate the email and password are not blank
    teamCreateForm.on("submit", event => {
      event.preventDefault();
      const userData = {
        name: nameInput.val().trim(),
      };
  
      if (!userData.name) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      teamCreate(userData);
      nameInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function teamCreate(userData) {
      $.post("/api/signup", {
        team_name: userData.name,
      })
        .then(() => {
          window.location.replace("/team");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
});