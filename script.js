/* -------------------------------------------------------------------------- */
/*                                    LENIS                                   */
/* -------------------------------------------------------------------------- */
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


/* -------------------------------------------------------------------------- */
/*                                NAVBAR START                                */
/* -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  let activeItemIndicator = CSSRulePlugin.getRule(".menu-item p#active::after");
  const toggleButton = document.querySelector(".burger");
  let isOpen = false;

  gsap.set(".menu-item p", { y: 225 });

  const timeline = gsap.timeline({ paused: true });

  timeline.to(".overlay", {
    duration: 1.5,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "power4.inOut",
  });

  timeline.to(
    ".menu-item p",
    {
      duration: 1.5,
      y: 0,
      stagger: 0.2,
      ease: "power4.out",
    },
    "-=1"
  );

  timeline.to(
    activeItemIndicator,
    {
      width: "100%",
      duration: 1,
      ease: "power4.out",
      delay: 0.5,
    },
    "<"
  );

  timeline.to(
    ".sub-nav",
    {
      bottom: "10%",
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
    },
    "<"
  );

  toggleButton.addEventListener("click", function () {
    if (isOpen) {
      timeline.reverse();
    } else {
      timeline.play();
    }
    isOpen = !isOpen;
  });
});

/* -------------------------------------------------------------------------- */
/*                                 NAVBAR END                                 */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                               CONTACT SECTION                              */
/* -------------------------------------------------------------------------- */

    
new SplitType(".contact-wrap-heading h2", {
  types: "lines, words, chars",
  tagName: "span",
});
gsap.from(".contact-wrap-heading h2 .word", {
  y: "200%",
  duration: 1.5,
  ease: "circ.out",
  stagger: 0.05,
});


/* --------------------------- CONTACT SUBMIT BTN --------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contact-form").addEventListener("input", function () {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
      var message = document.getElementById("message").value;
      var submitButton = document.getElementById("submit");

      if (name !== "" && email !== "" && phone !== "" && message !== "") {
          submitButton.disabled = false;
          submitButton.style.opacity = 1;
          submitButton.classList.add("active");
      } else {
          submitButton.disabled = true;
          submitButton.style.opacity = 0.2;
          submitButton.classList.remove("active");
      }
  });
});


/* ------------------------- CONTACT THANK YOU WRAP ------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const thankYouSection = document.getElementById("thank-you-section");
  
  form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    gsap.to(thankYouSection, {
      duration: 2,
      ease: "expo.inOut",
      height: "100vh",
    });
    
    new SplitType(".ty-text h2", {
      types: "lines, words, chars",
      tagName: "span",
    });
    gsap.from(".ty-text h2 .word", {
      y: "210%",
      rotationZ: "5",
      duration: 2.15,
      ease: "circ.out",
      stagger: 0.05,
      delay: 0.5,
    });
    
    // Reset form after submission
    form.reset(); // This will reset all form fields
    
    // Reset checkboxes
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
      checkbox.checked = false;
    });
    
    setTimeout(function () {
      gsap.to(thankYouSection, {
        duration: 2,
        ease: "expo.inOut",
        height: "0vh",
      });
    }, 5000);
  });
});



/* -------------------------------------------------------------------------- */
/*                            SOCIAL MEDIA SECTION                            */
/* -------------------------------------------------------------------------- */

/* --------------------------------- SM TEXT -------------------------------- */
new SplitType(".sm-heading span", {
  types: "lines, words, chars",
  tagName: "span",
});
gsap.from(".sm-heading span .word", {
  y: "210%",
  duration: 1.1,
  ease: "circ.out",
  scrollTrigger:{
    trigger:".social-media-links-wrap",
    start:"top bottom",
    end:"bottom bottom",
  }
});

new SplitType(".sm-link a", {
  types: "lines, words, chars",
  tagName: "span",
});
gsap.from(".sm-link a .word", {
  y: "210%",
  duration: 1,
  ease: "circ.out",
  stagger:0.1,
  scrollTrigger:{
    trigger:".social-media-links-wrap",
    start:"top bottom",
    end:"bottom bottom",
  }
});


