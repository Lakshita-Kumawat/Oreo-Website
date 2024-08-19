let preload = document.getElementById('preload');

window.addEventListener('load', ()=> {
    preload.style.display = "none";
});


gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({scrollTrigger:{
    trigger:'#hero-section',
    // markers:true,
    start:'top centre',
    end:'bottom centre',
    scrub:2,
    pin:true,
}});


tl.to('#top',{
    top:'-50%'
},'tl')

.to('#bottom',{
    bottom:'-60%'
},'tl')

.to('#heading',{
    top:'-50%',
    display:'none'
},'tl')

.to('#centre h2, #centre p',{
    opacity:1,
    y:'20px'
},'appear')

.to('#image-container',{
    opacity:1,
    rotate:'10deg',
    duration:1,
    y:'20px'
},'appear')

.to('#slice1',{
    scale:1.1,
    x:'-50px'
},'open')

.to('#slice2',{
    scale:1.1,
    x:'50px'
},'open')
