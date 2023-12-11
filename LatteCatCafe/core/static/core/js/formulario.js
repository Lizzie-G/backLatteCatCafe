const form = document.getElementsByTagName("form")[0];
const mail = document.getElementById("mail");
const dni = document.getElementById("dni");

// Validación del e-mail de los formularios

let error = mail;
while ((error = error.nextSibling).nodeType != 1);

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function addEvent(element, event, callback) {
  let previousEventCallBack = element["on" + event];
  element["on" + event] = function (e) {
    const output = callback(e);

    if (output === false) return false;

    if (typeof previousEventCallBack === "function") {
      output = previousEventCallBack(e);
      if (output === false) return false;
    }
  };
}

addEvent(window, "load", function () {
  const test = mail.value.length === 0 || emailRegExp.test(mail.value);
  mail.className = test ? "valid" : "invalid";
});

addEvent(mail, "input", function () {
  const test = mail.value.length === 0 || emailRegExp.test(mail.value);
  if (test) {
    mail.className = "valid";
    error.innerHTML = "";
    error.className = "error";
  } else {
    mail.className = "invalid";
  }
});

addEvent(form, "submit", function () {
  const test = mail.value.length === 0 || emailRegExp.test(mail.value);

  if (!test) {
    mail.className = "invalid";
    error.innerHTML = "Verifica el correo electrónico, gracias";
    error.className = "error active";

    return false;
  } else {
    mail.className = "valid";
    error.innerHTML = "";
    error.className = "error";
  }
});

// API REST geolocalización

const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}