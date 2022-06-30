(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>l});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"/* https://developer.apple.com/design/human-interface-guidelines/foundations/color/ */\n:root {\n  --dark-grey: #3A3A3C;\n  --grey: #8E8E93;\n  --light-grey: #f2f5f7;\n  --another-gray: #dee2e6;\n  --ligt-yellow: #fff4e6;\n  --white: #fff;\n  --red: #FF3B30;\n  --orange: #FF9500;\n  --green: #28CD41;\n  --purple: #BF5AF2;\n  --dark-purple: #b23bed;\n}\n  \n*, ::after, ::before {\n  box-sizing: border-box;\n}\n\n\nbody {\n  font-family: 'Arial', 'Helvetica', sans-serif;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  background-color: var(--white);\n}\n\n.wrap {\n  height: 100vh;\n  box-shadow: 0 0 0px rgba(black, 0.33);\n  display: grid;\n  grid-template-columns: minmax(10px, 1fr) minmax(10px, 3fr);\n  grid-template-rows: min-content min-content 1fr min-content;\n  /* gap: 1px; */\n}\n\n\n/* NAV */\n.nav {\n  grid-column: 1 / -1;\n  background: var(--purple);\n  border-bottom: 1px solid var(--dark-purple);\n  display: flex;\n  padding: 10px;\n  padding-left: 30px;\n  color: var(--white);\n}\n\n.nav-logo {\n  padding-left: 10px;\n}\n\n.logo-element {\n  text-decoration: none;\n  color: var(--white);\n}\n\n.logo-element:hover { \n  color: var(--light-grey);\n  cursor: pointer;\n}\n\n\n/* MAIN */\n#main {\n  grid-column: 2 / 3;\n  background: var(--white);\n  display: flex;\n  justify-content: center;\n}\n\n.content {\n  margin-top: 35px;\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n}\n\n.content-header {\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.new-task-btn {\n  color: var(--grey);\n  padding: 10px;\n}\n\n.new-task-btn-text {\n  padding-left: 5px;\n}\n\n.new-task-btn:hover {\n  cursor: pointer;\n  color: var(--purple);\n}\n\n/* SIDEBAR */\n#sidebar {\n  grid-column: 1 / 2;\n  grid-row: 2 / 4;\n  background: var(--light-grey);\n  padding: 10px;\n  border-right: 1px solid var(--another-gray);\n}\n\nul {\n  text-decoration: none;\n  list-style: none;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\nli {\n  padding: 10px;\n}\n\nli:hover {\n  background-color: var(--another-gray);\n  border-radius: 0.25rem;\n  cursor: pointer;\n  color: var(--dark-purple);\n}\n\nli:hover .list-item {\n  color: var(--dark-purple);\n}\n\n\nli a {\n  text-decoration: none;\n  color: var(--dark-grey);\n}\n\nli a:hover { \n  color: var(--dark-purple);\n}\n\n.sidebar-element {\n  padding-left: 10px;\n}\n\n\n/* FOOTER */\n.footer {\n  border-top: 1px solid var(--another-gray);\n  grid-column: 1 / -1;\n  background-color: var(--light-grey);\n  color: var(--dark-grey);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n\n.footer a {\n  text-decoration: none;\n  color: var(--dark-grey);\n}\n\n.footer a:hover { \n  color: var(--purple);\n}\n\n.footer-icon {\n  padding-left: 10px;\n}\n\n\n/* MOBILE */\n@media (max-width: 600px)  {\n  body {\n    grid-template-columns: 100%;\n    grid-template-rows: auto;\n  }\n  .nav, \n  #main,\n  #sidebar,\n  .footer {\n    grid-column: 1 / -1 !important;\n    grid-row: auto !important;\n  }\n\n  .sidebar {\n    border-bottom: 1px solid var(--another-gray);\n  }\n}\n",""]);const l=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],l=0;l<n.length;l++){var c=n[l],d=o.base?c[0]+o.base:c[0],s=a[d]||0,p="".concat(d," ").concat(s);a[d]=s+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,o);o.byIndex=l,e.splice(l,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var l=t(a[i]);e[l].references--}for(var c=o(n,r),d=0;d<a.length;d++){var s=t(a[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),l=t(565),c=t.n(l),d=t(216),s=t.n(d),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const v=(n,e="none",t=!0)=>{const o=document.createElement("div");o.id=n.toLowerCase();const r=document.createElement("div");r.className="content-header";const a=document.createElement("i");a.className=e,r.appendChild(a);const i=document.createElement("span");if(i.className="content-header-text",i.textContent=` ${n}`,r.appendChild(i),o.appendChild(r),!0===t){const n=document.createElement("div");n.className="new-task-btn";const e=document.createElement("i");e.className="fa-solid fa-plus new-task-icon";const t=document.createElement("span");t.className="new-task-btn-text",t.textContent="New Task",n.appendChild(e),n.appendChild(t),o.appendChild(n)}return o};function g(n){n.preventDefault();const e=n.target.textContent.toLowerCase();if("projects"!=e){const n=document.getElementById(e);for(let t=0;t<h.length;t++){let o=h[t].name.toLowerCase();o!=e?"projects"!=o&&(document.getElementById(h[t].name.toLowerCase()).style.display="none"):(n.style.display="flex",n.style.flexDirection="column")}}else console.log("Hello Projects Button!")}const h=[{name:"Inbox",icon:"fa-solid fa-inbox"},{name:"All",icon:"fa-solid fa-list"},{name:"Today",icon:"fa-solid fa-calendar-day"},{name:"Projects",icon:"fa-solid fa-code-branch"},{name:"Completed",icon:"fa-solid fa-circle-check"}],y=document.querySelector(".wrap"),x=((n,e)=>{const t=document.createElement("div");t.className="nav";const o=document.createElement("div");o.className="logo-element",o.style.display="flex";const r=document.createElement("div");r.className="fa-solid fa-check-double",o.appendChild(r);const a=document.createElement("div");return a.className="nav-logo",a.textContent="todoList",o.appendChild(a),t.appendChild(o),t})();y.append(x),document.querySelector(".logo-element").addEventListener("click",(function(n){n.preventDefault(),window.location.reload()}));const b=(n=>{const e=document.createElement("div");e.id="sidebar";const t=document.createElement("ul"),o=document.createElement("li");o.innerHTML='<a href="#" class="list-item"><i class="fa-solid fa-bars"></i></a>',t.appendChild(o);const r=document.createElement("hr");t.appendChild(r);for(let e of n){let n=document.createElement("li"),o=`<a href="#${e.name.toLowerCase()} class="list-item><i class="${e.icon}"></i><span class="sidebar-element">${e.name}</span></a>`;n.innerHTML=o,t.appendChild(n)}return e.appendChild(t),e})(h);y.append(b),document.querySelectorAll("li").forEach((n=>{n.addEventListener("click",g)}));const w=document.createElement("div");w.id="main";const C=document.createElement("div");C.className="content";const E=v("Inbox","fa-solid fa-inbox",!0);C.append(E);const k=v("All","fa-solid fa-list",!0);k.style.display="none",C.append(k);const N=v("Today","fa-solid fa-calendar-day",!0);N.style.display="none",C.append(N);const L=v("Completed","fa-solid fa-circle-check",!0);L.style.display="none",C.append(L),w.append(C),y.append(w);const T=document.createElement("footer");T.className="footer",T.innerHTML='Copyright © Lukasz 2022 <a href="#"><i class="fa-brands fa-github footer-icon"></i></a>',y.append(T)})()})();