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