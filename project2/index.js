// function to validate and submit the form

function submitForm() {

    // reset previous error messages

    document.getElementById("error-message").innerHTML = "";

    // validate each field

    var errors = [];
    var firstName = document.getElementById("first-name").value.trim();
    var lastName = document.getElementById("last-name").value.trim();
    var address = document.getElementById("address").value.trim();
    var city = document.getElementById("city").value.trim();
    var state = document.getElementById("state").value;
    var zipCode = document.getElementById("zip-code").value.trim();
    var areaCode = document.getElementById("area-code").value.trim();
    var phoneNumber = document.getElementById("phone-number").value.trim();
    var email = document.getElementById("email").value.trim();
    var confirmEmail = document.getElementById("confirm-email").value.trim();
    var mealPreference = document.querySelector('input[name="meal-preference"]:checked');
    var contactMethods = document.querySelectorAll('input[name="contact-method"]:checked');
    var comments = document.getElementById("comments").value.trim();

    // validate Name Fields

    if (firstName === "" || lastName === "") {
        errors.push("Please enter both first and last name.");
    } else if (!/^[A-Za-z]+$/.test(firstName) || !/^[A-Za-z]+$/.test(lastName)) {
        errors.push("Name fields must contain only alphabetic characters.");
    }

    // validate Address Fields

    if (address === "" || city === "" || state === "" || zipCode === "") {
        errors.push("Please enter a valid mailing address.");
    } else {
        if (!/^[a-zA-Z0-9\s]+$/.test(address)) {
            errors.push("Address must contain alphanumeric characters.");
        }
        if (!/^[A-Za-z]+$/.test(city)) {
            errors.push("City must contain only alphabetic characters.");
        }
        if (!/^\d{5}$/.test(zipCode)) {
            errors.push("Zip Code must be numeric and 5 digits.");
        }
    }

    // validate Phone Number Fields

    if (areaCode === "" || phoneNumber === "" || !/^\d{3}$/.test(areaCode) || !/^\d{7}$/.test(phoneNumber)) {
        errors.push("Please enter a valid 10-digit phone number.");
     }

    // validate Email Fields

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        errors.push("Please enter a valid email address.");
    } else if (email !== confirmEmail) {
        errors.push("Email addresses do not match.");
    }

    // validate Meal Preference

    if (!mealPreference) {
        errors.push("Please select a meal preference.");
    }

    // validate Contact Methods

    if (contactMethods.length < 2) {
        errors.push("Please select at least two contact methods.");
    }

    // display errors or submit the form

    if (errors.length > 0) {
        document.getElementById("error-message").innerHTML = errors.join("<br>");
    } else {
        
        // uncomment the line below to submit the form (requires server-side handling)

        // document.getElementById("contact-form").submit();

        alert("Form submitted successfully!");
    }
}

// function to reset the form

function resetForm() {
    document.getElementById("rform").reset();
    document.getElementById("error-message").innerHTML = "";
}


