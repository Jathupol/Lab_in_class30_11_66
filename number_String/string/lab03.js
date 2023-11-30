function ucFirst(str) {
    if (!str) return str; // กรณีข้อความว่างเปล่าหรือไม่มี
    
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// ตัวอย่างการใช้งาน
let text = "hello, world!";
let newText = ucFirst(text);
console.log(newText); // Output: Hello, world! (ตัวอักษรตัวแรกเป็นตัวพิมพ์ใหญ่)
