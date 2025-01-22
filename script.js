let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section'); // Corrected 'sections' to 'section'
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Corrected the query to select the corresponding link by matching the 'href' attribute
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.getElementById('sendMessageButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting (if it's part of a form)
    
    var message = document.getElementById('message').value; // Get the message from textarea
    var emailLink = document.getElementById('emailLink'); // Get the email link
    
    // Modify the href attribute of the mailto link to include the message content
    var mailtoURL = 'mailto:jordanbrck@gmail.com?subject=New Message&body=' + encodeURIComponent(message);
    emailLink.setAttribute('href', mailtoURL); // Update the href
    
    // Trigger the click on the mailto link programmatically
    emailLink.click();
});

