function calculatePoints(purchaseAmount) {
    const pointsPerHundred = 1; // แต้มต่อทุก 100 บาท

    // คำนวณจำนวนแต้ม
    let points = Math.floor(purchaseAmount / 100) * pointsPerHundred;
    return points;
}

// ตัวอย่างการใช้งาน
let totalPurchase = 600; // ยอดซื้อขายทั้งหมด 550 บาท
let earnedPoints = calculatePoints(totalPurchase);
console.log("Earned Points:", earnedPoints); // ผลลัพธ์: Earned Points: 5
