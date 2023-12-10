
// countdown timer
let seconds = 600; // 10 minutes

// function to format time
function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

// update countdown timer
function updateTimer() {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    document.getElementById('countdown').textContent = `${formatTime(minutes)}:${formatTime(remainingSeconds)}`;

    if (seconds <= 0) {
        clearInterval(timer);
        alert("Your timer has expired!");
        location.href = location.href; // redirect to the same page
    }

    seconds--;
}

// initial call to update timer
updateTimer();

// update timer every second
let timer = setInterval(updateTimer, 1000);

// ticket purchase section
function calculateTotal() {
    let ticketQty = document.getElementById('ticketQty').value;
    let totalCostElement = document.getElementById('totalCost');
    
    // validation
    if (isNaN(ticketQty) || ticketQty < 1 || ticketQty > 3) {
        displayError('ticketQty');
        totalCostElement.textContent = "";
        document.getElementById('contactSection').style.display = 'none';
    } else {
        hideError('ticketQty');
        let totalCost = parseFloat(ticketQty) * 10.00; 
        // ticket cost is $10.00
        totalCostElement.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
        document.getElementById('contactSection').style.display = 'block';
    }
}

// contact information section
function completePurchase() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    // validation
    if (name.trim() === "") {
        displayError('name');
    } else {
        hideError('name');
    }

    if (email.trim() === "") {
        displayError('email');
    } else {
        hideError('email');
    }

    // if no errors, show purchase confirmation
    if (name.trim() !== "" && email.trim() !== "") {
        clearInterval(timer); // Stop the timer
        alert(`Thank you for your purchase!\nTotal Amount: ${document.getElementById('totalCost').textContent}`);
    }
}

// function to display an error and change background color
function displayError(elementId) {
    document.getElementById(elementId).classList.add('error');
}

// function to hide error and revert background color
function hideError(elementId) {
    document.getElementById(elementId).classList.remove('error');
}

// // Reset Form Functionality
//         function resetForm() {
//             document.getElementById('ticketSection').reset();
//             document.getElementById('contactSection').reset();
//             hideError('ticketQty');
//             hideError('name');
//             hideError('email');
//  }