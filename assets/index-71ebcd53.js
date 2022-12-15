(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();const I={},Ge=(e,t)=>e===t,ae=Symbol("solid-proxy"),H={equals:Ge};let Je=ge;const C=1,U=2,ue={owned:null,cleanups:null,context:null,owner:null};var y=null;let w=null,m=null,b=null,T=null,se=0;function Ke(e,t){const i=m,n=y,s=e.length===0,o=s?ue:{owned:null,cleanups:null,context:null,owner:t||n},l=s?e:()=>e(()=>J(()=>oe(o)));y=o,m=null;try{return V(l,!0)}finally{m=i,y=n}}function D(e,t){t=t?Object.assign({},H,t):H;const i={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},n=s=>(typeof s=="function"&&(s=s(i.value)),he(i,s));return[pe.bind(i),n]}function N(e,t,i){const n=me(e,t,!1,C);K(n)}function A(e,t,i){i=i?Object.assign({},H,i):H;const n=me(e,t,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=i.equals||void 0,K(n),pe.bind(n)}function J(e){const t=m;m=null;try{return e()}finally{m=t}}function pe(){const e=w;if(this.sources&&(this.state||e))if(this.state===C||e)K(this);else{const t=b;b=null,V(()=>W(this),!1),b=t}if(m){const t=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(t)):(m.sources=[this],m.sourceSlots=[t]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return this.value}function he(e,t,i){let n=e.value;return(!e.comparator||!e.comparator(n,t))&&(e.value=t,e.observers&&e.observers.length&&V(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],l=w&&w.running;l&&w.disposed.has(o),(l&&!o.tState||!l&&!o.state)&&(o.pure?b.push(o):T.push(o),o.observers&&ye(o)),l||(o.state=C)}if(b.length>1e6)throw b=[],new Error},!1)),t}function K(e){if(!e.fn)return;oe(e);const t=y,i=m,n=se;m=y=e,Qe(e,e.value,n),m=i,y=t}function Qe(e,t,i){let n;try{n=e.fn(t)}catch(s){e.pure&&(e.state=C),$e(s)}(!e.updatedAt||e.updatedAt<=i)&&(e.updatedAt!=null&&"observers"in e?he(e,n):e.value=n,e.updatedAt=i)}function me(e,t,i,n=C,s){const o={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:null,pure:i};return y===null||y!==ue&&(y.owned?y.owned.push(o):y.owned=[o]),o}function be(e){const t=w;if(e.state===0||t)return;if(e.state===U||t)return W(e);if(e.suspense&&J(e.suspense.inFallback))return e.suspense.effects.push(e);const i=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<se);)(e.state||t)&&i.push(e);for(let n=i.length-1;n>=0;n--)if(e=i[n],e.state===C||t)K(e);else if(e.state===U||t){const s=b;b=null,V(()=>W(e,i[0]),!1),b=s}}function V(e,t){if(b)return e();let i=!1;t||(b=[]),T?i=!0:T=[],se++;try{const n=e();return Xe(i),n}catch(n){b||(T=null),$e(n)}}function Xe(e){if(b&&(ge(b),b=null),e)return;const t=T;T=null,t.length&&V(()=>Je(t),!1)}function ge(e){for(let t=0;t<e.length;t++)be(e[t])}function W(e,t){const i=w;e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];s.sources&&(s.state===C||i?s!==t&&be(s):(s.state===U||i)&&W(s,t))}}function ye(e){const t=w;for(let i=0;i<e.observers.length;i+=1){const n=e.observers[i];(!n.state||t)&&(n.state=U,n.pure?b.push(n):T.push(n),n.observers&&ye(n))}}function oe(e){let t;if(e.sources)for(;e.sources.length;){const i=e.sources.pop(),n=e.sourceSlots.pop(),s=i.observers;if(s&&s.length){const o=s.pop(),l=i.observerSlots.pop();n<s.length&&(o.sourceSlots[l]=n,s[n]=o,i.observerSlots[n]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)oe(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Ye(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function $e(e){throw e=Ye(e),e}function a(e,t){return J(()=>e(t||{}))}function j(){return!0}const ze={get(e,t,i){return t===ae?i:e.get(t)},has(e,t){return e.has(t)},set:j,deleteProperty:j,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:j,deleteProperty:j}},ownKeys(e){return e.keys()}};function Z(e){return(e=typeof e=="function"?e():e)?e:{}}function De(...e){let t=!1;for(let n=0;n<e.length;n++){const s=e[n];t=t||!!s&&ae in s,e[n]=typeof s=="function"?(t=!0,A(s)):s}if(t)return new Proxy({get(n){for(let s=e.length-1;s>=0;s--){const o=Z(e[s])[n];if(o!==void 0)return o}},has(n){for(let s=e.length-1;s>=0;s--)if(n in Z(e[s]))return!0;return!1},keys(){const n=[];for(let s=0;s<e.length;s++)n.push(...Object.keys(Z(e[s])));return[...new Set(n)]}},ze);const i={};for(let n=e.length-1;n>=0;n--)if(e[n]){const s=Object.getOwnPropertyDescriptors(e[n]);for(const o in s)o in i||Object.defineProperty(i,o,{enumerable:!0,get(){for(let l=e.length-1;l>=0;l--){const r=(e[l]||{})[o];if(r!==void 0)return r}}})}return i}function x(e){let t=!1;const i=e.keyed,n=A(()=>e.when,void 0,{equals:(s,o)=>t?s===o:!s==!o});return A(()=>{const s=n();if(s){const o=e.children,l=typeof o=="function"&&o.length>0;return t=i||l,l?J(()=>o(s)):o}return e.fallback},void 0,void 0)}function Ze(e,t,i){let n=i.length,s=t.length,o=n,l=0,r=0,d=t[s-1].nextSibling,f=null;for(;l<s||r<o;){if(t[l]===i[r]){l++,r++;continue}for(;t[s-1]===i[o-1];)s--,o--;if(s===l){const u=o<n?r?i[r-1].nextSibling:i[o-r]:d;for(;r<o;)e.insertBefore(i[r++],u)}else if(o===r)for(;l<s;)(!f||!f.has(t[l]))&&t[l].remove(),l++;else if(t[l]===i[o-1]&&i[r]===t[s-1]){const u=t[--s].nextSibling;e.insertBefore(i[r++],t[l++].nextSibling),e.insertBefore(i[--o],u),t[s]=i[o]}else{if(!f){f=new Map;let h=r;for(;h<o;)f.set(i[h],h++)}const u=f.get(t[l]);if(u!=null)if(r<u&&u<o){let h=l,g=1,$;for(;++h<s&&h<o&&!(($=f.get(t[h]))==null||$!==u+g);)g++;if(g>u-r){const v=t[l];for(;r<u;)e.insertBefore(i[r++],v)}else e.replaceChild(i[r++],t[l++])}else l++;else t[l++].remove()}}}const ce="_$DX_DELEGATE";function et(e,t,i,n={}){let s;return Ke(o=>{s=o,t===document?e():c(t,e(),t.firstChild?null:void 0,i)},n.owner),()=>{s(),t.textContent=""}}function p(e,t,i){const n=document.createElement("template");n.innerHTML=e;let s=n.content.firstChild;return i&&(s=s.firstChild),s}function E(e,t=window.document){const i=t[ce]||(t[ce]=new Set);for(let n=0,s=e.length;n<s;n++){const o=e[n];i.has(o)||(i.add(o),t.addEventListener(o,nt))}}function B(e,t,i){i==null?e.removeAttribute(t):e.setAttribute(t,i)}function tt(e,t){t==null?e.removeAttribute("class"):e.className=t}function ee(e,t,i,n){if(n)Array.isArray(i)?(e[`$$${t}`]=i[0],e[`$$${t}Data`]=i[1]):e[`$$${t}`]=i;else if(Array.isArray(i)){const s=i[0];e.addEventListener(t,i[0]=o=>s.call(e,i[1],o))}else e.addEventListener(t,i)}function it(e,t,i){if(!t)return i?B(e,"style"):t;const n=e.style;if(typeof t=="string")return n.cssText=t;typeof i=="string"&&(n.cssText=i=void 0),i||(i={}),t||(t={});let s,o;for(o in i)t[o]==null&&n.removeProperty(o),delete i[o];for(o in t)s=t[o],s!==i[o]&&(n.setProperty(o,s),i[o]=s);return i}function c(e,t,i,n){if(i!==void 0&&!n&&(n=[]),typeof t!="function")return G(e,t,n,i);N(s=>G(e,t(),s,i),n)}function nt(e){const t=`$$${e.type}`;let i=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==i&&Object.defineProperty(e,"target",{configurable:!0,value:i}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return i||document}}),I.registry&&!I.done&&(I.done=!0,document.querySelectorAll("[id^=pl-]").forEach(n=>n.remove()));i;){const n=i[t];if(n&&!i.disabled){const s=i[`${t}Data`];if(s!==void 0?n.call(i,s,e):n.call(i,e),e.cancelBubble)return}i=i._$host||i.parentNode||i.host}}function G(e,t,i,n,s){for(I.context&&!i&&(i=[...e.childNodes]);typeof i=="function";)i=i();if(t===i)return i;const o=typeof t,l=n!==void 0;if(e=l&&i[0]&&i[0].parentNode||e,o==="string"||o==="number"){if(I.context)return i;if(o==="number"&&(t=t.toString()),l){let r=i[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),i=R(e,i,n,r)}else i!==""&&typeof i=="string"?i=e.firstChild.data=t:i=e.textContent=t}else if(t==null||o==="boolean"){if(I.context)return i;i=R(e,i,n)}else{if(o==="function")return N(()=>{let r=t();for(;typeof r=="function";)r=r();i=G(e,r,i,n)}),()=>i;if(Array.isArray(t)){const r=[],d=i&&Array.isArray(i);if(ie(r,t,i,s))return N(()=>i=G(e,r,i,n,!0)),()=>i;if(I.context){if(!r.length)return i;for(let f=0;f<r.length;f++)if(r[f].parentNode)return i=r}if(r.length===0){if(i=R(e,i,n),l)return i}else d?i.length===0?de(e,r,n):Ze(e,i,r):(i&&R(e),de(e,r));i=r}else if(t instanceof Node){if(I.context&&t.parentNode)return i=l?[t]:t;if(Array.isArray(i)){if(l)return i=R(e,i,n,t);R(e,i,null,t)}else i==null||i===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);i=t}}return i}function ie(e,t,i,n){let s=!1;for(let o=0,l=t.length;o<l;o++){let r=t[o],d=i&&i[o];if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))s=ie(e,r,d)||s;else if(typeof r=="function")if(n){for(;typeof r=="function";)r=r();s=ie(e,Array.isArray(r)?r:[r],Array.isArray(d)?d:[d])||s}else e.push(r),s=!0;else{const f=String(r);d&&d.nodeType===3&&d.data===f?e.push(d):e.push(document.createTextNode(f))}}return s}function de(e,t,i=null){for(let n=0,s=t.length;n<s;n++)e.insertBefore(t[n],i)}function R(e,t,i,n){if(i===void 0)return e.textContent="";const s=n||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const r=t[l];if(s!==r){const d=r.parentNode===e;!o&&!l?d?e.replaceChild(s,r):e.insertBefore(s,i):d&&r.remove()}else o=!0}}else e.insertBefore(s,i);return[s]}class Ie extends Error{}Ie.prototype.name="AssertionError";function Ne(e,t){if(!e){var i=new Ie(t);throw Error.captureStackTrace&&Error.captureStackTrace(i,Ne),i}}let _;if(typeof window>"u"||typeof window.localStorage>"u"){const e={};_={getItem(t){return e[t]||null},setItem(t,i){if(arguments.length<2)throw new Error("Failed to execute 'setItem' on 'Storage': 2 arguments required, but only 1 present.");e[t]=i.toString()},removeItem(t){delete e[t]}}}else _=window.localStorage;const st=(e,t={})=>{Ne(e,"namepace required");const{defaults:i={},lspReset:n=!1,storageEventListener:s=!0}=t,o=new EventTarget;try{const r=JSON.parse(_.getItem(e))||{};if(r.lspReset!==n){_.removeItem(e);for(const[d,f]of Object.entries({...i}))o[d]=f}else for(const[d,f]of Object.entries({...i,...r}))o[d]=f}catch(r){console.error(r),_.removeItem(e)}o.lspReset=n,s&&typeof window<"u"&&typeof window.addEventListener<"u"&&window.addEventListener("storage",r=>{for(const f of Object.keys(o))delete o[f];const d=JSON.parse(_.getItem(e))||{};for(const[f,u]of Object.entries({...i,...d}))o[f]=u;t.lspReset=d.lspReset,o.dispatchEvent(new Event("update"))});function l(r){return{get(d,f){return typeof d[f]=="object"&&d[f]!==null?new Proxy(d[f],l(r)):typeof d[f]=="function"&&d===r&&f!=="constructor"?d[f].bind(d):d[f]},set(d,f,u){d[f]=u;try{return _.setItem(e,JSON.stringify(r)),r.dispatchEvent(new Event("update")),!0}catch(h){return console.error(h),!1}}}}return new Proxy(o,l(o))},ot="/assets/coach-4a9fe358.png",rt="/assets/doubledecker-781dfbf1.png",lt="/assets/minibus-98e34566.png",ct=[{plateNumber:"131-DL-1359",model:"MAN Neoplan Tag Axle",steats:55},{plateNumber:"08-C-12626",model:"Iveco Bulous",steats:47},{plateNumber:"06-D-21167",model:"DAF 4000 Marco Polo",steats:57},{plateNumber:"05-KE-16676",model:"Vanhoole T9",steats:55}],dt={"Mini Bus":[{plateNumber:"142-D-10294",model:"Mercedes Sprinter",steats:18},{plateNumber:"142-D-14229",model:"Mercedes Sprinter",steats:16},{plateNumber:"142-D-16804",model:"Mercedes Sprinter",steats:16},{plateNumber:"131-D-37906",model:"V-W Crafter",steats:16},{plateNumber:"12-KE-6871",model:"Mercedes Sprinter",steats:19},{plateNumber:"08-D-66683",model:"Mercedes Sprinter",steats:18}],Coaches:ct,"Double Decker":[{plateNumber:"06-D-30559",model:"Volvo B7",steats:86},{plateNumber:"06-D-30475",model:"Volvo B7",steats:86},{plateNumber:"06-D-30461",model:"Volvo B7",steats:86},{plateNumber:"05-D-123380",model:"Volvo B7",steats:76},{plateNumber:"04-D-20367",model:"Volvo B7",steats:82}]},ve="0mt856nk1nrqb",_e="https://sheetdb.io/api/v1",O=st("records",{defaults:{records:[]},lspReset:!1}),we={Coaches:ot,"Double Decker":rt,"Mini Bus":lt},[L,Te]=D(0),[S,Se]=D(0),[P,ft]=D(!1);let at=await Promise.resolve(Object.entries(dt).map(([e,t])=>t.map(({plateNumber:i,model:n,seats:s})=>({plateNumber:i,model:n,seats:s,category:e}))).flat());const[re,Ce]=D(at),xe="Iurie Bivol",Me={Operator:"James Coaches","Odometer Reading":"123k miles","Name of Inspector":xe,"Vehicle Reg/Fleet No":"12 D 1234","Vehicle Make/Model":"Volvo Srinter",Date:new Date().toISOString().split("T")[0].split("-").reverse().join(" / "),"Interior and inside cab":[{"TM No.":1,"Item Inspected":"Registration/License/VIN",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":2,"Item Inspected":"Vehicle Weights & Dimensions Plate",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":18,"Item Inspected":"Warning Triangle",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"9/64","Item Inspected":"Driver and passenger seats",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":10,"Item Inspected":"Seat belts",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":8,"Item Inspected":"Mirrors",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":11,"Item Inspected":"Windows, Ventilation, Glass & view of the road",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":7,"Item Inspected":"Windscreen wipers & washers",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"16/69","Item Inspected":"Tachograph/Speedometer",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":6,"Item Inspected":"Horm",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":29,"Item Inspected":"Gauges, warning devices & malfunction indicators",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":29,"Item Inspected":"ABS warning",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":53,"Item Inspected":"Driving Controls",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"17/43","Item Inspected":"Steering Control",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":13,"Item Inspected":"Service brake pedal",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":14,"Item Inspected":"Service Brake Operation (Inspection in Cab)",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":4,"Item Inspected":"Pressure/Air/Vacuum wamings",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":5,"Item Inspected":"Pressure/Air/Vacuum build-up",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":12,"Item Inspected":"Mechanical Brake Hand Levers",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":15,"Item Inspected":"Air/Vacuum Hand Control Valves",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"9/22","Item Inspected":"Driver's accommodation",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"","Item Inspected":"Accessibity features",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":63,"Item Inspected":"Emergency Exits",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"","Item Inspected":"",condition:!0,"Description of Defect":"Interior of body, passenger entrance, exit steps and platforms","Rectified by":""},{"TM No.":"62/66","Item Inspected":"Fire Extinguisher and First Aid Kit",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":65,"Item Inspected":"Interior Lighting",condition:!0,"Description of Defect":"","Rectified by":""}],"Ground level and under-vehicle":[{"TM No.":"2/22","Item Inspected":"Condition & Security of body & bumpers",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":3,"Item Inspected":"Exhaust Smoke emission",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":27,"Item Inspected":"Road wheels & hubs",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":25,"Item Inspected":"Tyre Specification",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":24,"Item Inspected":"Tyre Condition",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":26,"Item Inspected":"Tyre Tread",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":32,"Item Inspected":"Spare wheel & carrier",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":45,"Item Inspected":"Chassis/Underbody",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":67,"Item Inspected":"Fuel Cut Off",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"16/70","Item Inspected":"Speed limiter & Plate",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":20,"Item Inspected":"Electrical wiring, equipment, batteries",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":53,"Item Inspected":"Engine & transmission mountings",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":34,"Item Inspected":"Fuel Tanks & system",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":53,"Item Inspected":"Oil leaks",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":46,"Item Inspected":"Exhaust System/Noise",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":43,"Item Inspected":"Steering Mechanism",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":36,"Item Inspected":"Steering Alignment",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"50/51/54/55","Item Inspected":"Suspension Units",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"50/51/54/55","Item Inspected":"Suspension Linkage & Pins/Bushes",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":52,"Item Inspected":"Shock Absorbers",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":44,"Item Inspected":"Asles, stub axes & wheel bearings",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":53,"Item Inspected":"Transmission & Final Drive",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":49,"Item Inspected":"Brake Lines & Hoses",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":47,"Item Inspected":"Brake Wheel Units",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":33,"Item Inspected":"Brake Reservoirs/Valves/Master Cylinders/Connections",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":30,"Item Inspected":"Brake Fluid",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":48,"Item Inspected":"Mechanical Brake Components",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":48,"Item Inspected":"Brake Drums/Discs & Linings/Pads",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"56/59","Item Inspected":"Front & Rear lamps & No. Plate Lamps",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":57,"Item Inspected":"Stop Lamps",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"","Item Inspected":"Fog Lamps",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"59/28","Item Inspected":"Marker Lamps & reflectors",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"60/61","Item Inspected":"Headlamps & Aim",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":58,"Item Inspected":"Direction indicators & hazzard warning lamps",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"","Item Inspected":"Additional breaking devices",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"","Item Inspected":"Ancillary equipment",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"","Item Inspected":"Other Items",condition:!0,"Description of Defect":"","Rectified by":""}],"Brake performance (roller brake/decelerometer test)":[{"TM No.":"37/38","Item Inspected":"Service brake performance",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"39/40","Item Inspected":"Emergency/Secondary brake performance",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"41/42","Item Inspected":"Parking brake performance",condition:!0,"Description of Defect":"","Rectified by":""}],"Signature of Inspector":"Beeef",Note:"All inspections must be conducted by a Suitably Qualified Person",SubNote:"(A suitably qualified Person is one who is suitably qualified by academic qualifications or experience or both to carry out Inspections, Maintenance and Repairs on this category of vehicle)","Action Taken on Defects Found":[{"Check No.":"","Rectification Action":"","Rectified by":""}],Agreement:"I certify that all defects have been satisfactorily repaired and the vehicle is now fit for service",Name:"Iurie Bivol",Position:"Head Mechanic",LastNote:"The Above signatory must be a suitably Qualified Person"},[ne,ut]=D(!1),[Re,ke]=D([]),[Ae,Be]=D(""),[Ee,Pe]=D(xe);!O.records.length&&O.records.push(...(await(await fetch(`${_e}/${ve}`)).json()).map(e=>({...e,issues:e.issues.split(`
`)})));const[Oe,Le]=D(O.records),Ve=Object.entries(Me).filter(([e,t])=>Array.isArray(t)).slice(0,-1),pt=(e,t)=>Ve.slice(0,e).map(i=>i[1].length).reduce((i,n)=>i+n,0)+t,ht=p('<div><img width="100%"><h3></h3></div>'),mt=p('<div class="bus_types"></div>'),te=({name:e})=>(()=>{const t=ht.cloneNode(!0),i=t.firstChild,n=i.nextSibling;return t.$$mousedown=s=>Se(e),B(i,"alt",e),c(n,e),N(()=>B(i,"src",we[e])),t})(),bt=()=>a(x,{get when(){return!S()},get children(){const e=mt.cloneNode(!0);return c(e,a(te,{name:"Coaches"}),null),c(e,a(te,{name:"Double Decker"}),null),c(e,a(te,{name:"Mini Bus"}),null),e}});E(["mousedown"]);const gt=p('<div class="bus_header_button"><button><i class="fa-sharp fa-solid fa-circle-left"></i></button></div>'),yt=e=>{e==="selectBus"&&Te(0),e==="selectBusType"&&Se(0),e==="infoPage"&&ut(!1)},Fe=({page:e})=>(()=>{const t=gt.cloneNode(!0),i=t.firstChild;return i.$$mousedown=n=>yt(e),t})();E(["mousedown"]);const $t=p('<div class="bus_header_button"><button><i></i></button></div>'),[Dt,It]=D("fas fa-plus"),Nt=({})=>(()=>{const e=$t.cloneNode(!0),t=e.firstChild,i=t.firstChild;return t.$$mousedown=n=>{ft(!P()),It(P()?"fas fa-minus":"fas fa-plus")},N(n=>{const s=P()&&"border: 3px solid red; animation: pulse 2s infinite;",o=Dt();return n._v$=it(t,s,n._v$),o!==n._v$2&&tt(i,n._v$2=o),n},{_v$:void 0,_v$2:void 0}),e})();E(["mousedown"]);const vt=p('<div class="busTypeHeader"><h2></h2></div>'),qe=({title:e,page:t,canEdit:i=!0})=>(()=>{const n=vt.cloneNode(!0),s=n.firstChild;return c(n,a(Fe,{page:t}),s),c(s,e),c(n,a(x,{when:i,get children(){return a(Nt,{})}}),null),n})(),_t=p('<div class="has-icons-left"><span class="icon is-large is-left"><i class="fas fa-bus"></i></span><span class="select is-large"><select><option selected>Coaches</option><option>Double Decker</option><option>Mini Bus</option></select></span></div>'),wt=p('<div class="control" style="position: relative;margin: 20px; border: 1px solid black"><div class="width: 200px"></div><input placeholder="Bus Model" class="input is-large"><br><input placeholder="Bus Plate Number" class="input is-large"><br><button class="input is-large has-background-info has-text-white add_bus"> <i class="fas fa-plus"></i> &nbsp; <i class="fas fa-bus"></i> &nbsp; Add Bus</button><br><br><br></div>'),Tt=p('<button class="button"><i class="fas fa-times"></i></button>'),St=p('<div><img width="100%"><div class="subtitle"></div><div class="subtitle"></div></div>'),Ct=p('<div class="has-text-centered"><div class="bus_list"></div><br><br><br><br><br><br></div>'),xt=e=>{Ce(re().filter(({plateNumber:t})=>t!==e))},Mt=()=>_t.cloneNode(!0),Rt=()=>a(x,{get when(){return P()},get children(){const e=wt.cloneNode(!0),t=e.firstChild,i=t.nextSibling,n=i.nextSibling,s=n.nextSibling,o=s.nextSibling,l=o.nextSibling;return c(t,a(Mt,{})),l.$$mousedown=r=>{const d=r.currentTarget.parentElement,f=d.firstChild.firstChild.childNodes[1].firstChild,u=f.options[f.selectedIndex].textContent,h=d.childNodes[2],g=d.childNodes[3];Ce(re().concat([{plateNumber:g.value,category:u,model:h.value}])),g.value="",h.value=""},e}}),kt=({category:e,model:t,plateNumber:i})=>{const n=`Are you sure you want to delete ${e} ${t} - ${i}?`;return a(x,{get when(){return P()},get children(){const s=Tt.cloneNode(!0);return s.$$mousedown=o=>window.confirm(n)&&xt(i),s}})},At=({category:e,model:t,plateNumber:i,onClick:n})=>(()=>{const s=St.cloneNode(!0),o=s.firstChild,l=o.nextSibling,r=l.nextSibling;return c(s,a(kt,{plateNumber:i,category:e,model:t}),o),ee(o,"mousedown",n,!0),ee(l,"mousedown",n,!0),c(l,t),ee(r,"mousedown",n,!0),c(r,i),N(()=>B(o,"src",we[e])),s})(),Bt=()=>a(x,{get when(){return A(()=>!!S())()&&!L()},get children(){const e=Ct.cloneNode(!0),t=e.firstChild,i=t.nextSibling,n=i.nextSibling,s=n.nextSibling,o=s.nextSibling;return c(e,a(qe,{get title(){return S()},page:"selectBusType"}),t),c(t,()=>re().filter(l=>l.category===S()).map(l=>a(At,De(l,{onClick:r=>{Te(l.plateNumber),Le(O.records.filter(d=>d.plateNumber===l.plateNumber))}})))),c(e,a(Rt,{}),o),e}});E(["mousedown"]);const Et=p('<div><table style="width:90%; margin: 20px"><thead><tr></tr></thead><tbody></tbody></table></div>'),Pt=p("<th><span></span></th>"),Ot=p("<tr><td><span></span></td><td><span></span></td><td><span></span></td><td><span></span></td></tr>"),Lt=p("<span><br></span>"),Vt=["Date","Checked By","Miles",,"Info"],Ft=()=>(()=>{const e=Et.cloneNode(!0),t=e.firstChild,i=t.firstChild,n=i.firstChild,s=i.nextSibling;return c(n,()=>Vt.map(o=>(()=>{const l=Pt.cloneNode(!0),r=l.firstChild;return c(r,o),l})())),c(s,()=>Oe().map(({date:o,issues:l,inspectorName:r,miles:d})=>(()=>{const f=Ot.cloneNode(!0),u=f.firstChild,h=u.firstChild,g=u.nextSibling,$=g.firstChild,v=g.nextSibling,F=v.firstChild,Q=v.nextSibling,q=Q.firstChild;return c(h,o),c($,r),c(F,d),c(q,()=>l.map(X=>(()=>{const M=Lt.cloneNode(!0),Y=M.firstChild;return c(M,X,Y),M})())),f})())),e})(),qt=p('<div class="field is-horizontal" style="margin: 20px"><div class="field-label is-normal"><label class="label"></label></div><div class="field-body"><div class="field"><p class="control"><input class="input" type="text"></p></div></div></div>'),fe=({title:e,placeholder:t,name:i,setName:n})=>(()=>{const s=qt.cloneNode(!0),o=s.firstChild,l=o.firstChild,r=o.nextSibling,d=r.firstChild,f=d.firstChild,u=f.firstChild;return c(l,e),u.$$keyup=h=>n(h.currentTarget.value),B(u,"placeholder",t),N(()=>u.value=i()),s})();E(["keyup"]);const jt=p('<div class="row"><div class="control" style="margin: 20px; float: right"><button class="button has-primary-color submit-button"><i class="fa-solid fa-check"></i><span> &nbsp;Finished</span></button><br></div></div>'),Ht=p('<div class="rows" style="border: 1px solid #ccc; border-radius: 10px; margin: 20px"><div class="row has-text-centered title">Add new Report</div><div class="row"><br><br></div><div class="row"><textarea class="textarea" placeholder="Describe what you did ..."></textarea><hr></div></div>'),Ut=e=>{const t=[...e.currentTarget.parentElement.parentElement.parentElement.childNodes][2].firstChild.value.split(`
`)||Re(),i={date:Me.Date,issues:t,inspectorName:Ee(),miles:Ae(),plateNumber:L()},n=JSON.stringify({data:{...i,issues:i.issues.join(`
`)}});console.log(i,n);const s={Accept:"application/json","Content-Type":"application/json"};fetch(`${_e}/${ve}`,{method:"POST",headers:s,body:n}).then(o=>o.json()).then(console.log),O.records.push(i),Le(Oe().concat([i])),ke([]),Pe("Iurie Bivol"),Be("")},Wt=()=>(()=>{const e=jt.cloneNode(!0),t=e.firstChild,i=t.firstChild;return i.$$mousedown=Ut,e})(),Gt=()=>(()=>{const e=Ht.cloneNode(!0),t=e.firstChild,i=t.nextSibling,n=i.firstChild,s=i.nextSibling,o=s.firstChild;return c(i,a(fe,{name:Ee,setName:Pe,title:"Inspector Name",placeholder:"Inspector Name ..."}),n),c(i,a(fe,{name:Ae,setName:Be,title:"Miles",placeholder:"123k"}),n),o.addEventListener("change",l=>ke(l.currentTarget.value.split(`
`))),c(e,a(Wt,{}),null),N(()=>o.value=Re().join(`
`)),e})();E(["mousedown"]);const Jt=p('<div class="bus_info"><div class="has-text-centered title">Reports List</div><br><br><br><br><br></div>'),Kt=()=>a(x,{get when(){return A(()=>!!(S()&&L()))()&&!ne()},get children(){const e=Jt.cloneNode(!0),t=e.firstChild,i=t.nextSibling,n=i.nextSibling,s=n.nextSibling;return c(e,a(qe,{get title(){return S()+" - "+L()},page:"selectBus",canEdit:!1}),t),c(e,a(Ft,{}),i),c(e,a(Gt,{}),s),e}}),Qt="/assets/bus-4998042c.jpeg",Xt=p('<div class="column"><div class="field is-horizontal"><div class="field-label is-normal"><label class="label"></label></div><div class="field-body"><div class="field"><p class="control"><input class="input is-static" type="text" readonly></p></div></div></div></div>'),Yt=p('<div><div class="subtitle">: </div><table style="width:90%; margin: 20px"><thead><tr></tr></thead><tbody></tbody></table></div>'),zt=p('<span>Condition <br><i class="fas fa-check"></i> or<i class="fas fa-times"></i></span>'),Zt=p("<th><span></span></th>"),ei=p("<tr><td><span></span></td><td><span></span></td><td><span></span></td><td><span></span></td><td><span></span></td><td><span></span></td></tr>"),ti=p('<i class="fas fa-times"></i>'),ii=p('<i class="fas fa-check"></i>'),ni=p('<div style="margin: 20px"><div class="title">Vehicle Inspection Report (PSV)</div><div class="columns is-mobile"></div><div class="columns is-mobile"></div><div class="columns is-mobile"></div></div>'),k=({key:e,value:t})=>(()=>{const i=Xt.cloneNode(!0),n=i.firstChild,s=n.firstChild,o=s.firstChild,l=s.nextSibling,r=l.firstChild,d=r.firstChild,f=d.firstChild;return c(o,e),f.value=t,i})(),si=({checkLocation:e,i:t,errors:i,issues:n})=>(()=>{const s=Yt.cloneNode(!0),o=s.firstChild,l=o.firstChild,r=o.nextSibling,d=r.firstChild,f=d.firstChild,u=d.nextSibling;return c(o,()=>String.fromCharCode("A".charCodeAt()+t),l),c(o,e,null),c(f,()=>["Check No","TM No.","Item Inspected",zt.cloneNode(!0),"Description of Defect","Rectified By"].map(h=>(()=>{const g=Zt.cloneNode(!0),$=g.firstChild;return c($,h),g})())),c(u,()=>i.map((h,g)=>{const $=pt(t,g);return(()=>{const v=ei.cloneNode(!0),F=v.firstChild,Q=F.firstChild,q=F.nextSibling,X=q.firstChild,M=q.nextSibling,Y=M.firstChild,le=M.nextSibling,je=le.firstChild,He=le.nextSibling,Ue=He.firstChild;return c(Q,$+1),c(X,()=>h["TM No."]),c(Y,()=>h["Item Inspected"]),c(je,(()=>{const z=A(()=>!!n.find(We=>We.checkNo===$));return()=>z()?ti.cloneNode(!0):ii.cloneNode(!0)})()),c(Ue,()=>n.find(z=>z.checkNo===$)?.description||""),v})()})),s})(),oi=({date:e,issues:t,inspectorName:i,miles:n})=>(()=>{const s=ni.cloneNode(!0),o=s.firstChild,l=o.nextSibling,r=l.nextSibling,d=r.nextSibling;return c(l,a(k,{key:"Operator",value:"James Coaches"}),null),c(l,a(k,{key:"Vehicle Reg/Fleet No",get value(){return L()}}),null),c(r,a(k,{key:"Odometer Reading",value:n}),null),c(r,a(k,{key:"Vehicle Make/Model",get value(){return S()+" - Unknown"}}),null),c(d,a(k,{key:"Name of Inspector",value:i}),null),c(d,a(k,{key:"Date",value:e}),null),c(s,()=>Ve.map(([f,u],h)=>a(si,{i:h,checkLocation:f,issues:t,errors:u})),null),s})(),ri=()=>a(x,{get when(){return ne()},get children(){return[a(Fe,{page:"infoPage"}),a(oi,De(ne))]}}),li=p('<div><header><h1>Inspector Service</h1><img style="height:70px"></header><main></main></div>'),ci=()=>(()=>{const e=li.cloneNode(!0),t=e.firstChild,i=t.firstChild,n=i.nextSibling,s=t.nextSibling;return B(n,"src",Qt),c(s,a(bt,{}),null),c(s,a(Bt,{}),null),c(s,a(Kt,{}),null),c(s,a(ri,{}),null),e})(),di=document.getElementById("root");et(()=>a(ci,{}),di);