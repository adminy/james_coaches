(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const v={},Qe=(e,i)=>e===i,Ie=Symbol("solid-proxy"),W={equals:Qe};let ze=xe;const R=1,K=2,_e={owned:null,cleanups:null,context:null,owner:null};var y=null;let x=null,h=null,m=null,C=null,de=0;function Je(e,i){const t=h,n=y,s=e.length===0,o=s?_e:{owned:null,cleanups:null,context:null,owner:i||n},r=s?e:()=>e(()=>X(()=>fe(o)));y=o,h=null;try{return j(r,!0)}finally{h=t,y=n}}function $(e,i){i=i?Object.assign({},W,i):W;const t={value:e,observers:null,observerSlots:null,comparator:i.equals||void 0},n=s=>(typeof s=="function"&&(s=s(t.value)),ve(t,s));return[De.bind(t),n]}function w(e,i,t){const n=Ne(e,i,!1,R);Y(n)}function q(e,i,t){t=t?Object.assign({},W,t):W;const n=Ne(e,i,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=t.equals||void 0,Y(n),De.bind(n)}function X(e){const i=h;h=null;try{return e()}finally{h=i}}function De(){const e=x;if(this.sources&&(this.state||e))if(this.state===R||e)Y(this);else{const i=m;m=null,j(()=>Q(this),!1),m=i}if(h){const i=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(i)):(h.sources=[this],h.sourceSlots=[i]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function ve(e,i,t){let n=e.value;return(!e.comparator||!e.comparator(n,i))&&(e.value=i,e.observers&&e.observers.length&&j(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],r=x&&x.running;r&&x.disposed.has(o),(r&&!o.tState||!r&&!o.state)&&(o.pure?m.push(o):C.push(o),o.observers&&Ce(o)),r||(o.state=R)}if(m.length>1e6)throw m=[],new Error},!1)),i}function Y(e){if(!e.fn)return;fe(e);const i=y,t=h,n=de;h=y=e,Xe(e,e.value,n),h=t,y=i}function Xe(e,i,t){let n;try{n=e.fn(i)}catch(s){e.pure&&(e.state=R),Se(s)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?ve(e,n):e.value=n,e.updatedAt=t)}function Ne(e,i,t,n=R,s){const o={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:i,owner:y,context:null,pure:t};return y===null||y!==_e&&(y.owned?y.owned.push(o):y.owned=[o]),o}function Te(e){const i=x;if(e.state===0||i)return;if(e.state===K||i)return Q(e);if(e.suspense&&X(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<de);)(e.state||i)&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===R||i)Y(e);else if(e.state===K||i){const s=m;m=null,j(()=>Q(e,t[0]),!1),m=s}}function j(e,i){if(m)return e();let t=!1;i||(m=[]),C?t=!0:C=[],de++;try{const n=e();return Ye(t),n}catch(n){m||(C=null),Se(n)}}function Ye(e){if(m&&(xe(m),m=null),e)return;const i=C;C=null,i.length&&j(()=>ze(i),!1)}function xe(e){for(let i=0;i<e.length;i++)Te(e[i])}function Q(e,i){const t=x;e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];s.sources&&(s.state===R||t?s!==i&&Te(s):(s.state===K||t)&&Q(s,i))}}function Ce(e){const i=x;for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];(!n.state||i)&&(n.state=K,n.pure?m.push(n):C.push(n),n.observers&&Ce(n))}}function fe(e){let i;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),s=t.observers;if(s&&s.length){const o=s.pop(),r=t.observerSlots.pop();n<s.length&&(o.sourceSlots[r]=n,s[n]=o,t.observerSlots[n]=r)}}if(e.owned){for(i=0;i<e.owned.length;i++)fe(e.owned[i]);e.owned=null}if(e.cleanups){for(i=0;i<e.cleanups.length;i++)e.cleanups[i]();e.cleanups=null}e.state=0,e.context=null}function Ze(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Se(e){throw e=Ze(e),e}function d(e,i){return X(()=>e(i||{}))}function G(){return!0}const et={get(e,i,t){return i===Ie?t:e.get(i)},has(e,i){return e.has(i)},set:G,deleteProperty:G,getOwnPropertyDescriptor(e,i){return{configurable:!0,enumerable:!0,get(){return e.get(i)},set:G,deleteProperty:G}},ownKeys(e){return e.keys()}};function se(e){return(e=typeof e=="function"?e():e)?e:{}}function ae(...e){if(e.some(t=>t&&(Ie in t||typeof t=="function")))return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const s=se(e[n])[t];if(s!==void 0)return s}},has(t){for(let n=e.length-1;n>=0;n--)if(t in se(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(se(e[n])));return[...new Set(t)]}},et);const i={};for(let t=e.length-1;t>=0;t--)if(e[t]){const n=Object.getOwnPropertyDescriptors(e[t]);for(const s in n)s in i||Object.defineProperty(i,s,{enumerable:!0,get(){for(let o=e.length-1;o>=0;o--){const r=(e[o]||{})[s];if(r!==void 0)return r}}})}return i}function k(e){let i=!1;const t=e.keyed,n=q(()=>e.when,void 0,{equals:(s,o)=>i?s===o:!s==!o});return q(()=>{const s=n();if(s){const o=e.children,r=typeof o=="function"&&o.length>0;return i=t||r,r?X(()=>o(s)):o}return e.fallback})}function tt(e,i,t){let n=t.length,s=i.length,o=n,r=0,l=0,f=i[s-1].nextSibling,u=null;for(;r<s||l<o;){if(i[r]===t[l]){r++,l++;continue}for(;i[s-1]===t[o-1];)s--,o--;if(s===r){const p=o<n?l?t[l-1].nextSibling:t[o-l]:f;for(;l<o;)e.insertBefore(t[l++],p)}else if(o===l)for(;r<s;)(!u||!u.has(i[r]))&&i[r].remove(),r++;else if(i[r]===t[o-1]&&t[l]===i[s-1]){const p=i[--s].nextSibling;e.insertBefore(t[l++],i[r++].nextSibling),e.insertBefore(t[--o],p),i[s]=t[o]}else{if(!u){u=new Map;let b=l;for(;b<o;)u.set(t[b],b++)}const p=u.get(i[r]);if(p!=null)if(l<p&&p<o){let b=r,g=1,I;for(;++b<s&&b<o&&!((I=u.get(i[b]))==null||I!==p+g);)g++;if(g>p-l){const A=i[r];for(;l<p;)e.insertBefore(t[l++],A)}else e.replaceChild(t[l++],i[r++])}else r++;else i[r++].remove()}}}const me="_$DX_DELEGATE";function it(e,i,t,n={}){let s;return Je(o=>{s=o,i===document?e():c(i,e(),i.firstChild?null:void 0,t)},n.owner),()=>{s(),i.textContent=""}}function a(e,i,t){const n=document.createElement("template");n.innerHTML=e;let s=n.content.firstChild;return t&&(s=s.firstChild),s}function N(e,i=window.document){const t=i[me]||(i[me]=new Set);for(let n=0,s=e.length;n<s;n++){const o=e[n];t.has(o)||(t.add(o),i.addEventListener(o,ot))}}function M(e,i,t){t==null?e.removeAttribute(i):e.setAttribute(i,t)}function nt(e,i){i==null?e.removeAttribute("class"):e.className=i}function oe(e,i,t,n){if(n)Array.isArray(t)?(e[`$$${i}`]=t[0],e[`$$${i}Data`]=t[1]):e[`$$${i}`]=t;else if(Array.isArray(t)){const s=t[0];e.addEventListener(i,t[0]=o=>s.call(e,t[1],o))}else e.addEventListener(i,t)}function st(e,i,t){if(!i)return t?M(e,"style"):i;const n=e.style;if(typeof i=="string")return n.cssText=i;typeof t=="string"&&(n.cssText=t=void 0),t||(t={}),i||(i={});let s,o;for(o in t)i[o]==null&&n.removeProperty(o),delete t[o];for(o in i)s=i[o],s!==t[o]&&(n.setProperty(o,s),t[o]=s);return t}function c(e,i,t,n){if(t!==void 0&&!n&&(n=[]),typeof i!="function")return z(e,i,n,t);w(s=>z(e,i(),s,t),n)}function ot(e){const i=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),v.registry&&!v.done&&(v.done=!0,document.querySelectorAll("[id^=pl-]").forEach(n=>n.remove()));t!==null;){const n=t[i];if(n&&!t.disabled){const s=t[`${i}Data`];if(s!==void 0?n.call(t,s,e):n.call(t,e),e.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function z(e,i,t,n,s){for(v.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(i===t)return t;const o=typeof i,r=n!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,o==="string"||o==="number"){if(v.context)return t;if(o==="number"&&(i=i.toString()),r){let l=t[0];l&&l.nodeType===3?l.data=i:l=document.createTextNode(i),t=P(e,t,n,l)}else t!==""&&typeof t=="string"?t=e.firstChild.data=i:t=e.textContent=i}else if(i==null||o==="boolean"){if(v.context)return t;t=P(e,t,n)}else{if(o==="function")return w(()=>{let l=i();for(;typeof l=="function";)l=l();t=z(e,l,t,n)}),()=>t;if(Array.isArray(i)){const l=[],f=t&&Array.isArray(t);if(re(l,i,t,s))return w(()=>t=z(e,l,t,n,!0)),()=>t;if(v.context){if(!l.length)return t;for(let u=0;u<l.length;u++)if(l[u].parentNode)return t=l}if(l.length===0){if(t=P(e,t,n),r)return t}else f?t.length===0?ge(e,l,n):tt(e,t,l):(t&&P(e),ge(e,l));t=l}else if(i instanceof Node){if(v.context&&i.parentNode)return t=r?[i]:i;if(Array.isArray(t)){if(r)return t=P(e,t,n,i);P(e,t,null,i)}else t==null||t===""||!e.firstChild?e.appendChild(i):e.replaceChild(i,e.firstChild);t=i}}return t}function re(e,i,t,n){let s=!1;for(let o=0,r=i.length;o<r;o++){let l=i[o],f=t&&t[o];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))s=re(e,l,f)||s;else if(typeof l=="function")if(n){for(;typeof l=="function";)l=l();s=re(e,Array.isArray(l)?l:[l],Array.isArray(f)?f:[f])||s}else e.push(l),s=!0;else{const u=String(l);f&&f.nodeType===3&&f.data===u?e.push(f):e.push(document.createTextNode(u))}}return s}function ge(e,i,t=null){for(let n=0,s=i.length;n<s;n++)e.insertBefore(i[n],t)}function P(e,i,t,n){if(t===void 0)return e.textContent="";const s=n||document.createTextNode("");if(i.length){let o=!1;for(let r=i.length-1;r>=0;r--){const l=i[r];if(s!==l){const f=l.parentNode===e;!o&&!r?f?e.replaceChild(s,l):e.insertBefore(s,t):f&&l.remove()}else o=!0}}else e.insertBefore(s,t);return[s]}const lt="/assets/coach.4a9fe358.png",rt="/assets/doubledecker.781dfbf1.png",ct="/assets/minibus.98e34566.png",we={Coaches:lt,"Double Decker":rt,"Mini Bus":ct},[J,Me]=$(0),[S,Re]=$(0),[F,dt]=$(!1);let ft=await Promise.resolve(Array(3).fill(0).map((e,i)=>({plateNumber:(Math.random()+1).toString(36).substring(7),model:["Volvo","Volkswagen"][Math.random()<.5?0:1],category:["Coaches","Double Decker","Mini Bus"][i]})));const[ue,ke]=$([...ft]),Z={Operator:"James Coaches","Odometer Reading":"123k miles","Name of Inspector":"Iurie Bivol","Vehicle Reg/Fleet No":"12 D 1234","Vehicle Make/Model":"Volvo Srinter",Date:new Date().toISOString().split("T")[0].split("-").reverse().join(" / "),"Interior and inside cab":[{"TM No.":1,"Item Inspected":"Registration/License/VIN",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":2,"Item Inspected":"Vehicle Weights & Dimensions Plate",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":18,"Item Inspected":"Warning Triangle",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"9/64","Item Inspected":"Driver and passenger seats",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":10,"Item Inspected":"Seat belts",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":8,"Item Inspected":"Mirrors",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":11,"Item Inspected":"Windows, Ventilation, Glass & view of the road",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":7,"Item Inspected":"Windscreen wipers & washers",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"16/69","Item Inspected":"Tachograph/Speedometer",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":6,"Item Inspected":"Horm",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":29,"Item Inspected":"Gauges, warning devices & malfunction indicators",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":29,"Item Inspected":"ABS warning",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":53,"Item Inspected":"Driving Controls",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"17/43","Item Inspected":"Steering Control",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":13,"Item Inspected":"Service brake pedal",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":14,"Item Inspected":"Service Brake Operation (Inspection in Cab)",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":4,"Item Inspected":"Pressure/Air/Vacuum wamings",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":5,"Item Inspected":"Pressure/Air/Vacuum build-up",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":12,"Item Inspected":"Mechanical Brake Hand Levers",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":15,"Item Inspected":"Air/Vacuum Hand Control Valves",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"9/22","Item Inspected":"Driver's accommodation",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"","Item Inspected":"Accessibity features",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":63,"Item Inspected":"Emergency Exits",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"","Item Inspected":"",condition:!0,"Description of Defect":"Interior of body, passenger entrance, exit steps and platforms","Rectified by":""},{"TM No.":"62/66","Item Inspected":"Fire Extinguisher and First Aid Kit",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":65,"Item Inspected":"Interior Lighting",condition:!0,"Description of Defect":"","Rectified by":""}],"Ground level and under-vehicle":[{"TM No.":"2/22","Item Inspected":"Condition & Security of body & bumpers",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":3,"Item Inspected":"Exhaust Smoke emission",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":27,"Item Inspected":"Road wheels & hubs",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":25,"Item Inspected":"Tyre Specification",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":24,"Item Inspected":"Tyre Condition",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":26,"Item Inspected":"Tyre Tread",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":32,"Item Inspected":"Spare wheel & carrier",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":45,"Item Inspected":"Chassis/Underbody",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":67,"Item Inspected":"Fuel Cut Off",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"16/70","Item Inspected":"Speed limiter & Plate",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":20,"Item Inspected":"Electrical wiring, equipment, batteries",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":53,"Item Inspected":"Engine & transmission mountings",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":34,"Item Inspected":"Fuel Tanks & system",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":53,"Item Inspected":"Oil leaks",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":46,"Item Inspected":"Exhaust System/Noise",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":43,"Item Inspected":"Steering Mechanism",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":36,"Item Inspected":"Steering Alignment",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"50/51/54/55","Item Inspected":"Suspension Units",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"50/51/54/55","Item Inspected":"Suspension Linkage & Pins/Bushes",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":52,"Item Inspected":"Shock Absorbers",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":44,"Item Inspected":"Asles, stub axes & wheel bearings",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":53,"Item Inspected":"Transmission & Final Drive",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":49,"Item Inspected":"Brake Lines & Hoses",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":47,"Item Inspected":"Brake Wheel Units",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":33,"Item Inspected":"Brake Reservoirs/Valves/Master Cylinders/Connections",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":30,"Item Inspected":"Brake Fluid",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":48,"Item Inspected":"Mechanical Brake Components",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":48,"Item Inspected":"Brake Drums/Discs & Linings/Pads",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"56/59","Item Inspected":"Front & Rear lamps & No. Plate Lamps",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":57,"Item Inspected":"Stop Lamps",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"","Item Inspected":"Fog Lamps",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"59/28","Item Inspected":"Marker Lamps & reflectors",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"60/61","Item Inspected":"Headlamps & Aim",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":58,"Item Inspected":"Direction indicators & hazzard warning lamps",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"","Item Inspected":"Additional breaking devices",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"","Item Inspected":"Ancillary equipment",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"","Item Inspected":"Other Items",condition:!0,"Description of Defect":"","Rectified by":""}],"Brake performance (roller brake/decelerometer test)":[{"TM No.":"37/38","Item Inspected":"Service brake performance",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"39/40","Item Inspected":"Emergency/Secondary brake performance",condition:!0,"Description of Defect":"","Rectified by":""},{"TM No.":"41/42","Item Inspected":"Parking brake performance",condition:!0,"Description of Defect":"","Rectified by":""}],"Signature of Inspector":"Beeef",Note:"All inspections must be conducted by a Suitably Qualified Person",SubNote:"(A suitably qualified Person is one who is suitably qualified by academic qualifications or experience or both to carry out Inspections, Maintenance and Repairs on this category of vehicle)","Action Taken on Defects Found":[{"Check No.":"","Rectification Action":"","Rectified by":""}],Agreement:"I certify that all defects have been satisfactorily repaired and the vehicle is now fit for service",Name:"Iurie Bivol",Position:"Head Mechanic",LastNote:"The Above signatory must be a suitably Qualified Person"},[ce,Ae]=$(!1),[L,H]=$([]),[Be,Ee]=$(""),[Pe,Oe]=$("Iurie Bivol"),[Le,at]=$([{date:Z.Date,issues:[],inspectorName:"Iurie Bivol",miles:"123k"}]),ut=a('<div><img width="100%"><h3></h3></div>'),pt=a('<div class="bus_types"></div>'),le=({name:e})=>(()=>{const i=ut.cloneNode(!0),t=i.firstChild,n=t.nextSibling;return i.$$click=s=>Re(e),M(t,"alt",e),c(n,e),w(()=>M(t,"src",we[e])),i})(),ht=()=>d(k,{get when(){return!S()},get children(){const e=pt.cloneNode(!0);return c(e,d(le,{name:"Coaches"}),null),c(e,d(le,{name:"Double Decker"}),null),c(e,d(le,{name:"Mini Bus"}),null),e}});N(["click"]);const bt=a('<div class="bus_header_button"><button><i class="fa-sharp fa-solid fa-circle-left"></i></button></div>'),mt=e=>{e==="selectBus"&&Me(0),e==="selectBusType"&&Re(0),e==="infoPage"&&Ae(!1)},Ve=({page:e})=>(()=>{const i=bt.cloneNode(!0),t=i.firstChild;return t.$$click=n=>mt(e),i})();N(["click"]);const gt=a('<div class="bus_header_button"><button><i></i></button></div>'),[yt,$t]=$("fas fa-plus"),It=({})=>(()=>{const e=gt.cloneNode(!0),i=e.firstChild,t=i.firstChild;return i.$$click=n=>{dt(!F()),$t(F()?"fas fa-minus":"fas fa-plus")},w(n=>{const s=F()&&"border: 3px solid red; animation: pulse 2s infinite;",o=yt();return n._v$=st(i,s,n._v$),o!==n._v$2&&nt(t,n._v$2=o),n},{_v$:void 0,_v$2:void 0}),e})();N(["click"]);const _t=a('<div class="busTypeHeader"><h2></h2></div>'),Fe=({title:e,page:i,canEdit:t=!0})=>(()=>{const n=_t.cloneNode(!0),s=n.firstChild;return c(n,d(Ve,{page:i}),s),c(s,e),c(n,d(k,{when:t,get children(){return d(It,{})}}),null),n})(),Dt=a('<div class="has-icons-left"><span class="icon is-large is-left"><i class="fas fa-bus"></i></span><span class="select is-large"><select><option selected>Coaches</option><option>Double Decker</option><option>Mini Bus</option></select></span></div>'),vt=a('<div class="control" style="position: relative;margin: 20px; border: 1px solid black"><div class="width: 200px"></div><input placeholder="Bus Model" class="input is-large"><br><input placeholder="Bus Plate Number" class="input is-large"><br><button class="input is-large has-background-info has-text-white add_bus"> <i class="fas fa-plus"></i> &nbsp; <i class="fas fa-bus"></i> &nbsp; Add Bus</button><br><br><br></div>'),Nt=a('<button class="button"><i class="fas fa-times"></i></button>'),Tt=a('<div><img width="100%"><div class="subtitle"></div><div class="subtitle"></div></div>'),xt=a('<div class="has-text-centered"><div class="bus_list"></div><br><br><br><br><br><br></div>'),Ct=e=>{ke(ue().filter(({plateNumber:i})=>i!==e))},St=()=>Dt.cloneNode(!0),wt=()=>d(k,{get when(){return F()},get children(){const e=vt.cloneNode(!0),i=e.firstChild,t=i.nextSibling,n=t.nextSibling,s=n.nextSibling,o=s.nextSibling,r=o.nextSibling;return c(i,d(St,{})),r.$$click=l=>{const f=l.currentTarget.parentElement,u=f.firstChild.firstChild.firstChild.firstChild,p=u.options[u.selectedIndex].textContent,b=f.childNodes[2],g=f.childNodes[3];ke(ue().concat([{plateNumber:g.value,category:p,model:b.value}])),g.value="",b.value=""},e}}),Mt=({category:e,model:i,plateNumber:t})=>{const n=`Are you sure you want to delete ${e} ${i} - ${t}?`;return d(k,{get when(){return F()},get children(){const s=Nt.cloneNode(!0);return s.$$click=o=>window.confirm(n)&&Ct(t),s}})},Rt=({category:e,model:i,plateNumber:t,onClick:n})=>(()=>{const s=Tt.cloneNode(!0),o=s.firstChild,r=o.nextSibling,l=r.nextSibling;return c(s,d(Mt,{plateNumber:t,category:e,model:i}),o),oe(o,"click",n,!0),oe(r,"click",n,!0),c(r,i),oe(l,"click",n,!0),c(l,t),w(()=>M(o,"src",we[e])),s})(),kt=()=>d(k,{get when(){return q(()=>!!S())()&&!J()},get children(){const e=xt.cloneNode(!0),i=e.firstChild,t=i.nextSibling,n=t.nextSibling,s=n.nextSibling,o=s.nextSibling;return c(e,d(Fe,{get title(){return S()},page:"selectBusType"}),i),c(i,()=>ue().filter(r=>r.category===S()).map(r=>d(Rt,ae(r,{onClick:l=>Me(r.plateNumber)})))),c(e,d(wt,{}),o),e}});N(["click"]);const At=a('<div><table style="width:90%; margin: 20px"><thead><tr></tr></thead><tbody></tbody></table></div>'),Bt=a('<th><span style="margin: 5px"></span></th>'),Et=a('<tr><td><span style="margin: 5px"></span></td><td><span style="margin: 5px"></span></td><td><span style="margin: 5px"></span></td><td><span style="margin: 5px"></span></td><td><span style="margin: 5px"></span></td><td><button class="button is-small is-info" style="margin: 5px">View</button></td></tr>'),Pt=a("<span><br></span>"),Ot=["Date","Checked By","Miles","Issues","Info","View Report"],Lt=()=>(()=>{const e=At.cloneNode(!0),i=e.firstChild,t=i.firstChild,n=t.firstChild,s=t.nextSibling;return c(n,()=>Ot.map(o=>(()=>{const r=Bt.cloneNode(!0),l=r.firstChild;return c(l,o),r})())),c(s,()=>Le().map(({date:o,issues:r,inspectorName:l,miles:f})=>(()=>{const u=Et.cloneNode(!0),p=u.firstChild,b=p.firstChild,g=p.nextSibling,I=g.firstChild,A=g.nextSibling,ee=A.firstChild,V=A.nextSibling,te=V.firstChild,U=V.nextSibling,B=U.firstChild,E=U.nextSibling,T=E.firstChild;return c(b,o),c(I,l),c(ee,f),c(te,()=>r.length),c(B,()=>r.map(({description:_})=>(()=>{const D=Pt.cloneNode(!0),ie=D.firstChild;return c(D,_,ie),D})())),T.$$click=_=>{Ae({date:o,issues:r,inspectorName:l,miles:f})},u})())),e})();N(["click"]);const Vt=a('<div class="field is-horizontal" style="margin: 20px"><div class="field-label is-normal"><label class="label"></label></div><div class="field-body"><div class="field"><p class="control"><input class="input" type="text"></p></div></div></div>'),ye=({title:e,placeholder:i,name:t,setName:n})=>(()=>{const s=Vt.cloneNode(!0),o=s.firstChild,r=o.firstChild,l=o.nextSibling,f=l.firstChild,u=f.firstChild,p=u.firstChild;return c(r,e),p.$$keyup=b=>n(b.currentTarget.value),M(p,"placeholder",i),w(()=>p.value=t()),s})();N(["keyup"]);const Ft=a('<div class="column"><button class="button is-small is-danger"><i class="fas fa-minus-circle"></i></button></div>'),qt=a("<optgroup></optgroup>"),jt=a("<option></option>"),Ht=a('<div class="columns is-mobile"><div class="column is-four-fifths"><div class="select"><select></select></div></div></div>'),Ut=a('<div class="rows"><div class="row"></div><div class="row"><textarea class="textarea" placeholder="Describe what you did ..."></textarea><hr></div></div>'),Gt=a('<div class="row rows"><div class="row" style="position: relative"><br><br><button class="button is-success submit-button"><i class="fa-solid fa-plus"></i><span> &nbsp;New Issue</span></button><br><br></div></div>'),qe=Object.entries(Z).filter(([e,i])=>Array.isArray(i)).slice(0,-1),Wt=(e,i)=>qe.slice(0,e).map(t=>t[1].length).reduce((t,n)=>t+n,0)+i,Kt=({index:e})=>(()=>{const i=Ft.cloneNode(!0),t=i.firstChild;return t.$$click=n=>{H(L().filter((s,o)=>o!==e))},i})(),Qt=(e,i)=>{const t=L();t[i].checkNo=e.currentTarget.selectedIndex,H(t)},zt=(e,i)=>{const t=L();t[i].description=e.currentTarget.value,H(t)},Jt=({k:e,v:i,i:t,checkNo:n})=>(()=>{const s=qt.cloneNode(!0);return M(s,"label",e),c(s,()=>i.map((o,r)=>{const l=Wt(t,r);return(()=>{const f=jt.cloneNode(!0);return f.selected=n===l&&"selected",c(f,()=>`Check No: ${l+1} TM No: ${o["TM No."]}
				Item Inspected: ${o["Item Inspected"]}`),f})()})),s})(),Xt=({index:e,checkNo:i})=>(()=>{const t=Ht.cloneNode(!0),n=t.firstChild,s=n.firstChild,o=s.firstChild;return o.addEventListener("change",r=>Qt(r,e)),c(o,()=>qe.map(([r,l],f)=>d(Jt,{k:r,v:l,i:f,checkNo:i}))),c(t,d(Kt,{index:e}),null),t})(),Yt=({index:e,checkNo:i,description:t})=>(()=>{const n=Ut.cloneNode(!0),s=n.firstChild,o=s.nextSibling,r=o.firstChild;return c(s,d(Xt,{index:e,checkNo:i})),r.addEventListener("change",l=>zt(l,e)),r.value=t,n})(),Zt=()=>(()=>{const e=Gt.cloneNode(!0),i=e.firstChild,t=i.firstChild,n=t.nextSibling,s=n.nextSibling;return c(e,()=>L().map((o,r)=>d(Yt,ae(o,{index:r}))),i),s.$$click=o=>{H(L().concat([{checkNo:62,description:""}]))},e})();N(["click"]);const ei=a('<div class="row"><div class="control" style="margin: 20px; float: right"><button class="button has-primary-color submit-button"><i class="fa-solid fa-check"></i><span> &nbsp;Finished</span></button><br></div></div>'),ti=a('<div class="rows" style="border: 1px solid #ccc; border-radius: 10px; margin: 20px"><div class="row has-text-centered title">Add new Report</div><div class="row"><br><br></div></div>'),ii=e=>{at(Le().concat([{date:Z.Date,issues:L(),inspectorName:Pe(),miles:Be()}])),H([]),Oe("Iurie Bivol"),Ee("")},ni=()=>(()=>{const e=ei.cloneNode(!0),i=e.firstChild,t=i.firstChild;return t.$$click=ii,e})(),si=()=>(()=>{const e=ti.cloneNode(!0),i=e.firstChild,t=i.nextSibling,n=t.firstChild;return c(t,d(ye,{title:"Inspector Name",placeholder:"Inspector Name ...",name:Pe,setName:Oe}),n),c(t,d(ye,{title:"Miles",placeholder:"123k",name:Be,setName:Ee}),n),c(e,d(Zt,{}),null),c(e,d(ni,{}),null),e})();N(["click"]);const oi=a('<div class="bus_info"><div class="has-text-centered title">Reports List</div><br><br><br><br><br></div>'),li=()=>d(k,{get when(){return q(()=>!!(S()&&J()))()&&!ce()},get children(){const e=oi.cloneNode(!0),i=e.firstChild,t=i.nextSibling,n=t.nextSibling,s=n.nextSibling;return c(e,d(Fe,{get title(){return S()+" - "+J()},page:"selectBus",canEdit:!1}),i),c(e,d(Lt,{}),t),c(e,d(si,{}),s),e}}),ri="/assets/bus.4998042c.jpeg",ci=a('<div class="column"><div class="field is-horizontal"><div class="field-label is-normal"><label class="label"></label></div><div class="field-body"><div class="field"><p class="control"><input class="input is-static" type="text" readonly></p></div></div></div></div>'),di=a('<div style="margin: 20px"><div class="title">Vehicle Inspection Report (PSV)</div><div class="columns is-mobile"></div><div class="columns is-mobile"></div><div class="columns is-mobile"></div></div>'),fi=a('<div><div class="subtitle">: </div><table style="width:90%; margin: 20px"><thead><tr></tr></thead><tbody></tbody></table></div>'),ai=a('<span>Condition <br> <i class="fas fa-check"></i> or <i class="fas fa-times"></i></span>'),ui=a('<th><span style="margin: 5px"></span></th>'),pi=a('<tr><td><span style="margin: 5px"></span></td><td><span style="margin: 5px"></span></td><td><span style="margin: 5px"></span></td><td><span style="margin: 5px"></span></td><td><span style="margin: 5px"></span></td><td><span style="margin: 5px"></span></td></tr>'),hi=a('<i class="fas fa-times"></i>'),bi=a('<i class="fas fa-check"></i>'),$e=Object.entries(Z).filter(([e,i])=>Array.isArray(i)).slice(0,-1),O=({key:e,value:i})=>(()=>{const t=ci.cloneNode(!0),n=t.firstChild,s=n.firstChild,o=s.firstChild,r=s.nextSibling,l=r.firstChild,f=l.firstChild,u=f.firstChild;return c(o,e),u.value=i,t})(),mi=({date:e,issues:i,inspectorName:t,miles:n})=>(()=>{const s=di.cloneNode(!0),o=s.firstChild,r=o.nextSibling,l=r.nextSibling,f=l.nextSibling;return c(r,d(O,{key:"Operator",value:"James Coaches"}),null),c(r,d(O,{key:"Vehicle Reg/Fleet No",get value(){return J()}}),null),c(l,d(O,{key:"Odometer Reading",value:n}),null),c(l,d(O,{key:"Vehicle Make/Model",get value(){return S()+" - Unknown"}}),null),c(f,d(O,{key:"Name of Inspector",value:t}),null),c(f,d(O,{key:"Date",value:e}),null),c(s,()=>$e.map(([u,p],b)=>(()=>{const g=fi.cloneNode(!0),I=g.firstChild,A=I.firstChild,ee=I.nextSibling,V=ee.firstChild,te=V.firstChild,U=V.nextSibling;return c(I,()=>String.fromCharCode("A".charCodeAt()+b),A),c(I,u,null),c(te,()=>["Check No","TM No.","Item Inspected",ai.cloneNode(!0),"Description of Defect","Rectified By"].map(B=>(()=>{const E=ui.cloneNode(!0),T=E.firstChild;return c(T,B),E})())),c(U,()=>p.map((B,E)=>{const T=$e.slice(0,b).map(_=>_[1].length).reduce((_,D)=>_+D,0)+E;return(()=>{const _=pi.cloneNode(!0),D=_.firstChild,ie=D.firstChild,pe=D.nextSibling,je=pe.firstChild,he=pe.nextSibling,He=he.firstChild,be=he.nextSibling,Ue=be.firstChild,Ge=be.nextSibling,We=Ge.firstChild;return c(ie,T+1),c(je,()=>B["TM No."]),c(He,()=>B["Item Inspected"]),c(Ue,(()=>{const ne=q(()=>!!i.find(Ke=>Ke.checkNo===T));return()=>ne()?hi.cloneNode(!0):bi.cloneNode(!0)})()),c(We,()=>i.find(ne=>ne.checkNo===T)?.description||""),_})()})),g})()),null),s})(),gi=()=>d(k,{get when(){return ce()},get children(){return[d(Ve,{page:"infoPage"}),d(mi,ae(ce))]}}),yi=a('<div><header><h1>Inspector Service</h1><img style="height:70px"></header><main></main></div>'),$i=()=>(()=>{const e=yi.cloneNode(!0),i=e.firstChild,t=i.firstChild,n=t.nextSibling,s=i.nextSibling;return M(n,"src",ri),c(s,d(ht,{}),null),c(s,d(kt,{}),null),c(s,d(li,{}),null),c(s,d(gi,{}),null),e})(),Ii=document.getElementById("root");it(()=>d($i,{}),Ii);
