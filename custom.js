// phone-increase even handler
document.getElementById('phone-increase').addEventListener('click', function () {
    const PhoneInput = document.getElementById('phone-count').value;
    const PhoneCount = parseInt(PhoneInput);
    const newPhoneCount = PhoneCount + 1;
    document.getElementById('phone-count').value = newPhoneCount;
});

// phone-decrease even handler
document.getElementById('phone-decrease').addEventListener('click', function () {
    const PhoneInput = document.getElementById('phone-count').value;
    const PhoneCount = parseInt(PhoneInput);
    const newPhoneCount = PhoneCount - 1;
    document.getElementById('phone-count').value = newPhoneCount;
});

// Case-increase even handler
document.getElementById('case-increase').addEventListener('click', function () {
    const CaseInput = document.getElementById('case-count').value;
    const CaseCount = parseInt(CaseInput);
    const newCaseCount = CaseCount + 1;
    document.getElementById('case-count').value = newCaseCount;
});

// phone-decrease even handler
document.getElementById('case-decrease').addEventListener('click', function () {
    const CaseInput = document.getElementById('case-count').value;
    const CaseCount = parseInt(CaseInput);
    const newCaseCount = CaseCount - 1;
    document.getElementById('case-count').value = newCaseCount;
});