document.addEventListener('DOMContentLoaded', function() {
    var deleteButton = document.getElementById('delete-recipe');
    if (deleteButton) {
      deleteButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (confirm('Are you sure you want to delete this recipe?')) {
          var form = document.createElement('form');
          form.method = 'POST';
          form.action = this.href;
          var csrfToken = document.querySelector('meta[name="csrf-token"]').content;
          var csrfInput = document.createElement('input');
          csrfInput.type = 'hidden';
          csrfInput.name = 'authenticity_token';
          csrfInput.value = csrfToken;
          form.appendChild(csrfInput);
          document.body.appendChild(form);
          form.submit();
        }
      });
    }
  });
