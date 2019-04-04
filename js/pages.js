/*jshint esversion:6 */

//alert("java script is working");

// when i click the next button show a new page. each page should show a diffrent backround color, cirlce color & content
// when i click the next button

// step 1 add content for our pages

const pages = [{
    content: "a very very big music lover",
    background: "radial-gradient(circle, rgba(238, 174, 202, 1) 31%, rgba(148, 187, 233, 1) 48%)",
    circle: "grey"
  },
  {
    content: "someone who likes knocking on the door with nick",
    background: "radial-gradient(circle, rgba(63,94,251,1) 22%, rgba(252,70,107,1) 36%);",
    circle: "white"
  },
  {
    content: "is currently missing nick so therefore he will continue knockin on the door",
    background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(rgba(148, 187, 233, 1) 48%) 100%)",
    circle: "blue"

  },
  {
    content: `until he comes home<a href="cv.pdf"> you can download his cv</a>`,
    background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(223,148,233,0.9430147058823529) 100%);",
    circle: "green"
  }
];

const bodyTag = document.querySelector("body");
const circleTag = document.querySelector(".circle");
const previousTag = document.querySelector(".fa-arrow-left");
const nextTag = document.querySelector(".fa-arrow-right");
const randomTag = document.querySelector(".fa-sync-alt");
const h2Tag = document.querySelector("h2");

let pageNumber = 0;


const next = function() {
  pageNumber = pageNumber + 1;
  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  }

};


const previous = function() {
  pageNumber = pageNumber - 1;
  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }

};

const random = function() {
  pageNumber = Math.floor(Math.random() * pages.length);

};

const updatePage = function() {
  h2Tag.innerHTML = pages[pageNumber].content;
  circleTag.style.backgroundColor = pages[pageNumber].circle;
  bodyTag.style.background = pages[pageNumber].background;
};


nextTag.addEventListener("click", function() {
  next();
  console.log(pageNumber);
  updatePage();

});

previousTag.addEventListener("click", function() {
  previous();
  console.log(pageNumber);
  updatePage();
});

randomTag.addEventListener("click", function() {
  random();
  console.log(pageNumber);
  updatePage();
});