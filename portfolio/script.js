var t1 = gsap.timeline();

t1
.to("#fs",{
  height:0,
  duration:2,
  ease: expo.easeInOut
})
.to("#elem",{
  height: "100%",
  duration:2,
  ease: expo.easeInOut
})