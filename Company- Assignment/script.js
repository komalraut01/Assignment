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

/*PS C:\Users\rautk\Desktop\Company- Assignment> node script.js
A-4
M-2
O-1
L-1
Y-1
S-1
H-1
R-1


C-1
H-1
I-2
N-2
M-1
A-2
Y-1
K-2
U-1
L-1
R-1
*/