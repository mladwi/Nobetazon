// Tarjimalar obyekti
const translations = {
    uz: {
        title: "Nobetazon",
        description: "Sirtga qo‘llash uchun surtma 0.1% (Betametazon)",
        agePrompt: "Iltimos, yoshingizni kiriting va 'Belgilash' tugmasini bosing.",
        calculateButton: "Belgilash",
        bodyPartPrompt: "Tananing qaysi azosiga dori surtish kerakligini tanlang:",
        doseTitle: "Dori miqdori",
        doseResult: "Iltimos, tananing qaysi azosiga surtishni tanlang",
        Fn: "Yuz va boyin",
        Ah: "Qo'l va kaft",
        Lf: "Oyoq va tizza",
        Ac: "Kokrak va qorin",
        BB: "Orqa va dumbalar",
        mnth: "3-12 oylik",
        ot: "1-3 yosh",
        ts: "3-6 yosh",
        st: "6-10 yosh",
        tp: "10 va undan yuqori yoshdagilarga",
    },
    ru: {
        title: "Нобетазон",
        description: "Мазь для наружного применения 0,1% (Бетаметазон)",
        agePrompt: "Введите возраст и нажмите кнопку 'Рассчитать'.",
        calculateButton: "Рассчитать",
        bodyPartPrompt: "Выберите часть тела для нанесения мази:",
        doseTitle: "Дозировка",
        doseResult: "Пожалуйста, выберите часть тела для нанесения.",
        Fn: "Лицо и шея",
        Ah: "Рука",
        Lf: "Нога и колена",
        Ac: "Грудь и Живот",
        BB: "Задница",
        mnth: "3-12 месяцев",
        ot: "1-3 лет",
        ts: "3-6 лет",
        st: "6-10 лет",
        tp: "от 10 и старше",
    },
};


let currentLanguage = "uz";

function changeLanguage(language) {
    currentLanguage = language;
    updateTexts();
}


function updateTexts() {
    const t = translations[currentLanguage];
    document.getElementById("title").innerText = t.title;
    document.getElementById("description").innerText = t.description;
    document.getElementById("agePrompt").innerText = t.agePrompt;
    document.getElementById("calculateButton").innerText = t.calculateButton;
    document.getElementById("bodyPartPrompt").innerText = t.bodyPartPrompt;
    document.getElementById("doseTitle").innerText = t.doseTitle;
    document.getElementById("doseResult").innerText = t.doseResult;
    document.getElementById("Fn").innerText = t.Fn;
    document.getElementById("Ah").innerText = t.Ah;
    document.getElementById("Lf").innerText = t.Lf;
    document.getElementById("Ac").innerText = t.Ac;
    document.getElementById("BB").innerText = t.BB;
    document.getElementById("mnth").innerText = t.mnth;
    document.getElementById("ot").innerText = t.ot;
    document.getElementById("ts").innerText = t.ts;
    document.getElementById("st").innerText = t.st;
    document.getElementById("tp").innerText = t.tp;
}


updateTexts();


function calculateDose() {
    const ageValue = document.getElementById("age").value;
    const bodyPart = document.getElementById("bodyPart").value;

    let dose = "";
    let part = "";

    // Age groups mapped to the dropdown values
    const ageGroups = {
        "3-12": 0, // 3-12 months
        "1-3": 1,   // 1-3 years
        "3-6": 2,   // 3-6 years
        "6-10": 3,  // 6-10 years
        "10+": 4    // >10 years
    };

    // Doses for different body parts and age groups
    const doses = {
        "Face and Neck": [1, 1.5, 1.5, 2, 2.5],
        "Arm and Hand": [1, 1.5, 2, 2.5, 4],
        "Leg and Foot": [1.5, 2, 3, 4.5, 8],
        "Anterior chest and abdomen": [1, 2, 3, 3.5, 7],
        "Back and Buttocks": [1.5, 3, 3.5, 5, 7],
    };

    const ageGroup = ageGroups[ageValue];

    if (ageGroup === undefined) {
        dose = currentLanguage === "uz" 
            ? "Iltimos, yoshingizni to‘g‘ri kiriting!" 
            : "Пожалуйста, введите правильный возраст!";
        part = "";
    } else {
        dose = doses[bodyPart][ageGroup] + " FTU";
        part = currentLanguage === "uz" 
            ? "Tanlangan tana qismi uchun mos miqdor." 
            : "Подходящая доза для выбранной части тела.";
    }

    document.getElementById("doseResult").innerText = `${dose}. ${part}`;
}