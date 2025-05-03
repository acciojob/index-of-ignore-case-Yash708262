function indexOfIgnoreCase(str, subStr) {
    if(!subStr) return 0;
    const n= str.length, m = subStr.length;
    if(m > n) return -1;
    for(let i = 0; i <=n; i++) {
        let found = true;
        for(let j = 0; j < m; j++) {
            if(str[i+j].toLowerCase() !== subStr[j].toLowerCase) {
                found = false;
                break;
            }
        }
        if(found) return i;
    }
    return -1;
}
// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
