// phone-increase even handler
document.getElementById('phone-increase').addEventListener('click', function () {
    const PhoneInput = document.getElementById('phone-count').value;
    const PhoneCount = parseInt(PhoneInput);
    const newPhoneCount = PhoneCount + 1;
    document.getElementById('phone-count').value = newPhoneCount;

    const PhoneTotall = newPhoneCount * 1219;
    document.getElementById('phone-totall').innerText = PhoneTotall;
});

// phone-decrease even handler
document.getElementById('phone-decrease').addEventListener('click', function () {
    const PhoneInput = document.getElementById('phone-count').value;
    const PhoneCount = parseInt(PhoneInput);
    const newPhoneCount = PhoneCount - 1;
    document.getElementById('phone-count').value = newPhoneCount;

    const PhoneTotall = newPhoneCount * 1219; //per unit price
    document.getElementById('phone-totall').innerText = PhoneTotall;
});




// Case-increase even handler
document.getElementById('case-increase').addEventListener('click', function () {
    const CaseInput = document.getElementById('case-count').value;
    const CaseCount = parseInt(CaseInput);
    const newCaseCount = CaseCount + 1;
    document.getElementById('case-count').value = newCaseCount;

    const CaseTotall = newCaseCount * 59; //per unit price
    document.getElementById('case-totall').innerText = CaseTotall;
});

// phone-decrease even handler
document.getElementById('case-decrease').addEventListener('click', function () {
    const CaseInput = document.getElementById('case-count').value;
    const CaseCount = parseInt(CaseInput);
    const newCaseCount = CaseCount - 1;
    document.getElementById('case-count').value = newCaseCount;

    const CaseTotall = newCaseCount * 59; //per unit price
    document.getElementById('case-totall').innerText = CaseTotall;
});