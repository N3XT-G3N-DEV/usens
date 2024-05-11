$('#save-settings').click(function() {
    var endpoint = $('#api-endpoint').val();
    var apiKey = $('#api-key').val();
    var apiSecret = $('#api-secret').val();

    // Input validation
    if (!endpoint || !apiKey || !apiSecret) {
        $('#error-message').text('Please fill in all the fields.');
        return;
    }

    // Use fetch API to send a POST request to the server
    fetch('/api/settings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ endpoint, apiKey, apiSecret })
    })
    .then(response => {
        if (response.ok) {
            // Settings saved successfully
            $('#error-message').text('');
        } else {
            // Error handling
            response.json().then(error => {
                $('#error-message').text(error.message);
            });
        }
    })
    .catch(error => {
        // Error handling
        console.error('Error:', error);
        $('#error-message').text('An error occurred. Please try again later.');
    });
});

$('#save-parameters').click(function() {
    var param1 = $('#param1').val();
    var param2 = $('#param2').val();

    // Input validation
    if (!param1 || !param2) {
        alert('Please fill in all the fields.');
        return;
    }

    // Use these values in your API requests
});
