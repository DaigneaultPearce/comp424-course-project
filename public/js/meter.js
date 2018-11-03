var strength = {
  0: "Worst",
  1: "Bad",
  2: "Weak",
  3: "Good",
  4: "Strong"
}

window.onload=function( ) {

    var password = document.getElementById('password');
    var meter = document.getElementById('password-strength-meter');
    var text = document.getElementById('password-strength-text');

    password.addEventListener('input', function() {
      var val = password.value;
      var result = zxcvbn(val);

      // Update the password strength meter
      meter.value = result.score;

      // Update the text indicator
      if(val !== "") {
        text.innerHTML = "Strength: " + "<strong>" + strength[result.score] + "</strong>";

        if(result.feedback.warning.length > 0)
        {
            text.innerHTML += ("<br><span class='feedback'>" + result.feedback.warning);
        }
        if(result.feedback.suggestions.length > 0)
        {
            var i;
            for(i = 0; i < result.feedback.suggestions.length; i++)
            {
                text.innerHTML += ("<br>" + result.feedback.suggestions[i]);
            }
        }
        text.innerHTML += "</span>";
    }
    else {
        text.innerHTML = "";
    }
    });
}
