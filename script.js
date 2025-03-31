document.getElementById("calculate").addEventListener("click", function() {
    // الحصول على القيم من الإدخالات
    let kind = document.getElementById("KindChoice").value;
    let pricePerKg = parseFloat(document.getElementById("Price").value);
    let peopleCount = parseInt(document.getElementById("People").value);
    
    // التأكد من أن القيم صحيحة
    if (isNaN(pricePerKg) || isNaN(peopleCount) || pricePerKg <= 0 || peopleCount <= 0) {
        document.querySelector(".result").innerHTML = "<p style='color: red;'>الرجاء إدخال قيم صحيحة</p>";
        return;
    }
    
    // قيم مقدار الصاع لكل نوع
    const sa3Values = {
        "الأرز": 2,
        "القمح": 2.5,
        "التمر": 3,
        "الزبيب": 1.625,
        "الذرة": 2
    };
    
    // حساب الزكاة
    let sa3Amount = sa3Values[kind];
    let totalKg = sa3Amount * peopleCount;
    let totalPrice = totalKg * pricePerKg;
    
    // عرض النتيجة
    document.querySelector(".result").innerHTML = `
        <p>كمية الزكاة المطلوبة: <strong>${totalKg.toFixed(2)}</strong> كجم من ${kind}</p>
        <p>المبلغ المستحق: <strong>${totalPrice.toFixed(2)}</strong> جنيه</p>
    `;
});