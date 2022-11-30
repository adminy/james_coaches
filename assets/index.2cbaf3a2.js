(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();const _={},Ne=(e,t)=>e===t,de=Symbol("solid-proxy"),I={equals:Ne};let Ee=$e;const C=1,q=2,he={owned:null,cleanups:null,context:null,owner:null};var b=null;let w=null,a=null,y=null,k=null,Y=0;function Ae(e,t){const n=a,i=b,s=e.length===0,l=s?he:{owned:null,cleanups:null,context:null,owner:t||i},o=s?e:()=>e(()=>F(()=>J(l)));b=l,a=null;try{return D(o,!0)}finally{a=n,b=i}}function A(e,t){t=t?Object.assign({},I,t):I;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=s=>(typeof s=="function"&&(s=s(n.value)),ye(n,s));return[ge.bind(n),i]}function x(e,t,n){const i=be(e,t,!1,C);z(i)}function K(e,t,n){n=n?Object.assign({},I,n):I;const i=be(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,z(i),ge.bind(i)}function F(e){const t=a;a=null;try{return e()}finally{a=t}}function ge(){const e=w;if(this.sources&&(this.state||e))if(this.state===C||e)z(this);else{const t=y;y=null,D(()=>U(this),!1),y=t}if(a){const t=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(t)):(a.sources=[this],a.sourceSlots=[t]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function ye(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&D(()=>{for(let s=0;s<e.observers.length;s+=1){const l=e.observers[s],o=w&&w.running;o&&w.disposed.has(l),(o&&!l.tState||!o&&!l.state)&&(l.pure?y.push(l):k.push(l),l.observers&&pe(l)),o||(l.state=C)}if(y.length>1e6)throw y=[],new Error},!1)),t}function z(e){if(!e.fn)return;J(e);const t=b,n=a,i=Y;a=b=e,ve(e,e.value,i),a=n,b=t}function ve(e,t,n){let i;try{i=e.fn(t)}catch(s){e.pure&&(e.state=C),_e(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ye(e,i):e.value=i,e.updatedAt=n)}function be(e,t,n,i=C,s){const l={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:b,context:null,pure:n};return b===null||b!==he&&(b.owned?b.owned.push(l):b.owned=[l]),l}function me(e){const t=w;if(e.state===0||t)return;if(e.state===q||t)return U(e);if(e.suspense&&F(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Y);)(e.state||t)&&n.push(e);for(let i=n.length-1;i>=0;i--)if(e=n[i],e.state===C||t)z(e);else if(e.state===q||t){const s=y;y=null,D(()=>U(e,n[0]),!1),y=s}}function D(e,t){if(y)return e();let n=!1;t||(y=[]),k?n=!0:k=[],Y++;try{const i=e();return Be(n),i}catch(i){y||(k=null),_e(i)}}function Be(e){if(y&&($e(y),y=null),e)return;const t=k;k=null,t.length&&D(()=>Ee(t),!1)}function $e(e){for(let t=0;t<e.length;t++)me(e[t])}function U(e,t){const n=w;e.state=0;for(let i=0;i<e.sources.length;i+=1){const s=e.sources[i];s.sources&&(s.state===C||n?s!==t&&me(s):(s.state===q||n)&&U(s,t))}}function pe(e){const t=w;for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n];(!i.state||t)&&(i.state=q,i.pure?y.push(i):k.push(i),i.observers&&pe(i))}}function J(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const l=s.pop(),o=n.observerSlots.pop();i<s.length&&(l.sourceSlots[o]=i,s[i]=l,n.observerSlots[i]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)J(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Le(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function _e(e){throw e=Le(e),e}function d(e,t){return F(()=>e(t||{}))}function j(){return!0}const Oe={get(e,t,n){return t===de?n:e.get(t)},has(e,t){return e.has(t)},set:j,deleteProperty:j,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:j,deleteProperty:j}},ownKeys(e){return e.keys()}};function X(e){return(e=typeof e=="function"?e():e)?e:{}}function Pe(...e){if(e.some(n=>n&&(de in n||typeof n=="function")))return new Proxy({get(n){for(let i=e.length-1;i>=0;i--){const s=X(e[i])[n];if(s!==void 0)return s}},has(n){for(let i=e.length-1;i>=0;i--)if(n in X(e[i]))return!0;return!1},keys(){const n=[];for(let i=0;i<e.length;i++)n.push(...Object.keys(X(e[i])));return[...new Set(n)]}},Oe);const t={};for(let n=e.length-1;n>=0;n--)if(e[n]){const i=Object.getOwnPropertyDescriptors(e[n]);for(const s in i)s in t||Object.defineProperty(t,s,{enumerable:!0,get(){for(let l=e.length-1;l>=0;l--){const o=(e[l]||{})[s];if(o!==void 0)return o}}})}return t}function N(e){let t=!1;const n=e.keyed,i=K(()=>e.when,void 0,{equals:(s,l)=>t?s===l:!s==!l});return K(()=>{const s=i();if(s){const l=e.children,o=typeof l=="function"&&l.length>0;return t=n||o,o?F(()=>l(s)):l}return e.fallback})}const Me=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],De=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Me]),je=new Set(["innerHTML","textContent","innerText","children"]),Ie=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),se=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),qe=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Ke={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Ue(e,t,n){let i=n.length,s=t.length,l=i,o=0,r=0,c=t[s-1].nextSibling,u=null;for(;o<s||r<l;){if(t[o]===n[r]){o++,r++;continue}for(;t[s-1]===n[l-1];)s--,l--;if(s===o){const h=l<i?r?n[r-1].nextSibling:n[l-r]:c;for(;r<l;)e.insertBefore(n[r++],h)}else if(l===r)for(;o<s;)(!u||!u.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[l-1]&&n[r]===t[s-1]){const h=t[--s].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--l],h),t[s]=n[l]}else{if(!u){u=new Map;let m=r;for(;m<l;)u.set(n[m],m++)}const h=u.get(t[o]);if(h!=null)if(r<h&&h<l){let m=o,B=1,L;for(;++m<s&&m<l&&!((L=u.get(t[m]))==null||L!==h+B);)B++;if(B>h-r){const H=t[o];for(;r<h;)e.insertBefore(n[r++],H)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}const le="_$DX_DELEGATE";function Fe(e,t,n,i={}){let s;return Ae(l=>{s=l,t===document?e():f(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{s(),t.textContent=""}}function g(e,t,n){const i=document.createElement("template");i.innerHTML=e;let s=i.content.firstChild;return n&&(s=s.firstChild),s}function v(e,t=window.document){const n=t[le]||(t[le]=new Set);for(let i=0,s=e.length;i<s;i++){const l=e[i];n.has(l)||(n.add(l),t.addEventListener(l,Qe))}}function Z(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function ze(e,t,n,i){i==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,i)}function we(e,t){t==null?e.removeAttribute("class"):e.className=t}function He(e,t,n,i){if(i)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=l=>s.call(e,n[1],l))}else e.addEventListener(t,n)}function Ve(e,t,n={}){const i=Object.keys(t||{}),s=Object.keys(n);let l,o;for(l=0,o=s.length;l<o;l++){const r=s[l];!r||r==="undefined"||t[r]||(re(e,r,!1),delete n[r])}for(l=0,o=i.length;l<o;l++){const r=i[l],c=!!t[r];!r||r==="undefined"||n[r]===c||!c||(re(e,r,!0),n[r]=c)}return n}function ke(e,t,n){if(!t)return n?Z(e,"style"):t;const i=e.style;if(typeof t=="string")return i.cssText=t;typeof n=="string"&&(i.cssText=n=void 0),n||(n={}),t||(t={});let s,l;for(l in n)t[l]==null&&i.removeProperty(l),delete n[l];for(l in t)s=t[l],s!==n[l]&&(i.setProperty(l,s),n[l]=s);return n}function Re(e,t={},n,i){const s={};return i||x(()=>s.children=E(e,t.children,s.children)),x(()=>t.ref&&t.ref(e)),x(()=>Xe(e,t,n,!0,s,!0)),s}function f(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return E(e,t,i,n);x(s=>E(e,t(),s,n),i)}function Xe(e,t,n,i,s={},l=!1){t||(t={});for(const o in s)if(!(o in t)){if(o==="children")continue;s[o]=oe(e,o,null,s[o],n,l)}for(const o in t){if(o==="children"){i||E(e,t.children);continue}const r=t[o];s[o]=oe(e,o,r,s[o],n,l)}}function Ge(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function re(e,t,n){const i=t.trim().split(/\s+/);for(let s=0,l=i.length;s<l;s++)e.classList.toggle(i[s],n)}function oe(e,t,n,i,s,l){let o,r,c;if(t==="style")return ke(e,n,i);if(t==="classList")return Ve(e,n,i);if(n===i)return i;if(t==="ref")l||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);i&&e.removeEventListener(u,i),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);i&&e.removeEventListener(u,i,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),h=qe.has(u);if(!h&&i){const m=Array.isArray(i)?i[0]:i;e.removeEventListener(u,m)}(h||n)&&(He(e,u,n,h),h&&v([u]))}else if((c=je.has(t))||!s&&(se[t]||(r=De.has(t)))||(o=e.nodeName.includes("-")))t==="class"||t==="className"?we(e,n):o&&!r&&!c?e[Ge(t)]=n:e[se[t]||t]=n;else{const u=s&&t.indexOf(":")>-1&&Ke[t.split(":")[0]];u?ze(e,u,t,n):Z(e,Ie[t]||t,n)}return n}function Qe(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),_.registry&&!_.done&&(_.done=!0,document.querySelectorAll("[id^=pl-]").forEach(i=>i.remove()));n!==null;){const i=n[t];if(i&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?i.call(n,s,e):i.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function E(e,t,n,i,s){for(_.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=i!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(_.context)return n;if(l==="number"&&(t=t.toString()),o){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=T(e,n,i,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(_.context)return n;n=T(e,n,i)}else{if(l==="function")return x(()=>{let r=t();for(;typeof r=="function";)r=r();n=E(e,r,n,i)}),()=>n;if(Array.isArray(t)){const r=[],c=n&&Array.isArray(n);if(Q(r,t,n,s))return x(()=>n=E(e,r,n,i,!0)),()=>n;if(_.context){if(!r.length)return n;for(let u=0;u<r.length;u++)if(r[u].parentNode)return n=r}if(r.length===0){if(n=T(e,n,i),o)return n}else c?n.length===0?ce(e,r,i):Ue(e,n,r):(n&&T(e),ce(e,r));n=r}else if(t instanceof Node){if(_.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=T(e,n,i,t);T(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Q(e,t,n,i){let s=!1;for(let l=0,o=t.length;l<o;l++){let r=t[l],c=n&&n[l];if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))s=Q(e,r,c)||s;else if(typeof r=="function")if(i){for(;typeof r=="function";)r=r();s=Q(e,Array.isArray(r)?r:[r],Array.isArray(c)?c:[c])||s}else e.push(r),s=!0;else{const u=String(r);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return s}function ce(e,t,n=null){for(let i=0,s=t.length;i<s;i++)e.insertBefore(t[i],n)}function T(e,t,n,i){if(n===void 0)return e.textContent="";const s=i||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(s!==r){const c=r.parentNode===e;!l&&!o?c?e.replaceChild(s,r):e.insertBefore(s,n):c&&r.remove()}else l=!0}}else e.insertBefore(s,n);return[s]}const[W,xe]=A(0),[M,Se]=A(0),[S,ue]=A(!1),Ce=Array(10).fill(0).map(e=>({plateNumber:(Math.random()+1).toString(36).substring(7),image:"/bus.jpeg"})),[ee,te]=A([...Ce]),We=()=>{te(Ce)},[P,Ye]=A([[{title:"Miles / KM",placeholder:"123k"},{title:"Plate Number",placeholder:"12-D-1234",value:"12-D-1234"},{title:"Check This Thing 1",checked:!0},{title:"Check This Thing 2",checked:!0},{title:"Check This Thing 3",checked:!0},{title:"Check This Thing 4",checked:!0}],[{title:"Miles / KM",placeholder:"123k",value:"160k"},{title:"Plate Number",placeholder:"12-D-1234"},{title:"Check This Thing 1",checked:!0},{title:"Check This Thing 2",checked:!0},{title:"Check This Thing 3",checked:!0},{title:"Check This Thing 4",checked:!0}]]),Je=g("<h1></h1>"),Ze=g('<div class="bus_types"></div>'),G=({name:e})=>(()=>{const t=Je.cloneNode(!0);return t.$$click=n=>Se(e),f(t,e),t})(),et=()=>d(N,{get when(){return!M()},get children(){const e=Ze.cloneNode(!0);return f(e,d(G,{name:"Coaches"}),null),f(e,d(G,{name:"Double Decker"}),null),f(e,d(G,{name:"Mini Bus"}),null),e}});v(["click"]);const tt=g('<div class="bus_header_button"><button><i class="fa-sharp fa-solid fa-circle-left"></i></button></div>'),nt=e=>{if(S())return alert("Make sure you save first!");e==="selectBus"&&xe(0),e==="selectBusType"&&Se(0)},it=({page:e})=>(()=>{const t=tt.cloneNode(!0),n=t.firstChild;return n.$$click=i=>nt(e),t})();v(["click"]);const st=g('<button style="background: gray; font-size: 30px;margin-right: 80px"><i class="fas fa-broom"></i></button>'),lt=g('<div class="bus_header_button"><button><i></i></button></div>'),[rt,fe]=A("fas fa-plus-circle"),ot=()=>(()=>{const e=lt.cloneNode(!0),t=e.firstChild,n=t.firstChild;return f(e,d(N,{get when(){return S()},get children(){const i=st.cloneNode(!0);return i.$$click=s=>{ue(!1),We()},i}}),t),t.addEventListener("mouseleave",i=>fe("fas fa-plus-circle")),t.addEventListener("mouseenter",i=>fe("fas fa-check-circle")),t.$$click=i=>ue(!S()),x(i=>{const s=S()&&"border: 3px solid red; animation: pulse 2s infinite;",l=rt();return i._v$=ke(t,s,i._v$),l!==i._v$2&&we(n,i._v$2=l),i},{_v$:void 0,_v$2:void 0}),e})();v(["click"]);const ct=g('<div class="busTypeHeader"><h2></h2></div>'),Te=({title:e,page:t})=>(()=>{const n=ct.cloneNode(!0),i=n.firstChild;return f(n,d(it,{page:t}),i),f(i,e),f(n,d(ot,{}),null),n})(),ut=g('<div><input placeholder="Bus Plate Number" style="font-size: 40px"><br><input placeholder="Bus Image Url" style="font-size: 40px"><br><button style="font-size: 40px">Add Bus</button></div>'),ft=g('<div><br><div class="bus_list"></div></div>'),at=g('<button style="float: right; font-size: 25px; width: 100%"><i class="fas fa-times" style="color: red"></i></button>'),dt=g('<div><img width="200" height="200"><h2 style="margin: 0; padding: 0"></h2></div>'),ae=e=>{if(S())return alert("Make sure you save first!");xe(e)},ht=e=>{te(ee().filter(({plateNumber:t})=>t!==e))},gt=()=>d(N,{get when(){return S()},get children(){const e=ut.cloneNode(!0),t=e.firstChild,n=t.nextSibling,i=n.nextSibling,s=i.nextSibling,l=s.nextSibling;return l.$$click=o=>{const r=o.currentTarget.parentElement.firstChild,c=o.currentTarget.parentElement.childNodes[2];te(ee().concat([{plateNumber:r.value,image:c.value}])),r.value="",c.value=""},e}}),yt=()=>d(N,{get when(){return K(()=>!!M())()&&!W()},get children(){const e=ft.cloneNode(!0),t=e.firstChild,n=t.nextSibling;return f(e,d(Te,{get title(){return M()},page:"selectBusType"}),t),f(n,()=>ee().map(({plateNumber:i,image:s})=>(()=>{const l=dt.cloneNode(!0),o=l.firstChild,r=o.nextSibling;return o.$$click=c=>ae(i),Z(o,"src",s),r.$$click=c=>ae(i),f(r,i),f(l,d(N,{get when(){return S()},get children(){const c=at.cloneNode(!0);return c.$$click=u=>ht(i),c}}),null),l})()),null),f(n,d(gt,{}),null),e}});v(["click"]);const bt=g('<div class="bus_info"><br><table style="width:100%"><thead><tr></tr></thead><tbody></tbody></table><br><br><br><hr><br><br><br><button style="font-size:40px;float:right">Add Entry</button><div id="newEntry"></div></div>'),mt=g("<th></th>"),$t=g("<tr></tr>"),pt=g("<td></td>"),_t=g('<input type="checkbox" style="transform : scale(2)">'),wt=g('<div><span style="font-size: 38px">: </span><input><br><br></div>'),kt=e=>{const t=[...document.getElementById("newEntry").querySelectorAll("input")];Ye(P().concat([[{title:"Miles / KM",placeholder:"123k",value:t[0].value},{title:"Plate Number",placeholder:"12-D-1234",value:t[1].value},{title:"Check This Thing 1",checked:t[2].checked},{title:"Check This Thing 2",checked:t[3].checked},{title:"Check This Thing 3",checked:t[4].checked},{title:"Check This Thing 4",checked:t[5].checked}]])),t[0].value=""},xt=()=>d(N,{get when(){return K(()=>!!M())()&&W()},get children(){const e=bt.cloneNode(!0),t=e.firstChild,n=t.nextSibling,i=n.firstChild,s=i.firstChild,l=i.nextSibling,o=n.nextSibling,r=o.nextSibling,c=r.nextSibling,u=c.nextSibling,h=u.nextSibling,m=h.nextSibling,B=m.nextSibling,L=B.nextSibling,H=L.nextSibling;return f(e,d(Te,{get title(){return M()+" - "+W()},page:"selectBus"}),t),f(s,()=>P()[0].map(({title:$})=>(()=>{const p=mt.cloneNode(!0);return f(p,$),p})())),f(l,()=>P().map($=>(()=>{const p=$t.cloneNode(!0);return f(p,()=>$.map(({placeholder:O,value:V,checked:R})=>(()=>{const ne=pt.cloneNode(!0);return f(ne,V||O||(()=>{const ie=_t.cloneNode(!0);return ie.checked=R,ie})()),ne})())),p})()).flat()),L.$$click=kt,f(H,()=>P()[P().length-1].map($=>(()=>{const p=wt.cloneNode(!0),O=p.firstChild,V=O.firstChild,R=O.nextSibling;return f(O,()=>$.title,V),Re(R,Pe({get style(){return"font-size:40px;"+("checked"in $&&"transform : scale(3)")},get type(){return"checked"in $?"checkbox":"text"}},$),!1,!1),p})())),e}});v(["click"]);const St=g('<div><header><img src="../bus.jpeg"><h1>Inspector Service</h1></header><main></main></div>'),Ct=()=>(()=>{const e=St.cloneNode(!0),t=e.firstChild,n=t.nextSibling;return f(n,d(et,{}),null),f(n,d(yt,{}),null),f(n,d(xt,{}),null),e})(),Tt=document.getElementById("root");Fe(()=>d(Ct,{}),Tt);
