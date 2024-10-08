function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

// locomotiveAnimation()
var cursor = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
    blur.style.left = (dets.x - 250) + "px"
    blur.style.top = (dets.y - 250) + "px"
})

var h4all = document.querySelectorAll("#nav h5");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale = 3;
        cursor.style.border = "1px solid #fff";
        cursor.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale = 1;
        cursor.style.border = "0px solid #95C11E"
        cursor.style.backgroundColor = "#95C11E"
    })
})


gsap.to("#nav",{
    backgroundColor: "#000",
    duration: "0.5",
    height: "100px",
    scrollTrigger:{
        trigger: "#nav",
        scroll: "#body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }

})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroll: "body",
        // markers: true,
        start: "top -30%",
        end: "top - 100%",
        scrub:2,
    }
})


gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration: 1.5,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 2,
    }

})

gsap.from(".card",{
    scale: 0.5,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger: "#card-box",
        scroller:"body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})

gsap.from("#colon1", {
    y:-70,
    x:-70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller:"body",
        // markers:true,
        start: "top 50%",
        end: "top 45%",
        scrub: 4     
    }
})
gsap.from("#colon2", {
    y:70,
    x:70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller:"body",
        // markers:true,
        start: "top 50%",
        end: "top 45%",
        scrub: 4     
    }
})

gsap.from("#page4 h1",{
    y:"60%",
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end: "top 70%",
        scrub: 2,
    }
})
