(()=>{"use strict";var e={76:(e,a,i)=>{i.r(a)},278:(e,a,i)=>{i.r(a)},198:(e,a,i)=>{i.r(a)},928:(e,a,i)=>{i.r(a)},528:(e,a,i)=>{i.r(a)},645:(e,a,i)=>{i.r(a)},889:(e,a,i)=>{i.r(a)},45:(e,a,i)=>{i.r(a)},752:(e,a,i)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.App=void 0;const o=i(977),t=i(22),r=i(791),n=i(366),s=i(297),d=i(957),l=i(716);a.App=class{constructor(e){this.rootElement=e,this.header=new n.Header,this.rootElement.appendChild(this.header.element),this.field=new r.Field,this.rootElement.appendChild(this.field.element),this.router=new d.Router,this.content=document.querySelector(".field"),this.startRoute(),this.router.changeRoute()}startRoute(){this.router.add({page:"main",hash:"#/Main",needFoo:()=>{this.initCategory()}}),l.cardsGroup.forEach(((e,a)=>{this.router.add({page:`${e.replace(/\s/g,"")}`,hash:`#/${e.replace(/\s/g,"")}`,needFoo:()=>{this.openGroup(a)}})}))}startMain(){this.content.innerText="",this.initCategory()}openGroup(e){this.content.innerHTML="",l.cards[e].forEach((e=>{const a=new o.Card(e);this.content.appendChild(a.element)})),this.changeBackColor()}changeBackColor(){var e;(null===(e=document.querySelector(".mode-play"))||void 0===e?void 0:e.classList.contains("mode-active"))?(document.querySelectorAll(".category__word").forEach((e=>{e.style.backgroundColor="rgb(226, 26, 86)"})),document.querySelectorAll(".card__flip").forEach((e=>{e.style.display="none"})),document.querySelectorAll(".card__word").forEach((e=>{e.style.backgroundColor="rgb(226, 26, 86)",e.style.color="#f0e7e7"}))):(document.querySelectorAll(".category__word").forEach((e=>{e.style.backgroundColor="rgb(53, 49, 49)"})),document.querySelectorAll(".card__flip").forEach((e=>{e.style.display="block"})),document.querySelectorAll(".card__word").forEach((e=>{e.style.backgroundColor="#f0e7e7",e.style.color="#797171"})))}initCategory(){this.content.innerText="";const e=document.querySelector(".field"),a=["Action (A)","Action (B)","Animal (A)","Animal (B)","Clothes","Emotions","Heroes","Movements"];for(let i=0;i<8;i++){this.category=new t.Category,this.category.element.firstElementChild&&(this.category.element.firstElementChild.style.backgroundImage=`url(${s.categorys[i]})`),this.category.element.lastElementChild&&(this.category.element.lastElementChild.innerHTML=`${a[i]}`);const o=document.createElement("a");o.href=`#/${l.cardsGroup[i].replace(/\s/g,"")}`,o.appendChild(this.category.element),null==e||e.appendChild(o)}this.changeBackColor()}}},977:(e,a,i)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.Card=void 0;const o=i(631);i(76);class t extends o.BaseComponents{constructor(e){super("div",["card"]),this.element.innerHTML=`\n      <div class="card__photo" style="background-image: url(${e.image}) "></div>\n      <div class="card__word">${e.word}</div>\n      <div class="card__flip"></div>\n    `,this.element.addEventListener("click",(()=>this.playAudio(e.audioSrc)))}playAudio(e){new Audio(e).play()}}a.Card=t},22:(e,a,i)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.Category=void 0;const o=i(631);i(278);class t extends o.BaseComponents{constructor(){super("div",["category"]),this.element.innerHTML='\n      <div class="category__photo"></div>\n      <div class="category__word">Hello Dog</div>\n    '}}a.Category=t},791:(e,a,i)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.Field=void 0;const o=i(631);i(198);class t extends o.BaseComponents{constructor(){super("main",["container"]),this.element.innerHTML='\n    <div class="field"></div>\n    '}}a.Field=t},229:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.Game=void 0,a.Game=class{startGame(){console.log("hello")}stopGame(){}}},900:(e,a,i)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.Burger=void 0;const o=i(631);i(928);class t extends o.BaseComponents{constructor(){super("div",["menu-toggle"]),this.element.innerHTML='\n      <div id="hamburger">\n        <span class="line-hamburger"></span>\n        <span class="line-hamburger"></span>\n        <span class="line-hamburger"></span>\n      </div>\n      <div id="cross">\n        <span class="line-hamburger"></span>\n        <span class="line-hamburger"></span>\n      </div>\n    '}}a.Burger=t},366:(e,a,i)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.Header=void 0;const o=i(229),t=i(631),r=i(900);i(528);const n=i(626),s=i(300);class d extends t.BaseComponents{constructor(){super("header",["header"]),this.burger=new r.Burger,this.switcher=new s.Switcher,this.menu=new n.Menu,this.element.appendChild(this.burger.element),this.element.appendChild(this.switcher.element),this.element.appendChild(this.menu.element),window.addEventListener("DOMContentLoaded",(()=>{this.startBurger(),this.startSwitcher(),this.startSide(),[...document.querySelectorAll(".menu__item")].forEach((e=>e.addEventListener("click",(()=>{const a=e;this.changeActiveLink(a)}))))}))}startBurger(){const e=document.querySelector(".menu-toggle"),a=document.querySelector(".menu");null==e||e.addEventListener("click",(()=>{null==e||e.classList.toggle("open"),(null==e?void 0:e.classList.contains("open"))?a&&(a.style.visibility="visible",a.style.left="0"):a&&(a.style.visibility="hidden",a.style.left="-100%")}))}startSwitcher(){var e;null===(e=document.querySelector(".switch"))||void 0===e||e.addEventListener("change",(()=>{var e;document.querySelectorAll(".mode-text").forEach((e=>e.classList.toggle("mode-active"))),(null===(e=document.querySelector(".mode-play"))||void 0===e?void 0:e.classList.contains("mode-active"))?(document.querySelector(".side").style.right="0%",document.querySelectorAll(".category__word").forEach((e=>{e.style.backgroundColor="rgb(226, 26, 86)"})),document.querySelectorAll(".card__flip").forEach((e=>{e.style.display="none"})),document.querySelectorAll(".card__word").forEach((e=>{e.style.backgroundColor="rgb(226, 26, 86)",e.style.color="#f0e7e7"}))):(document.querySelector(".side").style.right="-100%",document.querySelectorAll(".category__word").forEach((e=>{e.style.backgroundColor="rgb(53, 49, 49)"})),document.querySelectorAll(".card__flip").forEach((e=>{e.style.display="block"})),document.querySelectorAll(".card__word").forEach((e=>{e.style.backgroundColor="#f0e7e7",e.style.color="#797171"})))}))}startSide(){var e;console.log("142"),null===(e=document.querySelector(".side__start"))||void 0===e||e.addEventListener("click",(()=>{console.log("11"),"#/Main"!==window.location.hash&&(new o.Game).startGame()}))}changeActiveLink(e){const a=document.querySelector(".menu__active");null==a||a.classList.remove("menu__active"),e.classList.add("menu__active")}}a.Header=d},626:(e,a,i)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.Menu=void 0;const o=i(631);i(645);const t=i(716);class r extends o.BaseComponents{constructor(){super("ul",["menu"]),this.createMenu()}createMenu(){const e=t.cardsGroup.map((e=>{const a=e.replace(/\s/g,"");return`<li><a href="#/${a}" data-hash="#/${a}" class="menu__item">${e}</a></li>`}));this.element.innerHTML=e.join(",").replace(/[,]/g," ");const a=document.createElement("li");a.innerHTML='<a href="#/Main" data-hash="#/Main" class="menu__item menu__active">Main page</a>',this.element.insertAdjacentElement("afterbegin",a)}}a.Menu=r},300:(e,a,i)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.Switcher=void 0;const o=i(631);i(889);class t extends o.BaseComponents{constructor(){super("div",["toggle-wrapper"]),this.element.innerHTML='\n      <span class="mode-text mode-train mode-active">train</span>\n      <label class="switch">\n          <input type="checkbox">\n          <span class="slider round"></span>\n      </label>\n      <span class="mode-text mode-play">play</span>\n      <div class="side">\n        <div class="side__start"></div>\n        <div class="side__repeat"></div>\n      </div>\n    '}}a.Switcher=t},631:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.BaseComponents=void 0,a.BaseComponents=class{constructor(e="div",a=[]){this.element=document.createElement(e),this.element.classList.add(...a)}}},716:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.cards=a.cardsGroup=void 0,a.cardsGroup=["Action (set A)","Action (set B)","Animal (set A)","Animal (set B)","Clothes","Emotions","Heroes","Movements"],a.cards=[[{word:"cry",translation:"плакать",image:"img/cry.jpg",audioSrc:"audio/cry.mp3"},{word:"dance",translation:"танцевать",image:"img/dance.jpg",audioSrc:"audio/dance.mp3"},{word:"dive",translation:"нырять",image:"img/dive.jpg",audioSrc:"audio/dive.mp3"},{word:"draw",translation:"рисовать",image:"img/draw.jpg",audioSrc:"audio/draw.mp3"},{word:"fish",translation:"ловить рыбу",image:"img/fish.jpg",audioSrc:"audio/fish.mp3"},{word:"fly",translation:"летать",image:"img/fly.jpg",audioSrc:"audio/fly.mp3"},{word:"hug",translation:"обнимать",image:"img/hug.jpg",audioSrc:"audio/hug.mp3"},{word:"jump",translation:"прыгать",image:"img/jump.jpg",audioSrc:"audio/jump.mp3"}],[{word:"open",translation:"открывать",image:"img/open.jpg",audioSrc:"audio/open.mp3"},{word:"play",translation:"играть",image:"img/play.jpg",audioSrc:"audio/play.mp3"},{word:"point",translation:"указывать",image:"img/point.jpg",audioSrc:"audio/point.mp3"},{word:"ride",translation:"ездить",image:"img/ride.jpg",audioSrc:"audio/ride.mp3"},{word:"run",translation:"бегать",image:"img/run.jpg",audioSrc:"audio/run.mp3"},{word:"sing",translation:"петь",image:"img/sing.jpg",audioSrc:"audio/sing.mp3"},{word:"skip",translation:"пропускать, прыгать",image:"img/skip.jpg",audioSrc:"audio/skip.mp3"},{word:"swim",translation:"плавать",image:"img/swim.jpg",audioSrc:"audio/swim.mp3"}],[{word:"cat",translation:"кот",image:"img/cat.jpg",audioSrc:"audio/cat.mp3"},{word:"chick",translation:"цыплёнок",image:"img/chick.jpg",audioSrc:"audio/chick.mp3"},{word:"chicken",translation:"курица",image:"img/chicken.jpg",audioSrc:"audio/chicken.mp3"},{word:"dog",translation:"собака",image:"img/dog.jpg",audioSrc:"audio/dog.mp3"},{word:"horse",translation:"лошадь",image:"img/horse.jpg",audioSrc:"audio/horse.mp3"},{word:"pig",translation:"свинья",image:"img/pig.jpg",audioSrc:"audio/pig.mp3"},{word:"rabbit",translation:"кролик",image:"img/rabbit.jpg",audioSrc:"audio/rabbit.mp3"},{word:"sheep",translation:"овца",image:"img/sheep.jpg",audioSrc:"audio/sheep.mp3"}],[{word:"bird",translation:"птица",image:"img/bird.jpg",audioSrc:"audio/bird.mp3"},{word:"fish",translation:"рыба",image:"img/fish1.jpg",audioSrc:"audio/fish.mp3"},{word:"frog",translation:"жаба",image:"img/frog.jpg",audioSrc:"audio/frog.mp3"},{word:"giraffe",translation:"жирафа",image:"img/giraffe.jpg",audioSrc:"audio/giraffe.mp3"},{word:"lion",translation:"лев",image:"img/lion.jpg",audioSrc:"audio/lion.mp3"},{word:"mouse",translation:"мышь",image:"img/mouse.jpg",audioSrc:"audio/mouse.mp3"},{word:"turtle",translation:"черепаха",image:"img/turtle.jpg",audioSrc:"audio/turtle.mp3"},{word:"dolphin",translation:"дельфин",image:"img/dolphin.jpg",audioSrc:"audio/dolphin.mp3"}],[{word:"skirt",translation:"юбка",image:"img/skirt.jpg",audioSrc:"audio/skirt.mp3"},{word:"pants",translation:"брюки",image:"img/pants.jpg",audioSrc:"audio/pants.mp3"},{word:"blouse",translation:"блузка",image:"img/blouse.jpg",audioSrc:"audio/blouse.mp3"},{word:"dress",translation:"платье",image:"img/dress.jpg",audioSrc:"audio/dress.mp3"},{word:"boot",translation:"ботинок",image:"img/boot.jpg",audioSrc:"audio/boot.mp3"},{word:"shirt",translation:"рубашка",image:"img/shirt.jpg",audioSrc:"audio/shirt.mp3"},{word:"coat",translation:"пальто",image:"img/coat.jpg",audioSrc:"audio/coat.mp3"},{word:"shoe",translation:"туфли",image:"img/shoe.jpg",audioSrc:"audio/shoe.mp3"}],[{word:"sad",translation:"грустный",image:"img/sad.jpg",audioSrc:"audio/sad.mp3"},{word:"angry",translation:"сердитый",image:"img/angry.jpg",audioSrc:"audio/angry.mp3"},{word:"happy",translation:"счастливый",image:"img/happy.jpg",audioSrc:"audio/happy.mp3"},{word:"tired",translation:"уставший",image:"img/tired.jpg",audioSrc:"audio/tired.mp3"},{word:"surprised",translation:"удивлённый",image:"img/surprised.jpg",audioSrc:"audio/surprised.mp3"},{word:"scared",translation:"испуганный",image:"img/scared.jpg",audioSrc:"audio/scared.mp3"},{word:"smile",translation:"улыбка",image:"img/smile.jpg",audioSrc:"audio/smile.mp3"},{word:"laugh",translation:"смех",image:"img/laugh.jpg",audioSrc:"audio/laugh.mp3"}],[{word:"spider-man",translation:"человек-паук",image:"img/spider-man.jpg",audioSrc:"audio/spider-man.mp3"},{word:"dipper",translation:"диппер",image:"img/dipper.webp",audioSrc:"audio/dipper.mp3"},{word:"dragon",translation:"дракон",image:"img/dragon.jpg",audioSrc:"audio/dragon.mp3"},{word:"gin",translation:"джин",image:"img/gin.png",audioSrc:"audio/gin.mp3"},{word:"cinderella",translation:"золушка",image:"img/cinderella.webp",audioSrc:"audio/cinderella.mp3"},{word:"simba",translation:"симба",image:"img/simba.jpg",audioSrc:"audio/simba.mp3"},{word:"villain",translation:"злодей",image:"img/villain.jpg",audioSrc:"audio/villain.mp3"},{word:"joker",translation:"джокер",image:"img/joker.jpg",audioSrc:"audio/joker.mp3"}],[{word:"pull",translation:"тянуть",image:"img/pull.jpg",audioSrc:"audio/pull.mp3"},{word:"clean",translation:"убирать",image:"img/clean.jpg",audioSrc:"audio/clean.mp3"},{word:"fall",translation:"падать",image:"img/fall.jpg",audioSrc:"audio/fall.mp3"},{word:"carry",translation:"нести",image:"img/carry.jpg",audioSrc:"audio/carry.mp3"},{word:"stretch",translation:"тянуться",image:"img/stretch.jpg",audioSrc:"audio/stretch.mp3"},{word:"creep",translation:"ползти",image:"img/creep.png",audioSrc:"audio/creep.mp3"},{word:"swing",translation:"раскачиваться",image:"img/swing.jpg",audioSrc:"audio/swing.mp3"},{word:"hold",translation:"держать",image:"img/hold.jpg",audioSrc:"audio/hold.mp3"}]]},297:function(e,a,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.categorys=void 0;const t=o(i(294)),r=o(i(71)),n=o(i(704)),s=o(i(602)),d=o(i(738)),l=o(i(210)),c=o(i(52)),u=o(i(719));a.categorys=[t.default,r.default,n.default,s.default,d.default,l.default,c.default,u.default]},957:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.Router=void 0,a.Router=class{constructor(){this.routes=[]}add(e){this.routes.push(e)}addRoute(e){this.enumiration(e)}changeRoute(){const e=window.location.hash;e?this.enumiration(e):this.enumiration("#/Main")}enumiration(e){this.routes.forEach((a=>{a.hash===e&&a.needFoo()}))}}},995:(e,a,i)=>{e.exports=i.p+"assets/15483ed759d0819429c4.ttf"},294:(e,a,i)=>{e.exports=i.p+"assets/e6507ac0fcd0f56b32c5.jpg"},71:(e,a,i)=>{e.exports=i.p+"assets/ba9c952d0408f1f9f48f.jpg"},704:(e,a,i)=>{e.exports=i.p+"assets/607af4f089ac30136c3c.jpg"},602:(e,a,i)=>{e.exports=i.p+"assets/408be50972b9cf16669c.jpg"},738:(e,a,i)=>{e.exports=i.p+"assets/9aabf5277d758bbec361.jpg"},210:(e,a,i)=>{e.exports=i.p+"assets/d99272aa30785b5a08d0.jpg"},52:(e,a,i)=>{e.exports=i.p+"assets/8596bcbaa65cc6e27c19.jpg"},719:(e,a,i)=>{e.exports=i.p+"assets/2f0b0a5cc769725294d6.jpg"}},a={};function i(o){var t=a[o];if(void 0!==t)return t.exports;var r=a[o]={exports:{}};return e[o].call(r.exports,r,r.exports,i),r.exports}i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var a=i.g.document;if(!e&&a&&(a.currentScript&&(e=a.currentScript.src),!e)){var o=a.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{i(45),i(995);const e=new(i(752).App)(document.body);window.addEventListener("hashchange",(()=>{e.router.changeRoute()}))})()})();