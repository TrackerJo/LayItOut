const Hd=()=>{};var oc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ud=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],u=n[t++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Nu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,g=o>>2,I=(o&3)<<4|u>>4;let E=(u&15)<<2|d>>6,R=d&63;h||(R=64,a||(E=64)),r.push(t[g],t[I],t[E],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Qu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ud(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],u=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const I=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||I==null)throw new jd;const E=o<<2|u>>4;if(r.push(E),d!==64){const R=u<<4&240|d>>2;if(r.push(R),I!==64){const S=d<<6&192|I;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class jd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zd=function(n){const e=Qu(n);return Nu.encodeByteArray(e,!0)},hs=function(n){return zd(n).replace(/\./g,"")},ku=function(n){try{return Nu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=()=>qd().__FIREBASE_DEFAULTS__,Yd=()=>{if(typeof process>"u"||typeof oc>"u")return;const n=oc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Gd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ku(n[1]);return e&&JSON.parse(e)},Ds=()=>{try{return Hd()||Wd()||Yd()||Gd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ou=n=>Ds()?.emulatorHosts?.[n],Xd=n=>{const e=Ou(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Mu=()=>Ds()?.config,Vu=n=>Ds()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function xu(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[hs(JSON.stringify(t)),hs(JSON.stringify(a)),""].join(".")}const nr={};function Zd(){const n={prod:[],emulator:[]};for(const e of Object.keys(nr))nr[e]?n.emulator.push(e):n.prod.push(e);return n}function $d(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ac=!1;function Lu(n,e){if(typeof window>"u"||typeof document>"u"||!wn(window.location.host)||nr[n]===e||nr[n]||ac)return;nr[n]=e;function t(E){return`__firebase__banner__${E}`}const r="__firebase__banner",o=Zd().prod.length>0;function a(){const E=document.getElementById(r);E&&E.remove()}function u(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function h(E,R){E.setAttribute("width","24"),E.setAttribute("id",R),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function d(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{ac=!0,a()},E}function g(E,R){E.setAttribute("id",R),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function I(){const E=$d(r),R=t("text"),S=document.getElementById(R)||document.createElement("span"),k=t("learnmore"),D=document.getElementById(k)||document.createElement("a"),U=t("preprendIcon"),H=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const W=E.element;u(W),g(D,k);const he=d();h(H,U),W.append(H,S,D,he),document.body.appendChild(W)}o?(S.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ef(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function tf(){const n=Ds()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function sf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function of(){const n=we();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function af(){return!tf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cf(){try{return typeof indexedDB=="object"}catch{return!1}}function uf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="FirebaseError";class ht extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=lf,Object.setPrototypeOf(this,ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Er.prototype.create)}}class Er{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?hf(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new ht(s,u,r)}}function hf(n,e){return n.replace(df,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const df=/\{\$([^}]+)}/g;function ff(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function qt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const o=n[s],a=e[s];if(cc(o)&&cc(a)){if(!qt(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function cc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Jn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,o]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function Kn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function gf(n,e){const t=new Af(n,e);return t.subscribe.bind(t)}class Af{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");mf(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ri),s.error===void 0&&(s.error=Ri),s.complete===void 0&&(s.complete=Ri);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ri(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(n){return n&&n._delegate?n._delegate:n}class Wt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Jd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ef(e))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=Ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ht){return this.instances.has(e)}getOptions(e=Ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:If(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ht){return this.component?this.component.multipleInstances?e:Ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function If(n){return n===Ht?void 0:n}function Ef(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new pf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const Cf={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},Tf=j.INFO,_f={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},vf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=_f[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fo{constructor(e){this.name=e,this._logLevel=Tf,this._logHandler=vf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const wf=(n,e)=>e.some(t=>n instanceof t);let uc,lc;function Pf(){return uc||(uc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rf(){return lc||(lc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fu=new WeakMap,Li=new WeakMap,Hu=new WeakMap,Bi=new WeakMap,go=new WeakMap;function Bf(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(_t(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Fu.set(t,n)}).catch(()=>{}),go.set(e,n),e}function bf(n){if(Li.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Li.set(n,e)}let Fi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Li.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Hu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _t(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Sf(n){Fi=n(Fi)}function Df(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(bi(this),e,...t);return Hu.set(r,e.sort?e.sort():[e]),_t(r)}:Rf().includes(n)?function(...e){return n.apply(bi(this),e),_t(Fu.get(this))}:function(...e){return _t(n.apply(bi(this),e))}}function Qf(n){return typeof n=="function"?Df(n):(n instanceof IDBTransaction&&bf(n),wf(n,Pf())?new Proxy(n,Fi):n)}function _t(n){if(n instanceof IDBRequest)return Bf(n);if(Bi.has(n))return Bi.get(n);const e=Qf(n);return e!==n&&(Bi.set(n,e),go.set(e,n)),e}const bi=n=>go.get(n);function Nf(n,e,{blocked:t,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,e),u=_t(a);return r&&a.addEventListener("upgradeneeded",h=>{r(_t(a.result),h.oldVersion,h.newVersion,_t(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const kf=["get","getKey","getAll","getAllKeys","count"],Of=["put","add","delete","clear"],Si=new Map;function hc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Si.get(e))return Si.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Of.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||kf.includes(t)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),s&&h.done]))[0]};return Si.set(e,o),o}Sf(n=>({...n,get:(e,t,r)=>hc(e,t)||n.get(e,t,r),has:(e,t)=>!!hc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Vf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Vf(n){return n.getComponent()?.type==="VERSION"}const Hi="@firebase/app",dc="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new fo("@firebase/app"),xf="@firebase/app-compat",Lf="@firebase/analytics-compat",Ff="@firebase/analytics",Hf="@firebase/app-check-compat",Uf="@firebase/app-check",jf="@firebase/auth",zf="@firebase/auth-compat",qf="@firebase/database",Wf="@firebase/data-connect",Yf="@firebase/database-compat",Gf="@firebase/functions",Xf="@firebase/functions-compat",Jf="@firebase/installations",Kf="@firebase/installations-compat",Zf="@firebase/messaging",$f="@firebase/messaging-compat",eg="@firebase/performance",tg="@firebase/performance-compat",ng="@firebase/remote-config",rg="@firebase/remote-config-compat",sg="@firebase/storage",ig="@firebase/storage-compat",og="@firebase/firestore",ag="@firebase/ai",cg="@firebase/firestore-compat",ug="firebase",lg="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="[DEFAULT]",hg={[Hi]:"fire-core",[xf]:"fire-core-compat",[Ff]:"fire-analytics",[Lf]:"fire-analytics-compat",[Uf]:"fire-app-check",[Hf]:"fire-app-check-compat",[jf]:"fire-auth",[zf]:"fire-auth-compat",[qf]:"fire-rtdb",[Wf]:"fire-data-connect",[Yf]:"fire-rtdb-compat",[Gf]:"fire-fn",[Xf]:"fire-fn-compat",[Jf]:"fire-iid",[Kf]:"fire-iid-compat",[Zf]:"fire-fcm",[$f]:"fire-fcm-compat",[eg]:"fire-perf",[tg]:"fire-perf-compat",[ng]:"fire-rc",[rg]:"fire-rc-compat",[sg]:"fire-gcs",[ig]:"fire-gcs-compat",[og]:"fire-fst",[cg]:"fire-fst-compat",[ag]:"fire-vertex","fire-js":"fire-js",[ug]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=new Map,dg=new Map,ji=new Map;function fc(n,e){try{n.container.addComponent(e)}catch(t){ot.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function mn(n){const e=n.name;if(ji.has(e))return ot.debug(`There were multiple attempts to register component ${e}.`),!1;ji.set(e,n);for(const t of ds.values())fc(t,n);for(const t of dg.values())fc(t,n);return!0}function Ao(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Oe(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vt=new Er("app","Firebase",fg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=lg;function Uu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ui,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw vt.create("bad-app-name",{appName:String(s)});if(t||(t=Mu()),!t)throw vt.create("no-options");const o=ds.get(s);if(o){if(qt(t,o.options)&&qt(r,o.config))return o;throw vt.create("duplicate-app",{appName:s})}const a=new yf(s);for(const h of ji.values())a.addComponent(h);const u=new gg(t,r,a);return ds.set(s,u),u}function ju(n=Ui){const e=ds.get(n);if(!e&&n===Ui&&Mu())return Uu();if(!e)throw vt.create("no-app",{appName:n});return e}function wt(n,e,t){let r=hg[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ot.warn(a.join(" "));return}mn(new Wt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="firebase-heartbeat-database",mg=1,cr="firebase-heartbeat-store";let Di=null;function zu(){return Di||(Di=Nf(Ag,mg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(cr)}catch(t){console.warn(t)}}}}).catch(n=>{throw vt.create("idb-open",{originalErrorMessage:n.message})})),Di}async function pg(n){try{const t=(await zu()).transaction(cr),r=await t.objectStore(cr).get(qu(n));return await t.done,r}catch(e){if(e instanceof ht)ot.warn(e.message);else{const t=vt.create("idb-get",{originalErrorMessage:e?.message});ot.warn(t.message)}}}async function gc(n,e){try{const r=(await zu()).transaction(cr,"readwrite");await r.objectStore(cr).put(e,qu(n)),await r.done}catch(t){if(t instanceof ht)ot.warn(t.message);else{const r=vt.create("idb-set",{originalErrorMessage:t?.message});ot.warn(r.message)}}}function qu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=1024,Eg=30;class yg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Tg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ac();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>Eg){const s=_g(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ot.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ac(),{heartbeatsToSend:t,unsentEntries:r}=Cg(this._heartbeatsCache.heartbeats),s=hs(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return ot.warn(e),""}}}function Ac(){return new Date().toISOString().substring(0,10)}function Cg(n,e=Ig){const t=[];let r=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),mc(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),mc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Tg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cf()?uf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await pg(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return gc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return gc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function mc(n){return hs(JSON.stringify({version:2,heartbeats:n})).length}function _g(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(n){mn(new Wt("platform-logger",e=>new Mf(e),"PRIVATE")),mn(new Wt("heartbeat",e=>new yg(e),"PRIVATE")),wt(Hi,dc,n),wt(Hi,dc,"esm2020"),wt("fire-js","")}vg("");function Wu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wg=Wu,Yu=new Er("auth","Firebase",Wu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new fo("@firebase/auth");function Pg(n,...e){fs.logLevel<=j.WARN&&fs.warn(`Auth (${Pn}): ${n}`,...e)}function ts(n,...e){fs.logLevel<=j.ERROR&&fs.error(`Auth (${Pn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(n,...e){throw mo(n,...e)}function ze(n,...e){return mo(n,...e)}function Gu(n,e,t){const r={...wg(),[e]:t};return new Er("auth","Firebase",r).create(e,{appName:n.name})}function st(n){return Gu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Yu.create(n,...e)}function M(n,e,...t){if(!n)throw mo(e,...t)}function nt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ts(e),new Error(e)}function at(n,e){n||nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(){return typeof self<"u"&&self.location?.href||""}function Rg(){return pc()==="http:"||pc()==="https:"}function pc(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rg()||rf()||"connection"in navigator)?navigator.onLine:!0}function bg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t){this.shortDelay=e,this.longDelay=t,at(t>e,"Short delay should be less than long delay!"),this.isMobile=ef()||sf()}get(){return Bg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(n,e){at(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Qg=new Cr(3e4,6e4);function kt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function dt(n,e,t,r,s={}){return Ju(n,s,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const u=yr({key:n.config.apiKey,...a}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:h,...o};return nf()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&wn(n.emulatorConfig.host)&&(d.credentials="include"),Xu.fetch()(await Ku(n,n.config.apiHost,t,u),d)})}async function Ju(n,e,t){n._canInitEmulator=!1;const r={...Sg,...e};try{const s=new kg(n),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Xr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const u=o.ok?a.errorMessage:a.error.message,[h,d]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xr(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Xr(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw Xr(n,"user-disabled",a);const g=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Gu(n,g,d);Fe(n,g)}}catch(s){if(s instanceof ht)throw s;Fe(n,"network-request-failed",{message:String(s)})}}async function Tr(n,e,t,r,s={}){const o=await dt(n,e,t,r,s);return"mfaPendingCredential"in o&&Fe(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function Ku(n,e,t,r){const s=`${e}${t}?${r}`,o=n,a=o.config.emulator?po(n.config,s):`${n.config.apiScheme}://${s}`;return Dg.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}function Ng(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ze(this.auth,"network-request-failed")),Qg.get())})}}function Xr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ze(n,e,r);return s.customData._tokenResponse=t,s}function Ic(n){return n!==void 0&&n.enterprise!==void 0}class Og{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ng(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Mg(n,e){return dt(n,"GET","/v2/recaptchaConfig",kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vg(n,e){return dt(n,"POST","/v1/accounts:delete",e)}async function gs(n,e){return dt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xg(n,e=!1){const t=ue(n),r=await t.getIdToken(e),s=Io(r);M(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o?.sign_in_provider;return{claims:s,token:r,authTime:rr(Qi(s.auth_time)),issuedAtTime:rr(Qi(s.iat)),expirationTime:rr(Qi(s.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function Qi(n){return Number(n)*1e3}function Io(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ts("JWT malformed, contained fewer than 3 sections"),null;try{const s=ku(t);return s?JSON.parse(s):(ts("Failed to decode base64 JWT payload"),null)}catch(s){return ts("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Ec(n){const e=Io(n);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ht&&Lg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Lg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=rr(this.lastLoginAt),this.creationTime=rr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(n){const e=n.auth,t=await n.getIdToken(),r=await pn(n,gs(e,{idToken:t}));M(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=s.providerUserInfo?.length?Zu(s.providerUserInfo):[],a=Ug(n.providerData,o),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!a?.length,d=u?h:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new qi(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,g)}async function Hg(n){const e=ue(n);await As(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ug(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Zu(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jg(n,e){const t=await Ju(n,{},async()=>{const r=yr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,a=await Ku(n,s,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:u,body:r};return n.emulatorConfig&&wn(n.emulatorConfig.host)&&(h.credentials="include"),Xu.fetch()(a,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function zg(n,e){return dt(n,"POST","/v2/accounts:revokeToken",kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ec(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");const t=Ec(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:o}=await jg(e,t);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:o}=t,a=new hn;return r&&(M(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(M(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(M(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hn,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(n,e){M(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class xe{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Fg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new qi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await pn(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return xg(this,e)}reload(){return Hg(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new xe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await As(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Oe(this.auth.app))return Promise.reject(st(this.auth));const e=await this.getIdToken();return await pn(this,Vg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,o=t.phoneNumber??void 0,a=t.photoURL??void 0,u=t.tenantId??void 0,h=t._redirectEventId??void 0,d=t.createdAt??void 0,g=t.lastLoginAt??void 0,{uid:I,emailVerified:E,isAnonymous:R,providerData:S,stsTokenManager:k}=t;M(I&&k,e,"internal-error");const D=hn.fromJSON(this.name,k);M(typeof I=="string",e,"internal-error"),pt(r,e.name),pt(s,e.name),M(typeof E=="boolean",e,"internal-error"),M(typeof R=="boolean",e,"internal-error"),pt(o,e.name),pt(a,e.name),pt(u,e.name),pt(h,e.name),pt(d,e.name),pt(g,e.name);const U=new xe({uid:I,auth:e,email:s,emailVerified:E,displayName:r,isAnonymous:R,photoURL:a,phoneNumber:o,tenantId:u,stsTokenManager:D,createdAt:d,lastLoginAt:g});return S&&Array.isArray(S)&&(U.providerData=S.map(H=>({...H}))),h&&(U._redirectEventId=h),U}static async _fromIdTokenResponse(e,t,r=!1){const s=new hn;s.updateFromServerResponse(t);const o=new xe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await As(o),o}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];M(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Zu(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!o?.length,u=new hn;u.updateFromIdToken(r);const h=new xe({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new qi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!o?.length};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=new Map;function rt(n){at(n instanceof Function,"Expected a class definition");let e=yc.get(n);return e?(at(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,yc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}$u.type="NONE";const Cc=$u;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(n,e,t){return`firebase:${n}:${e}:${t}`}class dn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=ns(this.userKey,s.apiKey,o),this.fullPersistenceKey=ns("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await gs(this.auth,{idToken:e}).catch(()=>{});return t?xe._fromGetAccountInfoResponse(this.auth,t,e):null}return xe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new dn(rt(Cc),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=s[0]||rt(Cc);const a=ns(r,e.config.apiKey,e.name);let u=null;for(const d of t)try{const g=await d._get(a);if(g){let I;if(typeof g=="string"){const E=await gs(e,{idToken:g}).catch(()=>{});if(!E)break;I=await xe._fromGetAccountInfoResponse(e,E,g)}else I=xe._fromJSON(e,g);d!==o&&(u=I),o=d;break}}catch{}const h=s.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new dn(o,e,r):(o=h[0],u&&await o._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new dn(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(el(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(il(e))return"Blackberry";if(ol(e))return"Webos";if(tl(e))return"Safari";if((e.includes("chrome/")||nl(e))&&!e.includes("edge/"))return"Chrome";if(sl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function el(n=we()){return/firefox\//i.test(n)}function tl(n=we()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nl(n=we()){return/crios\//i.test(n)}function rl(n=we()){return/iemobile/i.test(n)}function sl(n=we()){return/android/i.test(n)}function il(n=we()){return/blackberry/i.test(n)}function ol(n=we()){return/webos/i.test(n)}function Eo(n=we()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function qg(n=we()){return Eo(n)&&!!window.navigator?.standalone}function Wg(){return of()&&document.documentMode===10}function al(n=we()){return Eo(n)||sl(n)||ol(n)||il(n)||/windows phone/i.test(n)||rl(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(n,e=[]){let t;switch(n){case"Browser":t=Tc(we());break;case"Worker":t=`${Tc(we())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Pn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,u)=>{try{const h=e(o);a(h)}catch(h){u(h)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gg(n,e={}){return dt(n,"GET","/v2/passwordPolicy",kt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=6;class Jg{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Xg,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _c(this),this.idTokenSubscription=new _c(this),this.beforeStateQueue=new Yg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=rt(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await dn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await gs(this,{idToken:e}),r=await xe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Oe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=this.redirectUser?._redirectEventId,a=r?._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&u?.user&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await As(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Oe(this.app))return Promise.reject(st(this));const t=e?ue(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Oe(this.app)?Promise.reject(st(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Oe(this.app)?Promise.reject(st(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Gg(this),t=new Jg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Er("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await zg(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&rt(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await dn.create(this,[rt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(u,this,"internal-error"),u.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,s);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Pg(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Kt(n){return ue(n)}class _c{constructor(e){this.auth=e,this.observer=null,this.addObserver=gf(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Zg(n){Qs=n}function ul(n){return Qs.loadJS(n)}function $g(){return Qs.recaptchaEnterpriseScript}function eA(){return Qs.gapiScript}function tA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class nA{constructor(){this.enterprise=new rA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class rA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const sA="recaptcha-enterprise",ll="NO_RECAPTCHA";class iA{constructor(e){this.type=sA,this.auth=Kt(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,u)=>{Mg(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const d=new Og(h);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(h=>{u(h)})})}function s(o,a,u){const h=window.grecaptcha;Ic(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(ll)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new nA().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{r(this.auth).then(u=>{if(!t&&Ic(window.grecaptcha))s(u,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=$g();h.length!==0&&(h+=u),ul(h).then(()=>{s(u,o,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}}async function vc(n,e,t,r=!1,s=!1){const o=new iA(n);let a;if(s)a=ll;else try{a=await o.verify(t)}catch{a=await o.verify(t,!0)}const u={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){const h=u.phoneEnrollmentInfo.phoneNumber,d=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){const h=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return r?Object.assign(u,{captchaResp:a}):Object.assign(u,{captchaResponse:a}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function Wi(n,e,t,r,s){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await vc(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await vc(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(n,e){const t=Ao(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(qt(o,e??{}))return s;Fe(s,"already-initialized")}return t.initialize({options:e})}function aA(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(rt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function cA(n,e,t){const r=Kt(n);M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=hl(e),{host:a,port:u}=uA(e),h=u===null?"":`:${u}`,d={url:`${o}//${a}${h}/`},g=Object.freeze({host:a,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){M(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),M(qt(d,r.config.emulator)&&qt(g,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=g,r.settings.appVerificationDisabledForTesting=!0,wn(a)?(xu(`${o}//${a}${h}`),Lu("Auth",!0)):lA()}function hl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function uA(n){const e=hl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:wc(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:wc(a)}}}function wc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function lA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,t){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}async function hA(n,e){return dt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dA(n,e){return Tr(n,"POST","/v1/accounts:signInWithPassword",kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fA(n,e){return Tr(n,"POST","/v1/accounts:signInWithEmailLink",kt(n,e))}async function gA(n,e){return Tr(n,"POST","/v1/accounts:signInWithEmailLink",kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends yo{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ur(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ur(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wi(e,t,"signInWithPassword",dA);case"emailLink":return fA(e,{email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wi(e,r,"signUpPassword",hA);case"emailLink":return gA(e,{idToken:t,email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(n,e){return Tr(n,"POST","/v1/accounts:signInWithIdp",kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA="http://localhost";class Yt extends yo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Yt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Fe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...o}=t;if(!r||!s)return null;const a=new Yt(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return fn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,fn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,fn(e,t)}buildRequest(){const e={requestUri:AA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=yr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pA(n){const e=Jn(Kn(n)).link,t=e?Jn(Kn(e)).deep_link_id:null,r=Jn(Kn(n)).deep_link_id;return(r?Jn(Kn(r)).link:null)||r||t||e||n}class Co{constructor(e){const t=Jn(Kn(e)),r=t.apiKey??null,s=t.oobCode??null,o=mA(t.mode??null);M(r&&s&&o,"argument-error"),this.apiKey=r,this.operation=o,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=pA(e);try{return new Co(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.providerId=Rn.PROVIDER_ID}static credential(e,t){return ur._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Co.parseLink(t);return M(r,"argument-error"),ur._fromEmailAndCode(e,r.code,r.tenantId)}}Rn.PROVIDER_ID="password";Rn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends dl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends _r{constructor(){super("facebook.com")}static credential(e){return Yt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.FACEBOOK_SIGN_IN_METHOD="facebook.com";It.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends _r{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Yt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Et.credential(t,r)}catch{return null}}}Et.GOOGLE_SIGN_IN_METHOD="google.com";Et.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends _r{constructor(){super("github.com")}static credential(e){return Yt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com";yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends _r{constructor(){super("twitter.com")}static credential(e,t){return Yt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ct.credential(t,r)}catch{return null}}}Ct.TWITTER_SIGN_IN_METHOD="twitter.com";Ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IA(n,e){return Tr(n,"POST","/v1/accounts:signUp",kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const o=await xe._fromIdTokenResponse(e,r,s),a=Pc(r);return new Gt({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Pc(r);return new Gt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Pc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends ht{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ms.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ms(e,t,r,s)}}function fl(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ms._fromErrorAndOperation(n,o,e,r):o})}async function EA(n,e,t=!1){const r=await pn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Gt._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(n,e,t=!1){const{auth:r}=n;if(Oe(r.app))return Promise.reject(st(r));const s="reauthenticate";try{const o=await pn(n,fl(r,s,e,n),t);M(o.idToken,r,"internal-error");const a=Io(o.idToken);M(a,r,"internal-error");const{sub:u}=a;return M(n.uid===u,r,"user-mismatch"),Gt._forOperation(n,s,o)}catch(o){throw o?.code==="auth/user-not-found"&&Fe(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gl(n,e,t=!1){if(Oe(n.app))return Promise.reject(st(n));const r="signIn",s=await fl(n,r,e),o=await Gt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(o.user),o}async function CA(n,e){return gl(Kt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(n){const e=Kt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function TA(n,e,t){if(Oe(n.app))return Promise.reject(st(n));const r=Kt(n),a=await Wi(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",IA).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&Al(n),h}),u=await Gt._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(u.user),u}function _A(n,e,t){return Oe(n.app)?Promise.reject(st(n)):CA(ue(n),Rn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Al(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vA(n,e){return dt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wA(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ue(n),o={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await pn(r,vA(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const u=r.providerData.find(({providerId:h})=>h==="password");u&&(u.displayName=r.displayName,u.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(n,e){return ue(n).setPersistence(e)}function PA(n,e,t,r){return ue(n).onIdTokenChanged(e,t,r)}function RA(n,e,t){return ue(n).beforeAuthStateChanged(e,t)}function BA(n,e,t,r){return ue(n).onAuthStateChanged(e,t,r)}function bA(n){return ue(n).signOut()}const ps="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ps,"1"),this.storage.removeItem(ps),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=1e3,DA=10;class Il extends pl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=al(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);Wg()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,DA):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},SA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Il.type="LOCAL";const To=Il;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends pl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}El.type="SESSION";const yl=El;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ns(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:o}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const u=Array.from(a).map(async d=>d(t.origin,o)),h=await QA(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ns.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((u,h)=>{const d=_o("",20);s.port1.start();const g=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(I){const E=I;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(g),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(E.data.response);break;default:clearTimeout(g),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return window}function kA(n){qe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(){return typeof qe().WorkerGlobalScope<"u"&&typeof qe().importScripts=="function"}async function OA(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MA(){return navigator?.serviceWorker?.controller||null}function VA(){return Cl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl="firebaseLocalStorageDb",xA=1,Is="firebaseLocalStorage",_l="fbase_key";class vr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ks(n,e){return n.transaction([Is],e?"readwrite":"readonly").objectStore(Is)}function LA(){const n=indexedDB.deleteDatabase(Tl);return new vr(n).toPromise()}function Yi(){const n=indexedDB.open(Tl,xA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Is,{keyPath:_l})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Is)?e(r):(r.close(),await LA(),e(await Yi()))})})}async function Rc(n,e,t){const r=ks(n,!0).put({[_l]:e,value:t});return new vr(r).toPromise()}async function FA(n,e){const t=ks(n,!1).get(e),r=await new vr(t).toPromise();return r===void 0?null:r.value}function Bc(n,e){const t=ks(n,!0).delete(e);return new vr(t).toPromise()}const HA=800,UA=3;class vl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>UA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ns._getInstance(VA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await OA(),!this.activeServiceWorker)return;this.sender=new NA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yi();return await Rc(e,ps,"1"),await Bc(e,ps),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>FA(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Bc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=ks(s,!1).getAll();return new vr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vl.type="LOCAL";const jA=vl;new Cr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(n,e){return e?rt(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo extends yo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qA(n){return gl(n.auth,new vo(n),n.bypassAuthState)}function WA(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),yA(t,new vo(n),n.bypassAuthState)}async function YA(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),EA(t,new vo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,t,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:o,error:a,type:u}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qA;case"linkViaPopup":case"linkViaRedirect":return YA;case"reauthViaPopup":case"reauthViaRedirect":return WA;default:Fe(this.auth,"internal-error")}}resolve(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=new Cr(2e3,1e4);class ln extends wl{constructor(e,t,r,s,o){super(e,t,s,o),this.provider=r,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){at(this.filter.length===1,"Popup operations only handle one event");const e=_o();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,GA.get())};e()}}ln.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA="pendingRedirect",rs=new Map;class JA extends wl{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=rs.get(this.auth._key());if(!e){try{const r=await KA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}rs.set(this.auth._key(),e)}return this.bypassAuthState||rs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KA(n,e){const t=em(e),r=$A(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function ZA(n,e){rs.set(n._key(),e)}function $A(n){return rt(n._redirectPersistence)}function em(n){return ns(XA,n.config.apiKey,n.name)}async function tm(n,e,t=!1){if(Oe(n.app))return Promise.reject(st(n));const r=Kt(n),s=zA(r,e),a=await new JA(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=600*1e3;class rm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Pl(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(ze(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nm&&this.cachedEventUids.clear(),this.cachedEventUids.has(bc(e))}saveEventToCache(e){this.cachedEventUids.add(bc(e)),this.lastProcessedEventTime=Date.now()}}function bc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Pl({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function sm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pl(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function im(n,e={}){return dt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,am=/^https?/;async function cm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await im(n);for(const t of e)try{if(um(t))return}catch{}Fe(n,"unauthorized-domain")}function um(n){const e=zi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!am.test(t))return!1;if(om.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=new Cr(3e4,6e4);function Sc(){const n=qe().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function hm(n){return new Promise((e,t)=>{function r(){Sc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sc(),t(ze(n,"network-request-failed"))},timeout:lm.get()})}if(qe().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(qe().gapi?.load)r();else{const s=tA("iframefcb");return qe()[s]=()=>{gapi.load?r():t(ze(n,"network-request-failed"))},ul(`${eA()}?onload=${s}`).catch(o=>t(o))}}).catch(e=>{throw ss=null,e})}let ss=null;function dm(n){return ss=ss||hm(n),ss}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=new Cr(5e3,15e3),gm="__/auth/iframe",Am="emulator/auth/iframe",mm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Im(n){const e=n.config;M(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?po(e,Am):`https://${n.config.authDomain}/${gm}`,r={apiKey:e.apiKey,appName:n.name,v:Pn},s=pm.get(n.config.apiHost);s&&(r.eid=s);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${yr(r).slice(1)}`}async function Em(n){const e=await dm(n),t=qe().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:Im(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mm,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=ze(n,"network-request-failed"),u=qe().setTimeout(()=>{o(a)},fm.get());function h(){qe().clearTimeout(u),s(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cm=500,Tm=600,_m="_blank",vm="http://localhost";class Dc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wm(n,e,t,r=Cm,s=Tm){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const h={...ym,width:r.toString(),height:s.toString(),top:o,left:a},d=we().toLowerCase();t&&(u=nl(d)?_m:t),el(d)&&(e=e||vm,h.scrollbars="yes");const g=Object.entries(h).reduce((E,[R,S])=>`${E}${R}=${S},`,"");if(qg(d)&&u!=="_self")return Pm(e||"",u),new Dc(null);const I=window.open(e||"",u,g);M(I,n,"popup-blocked");try{I.focus()}catch{}return new Dc(I)}function Pm(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="__/auth/handler",Bm="emulator/auth/handler",bm=encodeURIComponent("fac");async function Qc(n,e,t,r,s,o){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Pn,eventId:s};if(e instanceof dl){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",ff(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,I]of Object.entries({}))a[g]=I}if(e instanceof _r){const g=e.getScopes().filter(I=>I!=="");g.length>0&&(a.scopes=g.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const g of Object.keys(u))u[g]===void 0&&delete u[g];const h=await n._getAppCheckToken(),d=h?`#${bm}=${encodeURIComponent(h)}`:"";return`${Sm(n)}?${yr(u).slice(1)}${d}`}function Sm({config:n}){return n.emulator?po(n,Bm):`https://${n.authDomain}/${Rm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni="webStorageSupport";class Dm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yl,this._completeRedirectFn=tm,this._overrideRedirectResult=ZA}async _openPopup(e,t,r,s){at(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const o=await Qc(e,t,r,zi(),s);return wm(e,o,_o())}async _openRedirect(e,t,r,s){await this._originValidation(e);const o=await Qc(e,t,r,zi(),s);return kA(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):(at(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Em(e),r=new rm(e);return t.register("authEvent",s=>(M(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ni,{type:Ni},s=>{const o=s?.[0]?.[Ni];o!==void 0&&t(!!o),Fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return al()||tl()||Eo()}}const Qm=Dm;var Nc="@firebase/auth",kc="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Om(n){mn(new Wt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;M(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cl(n)},d=new Kg(r,s,o,h);return aA(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),mn(new Wt("auth-internal",e=>{const t=Kt(e.getProvider("auth").getImmediate());return(r=>new Nm(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),wt(Nc,kc,km(n)),wt(Nc,kc,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=300,Vm=Vu("authIdTokenMaxAge")||Mm;let Oc=null;const xm=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Vm)return;const s=t?.token;Oc!==s&&(Oc=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Lm(n=ju()){const e=Ao(n,"auth");if(e.isInitialized())return e.getImmediate();const t=oA(n,{popupRedirectResolver:Qm,persistence:[jA,To,yl]}),r=Vu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=xm(o.toString());RA(t,a,()=>a(t.currentUser)),PA(t,u=>a(u))}}const s=Ou("auth");return s&&cA(t,`http://${s}`),t}function Fm(){return document.getElementsByTagName("head")?.[0]??document}Zg({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const o=ze("internal-error");o.customData=s,t(o)},r.type="text/javascript",r.charset="UTF-8",Fm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Om("Browser");var Hm="firebase",Um="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt(Hm,Um,"app");const jm={apiKey:"AIzaSyDL8XA6JF2L5pyz6hZPkYxCLIdwTJCR4-Y",authDomain:"kazoom-layitout.firebaseapp.com",projectId:"kazoom-layitout",storageBucket:"kazoom-layitout.firebasestorage.app",messagingSenderId:"1054171031364",appId:"1:1054171031364:web:ffc4a80699a6c297aa9911"},Rl=Uu(jm);class Be{x;y;constructor({x:e,y:t}){this.x=e,this.y=t}toId(){return`Cell-${this.x}-${this.y}`}static fromString(e){return new Be({x:parseInt(e.split("-")[1]),y:parseInt(e.split("-")[2])})}}class Ae{name;id;icon;cellsLong;cellsTall;hasMoved;initialElement;moveable;rotation;starterItem;isDisplayItem;sectionCell;isSectionItem;isSectionModifier;sectionModifierType;onDisplay;isBooth;boothUser;constructor({id:e,cellsLong:t,cellsTall:r,initialElement:s,name:o,icon:a,moveable:u,starterItem:h,displayItem:d,sectionCell:g,rotation:I,isSectionItem:E,sectionModifierType:R,isSectionModifier:S,hasMoved:k,onDisplay:D,isBooth:U,boothUser:H}){this.id=e,this.cellsLong=t,this.cellsTall=r,this.hasMoved=k||!1,this.initialElement=s,this.name=o,this.icon=a,this.rotation=I||0,this.moveable=u??!0,this.starterItem=h??!1,this.onDisplay=D??!1,this.isDisplayItem=d??!1,this.sectionCell=g,this.isSectionItem=E??!1,this.isSectionModifier=S??!1,this.sectionModifierType=R,this.isBooth=U||!1,this.boothUser=H||null}static fromDoc(e){return new Ae({id:e.id,name:e.name,icon:e.icon,cellsLong:e.cellsLong,cellsTall:e.cellsTall,moveable:e.moveable,starterItem:e.starterItem,displayItem:e.displayItem||!1,rotation:e.rotation||0,isSectionItem:e.isSectionItem||!1,isBooth:e.isBooth||!1,boothUser:e.boothUser?ct.fromDoc(e.boothUser):null,isSectionModifier:e.isSectionModifier||!1,sectionModifierType:e.sectionModifierType==""?void 0:e.sectionModifierType})}static fromJSON(e){return new Ae({id:e.id,name:e.name,icon:e.icon,cellsLong:e.cellsLong,cellsTall:e.cellsTall,moveable:e.moveable,starterItem:e.starterItem,displayItem:e.displayItem||!1,isBooth:e.isBooth||!1,boothUser:e.boothUser?ct.fromJSON(e.boothUser):null,rotation:e.rotation||0,isSectionItem:e.isSectionItem||!1,isSectionModifier:e.isSectionModifier||!1,sectionModifierType:e.sectionModifierType==""?void 0:e.sectionModifierType})}toJSON(){return{id:this.id,name:this.name,icon:this.icon,cellsLong:this.cellsLong,cellsTall:this.cellsTall,moveable:this.moveable,starterItem:this.starterItem,displayItem:this.isDisplayItem,isBooth:this.isBooth||!1,boothUser:this.boothUser?this.boothUser.toJSON():null,rotation:this.rotation||0,isSectionItem:this.isSectionItem||!1,isSectionModifier:this.isSectionModifier||!1,sectionModifierType:this.sectionModifierType||""}}toDoc(){return{id:this.id,name:this.name,icon:this.icon,cellsLong:this.cellsLong,cellsTall:this.cellsTall,moveable:this.moveable,isBooth:this.isBooth||!1,boothUser:this.boothUser?this.boothUser.toDoc():null,starterItem:this.starterItem,displayItem:this.isDisplayItem,isSectionItem:this.isSectionItem||!1,isSectionModifier:this.isSectionModifier||!1,sectionModifierType:this.sectionModifierType||"",rotation:this.rotation||0}}}class ke{item;quantity;constructor({item:e,quantity:t}){this.item=e,this.quantity=t}static fromDoc(e){return new ke({item:Ae.fromDoc(e.item),quantity:e.quantity})}static fromJSON(e){return new ke({item:Ae.fromJSON(e.item),quantity:e.quantity})}toJSON(){return{item:this.item.toJSON(),quantity:this.quantity}}toDoc(){return{item:this.item.toDoc(),quantity:this.quantity}}}class Ut{cell;item;constructor({cell:e,item:t}){this.cell=e,this.item=t}static fromDoc(e){return new Ut({cell:Be.fromString(e.cell),item:Ae.fromDoc(e.item)})}static fromJSON(e){return new Ut({cell:Be.fromString(e.cell),item:Ae.fromJSON(e.item)})}toJSON(){return{cell:this.cell.toId(),item:this.item.toJSON()}}toDoc(){return{cell:this.cell.toId(),item:this.item.toDoc()}}}class be{name;cellId;cellElement;cellsLong;cellsTall;startingItems;items;modifierItems;booths;constructor({name:e,cellId:t,cellsLong:r,cellsTall:s,startingItems:o,items:a,modifierItems:u,booths:h}){this.name=e,this.cellId=t,this.cellsLong=r,this.cellsTall=s,this.startingItems=o,this.cellElement=null,this.items=a||[],this.modifierItems=u,this.booths=h||[]}static fromJSON(e){const t=JSON.parse(e);return new be({name:t.name,cellId:Be.fromString(t.cellId),cellsLong:t.cellsLong,cellsTall:t.cellsTall,startingItems:t.startingItems.map(r=>new Ut({cell:Be.fromString(r.cell),item:Ae.fromJSON(r.item)})),items:t.items?t.items.map(r=>Ae.fromJSON(r)):[],modifierItems:t.modifierItems?t.modifierItems.map(r=>Ut.fromJSON(r)):[],booths:t.booths?t.booths.map(r=>hr.fromJSON(r)):[]})}static fromDoc(e){return new be({name:e.name,cellId:Be.fromString(e.cellId),cellsLong:e.cellsLong,cellsTall:e.cellsTall,startingItems:e.startingItems?e.startingItems.map(t=>new Ut({cell:Be.fromString(t.cell),item:Ae.fromDoc(t.item)})):[],items:e.items?e.items.map(t=>Ae.fromDoc(t)):[],modifierItems:e.modifierItems?e.modifierItems.map(t=>Ut.fromDoc(t)):[],booths:e.booths?e.booths.map(t=>hr.fromDoc(t)):[]})}toJSON(){return{name:this.name,cellId:this.cellId.toId(),cellsLong:this.cellsLong,cellsTall:this.cellsTall,startingItems:this.startingItems.map(e=>({cell:e.cell.toId(),item:e.item.toJSON()})),items:this.items.map(e=>e.toJSON()),modifierItems:this.modifierItems.map(e=>e.toJSON()),booths:this.booths.map(e=>e.toJSON())}}toDoc(){return console.log("Section toDoc",this.items),{name:this.name,cellId:this.cellId.toId(),cellsLong:this.cellsLong,cellsTall:this.cellsTall,startingItems:this.startingItems.map(e=>({cell:e.cell.toId(),item:e.item.toDoc()})),items:this.items.map(e=>e.toDoc()),modifierItems:this.modifierItems.map(e=>e.toDoc()),booths:this.booths.map(e=>e.toDoc())}}}class lr{name;sections;id;previewImage;inventoryItems;constructor({name:e,sections:t,id:r,previewImage:s,inventoryItems:o}){this.name=e,this.sections=t,this.id=r,this.previewImage=s,this.inventoryItems=o}toJSON(){return JSON.stringify({name:this.name,id:this.id,sections:this.sections.map(e=>e.toJSON()),previewImage:this.previewImage,inventoryItems:this.inventoryItems.map(e=>e.toJSON())})}toDoc(){return{name:this.name,id:this.id,sections:this.sections.map(e=>e.toDoc()),previewImage:this.previewImage,inventoryItems:this.inventoryItems.map(e=>e.toDoc())}}static fromJSON(e){const t=JSON.parse(e);return new lr({name:t.name,id:t.id,sections:t.sections.map(r=>be.fromJSON(r)),previewImage:t.previewImage,inventoryItems:t.inventoryItems?t.inventoryItems.map(r=>ke.fromJSON(r)):[]})}static fromDoc(e){return new lr({name:e.name,id:e.id,sections:e.sections?e.sections.map(t=>be.fromDoc(t)):[],previewImage:e.previewImage,inventoryItems:e.inventoryItems?e.inventoryItems.map(t=>ke.fromDoc(t)):[]})}}class In{id;name;sections;templates;inventoryItems;previewImage;width;height;constructor({name:e,sections:t,templates:r,inventoryItems:s,id:o,previewImage:a,width:u,height:h}){this.name=e,this.sections=t,this.templates=r,this.inventoryItems=s,this.id=o,this.previewImage=a,this.width=u,this.height=h}static fromDoc(e){return new In({name:e.name,id:e.id,sections:e.sections?e.sections.map(t=>be.fromDoc(t)):[],templates:e.templates?e.templates.map(t=>lr.fromDoc(t)):[],inventoryItems:e.inventoryItems?e.inventoryItems.map(t=>ke.fromDoc(t)):[],previewImage:e.previewImage||"",width:e.width,height:e.height})}static fromJSON(e){return new In({name:e.name,id:e.id,sections:e.sections?e.sections.map(t=>be.fromJSON(t)):[],templates:e.templates?e.templates.map(t=>lr.fromJSON(t)):[],inventoryItems:e.inventoryItems?e.inventoryItems.map(t=>ke.fromJSON(t)):[],previewImage:e.previewImage||"",width:e.width,height:e.height})}toJSON(){return{name:this.name,id:this.id,sections:this.sections.map(e=>e.toJSON()),templates:this.templates.map(e=>e.toJSON()),inventoryItems:this.inventoryItems.map(e=>e.toJSON()),previewImage:this.previewImage,width:this.width,height:this.height}}toDoc(){return{name:this.name,id:this.id,sections:this.sections.map(e=>e.toDoc()),templates:this.templates.map(e=>e.toDoc()),inventoryItems:this.inventoryItems.map(e=>e.toDoc()),previewImage:this.previewImage||"",width:this.width,height:this.height}}}class Os{name;id;code;users;supportEmail;constructor({name:e,id:t,code:r,users:s,supportEmail:o}){this.name=e,this.id=t,this.code=r,this.users=s,this.supportEmail=o||""}static fromDoc(e){return new Os({name:e.name,id:e.id,code:e.code,users:e.users||[],supportEmail:e.supportEmail||""})}toDoc(){return{name:this.name,id:this.id,code:this.code,users:this.users||[],supportEmail:this.supportEmail||""}}}class Ms{id;name;areaId;previewImage;sections;inventoryItems;constructor({id:e,name:t,areaId:r,previewImage:s,sections:o,inventoryItems:a}){this.id=e,this.name=t,this.areaId=r,this.previewImage=s,this.sections=o,this.inventoryItems=a}static fromDoc(e){return new Ms({id:e.id,name:e.name,areaId:e.areaId,previewImage:e.previewImage||"",sections:e.sections?e.sections.map(t=>be.fromDoc(t)):[],inventoryItems:e.inventoryItems?e.inventoryItems.map(t=>ke.fromDoc(t)):[]})}toDoc(){return{id:this.id,name:this.name,areaId:this.areaId,previewImage:this.previewImage||"",sections:this.sections.map(e=>e.toDoc()),inventoryItems:this.inventoryItems.map(e=>e.toDoc())}}}const iy=[new Ae({id:"rectangular-table",name:"Rectangular Table",icon:"https://firebasestorage.googleapis.com/v0/b/kazoom-layitout.firebasestorage.app/o/public%2Frectangle_Table.png?alt=media&token=b6a58b65-3082-4fa7-93a4-f93b71c01dc8",cellsLong:8,cellsTall:4,moveable:!0,starterItem:!0,displayItem:!0}),new Ae({id:"rounded-table",name:"Rounded Table",icon:"https://firebasestorage.googleapis.com/v0/b/kazoom-layitout.firebasestorage.app/o/public%2Frounded_table.png?alt=media&token=f7c546ad-0247-420e-a146-46346751de00",cellsLong:4,cellsTall:4,moveable:!0,starterItem:!0,displayItem:!0}),new Ae({id:"chair",name:"Chair",icon:"https://firebasestorage.googleapis.com/v0/b/kazoom-layitout.firebasestorage.app/o/public%2FChair.png?alt=media&token=cde7cf8c-35d5-40da-a0ff-7cc96fd1996d",cellsLong:2,cellsTall:2,moveable:!0,starterItem:!0,displayItem:!0})];class ct{businessName;id;plotWidth;plotHeight;constructor({businessName:e,id:t,plotWidth:r,plotHeight:s}){this.businessName=e,this.id=t,this.plotWidth=r,this.plotHeight=s}static fromDoc(e){return new ct({businessName:e.businessName,id:e.id,plotWidth:e.plotWidth,plotHeight:e.plotHeight})}toDoc(){return{businessName:this.businessName,id:this.id,plotWidth:this.plotWidth,plotHeight:this.plotHeight}}static fromJSON(e){return new ct({businessName:e.businessName,id:e.id,plotWidth:e.plotWidth,plotHeight:e.plotHeight})}toJSON(){return{businessName:this.businessName,id:this.id,plotWidth:this.plotWidth,plotHeight:this.plotHeight}}}class hr{cellsLong;cellsTall;name;id;cell;user;initialElement;constructor({cellsLong:e,cellsTall:t,name:r,id:s,cell:o,user:a,initialElement:u}){this.cellsLong=e,this.cellsTall=t,this.name=r,this.id=s,this.cell=o,this.user=a||null,this.initialElement=u||null}static fromDoc(e){return new hr({cellsLong:e.cellsLong,cellsTall:e.cellsTall,name:e.name,id:e.id,cell:Be.fromString(e.cellId),user:e.user?ct.fromDoc(e.user):null})}toDoc(){return{cellsLong:this.cellsLong,cellsTall:this.cellsTall,name:this.name,id:this.id,cellId:this.cell.toId(),user:this.user?this.user.toDoc():null}}static fromJSON(e){return new hr({cellsLong:e.cellsLong,cellsTall:e.cellsTall,name:e.name,id:e.id,cell:Be.fromString(e.cellId),user:e.user?ct.fromJSON(e.user):null})}toJSON(){return{cellsLong:this.cellsLong,cellsTall:this.cellsTall,name:this.name,id:this.id,cellId:this.cell.toId(),user:this.user?this.user.toJSON():null}}}class dr{name;id;areaId;sections;inventoryItems;previewImage;vendors;constructor({name:e,id:t,areaId:r,sections:s,inventoryItems:o,previewImage:a,vendors:u}){this.name=e,this.id=t,this.areaId=r,this.sections=s,this.inventoryItems=o,this.previewImage=a,this.vendors=u||[]}static fromDoc(e){return new dr({name:e.name,id:e.id,areaId:e.areaId,sections:e.sections?e.sections.map(t=>be.fromDoc(t)):[],inventoryItems:e.inventoryItems?e.inventoryItems.map(t=>ke.fromDoc(t)):[],previewImage:e.previewImage||"",vendors:e.vendors?e.vendors.map(t=>ct.fromDoc(t)):[]})}toDoc(){return{name:this.name,id:this.id,areaId:this.areaId,sections:this.sections.map(e=>e.toDoc()),inventoryItems:this.inventoryItems.map(e=>e.toDoc()),previewImage:this.previewImage||"",vendors:this.vendors.map(e=>e.toDoc())}}static fromJSON(e){return new dr({name:e.name,id:e.id,areaId:e.areaId,sections:e.sections?e.sections.map(t=>be.fromJSON(t)):[],inventoryItems:e.inventoryItems?e.inventoryItems.map(t=>ke.fromJSON(t)):[],previewImage:e.previewImage||"",vendors:e.vendors?e.vendors.map(t=>ct.fromJSON(t)):[]})}toJSON(){return{name:this.name,id:this.id,areaId:this.areaId,sections:this.sections.map(e=>e.toJSON()),inventoryItems:this.inventoryItems.map(e=>e.toJSON()),previewImage:this.previewImage||"",vendors:this.vendors.map(e=>e.toJSON())}}}let Bl=class Gi{id;name;constructor({id:e,name:t}){this.id=e,this.name=t}static fromDoc(e){return new Gi({id:e.id,name:e.name})}toDoc(){return{id:this.id,name:this.name}}static fromJSON(e){return new Gi({id:e.id,name:e.name})}toJSON(){return{id:this.id,name:this.name}}};const je=Lm(Rl);async function oy(n,e){return ml(je,To).then(async()=>{try{return await _A(je,n,e),console.log(je.currentUser),localStorage.setItem("userId",je.currentUser.uid),new Bl({id:je.currentUser.uid,name:je.currentUser.displayName||"null"})}catch{return!1}})}async function ay(){return localStorage.removeItem("userId"),bA(je)}async function cy(n,e,t){return ml(je,To).then(async()=>{console.log("Registering user");try{return TA(je,n,e).then(r=>(localStorage.setItem("userId",r.user.uid),wA(r.user,{displayName:t}).then(()=>{console.log("User profile updated")}).catch(s=>{console.error("Error updating user profile:",s)}),new Bl({id:r.user.uid,name:r.user.displayName||t})))}catch{return!1}})}async function uy(n){console.log("Checking if user is logged in"),BA(je,e=>{if(e)console.log("User is logged in"),console.log(e),localStorage.setItem("userId",e.uid),console.log(window.location.pathname),window.location.pathname.includes("/Login/")&&(window.location.href="/LayItOut/");else{if(window.location.pathname==="/Login/")return;window.location.href="/LayItOut/Login/?redirect="+window.location.pathname+window.location.search.replace(/&/g,"~")}})}var Mc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pt,bl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,A){function p(){}p.prototype=A.prototype,T.D=A.prototype,T.prototype=new p,T.prototype.constructor=T,T.C=function(y,C,v){for(var m=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)m[$e-2]=arguments[$e];return A.prototype[C].apply(y,m)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,A,p){p||(p=0);var y=Array(16);if(typeof A=="string")for(var C=0;16>C;++C)y[C]=A.charCodeAt(p++)|A.charCodeAt(p++)<<8|A.charCodeAt(p++)<<16|A.charCodeAt(p++)<<24;else for(C=0;16>C;++C)y[C]=A[p++]|A[p++]<<8|A[p++]<<16|A[p++]<<24;A=T.g[0],p=T.g[1],C=T.g[2];var v=T.g[3],m=A+(v^p&(C^v))+y[0]+3614090360&4294967295;A=p+(m<<7&4294967295|m>>>25),m=v+(C^A&(p^C))+y[1]+3905402710&4294967295,v=A+(m<<12&4294967295|m>>>20),m=C+(p^v&(A^p))+y[2]+606105819&4294967295,C=v+(m<<17&4294967295|m>>>15),m=p+(A^C&(v^A))+y[3]+3250441966&4294967295,p=C+(m<<22&4294967295|m>>>10),m=A+(v^p&(C^v))+y[4]+4118548399&4294967295,A=p+(m<<7&4294967295|m>>>25),m=v+(C^A&(p^C))+y[5]+1200080426&4294967295,v=A+(m<<12&4294967295|m>>>20),m=C+(p^v&(A^p))+y[6]+2821735955&4294967295,C=v+(m<<17&4294967295|m>>>15),m=p+(A^C&(v^A))+y[7]+4249261313&4294967295,p=C+(m<<22&4294967295|m>>>10),m=A+(v^p&(C^v))+y[8]+1770035416&4294967295,A=p+(m<<7&4294967295|m>>>25),m=v+(C^A&(p^C))+y[9]+2336552879&4294967295,v=A+(m<<12&4294967295|m>>>20),m=C+(p^v&(A^p))+y[10]+4294925233&4294967295,C=v+(m<<17&4294967295|m>>>15),m=p+(A^C&(v^A))+y[11]+2304563134&4294967295,p=C+(m<<22&4294967295|m>>>10),m=A+(v^p&(C^v))+y[12]+1804603682&4294967295,A=p+(m<<7&4294967295|m>>>25),m=v+(C^A&(p^C))+y[13]+4254626195&4294967295,v=A+(m<<12&4294967295|m>>>20),m=C+(p^v&(A^p))+y[14]+2792965006&4294967295,C=v+(m<<17&4294967295|m>>>15),m=p+(A^C&(v^A))+y[15]+1236535329&4294967295,p=C+(m<<22&4294967295|m>>>10),m=A+(C^v&(p^C))+y[1]+4129170786&4294967295,A=p+(m<<5&4294967295|m>>>27),m=v+(p^C&(A^p))+y[6]+3225465664&4294967295,v=A+(m<<9&4294967295|m>>>23),m=C+(A^p&(v^A))+y[11]+643717713&4294967295,C=v+(m<<14&4294967295|m>>>18),m=p+(v^A&(C^v))+y[0]+3921069994&4294967295,p=C+(m<<20&4294967295|m>>>12),m=A+(C^v&(p^C))+y[5]+3593408605&4294967295,A=p+(m<<5&4294967295|m>>>27),m=v+(p^C&(A^p))+y[10]+38016083&4294967295,v=A+(m<<9&4294967295|m>>>23),m=C+(A^p&(v^A))+y[15]+3634488961&4294967295,C=v+(m<<14&4294967295|m>>>18),m=p+(v^A&(C^v))+y[4]+3889429448&4294967295,p=C+(m<<20&4294967295|m>>>12),m=A+(C^v&(p^C))+y[9]+568446438&4294967295,A=p+(m<<5&4294967295|m>>>27),m=v+(p^C&(A^p))+y[14]+3275163606&4294967295,v=A+(m<<9&4294967295|m>>>23),m=C+(A^p&(v^A))+y[3]+4107603335&4294967295,C=v+(m<<14&4294967295|m>>>18),m=p+(v^A&(C^v))+y[8]+1163531501&4294967295,p=C+(m<<20&4294967295|m>>>12),m=A+(C^v&(p^C))+y[13]+2850285829&4294967295,A=p+(m<<5&4294967295|m>>>27),m=v+(p^C&(A^p))+y[2]+4243563512&4294967295,v=A+(m<<9&4294967295|m>>>23),m=C+(A^p&(v^A))+y[7]+1735328473&4294967295,C=v+(m<<14&4294967295|m>>>18),m=p+(v^A&(C^v))+y[12]+2368359562&4294967295,p=C+(m<<20&4294967295|m>>>12),m=A+(p^C^v)+y[5]+4294588738&4294967295,A=p+(m<<4&4294967295|m>>>28),m=v+(A^p^C)+y[8]+2272392833&4294967295,v=A+(m<<11&4294967295|m>>>21),m=C+(v^A^p)+y[11]+1839030562&4294967295,C=v+(m<<16&4294967295|m>>>16),m=p+(C^v^A)+y[14]+4259657740&4294967295,p=C+(m<<23&4294967295|m>>>9),m=A+(p^C^v)+y[1]+2763975236&4294967295,A=p+(m<<4&4294967295|m>>>28),m=v+(A^p^C)+y[4]+1272893353&4294967295,v=A+(m<<11&4294967295|m>>>21),m=C+(v^A^p)+y[7]+4139469664&4294967295,C=v+(m<<16&4294967295|m>>>16),m=p+(C^v^A)+y[10]+3200236656&4294967295,p=C+(m<<23&4294967295|m>>>9),m=A+(p^C^v)+y[13]+681279174&4294967295,A=p+(m<<4&4294967295|m>>>28),m=v+(A^p^C)+y[0]+3936430074&4294967295,v=A+(m<<11&4294967295|m>>>21),m=C+(v^A^p)+y[3]+3572445317&4294967295,C=v+(m<<16&4294967295|m>>>16),m=p+(C^v^A)+y[6]+76029189&4294967295,p=C+(m<<23&4294967295|m>>>9),m=A+(p^C^v)+y[9]+3654602809&4294967295,A=p+(m<<4&4294967295|m>>>28),m=v+(A^p^C)+y[12]+3873151461&4294967295,v=A+(m<<11&4294967295|m>>>21),m=C+(v^A^p)+y[15]+530742520&4294967295,C=v+(m<<16&4294967295|m>>>16),m=p+(C^v^A)+y[2]+3299628645&4294967295,p=C+(m<<23&4294967295|m>>>9),m=A+(C^(p|~v))+y[0]+4096336452&4294967295,A=p+(m<<6&4294967295|m>>>26),m=v+(p^(A|~C))+y[7]+1126891415&4294967295,v=A+(m<<10&4294967295|m>>>22),m=C+(A^(v|~p))+y[14]+2878612391&4294967295,C=v+(m<<15&4294967295|m>>>17),m=p+(v^(C|~A))+y[5]+4237533241&4294967295,p=C+(m<<21&4294967295|m>>>11),m=A+(C^(p|~v))+y[12]+1700485571&4294967295,A=p+(m<<6&4294967295|m>>>26),m=v+(p^(A|~C))+y[3]+2399980690&4294967295,v=A+(m<<10&4294967295|m>>>22),m=C+(A^(v|~p))+y[10]+4293915773&4294967295,C=v+(m<<15&4294967295|m>>>17),m=p+(v^(C|~A))+y[1]+2240044497&4294967295,p=C+(m<<21&4294967295|m>>>11),m=A+(C^(p|~v))+y[8]+1873313359&4294967295,A=p+(m<<6&4294967295|m>>>26),m=v+(p^(A|~C))+y[15]+4264355552&4294967295,v=A+(m<<10&4294967295|m>>>22),m=C+(A^(v|~p))+y[6]+2734768916&4294967295,C=v+(m<<15&4294967295|m>>>17),m=p+(v^(C|~A))+y[13]+1309151649&4294967295,p=C+(m<<21&4294967295|m>>>11),m=A+(C^(p|~v))+y[4]+4149444226&4294967295,A=p+(m<<6&4294967295|m>>>26),m=v+(p^(A|~C))+y[11]+3174756917&4294967295,v=A+(m<<10&4294967295|m>>>22),m=C+(A^(v|~p))+y[2]+718787259&4294967295,C=v+(m<<15&4294967295|m>>>17),m=p+(v^(C|~A))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+A&4294967295,T.g[1]=T.g[1]+(C+(m<<21&4294967295|m>>>11))&4294967295,T.g[2]=T.g[2]+C&4294967295,T.g[3]=T.g[3]+v&4294967295}r.prototype.u=function(T,A){A===void 0&&(A=T.length);for(var p=A-this.blockSize,y=this.B,C=this.h,v=0;v<A;){if(C==0)for(;v<=p;)s(this,T,v),v+=this.blockSize;if(typeof T=="string"){for(;v<A;)if(y[C++]=T.charCodeAt(v++),C==this.blockSize){s(this,y),C=0;break}}else for(;v<A;)if(y[C++]=T[v++],C==this.blockSize){s(this,y),C=0;break}}this.h=C,this.o+=A},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var A=1;A<T.length-8;++A)T[A]=0;var p=8*this.o;for(A=T.length-8;A<T.length;++A)T[A]=p&255,p/=256;for(this.u(T),T=Array(16),A=p=0;4>A;++A)for(var y=0;32>y;y+=8)T[p++]=this.g[A]>>>y&255;return T};function o(T,A){var p=u;return Object.prototype.hasOwnProperty.call(p,T)?p[T]:p[T]=A(T)}function a(T,A){this.h=A;for(var p=[],y=!0,C=T.length-1;0<=C;C--){var v=T[C]|0;y&&v==A||(p[C]=v,y=!1)}this.g=p}var u={};function h(T){return-128<=T&&128>T?o(T,function(A){return new a([A|0],0>A?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return I;if(0>T)return D(d(-T));for(var A=[],p=1,y=0;T>=p;y++)A[y]=T/p|0,p*=4294967296;return new a(A,0)}function g(T,A){if(T.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(T.charAt(0)=="-")return D(g(T.substring(1),A));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=d(Math.pow(A,8)),y=I,C=0;C<T.length;C+=8){var v=Math.min(8,T.length-C),m=parseInt(T.substring(C,C+v),A);8>v?(v=d(Math.pow(A,v)),y=y.j(v).add(d(m))):(y=y.j(p),y=y.add(d(m)))}return y}var I=h(0),E=h(1),R=h(16777216);n=a.prototype,n.m=function(){if(k(this))return-D(this).m();for(var T=0,A=1,p=0;p<this.g.length;p++){var y=this.i(p);T+=(0<=y?y:4294967296+y)*A,A*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(S(this))return"0";if(k(this))return"-"+D(this).toString(T);for(var A=d(Math.pow(T,6)),p=this,y="";;){var C=he(p,A).g;p=U(p,C.j(A));var v=((0<p.g.length?p.g[0]:p.h)>>>0).toString(T);if(p=C,S(p))return v+y;for(;6>v.length;)v="0"+v;y=v+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function S(T){if(T.h!=0)return!1;for(var A=0;A<T.g.length;A++)if(T.g[A]!=0)return!1;return!0}function k(T){return T.h==-1}n.l=function(T){return T=U(this,T),k(T)?-1:S(T)?0:1};function D(T){for(var A=T.g.length,p=[],y=0;y<A;y++)p[y]=~T.g[y];return new a(p,~T.h).add(E)}n.abs=function(){return k(this)?D(this):this},n.add=function(T){for(var A=Math.max(this.g.length,T.g.length),p=[],y=0,C=0;C<=A;C++){var v=y+(this.i(C)&65535)+(T.i(C)&65535),m=(v>>>16)+(this.i(C)>>>16)+(T.i(C)>>>16);y=m>>>16,v&=65535,m&=65535,p[C]=m<<16|v}return new a(p,p[p.length-1]&-2147483648?-1:0)};function U(T,A){return T.add(D(A))}n.j=function(T){if(S(this)||S(T))return I;if(k(this))return k(T)?D(this).j(D(T)):D(D(this).j(T));if(k(T))return D(this.j(D(T)));if(0>this.l(R)&&0>T.l(R))return d(this.m()*T.m());for(var A=this.g.length+T.g.length,p=[],y=0;y<2*A;y++)p[y]=0;for(y=0;y<this.g.length;y++)for(var C=0;C<T.g.length;C++){var v=this.i(y)>>>16,m=this.i(y)&65535,$e=T.i(C)>>>16,Nn=T.i(C)&65535;p[2*y+2*C]+=m*Nn,H(p,2*y+2*C),p[2*y+2*C+1]+=v*Nn,H(p,2*y+2*C+1),p[2*y+2*C+1]+=m*$e,H(p,2*y+2*C+1),p[2*y+2*C+2]+=v*$e,H(p,2*y+2*C+2)}for(y=0;y<A;y++)p[y]=p[2*y+1]<<16|p[2*y];for(y=A;y<2*A;y++)p[y]=0;return new a(p,0)};function H(T,A){for(;(T[A]&65535)!=T[A];)T[A+1]+=T[A]>>>16,T[A]&=65535,A++}function W(T,A){this.g=T,this.h=A}function he(T,A){if(S(A))throw Error("division by zero");if(S(T))return new W(I,I);if(k(T))return A=he(D(T),A),new W(D(A.g),D(A.h));if(k(A))return A=he(T,D(A)),new W(D(A.g),A.h);if(30<T.g.length){if(k(T)||k(A))throw Error("slowDivide_ only works with positive integers.");for(var p=E,y=A;0>=y.l(T);)p=He(p),y=He(y);var C=pe(p,1),v=pe(y,1);for(y=pe(y,2),p=pe(p,2);!S(y);){var m=v.add(y);0>=m.l(T)&&(C=C.add(p),v=m),y=pe(y,1),p=pe(p,1)}return A=U(T,C.j(A)),new W(C,A)}for(C=I;0<=T.l(A);){for(p=Math.max(1,Math.floor(T.m()/A.m())),y=Math.ceil(Math.log(p)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),v=d(p),m=v.j(A);k(m)||0<m.l(T);)p-=y,v=d(p),m=v.j(A);S(v)&&(v=E),C=C.add(v),T=U(T,m)}return new W(C,T)}n.A=function(T){return he(this,T).h},n.and=function(T){for(var A=Math.max(this.g.length,T.g.length),p=[],y=0;y<A;y++)p[y]=this.i(y)&T.i(y);return new a(p,this.h&T.h)},n.or=function(T){for(var A=Math.max(this.g.length,T.g.length),p=[],y=0;y<A;y++)p[y]=this.i(y)|T.i(y);return new a(p,this.h|T.h)},n.xor=function(T){for(var A=Math.max(this.g.length,T.g.length),p=[],y=0;y<A;y++)p[y]=this.i(y)^T.i(y);return new a(p,this.h^T.h)};function He(T){for(var A=T.g.length+1,p=[],y=0;y<A;y++)p[y]=T.i(y)<<1|T.i(y-1)>>>31;return new a(p,T.h)}function pe(T,A){var p=A>>5;A%=32;for(var y=T.g.length-p,C=[],v=0;v<y;v++)C[v]=0<A?T.i(v+p)>>>A|T.i(v+p+1)<<32-A:T.i(v+p);return new a(C,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,bl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=g,Pt=a}).apply(typeof Mc<"u"?Mc:typeof self<"u"?self:typeof window<"u"?window:{});var Jr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sl,Zn,Dl,is,Xi,Ql,Nl,kl;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,c,l){return i==Array.prototype||i==Object.prototype||(i[c]=l.value),i};function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jr=="object"&&Jr];for(var c=0;c<i.length;++c){var l=i[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=t(this);function s(i,c){if(c)e:{var l=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var _=i[f];if(!(_ in l))break e;l=l[_]}i=i[i.length-1],f=l[i],c=c(f),c!=f&&c!=null&&e(l,i,{configurable:!0,writable:!0,value:c})}}function o(i,c){i instanceof String&&(i+="");var l=0,f=!1,_={next:function(){if(!f&&l<i.length){var w=l++;return{value:c(w,i[w]),done:!1}}return f=!0,{done:!0,value:void 0}}};return _[Symbol.iterator]=function(){return _},_}s("Array.prototype.values",function(i){return i||function(){return o(this,function(c,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(i){var c=typeof i;return c=c!="object"?c:i?Array.isArray(i)?"array":c:"null",c=="array"||c=="object"&&typeof i.length=="number"}function d(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function g(i,c,l){return i.call.apply(i.bind,arguments)}function I(i,c,l){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var _=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(_,f),i.apply(c,_)}}return function(){return i.apply(c,arguments)}}function E(i,c,l){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:I,E.apply(null,arguments)}function R(i,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function S(i,c){function l(){}l.prototype=c.prototype,i.aa=c.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(f,_,w){for(var b=Array(arguments.length-2),J=2;J<arguments.length;J++)b[J-2]=arguments[J];return c.prototype[_].apply(f,b)}}function k(i){const c=i.length;if(0<c){const l=Array(c);for(let f=0;f<c;f++)l[f]=i[f];return l}return[]}function D(i,c){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const _=i.length||0,w=f.length||0;i.length=_+w;for(let b=0;b<w;b++)i[_+b]=f[b]}else i.push(f)}}class U{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function H(i){return/^[\s\xa0]*$/.test(i)}function W(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function he(i){return he[" "](i),i}he[" "]=function(){};var He=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function pe(i,c,l){for(const f in i)c.call(l,i[f],f,i)}function T(i,c){for(const l in i)c.call(void 0,i[l],l,i)}function A(i){const c={};for(const l in i)c[l]=i[l];return c}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,c){let l,f;for(let _=1;_<arguments.length;_++){f=arguments[_];for(l in f)i[l]=f[l];for(let w=0;w<p.length;w++)l=p[w],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function C(i){var c=1;i=i.split(":");const l=[];for(;0<c&&i.length;)l.push(i.shift()),c--;return i.length&&l.push(i.join(":")),l}function v(i){u.setTimeout(()=>{throw i},0)}function m(){var i=ri;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class $e{constructor(){this.h=this.g=null}add(c,l){const f=Nn.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var Nn=new U(()=>new od,i=>i.reset());class od{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let kn,On=!1,ri=new $e,oa=()=>{const i=u.Promise.resolve(void 0);kn=()=>{i.then(ad)}};var ad=()=>{for(var i;i=m();){try{i.h.call(i.g)}catch(l){v(l)}var c=Nn;c.j(i),100>c.h&&(c.h++,i.next=c.g,c.g=i)}On=!1};function ft(){this.s=this.s,this.C=this.C}ft.prototype.s=!1,ft.prototype.ma=function(){this.s||(this.s=!0,this.N())},ft.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var cd=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};u.addEventListener("test",l,c),u.removeEventListener("test",l,c)}catch{}return i}();function Mn(i,c){if(Ie.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget){if(He){e:{try{he(c.nodeName);var _=!0;break e}catch{}_=!1}_||(c=null)}}else l=="mouseover"?c=i.fromElement:l=="mouseout"&&(c=i.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:ud[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Mn.aa.h.call(this)}}S(Mn,Ie);var ud={2:"touch",3:"pen",4:"mouse"};Mn.prototype.h=function(){Mn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Sr="closure_listenable_"+(1e6*Math.random()|0),ld=0;function hd(i,c,l,f,_){this.listener=i,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=_,this.key=++ld,this.da=this.fa=!1}function Dr(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Qr(i){this.src=i,this.g={},this.h=0}Qr.prototype.add=function(i,c,l,f,_){var w=i.toString();i=this.g[w],i||(i=this.g[w]=[],this.h++);var b=ii(i,c,f,_);return-1<b?(c=i[b],l||(c.fa=!1)):(c=new hd(c,this.src,w,!!f,_),c.fa=l,i.push(c)),c};function si(i,c){var l=c.type;if(l in i.g){var f=i.g[l],_=Array.prototype.indexOf.call(f,c,void 0),w;(w=0<=_)&&Array.prototype.splice.call(f,_,1),w&&(Dr(c),i.g[l].length==0&&(delete i.g[l],i.h--))}}function ii(i,c,l,f){for(var _=0;_<i.length;++_){var w=i[_];if(!w.da&&w.listener==c&&w.capture==!!l&&w.ha==f)return _}return-1}var oi="closure_lm_"+(1e6*Math.random()|0),ai={};function aa(i,c,l,f,_){if(Array.isArray(c)){for(var w=0;w<c.length;w++)aa(i,c[w],l,f,_);return null}return l=la(l),i&&i[Sr]?i.K(c,l,d(f)?!!f.capture:!1,_):dd(i,c,l,!1,f,_)}function dd(i,c,l,f,_,w){if(!c)throw Error("Invalid event type");var b=d(_)?!!_.capture:!!_,J=ui(i);if(J||(i[oi]=J=new Qr(i)),l=J.add(c,l,f,b,w),l.proxy)return l;if(f=fd(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)cd||(_=b),_===void 0&&(_=!1),i.addEventListener(c.toString(),f,_);else if(i.attachEvent)i.attachEvent(ua(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function fd(){function i(l){return c.call(i.src,i.listener,l)}const c=gd;return i}function ca(i,c,l,f,_){if(Array.isArray(c))for(var w=0;w<c.length;w++)ca(i,c[w],l,f,_);else f=d(f)?!!f.capture:!!f,l=la(l),i&&i[Sr]?(i=i.i,c=String(c).toString(),c in i.g&&(w=i.g[c],l=ii(w,l,f,_),-1<l&&(Dr(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete i.g[c],i.h--)))):i&&(i=ui(i))&&(c=i.g[c.toString()],i=-1,c&&(i=ii(c,l,f,_)),(l=-1<i?c[i]:null)&&ci(l))}function ci(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[Sr])si(c.i,i);else{var l=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(l,f,i.capture):c.detachEvent?c.detachEvent(ua(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=ui(c))?(si(l,i),l.h==0&&(l.src=null,c[oi]=null)):Dr(i)}}}function ua(i){return i in ai?ai[i]:ai[i]="on"+i}function gd(i,c){if(i.da)i=!0;else{c=new Mn(c,this);var l=i.listener,f=i.ha||i.src;i.fa&&ci(i),i=l.call(f,c)}return i}function ui(i){return i=i[oi],i instanceof Qr?i:null}var li="__closure_events_fn_"+(1e9*Math.random()>>>0);function la(i){return typeof i=="function"?i:(i[li]||(i[li]=function(c){return i.handleEvent(c)}),i[li])}function Ee(){ft.call(this),this.i=new Qr(this),this.M=this,this.F=null}S(Ee,ft),Ee.prototype[Sr]=!0,Ee.prototype.removeEventListener=function(i,c,l,f){ca(this,i,c,l,f)};function Pe(i,c){var l,f=i.F;if(f)for(l=[];f;f=f.F)l.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new Ie(c,i);else if(c instanceof Ie)c.target=c.target||i;else{var _=c;c=new Ie(f,i),y(c,_)}if(_=!0,l)for(var w=l.length-1;0<=w;w--){var b=c.g=l[w];_=Nr(b,f,!0,c)&&_}if(b=c.g=i,_=Nr(b,f,!0,c)&&_,_=Nr(b,f,!1,c)&&_,l)for(w=0;w<l.length;w++)b=c.g=l[w],_=Nr(b,f,!1,c)&&_}Ee.prototype.N=function(){if(Ee.aa.N.call(this),this.i){var i=this.i,c;for(c in i.g){for(var l=i.g[c],f=0;f<l.length;f++)Dr(l[f]);delete i.g[c],i.h--}}this.F=null},Ee.prototype.K=function(i,c,l,f){return this.i.add(String(i),c,!1,l,f)},Ee.prototype.L=function(i,c,l,f){return this.i.add(String(i),c,!0,l,f)};function Nr(i,c,l,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();for(var _=!0,w=0;w<c.length;++w){var b=c[w];if(b&&!b.da&&b.capture==l){var J=b.listener,de=b.ha||b.src;b.fa&&si(i.i,b),_=J.call(de,f)!==!1&&_}}return _&&!f.defaultPrevented}function ha(i,c,l){if(typeof i=="function")l&&(i=E(i,l));else if(i&&typeof i.handleEvent=="function")i=E(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(i,c||0)}function da(i){i.g=ha(()=>{i.g=null,i.i&&(i.i=!1,da(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Ad extends ft{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:da(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vn(i){ft.call(this),this.h=i,this.g={}}S(Vn,ft);var fa=[];function ga(i){pe(i.g,function(c,l){this.g.hasOwnProperty(l)&&ci(c)},i),i.g={}}Vn.prototype.N=function(){Vn.aa.N.call(this),ga(this)},Vn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hi=u.JSON.stringify,md=u.JSON.parse,pd=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function di(){}di.prototype.h=null;function Aa(i){return i.h||(i.h=i.i())}function ma(){}var xn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fi(){Ie.call(this,"d")}S(fi,Ie);function gi(){Ie.call(this,"c")}S(gi,Ie);var Vt={},pa=null;function kr(){return pa=pa||new Ee}Vt.La="serverreachability";function Ia(i){Ie.call(this,Vt.La,i)}S(Ia,Ie);function Ln(i){const c=kr();Pe(c,new Ia(c))}Vt.STAT_EVENT="statevent";function Ea(i,c){Ie.call(this,Vt.STAT_EVENT,i),this.stat=c}S(Ea,Ie);function Re(i){const c=kr();Pe(c,new Ea(c,i))}Vt.Ma="timingevent";function ya(i,c){Ie.call(this,Vt.Ma,i),this.size=c}S(ya,Ie);function Fn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},c)}function Hn(){this.g=!0}Hn.prototype.xa=function(){this.g=!1};function Id(i,c,l,f,_,w){i.info(function(){if(i.g)if(w)for(var b="",J=w.split("&"),de=0;de<J.length;de++){var G=J[de].split("=");if(1<G.length){var ye=G[0];G=G[1];var Ce=ye.split("_");b=2<=Ce.length&&Ce[1]=="type"?b+(ye+"="+G+"&"):b+(ye+"=redacted&")}}else b=null;else b=w;return"XMLHTTP REQ ("+f+") [attempt "+_+"]: "+c+`
`+l+`
`+b})}function Ed(i,c,l,f,_,w,b){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+_+"]: "+c+`
`+l+`
`+w+" "+b})}function tn(i,c,l,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+Cd(i,l)+(f?" "+f:"")})}function yd(i,c){i.info(function(){return"TIMEOUT: "+c})}Hn.prototype.info=function(){};function Cd(i,c){if(!i.g)return c;if(!c)return null;try{var l=JSON.parse(c);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var f=l[i];if(!(2>f.length)){var _=f[1];if(Array.isArray(_)&&!(1>_.length)){var w=_[0];if(w!="noop"&&w!="stop"&&w!="close")for(var b=1;b<_.length;b++)_[b]=""}}}}return hi(l)}catch{return c}}var Or={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ca={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ai;function Mr(){}S(Mr,di),Mr.prototype.g=function(){return new XMLHttpRequest},Mr.prototype.i=function(){return{}},Ai=new Mr;function gt(i,c,l,f){this.j=i,this.i=c,this.l=l,this.R=f||1,this.U=new Vn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ta}function Ta(){this.i=null,this.g="",this.h=!1}var _a={},mi={};function pi(i,c,l){i.L=1,i.v=Fr(et(c)),i.m=l,i.P=!0,va(i,null)}function va(i,c){i.F=Date.now(),Vr(i),i.A=et(i.v);var l=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),xa(l.i,"t",f),i.C=0,l=i.j.J,i.h=new Ta,i.g=nc(i.j,l?c:null,!i.m),0<i.O&&(i.M=new Ad(E(i.Y,i,i.g),i.O)),c=i.U,l=i.g,f=i.ca;var _="readystatechange";Array.isArray(_)||(_&&(fa[0]=_.toString()),_=fa);for(var w=0;w<_.length;w++){var b=aa(l,_[w],f||c.handleEvent,!1,c.h||c);if(!b)break;c.g[b.key]=b}c=i.H?A(i.H):{},i.m?(i.u||(i.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,c)):(i.u="GET",i.g.ea(i.A,i.u,null,c)),Ln(),Id(i.i,i.u,i.A,i.l,i.R,i.m)}gt.prototype.ca=function(i){i=i.target;const c=this.M;c&&tt(i)==3?c.j():this.Y(i)},gt.prototype.Y=function(i){try{if(i==this.g)e:{const Ce=tt(this.g);var c=this.g.Ba();const sn=this.g.Z();if(!(3>Ce)&&(Ce!=3||this.g&&(this.h.h||this.g.oa()||qa(this.g)))){this.J||Ce!=4||c==7||(c==8||0>=sn?Ln(3):Ln(2)),Ii(this);var l=this.g.Z();this.X=l;t:if(wa(this)){var f=qa(this.g);i="";var _=f.length,w=tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xt(this),Un(this);var b="";break t}this.h.i=new u.TextDecoder}for(c=0;c<_;c++)this.h.h=!0,i+=this.h.i.decode(f[c],{stream:!(w&&c==_-1)});f.length=0,this.h.g+=i,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=l==200,Ed(this.i,this.u,this.A,this.l,this.R,Ce,l),this.o){if(this.T&&!this.K){t:{if(this.g){var J,de=this.g;if((J=de.g?de.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(J)){var G=J;break t}}G=null}if(l=G)tn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ei(this,l);else{this.o=!1,this.s=3,Re(12),xt(this),Un(this);break e}}if(this.P){l=!0;let Ve;for(;!this.J&&this.C<b.length;)if(Ve=Td(this,b),Ve==mi){Ce==4&&(this.s=4,Re(14),l=!1),tn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ve==_a){this.s=4,Re(15),tn(this.i,this.l,b,"[Invalid Chunk]"),l=!1;break}else tn(this.i,this.l,Ve,null),Ei(this,Ve);if(wa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ce!=4||b.length!=0||this.h.h||(this.s=1,Re(16),l=!1),this.o=this.o&&l,!l)tn(this.i,this.l,b,"[Invalid Chunked Response]"),xt(this),Un(this);else if(0<b.length&&!this.W){this.W=!0;var ye=this.j;ye.g==this&&ye.ba&&!ye.M&&(ye.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),wi(ye),ye.M=!0,Re(11))}}else tn(this.i,this.l,b,null),Ei(this,b);Ce==4&&xt(this),this.o&&!this.J&&(Ce==4?Za(this.j,this):(this.o=!1,Vr(this)))}else Ld(this.g),l==400&&0<b.indexOf("Unknown SID")?(this.s=3,Re(12)):(this.s=0,Re(13)),xt(this),Un(this)}}}catch{}finally{}};function wa(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Td(i,c){var l=i.C,f=c.indexOf(`
`,l);return f==-1?mi:(l=Number(c.substring(l,f)),isNaN(l)?_a:(f+=1,f+l>c.length?mi:(c=c.slice(f,f+l),i.C=f+l,c)))}gt.prototype.cancel=function(){this.J=!0,xt(this)};function Vr(i){i.S=Date.now()+i.I,Pa(i,i.I)}function Pa(i,c){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Fn(E(i.ba,i),c)}function Ii(i){i.B&&(u.clearTimeout(i.B),i.B=null)}gt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(yd(this.i,this.A),this.L!=2&&(Ln(),Re(17)),xt(this),this.s=2,Un(this)):Pa(this,this.S-i)};function Un(i){i.j.G==0||i.J||Za(i.j,i)}function xt(i){Ii(i);var c=i.M;c&&typeof c.ma=="function"&&c.ma(),i.M=null,ga(i.U),i.g&&(c=i.g,i.g=null,c.abort(),c.ma())}function Ei(i,c){try{var l=i.j;if(l.G!=0&&(l.g==i||yi(l.h,i))){if(!i.K&&yi(l.h,i)&&l.G==3){try{var f=l.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var _=f;if(_[0]==0){e:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)Wr(l),zr(l);else break e;vi(l),Re(18)}}else l.za=_[1],0<l.za-l.T&&37500>_[2]&&l.F&&l.v==0&&!l.C&&(l.C=Fn(E(l.Za,l),6e3));if(1>=ba(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Ft(l,11)}else if((i.K||l.g==i)&&Wr(l),!H(c))for(_=l.Da.g.parse(c),c=0;c<_.length;c++){let G=_[c];if(l.T=G[0],G=G[1],l.G==2)if(G[0]=="c"){l.K=G[1],l.ia=G[2];const ye=G[3];ye!=null&&(l.la=ye,l.j.info("VER="+l.la));const Ce=G[4];Ce!=null&&(l.Aa=Ce,l.j.info("SVER="+l.Aa));const sn=G[5];sn!=null&&typeof sn=="number"&&0<sn&&(f=1.5*sn,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const Ve=i.g;if(Ve){const Gr=Ve.g?Ve.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gr){var w=f.h;w.g||Gr.indexOf("spdy")==-1&&Gr.indexOf("quic")==-1&&Gr.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Ci(w,w.h),w.h=null))}if(f.D){const Pi=Ve.g?Ve.g.getResponseHeader("X-HTTP-Session-Id"):null;Pi&&(f.ya=Pi,K(f.I,f.D,Pi))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var b=i;if(f.qa=tc(f,f.J?f.ia:null,f.W),b.K){Sa(f.h,b);var J=b,de=f.L;de&&(J.I=de),J.B&&(Ii(J),Vr(J)),f.g=b}else Ja(f);0<l.i.length&&qr(l)}else G[0]!="stop"&&G[0]!="close"||Ft(l,7);else l.G==3&&(G[0]=="stop"||G[0]=="close"?G[0]=="stop"?Ft(l,7):_i(l):G[0]!="noop"&&l.l&&l.l.ta(G),l.v=0)}}Ln(4)}catch{}}var _d=class{constructor(i,c){this.g=i,this.map=c}};function Ra(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ba(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function ba(i){return i.h?1:i.g?i.g.size:0}function yi(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function Ci(i,c){i.g?i.g.add(c):i.h=c}function Sa(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}Ra.prototype.cancel=function(){if(this.i=Da(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Da(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const l of i.g.values())c=c.concat(l.D);return c}return k(i.i)}function vd(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var c=[],l=i.length,f=0;f<l;f++)c.push(i[f]);return c}c=[],l=0;for(f in i)c[l++]=i[f];return c}function wd(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var c=[];i=i.length;for(var l=0;l<i;l++)c.push(l);return c}c=[],l=0;for(const f in i)c[l++]=f;return c}}}function Qa(i,c){if(i.forEach&&typeof i.forEach=="function")i.forEach(c,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,c,void 0);else for(var l=wd(i),f=vd(i),_=f.length,w=0;w<_;w++)c.call(void 0,f[w],l&&l[w],i)}var Na=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pd(i,c){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var f=i[l].indexOf("="),_=null;if(0<=f){var w=i[l].substring(0,f);_=i[l].substring(f+1)}else w=i[l];c(w,_?decodeURIComponent(_.replace(/\+/g," ")):"")}}}function Lt(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Lt){this.h=i.h,xr(this,i.j),this.o=i.o,this.g=i.g,Lr(this,i.s),this.l=i.l;var c=i.i,l=new qn;l.i=c.i,c.g&&(l.g=new Map(c.g),l.h=c.h),ka(this,l),this.m=i.m}else i&&(c=String(i).match(Na))?(this.h=!1,xr(this,c[1]||"",!0),this.o=jn(c[2]||""),this.g=jn(c[3]||"",!0),Lr(this,c[4]),this.l=jn(c[5]||"",!0),ka(this,c[6]||"",!0),this.m=jn(c[7]||"")):(this.h=!1,this.i=new qn(null,this.h))}Lt.prototype.toString=function(){var i=[],c=this.j;c&&i.push(zn(c,Oa,!0),":");var l=this.g;return(l||c=="file")&&(i.push("//"),(c=this.o)&&i.push(zn(c,Oa,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(zn(l,l.charAt(0)=="/"?bd:Bd,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",zn(l,Dd)),i.join("")};function et(i){return new Lt(i)}function xr(i,c,l){i.j=l?jn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Lr(i,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);i.s=c}else i.s=null}function ka(i,c,l){c instanceof qn?(i.i=c,Qd(i.i,i.h)):(l||(c=zn(c,Sd)),i.i=new qn(c,i.h))}function K(i,c,l){i.i.set(c,l)}function Fr(i){return K(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function jn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function zn(i,c,l){return typeof i=="string"?(i=encodeURI(i).replace(c,Rd),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Rd(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Oa=/[#\/\?@]/g,Bd=/[#\?:]/g,bd=/[#\?]/g,Sd=/[#\?@]/g,Dd=/#/g;function qn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function At(i){i.g||(i.g=new Map,i.h=0,i.i&&Pd(i.i,function(c,l){i.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=qn.prototype,n.add=function(i,c){At(this),this.i=null,i=nn(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(c),this.h+=1,this};function Ma(i,c){At(i),c=nn(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function Va(i,c){return At(i),c=nn(i,c),i.g.has(c)}n.forEach=function(i,c){At(this),this.g.forEach(function(l,f){l.forEach(function(_){i.call(c,_,f,this)},this)},this)},n.na=function(){At(this);const i=Array.from(this.g.values()),c=Array.from(this.g.keys()),l=[];for(let f=0;f<c.length;f++){const _=i[f];for(let w=0;w<_.length;w++)l.push(c[f])}return l},n.V=function(i){At(this);let c=[];if(typeof i=="string")Va(this,i)&&(c=c.concat(this.g.get(nn(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)c=c.concat(i[l])}return c},n.set=function(i,c){return At(this),this.i=null,i=nn(this,i),Va(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=this.V(i),0<i.length?String(i[0]):c):c};function xa(i,c,l){Ma(i,c),0<l.length&&(i.i=null,i.g.set(nn(i,c),k(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(var l=0;l<c.length;l++){var f=c[l];const w=encodeURIComponent(String(f)),b=this.V(f);for(f=0;f<b.length;f++){var _=w;b[f]!==""&&(_+="="+encodeURIComponent(String(b[f]))),i.push(_)}}return this.i=i.join("&")};function nn(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function Qd(i,c){c&&!i.j&&(At(i),i.i=null,i.g.forEach(function(l,f){var _=f.toLowerCase();f!=_&&(Ma(this,f),xa(this,_,l))},i)),i.j=c}function Nd(i,c){const l=new Hn;if(u.Image){const f=new Image;f.onload=R(mt,l,"TestLoadImage: loaded",!0,c,f),f.onerror=R(mt,l,"TestLoadImage: error",!1,c,f),f.onabort=R(mt,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=R(mt,l,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function kd(i,c){const l=new Hn,f=new AbortController,_=setTimeout(()=>{f.abort(),mt(l,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(w=>{clearTimeout(_),w.ok?mt(l,"TestPingServer: ok",!0,c):mt(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(_),mt(l,"TestPingServer: error",!1,c)})}function mt(i,c,l,f,_){try{_&&(_.onload=null,_.onerror=null,_.onabort=null,_.ontimeout=null),f(l)}catch{}}function Od(){this.g=new pd}function Md(i,c,l){const f=l||"";try{Qa(i,function(_,w){let b=_;d(_)&&(b=hi(_)),c.push(f+w+"="+encodeURIComponent(b))})}catch(_){throw c.push(f+"type="+encodeURIComponent("_badmap")),_}}function Hr(i){this.l=i.Ub||null,this.j=i.eb||!1}S(Hr,di),Hr.prototype.g=function(){return new Ur(this.l,this.j)},Hr.prototype.i=function(i){return function(){return i}}({});function Ur(i,c){Ee.call(this),this.D=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Ur,Ee),n=Ur.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=c,this.readyState=1,Yn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(c.body=i),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Yn(this)),this.g&&(this.readyState=3,Yn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;La(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function La(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Wn(this):Yn(this),this.readyState==3&&La(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Wn(this))},n.Qa=function(i){this.g&&(this.response=i,Wn(this))},n.ga=function(){this.g&&Wn(this)};function Wn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Yn(i)}n.setRequestHeader=function(i,c){this.u.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=c.next();return i.join(`\r
`)};function Yn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Ur.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Fa(i){let c="";return pe(i,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function Ti(i,c,l){e:{for(f in l){var f=!1;break e}f=!0}f||(l=Fa(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):K(i,c,l))}function te(i){Ee.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(te,Ee);var Vd=/^https?$/i,xd=["POST","PUT"];n=te.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ai.g(),this.v=this.o?Aa(this.o):Aa(Ai),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(w){Ha(this,w);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var _ in f)l.set(_,f[_]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const w of f.keys())l.set(w,f.get(w));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),_=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(xd,c,void 0))||f||_||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,b]of l)this.g.setRequestHeader(w,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{za(this),this.u=!0,this.g.send(i),this.u=!1}catch(w){Ha(this,w)}};function Ha(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.m=5,Ua(i),jr(i)}function Ua(i){i.A||(i.A=!0,Pe(i,"complete"),Pe(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Pe(this,"complete"),Pe(this,"abort"),jr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jr(this,!0)),te.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ja(this):this.bb())},n.bb=function(){ja(this)};function ja(i){if(i.h&&typeof a<"u"&&(!i.v[1]||tt(i)!=4||i.Z()!=2)){if(i.u&&tt(i)==4)ha(i.Ea,0,i);else if(Pe(i,"readystatechange"),tt(i)==4){i.h=!1;try{const b=i.Z();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var l;if(!(l=c)){var f;if(f=b===0){var _=String(i.D).match(Na)[1]||null;!_&&u.self&&u.self.location&&(_=u.self.location.protocol.slice(0,-1)),f=!Vd.test(_?_.toLowerCase():"")}l=f}if(l)Pe(i,"complete"),Pe(i,"success");else{i.m=6;try{var w=2<tt(i)?i.g.statusText:""}catch{w=""}i.l=w+" ["+i.Z()+"]",Ua(i)}}finally{jr(i)}}}}function jr(i,c){if(i.g){za(i);const l=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,c||Pe(i,"ready");try{l.onreadystatechange=f}catch{}}}function za(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function tt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<tt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),md(c)}};function qa(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Ld(i){const c={};i=(i.g&&2<=tt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(H(i[f]))continue;var l=C(i[f]);const _=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=c[_]||[];c[_]=w,w.push(l)}T(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gn(i,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||c}function Wa(i){this.Aa=0,this.i=[],this.j=new Hn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gn("baseRetryDelayMs",5e3,i),this.cb=Gn("retryDelaySeedMs",1e4,i),this.Wa=Gn("forwardChannelMaxRetries",2,i),this.wa=Gn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Ra(i&&i.concurrentRequestLimit),this.Da=new Od,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Wa.prototype,n.la=8,n.G=1,n.connect=function(i,c,l,f){Re(0),this.W=i,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=tc(this,null,this.W),qr(this)};function _i(i){if(Ya(i),i.G==3){var c=i.U++,l=et(i.I);if(K(l,"SID",i.K),K(l,"RID",c),K(l,"TYPE","terminate"),Xn(i,l),c=new gt(i,i.j,c),c.L=2,c.v=Fr(et(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=c.v,l=!0),l||(c.g=nc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Vr(c)}ec(i)}function zr(i){i.g&&(wi(i),i.g.cancel(),i.g=null)}function Ya(i){zr(i),i.u&&(u.clearTimeout(i.u),i.u=null),Wr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function qr(i){if(!Ba(i.h)&&!i.s){i.s=!0;var c=i.Ga;kn||oa(),On||(kn(),On=!0),ri.add(c,i),i.B=0}}function Fd(i,c){return ba(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=c.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Fn(E(i.Ga,i,c),$a(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const _=new gt(this,this.j,i);let w=this.o;if(this.S&&(w?(w=A(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(_.H=w,w=null),this.P)e:{for(var c=0,l=0;l<this.i.length;l++){t:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=l;break e}if(c===4096||l===this.i.length-1){c=l+1;break e}}c=1e3}else c=1e3;c=Xa(this,_,c),l=et(this.I),K(l,"RID",i),K(l,"CVER",22),this.D&&K(l,"X-HTTP-Session-Id",this.D),Xn(this,l),w&&(this.O?c="headers="+encodeURIComponent(String(Fa(w)))+"&"+c:this.m&&Ti(l,this.m,w)),Ci(this.h,_),this.Ua&&K(l,"TYPE","init"),this.P?(K(l,"$req",c),K(l,"SID","null"),_.T=!0,pi(_,l,null)):pi(_,l,c),this.G=2}}else this.G==3&&(i?Ga(this,i):this.i.length==0||Ba(this.h)||Ga(this))};function Ga(i,c){var l;c?l=c.l:l=i.U++;const f=et(i.I);K(f,"SID",i.K),K(f,"RID",l),K(f,"AID",i.T),Xn(i,f),i.m&&i.o&&Ti(f,i.m,i.o),l=new gt(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),c&&(i.i=c.D.concat(i.i)),c=Xa(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Ci(i.h,l),pi(l,f,c)}function Xn(i,c){i.H&&pe(i.H,function(l,f){K(c,f,l)}),i.l&&Qa({},function(l,f){K(c,f,l)})}function Xa(i,c,l){l=Math.min(i.i.length,l);var f=i.l?E(i.l.Na,i.l,i):null;e:{var _=i.i;let w=-1;for(;;){const b=["count="+l];w==-1?0<l?(w=_[0].g,b.push("ofs="+w)):w=0:b.push("ofs="+w);let J=!0;for(let de=0;de<l;de++){let G=_[de].g;const ye=_[de].map;if(G-=w,0>G)w=Math.max(0,_[de].g-100),J=!1;else try{Md(ye,b,"req"+G+"_")}catch{f&&f(ye)}}if(J){f=b.join("&");break e}}}return i=i.i.splice(0,l),c.D=i,f}function Ja(i){if(!i.g&&!i.u){i.Y=1;var c=i.Fa;kn||oa(),On||(kn(),On=!0),ri.add(c,i),i.v=0}}function vi(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Fn(E(i.Fa,i),$a(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Ka(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Fn(E(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Re(10),zr(this),Ka(this))};function wi(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function Ka(i){i.g=new gt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var c=et(i.qa);K(c,"RID","rpc"),K(c,"SID",i.K),K(c,"AID",i.T),K(c,"CI",i.F?"0":"1"),!i.F&&i.ja&&K(c,"TO",i.ja),K(c,"TYPE","xmlhttp"),Xn(i,c),i.m&&i.o&&Ti(c,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=Fr(et(c)),l.m=null,l.P=!0,va(l,i)}n.Za=function(){this.C!=null&&(this.C=null,zr(this),vi(this),Re(19))};function Wr(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function Za(i,c){var l=null;if(i.g==c){Wr(i),wi(i),i.g=null;var f=2}else if(yi(i.h,c))l=c.D,Sa(i.h,c),f=1;else return;if(i.G!=0){if(c.o)if(f==1){l=c.m?c.m.length:0,c=Date.now()-c.F;var _=i.B;f=kr(),Pe(f,new ya(f,l)),qr(i)}else Ja(i);else if(_=c.s,_==3||_==0&&0<c.X||!(f==1&&Fd(i,c)||f==2&&vi(i)))switch(l&&0<l.length&&(c=i.h,c.i=c.i.concat(l)),_){case 1:Ft(i,5);break;case 4:Ft(i,10);break;case 3:Ft(i,6);break;default:Ft(i,2)}}}function $a(i,c){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*c}function Ft(i,c){if(i.j.info("Error code "+c),c==2){var l=E(i.fb,i),f=i.Xa;const _=!f;f=new Lt(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||xr(f,"https"),Fr(f),_?Nd(f.toString(),l):kd(f.toString(),l)}else Re(2);i.G=0,i.l&&i.l.sa(c),ec(i),Ya(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function ec(i){if(i.G=0,i.ka=[],i.l){const c=Da(i.h);(c.length!=0||i.i.length!=0)&&(D(i.ka,c),D(i.ka,i.i),i.h.i.length=0,k(i.i),i.i.length=0),i.l.ra()}}function tc(i,c,l){var f=l instanceof Lt?et(l):new Lt(l);if(f.g!="")c&&(f.g=c+"."+f.g),Lr(f,f.s);else{var _=u.location;f=_.protocol,c=c?c+"."+_.hostname:_.hostname,_=+_.port;var w=new Lt(null);f&&xr(w,f),c&&(w.g=c),_&&Lr(w,_),l&&(w.l=l),f=w}return l=i.D,c=i.ya,l&&c&&K(f,l,c),K(f,"VER",i.la),Xn(i,f),f}function nc(i,c,l){if(c&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Ca&&!i.pa?new te(new Hr({eb:l})):new te(i.pa),c.Ha(i.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function rc(){}n=rc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Yr(){}Yr.prototype.g=function(i,c){return new Qe(i,c)};function Qe(i,c){Ee.call(this),this.g=new Wa(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(i?i["X-WebChannel-Client-Profile"]=c.va:i={"X-WebChannel-Client-Profile":c.va}),this.g.S=i,(i=c&&c.Sb)&&!H(i)&&(this.g.m=i),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!H(c)&&(this.g.D=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new rn(this)}S(Qe,Ee),Qe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qe.prototype.close=function(){_i(this.g)},Qe.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=hi(i),i=l);c.i.push(new _d(c.Ya++,i)),c.G==3&&qr(c)},Qe.prototype.N=function(){this.g.l=null,delete this.j,_i(this.g),delete this.g,Qe.aa.N.call(this)};function sc(i){fi.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){e:{for(const l in c){i=l;break e}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}S(sc,fi);function ic(){gi.call(this),this.status=1}S(ic,gi);function rn(i){this.g=i}S(rn,rc),rn.prototype.ua=function(){Pe(this.g,"a")},rn.prototype.ta=function(i){Pe(this.g,new sc(i))},rn.prototype.sa=function(i){Pe(this.g,new ic)},rn.prototype.ra=function(){Pe(this.g,"b")},Yr.prototype.createWebChannel=Yr.prototype.g,Qe.prototype.send=Qe.prototype.o,Qe.prototype.open=Qe.prototype.m,Qe.prototype.close=Qe.prototype.close,kl=function(){return new Yr},Nl=function(){return kr()},Ql=Vt,Xi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Or.NO_ERROR=0,Or.TIMEOUT=8,Or.HTTP_ERROR=6,is=Or,Ca.COMPLETE="complete",Dl=Ca,ma.EventType=xn,xn.OPEN="a",xn.CLOSE="b",xn.ERROR="c",xn.MESSAGE="d",Ee.prototype.listen=Ee.prototype.K,Zn=ma,te.prototype.listenOnce=te.prototype.L,te.prototype.getLastError=te.prototype.Ka,te.prototype.getLastErrorCode=te.prototype.Ba,te.prototype.getStatus=te.prototype.Z,te.prototype.getResponseJson=te.prototype.Oa,te.prototype.getResponseText=te.prototype.oa,te.prototype.send=te.prototype.ea,te.prototype.setWithCredentials=te.prototype.Ha,Sl=te}).apply(typeof Jr<"u"?Jr:typeof self<"u"?self:typeof window<"u"?window:{});const Vc="@firebase/firestore",xc="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_e.UNAUTHENTICATED=new _e(null),_e.GOOGLE_CREDENTIALS=new _e("google-credentials-uid"),_e.FIRST_PARTY=new _e("first-party-uid"),_e.MOCK_USER=new _e("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bn="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new fo("@firebase/firestore");function on(){return Xt.logLevel}function Q(n,...e){if(Xt.logLevel<=j.DEBUG){const t=e.map(wo);Xt.debug(`Firestore (${Bn}): ${n}`,...t)}}function ut(n,...e){if(Xt.logLevel<=j.ERROR){const t=e.map(wo);Xt.error(`Firestore (${Bn}): ${n}`,...t)}}function En(n,...e){if(Xt.logLevel<=j.WARN){const t=e.map(wo);Xt.warn(`Firestore (${Bn}): ${n}`,...t)}}function wo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Ol(n,r,t)}function Ol(n,e,t){let r=`FIRESTORE (${Bn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw ut(r),new Error(r)}function X(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Ol(e,s,r)}function F(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends ht{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(_e.UNAUTHENTICATED))}shutdown(){}}class qm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Wm{constructor(e){this.t=e,this.currentUser=_e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new it;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new it,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new it)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new Ml(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string",2055,{h:e}),new _e(e)}}class Ym{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=_e.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Gm{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Ym(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(_e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xm{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Oe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){X(this.o===void 0,3512);const r=o=>{o.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,Q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Lc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(X(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Lc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Jm(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<t&&(r+=e.charAt(s[o]%62))}return r}}function z(n,e){return n<e?-1:n>e?1:0}function Ji(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),o=e.charAt(r);if(s!==o)return ki(s)===ki(o)?z(s,o):ki(s)?1:-1}return z(n.length,e.length)}const Km=55296,Zm=57343;function ki(n){const e=n.charCodeAt(0);return e>=Km&&e<=Zm}function yn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc="__name__";class Ue{constructor(e,t,r){t===void 0?t=0:t>e.length&&V(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&V(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ue.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ue?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const o=Ue.compareSegments(e.get(s),t.get(s));if(o!==0)return o}return z(e.length,t.length)}static compareSegments(e,t){const r=Ue.isNumericId(e),s=Ue.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Ue.extractNumericId(e).compare(Ue.extractNumericId(t)):Ji(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Pt.fromString(e.substring(4,e.length-2))}}class Z extends Ue{construct(e,t,r){return new Z(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Z(t)}static emptyPath(){return new Z([])}}const $m=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ge extends Ue{construct(e,t,r){return new ge(e,t,r)}static isValidIdentifier(e){return $m.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Fc}static keyField(){return new ge([Fc])}static fromServerFormat(e){const t=[];let r="",s=0;const o=()=>{if(r.length===0)throw new N(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new N(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new N(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ge(t)}static emptyPath(){return new ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(Z.fromString(e))}static fromName(e){return new O(Z.fromString(e).popFirst(5))}static empty(){return new O(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new Z(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(n,e,t){if(!t)throw new N(B.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ep(n,e,t,r){if(e===!0&&r===!0)throw new N(B.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Hc(n){if(!O.isDocumentKey(n))throw new N(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Uc(n){if(O.isDocumentKey(n))throw new N(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function xl(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ro(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":V(12329,{type:typeof n})}function Je(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new N(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ro(n);throw new N(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(n,e){const t={typeString:n};return e&&(t.value=e),t}function wr(n,e){if(!xl(n))throw new N(B.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${r}' field to equal '${o.value}'`;break}}if(t)throw new N(B.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=-62135596800,zc=1e6;class ${static now(){return $.fromMillis(Date.now())}static fromDate(e){return $.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*zc);return new $(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new N(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new N(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<jc)throw new N(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zc}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:$._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(wr(e,$._jsonSchema))return new $(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-jc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}$._jsonSchemaVersion="firestore/timestamp/1.0",$._jsonSchema={type:ie("string",$._jsonSchemaVersion),seconds:ie("number"),nanoseconds:ie("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{static fromTimestamp(e){return new x(e)}static min(){return new x(new $(0,0))}static max(){return new x(new $(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=-1;function tp(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=x.fromTimestamp(r===1e9?new $(t+1,0):new $(t,r));return new Bt(s,O.empty(),e)}function np(n){return new Bt(n.readTime,n.key,fr)}class Bt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Bt(x.min(),O.empty(),fr)}static max(){return new Bt(x.max(),O.empty(),fr)}}function rp(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(n.documentKey,e.documentKey),t!==0?t:z(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ip{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(n){if(n.code!==B.FAILED_PRECONDITION||n.message!==sp)throw n;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&V(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,r)=>{t(e)})}static reject(e){return new P((t,r)=>{r(e)})}static waitFor(e){return new P((t,r)=>{let s=0,o=0,a=!1;e.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&t()},h=>r(h))}),a=!0,o===s&&t()})}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next(s=>s?P.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,o)=>{r.push(t.call(this,s,o))}),this.waitFor(r)}static mapArray(e,t){return new P((r,s)=>{const o=e.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(g=>{a[d]=g,++u,u===o&&r(a)},g=>s(g))}})}static doWhile(e,t){return new P((r,s)=>{const o=()=>{e()===!0?t().next(()=>{o()},s):r()};o()})}}function op(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Sn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Vs.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=-1;function xs(n){return n==null}function Es(n){return n===0&&1/n==-1/0}function ap(n){return typeof n=="number"&&Number.isInteger(n)&&!Es(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll="";function cp(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=qc(e)),e=up(n.get(t),e);return qc(e)}function up(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":t+="";break;case Ll:t+="";break;default:t+=o}}return t}function qc(n){return n+Ll+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ot(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Fl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.comparator=e,this.root=t||fe.EMPTY}insert(e,t){return new ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,fe.BLACK,null,null))}remove(e){return new ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,fe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Kr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Kr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Kr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Kr(this.root,e,this.comparator,!0)}}class Kr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class fe{constructor(e,t,r,s,o){this.key=e,this.value=t,this.color=r??fe.RED,this.left=s??fe.EMPTY,this.right=o??fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,o){return new fe(e??this.key,t??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const o=r(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,r),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return fe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw V(43730,{key:this.key,value:this.value});if(this.right.isRed())throw V(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw V(27949);return e+(this.isRed()?0:1)}}fe.EMPTY=null,fe.RED=!0,fe.BLACK=!1;fe.EMPTY=new class{constructor(){this.size=0}get key(){throw V(57766)}get value(){throw V(16141)}get color(){throw V(16727)}get left(){throw V(29726)}get right(){throw V(36894)}copy(e,t,r,s,o){return this}insert(e,t,r){return new fe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.comparator=e,this.data=new ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Yc(this.data.getIterator())}getIteratorFrom(e){return new Yc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ce(this.comparator);return t.data=e,t}}class Yc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new Ne([])}unionWith(e){let t=new ce(ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ne(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return yn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Hl("Invalid base64 string: "+o):o}}(e);return new me(t)}static fromUint8Array(e){const t=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}me.EMPTY_BYTE_STRING=new me("");const lp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bt(n){if(X(!!n,39018),typeof n=="string"){let e=0;const t=lp.exec(n);if(X(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ne(n.seconds),nanos:ne(n.nanos)}}function ne(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function St(n){return typeof n=="string"?me.fromBase64String(n):me.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="server_timestamp",jl="__type__",zl="__previous_value__",ql="__local_write_time__";function bo(n){return(n?.mapValue?.fields||{})[jl]?.stringValue===Ul}function Ls(n){const e=n.mapValue.fields[zl];return bo(e)?Ls(e):e}function gr(n){const e=bt(n.mapValue.fields[ql].timestampValue);return new $(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,t,r,s,o,a,u,h,d,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=g}}const ys="(default)";class Ar{constructor(e,t){this.projectId=e,this.database=t||ys}static empty(){return new Ar("","")}get isDefaultDatabase(){return this.database===ys}isEqual(e){return e instanceof Ar&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl="__type__",dp="__max__",Zr={mapValue:{}},Yl="__vector__",Cs="value";function Dt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?bo(n)?4:gp(n)?9007199254740991:fp(n)?10:11:V(28295,{value:n})}function Ke(n,e){if(n===e)return!0;const t=Dt(n);if(t!==Dt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return gr(n).isEqual(gr(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=bt(s.timestampValue),u=bt(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,o){return St(s.bytesValue).isEqual(St(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,o){return ne(s.geoPointValue.latitude)===ne(o.geoPointValue.latitude)&&ne(s.geoPointValue.longitude)===ne(o.geoPointValue.longitude)}(n,e);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return ne(s.integerValue)===ne(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=ne(s.doubleValue),u=ne(o.doubleValue);return a===u?Es(a)===Es(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return yn(n.arrayValue.values||[],e.arrayValue.values||[],Ke);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(Wc(a)!==Wc(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Ke(a[h],u[h])))return!1;return!0}(n,e);default:return V(52216,{left:n})}}function mr(n,e){return(n.values||[]).find(t=>Ke(t,e))!==void 0}function Cn(n,e){if(n===e)return 0;const t=Dt(n),r=Dt(e);if(t!==r)return z(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return z(n.booleanValue,e.booleanValue);case 2:return function(o,a){const u=ne(o.integerValue||o.doubleValue),h=ne(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,e);case 3:return Gc(n.timestampValue,e.timestampValue);case 4:return Gc(gr(n),gr(e));case 5:return Ji(n.stringValue,e.stringValue);case 6:return function(o,a){const u=St(o),h=St(a);return u.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const g=z(u[d],h[d]);if(g!==0)return g}return z(u.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const u=z(ne(o.latitude),ne(a.latitude));return u!==0?u:z(ne(o.longitude),ne(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Xc(n.arrayValue,e.arrayValue);case 10:return function(o,a){const u=o.fields||{},h=a.fields||{},d=u[Cs]?.arrayValue,g=h[Cs]?.arrayValue,I=z(d?.values?.length||0,g?.values?.length||0);return I!==0?I:Xc(d,g)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===Zr.mapValue&&a===Zr.mapValue)return 0;if(o===Zr.mapValue)return 1;if(a===Zr.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},g=Object.keys(d);h.sort(),g.sort();for(let I=0;I<h.length&&I<g.length;++I){const E=Ji(h[I],g[I]);if(E!==0)return E;const R=Cn(u[h[I]],d[g[I]]);if(R!==0)return R}return z(h.length,g.length)}(n.mapValue,e.mapValue);default:throw V(23264,{he:t})}}function Gc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return z(n,e);const t=bt(n),r=bt(e),s=z(t.seconds,r.seconds);return s!==0?s:z(t.nanos,r.nanos)}function Xc(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const o=Cn(t[s],r[s]);if(o)return o}return z(t.length,r.length)}function Tn(n){return Ki(n)}function Ki(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=bt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return St(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return O.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const o of t.values||[])s?s=!1:r+=",",r+=Ki(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Ki(t.fields[a])}`;return s+"}"}(n.mapValue):V(61005,{value:n})}function os(n){switch(Dt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ls(n);return e?16+os(e):16;case 5:return 2*n.stringValue.length;case 6:return St(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+os(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Ot(r.fields,(o,a)=>{s+=o.length+os(a)}),s}(n.mapValue);default:throw V(13486,{value:n})}}function Zi(n){return!!n&&"integerValue"in n}function So(n){return!!n&&"arrayValue"in n}function Jc(n){return!!n&&"nullValue"in n}function Kc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function as(n){return!!n&&"mapValue"in n}function fp(n){return(n?.mapValue?.fields||{})[Wl]?.stringValue===Yl}function sr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Ot(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=sr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=sr(n.arrayValue.values[t]);return e}return{...n}}function gp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===dp}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.value=e}static empty(){return new De({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!as(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=sr(t)}setAll(e){let t=ge.emptyPath(),r={},s=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const h=this.getFieldsMap(t);this.applyChanges(h,r,s),r={},s=[],t=u.popLast()}a?r[u.lastSegment()]=sr(a):s.push(u.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,s)}delete(e){const t=this.field(e.popLast());as(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ke(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];as(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ot(t,(s,o)=>e[s]=o);for(const s of r)delete e[s]}clone(){return new De(sr(this.value))}}function Gl(n){const e=[];return Ot(n.fields,(t,r)=>{const s=new ge([t]);if(as(r)){const o=Gl(r.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)}),new Ne(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t,r,s,o,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new ve(e,0,x.min(),x.min(),x.min(),De.empty(),0)}static newFoundDocument(e,t,r,s){return new ve(e,1,t,x.min(),r,s,0)}static newNoDocument(e,t){return new ve(e,2,t,x.min(),x.min(),De.empty(),0)}static newUnknownDocument(e,t){return new ve(e,3,t,x.min(),x.min(),De.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(x.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t){this.position=e,this.inclusive=t}}function Zc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const o=e[s],a=n.position[s];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),t.key):r=Cn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function $c(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ke(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ap(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{}class ae extends Xl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new pp(e,t,r):t==="array-contains"?new yp(e,r):t==="in"?new Cp(e,r):t==="not-in"?new Tp(e,r):t==="array-contains-any"?new _p(e,r):new ae(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ip(e,r):new Ep(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Cn(t,this.value)):t!==null&&Dt(this.value)===Dt(t)&&this.matchesComparison(Cn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ze extends Xl{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ze(e,t)}matches(e){return Jl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Jl(n){return n.op==="and"}function Kl(n){return mp(n)&&Jl(n)}function mp(n){for(const e of n.filters)if(e instanceof Ze)return!1;return!0}function $i(n){if(n instanceof ae)return n.field.canonicalString()+n.op.toString()+Tn(n.value);if(Kl(n))return n.filters.map(e=>$i(e)).join(",");{const e=n.filters.map(t=>$i(t)).join(",");return`${n.op}(${e})`}}function Zl(n,e){return n instanceof ae?function(r,s){return s instanceof ae&&r.op===s.op&&r.field.isEqual(s.field)&&Ke(r.value,s.value)}(n,e):n instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&Zl(a,s.filters[u]),!0):!1}(n,e):void V(19439)}function $l(n){return n instanceof ae?function(t){return`${t.field.canonicalString()} ${t.op} ${Tn(t.value)}`}(n):n instanceof Ze?function(t){return t.op.toString()+" {"+t.getFilters().map($l).join(" ,")+"}"}(n):"Filter"}class pp extends ae{constructor(e,t,r){super(e,t,r),this.key=O.fromName(r.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ip extends ae{constructor(e,t){super(e,"in",t),this.keys=eh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ep extends ae{constructor(e,t){super(e,"not-in",t),this.keys=eh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function eh(n,e){return(e.arrayValue?.values||[]).map(t=>O.fromName(t.referenceValue))}class yp extends ae{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return So(t)&&mr(t.arrayValue,this.value)}}class Cp extends ae{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&mr(this.value.arrayValue,t)}}class Tp extends ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(mr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!mr(this.value.arrayValue,t)}}class _p extends ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!So(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>mr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,t=null,r=[],s=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.Te=null}}function eu(n,e=null,t=[],r=[],s=null,o=null,a=null){return new vp(n,e,t,r,s,o,a)}function Do(n){const e=F(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>$i(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),xs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Tn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Tn(r)).join(",")),e.Te=t}return e.Te}function Qo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Ap(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Zl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!$c(n.startAt,e.startAt)&&$c(n.endAt,e.endAt)}function eo(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function wp(n,e,t,r,s,o,a,u){return new Fs(n,e,t,r,s,o,a,u)}function No(n){return new Fs(n)}function tu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Pp(n){return n.collectionGroup!==null}function ir(n){const e=F(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ce(ge.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new _s(o,r))}),t.has(ge.keyField().canonicalString())||e.Ie.push(new _s(ge.keyField(),r))}return e.Ie}function We(n){const e=F(n);return e.Ee||(e.Ee=Rp(e,ir(n))),e.Ee}function Rp(n,e){if(n.limitType==="F")return eu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new _s(s.field,o)});const t=n.endAt?new Ts(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ts(n.startAt.position,n.startAt.inclusive):null;return eu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function to(n,e,t){return new Fs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Hs(n,e){return Qo(We(n),We(e))&&n.limitType===e.limitType}function th(n){return`${Do(We(n))}|lt:${n.limitType}`}function an(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>$l(s)).join(", ")}]`),xs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Tn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Tn(s)).join(",")),`Target(${r})`}(We(n))}; limitType=${n.limitType})`}function Us(n,e){return e.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,s){for(const o of ir(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,u,h){const d=Zc(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,ir(r),s)||r.endAt&&!function(a,u,h){const d=Zc(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,ir(r),s))}(n,e)}function Bp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function nh(n){return(e,t)=>{let r=!1;for(const s of ir(n)){const o=bp(s,e,t);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function bp(n,e,t){const r=n.field.isKeyField()?O.comparator(e.key,t.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?Cn(h,d):V(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return V(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ot(this.inner,(t,r)=>{for(const[s,o]of r)e(s,o)})}isEmpty(){return Fl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=new ee(O.comparator);function lt(){return Sp}const rh=new ee(O.comparator);function $n(...n){let e=rh;for(const t of n)e=e.insert(t.key,t);return e}function sh(n){let e=rh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function jt(){return or()}function ih(){return or()}function or(){return new Zt(n=>n.toString(),(n,e)=>n.isEqual(e))}const Dp=new ee(O.comparator),Qp=new ce(O.comparator);function q(...n){let e=Qp;for(const t of n)e=e.add(t);return e}const Np=new ce(z);function kp(){return Np}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Es(e)?"-0":e}}function oh(n){return{integerValue:""+n}}function Op(n,e){return ap(e)?oh(e):ko(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this._=void 0}}function Mp(n,e,t){return n instanceof vs?function(s,o){const a={fields:{[jl]:{stringValue:Ul},[ql]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&bo(o)&&(o=Ls(o)),o&&(a.fields[zl]=o),{mapValue:a}}(t,e):n instanceof pr?ch(n,e):n instanceof Ir?uh(n,e):function(s,o){const a=ah(s,o),u=nu(a)+nu(s.Ae);return Zi(a)&&Zi(s.Ae)?oh(u):ko(s.serializer,u)}(n,e)}function Vp(n,e,t){return n instanceof pr?ch(n,e):n instanceof Ir?uh(n,e):t}function ah(n,e){return n instanceof ws?function(r){return Zi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class vs extends js{}class pr extends js{constructor(e){super(),this.elements=e}}function ch(n,e){const t=lh(e);for(const r of n.elements)t.some(s=>Ke(s,r))||t.push(r);return{arrayValue:{values:t}}}class Ir extends js{constructor(e){super(),this.elements=e}}function uh(n,e){let t=lh(e);for(const r of n.elements)t=t.filter(s=>!Ke(s,r));return{arrayValue:{values:t}}}class ws extends js{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function nu(n){return ne(n.integerValue||n.doubleValue)}function lh(n){return So(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function xp(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof pr&&s instanceof pr||r instanceof Ir&&s instanceof Ir?yn(r.elements,s.elements,Ke):r instanceof ws&&s instanceof ws?Ke(r.Ae,s.Ae):r instanceof vs&&s instanceof vs}(n.transform,e.transform)}class Lp{constructor(e,t){this.version=e,this.transformResults=t}}class Le{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Le}static exists(e){return new Le(void 0,e)}static updateTime(e){return new Le(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class zs{}function hh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Oo(n.key,Le.none()):new Pr(n.key,n.data,Le.none());{const t=n.data,r=De.empty();let s=new ce(ge.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Mt(n.key,r,new Ne(s.toArray()),Le.none())}}function Fp(n,e,t){n instanceof Pr?function(s,o,a){const u=s.value.clone(),h=su(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof Mt?function(s,o,a){if(!cs(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=su(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(dh(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ar(n,e,t,r){return n instanceof Pr?function(o,a,u,h){if(!cs(o.precondition,a))return u;const d=o.value.clone(),g=iu(o.fieldTransforms,h,a);return d.setAll(g),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Mt?function(o,a,u,h){if(!cs(o.precondition,a))return u;const d=iu(o.fieldTransforms,h,a),g=a.data;return g.setAll(dh(o)),g.setAll(d),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,e,t,r):function(o,a,u){return cs(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function Hp(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),o=ah(r.transform,s||null);o!=null&&(t===null&&(t=De.empty()),t.set(r.field,o))}return t||null}function ru(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&yn(r,s,(o,a)=>xp(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Pr extends zs{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Mt extends zs{constructor(e,t,r,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function dh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function su(n,e,t){const r=new Map;X(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const o=n[s],a=o.transform,u=e.data.field(o.field);r.set(o.field,Vp(a,u,t[s]))}return r}function iu(n,e,t){const r=new Map;for(const s of n){const o=s.transform,a=t.data.field(s.field);r.set(s.field,Mp(o,a,e))}return r}class Oo extends zs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Up extends zs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&Fp(o,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ar(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ar(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ih();return this.mutations.forEach(s=>{const o=e.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=t.has(s.key)?null:u;const h=hh(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(x.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),q())}isEqual(e){return this.batchId===e.batchId&&yn(this.mutations,e.mutations,(t,r)=>ru(t,r))&&yn(this.baseMutations,e.baseMutations,(t,r)=>ru(t,r))}}class Mo{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){X(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Dp}();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Mo(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se,Y;function Wp(n){switch(n){case B.OK:return V(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return V(15467,{code:n})}}function fh(n){if(n===void 0)return ut("GRPC error has no .code"),B.UNKNOWN;switch(n){case se.OK:return B.OK;case se.CANCELLED:return B.CANCELLED;case se.UNKNOWN:return B.UNKNOWN;case se.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case se.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case se.INTERNAL:return B.INTERNAL;case se.UNAVAILABLE:return B.UNAVAILABLE;case se.UNAUTHENTICATED:return B.UNAUTHENTICATED;case se.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case se.NOT_FOUND:return B.NOT_FOUND;case se.ALREADY_EXISTS:return B.ALREADY_EXISTS;case se.PERMISSION_DENIED:return B.PERMISSION_DENIED;case se.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case se.ABORTED:return B.ABORTED;case se.OUT_OF_RANGE:return B.OUT_OF_RANGE;case se.UNIMPLEMENTED:return B.UNIMPLEMENTED;case se.DATA_LOSS:return B.DATA_LOSS;default:return V(39323,{code:n})}}(Y=se||(se={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp=new Pt([4294967295,4294967295],0);function ou(n){const e=Yp().encode(n),t=new bl;return t.update(e),new Uint8Array(t.digest())}function au(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Pt([t,r],0),new Pt([s,o],0)]}class Vo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new er(`Invalid padding: ${t}`);if(r<0)throw new er(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new er(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new er(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Pt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Pt.fromNumber(r)));return s.compare(Gp)===1&&(s=new Pt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=ou(e),[r,s]=au(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new Vo(o,s,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.ge===0)return;const t=ou(e),[r,s]=au(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class er extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t,r,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Rr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new qs(x.min(),s,new ee(z),lt(),q())}}class Rr{constructor(e,t,r,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Rr(r,t,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class gh{constructor(e,t){this.targetId=e,this.Ce=t}}class Ah{constructor(e,t,r=me.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class cu{constructor(){this.ve=0,this.Fe=uu(),this.Me=me.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=q(),t=q(),r=q();return this.Fe.forEach((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:V(38017,{changeType:o})}}),new Rr(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=uu()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,X(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Xp{constructor(e){this.Ge=e,this.ze=new Map,this.je=lt(),this.Je=$r(),this.He=$r(),this.Ye=new ee(z)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:V(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const o=s.target;if(eo(o))if(r===0){const a=new O(o.path);this.et(t,a,ve.newNoDocument(a,x.min()))}else X(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const u=this.ut(e),h=u?this.ct(u,e,a):1;if(h!==0){this.it(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=t;let a,u;try{a=St(r).toUint8Array()}catch(h){if(h instanceof Hl)return En("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Vo(a,s,o)}catch(h){return En(h instanceof er?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.ge===0?null:u}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(o=>{const a=this.Ge.ht(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.et(t,o,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((o,a)=>{const u=this.ot(a);if(u){if(o.current&&eo(u.target)){const h=new O(u.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,ve.newNoDocument(h,e))}o.Be&&(t.set(a,o.ke()),o.qe())}});let r=q();this.He.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.je.forEach((o,a)=>a.setReadTime(e));const s=new qs(e,t,this.Ye,this.je,r);return this.je=lt(),this.Je=$r(),this.He=$r(),this.Ye=new ee(z),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new cu,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new ce(z),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new ce(z),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||Q("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new cu),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function $r(){return new ee(O.comparator)}function uu(){return new ee(O.comparator)}const Jp={asc:"ASCENDING",desc:"DESCENDING"},Kp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Zp={and:"AND",or:"OR"};class $p{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function no(n,e){return n.useProto3Json||xs(e)?e:{value:e}}function Ps(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function eI(n,e){return Ps(n,e.toTimestamp())}function Ye(n){return X(!!n,49232),x.fromTimestamp(function(t){const r=bt(t);return new $(r.seconds,r.nanos)}(n))}function xo(n,e){return ro(n,e).canonicalString()}function ro(n,e){const t=function(s){return new Z(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ph(n){const e=Z.fromString(n);return X(Th(e),10190,{key:e.toString()}),e}function so(n,e){return xo(n.databaseId,e.path)}function Oi(n,e){const t=ph(e);if(t.get(1)!==n.databaseId.projectId)throw new N(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new N(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new O(Eh(t))}function Ih(n,e){return xo(n.databaseId,e)}function tI(n){const e=ph(n);return e.length===4?Z.emptyPath():Eh(e)}function io(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Eh(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function lu(n,e,t){return{name:so(n,e),fields:t.value.mapValue.fields}}function nI(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:V(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=function(d,g){return d.useProto3Json?(X(g===void 0||typeof g=="string",58123),me.fromBase64String(g||"")):(X(g===void 0||g instanceof Buffer||g instanceof Uint8Array,16193),me.fromUint8Array(g||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){const g=d.code===void 0?B.UNKNOWN:fh(d.code);return new N(g,d.message||"")}(a);t=new Ah(r,s,o,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Oi(n,r.document.name),o=Ye(r.document.updateTime),a=r.document.createTime?Ye(r.document.createTime):x.min(),u=new De({mapValue:{fields:r.document.fields}}),h=ve.newFoundDocument(s,o,a,u),d=r.targetIds||[],g=r.removedTargetIds||[];t=new us(d,g,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Oi(n,r.document),o=r.readTime?Ye(r.readTime):x.min(),a=ve.newNoDocument(s,o),u=r.removedTargetIds||[];t=new us([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Oi(n,r.document),o=r.removedTargetIds||[];t=new us([],o,s,null)}else{if(!("filter"in e))return V(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new qp(s,o),u=r.targetId;t=new gh(u,a)}}return t}function rI(n,e){let t;if(e instanceof Pr)t={update:lu(n,e.key,e.value)};else if(e instanceof Oo)t={delete:so(n,e.key)};else if(e instanceof Mt)t={update:lu(n,e.key,e.data),updateMask:dI(e.fieldMask)};else{if(!(e instanceof Up))return V(16599,{Vt:e.type});t={verify:so(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof vs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof pr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Ir)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof ws)return{fieldPath:a.field.canonicalString(),increment:u.Ae};throw V(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:eI(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:V(27497)}(n,e.precondition)),t}function sI(n,e){return n&&n.length>0?(X(e!==void 0,14353),n.map(t=>function(s,o){let a=s.updateTime?Ye(s.updateTime):Ye(o);return a.isEqual(x.min())&&(a=Ye(o)),new Lp(a,s.transformResults||[])}(t,e))):[]}function iI(n,e){return{documents:[Ih(n,e.path)]}}function oI(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Ih(n,s);const o=function(d){if(d.length!==0)return Ch(Ze.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(g=>function(E){return{field:cn(E.field),direction:uI(E.dir)}}(g))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=no(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:s}}function aI(n){let e=tI(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){X(r===1,65062);const g=t.from[0];g.allDescendants?s=g.collectionId:e=e.child(g.collectionId)}let o=[];t.where&&(o=function(I){const E=yh(I);return E instanceof Ze&&Kl(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(I){return I.map(E=>function(S){return new _s(un(S.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(E))}(t.orderBy));let u=null;t.limit&&(u=function(I){let E;return E=typeof I=="object"?I.value:I,xs(E)?null:E}(t.limit));let h=null;t.startAt&&(h=function(I){const E=!!I.before,R=I.values||[];return new Ts(R,E)}(t.startAt));let d=null;return t.endAt&&(d=function(I){const E=!I.before,R=I.values||[];return new Ts(R,E)}(t.endAt)),wp(e,s,a,o,u,"F",h,d)}function cI(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return V(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function yh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=un(t.unaryFilter.field);return ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=un(t.unaryFilter.field);return ae.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=un(t.unaryFilter.field);return ae.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=un(t.unaryFilter.field);return ae.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return V(61313);default:return V(60726)}}(n):n.fieldFilter!==void 0?function(t){return ae.create(un(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return V(58110);default:return V(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ze.create(t.compositeFilter.filters.map(r=>yh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return V(1026)}}(t.compositeFilter.op))}(n):V(30097,{filter:n})}function uI(n){return Jp[n]}function lI(n){return Kp[n]}function hI(n){return Zp[n]}function cn(n){return{fieldPath:n.canonicalString()}}function un(n){return ge.fromServerFormat(n.fieldPath)}function Ch(n){return n instanceof ae?function(t){if(t.op==="=="){if(Kc(t.value))return{unaryFilter:{field:cn(t.field),op:"IS_NAN"}};if(Jc(t.value))return{unaryFilter:{field:cn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Kc(t.value))return{unaryFilter:{field:cn(t.field),op:"IS_NOT_NAN"}};if(Jc(t.value))return{unaryFilter:{field:cn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cn(t.field),op:lI(t.op),value:t.value}}}(n):n instanceof Ze?function(t){const r=t.getFilters().map(s=>Ch(s));return r.length===1?r[0]:{compositeFilter:{op:hI(t.op),filters:r}}}(n):V(54877,{filter:n})}function dI(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Th(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t,r,s,o=x.min(),a=x.min(),u=me.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(e){return new Tt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Tt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e){this.yt=e}}function gI(n){const e=aI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?to(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(){this.Cn=new mI}addToCollectionParentIndex(e,t){return this.Cn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Bt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Bt.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class mI{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ce(Z.comparator),o=!s.has(r);return this.index[t]=s.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ce(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_h=41943040;class Se{static withCacheSize(e){return new Se(e,Se.DEFAULT_COLLECTION_PERCENTILE,Se.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Se.DEFAULT_COLLECTION_PERCENTILE=10,Se.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Se.DEFAULT=new Se(_h,Se.DEFAULT_COLLECTION_PERCENTILE,Se.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Se.DISABLED=new Se(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new _n(0)}static cr(){return new _n(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="LruGarbageCollector",pI=1048576;function fu([n,e],[t,r]){const s=z(n,t);return s===0?z(e,r):s}class II{constructor(e){this.Ir=e,this.buffer=new ce(fu),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();fu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class EI{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Q(du,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Sn(t)?Q(du,"Ignoring IndexedDB error during garbage collection: ",t):await bn(t)}await this.Vr(3e5)})}}class yI{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return P.resolve(Vs.ce);const r=new II(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(Q("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(hu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hu):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,o,a,u,h,d;const g=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(Q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),s=this.params.maximumSequenceNumbersToCollect):s=I,a=Date.now(),this.nthSequenceNumber(e,s))).next(I=>(r=I,u=Date.now(),this.removeTargets(e,r,t))).next(I=>(o=I,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(I=>(d=Date.now(),on()<=j.DEBUG&&Q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-g}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${I} documents in `+(d-h)+`ms
Total Duration: ${d-g}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:I})))}}function CI(n,e){return new yI(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(){this.changes=new Zt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ve.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ar(r.mutation,s,Ne.empty(),$.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,t,r=q()){const s=jt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(o=>{let a=$n();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=jt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,q()))}populateOverlays(e,t,r){const s=[];return r.forEach(o=>{t.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,s){let o=lt();const a=or(),u=function(){return or()}();return t.forEach((h,d)=>{const g=r.get(d.key);s.has(d.key)&&(g===void 0||g.mutation instanceof Mt)?o=o.insert(d.key,d):g!==void 0?(a.set(d.key,g.mutation.getFieldMask()),ar(g.mutation,d,g.mutation.getFieldMask(),$.now())):a.set(d.key,Ne.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,g)=>a.set(d,g)),t.forEach((d,g)=>u.set(d,new _I(g,a.get(d)??null))),u))}recalculateAndSaveOverlays(e,t){const r=or();let s=new ee((a,u)=>a-u),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let g=r.get(h)||Ne.empty();g=u.applyToLocalView(d,g),r.set(h,g);const I=(s.get(u.batchId)||q()).add(h);s=s.insert(u.batchId,I)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,g=h.value,I=ih();g.forEach(E=>{if(!o.has(E)){const R=hh(t.get(E),r.get(E));R!==null&&I.set(E,R),o=o.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,I))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Pp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-o.size):P.resolve(jt());let u=fr,h=o;return a.next(d=>P.forEach(d,(g,I)=>(u<I.largestBatchId&&(u=I.largestBatchId),o.get(g)?P.resolve():this.remoteDocumentCache.getEntry(e,g).next(E=>{h=h.insert(g,E)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,q())).next(g=>({batchId:u,changes:sh(g)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(r=>{let s=$n();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const o=t.collectionGroup;let a=$n();return this.indexManager.getCollectionParents(e,o).next(u=>P.forEach(u,h=>{const d=function(I,E){return new Fs(E,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(g=>{g.forEach((I,E)=>{a=a.insert(I,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,s))).next(a=>{o.forEach((h,d)=>{const g=d.getKey();a.get(g)===null&&(a=a.insert(g,ve.newInvalidDocument(g)))});let u=$n();return a.forEach((h,d)=>{const g=o.get(h);g!==void 0&&ar(g.mutation,d,Ne.empty(),$.now()),Us(t,d)&&(u=u.insert(h,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return P.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ye(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:gI(s.bundledQuery),readTime:Ye(s.readTime)}}(t)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(){this.overlays=new ee(O.comparator),this.qr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=jt();return P.forEach(t,s=>this.getOverlay(e,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,o)=>{this.St(e,t,o)}),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.qr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=jt(),o=t.length+1,a=new O(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let o=new ee((d,g)=>d-g);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let g=o.get(d.largestBatchId);g===null&&(g=jt(),o=o.insert(d.largestBatchId,g)),g.set(d.getKey(),d)}}const u=jt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,g)=>u.set(d,g)),!(u.size()>=s)););return P.resolve(u)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new zp(t,r));let o=this.qr.get(t);o===void 0&&(o=q(),this.qr.set(t,o)),this.qr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(){this.sessionToken=me.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(){this.Qr=new ce(le.$r),this.Ur=new ce(le.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new le(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new le(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new O(new Z([])),r=new le(t,e),s=new le(t,e+1),o=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),o.push(a.key)}),o}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new O(new Z([])),r=new le(t,e),s=new le(t,e+1);let o=q();return this.Ur.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new le(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class le{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return O.comparator(e.key,t.key)||z(e.Yr,t.Yr)}static Kr(e,t){return z(e.Yr,t.Yr)||O.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new ce(le.$r)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new jp(o,t,r,s);this.mutationQueue.push(a);for(const u of s)this.Zr=this.Zr.add(new le(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Bo:this.tr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new le(t,0),s=new le(t,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,s],a=>{const u=this.Xr(a.Yr);o.push(u)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ce(z);return t.forEach(s=>{const o=new le(s,0),a=new le(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],u=>{r=r.add(u.Yr)})}),P.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new le(new O(o),0);let u=new ce(z);return this.Zr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.Yr)),!0)},a),P.resolve(this.ti(u))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){X(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return P.forEach(t.mutations,s=>{const o=new le(s.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new le(t,0),s=this.Zr.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e){this.ri=e,this.docs=function(){return new ee(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),o=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():ve.newInvalidDocument(t))}getEntries(e,t){let r=lt();return t.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():ve.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let o=lt();const a=t.path,u=new O(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:g}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||rp(np(g),r)<=0||(s.has(g.key)||Us(t,g))&&(o=o.insert(g.key,g.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(e,t,r,s){V(9500)}ii(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new SI(this)}getSize(e){return P.resolve(this.size)}}class SI extends TI{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.persistence=e,this.si=new Zt(t=>Do(t),Qo),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.oi=0,this._i=new Lo,this.targetCount=0,this.ai=_n.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),P.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new _n(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Pr(t),P.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const o=[];return this.si.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach(a=>{o.push(s.markPotentiallyOrphaned(e,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,t){this.ui={},this.overlays={},this.ci=new Vs(0),this.li=!1,this.li=!0,this.hi=new RI,this.referenceDelegate=e(this),this.Pi=new DI(this),this.indexManager=new AI,this.remoteDocumentCache=function(s){return new bI(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new fI(t),this.Ii=new wI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new PI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new BI(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){Q("MemoryPersistence","Starting transaction:",e);const s=new QI(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(o=>this.referenceDelegate.di(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ai(e,t){return P.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class QI extends ip{constructor(e){super(),this.currentSequenceNumber=e}}class Fo{constructor(e){this.persistence=e,this.Ri=new Lo,this.Vi=null}static mi(e){return new Fo(e)}get fi(){if(this.Vi)return this.Vi;throw V(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(o=>this.fi.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.fi,r=>{const s=O.fromPath(r);return this.gi(e,s).next(o=>{o||t.removeEntry(s,x.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Rs{constructor(e,t){this.persistence=e,this.pi=new Zt(r=>cp(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=CI(this,t)}static mi(e,t){return new Rs(e,t)}Ei(){}di(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return P.forEach(this.pi,(r,s)=>this.br(e,r,s).next(o=>o?P.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(u=>{u||(r++,o.removeEntry(a,x.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),P.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=os(e.data.value)),t}br(e,t,r){return P.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=q(),s=q();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ho(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return af()?8:op(we())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const o={result:null};return this.ys(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ws(e,t,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new NI;return this.Ss(e,t,a).next(u=>{if(o.result=u,this.Vs)return this.bs(e,t,a,u.size)})}).next(()=>o.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(on()<=j.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",an(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),P.resolve()):(on()<=j.DEBUG&&Q("QueryEngine","Query:",an(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(on()<=j.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",an(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,We(t))):P.resolve())}ys(e,t){if(tu(t))return P.resolve(null);let r=We(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=to(t,null,"F"),r=We(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=q(...o);return this.ps.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(h=>{const d=this.Ds(t,u);return this.Cs(t,d,a,h.readTime)?this.ys(e,to(t,null,"F")):this.vs(e,d,t,h)}))})))}ws(e,t,r,s){return tu(t)||s.isEqual(x.min())?P.resolve(null):this.ps.getDocuments(e,r).next(o=>{const a=this.Ds(t,o);return this.Cs(t,a,r,s)?P.resolve(null):(on()<=j.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),an(t)),this.vs(e,a,t,tp(s,fr)).next(u=>u))})}Ds(e,t){let r=new ce(nh(e));return t.forEach((s,o)=>{Us(e,o)&&(r=r.add(o))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(e,t,r){return on()<=j.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",an(t)),this.ps.getDocumentsMatchingQuery(e,t,Bt.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo="LocalStore",OI=3e8;class MI{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new ee(z),this.xs=new Zt(o=>Do(o),Qo),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vI(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function VI(n,e,t,r){return new MI(n,e,t,r)}async function wh(n,e){const t=F(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=q();for(const d of s){a.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}for(const d of o){u.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}return t.localDocuments.getDocuments(r,h).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:u}))})})}function xI(n,e){const t=F(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),o=t.Ns.newChangeBuffer({trackRemovals:!0});return function(u,h,d,g){const I=d.batch,E=I.keys();let R=P.resolve();return E.forEach(S=>{R=R.next(()=>g.getEntry(h,S)).next(k=>{const D=d.docVersions.get(S);X(D!==null,48541),k.version.compareTo(D)<0&&(I.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),g.addEntry(k)))})}),R.next(()=>u.mutationQueue.removeMutationBatch(h,I))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=q();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Ph(n){const e=F(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function LI(n,e){const t=F(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const u=[];e.targetChanges.forEach((g,I)=>{const E=s.get(I);if(!E)return;u.push(t.Pi.removeMatchingKeys(o,g.removedDocuments,I).next(()=>t.Pi.addMatchingKeys(o,g.addedDocuments,I)));let R=E.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(I)!==null?R=R.withResumeToken(me.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):g.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(g.resumeToken,r)),s=s.insert(I,R),function(k,D,U){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=OI?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(E,R,g)&&u.push(t.Pi.updateTargetData(o,R))});let h=lt(),d=q();if(e.documentUpdates.forEach(g=>{e.resolvedLimboDocuments.has(g)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(o,g))}),u.push(FI(o,a,e.documentUpdates).next(g=>{h=g.ks,d=g.qs})),!r.isEqual(x.min())){const g=t.Pi.getLastRemoteSnapshotVersion(o).next(I=>t.Pi.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(g)}return P.waitFor(u).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.Ms=s,o))}function FI(n,e,t){let r=q(),s=q();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=lt();return t.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(x.min())?(e.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(u,h)):Q(Uo,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{ks:a,qs:s}})}function HI(n,e){const t=F(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Bo),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function UI(n,e){const t=F(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(o=>o?(s=o,P.resolve(s)):t.Pi.allocateTargetId(r).next(a=>(s=new Tt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function oo(n,e,t){const r=F(n),s=r.Ms.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Sn(a))throw a;Q(Uo,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function gu(n,e,t){const r=F(n);let s=x.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,g){const I=F(h),E=I.xs.get(g);return E!==void 0?P.resolve(I.Ms.get(E)):I.Pi.getTargetData(d,g)}(r,a,We(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:x.min(),t?o:q())).next(u=>(jI(r,Bp(e),u),{documents:u,Qs:o})))}function jI(n,e,t){let r=n.Os.get(e)||x.min();t.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Os.set(e,r)}class Au{constructor(){this.activeTargetIds=kp()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zI{constructor(){this.Mo=new Au,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Au,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu="ConnectivityMonitor";class pu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Q(mu,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Q(mu,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let es=null;function ao(){return es===null?es=function(){return 268435456+Math.round(2147483648*Math.random())}():es++,"0x"+es.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi="RestConnection",WI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class YI{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ys?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,o){const a=ao(),u=this.zo(e,t.toUriEncodedString());Q(Mi,`Sending RPC '${e}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,s,o);const{host:d}=new URL(u),g=wn(d);return this.Jo(e,u,h,r,g).then(I=>(Q(Mi,`Received RPC '${e}' ${a}: `,I),I),I=>{throw En(Mi,`RPC '${e}' ${a} failed with error: `,I,"url: ",u,"request:",r),I})}Ho(e,t,r,s,o,a){return this.Go(e,t,r,s,o)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,o)=>e[o]=s),r&&r.headers.forEach((s,o)=>e[o]=s)}zo(e,t){const r=WI[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="WebChannelConnection";class XI extends YI{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,o){const a=ao();return new Promise((u,h)=>{const d=new Sl;d.setWithCredentials(!0),d.listenOnce(Dl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case is.NO_ERROR:const I=d.getResponseJson();Q(Te,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(I)),u(I);break;case is.TIMEOUT:Q(Te,`RPC '${e}' ${a} timed out`),h(new N(B.DEADLINE_EXCEEDED,"Request time out"));break;case is.HTTP_ERROR:const E=d.getStatus();if(Q(Te,`RPC '${e}' ${a} failed with status:`,E,"response text:",d.getResponseText()),E>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const S=R?.error;if(S&&S.status&&S.message){const k=function(U){const H=U.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(H)>=0?H:B.UNKNOWN}(S.status);h(new N(k,S.message))}else h(new N(B.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new N(B.UNAVAILABLE,"Connection failed."));break;default:V(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{Q(Te,`RPC '${e}' ${a} completed.`)}});const g=JSON.stringify(s);Q(Te,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",g,r,15)})}T_(e,t,r){const s=ao(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=kl(),u=Nl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const g=o.join("");Q(Te,`Creating RPC '${e}' stream ${s}: ${g}`,h);const I=a.createWebChannel(g,h);this.I_(I);let E=!1,R=!1;const S=new GI({Yo:D=>{R?Q(Te,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(E||(Q(Te,`Opening RPC '${e}' stream ${s} transport.`),I.open(),E=!0),Q(Te,`RPC '${e}' stream ${s} sending:`,D),I.send(D))},Zo:()=>I.close()}),k=(D,U,H)=>{D.listen(U,W=>{try{H(W)}catch(he){setTimeout(()=>{throw he},0)}})};return k(I,Zn.EventType.OPEN,()=>{R||(Q(Te,`RPC '${e}' stream ${s} transport opened.`),S.o_())}),k(I,Zn.EventType.CLOSE,()=>{R||(R=!0,Q(Te,`RPC '${e}' stream ${s} transport closed`),S.a_(),this.E_(I))}),k(I,Zn.EventType.ERROR,D=>{R||(R=!0,En(Te,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),S.a_(new N(B.UNAVAILABLE,"The operation could not be completed")))}),k(I,Zn.EventType.MESSAGE,D=>{if(!R){const U=D.data[0];X(!!U,16349);const H=U,W=H?.error||H[0]?.error;if(W){Q(Te,`RPC '${e}' stream ${s} received error:`,W);const he=W.status;let He=function(A){const p=se[A];if(p!==void 0)return fh(p)}(he),pe=W.message;He===void 0&&(He=B.INTERNAL,pe="Unknown error status: "+he+" with message "+W.message),R=!0,S.a_(new N(He,pe)),I.close()}else Q(Te,`RPC '${e}' stream ${s} received:`,U),S.u_(U)}}),k(u,Ql.STAT_EVENT,D=>{D.stat===Xi.PROXY?Q(Te,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Xi.NOPROXY&&Q(Te,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.__()},0),S}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Vi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(n){return new $p(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,t,r=1e3,s=1.5,o=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&Q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="PersistentStream";class Bh{constructor(e,t,r,s,o,a,u,h){this.Mi=e,this.S_=r,this.b_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Rh(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(ut(t.toString()),ut("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new N(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Q(Iu,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(Q(Iu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class JI extends Bh{constructor(e,t,r,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=nI(this.serializer,e),r=function(o){if(!("targetChange"in o))return x.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?x.min():a.readTime?Ye(a.readTime):x.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=io(this.serializer),t.addTarget=function(o,a){let u;const h=a.target;if(u=eo(h)?{documents:iI(o,h)}:{query:oI(o,h).ft},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=mh(o,a.resumeToken);const d=no(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(x.min())>0){u.readTime=Ps(o,a.snapshotVersion.toTimestamp());const d=no(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const r=cI(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=io(this.serializer),t.removeTarget=e,this.q_(t)}}class KI extends Bh{constructor(e,t,r,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return X(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){X(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=sI(e.writeResults,e.commitTime),r=Ye(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=io(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>rI(this.serializer,r))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{}class $I extends ZI{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new N(B.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Go(e,ro(t,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(B.UNKNOWN,o.toString())})}Ho(e,t,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Ho(e,ro(t,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(B.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class eE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ut(t),this.aa=!1):Q("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="RemoteStore";class tE{constructor(e,t,r,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{$t(this)&&(Q(Jt,"Restarting streams for network reachability change."),await async function(h){const d=F(h);d.Ea.add(4),await Br(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Ys(d)}(this))})}),this.Ra=new eE(r,s)}}async function Ys(n){if($t(n))for(const e of n.da)await e(!0)}async function Br(n){for(const e of n.da)await e(!1)}function bh(n,e){const t=F(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Wo(t)?qo(t):Dn(t).O_()&&zo(t,e))}function jo(n,e){const t=F(n),r=Dn(t);t.Ia.delete(e),r.O_()&&Sh(t,e),t.Ia.size===0&&(r.O_()?r.L_():$t(t)&&t.Ra.set("Unknown"))}function zo(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(x.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Dn(n).Y_(e)}function Sh(n,e){n.Va.Ue(e),Dn(n).Z_(e)}function qo(n){n.Va=new Xp({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Dn(n).start(),n.Ra.ua()}function Wo(n){return $t(n)&&!Dn(n).x_()&&n.Ia.size>0}function $t(n){return F(n).Ea.size===0}function Dh(n){n.Va=void 0}async function nE(n){n.Ra.set("Online")}async function rE(n){n.Ia.forEach((e,t)=>{zo(n,e)})}async function sE(n,e){Dh(n),Wo(n)?(n.Ra.ha(e),qo(n)):n.Ra.set("Unknown")}async function iE(n,e,t){if(n.Ra.set("Online"),e instanceof Ah&&e.state===2&&e.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.Ia.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ia.delete(u),s.Va.removeTarget(u))}(n,e)}catch(r){Q(Jt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bs(n,r)}else if(e instanceof us?n.Va.Ze(e):e instanceof gh?n.Va.st(e):n.Va.tt(e),!t.isEqual(x.min()))try{const r=await Ph(n.localStore);t.compareTo(r)>=0&&await function(o,a){const u=o.Va.Tt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const g=o.Ia.get(d);g&&o.Ia.set(d,g.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const g=o.Ia.get(h);if(!g)return;o.Ia.set(h,g.withResumeToken(me.EMPTY_BYTE_STRING,g.snapshotVersion)),Sh(o,h);const I=new Tt(g.target,h,d,g.sequenceNumber);zo(o,I)}),o.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){Q(Jt,"Failed to raise snapshot:",r),await Bs(n,r)}}async function Bs(n,e,t){if(!Sn(e))throw e;n.Ea.add(1),await Br(n),n.Ra.set("Offline"),t||(t=()=>Ph(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Q(Jt,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Ys(n)})}function Qh(n,e){return e().catch(t=>Bs(n,t,e))}async function Gs(n){const e=F(n),t=Qt(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Bo;for(;oE(e);)try{const s=await HI(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,aE(e,s)}catch(s){await Bs(e,s)}Nh(e)&&kh(e)}function oE(n){return $t(n)&&n.Ta.length<10}function aE(n,e){n.Ta.push(e);const t=Qt(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Nh(n){return $t(n)&&!Qt(n).x_()&&n.Ta.length>0}function kh(n){Qt(n).start()}async function cE(n){Qt(n).ra()}async function uE(n){const e=Qt(n);for(const t of n.Ta)e.ea(t.mutations)}async function lE(n,e,t){const r=n.Ta.shift(),s=Mo.from(r,e,t);await Qh(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Gs(n)}async function hE(n,e){e&&Qt(n).X_&&await async function(r,s){if(function(a){return Wp(a)&&a!==B.ABORTED}(s.code)){const o=r.Ta.shift();Qt(r).B_(),await Qh(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Gs(r)}}(n,e),Nh(n)&&kh(n)}async function Eu(n,e){const t=F(n);t.asyncQueue.verifyOperationInProgress(),Q(Jt,"RemoteStore received new credentials");const r=$t(t);t.Ea.add(3),await Br(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ys(t)}async function dE(n,e){const t=F(n);e?(t.Ea.delete(2),await Ys(t)):e||(t.Ea.add(2),await Br(t),t.Ra.set("Unknown"))}function Dn(n){return n.ma||(n.ma=function(t,r,s){const o=F(t);return o.sa(),new JI(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Xo:nE.bind(null,n),t_:rE.bind(null,n),r_:sE.bind(null,n),H_:iE.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),Wo(n)?qo(n):n.Ra.set("Unknown")):(await n.ma.stop(),Dh(n))})),n.ma}function Qt(n){return n.fa||(n.fa=function(t,r,s){const o=F(t);return o.sa(),new KI(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:cE.bind(null,n),r_:hE.bind(null,n),ta:uE.bind(null,n),na:lE.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await Gs(n)):(await n.fa.stop(),n.Ta.length>0&&(Q(Jt,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,t,r,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new it,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,o){const a=Date.now()+r,u=new Yo(e,t,a,s,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Go(n,e){if(ut("AsyncQueue",`${e}: ${n}`),Sn(n))return new N(B.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{static emptySet(e){return new gn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||O.comparator(t.key,r.key):(t,r)=>O.comparator(t.key,r.key),this.keyedMap=$n(),this.sortedSet=new ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof gn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new gn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){this.ga=new ee(O.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):V(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class vn{constructor(e,t,r,s,o,a,u,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,o){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new vn(e,t,gn.emptySet(t),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class gE{constructor(){this.queries=Cu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=F(t),o=s.queries;s.queries=Cu(),o.forEach((a,u)=>{for(const h of u.Sa)h.onError(r)})})(this,new N(B.ABORTED,"Firestore shutting down"))}}function Cu(){return new Zt(n=>th(n),Hs)}async function Oh(n,e){const t=F(n);let r=3;const s=e.query;let o=t.queries.get(s);o?!o.ba()&&e.Da()&&(r=2):(o=new fE,r=e.Da()?0:1);try{switch(r){case 0:o.wa=await t.onListen(s,!0);break;case 1:o.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const u=Go(a,`Initialization of query '${an(e.query)}' failed`);return void e.onError(u)}t.queries.set(s,o),o.Sa.push(e),e.va(t.onlineState),o.wa&&e.Fa(o.wa)&&Xo(t)}async function Mh(n,e){const t=F(n),r=e.query;let s=3;const o=t.queries.get(r);if(o){const a=o.Sa.indexOf(e);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=e.Da()?0:1:!o.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function AE(n,e){const t=F(n);let r=!1;for(const s of e){const o=s.query,a=t.queries.get(o);if(a){for(const u of a.Sa)u.Fa(s)&&(r=!0);a.wa=s}}r&&Xo(t)}function mE(n,e,t){const r=F(n),s=r.queries.get(e);if(s)for(const o of s.Sa)o.onError(t);r.queries.delete(e)}function Xo(n){n.Ca.forEach(e=>{e.next()})}var co,Tu;(Tu=co||(co={})).Ma="default",Tu.Cache="cache";class Vh{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new vn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=vn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==co.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e){this.key=e}}class Lh{constructor(e){this.key=e}}class pE{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=q(),this.mutatedKeys=q(),this.eu=nh(e),this.tu=new gn(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new yu,s=t?t.tu:this.tu;let o=t?t.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((g,I)=>{const E=s.get(g),R=Us(this.query,I)?I:null,S=!!E&&this.mutatedKeys.has(E.key),k=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let D=!1;E&&R?E.data.isEqual(R.data)?S!==k&&(r.track({type:3,doc:R}),D=!0):this.su(E,R)||(r.track({type:2,doc:R}),D=!0,(h&&this.eu(R,h)>0||d&&this.eu(R,d)<0)&&(u=!0)):!E&&R?(r.track({type:0,doc:R}),D=!0):E&&!R&&(r.track({type:1,doc:E}),D=!0,(h||d)&&(u=!0)),D&&(R?(a=a.add(R),o=k?o.add(g):o.delete(g)):(a=a.delete(g),o=o.delete(g)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),o=o.delete(g.key),r.track({type:1,doc:g})}return{tu:a,iu:r,Cs:u,mutatedKeys:o}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((g,I)=>function(R,S){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V(20277,{Rt:D})}};return k(R)-k(S)}(g.type,I.type)||this.eu(g.doc,I.doc)),this.ou(r),s=s??!1;const u=t&&!s?this._u():[],h=this.Xa.size===0&&this.current&&!s?1:0,d=h!==this.Za;return this.Za=h,a.length!==0||d?{snapshot:new vn(this.query,e.tu,o,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new yu,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=q(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new Lh(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new xh(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=q();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return vn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Jo="SyncEngine";class IE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class EE{constructor(e){this.key=e,this.hu=!1}}class yE{constructor(e,t,r,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Zt(u=>th(u),Hs),this.Iu=new Map,this.Eu=new Set,this.du=new ee(O.comparator),this.Au=new Map,this.Ru=new Lo,this.Vu={},this.mu=new Map,this.fu=_n.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function CE(n,e,t=!0){const r=qh(n);let s;const o=r.Tu.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await Fh(r,e,t,!0),s}async function TE(n,e){const t=qh(n);await Fh(t,e,!0,!1)}async function Fh(n,e,t,r){const s=await UI(n.localStore,We(e)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let u;return r&&(u=await _E(n,e,o,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&bh(n.remoteStore,s),u}async function _E(n,e,t,r,s){n.pu=(I,E,R)=>async function(k,D,U,H){let W=D.view.ru(U);W.Cs&&(W=await gu(k.localStore,D.query,!1).then(({documents:T})=>D.view.ru(T,W)));const he=H&&H.targetChanges.get(D.targetId),He=H&&H.targetMismatches.get(D.targetId)!=null,pe=D.view.applyChanges(W,k.isPrimaryClient,he,He);return vu(k,D.targetId,pe.au),pe.snapshot}(n,I,E,R);const o=await gu(n.localStore,e,!0),a=new pE(e,o.Qs),u=a.ru(o.documents),h=Rr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,h);vu(n,t,d.au);const g=new IE(e,t,a);return n.Tu.set(e,g),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function vE(n,e,t){const r=F(n),s=r.Tu.get(e),o=r.Iu.get(s.targetId);if(o.length>1)return r.Iu.set(s.targetId,o.filter(a=>!Hs(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await oo(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&jo(r.remoteStore,s.targetId),uo(r,s.targetId)}).catch(bn)):(uo(r,s.targetId),await oo(r.localStore,s.targetId,!0))}async function wE(n,e){const t=F(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),jo(t.remoteStore,r.targetId))}async function PE(n,e,t){const r=NE(n);try{const s=await function(a,u){const h=F(a),d=$.now(),g=u.reduce((R,S)=>R.add(S.key),q());let I,E;return h.persistence.runTransaction("Locally write mutations","readwrite",R=>{let S=lt(),k=q();return h.Ns.getEntries(R,g).next(D=>{S=D,S.forEach((U,H)=>{H.isValidDocument()||(k=k.add(U))})}).next(()=>h.localDocuments.getOverlayedDocuments(R,S)).next(D=>{I=D;const U=[];for(const H of u){const W=Hp(H,I.get(H.key).overlayedDocument);W!=null&&U.push(new Mt(H.key,W,Gl(W.value.mapValue),Le.exists(!0)))}return h.mutationQueue.addMutationBatch(R,d,U,u)}).next(D=>{E=D;const U=D.applyToLocalDocumentSet(I,k);return h.documentOverlayCache.saveOverlays(R,D.batchId,U)})}).then(()=>({batchId:E.batchId,changes:sh(I)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let d=a.Vu[a.currentUser.toKey()];d||(d=new ee(z)),d=d.insert(u,h),a.Vu[a.currentUser.toKey()]=d}(r,s.batchId,t),await br(r,s.changes),await Gs(r.remoteStore)}catch(s){const o=Go(s,"Failed to persist write");t.reject(o)}}async function Hh(n,e){const t=F(n);try{const r=await LI(t.localStore,e);e.targetChanges.forEach((s,o)=>{const a=t.Au.get(o);a&&(X(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?X(a.hu,14607):s.removedDocuments.size>0&&(X(a.hu,42227),a.hu=!1))}),await br(t,r,e)}catch(r){await bn(r)}}function _u(n,e,t){const r=F(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((o,a)=>{const u=a.view.va(e);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=F(a);h.onlineState=u;let d=!1;h.queries.forEach((g,I)=>{for(const E of I.Sa)E.va(u)&&(d=!0)}),d&&Xo(h)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function RE(n,e,t){const r=F(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),o=s&&s.key;if(o){let a=new ee(O.comparator);a=a.insert(o,ve.newNoDocument(o,x.min()));const u=q().add(o),h=new qs(x.min(),new Map,new ee(z),a,u);await Hh(r,h),r.du=r.du.remove(o),r.Au.delete(e),Ko(r)}else await oo(r.localStore,e,!1).then(()=>uo(r,e,t)).catch(bn)}async function BE(n,e){const t=F(n),r=e.batch.batchId;try{const s=await xI(t.localStore,e);jh(t,r,null),Uh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await br(t,s)}catch(s){await bn(s)}}async function bE(n,e,t){const r=F(n);try{const s=await function(a,u){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let g;return h.mutationQueue.lookupMutationBatch(d,u).next(I=>(X(I!==null,37113),g=I.keys(),h.mutationQueue.removeMutationBatch(d,I))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,g,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,g)).next(()=>h.localDocuments.getDocuments(d,g))})}(r.localStore,e);jh(r,e,t),Uh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await br(r,s)}catch(s){await bn(s)}}function Uh(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function jh(n,e,t){const r=F(n);let s=r.Vu[r.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function uo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||zh(n,r)})}function zh(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(jo(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Ko(n))}function vu(n,e,t){for(const r of t)r instanceof xh?(n.Ru.addReference(r.key,e),SE(n,r)):r instanceof Lh?(Q(Jo,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||zh(n,r.key)):V(19791,{wu:r})}function SE(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(Q(Jo,"New document in limbo: "+t),n.Eu.add(r),Ko(n))}function Ko(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new O(Z.fromString(e)),r=n.fu.next();n.Au.set(r,new EE(t)),n.du=n.du.insert(t,r),bh(n.remoteStore,new Tt(We(No(t.path)),r,"TargetPurposeLimboResolution",Vs.ce))}}async function br(n,e,t){const r=F(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((u,h)=>{a.push(r.pu(h,e,t).then(d=>{if((d||t)&&r.isPrimaryClient){const g=d?!d.fromCache:t?.targetChanges.get(h.targetId)?.current;r.sharedClientState.updateQueryState(h.targetId,g?"current":"not-current")}if(d){s.push(d);const g=Ho.As(h.targetId,d);o.push(g)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(h,d){const g=F(h);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>P.forEach(d,E=>P.forEach(E.Es,R=>g.persistence.referenceDelegate.addReference(I,E.targetId,R)).next(()=>P.forEach(E.ds,R=>g.persistence.referenceDelegate.removeReference(I,E.targetId,R)))))}catch(I){if(!Sn(I))throw I;Q(Uo,"Failed to update sequence numbers: "+I)}for(const I of d){const E=I.targetId;if(!I.fromCache){const R=g.Ms.get(E),S=R.snapshotVersion,k=R.withLastLimboFreeSnapshotVersion(S);g.Ms=g.Ms.insert(E,k)}}}(r.localStore,o))}async function DE(n,e){const t=F(n);if(!t.currentUser.isEqual(e)){Q(Jo,"User change. New user:",e.toKey());const r=await wh(t.localStore,e);t.currentUser=e,function(o,a){o.mu.forEach(u=>{u.forEach(h=>{h.reject(new N(B.CANCELLED,a))})}),o.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await br(t,r.Ls)}}function QE(n,e){const t=F(n),r=t.Au.get(e);if(r&&r.hu)return q().add(r.key);{let s=q();const o=t.Iu.get(e);if(!o)return s;for(const a of o){const u=t.Tu.get(a);s=s.unionWith(u.view.nu)}return s}}function qh(n){const e=F(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RE.bind(null,e),e.Pu.H_=AE.bind(null,e.eventManager),e.Pu.yu=mE.bind(null,e.eventManager),e}function NE(n){const e=F(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bE.bind(null,e),e}class bs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ws(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return VI(this.persistence,new kI,e.initialUser,this.serializer)}Cu(e){return new vh(Fo.mi,this.serializer)}Du(e){return new zI}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bs.provider={build:()=>new bs};class kE extends bs{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){X(this.persistence.referenceDelegate instanceof Rs,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new EI(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Se.withCacheSize(this.cacheSizeBytes):Se.DEFAULT;return new vh(r=>Rs.mi(r,t),this.serializer)}}class lo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_u(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=DE.bind(null,this.syncEngine),await dE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new gE}()}createDatastore(e){const t=Ws(e.databaseInfo.databaseId),r=function(o){return new XI(o)}(e.databaseInfo);return function(o,a,u,h){return new $I(o,a,u,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,o,a,u){return new tE(r,s,o,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>_u(this.syncEngine,t,0),function(){return pu.v()?new pu:new qI}())}createSyncEngine(e,t){return function(s,o,a,u,h,d,g){const I=new yE(s,o,a,u,h,d);return g&&(I.gu=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const r=F(t);Q(Jt,"RemoteStore shutting down."),r.Ea.add(5),await Br(r),r.Aa.shutdown(),r.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}lo.provider={build:()=>new lo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ut("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="FirestoreClient";class OE{constructor(e,t,r,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=_e.UNAUTHENTICATED,this.clientId=Po.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{Q(Nt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Q(Nt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new it;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Go(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xi(n,e){n.asyncQueue.verifyOperationInProgress(),Q(Nt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await wh(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function wu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ME(n);Q(Nt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Eu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Eu(e.remoteStore,s)),n._onlineComponents=e}async function ME(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Q(Nt,"Using user provided OfflineComponentProvider");try{await xi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;En("Error using user provided cache. Falling back to memory cache: "+t),await xi(n,new bs)}}else Q(Nt,"Using default OfflineComponentProvider"),await xi(n,new kE(void 0));return n._offlineComponents}async function Yh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Q(Nt,"Using user provided OnlineComponentProvider"),await wu(n,n._uninitializedComponentsProvider._online)):(Q(Nt,"Using default OnlineComponentProvider"),await wu(n,new lo))),n._onlineComponents}function VE(n){return Yh(n).then(e=>e.syncEngine)}async function Gh(n){const e=await Yh(n),t=e.eventManager;return t.onListen=CE.bind(null,e.syncEngine),t.onUnlisten=vE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=TE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=wE.bind(null,e.syncEngine),t}function xE(n,e,t={}){const r=new it;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const g=new Wh({next:E=>{g.Nu(),a.enqueueAndForget(()=>Mh(o,I));const R=E.docs.has(u);!R&&E.fromCache?d.reject(new N(B.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&E.fromCache&&h&&h.source==="server"?d.reject(new N(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),I=new Vh(No(u.path),g,{includeMetadataChanges:!0,qa:!0});return Oh(o,I)}(await Gh(n),n.asyncQueue,e,t,r)),r.promise}function LE(n,e,t={}){const r=new it;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const g=new Wh({next:E=>{g.Nu(),a.enqueueAndForget(()=>Mh(o,I)),E.fromCache&&h.source==="server"?d.reject(new N(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(E)},error:E=>d.reject(E)}),I=new Vh(u,g,{includeMetadataChanges:!0,qa:!0});return Oh(o,I)}(await Gh(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="firestore.googleapis.com",Ru=!0;class Bu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new N(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Jh,this.ssl=Ru}else this.host=e.host,this.ssl=e.ssl??Ru;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_h;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<pI)throw new N(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ep("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xh(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new N(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new N(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new N(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xs{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new N(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new zm;switch(r.type){case"firstParty":return new Gm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Pu.get(t);r&&(Q("ComponentProvider","Removing Datastore"),Pu.delete(t),r.terminate())}(this),Promise.resolve()}}function FE(n,e,t,r={}){n=Je(n,Xs);const s=wn(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},u=`${e}:${t}`;s&&(xu(`https://${u}`),Lu("Firestore",!0)),o.host!==Jh&&o.host!==u&&En("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:u,ssl:s,emulatorOptions:r};if(!qt(h,a)&&(n._setSettings(h),r.mockUserToken)){let d,g;if(typeof r.mockUserToken=="string")d=r.mockUserToken,g=_e.MOCK_USER;else{d=Kd(r.mockUserToken,n._app?.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new N(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new _e(I)}n._authCredentials=new qm(new Ml(d,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Js(this.firestore,e,this._query)}}class oe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new oe(this.firestore,e,this._key)}toJSON(){return{type:oe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(wr(t,oe._jsonSchema))return new oe(e,r||null,new O(Z.fromString(t.referencePath)))}}oe._jsonSchemaVersion="firestore/documentReference/1.0",oe._jsonSchema={type:ie("string",oe._jsonSchemaVersion),referencePath:ie("string")};class Rt extends Js{constructor(e,t,r){super(e,t,No(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new oe(this.firestore,null,new O(e))}withConverter(e){return new Rt(this.firestore,e,this._path)}}function Ks(n,e,...t){if(n=ue(n),Vl("collection","path",e),n instanceof Xs){const r=Z.fromString(e,...t);return Uc(r),new Rt(n,null,r)}{if(!(n instanceof oe||n instanceof Rt))throw new N(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(e,...t));return Uc(r),new Rt(n.firestore,null,r)}}function L(n,e,...t){if(n=ue(n),arguments.length===1&&(e=Po.newId()),Vl("doc","path",e),n instanceof Xs){const r=Z.fromString(e,...t);return Hc(r),new oe(n,null,new O(r))}{if(!(n instanceof oe||n instanceof Rt))throw new N(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(e,...t));return Hc(r),new oe(n.firestore,n instanceof Rt?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="AsyncQueue";class Su{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Rh(this,"async_queue_retry"),this._c=()=>{const r=Vi();r&&Q(bu,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Vi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Vi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new it;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Sn(e))throw e;Q(bu,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,ut("INTERNAL UNHANDLED ERROR: ",Du(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Yo.createAndSchedule(this,e,t,r,o=>this.hc(o));return this.tc.push(s),s}uc(){this.nc&&V(47125,{Pc:Du(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Du(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Qn extends Xs{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Su,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Su(e),this._firestoreClient=void 0,await e}}}function HE(n,e){const t=typeof n=="object"?n:ju(),r=typeof n=="string"?n:ys,s=Ao(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Xd("firestore");o&&FE(s,...o)}return s}function Zo(n){if(n._terminated)throw new N(B.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||UE(n),n._firestoreClient}function UE(n){const e=n._freezeSettings(),t=function(s,o,a,u){return new hp(s,o,a,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Xh(u.experimentalLongPollingOptions),u.useFetchStreams,u.isUsingEmulator)}(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new OE(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(s){const o=s?._online.build();return{_offline:s?._offline.build(o),_online:o}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Me(me.fromBase64String(e))}catch(t){throw new N(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Me(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Me._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(wr(e,Me._jsonSchema))return Me.fromBase64String(e.bytes)}}Me._jsonSchemaVersion="firestore/bytes/1.0",Me._jsonSchema={type:ie("string",Me._jsonSchemaVersion),bytes:ie("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new N(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ge._jsonSchemaVersion}}static fromJSON(e){if(wr(e,Ge._jsonSchema))return new Ge(e.latitude,e.longitude)}}Ge._jsonSchemaVersion="firestore/geoPoint/1.0",Ge._jsonSchema={type:ie("string",Ge._jsonSchemaVersion),latitude:ie("number"),longitude:ie("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Xe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(wr(e,Xe._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Xe(e.vectorValues);throw new N(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xe._jsonSchemaVersion="firestore/vectorValue/1.0",Xe._jsonSchema={type:ie("string",Xe._jsonSchemaVersion),vectorValues:ie("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=/^__.*__$/;class zE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Mt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Pr(e,this.data,t,this.fieldTransforms)}}class Kh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Mt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Zh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw V(40011,{Ac:n})}}class ea{constructor(e,t,r,s,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ea({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ss(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Zh(this.Ac)&&jE.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class qE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ws(e)}Cc(e,t,r,s=!1){return new ea({Ac:e,methodName:t,Dc:r,path:ge.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $h(n){const e=n._freezeSettings(),t=Ws(n._databaseId);return new qE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function WE(n,e,t,r,s,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,e,t,s);ta("Data must be an object, but it was:",a,r);const u=ed(r,a);let h,d;if(o.merge)h=new Ne(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const g=[];for(const I of o.mergeFields){const E=ho(e,I,t);if(!a.contains(E))throw new N(B.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);nd(g,E)||g.push(E)}h=new Ne(g),d=a.fieldTransforms.filter(I=>h.covers(I.field))}else h=null,d=a.fieldTransforms;return new zE(new De(u),h,d)}class $s extends $o{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $s}}function YE(n,e,t,r){const s=n.Cc(1,e,t);ta("Data must be an object, but it was:",s,r);const o=[],a=De.empty();Ot(r,(h,d)=>{const g=na(e,h,t);d=ue(d);const I=s.yc(g);if(d instanceof $s)o.push(g);else{const E=ei(d,I);E!=null&&(o.push(g),a.set(g,E))}});const u=new Ne(o);return new Kh(a,u,s.fieldTransforms)}function GE(n,e,t,r,s,o){const a=n.Cc(1,e,t),u=[ho(e,r,t)],h=[s];if(o.length%2!=0)throw new N(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<o.length;E+=2)u.push(ho(e,o[E])),h.push(o[E+1]);const d=[],g=De.empty();for(let E=u.length-1;E>=0;--E)if(!nd(d,u[E])){const R=u[E];let S=h[E];S=ue(S);const k=a.yc(R);if(S instanceof $s)d.push(R);else{const D=ei(S,k);D!=null&&(d.push(R),g.set(R,D))}}const I=new Ne(d);return new Kh(g,I,a.fieldTransforms)}function ei(n,e){if(td(n=ue(n)))return ta("Unsupported field value:",e,n),ed(n,e);if(n instanceof $o)return function(r,s){if(!Zh(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=ei(u,s.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,s){if((r=ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Op(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=$.fromDate(r);return{timestampValue:Ps(s.serializer,o)}}if(r instanceof $){const o=new $(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ps(s.serializer,o)}}if(r instanceof Ge)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Me)return{bytesValue:mh(s.serializer,r._byteString)};if(r instanceof oe){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:xo(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Xe)return function(a,u){return{mapValue:{fields:{[Wl]:{stringValue:Yl},[Cs]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.Sc("VectorValues must only contain numeric values.");return ko(u.serializer,d)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Ro(r)}`)}(n,e)}function ed(n,e){const t={};return Fl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ot(n,(r,s)=>{const o=ei(s,e.mc(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function td(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof $||n instanceof Ge||n instanceof Me||n instanceof oe||n instanceof $o||n instanceof Xe)}function ta(n,e,t){if(!td(t)||!xl(t)){const r=Ro(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function ho(n,e,t){if((e=ue(e))instanceof Zs)return e._internalPath;if(typeof e=="string")return na(n,e);throw Ss("Field path arguments must be of type string or ",n,!1,void 0,t)}const XE=new RegExp("[~\\*/\\[\\]]");function na(n,e,t){if(e.search(XE)>=0)throw Ss(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Zs(...e.split("."))._internalPath}catch{throw Ss(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ss(n,e,t,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new N(B.INVALID_ARGUMENT,u+n+h)}function nd(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t,r,s,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(sd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class JE extends rd{data(){return super.data()}}function sd(n,e){return typeof e=="string"?na(n,e):e instanceof Zs?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ZE{convertValue(e,t="none"){switch(Dt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(St(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw V(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ot(e,(s,o)=>{r[s]=this.convertValue(o,t)}),r}convertVectorValue(e){const t=e.fields?.[Cs].arrayValue?.values?.map(r=>ne(r.doubleValue));return new Xe(t)}convertGeoPoint(e){return new Ge(ne(e.latitude),ne(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ls(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(gr(e));default:return null}}convertTimestamp(e){const t=bt(e);return new $(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Z.fromString(e);X(Th(r),9688,{name:e});const s=new Ar(r.get(1),r.get(3)),o=new O(r.popFirst(5));return s.isEqual(t)||ut(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class tr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zt extends rd{constructor(e,t,r,s,o,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ls(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(sd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=zt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}zt._jsonSchemaVersion="firestore/documentSnapshot/1.0",zt._jsonSchema={type:ie("string",zt._jsonSchemaVersion),bundleSource:ie("string","DocumentSnapshot"),bundleName:ie("string"),bundle:ie("string")};class ls extends zt{data(e={}){return super.data(e)}}class An{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new tr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ls(this._firestore,this._userDataWriter,r.key,r,new tr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new N(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const h=new ls(s._firestore,s._userDataWriter,u.doc.key,u.doc,new tr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new ls(s._firestore,s._userDataWriter,u.doc.key,u.doc,new tr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,g=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),g=a.indexOf(u.doc.key)),{type:ey(u.type),doc:h,oldIndex:d,newIndex:g}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=An._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Po.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(t.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ey(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(n){n=Je(n,oe);const e=Je(n.firestore,Qn);return xE(Zo(e),n._key).then(t=>ty(e,n,t))}An._jsonSchemaVersion="firestore/querySnapshot/1.0",An._jsonSchema={type:ie("string",An._jsonSchemaVersion),bundleSource:ie("string","QuerySnapshot"),bundleName:ie("string"),bundle:ie("string")};class id extends ZE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Me(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new oe(this.firestore,null,t)}}function ni(n){n=Je(n,Js);const e=Je(n.firestore,Qn),t=Zo(e),r=new id(e);return KE(n._query),LE(t,n._query).then(s=>new An(e,r,n,s))}function en(n,e,t){n=Je(n,oe);const r=Je(n.firestore,Qn),s=$E(n.converter,e);return ia(r,[WE($h(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Le.none())])}function ra(n,e,t,...r){n=Je(n,oe);const s=Je(n.firestore,Qn),o=$h(s);let a;return a=typeof(e=ue(e))=="string"||e instanceof Zs?GE(o,"updateDoc",n._key,e,t,r):YE(o,"updateDoc",n._key,e),ia(s,[a.toMutation(n._key,Le.exists(!0))])}function sa(n){return ia(Je(n.firestore,Qn),[new Oo(n._key,Le.none())])}function ia(n,e){return function(r,s){const o=new it;return r.asyncQueue.enqueueAndForget(async()=>PE(await VE(r),s,o)),o.promise}(Zo(n),e)}function ty(n,e,t){const r=t.docs.get(e._key),s=new id(n);return new zt(n,s,e._key,r,new tr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Bn=s})(Pn),mn(new Wt("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new Qn(new Wm(r.getProvider("auth-internal")),new Xm(a,r.getProvider("app-check-internal")),function(d,g){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ar(d.options.projectId,g)}(a,s),a);return o={useFetchStreams:t,...o},u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),wt(Vc,xc,e),wt(Vc,xc,"esm2020")})();function ny(){return[]}function ry(){return new In({name:"Local Area",width:63,height:63,id:"vY4BHs3ebZZ1MUnqTEi7",previewImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA48AAAOGCAYAAABMZqXHAAAgAElEQVR4XuzdCdx8V10ffrL8IpGyyipoJYBLqTGQBIxr6h+LtdbaIqWK1lrXVqtUxOVfW1u0dam7Fm2t1tpai/gSrbUuVEvpX2NMCAgiIimURRRBWRJC9vy/53FOOLm/e+eemTsz99x53s/rNa+ZZ+Yu577PmXvuZ86dO+fcyx8BAgQIECBAgAABAgQIEBgROIcQAQIECBAgQIAAAQIECBAYExAex4S8ToAAAQIECBAgQIAAAQL3Eh41AgIECBAgQIAAAQIECBAYFRAeR4lMQIAAAQIECBAgQIAAAQLCozZAgAABAgQIECBAgAABAqMCwuMokQkIECBAgAABAgQIECBAQHjUBggQIECAAAECBAgQIEBgVEB4HCUyAQECBAgQIECAAAECBAgIj9oAAQIECBAgQIAAAQIECIwKCI+jRCYgQIAAAQIECBAgQIAAAeFRGyBAgAABAgQIECBAgACBUQHhcZTIBAQIECBAgAABAgQIECAgPGoDBAgQIECAAAECBAgQIDAqIDyOEpmAAAECBAgQIECAAAECBIRHbYAAAQIECBAgQIAAAQIERgWEx1EiExAgQIAAAQIECBAgQICA8KgNECBAgAABAgQIECBAgMCogPA4SmQCAgQIECBAgAABAgQIEBAetQECBAgQIECAAAECBAgQGBUQHkeJTECAAAECBAgQIECAAAECwqM2QIAAAQIECBAgQIAAAQKjAsLjKJEJCBAgQIAAAQIECBAgQEB41AYIECBAgAABAgQIECBAYFRAeBwlMgEBAgQIECBAgAABAgQICI/aAAECBAgQIECAAAECBAiMCgiPo0QmIECAAAECBAgQIECAAAHhURsgQIAAAQIECBAgQIAAgVEB4XGUyAQECBAgQIAAAQIECBAgIDxqAwQIECBAgAABAgQIECAwKiA8jhKZgAABAgQIECBAgAABAgSER22AAAECBAgQIECAAAECBEYFhMdRIhMQIECAAAECBAgQIECAgPCoDRAgQIAAAQIECBAgQIDAqIDwOEpkAgIECBAgQIAAAQIECBAQHrUBAgQIECBAgAABAgQIEBgVEB5HiUxAgAABAgQIECBAgAABAsKjNkCAAAECBAgQIECAAAECowLC4yiRCQgQIECAAAECBAgQIEBAeNQGCBAgQIAAAQIECBAgQGBUQHgcJTIBAQIECBAgQIAAAQIECAiP2gABAgQIECBAgAABAgQIjAoIj6NEJiBAgAABAgQIECBAgAAB4VEbIECAAAECBAgQIECAAIFRAeFxlMgEBAgQIECAAAECBAgQICA8agMECBAgQIAAAQIECBAgMCogPI4SmYAAAQIECBAgQIAAAQIEhEdtgAABAgQIECBAgAABAgRGBYTHUSITECBAgAABAgQIECBAgIDwqA0QIECAAAECBAgQIECAwKiA8DhKZAICBAgQIECAAAECBAgQEB61AQIECBAgQIAAAQIECBAYFRAeR4lMQIAAAQIECBAgQIAAAQLCozZAgAABAgQIECBAgAABAqMCwuMokQkIECBAgAABAgQIECBAQHjUBggQIECAAAECBAgQIEBgVEB4HCUyAQECBAgQIECAAAECBAgIj9oAAQIECBAgQIAAAQIECIwKCI+jRCYgQIAAAQIECBAgQIAAAeFRGyBAgAABAgQIECBAgACBUQHhcZTIBAQIECBAgAABAgQIECAgPGoDBAgQIECAAAECBAgQIDAqIDyOEpmAAAECBAgQIECAAAECBIRHbYAAAQIECBAgQIAAAQIERgWEx1EiExAgQIAAAQIECBAgQICA8KgNECBAgAABAgQIECBAgMCogPA4SmQCAgQIECBAgAABAgQIEBAetQECBAgQIECAAAECBAgQGBUQHkeJTECAAAECBAgQIECAAAECwqM2QIAAAQIECBAgQIAAAQKjAsLjKJEJCBAgQIAAAQIECBAgQEB41AYIECBAgAABAgQIECBAYFRAeBwlMgEBAgQIECBAgAABAgQICI/aAAECBAgQIECAAAECBAiMCgiPo0QmIECAAAECBAgQIECAAAHhURsgQIAAAQIECBAgQIAAgVEB4XGUyAQECBAgQIAAAQIECBAgIDxqAwQIECBAgAABAgQIECAwKiA8jhKZgAABAgQIECBAgAABAgSER22AAAECBAgQIECAAAECBEYFhMdRIhMQIECAAAECBAgQIECAgPCoDRAgQIAAAQIECBAgQIDAqIDwOEpkAgIECBAgQIAAAQIECBAQHrUBAgQIECBAgAABAgQIEBgVEB5HiUxAgAABAgQIECBAgAABAsKjNkCAAAECBAgQIECAAAECowLC4yiRCQgQIECAAAECBAgQIEBAeNQGCBAgQIAAAQIECBAgQGBUQHgcJTIBAQIECBAgQIAAAQIECAiP2gABAgQIECBAgAABAgQIjAoIj6NEJiBAgAABAgQIECBAgAAB4VEbIECAAAECBAgQIECAAIFRAeFxlMgEBAgQIECAAAECBAgQICA8agMECBAgQIAAAQIECBAgMCogPI4SmYAAAQIECBAgQIAAAQIEhEdtgAABAgQIECBAgAABAgRGBYTHUSITECBAgAABAgQIECBAgIDwqA0QIECAAAECBAgQIECAwKiA8DhKZAICBAgQIECAAAECBAgQEB61AQIECBAgQIAAAQIECBAYFRAeR4lMQIAAAQIECBAgQIAAAQLCozZAgAABAgQIECBAgAABAqMCwuMokQkIECBAgAABAgQIECBAQHjUBggQIECAAAECBAgQIEBgVEB4HCUyAQECBAgQIECAAAECBAgIj9oAAQIECBAgQIAAAQIECIwKCI+jRCYgQIAAAQIECBAgQIAAAeFRGyBAgAABAgQIECBAgACBUQHhcZTIBAQIECBAgAABAgQIECAgPGoDBAgQIECAAAECBAgQIDAqIDyOEpmAAAECBAgQIECAAAECBIRHbYAAAQIECBAgQIAAAQIERgWEx1EiExAgQIAAAQIECBAgQICA8KgNECBAgAABAgQIECBAgMCogPA4SmQCAgQIECBAgAABAgQIEBAetQECBAgQIECAAAECBAgQGBUQHkeJTECAAAECBAgQIECAAAECwqM2QIAAAQIECBAgQIAAAQKjAsLjKJEJCBAgQIAAAQIECBAgQEB41AYIECBAgAABAgQIECBAYFRAeBwlMgEBAgQIECBAgAABAgQICI/aAAECBAgQIECAAAECBAiMCgiPo0QmIECAAAECBAgQIECAAAHhURsgQIAAAQIECBAgQIAAgVEB4XGUyAQECBAgQIAAAQIECBAgIDxqAwQIECBAgAABAgQIECAwKiA8jhKZgAABAgQIECBAgAABAgSER22AAAECBAgQIECAAAECBEYFhMdRIhMQIECAAAECBAgQIECAgPCoDRAgQIAAAQIECBAgQIDAqIDwOEpkAgIECBAgQIAAAQIECBAQHrUBAgQIECBAgAABAgQIEBgVEB5HiUxAgAABAgQIECBAgAABAsKjNkCAAAECBAgQIECAAAECowLC4yiRCQgQIECAAAECBAgQ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r0+1iAABAgQIECBAgAABAt0FhMfupAokQIAAAQIECBAgQIDAeALC43h9qkUECBAgQIAAAQIECBDoLiA8didVIAECBAgQIECAAAECBMYTEB7H61MtIkCAAAECBAgQIECAQHcB4bE7qQIJECBAgAABAgQIECAwnoDwOF6fahEBAgQIECBAgAABAgS6CwiP3UkVSIAAAQIECBAgQIAAgfEEhMfx+lSLCBAgQIAAAQIECBAg0F1AeOxOqkACBAgQIECAAAECBAiMJyA8jtenWkSAAAECBAgQIECAAIHuAsJjd1IFEiBAgAABAgQIECBAYDwB4XG8PtUiAgQIECBAgAABAgQIdBcQHruTKpAAAQIECBAgQIAAAQLjCQiP4/WpFhEgQIAAAQIECBAgQKC7gPDYnVSBBAgQIECAAAECBAgQGE9AeByvT7WIAAECBAgQIECAAAEC3QWEx+6kCiRAgAABAgQIECBAgMB4AsLjeH2qRQQIECBAgAABAgQIEOguIDx2J1UgAQIECBAgQIAAAQIExhMQHsfrUy0iQIAAAQIECBAgQIBAdwHhsTupAgkQIECAAAECBAgQIDCegPA4Xp9qEQECBAgQIECAAAECBLoLCI/dSRVIgAABAgQIECBAgACB8QSEx/H6VIsIECBAgAABAgQIECDQXUB47E6qQAIECBAgQIAAAQIECIwnIDyO16daRIAAAQIECBAgQIAAge4CwmN3UgUSIECAAAECBAgQIEBgPAHhcbw+1SICBAgQIECAAAECBAh0FxAeu5MqkAABAgQIECBAgAABAuMJCI/j9akWESBAgAABAgQIECBAoLuA8NidVIEECBAgQIAAAQIECBAYT0B4HK9PtYgAAQIECBAgQIAAAQLdBYTH7qQKJECAAAECBAgQIECAwHgCwuN4fapFBAgQIECAAAECBAgQ6C4gPHYnVSABAgQIECBAgAABAgTGExAex+tTLSJAgAABAgQIECBAgEB3AeGxO6kCCRAgQIAAAQIECBAgMJ6A8Dhen2oRAQIECBAgQIAAAQIEugsIj91JFUiAAAECBAgQIECAAIHxBITH8fpUiwgQIECAAAECBAgQINBdQHjsTqpAAgQIECBAgAABAgQIjCcgPI7Xp1pEgAABAgQIECBAgACB7gLCY3dSBRIgQIAAAQIECBAgQGA8AeFxvD7VIgIECBAgQIAAAQIECHQXEB67kyqQAAECBAgQIECAAAEC4wn8P7TvvNytG1FkAAAAAElFTkSuQmCC",templates:ny(),inventoryItems:[new ke({quantity:60,item:new Ae({id:"1",name:"Chair",cellsLong:2,cellsTall:2,icon:"https://firebasestorage.googleapis.com/v0/b/kazoom-layitout.firebasestorage.app/o/public%2FChair.png?alt=media&token=cde7cf8c-35d5-40da-a0ff-7cc96fd1996d",displayItem:!0})}),new ke({quantity:4,item:new Ae({id:"2",name:"Table",cellsLong:8,cellsTall:4,icon:"https://firebasestorage.googleapis.com/v0/b/kazoom-layitout.firebasestorage.app/o/public%2Frectangle_Table.png?alt=media&token=b6a58b65-3082-4fa7-93a4-f93b71c01dc8",displayItem:!0})}),new ke({quantity:8,item:new Ae({id:"3",name:"Rounded Table",cellsLong:4,cellsTall:4,icon:"https://firebasestorage.googleapis.com/v0/b/kazoom-layitout.firebasestorage.app/o/public%2Frounded_table.png?alt=media&token=f7c546ad-0247-420e-a146-46346751de00",displayItem:!0})})],sections:[new be({cellId:new Be({x:0,y:20}),modifierItems:[],cellsLong:50,cellsTall:30,startingItems:[],name:"Main Area"}),new be({cellId:new Be({x:50,y:20}),cellsLong:30,modifierItems:[],cellsTall:20,startingItems:[],name:"Outdoor Area"}),new be({cellId:new Be({x:40,y:0}),cellsLong:10,cellsTall:20,modifierItems:[],startingItems:[],name:"Hallway"}),new be({cellId:new Be({x:50,y:0}),cellsLong:30,cellsTall:20,startingItems:[],modifierItems:[],name:"Veranda"}),new be({cellId:new Be({x:0,y:50}),cellsLong:30,cellsTall:10,modifierItems:[],startingItems:[],name:"Kitchen"})]})}const sy=HE(Rl),re=Ks(sy,"companies");async function hy(n,e){{const t=L(re,n),r=L(t,"areas",e),s=await ti(r);if(s.exists()){const o=s.data();return In.fromDoc(o)}else return console.error("No such area document!"),ry()}}async function dy(n,e){{const t=L(re,n),r=L(t,"areas",e.id);await en(r,e.toDoc())}}async function fy(n,e,t){{const r=L(re,n),s=L(r,"areas",e);await ra(s,{templates:t.map(o=>o.toDoc())})}}async function gy(){{const n=await ni(re),e=[];return n.forEach(t=>{const r=t.data();e.push(Os.fromDoc(r))}),e}}async function Ay(n){{const e=L(re,n),t=await ti(e);return t.exists()?Os.fromDoc(t.data()):null}}async function my(n){{const e=L(re,n.id);await en(e,n.toDoc())}}async function py(n){{const e=L(re,n),t=Ks(e,"areas"),r=await ni(t),s=[];return r.forEach(o=>{const a=o.data();s.push(In.fromDoc(a))}),s}}async function Iy(n,e){const t=L(re,n),r=L(t,"areas",e),s=Ks(r,"designs"),o=await ni(s),a=[];return o.forEach(u=>{const h=u.data();a.push(Ms.fromDoc(h))}),a}async function Ey(n,e){const t=L(re,n),r=L(t,"areas",e),s=Ks(r,"boothMaps"),o=await ni(s),a=[];return o.forEach(u=>{const h=u.data();a.push(dr.fromDoc(h))}),a}async function yy(n,e,t){console.log("Fetching design",t,"for area",e,"in company",n);const r=L(re,n),s=L(r,"areas",e),o=L(s,"designs",t),a=await ti(o);return a.exists()?Ms.fromDoc(a.data()):null}async function Cy(n,e,t){{const r=L(re,n),s=L(r,"areas",e),o=L(s,"designs",t.id);await en(o,t.toDoc())}}async function Ty(n,e,t){{const r=L(re,n),s=L(r,"areas",e),o=L(s,"boothMaps",t.id);await en(o,t.toDoc())}}async function _y(n,e,t){{const r=L(re,n),s=L(r,"areas",e),o=L(s,"designs",t);await sa(o)}}async function vy(n,e,t){{const r=L(re,n),s=L(r,"areas",e),o=L(s,"designs",t.id);await en(o,t.toDoc())}}async function wy(n,e){{const t=L(re,n),r=L(t,"areas",e.id);await en(r,e.toDoc())}}async function Py(n,e,t,r,s){{console.log("Saving sections for area",e,"in company",n);const o=L(re,n),a=L(o,"areas",e);await ra(a,{sections:t.map(u=>u.toDoc()),width:r,height:s})}}async function Ry(n,e,t){{const r=L(re,n),s=L(r,"areas",e);await ra(s,{sections:t.map(o=>o.toDoc())})}}async function By(n,e){{const t=L(re,n),r=L(t,"areas",e);await sa(r)}}async function by(n,e,t){{const r=L(re,n),s=L(r,"areas",e),o=L(s,"boothMaps",t);await sa(o)}}async function Sy(n,e,t){const r=L(re,n),s=L(r,"areas",e),o=L(s,"boothMaps",t),a=await ti(o);return a.exists()?dr.fromDoc(a.data()):null}async function Dy(n,e){{const t=L(re,n),r=L(t,"areas",e.areaId),s=L(r,"boothMaps",e.id);await en(s,e.toDoc())}}export{In as A,dr as B,Be as C,Ms as D,oy as E,cy as F,my as G,Ae as I,be as S,lr as T,ct as V,_y as a,by as b,Cy as c,By as d,wy as e,Ty as f,py as g,Ey as h,uy as i,Iy as j,ke as k,ay as l,Ut as m,hr as n,Dy as o,iy as p,hy as q,Sy as r,fy as s,Ay as t,vy as u,yy as v,Py as w,Ry as x,dy as y,gy as z};
