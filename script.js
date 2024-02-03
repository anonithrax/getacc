function submitForm() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Display the entered values (you can modify this part)
    alert('Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
}
