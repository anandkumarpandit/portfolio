
        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname)
        {
           for(tablink of tablinks){
            tablink.classList.remove("active-link");
           } 
           for(tabcontent of tabcontents){
               tabcontent.classList.remove("active-tab");
           }
           event.currentTarget.classList.add("active-link");
           document.getElementById(tabname).classList.add("active-tab");
        }

   
    var sidemeu = document.getElementById("sidemenu");
    function openmenu(){
        sidemeu.style.right = "0";
    }
    function closemenu(){
        sidemeu.style.right="-200px";
    }


    // Reset form fields after successful submission and display a message
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        // Prevent default form submission
        event.preventDefault();
        
        // Submit the form data asynchronously
        let form = event.target;
        let formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            // Check if the response is successful
            if (response.ok) {
                // Clear input fields
                form.reset();
                // Show a success message
                showMessage("Message sent successfully!");
            } else {
                // Show an error message
                showMessage("Error: Message not sent. Please try again later.");
            }
        })
        .catch(error => {
            // Show an error message if there is an error with the request
            showMessage("Error: " + error.message);
        });
    });

    // Function to display a message
    function showMessage(message) {
        // Display the message using alert or any other method you prefer
        alert(message);
    }


    