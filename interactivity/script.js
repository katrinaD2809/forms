function postDataSomewhere() {

    let formIsValid = checkForm("my-form")

    if (formIsValid) {
        console.log("Form - correct. Posting data!")
        // get information from form fields

        // post to API using fetch....
    } else {
        console.log("Form - invalid.")
    }
}