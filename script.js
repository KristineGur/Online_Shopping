//carts და favorites მასივების შექმნა:
let carts = [];
let favorites = [];

// keyboard, monitor და webcam ობიექტების შექმნა (მათი თვისებების აღწერა):
let keyboard = {
  name: "Keyboard",
  description:
    "Logitech MK270 Wireless Keyboard And Mouse Combo For Windows, 2.4 GHz Wireless, Compact Mouse, 8 Multimedia And Shourtcut Keys, For PC, Laptop",
  rating: 4,
  price: 30,
  currency: "USD",
  deliverayDate: "Mon, Nov 21",
  productId: Math.random(), //ეს ფუნქცია მიანიჭებს რენდომ ნომერს. ფრჩხილები აუცილებელია ფუნქციის გამოსაძახებლად, სხვა შემთხვევაში, გამოიტანს ჩვენ მიერ აღწერილი ფუნქციის ტანს (აღწერას) და ნომერი არ მიენიჭება (პრაქტიკაში ნივთს ენიჭება თავისი უნიკალური კოდი). random რიცხვი Id-ში ჩაისეტება და აღარ შეიცვლება
};

let monitor = {
  name: "Monitor",
  description:
    "Sceptre 24' Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203r SEries)",
  rating: 4,
  price: 99,
  oldPrice: 124.97,
  currency: "USD",
  deliverayDate: "Fri, Nov 25",
  productId: Math.random(),
};

let webcam = {
  name: "Webcam",
  description:
    "Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling, Clear Stereso Audio, HD Light Correction, Works with Skype, Zoom, FaceTime",
  rating: 5,
  price: 69,
  currency: "USD",
  deliverayDate: "Fri, Nov 25",
  productId: Math.random(),
};

// ობიექტის ჩამატება carts მასივში:
function addItemsToCarts(item) {
  carts.push(item);
}
//შეიქმნა ზოგადი ფუნქცია, რომელიც ობიექტში ჩაამატებს ელემენტებს, ამიტომ ფუნქციას პარამენტრად გადაეცა item. როდესაც ფუნქციას გამოვიძახებთ იქ არგუმენტად გადავცემთ იმ ობიექტის სახელს, რისი ჩასმაც გვურს carts მასივში.
// addItemsToCarts(webcam), როდესაც ფუნქციას გამოვიძახებთ დალოგავს undefined-ს, რადგან არაფერი ჰქონდა დასაბრუნებელი (return), მაგრამ თუ დავლოგავთ carts-ს, ვნახავთ, რომ მასივში უკვე ჩამატებულია webcam ობიექტი, თავისი თვისებებით

//ობიექტის ჩამატება favorites მასივში:
function addItemsToFavorites(item) {
  favorites.push(item);
}

//carts მასივიდან ყველა ელემენტის ამოშლა:
function clearCarts() {
  carts = []; //carts მასივს მივანიჭეთ ახალი მასივი
}

//favorites მასივიდან ყველა ელემენტის ამოშლა:
function clearFavorites() {
  favorites = []; //favorites მასივს მივანიჭეთ ახალი მასივი
}

// ობიექტების rating-ების გაზრდდა 5-მდე:
// function addRatingtoItem(item){
//   if (item.rating < 5){
//     item.rating = item.rating + 1;    //item.rating += 1; მოკლე ჩანაწერი
//   }
// }
// item.rating-ში item ნებისმიერი ობიქტია, რომელსაც გამოვიძახებთ. item.rating იმიტომ უდრის item.rating + 1-ს, რომ როდესაც ერთით გაიზრდება ისევ რეიტიგში აისახოს ეს ზრდა - ობიექტში გაიზარდოს.
// ეს ფუნქცია შეგვეძლო ასეც ჩაგვეწერა
// function addRatingtoItem(item){
//   if (item.rating === 5){
//     return
//   }
//   else {
//     item.rating = item.rating + 1;
//   }
// }

