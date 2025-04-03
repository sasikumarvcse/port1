document.addEventListener('DOMContentLoaded', () => {
    const particlesJs = document.getElementById('particles-js');
    
    // Add click event listeners to all navigation links
    document.querySelectorAll('nav a').forEach((navLink) => {
        navLink.addEventListener('click', (event) => {
            const targetSection = event.target.getAttribute('onclick');

            // Change height based on clicked section
            if (targetSection && targetSection.includes('work')) {
                particlesJs.style.height = '200%'; // Set height to 200% for "Work"
            } else if (targetSection && targetSection.includes('projects')) {
                particlesJs.style.height = '250%'; // Set height to 200% for "Projects"
            } else if (targetSection && targetSection.includes('skills')) {
                particlesJs.style.height = '200%'; // Set height to 200% for "Skills and Programming"
            } else if (targetSection && targetSection.includes('certifications')) {
                particlesJs.style.height = '250%'; // Set height to 240% for "Achievements and Certifications"
            } else {
                particlesJs.style.height = '150%'; // Default height for other sections
            }
        });
    });
});

// JavaScript code to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent form from submitting normally
    sendMail();
}

function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_lfrhg6i", "template_q7f6xky", parms)
        .then(() => {
            alert("Email sent!");
             document.getElementById("name").value = '';
            document.getElementById("email").value = '';
            document.getElementById("message").value = '';
        })
        .catch((error) => {
            console.error("Email sending failed: ", error);
        });
}

// Show Section Function
function showSection(sectionId) {
    const sections = document.querySelectorAll('.container');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    const summaryCard = document.getElementById('summary-card');
    summaryCard.classList.add('hidden');
}

function navigateToResume1() {
    window.location.href = "resume.html";
}

function navigateToResume2() {
    window.location.href = "certificates.html";
}

particlesJS("particles-js", {
    particles: {
        number: { value: 5},
        size: { value: 3 },
        color: { value: "#fff" },
        move: { speed: 2 }
    },
    interactivity: {
        events: { onhover: { enable: true, mode: "repulse" } }
    }
});
