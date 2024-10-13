//alur program
// s1,s2,s3
// console.log('Hello World'); // sebuah statement javascript s1
// console.log('Hello World'); 
// console.log('Hello World'); 


//expresion (sesuatu yang bernilai hasil evaluasi)
10 //expresion => bernilai 10 (literal)
'Hello World' //expresion bernilai 'Hello World' (literal)


//operator
//-Mathematical(+-*/%)
//-Comparison(== === != !== > >= < <=)
//-Logical(!! == !)

//operand 1 operator operand2
console.log("ini adalah hasil operator");
console.log(15+6);
console.log(14-8);
console.log(5*8);
console.log(20/5);
console.log(10%3);

// console.log(19==19);
// console.log(2===2);
// console.log(4!=2);
// console.log(3!=="3")
// console.log(9>5);
// console.log(5<9);
// console.log(9>=9);
// console.log(5<=5);

console.log(true&&true) //Output truee
console.log(false&&true) //Output false
console.log(true||true) //Output true
console.log(true||false) //Output true
console.log(false||false) //Output false
console.log(!true)// simbol ! berarti kebalikanya atau not
console.log(!false)


10 + 10 //expresion (operator tambah) => bernilai 20








//Datatypes (sesuatu yang bernilai punya tipe data)
10 //
console.log("hasil dari typeOf");
console.log(typeof 10);
console.log(typeof "Hello world");
console.log(typeof true);


//tipe data javascript dibagi menjadi 2, yaitu tipe data PRIMITIF dan Tipe data Structured

//Tipe data primitf seperti
//string,Number,Boolean,Null,Undifined

//Tipe data structured seperti
//Array,Object,Function


//variable
console.log('hasil dari variabel');
let a = 10;
let b = 20;
console.log(a+b);


//Point point tentang variabel

//Declaration
let nilai;    //ini namanya deklarasi

//Assignment
nilai= 100; //ini namaya assignment


//reassignment
let result = 100;
result = 20;   //ini namanya reassignment
console.log(result)

//naming convention
let nilaiPertama; //ini namanya camlcase
let nilai_petama; //(Not recomend) snake case
let NilaiPertama; //Pascalcase


//conditional hujan

let kondisi = "meteor"
if (kondisi === "hujan") {
 console.log("Berdiam diri di rumah");    
}else if(kondisi === "meteor"){
    console.log("minta doa ke tuhan");
}else{
    console.log("healing");
}



//FALSY
// falsy atau kadang ditulis falsey, adalah value yang ketika dalam konteks boleean, dia di anggap false
// ini adalah salah satu fitur unik dari javascript, yang berguna, namun kadang juga sering membingungkan
// jadi di javascript, kondisi itu tidak hanya bisa boolean, tapi diluar boleean pun bisa, namun kita
// harus tau beberapa data falsy, atau dianggap false

// DATA FALSY

/*
Data di anggap falsy            keterangan

false                           Boolean yanng dianggap false                               
0, -0                           Number 0 dan -0 dianggap false
"",'',``,                       Semua string kosong dianggap false
null                            null dianggap false
undifined                       undifined dianggap false
NaN                             Not a Number dianggap false
*/

//TRUTHY
//truthy adalah kebalikan dari falsy, dimana data nya dianggap berinilai true
//sederhana sekali sebenernya untuk mengetahui sebuah data itu adalah truthy, yaitu data yang 
//bukan bernilai falsy

let data = "false"
if (data) {
    console.log("true")
}else{
    console.log("false")
}