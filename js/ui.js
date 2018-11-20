class UI {
    constructor() {
        // App initialization
        this.init();
    }
    // Method when app is started
    init() {
        // display categories in <select>
        this.printCategories();
    }
    printCategories() {
        const categoriesList = eventbrite.getCategoriesAPI()
        .then(categories => {
            const categoriesList = categories.categories.categories;
            const categoriesSelect = document.querySelector("#category");

            categoriesList.forEach(category => {
                const option = document.createElement("option");
                option.value = category.id;
                option.appendChild(document.createTextNode(category.name));
                categoriesSelect.appendChild(option);
            });
        })
        .catch(error => console.log(error));
    }

    printMessage(message, className) {
        // create a div
        const div = document.createElement("div");
        div.className = className;
        // add the text
        div.appendChild(document.createTextNode(message));
        // Insert into the HTML
        const searchDiv = document.querySelector("#search-events");
        searchDiv.appendChild(div);
        // remove the alert after 3 seconds
        setTimeout(() => {
            this.removeMessage();
        }, 3000);
    }
    // Remove the message
    removeMessage() {
        const alert = document.querySelector(".alert");
            if(alert) {
                alert.remove();
            }
    }
}