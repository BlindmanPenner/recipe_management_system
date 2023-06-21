# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin "delete_recipe", to: "delete_recipe.js"
pin "recipes", to: "recipes.js"
pin "@hotwired/turbo-rails", to: "turbo.js", preload: true
pin "@rails/activestorage", to: "activestorage.js", preload: true

