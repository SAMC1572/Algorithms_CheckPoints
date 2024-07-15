function analyzeSentence() {
    const sentence = document.getElementById('sentence').value.trim();

    if (!sentence.endsWith('.')) {
        alert('The sentence must end with a period.');
        return;
    }

    const length = sentence.length;
    const words = sentence.slice(0, -1).split(' ').length;
    const vowels = sentence.match(/[aeiou]/gi)?.length || 0;

    document.getElementById('result').innerHTML = `
        <p>Length of the sentence: ${length} characters</p>
        <p>Number of words: ${words}</p>
        <p>Number of vowels: ${vowels}</p>
    `;
}
