var images = [
    {src:"unikatni_pokloni.jpg",      alt:"Unikatni Pokloni"},
    {src:"dečije_igračke.jpg",      alt:"Dečije Igračke"},
    {src:"drvena_galantrija.jpg",      alt:"Drvena Galantrija"},
    {src:"nameštaj1.jpg",      alt:"Nameštaj"},
    {src:"nameštaj2.jpg",      alt:"Nameštaj"},
    {src:"cnc_sečenje1.jpg",      alt:"CNC sečenje"},
    {src:"cnc_sečenje2.jpg",      alt:"CNC sečenje"},
    {src:"cnc_sečenje3.jpg",      alt:"CNC sečenje"},
    {src:"cnc_sečenje4.jpg",      alt:"CNC sečenje"},
    {src:"lasersko_sečenje1.jpg",      alt:"Lasersko sečenje"},
    {src:"lasersko_sečenje2.jpg",      alt:"Lasersko sečenje"},
    {src:"lasersko_sečenje3.jpg",      alt:"Lasersko sečenje"},
    {src:"lasersko_sečenje4.jpg",      alt:"Lasersko sečenje"},
];

var galleryMain = document.getElementById("container");
var imgContent = `<div class="container">`;

//console.log(galleryMain);
//console.log(imgContent);

images.forEach(image =>{
    imgContent += `<img src="assets/img/${image.src}">`;

})
imgContent += `</div>`;
console.log(imgContent);

galleryMain.innerHTML = imgContent;