/* -------------------------------- SM CANVAS ------------------------------- */
const canvas = document.querySelector("#sm-canvas>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
   ./Assets/Earth2/Image1.png
   ./Assets/Earth2/Image2.png
   ./Assets/Earth2/Image3.png
   ./Assets/Earth2/Image4.png
   ./Assets/Earth2/Image5.png
   ./Assets/Earth2/Image6.png
   ./Assets/Earth2/Image7.png
   ./Assets/Earth2/Image8.png
   ./Assets/Earth2/Image9.png
   ./Assets/Earth2/Image10.png
   ./Assets/Earth2/Image11.png
   ./Assets/Earth2/Image12.png
   ./Assets/Earth2/Image13.png
   ./Assets/Earth2/Image14.png
   ./Assets/Earth2/Image15.png
   ./Assets/Earth2/Image16.png
   ./Assets/Earth2/Image17.png
   ./Assets/Earth2/Image18.png
   ./Assets/Earth2/Image19.png
   ./Assets/Earth2/Image20.png
   ./Assets/Earth2/Image21.png
   ./Assets/Earth2/Image22.png
   ./Assets/Earth2/Image23.png
   ./Assets/Earth2/Image24.png
   ./Assets/Earth2/Image25.png
   ./Assets/Earth2/Image26.png
   ./Assets/Earth2/Image27.png
   ./Assets/Earth2/Image28.png
   ./Assets/Earth2/Image29.png
   ./Assets/Earth2/Image30.png
   ./Assets/Earth2/Image31.png
   ./Assets/Earth2/Image32.png
   ./Assets/Earth2/Image33.png
   ./Assets/Earth2/Image34.png
   ./Assets/Earth2/Image35.png
   ./Assets/Earth2/Image36.png
   ./Assets/Earth2/Image37.png
   ./Assets/Earth2/Image38.png
   ./Assets/Earth2/Image39.png
   ./Assets/Earth2/Image40.png
   ./Assets/Earth2/Image41.png
   ./Assets/Earth2/Image42.png
   ./Assets/Earth2/Image43.png
   ./Assets/Earth2/Image44.png
   ./Assets/Earth2/Image45.png
   ./Assets/Earth2/Image46.png
   ./Assets/Earth2/Image47.png
   ./Assets/Earth2/Image48.png
   ./Assets/Earth2/Image49.png
   ./Assets/Earth2/Image50.png
   ./Assets/Earth2/Image51.png
   ./Assets/Earth2/Image52.png
   ./Assets/Earth2/Image53.png
   ./Assets/Earth2/Image54.png
   ./Assets/Earth2/Image55.png
   ./Assets/Earth2/Image56.png
   ./Assets/Earth2/Image57.png
   ./Assets/Earth2/Image58.png
   ./Assets/Earth2/Image59.png
   ./Assets/Earth2/Image60.png
   ./Assets/Earth2/Image61.png
   ./Assets/Earth2/Image62.png
   ./Assets/Earth2/Image63.png
   ./Assets/Earth2/Image64.png
   ./Assets/Earth2/Image65.png
   ./Assets/Earth2/Image66.png
   ./Assets/Earth2/Image67.png
   ./Assets/Earth2/Image68.png
   ./Assets/Earth2/Image69.png
   ./Assets/Earth2/Image70.png
   ./Assets/Earth2/Image71.png
   ./Assets/Earth2/Image72.png
   ./Assets/Earth2/Image73.png
   ./Assets/Earth2/Image74.png
   ./Assets/Earth2/Image75.png
   ./Assets/Earth2/Image76.png
   ./Assets/Earth2/Image77.png
   ./Assets/Earth2/Image78.png
   ./Assets/Earth2/Image79.png
   ./Assets/Earth2/Image80.png
   ./Assets/Earth2/Image81.png
   ./Assets/Earth2/Image82.png
   ./Assets/Earth2/Image83.png
   ./Assets/Earth2/Image84.png
   ./Assets/Earth2/Image85.png
   ./Assets/Earth2/Image86.png
   ./Assets/Earth2/Image87.png
   ./Assets/Earth2/Image88.png
   ./Assets/Earth2/Image89.png
   ./Assets/Earth2/Image90.png
   ./Assets/Earth2/Image91.png
   ./Assets/Earth2/Image92.png
   ./Assets/Earth2/Image93.png
   ./Assets/Earth2/Image94.png
   ./Assets/Earth2/Image95.png
   ./Assets/Earth2/Image96.png
   ./Assets/Earth2/Image97.png
   ./Assets/Earth2/Image98.png
   ./Assets/Earth2/Image99.png
   ./Assets/Earth2/Image100.png
   ./Assets/Earth2/Image101.png
   ./Assets/Earth2/Image102.png
   ./Assets/Earth2/Image103.png
   ./Assets/Earth2/Image104.png
   ./Assets/Earth2/Image105.png
   ./Assets/Earth2/Image106.png
   ./Assets/Earth2/Image107.png
   ./Assets/Earth2/Image108.png
   ./Assets/Earth2/Image109.png
   ./Assets/Earth2/Image110.png
   ./Assets/Earth2/Image111.png
   ./Assets/Earth2/Image112.png
   ./Assets/Earth2/Image113.png
   ./Assets/Earth2/Image114.png
   ./Assets/Earth2/Image115.png
   ./Assets/Earth2/Image116.png
   ./Assets/Earth2/Image117.png
   ./Assets/Earth2/Image118.png
   ./Assets/Earth2/Image119.png
   ./Assets/Earth2/Image120.png
   ./Assets/Earth2/Image121.png
   ./Assets/Earth2/Image122.png
   ./Assets/Earth2/Image123.png
   ./Assets/Earth2/Image124.png
   ./Assets/Earth2/Image125.png
   ./Assets/Earth2/Image126.png
   ./Assets/Earth2/Image127.png
   ./Assets/Earth2/Image128.png
   ./Assets/Earth2/Image129.png
   ./Assets/Earth2/Image130.png
   ./Assets/Earth2/Image131.png
   ./Assets/Earth2/Image132.png
   ./Assets/Earth2/Image133.png
   ./Assets/Earth2/Image134.png
   ./Assets/Earth2/Image135.png
   ./Assets/Earth2/Image136.png
   ./Assets/Earth2/Image137.png
   ./Assets/Earth2/Image138.png
   ./Assets/Earth2/Image139.png
   ./Assets/Earth2/Image140.png
   ./Assets/Earth2/Image141.png
   ./Assets/Earth2/Image142.png
   ./Assets/Earth2/Image143.png
   ./Assets/Earth2/Image144.png
   ./Assets/Earth2/Image145.png
   ./Assets/Earth2/Image146.png
   ./Assets/Earth2/Image147.png
   ./Assets/Earth2/Image148.png
   ./Assets/Earth2/Image149.png
   ./Assets/Earth2/Image150.png
   ./Assets/Earth2/Image151.png
   ./Assets/Earth2/Image152.png
   ./Assets/Earth2/Image153.png
   ./Assets/Earth2/Image154.png
   ./Assets/Earth2/Image155.png
   ./Assets/Earth2/Image156.png
   ./Assets/Earth2/Image157.png
   ./Assets/Earth2/Image158.png
   ./Assets/Earth2/Image159.png
   ./Assets/Earth2/Image160.png
   ./Assets/Earth2/Image161.png
   ./Assets/Earth2/Image162.png
   ./Assets/Earth2/Image163.png
   ./Assets/Earth2/Image164.png
   ./Assets/Earth2/Image165.png
   ./Assets/Earth2/Image166.png
   ./Assets/Earth2/Image167.png
   ./Assets/Earth2/Image168.png
   ./Assets/Earth2/Image169.png
   ./Assets/Earth2/Image170.png
   ./Assets/Earth2/Image171.png
   ./Assets/Earth2/Image172.png
   ./Assets/Earth2/Image173.png
   ./Assets/Earth2/Image174.png
   ./Assets/Earth2/Image175.png
   ./Assets/Earth2/Image176.png
   ./Assets/Earth2/Image177.png
   ./Assets/Earth2/Image178.png
   ./Assets/Earth2/Image179.png
   ./Assets/Earth2/Image180.png
   ./Assets/Earth2/Image181.png
   ./Assets/Earth2/Image182.png
   ./Assets/Earth2/Image183.png
   ./Assets/Earth2/Image184.png
   ./Assets/Earth2/Image185.png
   ./Assets/Earth2/Image186.png
   ./Assets/Earth2/Image187.png
   ./Assets/Earth2/Image188.png
   ./Assets/Earth2/Image189.png
   ./Assets/Earth2/Image190.png
   ./Assets/Earth2/Image191.png
   ./Assets/Earth2/Image192.png
   ./Assets/Earth2/Image193.png
   ./Assets/Earth2/Image194.png
   ./Assets/Earth2/Image195.png
   ./Assets/Earth2/Image196.png
   ./Assets/Earth2/Image197.png
   ./Assets/Earth2/Image198.png
   ./Assets/Earth2/Image199.png
   ./Assets/Earth2/Image200.png

 `;
  return data.split("\n")[index];
}

const frameCount = 200;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#sm-canvas>canvas`,
    start: `-100% top`,
    end: `200% top`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#sm-canvas",
  start: `-50% top`,
  end: `200% top`,
});


