

setTimeout(() => {
    const text =  baffle(".notbold");
    text.set({
      characters: '░▒░░██░███▓ █ ░██ ██░░ █▒ ▓██░ ░',
            speed: 300
    });
  
    const text2 =  baffle(".boldtext");
    text.set({
      characters: '░▒░░██░███▓ █ ░██ ██░░ █▒ ▓██░ ░',
            speed: 300
    });
  
    text.start();
    text.reveal(2500);
  
    text2.start();
    text2.reveal(2500);
  }, 4050);
  
  const switchButton = document.getElementById("d-m-switch");
  const ballArray = document.getElementsByClassName("ball");
  const linksArray = document.getElementsByClassName("links");
  const projectsArray = document.getElementsByClassName("project-tile");
  const svgArray = document.getElementsByTagName("svg");
  const barsArray = document.getElementsByClassName("menu-bars");
  const heroParallax = document.getElementById("contact");
  
  window.addEventListener("scroll", () =>
  { 
      let offset = window.pageYOffset;
      heroParallax.style.backgroundPositionY = offset * 0.7 + "px";
  
  })
  
  function darkMode() 
  {
  
    function themeLoop(arrayName, toggleTo)
    {
      for(let i = 0 ; i < arrayName.length ; i++)
      {
        arrayName[i].classList.toggle(toggleTo);
      }
    }
    themeLoop(ballArray, "ball-dark");
    themeLoop(linksArray, "link-dark");
    themeLoop(projectsArray,"project-tile-dark");
    themeLoop(svgArray, "svg-icon-dark");
    themeLoop(barsArray,"span-dark");
  
  
    
    document.getElementById("body-light").classList.toggle("body-dark");
    document.getElementById("loading-text").classList.toggle("loading-text-dark");
    document.getElementById("navbar").classList.toggle("nav-dark");
    document.getElementById("welcome-text").classList.toggle("welcome-text-dark");
    document.getElementById("welcome-section").classList.toggle("welcome-dark");
    document.getElementById("about").classList.toggle("about-dark");
    document.getElementById("skill1").classList.toggle("skill1-dark");
    document.getElementById("skill2").classList.toggle("skill2-dark");
    document.getElementById("skill3").classList.toggle("skill3-dark");
    document.getElementById("skill4").classList.toggle("skill4-dark");
    document.getElementById("skill5").classList.toggle("skill5-dark");
    document.getElementById("skill6").classList.toggle("skill6-dark");
    document.getElementById("logo").classList.toggle("logo-dark");
    document.getElementById("projects").classList.toggle("project-box-dark");
    document.getElementById("contact").classList.toggle("contact-dark");
    document.getElementById("back-to-top").classList.toggle("back-to-top-dark");
    document.getElementById("footer").classList.toggle("footer-dark");
    document.getElementById("hire").classList.toggle("hire-btn-dark");
  
  /*SAVE THEME SETTING TO LOCAL STORAGE*/
  
    /*check if dark mode has been enabled by simply checking the body to see if it has the "body-dark" class active*/
    if(document.body.classList.contains("body-dark"))
    {
      /*If true, set "darkTheme" and "enabled" as a key-value pair in the localStorage object*/
      localStorage.setItem("darkTheme", "enabled");
    }
  
    else
    {
      /*If false, means darkmode has not been enabled, set "darkTheme" and "disabled" as a key-value pair in the localStorage object*/
      localStorage.setItem("darkTheme", "disabled");
    }
  
  };
  
  /*Set the theme switch to it's corresponding position by checking if dark mode has been enabled using the added key-value pairs */
    if(localStorage.getItem("darkTheme") == "enabled")
    {
      switchButton.setAttribute("checked", "true")
      darkMode();
    }
  
  
  var nickName = document.getElementById("name");
  nickName.addEventListener('animationiteration', nameChange);
  function nameChange() 
  {
    if(nickName.innerHTML==="Ayo_Starr")
    {
      nickName.innerHTML = "OMOLADE";
    }
  
    else if( nickName.innerHTML==="OMOLADE")
    {
      nickName.innerHTML= "AYOMIDE"
    }
  
    else
    {
      nickName.innerHTML="Ayo_Starr"
    }
      
  }
  
  var cip = $(".video").hover( hoverVideo, hideVideo );
  
  function hoverVideo(e) {  
      $('video', this).get(0).play(); 
  }
  
  function hideVideo(e) {
      $('video', this).get(0).pause(); 
  }
  
  const navigation = document.getElementById("nav");
  const menu = document.getElementById("menu");
  
  menu.addEventListener("click", () => {
    navigation.style.setProperty("--childenNumber", navigation.children.length);
    navigation.classList.toggle("active");
    menu.classList.toggle("active");
  });
  
  function addScroll()
  {
    document.body.classList.remove("no-scroll")
  }
  
  setTimeout(() => {addScroll();}, 4000);



  //Triger
  gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.matchMedia(
{   
    "(max-width: 1023px)": () => 
    {
        let tl1 =  gsap.timeline(
        {
            scrollTrigger: 
            {
                trigger: ".about",
                start: "center center",
                end: "center top",
                scrub: true,
                markers : false,
                pin : false
            }
        })
        tl1.from(".skill1", {x: innerWidth * 1})
        tl1.from(".skill2", {x: innerWidth * 1})
        tl1.from(".skill3", {x: innerWidth * 1})
        tl1.from(".skill4", {x: innerWidth * 1})
        tl1.from(".skill6", {x: innerWidth * 1})
        tl1.from(".skill5", {x: innerWidth * 1})


        
    },
    "(min-width: 1024px)": () => 
    {
        let tl1 =  gsap.timeline(
        {
            scrollTrigger: 
            {
                trigger: ".about",
                start: "+=0px",
                end: "bottom center",
                scrub: true,
                markers : false,
                pin : true
            }
        })
        tl1.from(".skill1", {x: innerWidth * 1})
        tl1.from(".skill2", {x: innerWidth * 1})
        tl1.from(".skill3", {x: innerWidth * 1})
        tl1.from(".skill4", {x: innerWidth * 1})
        tl1.from(".skill6", {x: innerWidth * 1})
        tl1.from(".skill5", {x: innerWidth * 1})


        
    },

    "all": () => 
    {
        let tl2 = gsap.timeline(
            {
                scrollTrigger: 
                {
                    trigger: ".hero",
                    start: "+=200px",
                    end: "+=300px",
                    scrub: true
                }
            })
            tl2.to(".hero", {autoAlpha: 0})
    
            const boxes = gsap.utils.toArray('.project-case');
    
            boxes.forEach((box, i) => 
            {
                const anim = gsap.fromTo(box, {autoAlpha: 0, y: 100}, {duration: 1.5, autoAlpha: 1, y: 0});
    
                ScrollTrigger.create(
                {
                    trigger: box,
                    animation: anim,
                    toggleActions: 'play none none none',
                    once: true,
                });
            });

    }
    
})


