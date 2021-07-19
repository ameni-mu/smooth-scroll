let fakeScroll = {};
let container = {};
let title = {};
let titles = [];
let text = {};
let texts = [];
let pageH = 0;
let winH = 0;
let animation = function () { };
let pageY = 0;
let calc = 0;
let star1Calc = 0;
let star2Calc = 0;
const ease = 0.1;
let isScroll = false;
let starOl1 = {};
let starOl2 = {};
let parallaxOl = {};
let mainVisual = {};
let mainVisualImg = {};
let mainImgSrc = '';
const mainVisualH = 500;

export default class smoothScroll {
  ///////////////////////////
  /// constructor
  ////////////////////////////
  constructor(){
    this.init();
  }

  ///////////////////////////
  ////////////////////////////
  init() {
    fakeScroll = document.querySelector('.ol-fake');
    container = document.querySelector('.container');
    title = document.querySelectorAll('.section__title');
    text = document.querySelectorAll('.text');
    parallaxOl = document.querySelector('.ol-parallax');
    pageH = container.clientHeight;
    pageY = window.scrollY;
    winH = window.innerHeight;
    fakeScroll.style.height = pageH + 'px';
    parallaxOl.style.height = pageH + 'px';
    container = document.querySelector('.container');
    mainVisual = document.querySelector('.main-visual__inner');
    mainVisualImg = document.querySelector('.main-visual__img');
    const starOl = document.querySelectorAll('.ol-star');
    starOl1 = starOl[0];
    starOl2 = starOl[1];
    starOl1.style.height = (pageH * 2) + 'px';
    starOl2.style.height = pageH + window.innerHeight + 'px';
    const mainttl = document.querySelector('.main__title-inner');
    this.loadImg();
    setTimeout(() => {
      mainttl.classList.add('isVisible');
      this.fadeInAnim();
    }, 300);
    this.setFadeInObj();
    this.render();
    window.addEventListener("scroll", this.onScroll.bind(this));
    window.addEventListener("resize", this.onResize.bind(this));
  }

  loadImg() {
		const imgPreloader = new Image();
		imgPreloader.onload = function() {
      mainVisual.style.backgroundImage = 'url(' + mainImgSrc + ')';
      mainVisual.classList.add('isVisible');
      setTimeout(() => {
        mainVisual.classList.add('isScrollAnim');
      }, 600);
    }
		imgPreloader.src = mainVisualImg.src;
  }

  setFadeInObj() {
    for (let i = 0; i < title.length; i++) {
      const obj = {
        'el': title[i],
        isShow: false,
      }
      titles[i] = obj;
    }
    for (let i = 0; i < text.length; i++) {
      const obj = {
        'el': text[i],
        isShow: false,
      }
      texts[i] = obj;
    }
  }

  render() {
    animation = window.requestAnimationFrame(
      this.render.bind(this)
    );
    pageY = window.scrollY;
    calc += (pageY - calc) * ease;
    calc = ~~(calc * 100) / 100;
    star1Calc += ((pageY / 0.5) - star1Calc) * ease;
    star2Calc += ((pageY / 0.8) - star2Calc) * ease;
    container.style.transform = 'translateY(' + -calc + 'px)';
    starOl1.style.transform = 'translateY(' + -star1Calc + 'px)';
    starOl2.style.transform = 'translateY(' + -star2Calc + 'px)';

    if (pageY <= mainVisualH) {
      let mainVisualCalc = 100 + Number(pageY / 30);
      mainVisualImg.style.width = mainVisualCalc + '%';
    }

    if (isScroll) {
    }
  }

  onScroll() {
    if (isScroll) return;
    isScroll = true;
    setTimeout(() => {
      this.fadeInAnim();
    }, 60);
  }

  onResize() {
    setTimeout(() => {
      winH = window.innerHeight;
    }, 100);
  }

  fadeInAnim() {
    //要素がまだ表示されていなければフェードインアニメーションさせる
    for (let key in titles) {
      if (!titles[key].isShow) {
        const y = Math.floor(titles[key].el.getBoundingClientRect().top);
        if (y < winH) {
          const titleBG = titles[key].el.children;
          for (let i = 0; i < titleBG.length; i++) {
            const el = titleBG[i];
            el.firstElementChild.classList.add('isVisible');
            el.lastElementChild.classList.add('isVisible');
          }
        }
      }
    }

    for (let key in texts) {
      if (!texts[key].isShow) {
        const y = Math.floor(texts[key].el.getBoundingClientRect().top);
        if (y < winH) {
          texts[key].el.classList.add('isVisible');
        }
      }
    }

    isScroll = false;
  }

}
