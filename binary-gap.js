function solution(N) {
    // write your code in JavaScript (Node.js 4.0.0)

    var number = N;
    var binary = '';
    var counter = -1;
    var max = 0;
    while(number > 0) {
        var digit = number % 2;
        // console.log('number', number)
        // console.log('binary', binary)
        // console.log('counter', counter)
        // console.log('max', max)
        // console.log('digit', digit)

        if(digit === 1) {
            if(counter > max) {
                max = counter;
            }
            counter = 0;
        } else if(counter >= 0) {
            counter++;
        }

        binary = '' + digit + binary;
        number = parseInt(number / 2);
    }

    //console.log('number, binary:', number, binary);

    return max;
}


console.log(solution(1041))
console.log(solution(15))
console.log(solution(5))
console.log(solution(805306369))
console.log(solution(15))
console.log(solution(15))
