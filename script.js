function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can process the form data as desired, for example, sending it to a server or logging it
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // For demonstration purposes, just alert the user
    alert("Form submitted successfully!");
}