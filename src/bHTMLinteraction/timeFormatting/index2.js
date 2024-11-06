function getDayOfWeek(day) {

    switch (day) {

        case 1:
            return 'Sunday';

        case 2:
            return 'Monday';

        case 3:
            return 'Tuesday';
        
        case 4:
            return 'Wednesday';

        case 5:
            return 'Thursday';

        case 6:
            return 'Friday';

        case 7:
            return 'Saturday';

        default:
            return '?!'

    }

}

const date2 = new Date();
const dayOfWeek = date2.getDay() + 1; // The days also start from 0

console.log('dayOfWeek', getDayOfWeek(dayOfWeek));
console.log(date2);