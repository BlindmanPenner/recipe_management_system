//= require jquery3
//= require activestorage
//= require popper
//= require bootstrap-sprockets
//= require_tree .

document.addEventListener('DOMContentLoaded', () => {
    // Your custom JavaScript code here

    Rails.start()
    Turbolinks.start()
    ActiveStorage.start()
  })
