(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const q=[{id:"linear",label:"Linear",category:"standard",value:[0,0,1,1],description:"Constant speed, no easing.",tags:["css","basic"]},{id:"ease",label:"Ease",category:"standard",value:[.25,.1,.25,1],description:"Browser default ease. Starts fast, ends slow.",tags:["css","basic"]},{id:"ease-in",label:"Ease In",category:"standard",value:[.42,0,1,1],description:"Starts slow, ends fast.",tags:["css","basic"]},{id:"ease-out",label:"Ease Out",category:"standard",value:[0,0,.58,1],description:"Starts fast, ends slow.",tags:["css","basic"]},{id:"ease-in-out",label:"Ease In Out",category:"standard",value:[.42,0,.58,1],description:"Slow at both ends.",tags:["css","basic"]},{id:"sine-in",label:"Sine In",category:"sine",value:[.12,0,.39,0],description:"Gentle acceleration using sine curve.",tags:["smooth"]},{id:"sine-out",label:"Sine Out",category:"sine",value:[.61,1,.88,1],description:"Gentle deceleration using sine curve.",tags:["smooth"]},{id:"sine-in-out",label:"Sine In Out",category:"sine",value:[.37,0,.63,1],description:"Smooth acceleration and deceleration.",tags:["smooth"]},{id:"quad-in",label:"Quad In",category:"quad",value:[.11,0,.5,0],description:"Quadratic acceleration.",tags:["power"]},{id:"quad-out",label:"Quad Out",category:"quad",value:[.5,1,.89,1],description:"Quadratic deceleration.",tags:["power"]},{id:"quad-in-out",label:"Quad In Out",category:"quad",value:[.45,0,.55,1],description:"Symmetric quadratic easing.",tags:["power"]},{id:"cubic-in",label:"Cubic In",category:"cubic",value:[.32,0,.67,0],description:"Cubic acceleration.",tags:["power"]},{id:"cubic-out",label:"Cubic Out",category:"cubic",value:[.33,1,.68,1],description:"Cubic deceleration.",tags:["power"]},{id:"cubic-in-out",label:"Cubic In Out",category:"cubic",value:[.65,0,.35,1],description:"Symmetric cubic easing.",tags:["power"]},{id:"quart-in",label:"Quart In",category:"quart",value:[.5,0,.75,0],description:"Quartic acceleration.",tags:["power"]},{id:"quart-out",label:"Quart Out",category:"quart",value:[.25,1,.5,1],description:"Quartic deceleration.",tags:["power"]},{id:"quart-in-out",label:"Quart In Out",category:"quart",value:[.76,0,.24,1],description:"Symmetric quartic easing.",tags:["power"]},{id:"quint-in",label:"Quint In",category:"quint",value:[.64,0,.78,0],description:"Quintic acceleration.",tags:["power"]},{id:"quint-out",label:"Quint Out",category:"quint",value:[.22,1,.36,1],description:"Quintic deceleration.",tags:["power"]},{id:"quint-in-out",label:"Quint In Out",category:"quint",value:[.83,0,.17,1],description:"Symmetric quintic easing.",tags:["power"]},{id:"expo-in",label:"Expo In",category:"expo",value:[.7,0,.84,0],description:"Exponential acceleration. Very slow start.",tags:["dramatic"]},{id:"expo-out",label:"Expo Out",category:"expo",value:[.16,1,.3,1],description:"Exponential deceleration. Very slow end.",tags:["dramatic"]},{id:"expo-in-out",label:"Expo In Out",category:"expo",value:[.87,0,.13,1],description:"Exponential symmetric easing.",tags:["dramatic"]},{id:"circ-in",label:"Circ In",category:"circ",value:[.55,0,1,.45],description:"Circular acceleration.",tags:["smooth"]},{id:"circ-out",label:"Circ Out",category:"circ",value:[0,.55,.45,1],description:"Circular deceleration.",tags:["smooth"]},{id:"circ-in-out",label:"Circ In Out",category:"circ",value:[.85,0,.15,1],description:"Symmetric circular easing.",tags:["smooth"]},{id:"back-in",label:"Back In",category:"back",value:[.36,0,.66,-.56],description:"Pulls back before accelerating forward.",tags:["overshoot","character"],overshootRecommended:!0},{id:"back-out",label:"Back Out",category:"back",value:[.34,1.56,.64,1],description:"Overshoots the target then settles.",tags:["overshoot","character"],overshootRecommended:!0},{id:"back-in-out",label:"Back In Out",category:"back",value:[.68,-.6,.32,1.6],description:"Pulls back, overshoots, settles.",tags:["overshoot","character"],overshootRecommended:!0},{id:"anticipate",label:"Anticipate",category:"emphasis",value:[.38,-.4,.88,.65],description:"Pulls back strongly before launching forward.",tags:["character","overshoot"],overshootRecommended:!0},{id:"snap",label:"Snap",category:"emphasis",value:[.2,1.6,.6,1],description:"Snappy overshoot, quick settle.",tags:["character","overshoot"],overshootRecommended:!0},{id:"swift-out",label:"Swift Out",category:"emphasis",value:[.55,0,.1,1],description:"Material Design swift-out. Fast exit, gentle settle.",tags:["material","ui"]},{id:"soft-bounce",label:"Soft Bounce",category:"emphasis",value:[.34,1.3,.64,1],description:"Light bounce at the end. Playful but subtle.",tags:["character","overshoot"],overshootRecommended:!0},{id:"dramatic-out",label:"Dramatic Out",category:"emphasis",value:[0,.9,.1,1],description:"Explosive start, clean landing.",tags:["dramatic","ui"]},{id:"flat-start",label:"Flat Start",category:"utility",value:[0,.5,.5,1],description:"Delayed start, smooth arrival.",tags:["ui"]},{id:"flat-end",label:"Flat End",category:"utility",value:[.5,0,1,.5],description:"Quick launch, gradual slowdown to flat.",tags:["ui"]},{id:"symmetric",label:"Symmetric",category:"utility",value:[.5,0,.5,1],description:"Perfectly mirrored ease in and out.",tags:["balanced"]},{id:"snappy-ui",label:"Snappy UI",category:"utility",value:[.2,0,0,1],description:"Recommended for micro-interactions and UI transitions.",tags:["ui","recommended"]},{id:"gentle-ui",label:"Gentle UI",category:"utility",value:[.4,0,.2,1],description:"Smooth and natural feel for UI elements.",tags:["ui","recommended"]}];function qe(t){const e=t.toLowerCase().trim();return e?q.filter(s=>s.id.includes(e)||s.label.toLowerCase().includes(e)||s.description?.toLowerCase().includes(e)||s.tags?.some(i=>i.includes(e))):q}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,Z=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),ne=new WeakMap;let Ce=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(Z&&e===void 0){const i=s!==void 0&&s.length===1;i&&(e=ne.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ne.set(s,e))}return e}toString(){return this.cssText}};const Re=t=>new Ce(typeof t=="string"?t:t+"",void 0,X),ze=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1],t[0]);return new Ce(s,t,X)},De=(t,e)=>{if(Z)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const i=document.createElement("style"),r=B.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}},oe=Z?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const i of e.cssRules)s+=i.cssText;return Re(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:je,defineProperty:Fe,getOwnPropertyDescriptor:Ve,getOwnPropertyNames:Qe,getOwnPropertySymbols:Ke,getPrototypeOf:Ge}=Object,D=globalThis,ae=D.trustedTypes,We=ae?ae.emptyScript:"",Je=D.reactiveElementPolyfillSupport,L=(t,e)=>t,R={toAttribute(t,e){switch(e){case Boolean:t=t?We:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},Y=(t,e)=>!je(t,e),ce={attribute:!0,type:String,converter:R,reflect:!1,useDefault:!1,hasChanged:Y};Symbol.metadata??=Symbol("metadata"),D.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=ce){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,s);r!==void 0&&Fe(this.prototype,e,r)}}static getPropertyDescriptor(e,s,i){const{get:r,set:n}=Ve(this.prototype,e)??{get(){return this[s]},set(o){this[s]=o}};return{get:r,set(o){const c=r?.call(this);n?.call(this,o),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ce}static _$Ei(){if(this.hasOwnProperty(L("elementProperties")))return;const e=Ge(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(L("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(L("properties"))){const s=this.properties,i=[...Qe(s),...Ke(s)];for(const r of i)this.createProperty(r,s[r])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[i,r]of s)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const r=this._$Eu(s,i);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)s.unshift(oe(r))}else e!==void 0&&s.push(oe(e));return s}static _$Eu(e,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return De(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$ET(e,s){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const n=(i.converter?.toAttribute!==void 0?i.converter:R).toAttribute(s,i.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,s){const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const n=i.getPropertyOptions(r),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:R;this._$Em=r;const c=o.fromAttribute(s,n.type);this[r]=c??this._$Ej?.get(r)??c,this._$Em=null}}requestUpdate(e,s,i,r=!1,n){if(e!==void 0){const o=this.constructor;if(r===!1&&(n=this[e]),i??=o.getPropertyOptions(e),!((i.hasChanged??Y)(n,s)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:i,reflect:r,wrapped:n},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??s??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(s=void 0),this._$AL.set(e,s)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,n]of i){const{wrapped:o}=n,c=this[r];o!==!0||this._$AL.has(r)||c===void 0||this.C(r,void 0,n,c)}}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(s)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(s)}willUpdate(e){}_$AE(e){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(e){}firstUpdated(e){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[L("elementProperties")]=new Map,A[L("finalized")]=new Map,Je?.({ReactiveElement:A}),(D.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee=globalThis,le=t=>t,z=ee.trustedTypes,de=z?z.createPolicy("lit-html",{createHTML:t=>t}):void 0,Pe="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,ke="?"+$,Ze=`<${ke}>`,E=document,M=()=>E.createComment(""),I=t=>t===null||typeof t!="object"&&typeof t!="function",te=Array.isArray,Xe=t=>te(t)||typeof t?.[Symbol.iterator]=="function",V=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ue=/-->/g,he=/>/g,x=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pe=/'/g,ve=/"/g,Oe=/^(?:script|style|textarea|title)$/i,Le=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),Ye=Le(1),O=Le(2),C=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),fe=new WeakMap,w=E.createTreeWalker(E,129);function Ue(t,e){if(!te(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return de!==void 0?de.createHTML(e):e}const et=(t,e)=>{const s=t.length-1,i=[];let r,n=e===2?"<svg>":e===3?"<math>":"",o=k;for(let c=0;c<s;c++){const a=t[c];let u,v,l=-1,b=0;for(;b<a.length&&(o.lastIndex=b,v=o.exec(a),v!==null);)b=o.lastIndex,o===k?v[1]==="!--"?o=ue:v[1]!==void 0?o=he:v[2]!==void 0?(Oe.test(v[2])&&(r=RegExp("</"+v[2],"g")),o=x):v[3]!==void 0&&(o=x):o===x?v[0]===">"?(o=r??k,l=-1):v[1]===void 0?l=-2:(l=o.lastIndex-v[2].length,u=v[1],o=v[3]===void 0?x:v[3]==='"'?ve:pe):o===ve||o===pe?o=x:o===ue||o===he?o=k:(o=x,r=void 0);const m=o===x&&t[c+1].startsWith("/>")?" ":"";n+=o===k?a+Ze:l>=0?(i.push(u),a.slice(0,l)+Pe+a.slice(l)+$+m):a+$+(l===-2?c:m)}return[Ue(t,n+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let K=class Me{constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let n=0,o=0;const c=e.length-1,a=this.parts,[u,v]=et(e,s);if(this.el=Me.createElement(u,i),w.currentNode=this.el.content,s===2||s===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(r=w.nextNode())!==null&&a.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const l of r.getAttributeNames())if(l.endsWith(Pe)){const b=v[o++],m=r.getAttribute(l).split($),T=/([.?@])?(.*)/.exec(b);a.push({type:1,index:n,name:T[2],strings:m,ctor:T[1]==="."?st:T[1]==="?"?it:T[1]==="@"?rt:j}),r.removeAttribute(l)}else l.startsWith($)&&(a.push({type:6,index:n}),r.removeAttribute(l));if(Oe.test(r.tagName)){const l=r.textContent.split($),b=l.length-1;if(b>0){r.textContent=z?z.emptyScript:"";for(let m=0;m<b;m++)r.append(l[m],M()),w.nextNode(),a.push({type:2,index:++n});r.append(l[b],M())}}}else if(r.nodeType===8)if(r.data===ke)a.push({type:2,index:n});else{let l=-1;for(;(l=r.data.indexOf($,l+1))!==-1;)a.push({type:7,index:n}),l+=$.length-1}n++}}static createElement(e,s){const i=E.createElement("template");return i.innerHTML=e,i}};function P(t,e,s=t,i){if(e===C)return e;let r=i!==void 0?s._$Co?.[i]:s._$Cl;const n=I(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),n===void 0?r=void 0:(r=new n(t),r._$AT(t,s,i)),i!==void 0?(s._$Co??=[])[i]=r:s._$Cl=r),r!==void 0&&(e=P(t,r._$AS(t,e.values),r,i)),e}let tt=class{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:i}=this._$AD,r=(e?.creationScope??E).importNode(s,!0);w.currentNode=r;let n=w.nextNode(),o=0,c=0,a=i[0];for(;a!==void 0;){if(o===a.index){let u;a.type===2?u=new se(n,n.nextSibling,this,e):a.type===1?u=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(u=new nt(n,this,e)),this._$AV.push(u),a=i[++c]}o!==a?.index&&(n=w.nextNode(),o++)}return w.currentNode=E,r}p(e){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,s),s+=i.strings.length-2):i._$AI(e[s])),s++}},se=class Ie{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,i,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=P(this,e,s),I(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==C&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Xe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&I(this._$AH)?this._$AA.nextSibling.data=e:this.T(E.createTextNode(e)),this._$AH=e}$(e){const{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=K.createElement(Ue(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(s);else{const n=new tt(r,this),o=n.u(this.options);n.p(s),this.T(o),this._$AH=n}}_$AC(e){let s=fe.get(e.strings);return s===void 0&&fe.set(e.strings,s=new K(e)),s}k(e){te(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,r=0;for(const n of e)r===s.length?s.push(i=new Ie(this.O(M()),this.O(M()),this,this.options)):i=s[r],i._$AI(n),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){const i=le(e).nextSibling;le(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}};class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,r,n){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=s,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}_$AI(e,s=this,i,r){const n=this.strings;let o=!1;if(n===void 0)e=P(this,e,s,0),o=!I(e)||e!==this._$AH&&e!==C,o&&(this._$AH=e);else{const c=e;let a,u;for(e=n[0],a=0;a<n.length-1;a++)u=P(this,c[i+a],s,a),u===C&&(u=this._$AH[a]),o||=!I(u)||u!==this._$AH[a],u===h?e=h:e!==h&&(e+=(u??"")+n[a+1]),this._$AH[a]=u}o&&!r&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let st=class extends j{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},it=class extends j{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},rt=class extends j{constructor(e,s,i,r,n){super(e,s,i,r,n),this.type=5}_$AI(e,s=this){if((e=P(this,e,s,0)??h)===C)return;const i=this._$AH,r=e===h&&i!==h||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==h&&(i===h||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},nt=class{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}};const ot=ee.litHtmlPolyfillSupport;ot?.(K,se),(ee.litHtmlVersions??=[]).push("3.3.2");const at=(t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(r===void 0){const n=s?.renderBefore??null;i._$litPart$=r=new se(e.insertBefore(M(),n),n,void 0,s??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=globalThis;class U extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=at(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return C}}U._$litElement$=!0,U.finalized=!0,ie.litElementHydrateSupport?.({LitElement:U});const ct=ie.litElementPolyfillSupport;ct?.({LitElement:U});(ie.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=t=>(e,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:Y},ut=(t=dt,e,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),i==="accessor"){const{name:o}=s;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,a,t,!0,c)},init(c){return c!==void 0&&this.C(o,void 0,t,c),c}}}if(i==="setter"){const{name:o}=s;return function(c){const a=this[o];e.call(this,c),this.requestUpdate(o,a,t,!0,c)}}throw Error("Unsupported decorator location: "+i)};function y(t){return(e,s)=>typeof s=="object"?ut(t,e,s):((i,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,i),o?Object.getOwnPropertyDescriptor(r,n):void 0})(t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return y({...t,state:!0,attribute:!1})}function G(t){if(typeof t=="string")return pt(t);if(Array.isArray(t))return He(t);if(ft(t))return vt(t);throw new Error(`[bezier-curve-editor] Invalid value: ${JSON.stringify(t)}`)}function pt(t){const e=t.trim().match(/^cubic-bezier\(\s*([\d.+-]+)\s*,\s*([\d.+-]+)\s*,\s*([\d.+-]+)\s*,\s*([\d.+-]+)\s*\)$/);if(!e)throw new Error(`[bezier-curve-editor] Cannot parse cubic-bezier string: "${t}"`);return He([Number(e[1]),Number(e[2]),Number(e[3]),Number(e[4])])}function He([t,e,s,i]){return _(t,"x1"),_(e,"y1"),_(s,"x2"),_(i,"y2"),{x1:t,y1:e,x2:s,y2:i}}function vt(t){const{x1:e,y1:s,x2:i,y2:r}=t;return _(e,"x1"),_(s,"y1"),_(i,"x2"),_(r,"y2"),{x1:e,y1:s,x2:i,y2:r}}function ft(t){return typeof t=="object"&&t!==null&&"x1"in t&&"y1"in t&&"x2"in t&&"y2"in t}function _(t,e){if(typeof t!="number"||!isFinite(t))throw new Error(`[bezier-curve-editor] "${e}" must be a finite number, got: ${String(t)}`)}function W(t,e=4){const s=i=>parseFloat(i.toFixed(e)).toString();return`cubic-bezier(${s(t.x1)}, ${s(t.y1)}, ${s(t.x2)}, ${s(t.y2)})`}function H(t,e,s){return s==="free"?{x:t,y:e}:s==="css"?{x:N(t,0,1),y:N(e,0,1)}:{x:N(t,s.xMin,s.xMax),y:N(e,s.yMin,s.yMax)}}function N(t,e,s){return Math.min(Math.max(t,e),s)}function gt(t){return t.y1<0||t.y1>1||t.y2<0||t.y2>1}const ge={x1:.25,y1:.1,x2:.25,y2:1};function yt(t={}){return{value:ge,initialValue:ge,dragging:null,focusedHandle:null,selectedPreset:null,presets:q,bounds:"css",overshoot:!1,snap:0,readonly:!1,disabled:!1,...t}}function ye(t,e){const s=typeof e=="number"?e:e.enabled?e.gridSize:0;return s<=0?t:Math.round(t/s)*s}function bt(t,e,s){const i={x:ye(t,s.snap),y:ye(e,s.snap)},r=s.overshoot?"free":s.bounds;return H(i.x,i.y,r)}function J(t,e,s,i){if(t.readonly||t.disabled)return t;const r=bt(s,i,t),n=e==="p1"?{...t.value,x1:r.x,y1:r.y}:{...t.value,x2:r.x,y2:r.y};return{...t,value:n,selectedPreset:null}}function mt(t,e){return t.readonly||t.disabled?t:{...t,dragging:e,focusedHandle:e}}function be(t){return{...t,dragging:null}}function me(t,e){return{...t,focusedHandle:e}}function $t(t,e){if(t.readonly||t.disabled)return t;const[s,i,r,n]=e.value;return{...t,value:{x1:s,y1:i,x2:r,y2:n},selectedPreset:e.id,overshoot:t.overshoot||(e.overshootRecommended??!1)}}function _t(t,e){if(t.readonly||t.disabled)return t;const s=G(e);return{...t,value:s,selectedPreset:null}}function xt(t){return t.readonly||t.disabled?t:{...t,value:t.initialValue,selectedPreset:null,dragging:null}}function wt(t,e){if(e==="css"&&!t.overshoot){const s=H(t.value.x1,t.value.y1,"css"),i=H(t.value.x2,t.value.y2,"css"),r={x1:s.x,y1:s.y,x2:i.x,y2:i.y};return{...t,bounds:e,value:r}}return{...t,bounds:e}}function Et(t,e){if(!e&&gt(t.value)){const s=H(t.value.x1,t.value.y1,"css"),i=H(t.value.x2,t.value.y2,"css"),r={x1:s.x,y1:s.y,x2:i.x,y2:i.y};return{...t,overshoot:e,value:r}}return{...t,overshoot:e}}function Te(t){for(;t;){const e=t.getAttribute?.("data-handle");if(e==="p1"||e==="p2")return e;t=t.parentElement}return null}const $e=100;class At{constructor(e){this.activeHandle=null,this.activeSvg=null,this.onPointerDown=s=>{const i=Te(s.target);i&&(s.preventDefault(),this.activeSvg?.setPointerCapture(s.pointerId),this.activeHandle=i,this.host.onStateChange(mt(this.host.state,i),null),globalThis.addEventListener("pointermove",this.onPointerMove),globalThis.addEventListener("pointerup",this.onPointerUp),globalThis.addEventListener("pointercancel",this.onPointerCancel))},this.onPointerMove=s=>{if(!this.activeHandle)return;const i=this.svgPoint(s);i&&this.host.onStateChange(J(this.host.state,this.activeHandle,i.x,i.y),"input")},this.onPointerUp=s=>{if(!this.activeHandle)return;const i=this.svgPoint(s),r=be(i?J(this.host.state,this.activeHandle,i.x,i.y):this.host.state);this.host.onStateChange(r,"change"),this.activeHandle=null,this.removeListeners()},this.onPointerCancel=()=>{this.activeHandle&&(this.host.onStateChange(be(this.host.state),null),this.activeHandle=null,this.removeListeners())},this.host=e,e.addController(this)}hostConnected(){}hostDisconnected(){this.removeListeners()}attach(e){this.activeSvg=e,e.addEventListener("pointerdown",this.onPointerDown)}svgPoint(e){const s=this.activeSvg??this.host.getSvgElement();if(!s)return null;const i=s.getScreenCTM();if(!i)return null;const r=new DOMPoint(e.clientX,e.clientY).matrixTransform(i.inverse());return{x:r.x/$e,y:1-r.y/$e}}removeListeners(){globalThis.removeEventListener("pointermove",this.onPointerMove),globalThis.removeEventListener("pointerup",this.onPointerUp),globalThis.removeEventListener("pointercancel",this.onPointerCancel)}}class St{constructor(e){this.el=null,this.nudged=!1,this.onFocusIn=s=>{const i=s.composedPath()[0],r=Te(i??null);r&&this.host.onStateChange(me(this.host.state,r),null)},this.onFocusOut=s=>{!this.el||s.relatedTarget&&this.el.contains(s.relatedTarget)||this.host.onStateChange(me(this.host.state,null),null)},this.onKeyDown=s=>{const{state:i}=this.host;if(i.readonly||i.disabled)return;if(s.key==="Escape"){s.target.blur?.();return}const r=i.focusedHandle;if(!r)return;const n=_e(s.key);if(!n)return;s.preventDefault();const o=Ct(i,s.shiftKey),c=r==="p1"?{x:i.value.x1,y:i.value.y1}:{x:i.value.x2,y:i.value.y2};this.host.onStateChange(J(i,r,c.x+n.x*o,c.y+n.y*o),"input"),this.nudged=!0},this.onKeyUp=s=>{!this.nudged||!_e(s.key)||(this.nudged=!1,this.host.onStateChange(this.host.state,"change"))},this.host=e,e.addController(this)}hostConnected(){}hostDisconnected(){this.detach()}attach(e){this.detach(),this.el=e,e.addEventListener("keydown",this.onKeyDown),e.addEventListener("keyup",this.onKeyUp);const s=xe(e);s?.addEventListener("focusin",this.onFocusIn),s?.addEventListener("focusout",this.onFocusOut)}detach(){if(!this.el)return;const e=xe(this.el);this.el.removeEventListener("keydown",this.onKeyDown),this.el.removeEventListener("keyup",this.onKeyUp),e?.removeEventListener("focusin",this.onFocusIn),e?.removeEventListener("focusout",this.onFocusOut),this.el=null}}function Ct(t,e){const s=typeof t.snap=="number"?t.snap:t.snap.enabled?t.snap.gridSize:0,i=s>0?s:.01;return e?i*10:i}function _e(t){switch(t){case"ArrowRight":return{x:1,y:0};case"ArrowLeft":return{x:-1,y:0};case"ArrowUp":return{x:0,y:1};case"ArrowDown":return{x:0,y:-1};default:return null}}function xe(t){const e=t;return e.renderRoot??e.shadowRoot??null}function Pt(t,e,s,i,r=4){const n={value:e,cssValue:W(e,r),...s?{preset:s}:{}};t.dispatchEvent(new CustomEvent(i,{detail:n,bubbles:!0,composed:!0}))}function kt(t,e,s){const i={preset:e,value:s};t.dispatchEvent(new CustomEvent("presetchange",{detail:i,bubbles:!0,composed:!0}))}function Ot(t,e){t.dispatchEvent(new CustomEvent("copy",{detail:{cssValue:e},bubbles:!0,composed:!0}))}function we(t,e,s,i=2){const r=t==="p1"?"Control point 1":"Control point 2",n=e.toFixed(i),o=s.toFixed(i);return`${r}, x ${n}, y ${o}. Use arrow keys to move.`}var Lt=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,g=(t,e,s,i)=>{for(var r=i>1?void 0:i?Ut(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Lt(e,s,r),r};const d=100,Ee=12,Mt=4;let p=class extends U{constructor(){super(...arguments),this._theme="auto",this.overshoot=!1,this.readonly=!1,this.disabled=!1,this.showGrid=!0,this.showPreview=!0,this.precision=4,this.gridSubdivisions=Mt,this._state=yt(),this._pointer=new At(this),this._keyboard=new St(this),this._copy=async()=>{const t=this.getCssValue();try{await globalThis.navigator.clipboard.writeText(t)}catch{}Ot(this,t)}}get theme(){return this._theme}set theme(t){const e=this._theme;this._theme=t,t==="auto"?this.removeAttribute("theme"):this.setAttribute("theme",t),this.requestUpdate("theme",e)}get snap(){const t=this._state.snap;return typeof t=="number"?t:t.enabled?t.gridSize:0}set snap(t){this._state={...this._state,snap:Math.max(0,t)},this.requestUpdate("snap",void 0)}get presets(){return this._state.presets}set presets(t){this._state={...this._state,presets:t},this.requestUpdate("presets",void 0)}get selectedPreset(){return this._state.selectedPreset}set selectedPreset(t){if(t===null){this._state={...this._state,selectedPreset:null},this.requestUpdate("selectedPreset",void 0);return}this.selectPreset(t)}set value(t){try{const e=G(t),s=_t(this._state,e);if(s===this._state)return;this._state={...s,initialValue:e}}catch{this.dispatchEvent(new CustomEvent("invalid",{bubbles:!0,composed:!0}))}}get value(){return this._state.value}set bounds(t){this._state=wt(this._state,t)}get bounds(){return this._state.bounds}get state(){return this._state}onStateChange(t,e){this._state=t,e&&Pt(this,t.value,t.selectedPreset,e,this.precision),this.requestUpdate()}getSvgElement(){return this.renderRoot.querySelector("svg")}firstUpdated(){const t=this.getSvgElement();t&&this._pointer.attach(t),this._keyboard.attach(this),this.setAttribute("role","group"),this.setAttribute("aria-label","Bezier curve editor")}updated(t){let e=!1;t.has("overshoot")&&(this._state=Et(this._state,this.overshoot),e=!0),t.has("readonly")&&(this._state={...this._state,readonly:this.readonly},e=!0),t.has("disabled")&&(this._state={...this._state,disabled:this.disabled},e=!0),e&&this.requestUpdate()}getValue(){return this._state.value}getCssValue(){return W(this._state.value,this.precision)}setValue(t){if(this._state.readonly||this._state.disabled)return;const e=G(t);this._state={...this._state,value:e,initialValue:e,selectedPreset:null},this.requestUpdate()}selectPreset(t){const e=this._state.presets.find(s=>s.id===t);e&&(this._state=$t(this._state,e),this.overshoot!==this._state.overshoot&&(this.overshoot=this._state.overshoot),kt(this,e,this._state.value),this.requestUpdate())}reset(){this._state=xt(this._state),this.requestUpdate()}focus(){super.focus()}_viewBox(){return{min:-Ee,size:d+Ee*2}}_renderGrid(){if(!this.showGrid)return null;const t=[],e=this.gridSubdivisions;for(let s=1;s<e;s++){const i=s/e*d;t.push(O`
        <line class="grid-line" x1=${i} y1="0" x2=${i} y2=${d} />
        <line class="grid-line" x1="0" y1=${i} x2=${d} y2=${i} />
      `)}return O`
      ${t}
      <line class="grid-diagonal" x1="0" y1=${d} x2=${d} y2="0" />
    `}_renderCurve(t){const e=t.x1*d,s=(1-t.y1)*d,i=t.x2*d,r=(1-t.y2)*d;return O`
      <path part="curve" class="curve-path" d="M 0 ${d} C ${e} ${s}, ${i} ${r}, ${d} 0" />
    `}_renderPreview(t){if(!this.showPreview)return null;const e=t.x1*d,s=(1-t.y1)*d,i=t.x2*d,r=(1-t.y2)*d,n=`M 0 ${d} C ${e} ${s}, ${i} ${r}, ${d} 0`;return O`
      <circle class="preview-dot" r="3">
        <animateMotion dur="1.6s" repeatCount="indefinite" path=${n} />
      </circle>
    `}_renderHandles(t){const e=t.x1*d,s=(1-t.y1)*d,i=t.x2*d,r=(1-t.y2)*d,{focusedHandle:n}=this._state;return O`
      <line class="handle-line" x1="0" y1=${d} x2=${e} y2=${s} />
      <line class="handle-line" x1=${d} y1="0" x2=${i} y2=${r} />
      <g part="handle handle-p1"
        class="handle ${n==="p1"?"handle--focused":""}"
        data-handle="p1" tabindex="0" role="slider"
        aria-label=${we("p1",t.x1,t.y1)}
        aria-valuemin="0" aria-valuemax="1"
        aria-valuenow="${t.x1.toFixed(4)}"
        aria-valuetext="x ${t.x1.toFixed(4)}, y ${t.y1.toFixed(4)}">
        <circle cx=${e} cy=${s} r="5" />
      </g>
      <g part="handle handle-p2"
        class="handle ${n==="p2"?"handle--focused":""}"
        data-handle="p2" tabindex="0" role="slider"
        aria-label=${we("p2",t.x2,t.y2)}
        aria-valuemin="0" aria-valuemax="1"
        aria-valuenow="${t.x2.toFixed(4)}"
        aria-valuetext="x ${t.x2.toFixed(4)}, y ${t.y2.toFixed(4)}">
        <circle cx=${i} cy=${r} r="5" />
      </g>
    `}render(){const t=this._state.value,e=W(t,this.precision),s=this._viewBox();return Ye`
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
    `}};p.styles=ze`
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
  `;g([y({type:String})],p.prototype,"theme",1);g([y({type:Boolean,reflect:!0})],p.prototype,"overshoot",2);g([y({type:Boolean,reflect:!0})],p.prototype,"readonly",2);g([y({type:Boolean,reflect:!0})],p.prototype,"disabled",2);g([y({type:Boolean})],p.prototype,"showGrid",2);g([y({type:Boolean})],p.prototype,"showPreview",2);g([y({type:Number})],p.prototype,"precision",2);g([y({type:Number,attribute:"grid-subdivisions"})],p.prototype,"gridSubdivisions",2);g([y({type:Number})],p.prototype,"snap",1);g([y({type:Array})],p.prototype,"presets",1);g([y({type:String})],p.prototype,"selectedPreset",1);g([y({attribute:"value"})],p.prototype,"value",1);g([y({})],p.prototype,"bounds",1);g([ht()],p.prototype,"_state",2);p=g([lt("bezier-curve-editor")],p);const f=document.getElementById("editor"),Ne=document.getElementById("css-output"),Q=document.getElementById("copy-btn"),Ae=document.getElementById("event-log"),Se=document.getElementById("preset-list"),Be=document.getElementById("preset-search"),It=document.getElementById("preset-count");function Ht(t,e){const i=`${new Date().toLocaleTimeString([],{hour12:!1})}  ${t}  ${JSON.stringify(e)}`;Ae.textContent=`${i}
${Ae.textContent}`.slice(0,4e3)}for(const t of["input","change","presetchange","copy","invalid"])f.addEventListener(t,e=>Ht(t,e.detail));function re(){const t=f.getCssValue();Ne.textContent=t,document.title=`${t} — bezier-curve-editor`}f.addEventListener("input",()=>re());f.addEventListener("presetchange",()=>re());re();Q.addEventListener("click",()=>{navigator.clipboard.writeText(Ne.textContent??"").then(()=>{Q.textContent="Copied!",setTimeout(()=>{Q.textContent="Copy"},1200)}).catch(()=>{})});document.getElementById("ctl-bounds").addEventListener("change",t=>{f.bounds=t.target.value});document.getElementById("ctl-overshoot").addEventListener("change",t=>{f.overshoot=t.target.checked});document.getElementById("ctl-readonly").addEventListener("change",t=>{f.readonly=t.target.checked});document.getElementById("ctl-disabled").addEventListener("change",t=>{f.disabled=t.target.checked});document.getElementById("ctl-grid").addEventListener("change",t=>{f.showGrid=t.target.checked});document.getElementById("ctl-preview").addEventListener("change",t=>{f.showPreview=t.target.checked});document.getElementById("ctl-subdiv").addEventListener("change",t=>{f.gridSubdivisions=Number(t.target.value)});document.getElementById("ctl-snap").addEventListener("change",t=>{f.snap=Number(t.target.value)});for(const t of document.querySelectorAll(".theme-toggle button"))t.addEventListener("click",()=>{for(const e of document.querySelectorAll(".theme-toggle button"))e.classList.remove("active");t.classList.add("active"),f.theme=t.dataset.theme});function Tt([t,e,s,i]){const n=o=>Math.round(o*40*10)/10;return`M 1 39 C ${Math.max(n(t),1)} ${39-Math.min(Math.max(e,-.4),1.4)*38}, ${Math.max(n(s),1)} ${39-Math.min(Math.max(i,-.4),1.4)*38}, 39 1`}let S=null;function F(){const t=Be.value,e=t?qe(t):q;It.textContent=`(${e.length})`,Se.innerHTML="";for(const s of e){const i=document.createElement("li");i.setAttribute("role","option"),i.setAttribute("aria-selected",String(s.id===S)),i.className=s.id===S?"preset active":"preset",i.innerHTML=`
      <svg viewBox="0 0 40 40" aria-hidden="true"><path d="${Tt(s.value)}"/></svg>
      <span class="preset-label">${s.label}</span>
      <code>${s.value.map(r=>+r.toFixed(2)).join(", ")}</code>`,i.addEventListener("click",()=>{S=s.id,f.selectPreset(s.id),F()}),Se.appendChild(i)}}Be.addEventListener("input",()=>F());f.addEventListener("input",()=>{S!==null&&(S=null,F())});S="ease";f.selectPreset("ease");F();
