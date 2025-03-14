gsap.to("#page2 img",{
     width:"100%",
     scrollTrigger:{
        trigger : "#page2",//while using pin target the parent element
        scroller : "body",
        markers : true,
        start : "top 0%",
        end : "top -100%",
        scrub : 2,
        pin : true
     }
})