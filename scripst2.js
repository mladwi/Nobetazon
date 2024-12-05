function calculateDose() {
    const age = parseInt(document.getElementById('age').value);
    const bodyPart = document.getElementById('bodyPart').value;

    let dose = '';
    let part = '';

    if (isNaN(age) || age <= 0) {
        dose = 'Iltimos, yoshingizni to‘g‘ri kiriting!';
    } else {
        if (age >= 0 && age <= 1) {
            switch (bodyPart) {
                case 'Face and Neck':
                    dose = '1 FTU';
                    part = 'Yuzga va bo‘yinga surtish kerak.';
                    break;
                case 'Arm and Hand':
                    dose = '1 FTU';
                    part = 'Qo‘lga va kaftga surtish kerak.';
                    break;
                case 'Leg and Foot':
                    dose = '1.5 FTU';
                    part = 'Oyoq va tizzaga surtish kerak.';
                    break;
                case 'Anterior chest and abdomen':
                    dose = '1 FTU';
                    part = 'Old ko‘krak qafasi va qoringa surtish kerak.';
                    break;
                case 'Back and Buttocks':
                    dose = '1.5 FTU';
                    part = 'Orqa va dumbalarga surtish kerak.';
                    break;
            }
        } else if (age >= 2 && age <= 3) {
            switch (bodyPart) {
                case 'Face and Neck':
                    dose = '1.5 FTU';
                    part = 'Yuzga va bo‘yinga surtish kerak.';
                    break;
                case 'Arm and Hand':
                    dose = '1.5 FTU';
                    part = 'Qo‘lga va kaftga surtish kerak.';
                    break;
                case 'Leg and Foot':
                    dose = '2 FTU';
                    part = 'Oyoq va tizzaga surtish kerak.';
                    break;
                case 'Anterior chest and abdomen':
                    dose = '2 FTU';
                    part = 'Old ko‘krak qafasi va qoringa surtish kerak.';
                    break;
                case 'Back and Buttocks':
                    dose = '3 FTU';
                    part = 'Orqa va dumbalarga surtish kerak.';
                    break;
            }
        } else if (age >= 3 && age <= 6) {
            switch (bodyPart) {
                case 'Face and Neck':
                    dose = '1.5 FTU';
                    part = 'Yuzga va bo‘yinga surtish kerak.';
                    break;
                case 'Arm and Hand':
                    dose = '2 FTU';
                    part = 'Qo‘lga va kaftga surtish kerak.';
                    break;
                case 'Leg and Foot':
                    dose = '3 FTU';
                    part = 'Oyoq va tizzaga surtish kerak.';
                    break;
                case 'Anterior chest and abdomen':
                    dose = '3 FTU';
                    part = 'Old ko‘krak qafasi va qoringa surtish kerak.';
                    break;
                case 'Back and Buttocks':
                    dose = '3.5 FTU';
                    part = 'Orqa va dumbalarga surtish kerak.';
                    break;
            }
        } else if (age >= 6 && age <= 10) {
            switch (bodyPart) {
                case 'Face and Neck':
                    dose = '2 FTU';
                    part = 'Yuzga va bo‘yinga surtish kerak.';
                    break;
                case 'Arm and Hand':
                    dose = '2.5 FTU';
                    part = 'Qo‘lga va kaftga surtish kerak.';
                    break;
                case 'Leg and Foot':
                    dose = '4.5 FTU';
                    part = 'Oyoq va tizzaga surtish kerak.';
                    break;
                case 'Anterior chest and abdomen':
                    dose = '3.5 FTU';
                    part = 'Old ko‘krak qafasi va qoringa surtish kerak.';
                    break;
                case 'Back and Buttocks':
                    dose = '5 FTU';
                    part = 'Orqa va dumbalarga surtish kerak.';
                    break;
            }
        } else if (age > 10) {switch (bodyPart) {
            case 'Face and Neck':
                dose = '2.5 FTU';
                part = 'Yuzga va bo‘yinga surtish kerak.';
                break;
            case 'Arm and Hand':
                dose = '4 FTU';
                part = 'Qo‘lga va kaftga surtish kerak.';
                break;
            case 'Leg and Foot':
                dose = '8 FTU';
                part = 'Oyoq va tizzaga surtish kerak.';
                break;
            case 'Anterior chest and abdomen':
                dose = '7 FTU';
                part = 'Old ko‘krak qafasi va qoringa surtish kerak.';
                break;
            case 'Back and Buttocks':
                dose = '7 FTU';
                part = 'Orqa va dumbalarga surtish kerak.';
                break;
        }
    }
}

document.getElementById('doseResult').innerText = `${dose}. ${part}`;
}