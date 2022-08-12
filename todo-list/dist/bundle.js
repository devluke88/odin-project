(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),l=t.n(a)()(r());l.push([e.id,"/* https://developer.apple.com/design/human-interface-guidelines/foundations/color/ */\n:root {\n  --dark-grey: #3A3A3C;\n  --grey: #8E8E93;\n  --light-grey: #f2f5f7;\n  --another-gray: #dee2e6;\n  --ligt-yellow: #fff4e6;\n  --white: #fff;\n  --red: #FF3B30;\n  --orange: #FF9500;\n  --green: #28CD41;\n  --purple: #BF5AF2;\n  --dark-purple: #b23bed;\n}\n  \n*, ::after, ::before {\n  box-sizing: border-box;\n}\n\n\nbody {\n  font-family: 'Arial', 'Helvetica', sans-serif;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  background-color: var(--white);\n}\n\n.wrap {\n  height: 100vh;\n  box-shadow: 0 0 0px rgba(black, 0.33);\n  display: grid;\n  grid-template-columns: minmax(10px, 1fr) minmax(10px, 3fr);\n  grid-template-rows: min-content min-content 1fr min-content;\n  /* gap: 1px; */\n}\n\n\n/* NAV */\n.nav {\n  grid-column: 1 / -1;\n  background: var(--purple);\n  border-bottom: 1px solid var(--dark-purple);\n  display: flex;\n  padding: 10px;\n  padding-left: 30px;\n  color: var(--white);\n}\n\n.nav-logo {\n  padding-left: 10px;\n}\n\n.logo-element {\n  text-decoration: none;\n  color: var(--white);\n}\n\n.logo-element:hover { \n  color: var(--light-grey);\n  cursor: pointer;\n}\n\n\n\n.collapsible {\n  background-color: var(--light-grey);\n  color: var(--dark-grey);\n  cursor: pointer;\n  padding: 16px;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 18px;\n}\n\n.active, .collapsible:hover {\n  background-color: var(--another-gray);\n  border-radius: 0.25rem;\n  cursor: pointer;\n  color: var(--dark-purple);\n}\n\n.collapsible-content {\n  margin: 10px 0px 18px 10px;\n  overflow: hidden;\n  background-color: #f1f1f1;\n}\n\n.collapsible:after {\n  content: \"\\02C4\";\n  color: var(--dark-grey);\n  /* font-weight: bold; */\n  float: right;\n  margin-left: 5px;\n}\n\n.active:after {\n  content: '\\02C5';\n}\n\n.custom-project,\n.custom-project-button {\n  background-color: var(--light-grey);\n  color: var(--dark-grey);\n  cursor: pointer;\n  padding: 14px;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n}\n\n.active, .custom-project:hover,\n.custom-project-button:hover {\n  background-color: var(--another-gray);\n  border-radius: 0.25rem;\n  cursor: pointer;\n  color: var(--dark-purple);\n}\n\n/* The Modal (background) */\n#project-modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  padding-top: 200px; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content */\n.project-modal-content {\n  background-color: #fefefe;\n  margin: auto;\n  /* padding: 20px; */\n  max-width: 500px;\n  border: 1px solid #888;\n  width: 50%;\n}\n\n/* The Close Button */\n.project-close-button {\n  color: #aaaaaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.project-close-button:hover,\n.project-close-button:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.project-modal-button {\n  background-color: var(--purple);\n  color: var(--white);\n  cursor: pointer;\n  padding: 7px 15px;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 16px;\n  border-radius: 0.25rem;\n}\n\n.project-modal-button:hover {\n  background-color: var(--dark-purple);\n  border-radius: 0.25rem;\n  cursor: pointer;\n}\n\n.project-modal-close-button {\n  background-color: var(--white);\n  color: var(--dark-grey);\n  cursor: pointer;\n  padding: 7px 15px;\n  border: 1px solid var(--dark-grey);\n  text-align: left;\n  outline: none;\n  font-size: 16px;\n  border-radius: 0.25rem;\n}\n\n.project-modal-close-button:hover {\n  background-color: var(--dark-grey);\n  color: var(--white);\n  border-radius: 0.25rem;\n}\n\n/* MAIN */\n#main {\n  grid-column: 2 / 3;\n  background: var(--white);\n  display: flex;\n  justify-content: center;\n}\n\n.content {\n  margin-top: 35px;\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n}\n\n.content-header {\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.new-task-btn {\n  color: var(--grey);\n  padding: 10px;\n}\n\n.new-task-btn-text {\n  padding-left: 5px;\n}\n\n.new-task-btn:hover {\n  cursor: pointer;\n  color: var(--purple);\n}\n\n/* SIDEBAR */\n#sidebar {\n  grid-column: 1 / 2;\n  grid-row: 2 / 4;\n  background: var(--light-grey);\n  padding: 10px;\n  border-right: 1px solid var(--another-gray);\n}\n\nul {\n  text-decoration: none;\n  list-style: none;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\nli {\n  padding: 10px;\n}\n\nli:hover {\n  background-color: var(--another-gray);\n  border-radius: 0.25rem;\n  cursor: pointer;\n  color: var(--dark-purple);\n}\n\nli:hover .list-item {\n  color: var(--dark-purple);\n}\n\n\nli a {\n  text-decoration: none;\n  color: var(--dark-grey);\n}\n\nli a:hover { \n  color: var(--dark-purple);\n}\n\n.sidebar-element {\n  padding-left: 10px;\n}\n\n\n/* FOOTER */\n.footer {\n  border-top: 1px solid var(--another-gray);\n  grid-column: 1 / -1;\n  background-color: var(--light-grey);\n  color: var(--dark-grey);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n\n.footer a {\n  text-decoration: none;\n  color: var(--dark-grey);\n}\n\n.footer a:hover { \n  color: var(--purple);\n}\n\n.footer-icon {\n  padding-left: 10px;\n}\n\n\n/* MOBILE */\n@media (max-width: 600px)  {\n  body {\n    grid-template-columns: 100%;\n    grid-template-rows: auto;\n  }\n  .nav, \n  #main,\n  #sidebar,\n  .footer {\n    grid-column: 1 / -1 !important;\n    grid-row: auto !important;\n  }\n\n  .sidebar {\n    border-bottom: 1px solid var(--another-gray);\n  }\n}\n",""]);const c=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(l[d]=!0)}for(var i=0;i<e.length;i++){var s=[].concat(e[i]);o&&l[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},l=[],c=0;c<e.length;c++){var d=e[c],i=o.base?d[0]+o.base:d[0],s=a[i]||0,p="".concat(i," ").concat(s);a[i]=s+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}l.push(p)}return l}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var l=0;l<a.length;l++){var c=t(a[l]);n[c].references--}for(var d=o(e,r),i=0;i<a.length;i++){var s=t(a[i]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),l=t.n(a),c=t(565),d=t.n(c),i=t(216),s=t.n(i),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=l().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=(e,n="none",t=!0,o)=>{const r=document.createElement("div");r.id=e.toLowerCase();const a=document.createElement("div");a.className="content-header";const l=document.createElement("i");l.className=n,a.appendChild(l);const c=document.createElement("span");if(c.className="content-header-text",c.textContent=` ${e}`,a.appendChild(c),r.appendChild(a),!0===t){const e=document.createElement("div");e.className="new-task-btn";const n=document.createElement("i");n.className="fa-solid fa-plus new-task-icon";const t=document.createElement("span");t.className="new-task-btn-text",t.textContent="New Task",e.appendChild(n),e.appendChild(t),r.appendChild(e)}const d=document.createElement("div");d.className="task-container",d.style.display="flex",d.style.flexDirection="column";for(let e=0;e<o.length;e++){let n=`<div class="task-item" data-task-item-index="${e}">``<div class="task-title">${o[e].title}</div>``<div class="task-description">${o[e].description}</div>``<div class="task-due-date">${o[e].dueDate}</div>``<div class="task-due-priority">${o[e].priority}</div>`;d.innerHTML+=n}return r.appendChild(d),r};function v(e){e.preventDefault();const n=e.target.textContent.toLowerCase();if("projects"!=n){const e=document.getElementById(n);for(let t=0;t<h.length;t++){let o=h[t].name.toLowerCase();o!=n?"projects"!=o&&(document.getElementById(h[t].name.toLowerCase()).style.display="none"):(e.style.display="flex",e.style.flexDirection="column")}}else console.log("Hello Projects Button!")}const h=[{name:"Inbox",icon:"fa-solid fa-inbox"},{name:"All",icon:"fa-solid fa-list"},{name:"Today",icon:"fa-solid fa-calendar-day"},{name:"Completed",icon:"fa-solid fa-circle-check"}],y=document.querySelector(".wrap"),b=((e,n)=>{const t=document.createElement("div");t.className="nav";const o=document.createElement("div");o.className="logo-element",o.style.display="flex";const r=document.createElement("div");r.className="fa-solid fa-check-double",o.appendChild(r);const a=document.createElement("div");return a.className="nav-logo",a.textContent="todoList",o.appendChild(a),t.appendChild(o),t})();y.append(b),document.querySelector(".logo-element").addEventListener("click",(function(e){e.preventDefault(),window.location.reload()}));const x=(e=>{const n=document.createElement("div");n.id="sidebar";const t=document.createElement("ul"),o=document.createElement("li");o.innerHTML='<a href="#" class="list-item"><i class="fa-solid fa-bars"></i></a>',t.appendChild(o);const r=document.createElement("hr");t.appendChild(r);for(let n of e){let e=document.createElement("li"),o=`<a href="#${n.name.toLowerCase()} class="list-item><i class="${n.icon}"></i><span class="sidebar-element">${n.name}</span></a>`;e.innerHTML=o,t.appendChild(e)}return n.appendChild(t),n})(h);y.append(x);const k=document.querySelector("#sidebar"),C=document.createElement("button");C.className="sidebar-element2 collapsible";const E=document.createElement("i");E.className="fa-solid fa-code-branch",C.appendChild(E);const w=document.createElement("span");w.className="sidebar-element",w.textContent="Projects",C.appendChild(w),k.append(C);const j=document.createElement("div");j.className="collapsible-content",j.style.display="block",k.append(j);const N=document.createElement("button");N.className="custom-project";const L=document.createElement("i");L.className="fa-solid fa-circle",L.style.color=`#${Math.floor(16777215*Math.random()).toString(16)}`;const S=document.createElement("span");S.className="sidebar-element",S.textContent="Test",N.appendChild(L),N.appendChild(S),j.append(N);const T=document.createElement("button");T.className="custom-project-button";const M=document.createElement("i");M.className="fa-solid fa-plus",T.appendChild(M);const A=document.createElement("span");function I(){document.querySelector("#project-modal").style.display="none"}A.className="sidebar-element",A.textContent="Add Project",T.appendChild(A),j.append(T);const F=((e,n)=>{const t=document.createElement("div");t.id="project-modal";const o=document.createElement("div");o.className="project-modal-content",o.style.borderRadius="5px";const r=document.createElement("div");r.id="project-modal-top-panel",r.style.display="flex",r.style.justifyContent="space-between",r.style.alignItems="flex-end",r.style.padding="10px 20px",r.style.paddingBottom="0px";const a=document.createElement("h5");a.className="project-modal-header",a.textContent="New Project",r.appendChild(a);const l=document.createElement("span");l.className="project-close-button",l.style.alignSelf="flex-start",l.innerHTML="&times",r.appendChild(l),o.appendChild(r);const c=document.createElement("hr");o.appendChild(c);const d=document.createElement("form");d.class="project-modal-form",d.style.display="flex",d.style.flexDirection="column",d.style.padding="20px",d.style.paddingTop="0px",d.style.gap="10px";const i=document.createElement("div");i.for="project-name",i.textContent="Name:",d.appendChild(i);const s=document.createElement("input");s.type="text",s.id="project-name",s.name="project-name",d.appendChild(s);const p=document.createElement("div");p.style.padding="0px 20px 20px 20px",p.style.display="flex",p.style.justifyContent="flex-end",p.style.gap="10px";const u=document.createElement("button");u.className="project-modal-close-button",u.textContent="Close",p.appendChild(u);const m=document.createElement("button");return m.className="project-modal-button",m.type="submit",m.value="Add",m.textContent="Create project",p.appendChild(m),o.appendChild(d),o.appendChild(p),t.appendChild(o),t})();y.append(F),window.onclick=function(e){const n=document.querySelector("#project-modal");e.target==n&&(n.style.display="none")},C.addEventListener("click",(function(){console.log("Opened!"),this.classList.toggle("active");var e=this.nextElementSibling;"block"===e.style.display?e.style.display="none":e.style.display="block"})),document.querySelectorAll("li").forEach((e=>{e.addEventListener("click",v)}));const q=document.createElement("div");q.id="main";const B=document.createElement("div");B.className="content";const D=g("Inbox","fa-solid fa-inbox",!0);B.append(D);const H=g("All","fa-solid fa-list",!0);H.style.display="none",B.append(H);const $=g("Today","fa-solid fa-calendar-day",!0);$.style.display="none",B.append($);const z=g("Completed","fa-solid fa-circle-check",!0);z.style.display="none",B.append(z),q.append(B),y.append(q),q.append(F),T.addEventListener("click",(function(){document.querySelector("#project-modal").style.display="block"})),document.querySelector(".project-close-button").addEventListener("click",I),document.querySelector(".project-modal-close-button").addEventListener("click",I),document.querySelector(".project-modal-button").addEventListener("click",(function(e){e.preventDefault(),1==function(){if(""==document.getElementById("project-name").value)return alert("Name must be filled out"),!1}()?console.log("test"):(console.log("NO"),I())}));const O=document.createElement("footer");O.className="footer",O.innerHTML='Copyright © Lukasz 2022 <a href="#"><i class="fa-brands fa-github footer-icon"></i></a>',y.append(O)})()})();