function perfectRoots(n) {
    const root2 = Math.sqrt(n);
    const root4 = Math.sqrt(root2);
    const root8 = Math.sqrt(root4);
    
    return Number.isInteger(root2) && Number.isInteger(root4) && Number.isInteger(root8);
}
console.log(perfectRoots(256));