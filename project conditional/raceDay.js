let raceNumber = Math.floor(Math.random()*1000);

let early = true
let age = 10;


if(early && age > 18){
    raceNumber+=1000;
}else if (!early && age > 18){
    raceNumber+=1000;
}


if(early&&age >18){
    console.log(`Your race number start at 9:30 am , your race number is ${raceNumber}`)
}else if(!early && age >18){
    console.log(`Race start at 12:10 pm, your race number is ${raceNumber}`)
}else if (age <18){
    console.log(`Baby run start at 12:00 am, your race number is ${raceNumber}`)
}
