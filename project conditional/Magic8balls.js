let userName = 'alwiiiiii';

// userName ? console.log(`Hello ${userName}`) : console.log('Hello');


let userQuestion ='Can i graduate from hacktiv8 and get a teacher title?'

console.log(`${userName} has asked - ${userQuestion}`)

let randomNumber = Math.floor(Math.random()* 8);

let eightBall = '';


switch (randomNumber) {
    case 0:
        eightBall = 'Insyallah'
        break;
    case 1:
        eightBall ='Kayaknya enggak deh :#'
        break;
    case 2:
        eightBall ='Saya cuma bisa bantu doa'
        break;
    case 3:
        eightBall ='Tentu saja'
        break;
    case 4:
        eightBall ='Sepertinya anda akan gagal'
        break;
    case 5:
        eightBall ='Coba lagi tahun depan'
        break;
    case 6:
        eightBall ='Jika anda yakin anda pasti bisa'
        break;
    case 7:
        eightBall ='Huffft'
            break;
}
console.log(`The magic balls says - ${eightBall}`)