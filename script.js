const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const copyBtn = document.getElementById('copy-btn');
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');

const encryptionKeys = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

encryptBtn.addEventListener('click', () => {
    let text = inputText.value;
    let encryptedText = text.replace(/[eioua]/g, char => encryptionKeys[char]);
    outputText.textContent = encryptedText || "Ningún mensaje fue encontrado";
});

decryptBtn.addEventListener('click', () => {
    let text = inputText.value;
    let decryptedText = text.replace(/enter|imes|ai|ober|ufat/g, matched => {
        return Object.keys(encryptionKeys).find(key => encryptionKeys[key] === matched);
    });
    outputText.textContent = decryptedText || "Ningún mensaje fue encontrado";
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(outputText.textContent)
        .then(() => alert('Texto copiado!'))
        .catch(err => alert('Error al copiar el texto'));
});
