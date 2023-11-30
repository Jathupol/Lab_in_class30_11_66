function hasdercase(text) {
    let lowercaseText = text.toLowerCase();

    return lowercaseText.includes('sex') || lowercaseText.includes('xxx') || lowercaseText.includes('porn');
}

console.log(hasdercase("sex to the more"));
console.log(hasdercase("love you"));
