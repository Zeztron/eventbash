// instantiate both classes
const eventbrite = new EventBrite();
const ui = new UI();

// create listener for submit button
document.getElementById("submitBtn").addEventListener("click", (e) => {
    e.preventDefault();

    // get values from form
    const eventName = document.getElementById("event-name").value;
    const category = document.getElementById("category").value;
    
    //console.log(eventName + ": " + category); 
    if(eventName !== "") {
        // Query Event Brite API
        eventbrite.queryAPI(eventName, category)
        .then(events => {
            // check for events
            const eventsList = events.events.events;
            if (eventsList.length > 0) {
                // print events
            } else {
                ui.printMessage("No Results Found.", "text-center alert alert-danger mt-4");
                document.getElementById("event-name").value = "";
            }
            
        })

    } else {
       // Print a message
       ui.printMessage("Add an Event or City, Please :)", "text-center alert alert-danger mt-4");
    }
});
