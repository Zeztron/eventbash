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
        const categoeiesList = eventbrite.getCategoriesAPI()
        .then(categories => {
            console.log(categories);
            
        });
    }
}