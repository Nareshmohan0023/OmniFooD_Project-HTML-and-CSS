console.log("Hello world")


// copyright year auto-update

const yearupdate=document.querySelector(".year");
yearupdate.textContent=new Date().getFullYear();
// const currentyear=new Date().getFullYear();
// console.log(currentyear)

//////////////////////////////////////////////////////////////////////*css*/`
//Mobile navfuncion

const mob_btn=document.querySelector(".btn-mobile-nav");
const header=document.querySelector(".header");
mob_btn.addEventListener('click',function(){
  header.classList.toggle('nav-open');
})

//////////////////////////////////////////////////////////////////*css*/`
//smooth scrolling animation for all browsers

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href =link.getAttribute('href');

    //scroll back to top//////////////////////////*css*/`
    if (href==="#") 
      window.scrollTo({
      top:0,
      behavior:"smooth"
    });

    //////////////////scroll to other links
    if (href !== "#" && href.startsWith("#")){
      const sectionEl=document.querySelector(href);
      sectionEl.scrollIntoView({behavior:"smooth"});
    }

    ///////////////close mobile navigation
    if (link.classList.contains('Head-Nav-link'))
      header.classList.toggle('nav-open');
  });
});


/////////////////////////////////////////
//sticky navigation
const secionHeroEl=document.querySelector(".Hero-Section");


const obs =new IntersectionObserver(function(entries){
  const ent=entries[0];
  console.log(ent);
  if(ent.isIntersecting === false){
    document.querySelector('.body').classList.add('sticky')
  }
  if(ent.isIntersecting === true){
    document.querySelector('.body').classList.remove('sticky')
  }
},{
  root:null,
  threshold:0,
  rootMargin:'-80px'
})
obs.observe(secionHeroEl);
  



///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
