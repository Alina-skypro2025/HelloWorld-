document.getElementById('colorButton').addEventListener('click', function() {
    
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const toHex = (n) => n.toString(16).padStart(2, '0');
    const randomColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    
    document.body.style.backgroundColor = randomColor;
});