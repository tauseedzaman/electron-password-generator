var p;
const btn = document.getElementById("generate_btn");
const btn_copy = document.getElementById("copy_btn");

btn.addEventListener("click", generate_password);
btn_copy.addEventListener("click", copy_pass);

// generate password method
function generate_password() {
  var alpa = "zxcvbnmasdfghjklpoiuytrewqABCDEFGHIJKLMNOPQRSTUVWXYZ",
    num = "1234567890",
    s_char = "#=+*-@$~_^?`%'\"([{/!&|>\\])}",
    str = "";
  var check_alpa = document.querySelector("#alpa");
  var check_num = document.querySelector("#num");
  var check_s_char = document.querySelector("#s_char");
  if (check_alpa.checked == true) {
    str += alpa;
  }

  if (check_num.checked == true) {
    str += num;
  }

  if (check_s_char.checked == true) {
    str += s_char;
  }

  var p_length = document.querySelector("#p_length").value;

  if (p_length == "" || p_length == null) {
    alert("please enter password length");
    return false;
  }

  if (str == "" || str == null) {
    alert(
      "Can't create password without alpabuts, numbers and specials chars! \n please select at lest one"
    );
    return false;
  }

  pass = "";
  for (i = 1; i <= p_length; i++) {
    pass += str[Math.floor(Math.random() * str.length)];
  }

  p = document.querySelector("#target");
  p.value = pass;
}

function copy_pass() {
  if (p == "" || p == null) {
    alert(" first generate a password!");
    return false;
  }

  p.select();
  document.execCommand("copy");
  p.value = "";
}