document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    fetch('https://wits-digital-arts-interactive-media.github.io/WSOA3028A_2431951/Profile/index.html', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then(data => {
      console.log('Success:', data);
    }).catch((error) => {
      console.error('Error:', error);
    });
  });