/*===================== Common Function =====================*/
function handleProductChange(product, isIncrease) {
    const ProductInput = document.getElementById(product + '-count').value;
    const ProductCount = parseInt(ProductInput);
    // const newProductCount = ProductCount - 1; // const newProductCount = ProductCount + 1;
    let newProductCount = ProductCount; //initial value
    if (isIncrease == true) {
        newProductCount = ProductCount + 1;
    }
    if (isIncrease == false && ProductCount > 0) {
        newProductCount = ProductCount - 1;
    }
    document.getElementById(product + '-count').value = newProductCount;

    // const ProductTotal = newProductCount * 1219; //per unit price
    let ProductTotal = 0;
    if (product == 'phone') {
        ProductTotal = newProductCount * 1219;
    }
    if (product == 'case') {
        ProductTotal = newProductCount * 59;
    }
    document.getElementById(product + '-Total').innerText = ProductTotal;
}


/*---------------- Phone Even Handler start ----------------*/

// // phone-increase even handler
// document.getElementById('phone-increase').addEventListener('click', function () {
//     handlePhoneChange(true);
// });

// // phone-decrease even handler
// document.getElementById('phone-decrease').addEventListener('click', function () {
//     handlePhoneChange(false);
// });


/* Merge common function */

// function handlePhoneChange(isIncrease) {
//     const PhoneInput = document.getElementById('phone-count').value;
//     const PhoneCount = parseInt(PhoneInput);
//     // const newPhoneCount = PhoneCount - 1; // const newPhoneCount = PhoneCount + 1;
//     let newPhoneCount = PhoneCount; //initial value
//     if (isIncrease == true) {
//         newPhoneCount = PhoneCount + 1;
//     }
//     if (isIncrease == false && PhoneCount > 0) {
//         newPhoneCount = PhoneCount - 1;
//     }
//     document.getElementById('phone-count').value = newPhoneCount;

//     const PhoneTotal = newPhoneCount * 1219; //per unit price
//     document.getElementById('phone-Total').innerText = PhoneTotal;
// }




// // phone-increase even handler
// document.getElementById('phone-increase').addEventListener('click', function () {
//     const PhoneInput = document.getElementById('phone-count').value;
//     const PhoneCount = parseInt(PhoneInput);
//     const newPhoneCount = PhoneCount + 1; 
//     document.getElementById('phone-count').value = newPhoneCount;

//     const PhoneTotal = newPhoneCount * 1219;
//     document.getElementById('phone-Total').innerText = PhoneTotal;
// });

// // phone-decrease even handler
// document.getElementById('phone-decrease').addEventListener('click', function () {
//     const PhoneInput = document.getElementById('phone-count').value;
//     const PhoneCount = parseInt(PhoneInput);
//     const newPhoneCount = PhoneCount - 1;
//     document.getElementById('phone-count').value = newPhoneCount;

//     const PhoneTotal = newPhoneCount * 1219; //per unit price
//     document.getElementById('phone-Total').innerText = PhoneTotal;
// });



/*---------------- Case Even Handler start ----------------*/ 

// // Case-increase even handler
// document.getElementById('case-increase').addEventListener('click', function () {
//     handleCaseChange(true);
// });

// // Case-decrease even handler
// document.getElementById('case-decrease').addEventListener('click', function () {
//     handleCaseChange(false);
// });


/* Merge common function */ 

// function handleCaseChange(isIncrease) {
//     const CaseInput = document.getElementById('case-count').value;
//     const CaseCount = parseInt(CaseInput);
//     // const newCaseCount = CaseCount - 1; // const newCaseCount = CaseCount + 1;
//     let newCaseCount = CaseCount; //initial value
//     if (isIncrease == true) {
//         newCaseCount = CaseCount + 1;
//     }
//     if (isIncrease == false && CaseCount > 0) {
//         newCaseCount = CaseCount - 1;
//     }
//     document.getElementById('case-count').value = newCaseCount;

//     const CaseTotal = newCaseCount * 59; //per unit price
//     document.getElementById('case-Total').innerText = CaseTotal;
// }




// // Case-increase even handler
// document.getElementById('case-increase').addEventListener('click', function () {
//     const CaseInput = document.getElementById('case-count').value;
//     const CaseCount = parseInt(CaseInput);
//     const newCaseCount = CaseCount + 1;
//     document.getElementById('case-count').value = newCaseCount;

//     const CaseTotal = newCaseCount * 59; //per unit price
//     document.getElementById('case-Total').innerText = CaseTotal;
// });

// // Case-decrease even handler
// document.getElementById('case-decrease').addEventListener('click', function () {
//     const CaseInput = document.getElementById('case-count').value;
//     const CaseCount = parseInt(CaseInput);
//     const newCaseCount = CaseCount - 1;
//     document.getElementById('case-count').value = newCaseCount;

//     const CaseTotal = newCaseCount * 59; //per unit price
//     document.getElementById('case-Total').innerText = CaseTotal;
// });

/*---------------- Case Even Handler end ----------------*/ 