const Messages = [
    "Are you sure?",
    "Think about it?",
    "Pretty please..?",
    "Are you positive?",
    "Are you REALLY positive??",
    "Im on my knees pls",
    "JUST THINK ABOUT IT ONE LAST TIME",
    "fine.."
];

let messagesIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = Messages[messagesIndex];

    if (messagesIndex < Messages.length) {
        messagesIndex++;
    } else {
        window.location.href = "No.html";
    }
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

}

function handleYesClick() {
    window.location.href = "Yes.html";
}u