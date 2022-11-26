//carts და favorites მასივების შექმნა:
let carts = [];
let favorites = [];

// keyboard, monitor და webcam ობიექტების შექმნა (მათი თვისებების აღწერა):
let keyboard = {
  name: "Keyboard",
  description: "Logitech MK270 Wireless Keyboard And Mouse Combo For Windows, 2.4 GHz Wireless, Compact Mouse, 8 Multimedia And Shourtcut Keys, For PC, Laptop",
  rating: 4,
  price: 30,
  currency: "USD",
  deliverayDate: "Mon, Nov 21",
  productId: Math.random()   //ეს ფუნქცია მიანიჭებს რენდომ ნომერს. ფრჩხილები აუცილებელია ფუნქციის გამოსაძახებლად, სხვა შემთხვევაში, გამოიტანს ჩვენ მიერ აღწერილი ფუნქციის ტანს (აღწერას) და ნომერი არ მიენიჭება (პრაქტიკაში ნივთს ენიჭება თავისი უნიკალური კოდი). random რიცხვი Id-ში ჩაისეტება და აღარ შეიცვლება
}

let monitor = {
  name: "Monitor",
  description: "Sceptre 24' Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203r SEries)",
  rating: 4,
  price: 99,
  oldPrice: 124.97,
  currency: "USD",
  deliverayDate: "Fri, Nov 25",
  productId: Math.random() 
}

let webcam = {
  name: "Webcam",
  description: "Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling, Clear Stereso Audio, HD Light Correction, Works with Skype, Zoom, FaceTime",
  rating: 4,
  price: 69,
  currency: "USD",
  deliverayDate: "Fri, Nov 25",
  productId: Math.random()
}

// ობიექტის ჩამატება carts მასივში:
function addItemsToCarts(item){                       // carts.push(keyboard, monitor, webcam);
  carts.push(item)
}        

//შეიქმნა ზოგადი ფუნქცია, რომელიც ობიექტში ჩაამატებს ელემენტებს, ამიტომ ფუნქციას პარამენტრად გადაეცა item. როდესაც ფუნქციას გამოვიძახებთ იქ არგუმენტად გადავცემთ იმას, რისი ჩასმაც გვურს carts მასივში

//ობიექტის ჩამატება favorites მასივში:
function addItemsToFavorites(item){                       // favorites.push(keyboard, monitor, webcam);
  favorites.push(item)
}     

//carts მასივიდან ყველა ელემენტის ამოშლა:
function clearCarts(){

}



carts.splice(0, carts.length);             //პირველი პარამეტრი მიუთითებს, სად უნდა დაემატოს ახალი ელემენტები; მეორე, რამდენი ელემენტი წაიშალოს.

//favorites მასივიდან ყველა ელემენტის ამოშლა:
favorites.splice(0, favorites.length);

// ობიექტების rating-ების გაზრდდა 5-მდე:
let increaseRating;
for (let i = 0; i < carts.length; i++){
  increaseRating = Math.ceil(4.5)
}

increaseRating();

// ობიექტების rating-ების შემცირება 0-მდე:

// ობიექტების დაბრუნება carts მასივში:
carts.slice(0);
