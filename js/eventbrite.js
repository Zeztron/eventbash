class EventBrite {
    // Constructor when instantiate
    constructor() {
        this.auth_token = "XOCJJPO4X6QEBRLDTLHZ";
    }

    // get categories from API
    async getCategoriesAPI() {
        // query the API
        const categoriesResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);

        // hold for the response and then return as json
        const categories = await categoriesResponse.json();
        return {
            categories
        }
    }
}