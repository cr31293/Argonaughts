$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");
  const nameInput = $("input#playerName-input");
  const rankInput = $("input#playerRank-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      name: nameInput.val().trim(),
      rank: rankInput.val().trim()
    };

    if (!userData.email || 
      !userData.password || 
      !userData.name || 
      !userData.rank) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.name, userData.rank);
    emailInput.val("");
    passwordInput.val("");
    nameInput.val("");
    rankInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, name, rank) {
    $.post("/api/signup", {
      email,
      password,
      playerName: name,
      rank: rank
    })
      .then(() => {
        window.location.replace("/home");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
