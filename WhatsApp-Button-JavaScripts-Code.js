<script>//<![CDATA[
// whatsApp floating form by imamuddinwp.com

var menuToggle = document.querySelector(".whatsapp-float"),
	wrapperMenu = document.querySelector(".nav-whatsapp"),
	closeWA = document.querySelector(".closeWA");
var inputs = document.querySelectorAll('.Fcontrol input[type=text], .Fcontrol input[type=email], .Fcontrol textarea');

menuToggle.onclick = function() {
  wrapperMenu.classList.toggle('active');
}
closeWA.onclick = function() {
  wrapperMenu.classList.remove('active');
};

for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i];
  input.addEventListener('input', function() {
    var bg = this.value ? 'show' : 'none';
    this.setAttribute('class', bg);
  });
}

function sendToWhatsApp() {
  /* Input Form */
  var name = document.getElementById("cName").value;
  var email = document.getElementById("cEmail").value;
  var subject = document.getElementById("cSubject").value;
  var massage = document.getElementById("cMessage").value;
  var postLink = window.location.href;
  /* Validation for Required Columns */
  var error_name = document.getElementById("error_name"),
    error_email = document.getElementById("error_email"),
    error_message = document.getElementById("error_message");
  var text;
  if (name == "") {
    text = 'Please enter your name';
    error_name.setAttribute('data-text', text);
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = 'Please enter valid email';
    error_email.setAttribute('data-text', text);
    return false;
  }
  if (massage == "") {
    text = 'Please enter your Massage';
    error_message.setAttribute('data-text', text);
    return false;
  }
  /* URL Final Whatsapp */ 
  var message = "New message from " + name + "\n\n"; // Opening Message
  message += "*Name:* " + name + "\n";
  message += "*Email:* " + email + "\n";
  message += "*Subject:* " + subject + "\n";
  message += "*Massage:* " + massage + "\n\n";
  message += "=============================" + "\n";
  message += "*Form:* " + postLink + "\n";
  message += "=============================";
  /* WhatsApp Settings */
  var walink = 'https://api.whatsapp.com/send?',
    phoneNumber = '+8801406070407'; // Your WhatsApp number
  var encodedMessage = encodeURIComponent(message);
  var whatsappUrl = walink + "?phone=" + phoneNumber + "&text=" + encodedMessage;
  window.open(whatsappUrl, '_blank');
  return true;
}
//]]></script>