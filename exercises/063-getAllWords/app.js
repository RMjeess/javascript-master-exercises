function getAllWords(str) {
    let a = str.replace(/[^A-Za-z0-9]+/g, " ");
    let newArr = a.trim().split(" ");
    return newArr
}

console.log(getAllWords('Radagast the Brown'));
