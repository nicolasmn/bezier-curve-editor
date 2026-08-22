const k=[{id:"linear",label:"Linear",category:"standard",value:[0,0,1,1],description:"Constant speed, no easing.",tags:["css","basic"]},{id:"ease",label:"Ease",category:"standard",value:[.25,.1,.25,1],description:"Browser default ease. Starts fast, ends slow.",tags:["css","basic"]},{id:"ease-in",label:"Ease In",category:"standard",value:[.42,0,1,1],description:"Starts slow, ends fast.",tags:["css","basic"]},{id:"ease-out",label:"Ease Out",category:"standard",value:[0,0,.58,1],description:"Starts fast, ends slow.",tags:["css","basic"]},{id:"ease-in-out",label:"Ease In Out",category:"standard",value:[.42,0,.58,1],description:"Slow at both ends.",tags:["css","basic"]},{id:"sine-in",label:"Sine In",category:"sine",value:[.12,0,.39,0],description:"Gentle acceleration using sine curve.",tags:["smooth"]},{id:"sine-out",label:"Sine Out",category:"sine",value:[.61,1,.88,1],description:"Gentle deceleration using sine curve.",tags:["smooth"]},{id:"sine-in-out",label:"Sine In Out",category:"sine",value:[.37,0,.63,1],description:"Smooth acceleration and deceleration.",tags:["smooth"]},{id:"quad-in",label:"Quad In",category:"quad",value:[.11,0,.5,0],description:"Quadratic acceleration.",tags:["power"]},{id:"quad-out",label:"Quad Out",category:"quad",value:[.5,1,.89,1],description:"Quadratic deceleration.",tags:["power"]},{id:"quad-in-out",label:"Quad In Out",category:"quad",value:[.45,0,.55,1],description:"Symmetric quadratic easing.",tags:["power"]},{id:"cubic-in",label:"Cubic In",category:"cubic",value:[.32,0,.67,0],description:"Cubic acceleration.",tags:["power"]},{id:"cubic-out",label:"Cubic Out",category:"cubic",value:[.33,1,.68,1],description:"Cubic deceleration.",tags:["power"]},{id:"cubic-in-out",label:"Cubic In Out",category:"cubic",value:[.65,0,.35,1],description:"Symmetric cubic easing.",tags:["power"]},{id:"quart-in",label:"Quart In",category:"quart",value:[.5,0,.75,0],description:"Quartic acceleration.",tags:["power"]},{id:"quart-out",label:"Quart Out",category:"quart",value:[.25,1,.5,1],description:"Quartic deceleration.",tags:["power"]},{id:"quart-in-out",label:"Quart In Out",category:"quart",value:[.76,0,.24,1],description:"Symmetric quartic easing.",tags:["power"]},{id:"quint-in",label:"Quint In",category:"quint",value:[.64,0,.78,0],description:"Quintic acceleration.",tags:["power"]},{id:"quint-out",label:"Quint Out",category:"quint",value:[.22,1,.36,1],description:"Quintic deceleration.",tags:["power"]},{id:"quint-in-out",label:"Quint In Out",category:"quint",value:[.83,0,.17,1],description:"Symmetric quintic easing.",tags:["power"]},{id:"expo-in",label:"Expo In",category:"expo",value:[.7,0,.84,0],description:"Exponential acceleration. Very slow start.",tags:["dramatic"]},{id:"expo-out",label:"Expo Out",category:"expo",value:[.16,1,.3,1],description:"Exponential deceleration. Very slow end.",tags:["dramatic"]},{id:"expo-in-out",label:"Expo In Out",category:"expo",value:[.87,0,.13,1],description:"Exponential symmetric easing.",tags:["dramatic"]},{id:"circ-in",label:"Circ In",category:"circ",value:[.55,0,1,.45],description:"Circular acceleration.",tags:["smooth"]},{id:"circ-out",label:"Circ Out",category:"circ",value:[0,.55,.45,1],description:"Circular deceleration.",tags:["smooth"]},{id:"circ-in-out",label:"Circ In Out",category:"circ",value:[.85,0,.15,1],description:"Symmetric circular easing.",tags:["smooth"]},{id:"back-in",label:"Back In",category:"back",value:[.36,0,.66,-.56],description:"Pulls back before accelerating forward.",tags:["overshoot","character"],overshootRecommended:!0},{id:"back-out",label:"Back Out",category:"back",value:[.34,1.56,.64,1],description:"Overshoots the target then settles.",tags:["overshoot","character"],overshootRecommended:!0},{id:"back-in-out",label:"Back In Out",category:"back",value:[.68,-.6,.32,1.6],description:"Pulls back, overshoots, settles.",tags:["overshoot","character"],overshootRecommended:!0},{id:"anticipate",label:"Anticipate",category:"emphasis",value:[.38,-.4,.88,.65],description:"Pulls back strongly before launching forward.",tags:["character","overshoot"],overshootRecommended:!0},{id:"snap",label:"Snap",category:"emphasis",value:[.2,1.6,.6,1],description:"Snappy overshoot, quick settle.",tags:["character","overshoot"],overshootRecommended:!0},{id:"swift-out",label:"Swift Out",category:"emphasis",value:[.55,0,.1,1],description:"Material Design swift-out. Fast exit, gentle settle.",tags:["material","ui"]},{id:"soft-bounce",label:"Soft Bounce",category:"emphasis",value:[.34,1.3,.64,1],description:"Light bounce at the end. Playful but subtle.",tags:["character","overshoot"],overshootRecommended:!0},{id:"dramatic-out",label:"Dramatic Out",category:"emphasis",value:[0,.9,.1,1],description:"Explosive start, clean landing.",tags:["dramatic","ui"]},{id:"flat-start",label:"Flat Start",category:"utility",value:[0,.5,.5,1],description:"Delayed start, smooth arrival.",tags:["ui"]},{id:"flat-end",label:"Flat End",category:"utility",value:[.5,0,1,.5],description:"Quick launch, gradual slowdown to flat.",tags:["ui"]},{id:"symmetric",label:"Symmetric",category:"utility",value:[.5,0,.5,1],description:"Perfectly mirrored ease in and out.",tags:["balanced"]},{id:"snappy-ui",label:"Snappy UI",category:"utility",value:[.2,0,0,1],description:"Recommended for micro-interactions and UI transitions.",tags:["ui","recommended"]},{id:"gentle-ui",label:"Gentle UI",category:"utility",value:[.4,0,.2,1],description:"Smooth and natural feel for UI elements.",tags:["ui","recommended"]}];function Pt(t){return k.find(e=>e.id===t)}const ze=[{category:"standard",label:"Standard CSS"},{category:"sine",label:"Sine"},{category:"quad",label:"Quad"},{category:"cubic",label:"Cubic"},{category:"quart",label:"Quart"},{category:"quint",label:"Quint"},{category:"expo",label:"Expo"},{category:"circ",label:"Circ"},{category:"back",label:"Back (overshoot)"},{category:"emphasis",label:"Emphasis"},{category:"utility",label:"Utility"}];function Re(){return ze.map(({category:t,label:e})=>({category:t,label:e,presets:k.filter(s=>s.category===t)})).filter(t=>t.presets.length>0)}function Ct(t){return k.filter(e=>e.category===t)}function Ot(t){const e=t.toLowerCase().trim();return e?k.filter(s=>{var i,r;return s.id.includes(e)||s.label.toLowerCase().includes(e)||((i=s.description)==null?void 0:i.toLowerCase().includes(e))||((r=s.tags)==null?void 0:r.some(o=>o.includes(e)))}):k}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,se=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ie=Symbol(),ae=new WeakMap;let ke=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(se&&e===void 0){const i=s!==void 0&&s.length===1;i&&(e=ae.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ae.set(s,e))}return e}toString(){return this.cssText}};const qe=t=>new ke(typeof t=="string"?t:t+"",void 0,ie),Ie=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1],t[0]);return new ke(s,t,ie)},Ne=(t,e)=>{if(se)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const i=document.createElement("style"),r=D.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}},le=se?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const i of e.cssRules)s+=i.cssText;return qe(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:De,defineProperty:Be,getOwnPropertyDescriptor:Fe,getOwnPropertyNames:je,getOwnPropertySymbols:Ve,getPrototypeOf:Qe}=Object,_=globalThis,ce=_.trustedTypes,Ke=ce?ce.emptyScript:"",Q=_.reactiveElementPolyfillSupport,M=(t,e)=>t,B={toAttribute(t,e){switch(e){case Boolean:t=t?Ke:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},re=(t,e)=>!De(t,e),ue={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:re};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);let E=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=ue){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,s);r!==void 0&&Be(this.prototype,e,r)}}static getPropertyDescriptor(e,s,i){const{get:r,set:o}=Fe(this.prototype,e)??{get(){return this[s]},set(n){this[s]=n}};return{get:r,set(n){const l=r==null?void 0:r.call(this);o==null||o.call(this,n),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ue}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;const e=Qe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){const s=this.properties,i=[...je(s),...Ve(s)];for(const r of i)this.createProperty(r,s[r])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[i,r]of s)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const r=this._$Eu(s,i);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)s.unshift(le(r))}else e!==void 0&&s.push(le(e));return s}static _$Eu(e,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(s=>s(this))}addController(e){var s;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var s;(s=this._$EO)==null||s.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ne(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostDisconnected)==null?void 0:i.call(s)})}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$ET(e,s){var o;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:B).toAttribute(s,i.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,s){var o,n;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const l=i.getPropertyOptions(r),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:B;this._$Em=r;const u=a.fromAttribute(s,l.type);this[r]=u??((n=this._$Ej)==null?void 0:n.get(r))??u,this._$Em=null}}requestUpdate(e,s,i,r=!1,o){var n;if(e!==void 0){const l=this.constructor;if(r===!1&&(o=this[e]),i??(i=l.getPropertyOptions(e)),!((i.hasChanged??re)(o,s)||i.useDefault&&i.reflect&&o===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(l._$Eu(e,i))))return;this.C(e,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:i,reflect:r,wrapped:o},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??s??this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(s=void 0),this._$AL.set(e,s)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,n]of r){const{wrapped:l}=n,a=this[o];l!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,n,a)}}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(i=this._$EO)==null||i.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(s)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(s)}willUpdate(e){}_$AE(e){var s;(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(s=>this._$ET(s,this[s]))),this._$EM()}updated(e){}firstUpdated(e){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[M("elementProperties")]=new Map,E[M("finalized")]=new Map,Q==null||Q({ReactiveElement:E}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,he=t=>t,F=H.trustedTypes,de=F?F.createPolicy("lit-html",{createHTML:t=>t}):void 0,Pe="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,Ce="?"+m,Ge=`<${Ce}>`,S=document,L=()=>S.createComment(""),z=t=>t===null||typeof t!="object"&&typeof t!="function",oe=Array.isArray,We=t=>oe(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",K=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pe=/-->/g,fe=/>/g,x=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ve=/'/g,be=/"/g,Oe=/^(?:script|style|textarea|title)$/i,Ue=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),I=Ue(1),U=Ue(2),P=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ge=new WeakMap,w=S.createTreeWalker(S,129);function Me(t,e){if(!oe(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return de!==void 0?de.createHTML(e):e}const Ze=(t,e)=>{const s=t.length-1,i=[];let r,o=e===2?"<svg>":e===3?"<math>":"",n=O;for(let l=0;l<s;l++){const a=t[l];let u,d,c=-1,g=0;for(;g<a.length&&(n.lastIndex=g,d=n.exec(a),d!==null);)g=n.lastIndex,n===O?d[1]==="!--"?n=pe:d[1]!==void 0?n=fe:d[2]!==void 0?(Oe.test(d[2])&&(r=RegExp("</"+d[2],"g")),n=x):d[3]!==void 0&&(n=x):n===x?d[0]===">"?(n=r??O,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,u=d[1],n=d[3]===void 0?x:d[3]==='"'?be:ve):n===be||n===ve?n=x:n===pe||n===fe?n=O:(n=x,r=void 0);const y=n===x&&t[l+1].startsWith("/>")?" ":"";o+=n===O?a+Ge:c>=0?(i.push(u),a.slice(0,c)+Pe+a.slice(c)+m+y):a+m+(c===-2?l:y)}return[Me(t,o+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let J=class He{constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let o=0,n=0;const l=e.length-1,a=this.parts,[u,d]=Ze(e,s);if(this.el=He.createElement(u,i),w.currentNode=this.el.content,s===2||s===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=w.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(Pe)){const g=d[n++],y=r.getAttribute(c).split(m),q=/([.?@])?(.*)/.exec(g);a.push({type:1,index:o,name:q[2],strings:y,ctor:q[1]==="."?Xe:q[1]==="?"?Ye:q[1]==="@"?et:V}),r.removeAttribute(c)}else c.startsWith(m)&&(a.push({type:6,index:o}),r.removeAttribute(c));if(Oe.test(r.tagName)){const c=r.textContent.split(m),g=c.length-1;if(g>0){r.textContent=F?F.emptyScript:"";for(let y=0;y<g;y++)r.append(c[y],L()),w.nextNode(),a.push({type:2,index:++o});r.append(c[g],L())}}}else if(r.nodeType===8)if(r.data===Ce)a.push({type:2,index:o});else{let c=-1;for(;(c=r.data.indexOf(m,c+1))!==-1;)a.push({type:7,index:o}),c+=m.length-1}o++}}static createElement(e,s){const i=S.createElement("template");return i.innerHTML=e,i}};function C(t,e,s=t,i){var n,l;if(e===P)return e;let r=i!==void 0?(n=s._$Co)==null?void 0:n[i]:s._$Cl;const o=z(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),o===void 0?r=void 0:(r=new o(t),r._$AT(t,s,i)),i!==void 0?(s._$Co??(s._$Co=[]))[i]=r:s._$Cl=r),r!==void 0&&(e=C(t,r._$AS(t,e.values),r,i)),e}let Je=class{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??S).importNode(s,!0);w.currentNode=r;let o=w.nextNode(),n=0,l=0,a=i[0];for(;a!==void 0;){if(n===a.index){let u;a.type===2?u=new ne(o,o.nextSibling,this,e):a.type===1?u=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(u=new tt(o,this,e)),this._$AV.push(u),a=i[++l]}n!==(a==null?void 0:a.index)&&(o=w.nextNode(),n++)}return w.currentNode=S,r}p(e){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,s),s+=i.strings.length-2):i._$AI(e[s])),s++}},ne=class Te{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,s,i,r){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=C(this,e,s),z(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==P&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):We(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&z(this._$AH)?this._$AA.nextSibling.data=e:this.T(S.createTextNode(e)),this._$AH=e}$(e){var o;const{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=J.createElement(Me(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(s);else{const n=new Je(r,this),l=n.u(this.options);n.p(s),this.T(l),this._$AH=n}}_$AC(e){let s=ge.get(e.strings);return s===void 0&&ge.set(e.strings,s=new J(e)),s}k(e){oe(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,r=0;for(const o of e)r===s.length?s.push(i=new Te(this.O(L()),this.O(L()),this,this.options)):i=s[r],i._$AI(o),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,s);e!==this._$AB;){const r=he(e).nextSibling;he(e).remove(),e=r}}setConnected(e){var s;this._$AM===void 0&&(this._$Cv=e,(s=this._$AP)==null||s.call(this,e))}},V=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,r,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=s,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(e,s=this,i,r){const o=this.strings;let n=!1;if(o===void 0)e=C(this,e,s,0),n=!z(e)||e!==this._$AH&&e!==P,n&&(this._$AH=e);else{const l=e;let a,u;for(e=o[0],a=0;a<o.length-1;a++)u=C(this,l[i+a],s,a),u===P&&(u=this._$AH[a]),n||(n=!z(u)||u!==this._$AH[a]),u===p?e=p:e!==p&&(e+=(u??"")+o[a+1]),this._$AH[a]=u}n&&!r&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Xe=class extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}},Ye=class extends V{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}},et=class extends V{constructor(e,s,i,r,o){super(e,s,i,r,o),this.type=5}_$AI(e,s=this){if((e=C(this,e,s,0)??p)===P)return;const i=this._$AH,r=e===p&&i!==p||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==p&&(i===p||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,e):this._$AH.handleEvent(e)}},tt=class{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){C(this,e)}};const G=H.litHtmlPolyfillSupport;G==null||G(J,ne),(H.litHtmlVersions??(H.litHtmlVersions=[])).push("3.3.2");const st=(t,e,s)=>{const i=(s==null?void 0:s.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const o=(s==null?void 0:s.renderBefore)??null;i._$litPart$=r=new ne(e.insertBefore(L(),o),o,void 0,s??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=globalThis;class T extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const e=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=e.firstChild),e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=st(s,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return P}}var Ee;T._$litElement$=!0,T.finalized=!0,(Ee=A.litElementHydrateSupport)==null||Ee.call(A,{LitElement:T});const W=A.litElementPolyfillSupport;W==null||W({LitElement:T});(A.litElementVersions??(A.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=t=>(e,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:re},ot=(t=rt,e,s)=>{const{kind:i,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),i==="accessor"){const{name:n}=s;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(n,a,t,!0,l)},init(l){return l!==void 0&&this.C(n,void 0,t,l),l}}}if(i==="setter"){const{name:n}=s;return function(l){const a=this[n];e.call(this,l),this.requestUpdate(n,a,t,!0,l)}}throw Error("Unsupported decorator location: "+i)};function b(t){return(e,s)=>typeof s=="object"?ot(t,e,s):((i,r,o)=>{const n=r.hasOwnProperty(o);return r.constructor.createProperty(o,i),n?Object.getOwnPropertyDescriptor(r,o):void 0})(t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function nt(t){return b({...t,state:!0,attribute:!1})}function X(t){if(typeof t=="string")return at(t);if(Array.isArray(t))return Le(t);if(ct(t))return lt(t);throw new Error(`[bezier-curve-editor] Invalid value: ${JSON.stringify(t)}`)}function at(t){const e=t.trim().match(/^cubic-bezier\(\s*([\d.+-]+)\s*,\s*([\d.+-]+)\s*,\s*([\d.+-]+)\s*,\s*([\d.+-]+)\s*\)$/);if(!e)throw new Error(`[bezier-curve-editor] Cannot parse cubic-bezier string: "${t}"`);return Le([Number(e[1]),Number(e[2]),Number(e[3]),Number(e[4])])}function Le([t,e,s,i]){return $(t,"x1"),$(e,"y1"),$(s,"x2"),$(i,"y2"),{x1:t,y1:e,x2:s,y2:i}}function lt(t){const{x1:e,y1:s,x2:i,y2:r}=t;return $(e,"x1"),$(s,"y1"),$(i,"x2"),$(r,"y2"),{x1:e,y1:s,x2:i,y2:r}}function ct(t){return typeof t=="object"&&t!==null&&"x1"in t&&"y1"in t&&"x2"in t&&"y2"in t}function $(t,e){if(typeof t!="number"||!isFinite(t))throw new Error(`[bezier-curve-editor] "${e}" must be a finite number, got: ${String(t)}`)}function Y(t,e=4){const s=i=>parseFloat(i.toFixed(e)).toString();return`cubic-bezier(${s(t.x1)}, ${s(t.y1)}, ${s(t.x2)}, ${s(t.y2)})`}function It(t){return[t.x1,t.y1,t.x2,t.y2]}function R(t,e,s){return s==="free"?{x:t,y:e}:s==="css"?{x:N(t,0,1),y:N(e,0,1)}:{x:N(t,s.xMin,s.xMax),y:N(e,s.yMin,s.yMax)}}function N(t,e,s){return Math.min(Math.max(t,e),s)}function j(t,e,s,i,r){const o=1-t;return o*o*o*e+3*o*o*t*s+3*o*t*t*i+t*t*t*r}function Nt(t,e=60){const s=[];for(let i=0;i<=e;i++){const r=i/e;s.push({x:j(r,0,t.x1,t.x2,1),y:j(r,0,t.y1,t.y2,1)})}return s}function ut(t){return t.y1<0||t.y1>1||t.y2<0||t.y2>1}const ye={x1:.25,y1:.1,x2:.25,y2:1};function ht(t={}){return{value:ye,initialValue:ye,dragging:null,focusedHandle:null,selectedPreset:null,presets:k,bounds:"css",overshoot:!1,snap:0,readonly:!1,disabled:!1,...t}}function me(t,e){const s=typeof e=="number"?e:e.enabled?e.gridSize:0;return s<=0?t:Math.round(t/s)*s}function dt(t,e,s){const i={x:me(t,s.snap),y:me(e,s.snap)},r=s.overshoot?"free":s.bounds;return R(i.x,i.y,r)}function ee(t,e,s,i){if(t.readonly||t.disabled)return t;const r=dt(s,i,t),o=e==="p1"?{...t.value,x1:r.x,y1:r.y}:{...t.value,x2:r.x,y2:r.y};return{...t,value:o,selectedPreset:null}}function pt(t,e){return t.readonly||t.disabled?t:{...t,dragging:e,focusedHandle:e}}function $e(t){return{...t,dragging:null}}function _e(t,e){return{...t,focusedHandle:e}}function ft(t,e){if(t.readonly||t.disabled)return t;const[s,i,r,o]=e.value;return{...t,value:{x1:s,y1:i,x2:r,y2:o},selectedPreset:e.id,overshoot:t.overshoot||(e.overshootRecommended??!1)}}function vt(t,e){if(t.readonly||t.disabled)return t;const s=X(e);return{...t,value:s,selectedPreset:null}}function bt(t){return t.readonly||t.disabled?t:{...t,value:t.initialValue,selectedPreset:null,dragging:null}}function gt(t,e){if(e==="css"&&!t.overshoot){const s=R(t.value.x1,t.value.y1,"css"),i=R(t.value.x2,t.value.y2,"css"),r={x1:s.x,y1:s.y,x2:i.x,y2:i.y};return{...t,bounds:e,value:r}}return{...t,bounds:e}}function yt(t,e){if(!e&&ut(t.value)){const s=R(t.value.x1,t.value.y1,"css"),i=R(t.value.x2,t.value.y2,"css"),r={x1:s.x,y1:s.y,x2:i.x,y2:i.y};return{...t,overshoot:e,value:r}}return{...t,overshoot:e}}function te(t){var e;for(;t;){const s=(e=t.getAttribute)==null?void 0:e.call(t,"data-handle");if(s==="p1"||s==="p2")return s;t=t.parentElement}return null}const xe=100;class mt{constructor(e){this.activeHandle=null,this.activeSvg=null,this.onPointerDown=s=>{var r;const i=te(s.target);if(i){s.preventDefault();try{(r=this.activeSvg)==null||r.setPointerCapture(s.pointerId)}catch{}this.activeHandle=i,this.host.onStateChange(pt(this.host.state,i),null),globalThis.addEventListener("pointermove",this.onPointerMove),globalThis.addEventListener("pointerup",this.onPointerUp),globalThis.addEventListener("pointercancel",this.onPointerCancel)}},this.onPointerMove=s=>{if(!this.activeHandle)return;const i=this.svgPoint(s);i&&this.host.onStateChange(ee(this.host.state,this.activeHandle,i.x,i.y),"input")},this.onPointerUp=s=>{if(!this.activeHandle)return;const i=this.svgPoint(s),r=$e(i?ee(this.host.state,this.activeHandle,i.x,i.y):this.host.state);this.host.onStateChange(r,"change"),this.activeHandle=null,this.removeListeners()},this.onPointerCancel=()=>{this.activeHandle&&(this.host.onStateChange($e(this.host.state),null),this.activeHandle=null,this.removeListeners())},this.host=e,e.addController(this)}hostConnected(){}hostDisconnected(){this.removeListeners()}attach(e){this.activeSvg=e,e.addEventListener("pointerdown",this.onPointerDown)}svgPoint(e){const s=this.activeSvg??this.host.getSvgElement();if(!s)return null;const i=s.getScreenCTM();if(!i)return null;const r=new DOMPoint(e.clientX,e.clientY).matrixTransform(i.inverse());return{x:r.x/xe,y:1-r.y/xe}}removeListeners(){globalThis.removeEventListener("pointermove",this.onPointerMove),globalThis.removeEventListener("pointerup",this.onPointerUp),globalThis.removeEventListener("pointercancel",this.onPointerCancel)}}class $t{constructor(e){this.el=null,this.nudged=!1,this.onFocusIn=s=>{const i=s.composedPath()[0],r=te(i??null);r&&this.host.onStateChange(_e(this.host.state,r),null)},this.onFocusOut=s=>{!this.el||s.relatedTarget&&this.el.contains(s.relatedTarget)||this.host.onStateChange(_e(this.host.state,null),null)},this.onKeyDown=s=>{var a,u;const{state:i}=this.host;if(i.readonly||i.disabled)return;if(s.key==="Escape"){(u=(a=s.target).blur)==null||u.call(a);return}const r=i.focusedHandle??this.domFocusedHandle();if(!r)return;const o=we(s.key);if(!o)return;s.preventDefault();const n=_t(i,s.shiftKey),l=r==="p1"?{x:i.value.x1,y:i.value.y1}:{x:i.value.x2,y:i.value.y2};this.host.onStateChange(ee(i,r,l.x+o.x*n,l.y+o.y*n),"input"),this.nudged=!0},this.onKeyUp=s=>{!this.nudged||!we(s.key)||(this.nudged=!1,this.host.onStateChange(this.host.state,"change"))},this.host=e,e.addController(this)}hostConnected(){}hostDisconnected(){this.detach()}attach(e){this.detach(),this.el=e,e.addEventListener("keydown",this.onKeyDown),e.addEventListener("keyup",this.onKeyUp);const s=Z(e);s==null||s.addEventListener("focusin",this.onFocusIn),s==null||s.addEventListener("focusout",this.onFocusOut)}detach(){if(!this.el)return;const e=Z(this.el);this.el.removeEventListener("keydown",this.onKeyDown),this.el.removeEventListener("keyup",this.onKeyUp),e==null||e.removeEventListener("focusin",this.onFocusIn),e==null||e.removeEventListener("focusout",this.onFocusOut),this.el=null}domFocusedHandle(){var s;const e=((s=Z(this.el))==null?void 0:s.activeElement)??null;return te(e)}}function _t(t,e){const s=typeof t.snap=="number"?t.snap:t.snap.enabled?t.snap.gridSize:0,i=s>0?s:.01;return e?i*10:i}function we(t){switch(t){case"ArrowRight":return{x:1,y:0};case"ArrowLeft":return{x:-1,y:0};case"ArrowUp":return{x:0,y:1};case"ArrowDown":return{x:0,y:-1};default:return null}}function Z(t){const e=t;return e.renderRoot??e.shadowRoot??null}function xt(t,e,s,i,r=4){const o={value:e,cssValue:Y(e,r),...s?{preset:s}:{}};t.dispatchEvent(new CustomEvent(i,{detail:o,bubbles:!0,composed:!0}))}function wt(t,e,s){const i={preset:e,value:s};t.dispatchEvent(new CustomEvent("presetchange",{detail:i,bubbles:!0,composed:!0}))}function At(t,e){t.dispatchEvent(new CustomEvent("copy",{detail:{cssValue:e},bubbles:!0,composed:!0}))}function Ae(t,e,s,i=2){const r=t==="p1"?"Control point 1":"Control point 2",o=e.toFixed(i),n=s.toFixed(i);return`${r}, x ${o}, y ${n}. Use arrow keys to move.`}var St=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,v=(t,e,s,i)=>{for(var r=i>1?void 0:i?Et(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(r=(i?n(e,s,r):n(r))||r);return i&&r&&St(e,s,r),r};const h=100,Se=12,kt=4;let f=class extends T{constructor(){super(...arguments),this._theme="auto",this.overshoot=!1,this.readonly=!1,this.disabled=!1,this.showGrid=!0,this.showPresetPicker=!1,this.showPreview=!0,this.precision=4,this.gridSubdivisions=kt,this._state=ht(),this._pointer=new mt(this),this._keyboard=new $t(this),this._copy=async()=>{const t=this.getCssValue();try{await globalThis.navigator.clipboard.writeText(t)}catch{}At(this,t)},this._onPresetPick=t=>{const e=t.target,s=e.value;s&&(this.selectPreset(s),e.value=this._state.selectedPreset??"")}}get theme(){return this._theme}set theme(t){const e=this._theme;this._theme=t,t==="auto"?this.removeAttribute("theme"):this.setAttribute("theme",t),this.requestUpdate("theme",e)}get snap(){const t=this._state.snap;return typeof t=="number"?t:t.enabled?t.gridSize:0}set snap(t){this._state={...this._state,snap:Math.max(0,t)},this.requestUpdate("snap",void 0)}get presets(){return this._state.presets}set presets(t){this._state={...this._state,presets:t},this.requestUpdate("presets",void 0)}get selectedPreset(){return this._state.selectedPreset}set selectedPreset(t){if(t===null){this._state={...this._state,selectedPreset:null},this.requestUpdate("selectedPreset",void 0);return}this.selectPreset(t)}set value(t){try{const e=X(t),s=vt(this._state,e);if(s===this._state)return;this._state={...s,initialValue:e}}catch{this.dispatchEvent(new CustomEvent("invalid",{bubbles:!0,composed:!0}))}}get value(){return this._state.value}set bounds(t){this._state=gt(this._state,t)}get bounds(){return this._state.bounds}get state(){return this._state}onStateChange(t,e){this._state=t,e&&xt(this,t.value,t.selectedPreset,e,this.precision),this.requestUpdate()}getSvgElement(){return this.renderRoot.querySelector("svg")}firstUpdated(){const t=this.getSvgElement();t&&this._pointer.attach(t),this._keyboard.attach(this),this.setAttribute("role","group"),this.setAttribute("aria-label","Bezier curve editor")}updated(t){var i;let e=!1;t.has("overshoot")&&(this._state=yt(this._state,this.overshoot),e=!0),t.has("readonly")&&(this._state={...this._state,readonly:this.readonly},e=!0),t.has("disabled")&&(this._state={...this._state,disabled:this.disabled},e=!0),e&&this.requestUpdate();const s=(i=this.renderRoot)==null?void 0:i.querySelector(".preset-picker");if(s){const r=this._state.selectedPreset??"";s.value!==r&&(s.value=r)}}getValue(){return this._state.value}getCssValue(){return Y(this._state.value,this.precision)}setValue(t){if(this._state.readonly||this._state.disabled)return;const e=X(t);this._state={...this._state,value:e,initialValue:e,selectedPreset:null},this.requestUpdate()}selectPreset(t){const e=this._state.presets.find(s=>s.id===t);e&&(this._state=ft(this._state,e),this.overshoot!==this._state.overshoot&&(this.overshoot=this._state.overshoot),wt(this,e,this._state.value),this.requestUpdate())}reset(){this._state=bt(this._state),this.requestUpdate()}focus(){super.focus()}_viewBox(){return{min:-Se,size:h+Se*2}}_renderGrid(){if(!this.showGrid)return null;const t=[],e=this.gridSubdivisions;for(let s=1;s<e;s++){const i=s/e*h;t.push(U`
        <line class="grid-line" x1=${i} y1="0" x2=${i} y2=${h} />
        <line class="grid-line" x1="0" y1=${i} x2=${h} y2=${i} />
      `)}return U`
      ${t}
      <line class="grid-diagonal" x1="0" y1=${h} x2=${h} y2="0" />
    `}_renderCurve(t){const e=t.x1*h,s=(1-t.y1)*h,i=t.x2*h,r=(1-t.y2)*h;return U`
      <path part="curve" class="curve-path" d="M 0 ${h} C ${e} ${s}, ${i} ${r}, ${h} 0" />
    `}_renderPreview(t){if(!this.showPreview)return null;const e=32,s=[],i=[];for(let r=0;r<=e;r++){const o=r/e;let n=0,l=1;for(let d=0;d<24;d++){const c=(n+l)/2;j(c,0,t.x1,t.x2,1)<o?n=c:l=c}const a=(n+l)/2,u=j(a,0,t.y1,t.y2,1);s.push(o.toFixed(5)),i.push(Math.min(1,Math.max(0,u)).toFixed(5))}return U`
      <circle class="preview-dot" r="3">
        <animateMotion
          dur="1.6s"
          repeatCount="indefinite"
          calcMode="linear"
          path="M 0 ${h} L ${h} 0"
          keyTimes=${s.join(";")}
          keyPoints=${i.join(";")}
        />
      </circle>
    `}_renderHandles(t){const e=t.x1*h,s=(1-t.y1)*h,i=t.x2*h,r=(1-t.y2)*h,{focusedHandle:o}=this._state;return U`
      <line class="handle-line" x1="0" y1=${h} x2=${e} y2=${s} />
      <line class="handle-line" x1=${h} y1="0" x2=${i} y2=${r} />
      <g part="handle handle-p1"
        class="handle ${o==="p1"?"handle--focused":""}"
        data-handle="p1" tabindex="0" role="slider"
        aria-label=${Ae("p1",t.x1,t.y1)}
        aria-valuemin="0" aria-valuemax="1"
        aria-valuenow="${t.x1.toFixed(4)}"
        aria-valuetext="x ${t.x1.toFixed(4)}, y ${t.y1.toFixed(4)}">
        <circle cx=${e} cy=${s} r="5" />
      </g>
      <g part="handle handle-p2"
        class="handle ${o==="p2"?"handle--focused":""}"
        data-handle="p2" tabindex="0" role="slider"
        aria-label=${Ae("p2",t.x2,t.y2)}
        aria-valuemin="0" aria-valuemax="1"
        aria-valuenow="${t.x2.toFixed(4)}"
        aria-valuetext="x ${t.x2.toFixed(4)}, y ${t.y2.toFixed(4)}">
        <circle cx=${i} cy=${r} r="5" />
      </g>
    `}_miniCurvePath(t){const e=i=>3+i*18,s=i=>13-i*10;return`M ${e(0)} ${s(0)} C ${e(t.x1)} ${s(t.y1)}, ${e(t.x2)} ${s(t.y2)}, ${e(1)} ${s(1)}`}_renderPresetPicker(){if(!this.showPresetPicker||this._state.disabled)return null;const t=this._state.selectedPreset??"",e=this._state.readonly,s=Re().map(i=>I`
        <optgroup label=${i.label}>
          ${i.presets.map(r=>I`
              <option value=${r.id} ?selected=${t===r.id} title=${r.description}>
                <svg class="preset-thumb" viewBox="-1 -5 26 26" aria-hidden="true">
                  <path class="thumb-frame" d="M 0 16 L 24 16 M 0 16 L 0 -4 M 24 16 L 24 0" />
                  <path
                    class="thumb-curve"
                    d=${this._miniCurvePath({x1:r.value[0],y1:r.value[1],x2:r.value[2],y2:r.value[3]})}
                  />
                </svg>
                <span class="preset-label">${r.label}</span>
              </option>
            `)}
        </optgroup>
      `);return I`
      <select
        part="preset-picker"
        class="preset-picker"
        aria-label="Preset"
        ?disabled=${e}
        @change=${this._onPresetPick}
      >
        <button class="picker-button">
          <selectedcontent class="picker-selected"></selectedcontent>
          <span class="picker-arrow" aria-hidden="true">▾</span>
        </button>
        <option value="" ?selected=${t===""} class="picker-custom-option">Custom</option>
        ${s}
      </select>
    `}render(){const t=this._state.value,e=Y(t,this.precision),s=this._viewBox();return I`
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
          ${this._renderPresetPicker()}
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
    `}};f.styles=Ie`
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
    /* ─── Preset picker ─────────────────────────────────────────────────── */
    .preset-picker {
      font-family: var(--bce-font-family, ui-monospace, monospace);
      font-size: var(--bce-font-size, 0.75rem);
      color: var(--bce-fg, #1a1a1a);
      background: var(--bce-bg, #ffffff);
      border: 1px solid var(--bce-border, #e0e0e0);
      border-radius: calc(var(--bce-radius, 8px) - 2px);
      cursor: pointer;
      max-width: 140px;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .preset-picker:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .picker-arrow {
      margin-inline-start: 6px;
      opacity: 0.6;
      font-size: 0.7em;
    }

    /* Progressive enhancement: fully stylable dropdown where supported.
       Browsers without base-select render the plain native select. */
    @supports (appearance: base-select) {
      .preset-picker,
      .preset-picker ::picker(select) {
        appearance: base-select;
      }
      .preset-picker {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 2px 8px;
      }
      .picker-button {
        all: unset;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        min-width: 0;
      }
      .picker-selected {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        min-width: 0;
        overflow: hidden;
      }
      .preset-picker::picker(select) {
        border: 1px solid var(--bce-border, #e0e0e0);
        border-radius: var(--bce-radius, 8px);
        background: var(--bce-bg, #ffffff);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
        padding: 4px;
        max-block-size: 320px;
      }
      .preset-picker optgroup::picker(select) {
        border: none;
        padding: 2px 0;
      }
      .preset-picker option,
      .preset-picker optgroup::picker(select) {
        color: var(--bce-fg, #1a1a1a);
      }
      .preset-picker option {
        display: flex;
        align-items: center;
        gap: 7px;
        padding: 5px 8px;
        border-radius: calc(var(--bce-radius, 8px) - 3px);
        min-height: 18px;
      }
      .preset-picker option:checked,
      .preset-picker option:hover,
      .preset-picker option:focus-visible {
        background: color-mix(in srgb, var(--bce-accent, #4f6ef7) 12%, transparent);
      }
      .preset-thumb {
        width: 24px;
        height: 16px;
        flex-shrink: 0;
        overflow: visible;
      }
      .preset-thumb .thumb-curve {
        fill: none;
        stroke: var(--bce-accent, #4f6ef7);
        stroke-width: 1.8;
        stroke-linecap: round;
      }
      .preset-thumb .thumb-frame {
        stroke: var(--bce-border, #e0e0e0);
        stroke-width: 1;
        fill: none;
      }
      .preset-label {
        overflow: hidden;
        text-overflow: ellipsis;
      }
      /* The "Custom" placeholder has no thumb */
      .picker-custom-option {
        font-style: italic;
        opacity: 0.75;
      }
    }
  `;v([b({type:String})],f.prototype,"theme",1);v([b({type:Boolean,reflect:!0})],f.prototype,"overshoot",2);v([b({type:Boolean,reflect:!0})],f.prototype,"readonly",2);v([b({type:Boolean,reflect:!0})],f.prototype,"disabled",2);v([b({type:Boolean})],f.prototype,"showGrid",2);v([b({type:Boolean,attribute:"preset-picker"})],f.prototype,"showPresetPicker",2);v([b({type:Boolean})],f.prototype,"showPreview",2);v([b({type:Number})],f.prototype,"precision",2);v([b({type:Number,attribute:"grid-subdivisions"})],f.prototype,"gridSubdivisions",2);v([b({type:Number})],f.prototype,"snap",1);v([b({type:Array})],f.prototype,"presets",1);v([b({type:String})],f.prototype,"selectedPreset",1);v([b({attribute:"value"})],f.prototype,"value",1);v([b({})],f.prototype,"bounds",1);v([nt()],f.prototype,"_state",2);f=v([it("bezier-curve-editor")],f);export{f as BezierCurveEditor,ye as DEFAULT_VALUE,k as PRESETS,Nt as buildCurvePoints,R as clampPoint,Pt as getPreset,Re as getPresetGroups,Ct as getPresetsByCategory,ut as isOvershoot,X as parseBezierValue,j as sampleCurve1D,Ot as searchPresets,Y as serializeToCss,It as toTuple};
