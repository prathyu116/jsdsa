function longestWordLen(s) {
    let n = s.length;
    let res = 0, currLen = 0;

    for (let i = 0; i < n; i++) {
    
        // If current character is not a space,
        // it's part of the current word.
        if (s[i] !== ' ') {
            currLen++;
        } else {
        
            // End of word, update the result 
            // and reset current length.
            res = Math.max(res, currLen);
            currLen = 0;
        }
    }

    // Check last word since there's no space after it.
    return Math.max(res, currLen);
}

// Driver function
let s = "I am an intern at geeksforgeeks";
console.log(longestWordLen(s));