/* -------------------------------------------------------------------------- */
/*                                BLOG SECTION                                */
/* -------------------------------------------------------------------------- */

/* ------------------------------ BLOG HEADING ------------------------------ */
new SplitType(".blogs-s-heading h2", {
  types: "lines, words, chars",
  tagName: "span",
});
gsap.from(".blogs-s-heading h2 .word", {
  y: "210%",
  duration: 1,
  ease: "circ.out",
  stagger:0.05,
  scrollTrigger:{
    trigger:".blogs-section-wrapper",
    start:"top bottom",
    end:"bottom bottom",
    // markers:true
  }
});


/* ----------------------------- BLOG HOVER BLUR ---------------------------- */


document.addEventListener('DOMContentLoaded', function() {
  var blogWrapper = document.querySelectorAll('.blogs-s-iso');
  
  blogWrapper.forEach(function(blOg) {
    blOg.addEventListener('mouseover', function() {
      console.log('Mouse over on:', blOg);
      // Apply blur effect to other elements
      blogWrapper.forEach(function(otherBlog) {
        if (otherBlog !== blOg) {
          console.log('Applying blur to:', otherBlog);
          otherBlog.classList.add('blur');

        } else {
          otherBlog.classList.remove('blur');
        }
      });
    });

    blOg.addEventListener('mouseout', function() {
      console.log('Mouse out from:', blOg);
      blogWrapper.forEach(function(otherBlog) {
        console.log('Removing blur from:', otherBlog);
        otherBlog.classList.remove('blur');
      });
    });
  });
});