//მაქსიმალური რეიტინგი 5-ია, მაგრამ თუ მოგვიხდება მაქსრეიტინგის გაზრდა, მაგ., 10-მდე, მთელ კოდში ამ ცვლილების განხორციელება, ყველგან სადაც მაქს რეიტინგი - 5 გვქონდა ჩაწერილი არ უნდა მოგვიწიოს, ამიტომ შეგვიძლია გამოვიძახოთ const ცვლადი, დავარქვათ MAX_RATING და მივანიჭოთ 5-ის მნიშვნელობა. და კოდში თუ დაგვჭირდება მაქსრეითინგის მითითება, ყველგან ჩავწეროთ MAX_RATING და თუ მაქსრეიტინგის გაზრდა დაგვჭირდება უბრალოდ ცვლლადში ცავასწორებთ და დანარჩენი ცვლილებები თავისით განხორციელდება. იგივე მინიმალურ რეიტინგზე.
// ამის მიხედვით, ზედა მაგალითი შეგვძლო ასე ჩაგვეწერა:


const MAX_RATING = 5;
//Function Declaration
function addRatingtoItem(item) {           
  if (item.rating < MAX_RATING) {
    item.rating += 1;
  }
}

//Function Expression
let addRatingtoItem = function(){        
  // აქ რაღაც კოდი                         
}
//                                         Function Expression: ფუნქციის სახელი გადმოდის კოდის სახელში. უფრო გავრცელებული მეთოდია. Function Declaration-სგან განხვავდება: ჰოისთინგით. Function Declaration-ისას ჯერ რომ გამოვიძახოთ ფუნქცია და მერე ავღწეროთ იმუშავებს, რადგან ფუნქციის აღწერა ჰოისთდება (აფრინდება) მაღლა. ხოლო, Function Expression არ ჰოისთდება, თუ ჯერ გამოვიძახებთ ფუნქციას და მერე ავღწერთ Expression, კოდი არ იმუშავებს

//Arrow Function
let addRatingtoItem = () => {   
  // აქ რაღაც კოდი  
}
//თუ მხოლოდ ერთი პარამეტრი გვაქვს გადასაცემი, შეგვიძლია მოკლედ ასე ჩავწეროთ
let addRatingtoItem = parameter => parameter + 2


// ობიექტების rating-ების შემცირება 0-მდე:
const MIN_RATING = 0;
function removeRatingToItem(item) {
  if (item.rating < MIN_RATING) {
    item.rating -= 1;
  }
}

// function getCountCartsItems(){
//   let length = carts.length;  //ამ ფუნქციას პარამეტრი არ გააჩნია, უბრალოდ აბრუნებს length-ს
//   return length; //მაღლა length კი გაიგო, მაგრამ აქ გამოიტანს (დააბრუნებს) მის მნიშვნელობას
// }

//ეს მოკლედ შეგვეძლო ასე ჩაგვეწერა
function getCountOfCartsItems() {
  return carts.length; //თან ლეგს გაიგებს და თან გამოიტანს
}

// ობიექტების დაბრუნება favorites მასივში:
function getCountOfFavoritesItems() {
  return favorites.length;
}

//                                             ციკლები Loop
// 1) for
// 2) for in
// 3) for of
// 4) while
// 5) do while

//                                               1) for
//გამოვითვლით სრუდენტების ასაკის საშუალოს. for ძირითადად მასივებში გამოიყენება
// const studentsAges = [18, 16, 21, 25, 22, 19, 16];
// for (let i = 0; i < studentsAges.length; i++){

// }

//                                              2) for in
// for in-ი დაუვლის ობიექტის ველიუებს
// for (let key in webcam){   //key პირობითად დაერქვა webcam ობიექტის ფროფერთებს
//   console.log(key)   //დალოგავს webcam ობიექტის ყველა ფროფერთის
// }

// for (let key in webcam){ 
//   console.log(webcam[key])   //გამოიტანს webcam ობიექტის ველიუებს
// }

//                                                3) for of
//ძირითადად გამოიყენება მასივებისთვის
// for (let item of studentsAges){
//   console.log(item)
// }

//                                               4) while
// let x = 10;
// while (x > 0){
//   console.log (x)
//   x -= 1;
// }

// 5)                                              do while



