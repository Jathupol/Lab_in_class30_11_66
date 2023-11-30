let styles = ['Jazz', 'Blues'];
console.log(styles);

styles.push('Rock-n-Roll');
console.log(styles);

let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = 'Classic';
console.log(styles);

delete styles[0];
console.log(styles); 

let lengthAfterOperations = styles.length;
console.log(lengthAfterOperations); 
