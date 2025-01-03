let array = ['A','B',];
console.log(array);
// 1. push() - يضيف عناصر إلى نهاية المصفوفة

array.push('C');
console.log("After push:", array);

// 2. pop() - يزيل العنصر الأخير من المصفوفة

array.pop();
console.log("After pop:", array); 

// 3. shift() - يزيل العنصر الأول من المصفوفة

array.shift();
console.log("After shift:", array); 

// 4. concat() - دمج مصفوفتين أو أكثر

let newArray = array.concat(['D','E']);
console.log("After concat:", newArray);

// 5. unshift() -يضيف عناصر إلى بداية المصفوفة

array.unshift('A');
console.log("After unshift:", array);