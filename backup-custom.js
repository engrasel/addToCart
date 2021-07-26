// phone-increase even handler
document.getElementById('phone-increase').addEventListener('click', function () {
    const PhoneInput = document.getElementById('phone-count').value;
    const PhoneCount = parseInt(PhoneInput);
    const newPhoneCount = PhoneCount + 1;
    document.getElementById('phone-count').value = newPhoneCount;

    const PhoneTotal = newPhoneCount * 1219;
    document.getElementById('phone-Total').innerText = PhoneTotal;
});

// phone-decrease even handler
document.getElementById('phone-decrease').addEventListener('click', function () {
    const PhoneInput = document.getElementById('phone-count').value;
    const PhoneCount = parseInt(PhoneInput);
    const newPhoneCount = PhoneCount - 1;
    document.getElementById('phone-count').value = newPhoneCount;

    const PhoneTotal = newPhoneCount * 1219; //per unit price
    document.getElementById('phone-Total').innerText = PhoneTotal;
});




// case-increase even handler
document.getElementById('case-increase').addEventListener('click', function () {
    const CaseInput = document.getElementById('case-count').value;
    const CaseCount = parseInt(CaseInput);
    const newCaseCount = CaseCount + 1;
    document.getElementById('case-count').value = newCaseCount;

    const CaseTotal = newCaseCount * 59; //per unit price
    document.getElementById('case-Total').innerText = CaseTotal;
});

//case-decrease even handler
document.getElementById('case-decrease').addEventListener('click', function () {
    const CaseInput = document.getElementById('case-count').value;
    const CaseCount = parseInt(CaseInput);
    const newCaseCount = CaseCount - 1;
    document.getElementById('case-count').value = newCaseCount;

    const CaseTotal = newCaseCount * 59; //per unit price
    document.getElementById('case-Total').innerText = CaseTotal;
});
