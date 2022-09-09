



function longestSubstringWithoutDuplication(string) {
    if (string.length < 2) return string
    const arr = string.split('')
    const res = []
    let index = []
   
    //without duplicate
    const dup = arr.filter((item, index) => arr.indexOf(item) != index)
    if (dup.length == 0) {
        return string
    } else {

        //with duplicate
        for (let i = 0; i < arr.length - 1; i++) {
            index.push(arr.lastIndexOf(string[i]))
        }
    
        for (let i = 0; i < arr.length - 2; i++) {
            if (index[i] === index[i + 2]) {
                res.push(index[i + 1])
            }
    
        }
  
    
        const longest = string.substring(res[0], res[1] + 1)
  
        return longest;
    }
}
  
console.log(longestSubstringWithoutDuplication('decadevsindecagonarelit'))