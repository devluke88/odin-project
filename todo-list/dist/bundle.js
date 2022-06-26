(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"/* https://developer.apple.com/design/human-interface-guidelines/foundations/color/ */\n:root {\n  --dark-grey: #3A3A3C;\n  --grey: #8E8E93;\n  --light-grey: #f2f5f7;\n  --another-gray: #dee2e6;\n  --ligt-yellow: #fff4e6;\n  --white: #fff;\n  --red: #FF3B30;\n  --orange: #FF9500;\n  --green: #28CD41;\n  --purple: #BF5AF2;\n  --dark-purple: #b23bed;\n}\n  \n*, ::after, ::before {\n  box-sizing: border-box;\n}\n\n\nbody {\n  font-family: 'Arial', 'Helvetica', sans-serif;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  background-color: var(--white);\n}\n\n.wrap {\n  height: 100vh;\n  box-shadow: 0 0 0px rgba(black, 0.33);\n  display: grid;\n  grid-template-columns: minmax(10px, 1fr) minmax(10px, 3fr);\n  grid-template-rows: min-content min-content 1fr min-content;\n  /* gap: 1px; */\n}\n\n\n/* NAV */\n.nav {\n  grid-column: 1 / -1;\n  background: var(--purple);\n  border-bottom: 1px solid var(--dark-purple);\n  display: flex;\n  padding: 10px;\n  padding-left: 30px;\n  color: var(--white);\n}\n\n.nav-logo {\n  padding-left: 10px;\n}\n\n.nav a {\n  text-decoration: none;\n  color: var(--white);\n}\n\n.nav a:hover { \n  color: var(--light-grey);\n}\n\n\n/* MAIN */\n#main {\n  grid-column: 2 / 3;\n  background: var(--white);\n  display: flex;\n  justify-content: center;\n}\n\n.content {\n  margin-top: 35px;\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n}\n\n.content-header {\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.new-task-btn {\n  color: var(--grey);\n  padding: 10px;\n}\n\n.new-task-btn-text {\n  padding-left: 5px;\n}\n\n.new-task-btn:hover {\n  cursor: pointer;\n  color: var(--purple);\n}\n\n/* SIDEBAR */\n#sidebar {\n  grid-column: 1 / 2;\n  grid-row: 2 / 4;\n  background: var(--light-grey);\n  padding: 10px;\n  border-right: 1px solid var(--another-gray);\n}\n\nul {\n  text-decoration: none;\n  list-style: none;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\nli {\n  padding: 10px;\n}\n\nli:hover {\n  background-color: var(--another-gray);\n  border-radius: 0.25rem;\n  cursor: pointer;\n  color: var(--dark-purple);\n}\n\nli:hover .list-item {\n  color: var(--dark-purple);\n}\n\n\nli a {\n  text-decoration: none;\n  color: var(--dark-grey);\n}\n\nli a:hover { \n  color: var(--dark-purple);\n}\n\n.sidebar-element {\n  padding-left: 10px;\n}\n\n\n/* FOOTER */\n.footer {\n  border-top: 1px solid var(--another-gray);\n  grid-column: 1 / -1;\n  background-color: var(--light-grey);\n  color: var(--dark-grey);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n\n.footer a {\n  text-decoration: none;\n  color: var(--dark-grey);\n}\n\n.footer a:hover { \n  color: var(--purple);\n}\n\n.footer-icon {\n  padding-left: 10px;\n}\n\n\n/* MOBILE */\n@media (max-width: 600px)  {\n  body {\n    grid-template-columns: 100%;\n    grid-template-rows: auto;\n  }\n  .nav, \n  #main,\n  #sidebar,\n  .footer {\n    grid-column: 1 / -1 !important;\n    grid-row: auto !important;\n  }\n\n  .sidebar {\n    border-bottom: 1px solid var(--another-gray);\n  }\n}\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var l=n[c],s=r.base?l[0]+r.base:l[0],d=a[s]||0,p="".concat(s," ").concat(d);a[s]=d+1;var u=t(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var l=r(n,o),s=0;s<a.length;s++){var d=t(a[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=l}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),l=t.n(c),s=t(216),d=t.n(s),p=t(589),u=t.n(p),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=l(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=(n,e="none",t=!0)=>{const r=document.createElement("div");r.id=n.toLowerCase();const o=document.createElement("div");o.className="content-header";const a=document.createElement("i");a.className=e,o.appendChild(a);const i=document.createElement("span");if(i.className="content-header-text",i.textContent=` ${n}`,o.appendChild(i),r.appendChild(o),!0===t){const n=document.createElement("div");n.className="new-task-btn";const e=document.createElement("i");e.className="fa-solid fa-plus new-task-icon";const t=document.createElement("span");t.className="new-task-btn-text",t.textContent="New Task",n.appendChild(e),n.appendChild(t),r.appendChild(n)}return r};function h(n){n.preventDefault();const e=n.target.textContent.toLowerCase();if("projects"!=e){const n=document.getElementById(e);for(let t=0;t<g.length;t++){let r=g[t].name.toLowerCase();r!=e?"projects"!=r&&(document.getElementById(g[t].name.toLowerCase()).style.display="none"):(n.style.display="flex",n.style.flexDirection="column")}}else console.log("Hello Projects Button!")}const g=[{name:"Inbox",icon:"fa-solid fa-inbox"},{name:"All",icon:"fa-solid fa-list"},{name:"Today",icon:"fa-solid fa-calendar-day"},{name:"Projects",icon:"fa-solid fa-code-branch"},{name:"Completed",icon:"fa-solid fa-circle-check"}],y=document.querySelector(".wrap"),x=document.createElement("div");x.className="nav",x.innerHTML='<a href="#"><div class="fa-solid fa-check-double"></div><span class="nav-logo">todoList</span></a>',y.append(x);const b=(n=>{const e=document.createElement("div");e.id="sidebar";const t=document.createElement("ul"),r=document.createElement("li");r.innerHTML='<a href="#" class="list-item"><i class="fa-solid fa-bars"></i></a>',t.appendChild(r);const o=document.createElement("hr");t.appendChild(o);for(let e of n){let n=document.createElement("li"),r=`<a href="#${e.name.toLowerCase()} class="list-item><i class="${e.icon}"></i><span class="sidebar-element">${e.name}</span></a>`;n.innerHTML=r,t.appendChild(n)}return e.appendChild(t),e})(g);y.append(b),document.querySelectorAll("li").forEach((n=>{n.addEventListener("click",h)}));const w=document.createElement("div");w.id="main";const C=document.createElement("div");C.className="content";const E=v("Inbox","fa-solid fa-inbox",!0);C.append(E);const k=v("All","fa-solid fa-list",!0);k.style.display="none",C.append(k);const T=v("Today","fa-solid fa-calendar-day",!0);T.style.display="none",C.append(T);const L=v("Completed","fa-solid fa-circle-check",!0);L.style.display="none",C.append(L),w.append(C),y.append(w);const N=document.createElement("footer");N.className="footer",N.innerHTML='Copyright © Lukasz 2022 <a href="#"><i class="fa-brands fa-github footer-icon"></i></a>',y.append(N)})()})();