/* -------------------------------------------------------------------------- */
/*                               FOOTER SECTION                               */
/* -------------------------------------------------------------------------- */

new SplitType(".footer-vfx span", {
  types: "lines, words, chars",
  tagName: "span",
});



gsap.from(".footer-vfx span .char", {
  y: "210%",
  duration: 2,
  ease: "circ.out",
  stagger:0.05,
  scrollTrigger:{
    trigger:".footer-contact",
    start:"top bottom",
    end:"bottom bottom",
    // markers:true
  }
});

/* ----------------------- FOOTER LEARN TEXT ANIMATION ---------------------- */
new SplitType(".footer-learn-heading h3", {
  types: "lines, words, chars",
  tagName: "span",
});

gsap.from(".footer-learn-heading h3 .word", {
  y: "210%",
  duration: 1,
  ease: "circ.out",
  stagger:0.05,
  scrollTrigger:{
    trigger:"footer",
    start:"top bottom",
    end:"bottom bottom",
    // markers:true
  }
});

new SplitType(".footer-learn-links a", {
  types: "lines, words, chars",
  tagName: "span",
});

gsap.from(".footer-learn-links a .word", {
  y: "210%",
  duration: 1,
  ease: "circ.out",
  stagger:0.05,
  scrollTrigger:{
    trigger:"footer",
    start:"top bottom",
    end:"bottom bottom",
    // markers:true
  }
});

/* --------------------------- FOOTER CONTACT TEXT -------------------------- */
new SplitType(".footer-contact h3", {
  types: "lines, words, chars",
  tagName: "span",
});

gsap.from(".footer-contact h3 .word", {
  y: "210%",
  duration: 1,
  ease: "circ.out",
  stagger:0.05,
  scrollTrigger:{
    trigger:"footer",
    start:"top bottom",
    end:"bottom bottom",
    // markers:true
  }
});

new SplitType(".footer-contact-details a", {
  types: "lines, words, chars",
  tagName: "span",
});

gsap.from(".footer-contact-details a .word", {
  y: "210%",
  duration: 1,
  ease: "circ.out",
  stagger:0.05,
  scrollTrigger:{
    trigger:"footer",
    start:"top bottom",
    end:"bottom bottom",
    // markers:true
  }
});
