var t = gsap.timeline()
t.from("#nav h3",{
    y : -50,
    opacity : 0,
    delay : 0.4,
    duration : 0.8,
    stagger : 0.22,
})
t.from("#main h1",{
    x : -500,
    opacity:0,
    duration : 0.8,
    stagger : 0.22,
})
t.from("img",{
    x : 100,
    rotate : 45,
    opacity : 0,
    duration : 0.5,
    stagger : 0.5
})