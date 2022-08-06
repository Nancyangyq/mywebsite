//輪播圖
let i = 1;
let carouselPic=$('section.first div.pic');
let sliderNum=$('section.first div.pic img.img').length;

let clone_first=$('section.first div.pic img.img:first-child').clone();
let clone_last=$('section.first div.pic img.img:last-child').clone();

carouselPic.append(clone_first);
carouselPic.append(clone_last);

carouselPic.css('width',(sliderNum + 2) * 100 + 'vw');

function sliderRight(){
    i++;

    carouselPic.animate({left : i * -100 + 'vw'},500,function(){
        if(i >= (sliderNum + 1)){
            i=1;
            carouselPic.css('left' , i * -100 + 'vw');
        }
    })
}

setInterval(sliderRight,3000);


