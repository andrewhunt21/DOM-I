const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navOne = document.querySelector("a:nth-of-type(1)");
navOne.textContent = siteContent["nav"]["nav-item-1"];

const navTwo = document.querySelector("a:nth-of-type(2)");
navTwo.textContent = siteContent["nav"]["nav-item-2"];

const navThree = document.querySelector("a:nth-of-type(3)");
navThree.textContent = siteContent["nav"]["nav-item-3"];

const navFour = document.querySelector("a:nth-of-type(4)");
navFour.textContent = siteContent["nav"]["nav-item-4"];

const navFive = document.querySelector("a:nth-of-type(5)");
navFive.textContent = siteContent["nav"]["nav-item-5"];

const navSix = document.querySelector("a:nth-of-type(6)");
navSix.textContent = siteContent["nav"]["nav-item-6"];


const h1 = document.querySelector(".cta-text h1");
h1.textContent = siteContent["cta"]["h1"];

const button = document.querySelector(".cta-text button");
button.textContent = siteContent["cta"]["button"];

const ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);


const featureH4 = document.querySelector(".main-content div:nth-of-type(1) h4");
featureH4.textContent = siteContent["main-content"]["features-h4"];

const featuresContent = featureH4.nextElementSibling;
featuresContent.textContent = siteContent["main-content"]["features-content"];

const aboutH4 = document.querySelector(".main-content div:nth-of-type(2) h4");
aboutH4.textContent = siteContent["main-content"]["about-h4"];

const aboutContent = aboutH4.nextElementSibling;
aboutContent.textContent = siteContent["main-content"]["about-content"];


const middleImg = document.querySelector(".middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


const servicesH4 = document.querySelector(".bottom-content div:nth-of-type(1) h4");
servicesH4.textContent = siteContent["main-content"]["services-h4"];

const servicesContent = servicesH4.nextElementSibling;
servicesContent.textContent = siteContent["main-content"]["services-content"];

const productH4 = document.querySelector(".bottom-content div:nth-of-type(2) h4");
productH4.textContent = siteContent["main-content"]["product-h4"];

const productContent = productH4.nextElementSibling;
productContent.textContent = siteContent["main-content"]["product-content"];

const visionH4 = document.querySelector(".bottom-content div:nth-of-type(3) h4");
visionH4.textContent = siteContent["main-content"]["vision-h4"];

const visionContent = visionH4.nextElementSibling;
visionContent.textContent = siteContent["main-content"]["vision-content"];


const contact = document.querySelector(".contact h4");
contact.textContent = siteContent["contact"]["contact-h4"];

const address = contact.nextElementSibling;
address.textContent = siteContent["contact"]["address"];

const phone = address.nextElementSibling;
phone.textContent = siteContent["contact"]["phone"];

const email = phone.nextElementSibling;
email.textContent = siteContent["contact"]["email"];


const copyright = document.querySelector("footer p");
copyright.textContent = siteContent["footer"]["copyright"];


const green = document.querySelectorAll("nav a");
green.forEach(elem => elem.style.color = "green");

const consume = document.createElement("a");
consume.textContent = "Consume";
consume.href = "#";
document.querySelector('nav').appendChild(consume);

const obey = document.createElement("a");
obey.textContent = "Obey";
obey.href = "#";
document.querySelector('nav').prepend(obey);