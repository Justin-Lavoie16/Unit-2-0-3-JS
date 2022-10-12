function enterClicked() {

  const firstName = document.getElementById("first-name").value
  const userAge = parseInt(document.getElementById("age-entered").value)

  document.getElementById("address").innerHTML =
    "Your info is: " + firstName + ", age " + userAge + "."
}