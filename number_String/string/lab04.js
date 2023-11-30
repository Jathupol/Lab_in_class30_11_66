function truncate(str, length) {
    if (str.length <= length) return str; // ถ้าความยาวของข้อความน้อยกว่าหรือเท่ากับที่กำหนดให้ ให้คืนค่าเดิม
    
    return str.slice(0, length - 1) + "…"; // ตัดข้อความและเติม ...
}

// ตัวอย่างการใช้งาน
console.log(truncate("What I'd like to tell on this topic is:", 20)); 
// Output: What I'd like to te…

console.log(truncate("Hi everyone!", 20)); 
// Output: Hi everyone!
