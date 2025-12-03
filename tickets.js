// Calculate total ticket price
function calculateTotal() {
    let thursInput = document.getElementById("thursday").value;
    let friInput = document.getElementById("friday").value;
    let satInput = document.getElementById("saturday").value;
    let halloweenInput = document.getElementById("halloween").value;

    // Validate input as a number.
    if (!isValidNumber(thursInput) ||
        !isValidNumber(friInput) ||
        !isValidNumber(satInput) ||
        !isValidNumber(halloweenInput)) {

        document.getElementById("result").innerHTML = "<span style='color:red;'>Invalid quantity</span>";
        return;
    }

    let thursQty = parseInt(thursInput) || 0;
    let friQty = parseInt(friInput) || 0;
    let satQty = parseInt(satInput) || 0;
    let halloweenQty = parseInt(halloweenInput) || 0;

    // ticket pricess
    const PRICE_THURS = 8;
    const PRICE_FRI_SAT = 10;
    const PRICE_HALLOWEEN = 12;
    const TAX_RATE = 0.06;

    //  subtotal
    let subtotal =
        (thursQty * PRICE_THURS) +
        (friQty * PRICE_FRI_SAT) +
        (satQty * PRICE_FRI_SAT) +
        (halloweenQty * PRICE_HALLOWEEN);

    // calc tax and total
    let tax = subtotal * TAX_RATE;
    let total = subtotal + tax;

    // Display Results
    document.getElementById("result").innerHTML =
        `Subtotal: $${subtotal.toFixed(2)}<br>
         Tax (6%): $${tax.toFixed(2)}<br>
         <strong>Total Cost: $${total.toFixed(2)}</strong>`;
}

function isValidNumber(value) {
    return value === "" || /^[0-9]+$/.test(value);
}