function countcharacters(str) {
    str = str.replace(/\s/g,"").toUpperCase();
    let countMap = new Map();

    for (let char of str){
        countMap.set(char , (countMap.get(char) || 0) + 1);
    }

    for (let [char, count] of countMap){

        console.log(`${char}-${count}`);
    }
}

countcharacters("Amolya Sharma");
console.log("\n");
countcharacters("Chinmay Kulkarni");