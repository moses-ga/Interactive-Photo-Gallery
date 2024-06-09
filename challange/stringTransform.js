function transformString(s) {
    const length = s.length;
    
    if (length % 15 === 0) {
        const reversedString = s.split('').reverse().join('');
        const asciiCodes = reversedString.split('').map(char => char.charCodeAt(0)).join(' ');
        return asciiCodes;
    } else if (length % 3 === 0) {
      
        return s.split('').reverse().join('');
    } else if (length % 5 === 0) {
       
        const asciiCodes = s.split('').map(char => char.charCodeAt(0)).join(' ');
        return asciiCodes;
    } else {
        return s;
    }
}
// Example usage:
console.log(transformString("Hamburger"));  // Output: "regrubmaH"
console.log(transformString("Pizza"));      // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie"));  // Output: "eikooCpihCetalocohC"

