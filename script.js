// console.log('hello');

// document.write('Hello');

var tempF = 65;
tempf = prompt('What temperature is it in Fahrenheit?');

var tempC = 'The temperature is' + ' ' + (tempF - 30) / 2 + ' ' + 'Celsius!';


if (tempF >= 90) {
    document.write('Stay Inside!');
} else if (tempF >= 70 && tempF < 90) {
    document.write('Wear Sunscreen!');
} else if (tempF >= 55 && tempF < 70) {
    document.write('What a beautiful day!');
} else if (tempF >= 40 && tempF < 55) {
    document.write('You will need a jacket!');
} else if (tempF < 40) {
    document.write('Chilly weather! Beware!');
}




for (var i = 1; i++; i <= 100) {
    if (x % 15 == 0) {
        console.log('FizzBuzz');
    } else if (x % 3 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
