
let img = document.getElementById('image');

let images = [
    '<img src="images/pic1.jpeg" class="img" >',
    '<img src="images/pic2.jpeg" class="img">',
    '<img src="images/pic3.jpeg" class="img">',
    '<img src="images/pic5.jpeg" class="img">',
    '<img src="images/pic6.jpeg" class="img">',
    '<img src="images/pic7.jpeg" class="img">',
    '<img src="images/pic8.jpeg" class="img">',
    '<img src="images/pic9.jpeg" class="img">',
    '<img src="images/pic10.jpeg" class="img">',
    '<img src="images/pic11.jpeg" class="img">',
    '<img src="images/pic12.jpeg"  class="img">',
    '<img src="images/pic14.jpeg" class="img">',
    '<img src="images/pic15.jpeg" class="img">',
    '<img src="images/pic13.jpeg" class="img">',
    '<img src="images/pic18.jpeg" class="img">',
    '<img src="images/pic17.jpeg" class="img">',
    '<img src="images/pic20.jpeg" class="img" >',
    '<img src="images/pic21.jpeg"  class="img">',
  
];
document.querySelector(".btn").addEventListener("click", function(){
    var random = images[Math.floor(Math.random() * images.length)]
    console.log(random);
    img.innerHTML= random;
});