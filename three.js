const userText = prompt("Введите текст, который нужно перевернуть:");

if (userText === null) {
    alert("Вы отменили игру.");
} else {
    const reversed = userText.split('').reverse().join('');
    alert(`Перевернутый текст: ${reversed}`);
}