function indexOfIgnoreCase(str, subStr) {
    let n = str.length;
	let m = subStr.length;
	for(let i = 0; i <= n - m; i++){
		let match = true;
		for(let j = 0; j < m; j++){
			if(str[i+j].toLowerCase() !== subStr[j].toLowerCase()){
				match = false;
				break;
			}
		}
		if(match) return i;
	}
	return -1
}
// Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(indexOfIgnoreCase(s1, s2));
