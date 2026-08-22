const T=[{id:"linear",label:"Linear",category:"standard",value:[0,0,1,1],description:"Constant speed, no easing.",tags:["css","basic"]},{id:"ease",label:"Ease",category:"standard",value:[.25,.1,.25,1],description:"Browser default ease. Starts fast, ends slow.",tags:["css","basic"]},{id:"ease-in",label:"Ease In",category:"standard",value:[.42,0,1,1],description:"Starts slow, ends fast.",tags:["css","basic"]},{id:"ease-out",label:"Ease Out",category:"standard",value:[0,0,.58,1],description:"Starts fast, ends slow.",tags:["css","basic"]},{id:"ease-in-out",label:"Ease In Out",category:"standard",value:[.42,0,.58,1],description:"Slow at both ends.",tags:["css","basic"]},{id:"sine-in",label:"Sine In",category:"sine",value:[.12,0,.39,0],description:"Gentle acceleration using sine curve.",tags:["smooth"]},{id:"sine-out",label:"Sine Out",category:"sine",value:[.61,1,.88,1],description:"Gentle deceleration using sine curve.",tags:["smooth"]},{id:"sine-in-out",label:"Sine In Out",category:"sine",value:[.37,0,.63,1],description:"Smooth acceleration and deceleration.",tags:["smooth"]},{id:"quad-in",label:"Quad In",category:"quad",value:[.11,0,.5,0],description:"Quadratic acceleration.",tags:["power"]},{id:"quad-out",label:"Quad Out",category:"quad",value:[.5,1,.89,1],description:"Quadratic deceleration.",tags:["power"]},{id:"quad-in-out",label:"Quad In Out",category:"quad",value:[.45,0,.55,1],description:"Symmetric quadratic easing.",tags:["power"]},{id:"cubic-in",label:"Cubic In",category:"cubic",value:[.32,0,.67,0],description:"Cubic acceleration.",tags:["power"]},{id:"cubic-out",label:"Cubic Out",category:"cubic",value:[.33,1,.68,1],description:"Cubic deceleration.",tags:["power"]},{id:"cubic-in-out",label:"Cubic In Out",category:"cubic",value:[.65,0,.35,1],description:"Symmetric cubic easing.",tags:["power"]},{id:"quart-in",label:"Quart In",category:"quart",value:[.5,0,.75,0],description:"Quartic acceleration.",tags:["power"]},{id:"quart-out",label:"Quart Out",category:"quart",value:[.25,1,.5,1],description:"Quartic deceleration.",tags:["power"]},{id:"quart-in-out",label:"Quart In Out",category:"quart",value:[.76,0,.24,1],description:"Symmetric quartic easing.",tags:["power"]},{id:"quint-in",label:"Quint In",category:"quint",value:[.64,0,.78,0],description:"Quintic acceleration.",tags:["power"]},{id:"quint-out",label:"Quint Out",category:"quint",value:[.22,1,.36,1],description:"Quintic deceleration.",tags:["power"]},{id:"quint-in-out",label:"Quint In Out",category:"quint",value:[.83,0,.17,1],description:"Symmetric quintic easing.",tags:["power"]},{id:"expo-in",label:"Expo In",category:"expo",value:[.7,0,.84,0],description:"Exponential acceleration. Very slow start.",tags:["dramatic"]},{id:"expo-out",label:"Expo Out",category:"expo",value:[.16,1,.3,1],description:"Exponential deceleration. Very slow end.",tags:["dramatic"]},{id:"expo-in-out",label:"Expo In Out",category:"expo",value:[.87,0,.13,1],description:"Exponential symmetric easing.",tags:["dramatic"]},{id:"circ-in",label:"Circ In",category:"circ",value:[.55,0,1,.45],description:"Circular acceleration.",tags:["smooth"]},{id:"circ-out",label:"Circ Out",category:"circ",value:[0,.55,.45,1],description:"Circular deceleration.",tags:["smooth"]},{id:"circ-in-out",label:"Circ In Out",category:"circ",value:[.85,0,.15,1],description:"Symmetric circular easing.",tags:["smooth"]},{id:"back-in",label:"Back In",category:"back",value:[.36,0,.66,-.56],description:"Pulls back before accelerating forward.",tags:["overshoot","character"],overshootRecommended:!0},{id:"back-out",label:"Back Out",category:"back",value:[.34,1.56,.64,1],description:"Overshoots the target then settles.",tags:["overshoot","character"],overshootRecommended:!0},{id:"back-in-out",label:"Back In Out",category:"back",value:[.68,-.6,.32,1.6],description:"Pulls back, overshoots, settles.",tags:["overshoot","character"],overshootRecommended:!0},{id:"anticipate",label:"Anticipate",category:"emphasis",value:[.38,-.4,.88,.65],description:"Pulls back strongly before launching forward.",tags:["character","overshoot"],overshootRecommended:!0},{id:"snap",label:"Snap",category:"emphasis",value:[.2,1.6,.6,1],description:"Snappy overshoot, quick settle.",tags:["character","overshoot"],overshootRecommended:!0},{id:"swift-out",label:"Swift Out",category:"emphasis",value:[.55,0,.1,1],description:"Material Design swift-out. Fast exit, gentle settle.",tags:["material","ui"]},{id:"soft-bounce",label:"Soft Bounce",category:"emphasis",value:[.34,1.3,.64,1],description:"Light bounce at the end. Playful but subtle.",tags:["character","overshoot"],overshootRecommended:!0},{id:"dramatic-out",label:"Dramatic Out",category:"emphasis",value:[0,.9,.1,1],description:"Explosive start, clean landing.",tags:["dramatic","ui"]},{id:"flat-start",label:"Flat Start",category:"utility",value:[0,.5,.5,1],description:"Delayed start, smooth arrival.",tags:["ui"]},{id:"flat-end",label:"Flat End",category:"utility",value:[.5,0,1,.5],description:"Quick launch, gradual slowdown to flat.",tags:["ui"]},{id:"symmetric",label:"Symmetric",category:"utility",value:[.5,0,.5,1],description:"Perfectly mirrored ease in and out.",tags:["balanced"]},{id:"snappy-ui",label:"Snappy UI",category:"utility",value:[.2,0,0,1],description:"Recommended for micro-interactions and UI transitions.",tags:["ui","recommended"]},{id:"gentle-ui",label:"Gentle UI",category:"utility",value:[.4,0,.2,1],description:"Smooth and natural feel for UI elements.",tags:["ui","recommended"]}];function St(t){return T.find(e=>e.id===t)}function Ct(t){return T.filter(e=>e.category===t)}function Pt(t){const e=t.toLowerCase().trim();return e?T.filter(s=>{var i,r;return s.id.includes(e)||s.label.toLowerCase().includes(e)||((i=s.description)==null?void 0:i.toLowerCase().includes(e))||((r=s.tags)==null?void 0:r.some(n=>n.includes(e)))}):T}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis,X=q.ShadowRoot&&(q.ShadyCSS===void 0||q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol(),ie=new WeakMap;let Ee=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==Y)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(X&&e===void 0){const i=s!==void 0&&s.length===1;i&&(e=ie.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ie.set(s,e))}return e}toString(){return this.cssText}};const Re=t=>new Ee(typeof t=="string"?t:t+"",void 0,Y),Le=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1],t[0]);return new Ee(s,t,Y)},ze=(t,e)=>{if(X)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const i=document.createElement("style"),r=q.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}},re=X?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const i of e.cssRules)s+=i.cssText;return Re(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ie,defineProperty:Ne,getOwnPropertyDescriptor:qe,getOwnPropertyNames:De,getOwnPropertySymbols:Be,getPrototypeOf:je}=Object,_=globalThis,ne=_.trustedTypes,Fe=ne?ne.emptyScript:"",F=_.reactiveElementPolyfillSupport,U=(t,e)=>t,D={toAttribute(t,e){switch(e){case Boolean:t=t?Fe:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},ee=(t,e)=>!Ie(t,e),oe={attribute:!0,type:String,converter:D,reflect:!1,useDefault:!1,hasChanged:ee};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);let S=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=oe){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,s);r!==void 0&&Ne(this.prototype,e,r)}}static getPropertyDescriptor(e,s,i){const{get:r,set:n}=qe(this.prototype,e)??{get(){return this[s]},set(o){this[s]=o}};return{get:r,set(o){const l=r==null?void 0:r.call(this);n==null||n.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??oe}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const e=je(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const s=this.properties,i=[...De(s),...Be(s)];for(const r of i)this.createProperty(r,s[r])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[i,r]of s)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const r=this._$Eu(s,i);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)s.unshift(re(r))}else e!==void 0&&s.push(re(e));return s}static _$Eu(e,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(s=>s(this))}addController(e){var s;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var s;(s=this._$EO)==null||s.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ze(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostDisconnected)==null?void 0:i.call(s)})}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$ET(e,s){var n;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:D).toAttribute(s,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,s){var n,o;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const l=i.getPropertyOptions(r),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((n=l.converter)==null?void 0:n.fromAttribute)!==void 0?l.converter:D;this._$Em=r;const c=a.fromAttribute(s,l.type);this[r]=c??((o=this._$Ej)==null?void 0:o.get(r))??c,this._$Em=null}}requestUpdate(e,s,i,r=!1,n){var o;if(e!==void 0){const l=this.constructor;if(r===!1&&(n=this[e]),i??(i=l.getPropertyOptions(e)),!((i.hasChanged??ee)(n,s)||i.useDefault&&i.reflect&&n===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(l._$Eu(e,i))))return;this.C(e,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:i,reflect:r,wrapped:n},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??s??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(s=void 0),this._$AL.set(e,s)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,o]of r){const{wrapped:l}=o,a=this[n];l!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,o,a)}}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(i=this._$EO)==null||i.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(s)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(s)}willUpdate(e){}_$AE(e){var s;(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(s=>this._$ET(s,this[s]))),this._$EM()}updated(e){}firstUpdated(e){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[U("elementProperties")]=new Map,S[U("finalized")]=new Map,F==null||F({ReactiveElement:S}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,ae=t=>t,B=M.trustedTypes,le=B?B.createPolicy("lit-html",{createHTML:t=>t}):void 0,Se="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,Ce="?"+$,Ve=`<${Ce}>`,E=document,R=()=>E.createComment(""),L=t=>t===null||typeof t!="object"&&typeof t!="function",te=Array.isArray,Qe=t=>te(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",V=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ce=/-->/g,he=/>/g,x=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ue=/'/g,de=/"/g,Pe=/^(?:script|style|textarea|title)$/i,ke=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),Ke=ke(1),O=ke(2),C=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),pe=new WeakMap,w=E.createTreeWalker(E,129);function Oe(t,e){if(!te(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return le!==void 0?le.createHTML(e):e}const We=(t,e)=>{const s=t.length-1,i=[];let r,n=e===2?"<svg>":e===3?"<math>":"",o=k;for(let l=0;l<s;l++){const a=t[l];let c,f,h=-1,y=0;for(;y<a.length&&(o.lastIndex=y,f=o.exec(a),f!==null);)y=o.lastIndex,o===k?f[1]==="!--"?o=ce:f[1]!==void 0?o=he:f[2]!==void 0?(Pe.test(f[2])&&(r=RegExp("</"+f[2],"g")),o=x):f[3]!==void 0&&(o=x):o===x?f[0]===">"?(o=r??k,h=-1):f[1]===void 0?h=-2:(h=o.lastIndex-f[2].length,c=f[1],o=f[3]===void 0?x:f[3]==='"'?de:ue):o===de||o===ue?o=x:o===ce||o===he?o=k:(o=x,r=void 0);const g=o===x&&t[l+1].startsWith("/>")?" ":"";n+=o===k?a+Ve:h>=0?(i.push(c),a.slice(0,h)+Se+a.slice(h)+$+g):a+$+(h===-2?l:g)}return[Oe(t,n+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let W=class Ue{constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let n=0,o=0;const l=e.length-1,a=this.parts,[c,f]=We(e,s);if(this.el=Ue.createElement(c,i),w.currentNode=this.el.content,s===2||s===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=w.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const h of r.getAttributeNames())if(h.endsWith(Se)){const y=f[o++],g=r.getAttribute(h).split($),I=/([.?@])?(.*)/.exec(y);a.push({type:1,index:n,name:I[2],strings:g,ctor:I[1]==="."?Ze:I[1]==="?"?Je:I[1]==="@"?Xe:j}),r.removeAttribute(h)}else h.startsWith($)&&(a.push({type:6,index:n}),r.removeAttribute(h));if(Pe.test(r.tagName)){const h=r.textContent.split($),y=h.length-1;if(y>0){r.textContent=B?B.emptyScript:"";for(let g=0;g<y;g++)r.append(h[g],R()),w.nextNode(),a.push({type:2,index:++n});r.append(h[y],R())}}}else if(r.nodeType===8)if(r.data===Ce)a.push({type:2,index:n});else{let h=-1;for(;(h=r.data.indexOf($,h+1))!==-1;)a.push({type:7,index:n}),h+=$.length-1}n++}}static createElement(e,s){const i=E.createElement("template");return i.innerHTML=e,i}};function P(t,e,s=t,i){var o,l;if(e===C)return e;let r=i!==void 0?(o=s._$Co)==null?void 0:o[i]:s._$Cl;const n=L(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),n===void 0?r=void 0:(r=new n(t),r._$AT(t,s,i)),i!==void 0?(s._$Co??(s._$Co=[]))[i]=r:s._$Cl=r),r!==void 0&&(e=P(t,r._$AS(t,e.values),r,i)),e}let Ge=class{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??E).importNode(s,!0);w.currentNode=r;let n=w.nextNode(),o=0,l=0,a=i[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new se(n,n.nextSibling,this,e):a.type===1?c=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(c=new Ye(n,this,e)),this._$AV.push(c),a=i[++l]}o!==(a==null?void 0:a.index)&&(n=w.nextNode(),o++)}return w.currentNode=E,r}p(e){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,s),s+=i.strings.length-2):i._$AI(e[s])),s++}},se=class Me{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,s,i,r){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=P(this,e,s),L(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==C&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Qe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&L(this._$AH)?this._$AA.nextSibling.data=e:this.T(E.createTextNode(e)),this._$AH=e}$(e){var n;const{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=W.createElement(Oe(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(s);else{const o=new Ge(r,this),l=o.u(this.options);o.p(s),this.T(l),this._$AH=o}}_$AC(e){let s=pe.get(e.strings);return s===void 0&&pe.set(e.strings,s=new W(e)),s}k(e){te(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,r=0;for(const n of e)r===s.length?s.push(i=new Me(this.O(R()),this.O(R()),this,this.options)):i=s[r],i._$AI(n),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,s);e!==this._$AB;){const r=ae(e).nextSibling;ae(e).remove(),e=r}}setConnected(e){var s;this._$AM===void 0&&(this._$Cv=e,(s=this._$AP)==null||s.call(this,e))}};class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,r,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=s,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(e,s=this,i,r){const n=this.strings;let o=!1;if(n===void 0)e=P(this,e,s,0),o=!L(e)||e!==this._$AH&&e!==C,o&&(this._$AH=e);else{const l=e;let a,c;for(e=n[0],a=0;a<n.length-1;a++)c=P(this,l[i+a],s,a),c===C&&(c=this._$AH[a]),o||(o=!L(c)||c!==this._$AH[a]),c===d?e=d:e!==d&&(e+=(c??"")+n[a+1]),this._$AH[a]=c}o&&!r&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let Ze=class extends j{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}},Je=class extends j{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}},Xe=class extends j{constructor(e,s,i,r,n){super(e,s,i,r,n),this.type=5}_$AI(e,s=this){if((e=P(this,e,s,0)??d)===C)return;const i=this._$AH,r=e===d&&i!==d||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==d&&(i===d||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,e):this._$AH.handleEvent(e)}},Ye=class{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}};const Q=M.litHtmlPolyfillSupport;Q==null||Q(W,se),(M.litHtmlVersions??(M.litHtmlVersions=[])).push("3.3.2");const et=(t,e,s)=>{const i=(s==null?void 0:s.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const n=(s==null?void 0:s.renderBefore)??null;i._$litPart$=r=new se(e.insertBefore(R(),n),n,void 0,s??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=globalThis;class H extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const e=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=e.firstChild),e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=et(s,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return C}}var Ae;H._$litElement$=!0,H.finalized=!0,(Ae=A.litElementHydrateSupport)==null||Ae.call(A,{LitElement:H});const K=A.litElementPolyfillSupport;K==null||K({LitElement:H});(A.litElementVersions??(A.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=t=>(e,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:ee},it=(t=st,e,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),i==="accessor"){const{name:o}=s;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,a,t,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,t,l),l}}}if(i==="setter"){const{name:o}=s;return function(l){const a=this[o];e.call(this,l),this.requestUpdate(o,a,t,!0,l)}}throw Error("Unsupported decorator location: "+i)};function b(t){return(e,s)=>typeof s=="object"?it(t,e,s):((i,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,i),o?Object.getOwnPropertyDescriptor(r,n):void 0})(t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function rt(t){return b({...t,state:!0,attribute:!1})}function G(t){if(typeof t=="string")return nt(t);if(Array.isArray(t))return He(t);if(at(t))return ot(t);throw new Error(`[bezier-curve-editor] Invalid value: ${JSON.stringify(t)}`)}function nt(t){const e=t.trim().match(/^cubic-bezier\(\s*([\d.+-]+)\s*,\s*([\d.+-]+)\s*,\s*([\d.+-]+)\s*,\s*([\d.+-]+)\s*\)$/);if(!e)throw new Error(`[bezier-curve-editor] Cannot parse cubic-bezier string: "${t}"`);return He([Number(e[1]),Number(e[2]),Number(e[3]),Number(e[4])])}function He([t,e,s,i]){return m(t,"x1"),m(e,"y1"),m(s,"x2"),m(i,"y2"),{x1:t,y1:e,x2:s,y2:i}}function ot(t){const{x1:e,y1:s,x2:i,y2:r}=t;return m(e,"x1"),m(s,"y1"),m(i,"x2"),m(r,"y2"),{x1:e,y1:s,x2:i,y2:r}}function at(t){return typeof t=="object"&&t!==null&&"x1"in t&&"y1"in t&&"x2"in t&&"y2"in t}function m(t,e){if(typeof t!="number"||!isFinite(t))throw new Error(`[bezier-curve-editor] "${e}" must be a finite number, got: ${String(t)}`)}function Z(t,e=4){const s=i=>parseFloat(i.toFixed(e)).toString();return`cubic-bezier(${s(t.x1)}, ${s(t.y1)}, ${s(t.x2)}, ${s(t.y2)})`}function Lt(t){return[t.x1,t.y1,t.x2,t.y2]}function z(t,e,s){return s==="free"?{x:t,y:e}:s==="css"?{x:N(t,0,1),y:N(e,0,1)}:{x:N(t,s.xMin,s.xMax),y:N(e,s.yMin,s.yMax)}}function N(t,e,s){return Math.min(Math.max(t,e),s)}function fe(t,e,s,i,r){const n=1-t;return n*n*n*e+3*n*n*t*s+3*n*t*t*i+t*t*t*r}function zt(t,e=60){const s=[];for(let i=0;i<=e;i++){const r=i/e;s.push({x:fe(r,0,t.x1,t.x2,1),y:fe(r,0,t.y1,t.y2,1)})}return s}function lt(t){return t.y1<0||t.y1>1||t.y2<0||t.y2>1}const ve={x1:.25,y1:.1,x2:.25,y2:1};function ct(t={}){return{value:ve,initialValue:ve,dragging:null,focusedHandle:null,selectedPreset:null,presets:T,bounds:"css",overshoot:!1,snap:0,readonly:!1,disabled:!1,...t}}function be(t,e){const s=typeof e=="number"?e:e.enabled?e.gridSize:0;return s<=0?t:Math.round(t/s)*s}function ht(t,e,s){const i={x:be(t,s.snap),y:be(e,s.snap)},r=s.overshoot?"free":s.bounds;return z(i.x,i.y,r)}function J(t,e,s,i){if(t.readonly||t.disabled)return t;const r=ht(s,i,t),n=e==="p1"?{...t.value,x1:r.x,y1:r.y}:{...t.value,x2:r.x,y2:r.y};return{...t,value:n,selectedPreset:null}}function ut(t,e){return t.readonly||t.disabled?t:{...t,dragging:e,focusedHandle:e}}function ye(t){return{...t,dragging:null}}function ge(t,e){return{...t,focusedHandle:e}}function dt(t,e){if(t.readonly||t.disabled)return t;const[s,i,r,n]=e.value;return{...t,value:{x1:s,y1:i,x2:r,y2:n},selectedPreset:e.id,overshoot:t.overshoot||(e.overshootRecommended??!1)}}function pt(t,e){if(t.readonly||t.disabled)return t;const s=G(e);return{...t,value:s,selectedPreset:null}}function ft(t){return t.readonly||t.disabled?t:{...t,value:t.initialValue,selectedPreset:null,dragging:null}}function vt(t,e){if(e==="css"&&!t.overshoot){const s=z(t.value.x1,t.value.y1,"css"),i=z(t.value.x2,t.value.y2,"css"),r={x1:s.x,y1:s.y,x2:i.x,y2:i.y};return{...t,bounds:e,value:r}}return{...t,bounds:e}}function bt(t,e){if(!e&&lt(t.value)){const s=z(t.value.x1,t.value.y1,"css"),i=z(t.value.x2,t.value.y2,"css"),r={x1:s.x,y1:s.y,x2:i.x,y2:i.y};return{...t,overshoot:e,value:r}}return{...t,overshoot:e}}function Te(t){var e;for(;t;){const s=(e=t.getAttribute)==null?void 0:e.call(t,"data-handle");if(s==="p1"||s==="p2")return s;t=t.parentElement}return null}const $e=100;class yt{constructor(e){this.activeHandle=null,this.activeSvg=null,this.onPointerDown=s=>{var r;const i=Te(s.target);i&&(s.preventDefault(),(r=this.activeSvg)==null||r.setPointerCapture(s.pointerId),this.activeHandle=i,this.host.onStateChange(ut(this.host.state,i),null),globalThis.addEventListener("pointermove",this.onPointerMove),globalThis.addEventListener("pointerup",this.onPointerUp),globalThis.addEventListener("pointercancel",this.onPointerCancel))},this.onPointerMove=s=>{if(!this.activeHandle)return;const i=this.svgPoint(s);i&&this.host.onStateChange(J(this.host.state,this.activeHandle,i.x,i.y),"input")},this.onPointerUp=s=>{if(!this.activeHandle)return;const i=this.svgPoint(s),r=ye(i?J(this.host.state,this.activeHandle,i.x,i.y):this.host.state);this.host.onStateChange(r,"change"),this.activeHandle=null,this.removeListeners()},this.onPointerCancel=()=>{this.activeHandle&&(this.host.onStateChange(ye(this.host.state),null),this.activeHandle=null,this.removeListeners())},this.host=e,e.addController(this)}hostConnected(){}hostDisconnected(){this.removeListeners()}attach(e){this.activeSvg=e,e.addEventListener("pointerdown",this.onPointerDown)}svgPoint(e){const s=this.activeSvg??this.host.getSvgElement();if(!s)return null;const i=s.getScreenCTM();if(!i)return null;const r=new DOMPoint(e.clientX,e.clientY).matrixTransform(i.inverse());return{x:r.x/$e,y:1-r.y/$e}}removeListeners(){globalThis.removeEventListener("pointermove",this.onPointerMove),globalThis.removeEventListener("pointerup",this.onPointerUp),globalThis.removeEventListener("pointercancel",this.onPointerCancel)}}class gt{constructor(e){this.el=null,this.nudged=!1,this.onFocusIn=s=>{const i=s.composedPath()[0],r=Te(i??null);r&&this.host.onStateChange(ge(this.host.state,r),null)},this.onFocusOut=s=>{!this.el||s.relatedTarget&&this.el.contains(s.relatedTarget)||this.host.onStateChange(ge(this.host.state,null),null)},this.onKeyDown=s=>{var a,c;const{state:i}=this.host;if(i.readonly||i.disabled)return;if(s.key==="Escape"){(c=(a=s.target).blur)==null||c.call(a);return}const r=i.focusedHandle;if(!r)return;const n=me(s.key);if(!n)return;s.preventDefault();const o=$t(i,s.shiftKey),l=r==="p1"?{x:i.value.x1,y:i.value.y1}:{x:i.value.x2,y:i.value.y2};this.host.onStateChange(J(i,r,l.x+n.x*o,l.y+n.y*o),"input"),this.nudged=!0},this.onKeyUp=s=>{!this.nudged||!me(s.key)||(this.nudged=!1,this.host.onStateChange(this.host.state,"change"))},this.host=e,e.addController(this)}hostConnected(){}hostDisconnected(){this.detach()}attach(e){this.detach(),this.el=e,e.addEventListener("keydown",this.onKeyDown),e.addEventListener("keyup",this.onKeyUp);const s=_e(e);s==null||s.addEventListener("focusin",this.onFocusIn),s==null||s.addEventListener("focusout",this.onFocusOut)}detach(){if(!this.el)return;const e=_e(this.el);this.el.removeEventListener("keydown",this.onKeyDown),this.el.removeEventListener("keyup",this.onKeyUp),e==null||e.removeEventListener("focusin",this.onFocusIn),e==null||e.removeEventListener("focusout",this.onFocusOut),this.el=null}}function $t(t,e){const s=typeof t.snap=="number"?t.snap:t.snap.enabled?t.snap.gridSize:0,i=s>0?s:.01;return e?i*10:i}function me(t){switch(t){case"ArrowRight":return{x:1,y:0};case"ArrowLeft":return{x:-1,y:0};case"ArrowUp":return{x:0,y:1};case"ArrowDown":return{x:0,y:-1};default:return null}}function _e(t){const e=t;return e.renderRoot??e.shadowRoot??null}function mt(t,e,s,i,r=4){const n={value:e,cssValue:Z(e,r),...s?{preset:s}:{}};t.dispatchEvent(new CustomEvent(i,{detail:n,bubbles:!0,composed:!0}))}function _t(t,e,s){const i={preset:e,value:s};t.dispatchEvent(new CustomEvent("presetchange",{detail:i,bubbles:!0,composed:!0}))}function xt(t,e){t.dispatchEvent(new CustomEvent("copy",{detail:{cssValue:e},bubbles:!0,composed:!0}))}function xe(t,e,s,i=2){const r=t==="p1"?"Control point 1":"Control point 2",n=e.toFixed(i),o=s.toFixed(i);return`${r}, x ${n}, y ${o}. Use arrow keys to move.`}var wt=Object.defineProperty,At=Object.getOwnPropertyDescriptor,v=(t,e,s,i)=>{for(var r=i>1?void 0:i?At(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&wt(e,s,r),r};const u=100,we=12,Et=4;let p=class extends H{constructor(){super(...arguments),this._theme="auto",this.overshoot=!1,this.readonly=!1,this.disabled=!1,this.showGrid=!0,this.showPreview=!0,this.precision=4,this.gridSubdivisions=Et,this._state=ct(),this._pointer=new yt(this),this._keyboard=new gt(this),this._copy=async()=>{const t=this.getCssValue();try{await globalThis.navigator.clipboard.writeText(t)}catch{}xt(this,t)}}get theme(){return this._theme}set theme(t){const e=this._theme;this._theme=t,t==="auto"?this.removeAttribute("theme"):this.setAttribute("theme",t),this.requestUpdate("theme",e)}get snap(){const t=this._state.snap;return typeof t=="number"?t:t.enabled?t.gridSize:0}set snap(t){this._state={...this._state,snap:Math.max(0,t)},this.requestUpdate("snap",void 0)}get presets(){return this._state.presets}set presets(t){this._state={...this._state,presets:t},this.requestUpdate("presets",void 0)}get selectedPreset(){return this._state.selectedPreset}set selectedPreset(t){if(t===null){this._state={...this._state,selectedPreset:null},this.requestUpdate("selectedPreset",void 0);return}this.selectPreset(t)}set value(t){try{const e=G(t),s=pt(this._state,e);if(s===this._state)return;this._state={...s,initialValue:e}}catch{this.dispatchEvent(new CustomEvent("invalid",{bubbles:!0,composed:!0}))}}get value(){return this._state.value}set bounds(t){this._state=vt(this._state,t)}get bounds(){return this._state.bounds}get state(){return this._state}onStateChange(t,e){this._state=t,e&&mt(this,t.value,t.selectedPreset,e,this.precision),this.requestUpdate()}getSvgElement(){return this.renderRoot.querySelector("svg")}firstUpdated(){const t=this.getSvgElement();t&&this._pointer.attach(t),this._keyboard.attach(this),this.setAttribute("role","group"),this.setAttribute("aria-label","Bezier curve editor")}updated(t){let e=!1;t.has("overshoot")&&(this._state=bt(this._state,this.overshoot),e=!0),t.has("readonly")&&(this._state={...this._state,readonly:this.readonly},e=!0),t.has("disabled")&&(this._state={...this._state,disabled:this.disabled},e=!0),e&&this.requestUpdate()}getValue(){return this._state.value}getCssValue(){return Z(this._state.value,this.precision)}setValue(t){if(this._state.readonly||this._state.disabled)return;const e=G(t);this._state={...this._state,value:e,initialValue:e,selectedPreset:null},this.requestUpdate()}selectPreset(t){const e=this._state.presets.find(s=>s.id===t);e&&(this._state=dt(this._state,e),this.overshoot!==this._state.overshoot&&(this.overshoot=this._state.overshoot),_t(this,e,this._state.value),this.requestUpdate())}reset(){this._state=ft(this._state),this.requestUpdate()}focus(){super.focus()}_viewBox(){return{min:-we,size:u+we*2}}_renderGrid(){if(!this.showGrid)return null;const t=[],e=this.gridSubdivisions;for(let s=1;s<e;s++){const i=s/e*u;t.push(O`
        <line class="grid-line" x1=${i} y1="0" x2=${i} y2=${u} />
        <line class="grid-line" x1="0" y1=${i} x2=${u} y2=${i} />
      `)}return O`
      ${t}
      <line class="grid-diagonal" x1="0" y1=${u} x2=${u} y2="0" />
    `}_renderCurve(t){const e=t.x1*u,s=(1-t.y1)*u,i=t.x2*u,r=(1-t.y2)*u;return O`
      <path part="curve" class="curve-path" d="M 0 ${u} C ${e} ${s}, ${i} ${r}, ${u} 0" />
    `}_renderPreview(t){if(!this.showPreview)return null;const e=t.x1*u,s=(1-t.y1)*u,i=t.x2*u,r=(1-t.y2)*u,n=`M 0 ${u} C ${e} ${s}, ${i} ${r}, ${u} 0`;return O`
      <circle class="preview-dot" r="3">
        <animateMotion dur="1.6s" repeatCount="indefinite" path=${n} />
      </circle>
    `}_renderHandles(t){const e=t.x1*u,s=(1-t.y1)*u,i=t.x2*u,r=(1-t.y2)*u,{focusedHandle:n}=this._state;return O`
      <line class="handle-line" x1="0" y1=${u} x2=${e} y2=${s} />
      <line class="handle-line" x1=${u} y1="0" x2=${i} y2=${r} />
      <g part="handle handle-p1"
        class="handle ${n==="p1"?"handle--focused":""}"
        data-handle="p1" tabindex="0" role="slider"
        aria-label=${xe("p1",t.x1,t.y1)}
        aria-valuemin="0" aria-valuemax="1"
        aria-valuenow="${t.x1.toFixed(4)}"
        aria-valuetext="x ${t.x1.toFixed(4)}, y ${t.y1.toFixed(4)}">
        <circle cx=${e} cy=${s} r="5" />
      </g>
      <g part="handle handle-p2"
        class="handle ${n==="p2"?"handle--focused":""}"
        data-handle="p2" tabindex="0" role="slider"
        aria-label=${xe("p2",t.x2,t.y2)}
        aria-valuemin="0" aria-valuemax="1"
        aria-valuenow="${t.x2.toFixed(4)}"
        aria-valuetext="x ${t.x2.toFixed(4)}, y ${t.y2.toFixed(4)}">
        <circle cx=${i} cy=${r} r="5" />
      </g>
    `}render(){const t=this._state.value,e=Z(t,this.precision),s=this._viewBox();return Ke`
      <div part="container" class="container">
        <div class="canvas-wrap">
          <svg
            part="grid"
            viewBox="${s.min} ${s.min} ${s.size} ${s.size}"
            aria-hidden="true"
            focusable="false"
          >
            ${this._renderGrid()} ${this._renderCurve(t)} ${this._renderPreview(t)}
            ${this._renderHandles(t)}
          </svg>
        </div>
        <div part="toolbar" class="toolbar">
          <span part="value-output" class="value-output" title=${e}>${e}</span>
          <button
            part="button"
            class="copy-btn"
            type="button"
            aria-label="Copy CSS value"
            @click=${this._copy}
          >
            Copy
          </button>
        </div>
      </div>
    `}};p.styles=Le`
    :host {
      display: inline-block;
      font-family: var(--bce-font-family, ui-monospace, 'Cascadia Code', monospace);
      font-size: var(--bce-font-size, 0.75rem);
      color: var(--bce-fg, #1a1a1a);
      background: var(--bce-bg, #ffffff);
      border: 1px solid var(--bce-border, #e0e0e0);
      border-radius: var(--bce-radius, 8px);
      /* NOT overflow:hidden — handles dragged outside the canvas must stay
         visible (they paint beyond the host box). The toolbar clips its own
         background to the host radius instead. */
      overflow: visible;
      user-select: none;
      -webkit-user-select: none;
      outline: none;
    }
    :host(:focus-within) {
      outline: 2px solid var(--bce-accent, #4f6ef7);
      outline-offset: 2px;
    }
    :host([disabled]) {
      opacity: 0.45;
      pointer-events: none;
    }
    :host([readonly]) {
      --bce-handle-color: var(--bce-fg-muted, #767676);
      --bce-curve-color: var(--bce-fg-muted, #767676);
    }
    @media (prefers-color-scheme: dark) {
      :host {
        --bce-bg: #1a1a1a;
        --bce-bg-subtle: #242424;
        --bce-border: #333333;
        --bce-fg: #f0f0f0;
        --bce-fg-muted: #888888;
        --bce-grid-color: #2e2e2e;
        --bce-handle-border: #1a1a1a;
      }
    }
    :host([theme='light']) {
      --bce-bg: #ffffff;
      --bce-bg-subtle: #f5f5f5;
      --bce-border: #e0e0e0;
      --bce-fg: #1a1a1a;
      --bce-fg-muted: #767676;
      --bce-grid-color: #e8e8e8;
      --bce-handle-border: #ffffff;
    }
    :host([theme='dark']) {
      --bce-bg: #1a1a1a;
      --bce-bg-subtle: #242424;
      --bce-border: #333333;
      --bce-fg: #f0f0f0;
      --bce-fg-muted: #888888;
      --bce-grid-color: #2e2e2e;
      --bce-handle-border: #1a1a1a;
    }
    .container {
      display: flex;
      flex-direction: column;
    }
    .canvas-wrap {
      position: relative;
      width: var(--bce-canvas-size, 240px);
      height: var(--bce-canvas-size, 240px);
      flex-shrink: 0;
    }
    .canvas-wrap svg {
      display: block;
      width: 100%;
      height: 100%;
      cursor: crosshair;
      /* Handles outside the [0,1]² area paint beyond the svg box instead of
         being clipped or forcing a viewBox rescale. */
      overflow: visible;
    }
    .grid-line {
      stroke: var(--bce-grid-color, #e8e8e8);
      stroke-width: 1;
      vector-effect: non-scaling-stroke;
    }
    .grid-diagonal {
      stroke: var(--bce-grid-color, #e8e8e8);
      stroke-width: 1;
      stroke-dasharray: 4 4;
      vector-effect: non-scaling-stroke;
    }
    .curve-path {
      fill: none;
      stroke: var(--bce-curve-color, var(--bce-accent, #4f6ef7));
      stroke-width: var(--bce-curve-width, 2);
      stroke-linecap: round;
      vector-effect: non-scaling-stroke;
    }
    .handle-line {
      stroke: var(--bce-handle-line-color, rgba(79, 110, 247, 0.4));
      stroke-width: 1;
      vector-effect: non-scaling-stroke;
    }
    .handle {
      cursor: grab;
      touch-action: none;
    }
    .handle:active {
      cursor: grabbing;
    }
    .handle:focus-visible {
      outline: none;
    }
    .handle:focus-visible circle {
      stroke: var(--bce-accent, #4f6ef7);
      stroke-width: 3;
      r: 7px;
    }
    .handle circle {
      fill: var(--bce-handle-color, var(--bce-accent, #4f6ef7));
      stroke: var(--bce-handle-border, #ffffff);
      stroke-width: 2;
      vector-effect: non-scaling-stroke;
      transition:
        r 120ms ease,
        fill 120ms ease;
    }
    .handle--focused circle,
    .handle:hover circle {
      /* Fallback MUST carry a unit: a bare number is an invalid <length> for
         the CSS r property. WebKit resolves the invalid value to the initial
         value (r = 0), which makes the handle invisible and un-hittable —
         Chromium instead keeps the r="5" presentation attribute. */
      r: calc(var(--bce-handle-size, 10px) * 0.7);
    }
    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 4px;
      padding: 6px 8px;
      background: var(--bce-bg-subtle, #f5f5f5);
      border-top: 1px solid var(--bce-border, #e0e0e0);
      /* Host no longer clips overflow (handles may paint outside), so the
         toolbar clips its own background to the host's bottom radius. */
      border-radius: 0 0 var(--bce-radius, 8px) var(--bce-radius, 8px);
    }
    .value-output {
      flex: 1;
      font-family: var(--bce-font-family, ui-monospace, monospace);
      font-size: var(--bce-font-size, 0.75rem);
      color: var(--bce-fg, #1a1a1a);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .copy-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 2px 6px;
      border: 1px solid var(--bce-border, #e0e0e0);
      border-radius: calc(var(--bce-radius, 8px) - 2px);
      background: var(--bce-bg, #ffffff);
      color: var(--bce-fg-muted, #767676);
      font-size: var(--bce-font-size, 0.75rem);
      cursor: pointer;
      transition:
        color 120ms ease,
        border-color 120ms ease;
      white-space: nowrap;
    }
    .copy-btn:hover {
      color: var(--bce-accent, #4f6ef7);
      border-color: var(--bce-accent, #4f6ef7);
    }
    .copy-btn:active {
      opacity: 0.7;
    }
  `;v([b({type:String})],p.prototype,"theme",1);v([b({type:Boolean,reflect:!0})],p.prototype,"overshoot",2);v([b({type:Boolean,reflect:!0})],p.prototype,"readonly",2);v([b({type:Boolean,reflect:!0})],p.prototype,"disabled",2);v([b({type:Boolean})],p.prototype,"showGrid",2);v([b({type:Boolean})],p.prototype,"showPreview",2);v([b({type:Number})],p.prototype,"precision",2);v([b({type:Number,attribute:"grid-subdivisions"})],p.prototype,"gridSubdivisions",2);v([b({type:Number})],p.prototype,"snap",1);v([b({type:Array})],p.prototype,"presets",1);v([b({type:String})],p.prototype,"selectedPreset",1);v([b({attribute:"value"})],p.prototype,"value",1);v([b({})],p.prototype,"bounds",1);v([rt()],p.prototype,"_state",2);p=v([tt("bezier-curve-editor")],p);export{p as BezierCurveEditor,ve as DEFAULT_VALUE,T as PRESETS,zt as buildCurvePoints,z as clampPoint,St as getPreset,Ct as getPresetsByCategory,lt as isOvershoot,G as parseBezierValue,fe as sampleCurve1D,Pt as searchPresets,Z as serializeToCss,Lt as toTuple};
