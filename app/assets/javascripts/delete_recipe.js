document.addEventListener('turbo:load', function() {
  // Listen for the 'turbo:load' event triggered by Turbo

  var deleteButton = document.getElementById('delete-recipe');
  // Get the delete button element by its ID

  if (deleteButton) {
    // Check if the delete button exists

    deleteButton.addEventListener('click', function(event) {
      // Add a click event listener to the delete button

      event.preventDefault();
      // Prevent the default behavior of the click event (navigation)

      console.log('Delete button clicked');
      // Log a message to the console for debugging

      if (confirm('Are you sure you want to delete this recipe?')) {
        // Display a confirmation dialog and proceed if confirmed

        console.log('Confirmation accepted');
        // Log a message to the console for debugging

        var form = document.createElement('form');
        // Create a new form element

        form.method = 'DELETE';
        // Set the HTTP method of the form to 'DELETE'

        form.action = this.href;
        // Set the form action to the URL of the delete button

        var csrfToken = document.querySelector('meta[name="csrf-token"]').content;
        // Retrieve the CSRF token value from the <meta> tag

        var csrfInput = document.createElement('input');
        csrfInput.type = 'hidden';
        csrfInput.name = 'authenticity_token';
        csrfInput.value = csrfToken;
        // Create a hidden input field for the CSRF token

        form.appendChild(csrfInput);
        // Append the CSRF token input field to the form

        document.body.appendChild(form);
        // Append the form to the document body

        form.submit();
        // Submit the form (triggering the delete action)
      } else {
        console.log('Confirmation rejected');
        // Log a message to the console for debugging
      }
    });
  }
});
