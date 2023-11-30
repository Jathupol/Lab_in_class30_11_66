const obj = {};

while (true) {
    const key = prompt('ใส่ key (พิมพ์ "stop" เพื่อหยุด)');
    if (key === 'stop') break;

    const value = prompt('กรุณาใส่ค่าสำหรับ key "$key"');
    obj[key]= value;
}
alert(obj);