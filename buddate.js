function addDate() {
    const input = document.getElementById("dateInput").value.trim();
    // ตรวจสอบรูปแบบ YYYY-MM-DD
    const regex = /^(\d{4})-(\d{2})-(\d{2})$/;
    const match = input.match(regex);
    if (!match) {
        alert("false");
        return;
    }
    let [_, year, month, day] = match;
    year = parseInt(year, 10);
    month = parseInt(month, 10);
    day = parseInt(day, 10);

    // แปลงปี พ.ศ. เป็น ค.ศ.
    const gregorianYear = year - 543;
    const date = new Date(gregorianYear, month - 1, day);

    // ตรวจสอบความถูกต้องของวันที่
    if (
        date.getFullYear() !== gregorianYear ||
        date.getMonth() !== month - 1 ||
        date.getDate() !== day
    ) {
        alert("false");
        return;
    }

    // แปลงวันเป็นภาษาไทย
    const daysThai = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์"];
    alert("วัน " + daysThai[date.getDay()]);
}