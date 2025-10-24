import{j as a,r as A,c as ve}from"./index-_mSZXrjJ.js";import{D as Ce,l as se,A as je,B as ke,_ as Ne,C as _e,r as K,S as Te,a as De,F as Ee,g as Ue,b as G,c as Be,d as Oe,i as ae,p as Pe,u as Se,e as Le,f as Me,h as Ge,j as He,k as Ze,m as Fe,n as Je,o as Qe,q as ze,s as Ve,t as We,v as Ye,w as Xe,x as Ke,y as qe,z as $e}from"./firestore-CpCUm53o.js";import{T as J,L as et,I as tt}from"./inventory_item_tile-BNaBvEoh.js";const nt="/LayItOut/assets/person-B6dEeLiq.png",st="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE02lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI1LTA4LTA1PC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPjczNzgwNjZhLTY1ZDEtNGI2MC1hYzBhLTY2N2M4OWFkMGMyYzwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5hZGQtaXRlbSAtIDM8L3JkZjpsaT4KICAgPC9yZGY6QWx0PgogIDwvZGM6dGl0bGU+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+U2FyYWggS2VtbWVOYXNoPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmEgKFJlbmRlcmVyKSBkb2M9REFHdTJ5dUVOWkEgdXNlcj1VQUZqR1c2eHRDUSBicmFuZD1bQVJDSElWRURdIEZvcnQgV2F5bmUgQ29tbXVuaXR5IFNjaG9vbHMgdGVtcGxhdGU9PC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/Puza03IAAANVSURBVHic7dw/aBNRAMfxX/+AdrDkFAcX5QIqLi7BMRW5JSIOiruoxE6CQxE8cHE4HCsiFOPg5ORkHeJwFHKjZqiI6HIHBd3snX/Aoi11aBwEW5Lz3rvfld9nbF7z3vG9cJeXkDEIlbGyFyB/UxAyCkJGQcgoCBkFIaMgZBSEjIKQURAyCkJGQcgoCBkFIaMgZBSEjIKQURAyCkJGQcgoCBkFIaMgZHZFENfzJwEgCYP1stfyvyobpOY2p+uef9upz1wGcGjw509p3HsSh8G9LIm+lbm+vCoZpOY29zba3S6A09sMWep3WueyJPphc11FGC97AXk02t0H2D4GAJxptLvzttZTpMoFcT3/AIArQwy9WnOb+0yvp2iVCwLgBICJIcZNOvXmSdOLKVoVg4xy1usVYsEoNyKVu2mpYpBdTUHIKAgZBSGjIGQUhIyCkFEQMgpCRkHIKAgZBSEzaXtC1/OnARwHsB85Nv8ct9kYaaznb446B4BNAKsAPiRh8DXH/+dmbTe05jb3NNrd+wCuoYQTIad1AI/6ndbNLIl+2ZjQSpCa25xotLuLAM7amM+AxX6ndSFLog3TE1m5htQ9/waqGwMAzg+OwTgrQZz6zKyNeUyydQzGg7ieP4ati3jVHRsci1G2bnsr91HqP1g5BuNBkjDYBPDe9DwWLA+OxSgrr5A07j22MY9JadxbsDGPlSBxGMwDeGFjLkOex2Fg5aSyEiRLoo1+p3UJQAeA8Xv5Aq2mce9Wv9O6aOM9CFDCxbaArZNTTn3m7jBj07h3J02i16POga2tk89pHC3beof+h/UtjMHe0KvcT+D54059ZqihaRL1kzDo5p6rBNrtJaMgZBSEjIKQURAyCkJGQcgoCBkFIaMgZBSEjIKQURAyVQySjTDW6rcOi1C5IGkcvQHwc4ihGwDeGl5O4SoXJEui79j65HFHadxbSMLgi4UlFapyQQCg32nNAXi5w5ClOAzmbK2nSMP8iAudtWxlPY2jp1PO4ZUp58hRAAcHD31M497Dd89mr2dJtFbmGvPaDV9g00/8iTkKQkZByCgIGQUhoyBkFISMgpBREDIKQkZByCgIGQUhoyBkFISMgpBREDIKQkZByCgIGQUhoyBkFISMgpD5DYoct+vaJyOJAAAAAElFTkSuQmCC";function at({area:e,onClick:t,deleteArea:n}){return a.jsx("div",{className:"area-tile",onClick:()=>t(e.id),children:a.jsxs("div",{className:"area-tile-content",children:[a.jsx("div",{className:"area-preview-container",children:a.jsx("img",{src:e.previewImage,alt:"",className:"area-preview-img"})}),a.jsxs("div",{className:"area-info",children:[a.jsx("h3",{children:e.name}),a.jsx("div",{className:"area-actions",children:a.jsx("img",{src:J,alt:"",className:"area-trash",onClick:async s=>{s.stopPropagation(),window.confirm("By clicking OK, you will delete this area and all of the designs using this area. Are you sure?")&&n(e.id)}})})]})]})})}function it({dialogRef:e,closeDialog:t,createDesign:n,areas:s}){const[i,o]=A.useState(""),[r,d]=A.useState(!1),[c,p]=A.useState(null),[h,g]=A.useState(null);async function R(){if(i.trim()===""){alert("Design name cannot be empty");return}if(!c){alert("Please select an area");return}d(!0);const l=new Ce({id:(Math.random()*1e6).toString(),name:i,areaId:c.id,sections:c.sections,previewImage:c.previewImage,inventoryItems:[...c.inventoryItems]});h&&(l.sections=h.sections,l.previewImage=h.previewImage,l.inventoryItems=h.inventoryItems),await n(l),d(!1),o(""),p(null),g(null)}return a.jsxs("dialog",{ref:e,className:"create-design-dialog",children:[a.jsxs("div",{className:"create-design-dialog-div",children:[a.jsx("h2",{children:"Create Design"}),a.jsxs("div",{className:"create-design-row",children:[a.jsx("label",{htmlFor:"design-name",children:"Name:"}),a.jsx("input",{type:"text",id:"design-name",name:"design-name",onChange:l=>o(l.target.value??""),value:i})]}),a.jsxs("div",{className:"create-design-row",children:[a.jsx("label",{htmlFor:"design-area",children:"Area:"}),a.jsxs("select",{id:"design-area",name:"design-area",onChange:l=>{const f=l.target.value,I=s.find(b=>b.id===f)||null;p(I)},value:c?.id||"",children:[a.jsx("option",{value:"",children:"Select an area"}),s.map(l=>a.jsx("option",{value:l.id,children:l.name},l.id))]})]}),c&&c.templates.length>0&&a.jsxs("div",{className:"create-design-row",children:[a.jsx("label",{htmlFor:"design-area",children:"Template:"}),a.jsxs("select",{id:"design-area",name:"design-area",onChange:l=>{const f=l.target.value,I=c.templates.find(b=>b.id===f)||null;g(I)},value:h?.id||"",children:[a.jsx("option",{value:"",children:"Select a template (Optional)"}),c.templates.map(l=>a.jsx("option",{value:l.id,children:l.name},l.id))]})]}),a.jsx("button",{className:"action-btn",onClick:R,children:"Create"}),a.jsx("br",{}),a.jsx("br",{}),a.jsx("button",{className:"action-btn",onClick:()=>{t(),o(""),p(null),g(null)},children:"Close"})]}),r&&a.jsx(a.Fragment,{children:a.jsx("div",{className:"loader"})})]})}const ie="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE1GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI1LTEwLTAxPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPjU2OWI2MjhjLTA3MGQtNDZlMi05MTMyLWQyYjA1ZGE3NjRjNjwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5hZGQtaXRlbSAtIDEzPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnRpdGxlPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6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";function ot({design:e,areaName:t,onClick:n,deleteDesign:s}){return a.jsxs("div",{className:"design-tile",onClick:()=>n(e.id),children:[a.jsx("div",{className:"design-preview-container",children:a.jsx("img",{src:e.previewImage,alt:"",className:"design-preview-img"})}),a.jsxs("div",{className:"design-info",children:[a.jsx("h3",{children:e.name}),a.jsxs("p",{className:"design-area-name",children:["Area: ",t]}),a.jsxs("div",{className:"design-actions",children:[a.jsx("img",{src:et,alt:"",className:"design-link",onClick:async i=>{i.stopPropagation();const o=localStorage.getItem("companyId"),r=window.location.origin+`/LayItOut/Layout/?companyId=${o}&areaId=${e.areaId}&type=client-edit-design&designId=${e.id}&designName=${e.name}`;await navigator.clipboard.writeText(r),alert("Design link copied to clipboard!")}}),a.jsx("img",{src:ie,alt:"",className:"design-preview",onClick:async i=>{i.stopPropagation();const o=localStorage.getItem("companyId"),r=window.location.origin+`/LayItOut/Layout/?companyId=${o}&areaId=${e.areaId}&type=public-preview&designId=${e.id}&designName=${e.name}`;await navigator.clipboard.writeText(r),alert("Preview link copied to clipboard!")}}),a.jsx("img",{src:J,alt:"",className:"design-trash",onClick:async i=>{i.stopPropagation(),window.confirm("By clicking OK, you will delete this design. Are you sure?")&&s(e.id)}})]})]})]})}function rt({dialogRef:e,closeDialog:t}){return a.jsx("dialog",{ref:e,className:"account-dialog",children:a.jsxs("div",{className:"account-dialog-div",children:[a.jsx("h2",{children:"Account Settings"}),a.jsx("button",{className:"action-btn",onClick:()=>{se(),t()},children:"Log Out"}),a.jsx("br",{}),a.jsx("br",{}),a.jsx("button",{className:"action-btn",onClick:t,children:"Close"})]})})}function lt({dialogRef:e,closeDialog:t,createArea:n}){const[s,i]=A.useState(""),[o,r]=A.useState(10),[d,c]=A.useState(10),[p,h]=A.useState(!1);return a.jsxs("dialog",{ref:e,className:"create-area-dialog",children:[a.jsxs("div",{className:"create-area-dialog-div",children:[a.jsx("h2",{children:"Create Area"}),a.jsxs("div",{className:"create-area-row",children:[a.jsx("label",{htmlFor:"area-name",children:"Name:"}),a.jsx("input",{type:"text",id:"area-name",name:"area-name",onChange:g=>i(g.target.value??""),value:s})]}),a.jsxs("div",{className:"create-area-row create-area-size",children:[a.jsx("label",{htmlFor:"area-width",children:"Size (in feet):"}),a.jsx("input",{type:"number",id:"area-width",name:"area-width",min:"1",value:o,onChange:g=>r(parseFloat(g.target.value)??1)}),a.jsx("span",{children:" x "}),a.jsx("input",{type:"number",id:"area-height",name:"area-height",min:"1",value:d,onChange:g=>c(parseFloat(g.target.value)??1)})]}),a.jsx("br",{}),a.jsx("button",{className:"action-btn",onClick:async()=>{if(s.trim()===""){alert("Area name cannot be empty");return}if(o<=0||d<=0){alert("Area dimensions must be greater than zero");return}h(!0);const g=new je({name:s,width:Math.floor(o),height:Math.floor(d),id:s.toLowerCase().replace(/\s+/g,"-")+"-"+Date.now(),previewImage:"",sections:[],templates:[],inventoryItems:[]});await n(g),h(!1),i(""),r(1),c(1)},children:"Create Area"}),a.jsx("br",{}),a.jsx("br",{}),a.jsx("button",{className:"action-btn",onClick:()=>{i(""),r(10),c(10),t()},children:"Close"})]}),p&&a.jsx(a.Fragment,{children:a.jsx("div",{className:"loader"})})]})}function ct({dialogRef:e,closeDialog:t,createBoothMap:n,areas:s}){const[i,o]=A.useState(""),[r,d]=A.useState(!1),[c,p]=A.useState(null),[h,g]=A.useState(null);async function R(){if(i.trim()===""){alert("BoothMap name cannot be empty");return}if(!c){alert("Please select an area");return}d(!0);const l=new ke({id:(Math.random()*1e6).toString(),name:i,areaId:c.id,sections:c.sections,previewImage:c.previewImage,inventoryItems:[...c.inventoryItems]});h&&(l.sections=h.sections,l.previewImage=h.previewImage,l.inventoryItems=h.inventoryItems),await n(l),window.location.href=`/LayItOut/Layout/?companyId=${localStorage.getItem("companyId")}&areaId=${l.areaId}&type=create-boothMap&boothMapId=${l.id}&boothMapName=${l.name}`,d(!1),o(""),p(null),g(null)}return a.jsxs("dialog",{ref:e,className:"create-boothMap-dialog",children:[a.jsxs("div",{className:"create-boothMap-dialog-div",children:[a.jsx("h2",{children:"Create Booth Map"}),a.jsxs("div",{className:"create-boothMap-row",children:[a.jsx("label",{htmlFor:"boothMap-name",children:"Name:"}),a.jsx("input",{type:"text",id:"boothMap-name",name:"boothMap-name",onChange:l=>o(l.target.value??""),value:i})]}),a.jsxs("div",{className:"create-boothMap-row",children:[a.jsx("label",{htmlFor:"boothMap-area",children:"Area:"}),a.jsxs("select",{id:"boothMap-area",name:"boothMap-area",onChange:l=>{const f=l.target.value,I=s.find(b=>b.id===f)||null;p(I)},value:c?.id||"",children:[a.jsx("option",{value:"",children:"Select an area"}),s.map(l=>a.jsx("option",{value:l.id,children:l.name},l.id))]})]}),c&&c.templates.length>0&&a.jsxs("div",{className:"create-boothMap-row",children:[a.jsx("label",{htmlFor:"boothMap-area",children:"Template:"}),a.jsxs("select",{id:"boothMap-area",name:"boothMap-area",onChange:l=>{const f=l.target.value,I=c.templates.find(b=>b.id===f)||null;g(I)},value:h?.id||"",children:[a.jsx("option",{value:"",children:"Select a template (Optional)"}),c.templates.map(l=>a.jsx("option",{value:l.id,children:l.name},l.id))]})]}),a.jsx("button",{className:"action-btn",onClick:R,children:"Create"}),a.jsx("br",{}),a.jsx("br",{}),a.jsx("button",{className:"action-btn",onClick:()=>{t(),o(""),p(null),g(null)},children:"Close"})]}),r&&a.jsx(a.Fragment,{children:a.jsx("div",{className:"loader"})})]})}function ut({boothMap:e,areaName:t,onClick:n,deleteBoothMap:s}){return a.jsxs("div",{className:"boothMap-tile",onClick:()=>n(e.id),children:[a.jsx("div",{className:"boothMap-preview-container",children:a.jsx("img",{src:e.previewImage,alt:"",className:"boothMap-preview-img"})}),a.jsxs("div",{className:"boothMap-info",children:[a.jsx("h3",{children:e.name}),a.jsxs("p",{className:"boothMap-area-name",children:["Area: ",t]}),a.jsxs("div",{className:"boothMap-actions",children:[a.jsx("img",{src:ie,alt:"",className:"boothMap-preview",onClick:async i=>{i.stopPropagation();const o=localStorage.getItem("companyId"),r=window.location.origin+`/LayItOut/Layout/?companyId=${o}&areaId=${e.areaId}&type=public-preview-boothMap&boothMapId=${e.id}&designName=${e.name}`;await navigator.clipboard.writeText(r),alert("Preview link copied to clipboard!")}}),a.jsx("img",{src:J,alt:"",className:"boothMap-trash",onClick:async i=>{i.stopPropagation(),window.confirm("By clicking OK, you will delete this BoothMap. Are you sure?")&&s(e.id)}})]})]})]})}/**
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
 */const oe="firebasestorage.googleapis.com",re="storageBucket",dt=120*1e3,ht=600*1e3;/**
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
 */class w extends Ee{constructor(t,n,s=0){super(H(t),`Firebase Storage: ${n} (${H(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,w.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return H(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var y;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(y||(y={}));function H(e){return"storage/"+e}function Q(){const e="An unknown error occurred, please check the error payload for server response.";return new w(y.UNKNOWN,e)}function mt(e){return new w(y.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function pt(e){return new w(y.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function gt(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new w(y.UNAUTHENTICATED,e)}function ft(){return new w(y.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function At(e){return new w(y.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function bt(){return new w(y.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function It(){return new w(y.CANCELED,"User canceled the upload/download.")}function yt(e){return new w(y.INVALID_URL,"Invalid URL '"+e+"'.")}function wt(e){return new w(y.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Rt(){return new w(y.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+re+"' property when initializing the app?")}function xt(){return new w(y.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function vt(){return new w(y.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ct(e){return new w(y.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function F(e){return new w(y.INVALID_ARGUMENT,e)}function le(){return new w(y.APP_DELETED,"The Firebase app was deleted.")}function jt(e){return new w(y.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function S(e,t){return new w(y.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function P(e){throw new w(y.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class v{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=v.makeFromUrl(t,n)}catch{return new v(t,"")}if(s.path==="")return s;throw wt(t)}static makeFromUrl(t,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function o(m){m.path.charAt(m.path.length-1)==="/"&&(m.path_=m.path_.slice(0,-1))}const r="(/(.*))?$",d=new RegExp("^gs://"+i+r,"i"),c={bucket:1,path:3};function p(m){m.path_=decodeURIComponent(m.path)}const h="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",l=new RegExp(`^https?://${g}/${h}/b/${i}/o${R}`,"i"),f={bucket:1,path:3},I=n===oe?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",j=new RegExp(`^https?://${I}/${i}/${b}`,"i"),u=[{regex:d,indices:c,postModify:o},{regex:l,indices:f,postModify:p},{regex:j,indices:{bucket:1,path:2},postModify:p}];for(let m=0;m<u.length;m++){const U=u[m],N=U.regex.exec(t);if(N){const O=N[U.indices.bucket];let B=N[U.indices.path];B||(B=""),s=new v(O,B),U.postModify(s);break}}if(s==null)throw yt(t);return s}}class kt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Nt(e,t,n){let s=1,i=null,o=null,r=!1,d=0;function c(){return d===2}let p=!1;function h(...b){p||(p=!0,t.apply(null,b))}function g(b){i=setTimeout(()=>{i=null,e(l,c())},b)}function R(){o&&clearTimeout(o)}function l(b,...j){if(p){R();return}if(b){R(),h.call(null,b,...j);return}if(c()||r){R(),h.call(null,b,...j);return}s<64&&(s*=2);let u;d===1?(d=2,u=0):u=(s+Math.random())*1e3,g(u)}let f=!1;function I(b){f||(f=!0,R(),!p&&(i!==null?(b||(d=2),clearTimeout(i),g(0)):b||(d=1)))}return g(0),o=setTimeout(()=>{r=!0,I(!0)},n),I}function _t(e){e(!1)}/**
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
 */function Tt(e){return e!==void 0}function Dt(e){return typeof e=="object"&&!Array.isArray(e)}function z(e){return typeof e=="string"||e instanceof String}function q(e){return V()&&e instanceof Blob}function V(){return typeof Blob<"u"}function $(e,t,n,s){if(s<t)throw F(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw F(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function W(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function ce(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const i=t(s)+"="+t(e[s]);n=n+i+"&"}return n=n.slice(0,-1),n}var D;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(D||(D={}));/**
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
 */function Et(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||i||o}/**
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
 */class Ut{constructor(t,n,s,i,o,r,d,c,p,h,g,R=!0,l=!1){this.url_=t,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=r,this.callback_=d,this.errorCallback_=c,this.timeout_=p,this.progressCallback_=h,this.connectionFactory_=g,this.retry=R,this.isUsingEmulator=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,I)=>{this.resolve_=f,this.reject_=I,this.start_()})}start_(){const t=(s,i)=>{if(i){s(!1,new L(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const r=d=>{const c=d.loaded,p=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,p)};this.progressCallback_!==null&&o.addUploadProgressListener(r),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(r),this.pendingConnection_=null;const d=o.getErrorCode()===D.NO_ERROR,c=o.getStatus();if(!d||Et(c,this.additionalRetryCodes_)&&this.retry){const h=o.getErrorCode()===D.ABORT;s(!1,new L(!1,null,h));return}const p=this.successCodes_.indexOf(c)!==-1;s(!0,new L(p,o))})},n=(s,i)=>{const o=this.resolve_,r=this.reject_,d=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(d,d.getResponse());Tt(c)?o(c):o()}catch(c){r(c)}else if(d!==null){const c=Q();c.serverResponse=d.getErrorText(),this.errorCallback_?r(this.errorCallback_(d,c)):r(c)}else if(i.canceled){const c=this.appDelete_?le():It();r(c)}else{const c=bt();r(c)}};this.canceled_?n(!1,new L(!1,null,!0)):this.backoffId_=Nt(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&_t(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class L{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function Bt(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Ot(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Pt(e,t){t&&(e["X-Firebase-GMPID"]=t)}function St(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Lt(e,t,n,s,i,o,r=!0,d=!1){const c=ce(e.urlParams),p=e.url+c,h=Object.assign({},e.headers);return Pt(h,t),Bt(h,n),Ot(h,o),St(h,s),new Ut(p,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,r,d)}/**
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
 */function Mt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Gt(...e){const t=Mt();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(V())return new Blob(e);throw new w(y.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Ht(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function Zt(e){if(typeof atob>"u")throw Ct("base-64");return atob(e)}/**
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
 */const k={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Z{constructor(t,n){this.data=t,this.contentType=n||null}}function Ft(e,t){switch(e){case k.RAW:return new Z(ue(t));case k.BASE64:case k.BASE64URL:return new Z(de(e,t));case k.DATA_URL:return new Z(Qt(t),zt(t))}throw Q()}function ue(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=s,r=e.charCodeAt(++n);s=65536|(o&1023)<<10|r&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function Jt(e){let t;try{t=decodeURIComponent(e)}catch{throw S(k.DATA_URL,"Malformed data URL.")}return ue(t)}function de(e,t){switch(e){case k.BASE64:{const i=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(i||o)throw S(e,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case k.BASE64URL:{const i=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(i||o)throw S(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Zt(t)}catch(i){throw i.message.includes("polyfill")?i:S(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class he{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw S(k.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Vt(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function Qt(e){const t=new he(e);return t.base64?de(k.BASE64,t.rest):Jt(t.rest)}function zt(e){return new he(e).contentType}function Vt(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class _{constructor(t,n){let s=0,i="";q(t)?(this.data_=t,s=t.size,i=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,n){if(q(this.data_)){const s=this.data_,i=Ht(s,t,n);return i===null?null:new _(i)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new _(s,!0)}}static getBlob(...t){if(V()){const n=t.map(s=>s instanceof _?s.data_:s);return new _(Gt.apply(null,n))}else{const n=t.map(r=>z(r)?Ft(k.RAW,r).data:r.data_);let s=0;n.forEach(r=>{s+=r.byteLength});const i=new Uint8Array(s);let o=0;return n.forEach(r=>{for(let d=0;d<r.length;d++)i[o++]=r[d]}),new _(i,!0)}}uploadData(){return this.data_}}/**
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
 */function me(e){let t;try{t=JSON.parse(e)}catch{return null}return Dt(t)?t:null}/**
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
 */function Wt(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Yt(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function pe(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function Xt(e,t){return t}class x{constructor(t,n,s,i){this.server=t,this.local=n||t,this.writable=!!s,this.xform=i||Xt}}let M=null;function Kt(e){return!z(e)||e.length<2?e:pe(e)}function ge(){if(M)return M;const e=[];e.push(new x("bucket")),e.push(new x("generation")),e.push(new x("metageneration")),e.push(new x("name","fullPath",!0));function t(o,r){return Kt(r)}const n=new x("name");n.xform=t,e.push(n);function s(o,r){return r!==void 0?Number(r):r}const i=new x("size");return i.xform=s,e.push(i),e.push(new x("timeCreated")),e.push(new x("updated")),e.push(new x("md5Hash",null,!0)),e.push(new x("cacheControl",null,!0)),e.push(new x("contentDisposition",null,!0)),e.push(new x("contentEncoding",null,!0)),e.push(new x("contentLanguage",null,!0)),e.push(new x("contentType",null,!0)),e.push(new x("metadata","customMetadata",!0)),M=e,M}function qt(e,t){function n(){const s=e.bucket,i=e.fullPath,o=new v(s,i);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function $t(e,t,n){const s={};s.type="file";const i=n.length;for(let o=0;o<i;o++){const r=n[o];s[r.local]=r.xform(s,t[r.server])}return qt(s,e),s}function fe(e,t,n){const s=me(t);return s===null?null:$t(e,s,n)}function en(e,t,n,s){const i=me(t);if(i===null||!z(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const r=encodeURIComponent;return o.split(",").map(p=>{const h=e.bucket,g=e.fullPath,R="/b/"+r(h)+"/o/"+r(g),l=W(R,n,s),f=ce({alt:"media",token:p});return l+f})[0]}function tn(e,t){const n={},s=t.length;for(let i=0;i<s;i++){const o=t[i];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}class Ae{constructor(t,n,s,i){this.url=t,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function be(e){if(!e)throw Q()}function nn(e,t){function n(s,i){const o=fe(e,i,t);return be(o!==null),o}return n}function sn(e,t){function n(s,i){const o=fe(e,i,t);return be(o!==null),en(o,i,e.host,e._protocol)}return n}function Ie(e){function t(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=ft():i=gt():n.getStatus()===402?i=pt(e.bucket):n.getStatus()===403?i=At(e.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return t}function an(e){const t=Ie(e);function n(s,i){let o=t(s,i);return s.getStatus()===404&&(o=mt(e.path)),o.serverResponse=i.serverResponse,o}return n}function on(e,t,n){const s=t.fullServerUrl(),i=W(s,e.host,e._protocol),o="GET",r=e.maxOperationRetryTime,d=new Ae(i,o,sn(e,n),r);return d.errorHandler=an(t),d}function rn(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function ln(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=rn(null,t)),s}function cn(e,t,n,s,i){const o=t.bucketOnlyServerUrl(),r={"X-Goog-Upload-Protocol":"multipart"};function d(){let u="";for(let m=0;m<2;m++)u=u+Math.random().toString().slice(2);return u}const c=d();r["Content-Type"]="multipart/related; boundary="+c;const p=ln(t,s,i),h=tn(p,n),g="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+c+`\r
Content-Type: `+p.contentType+`\r
\r
`,R=`\r
--`+c+"--",l=_.getBlob(g,s,R);if(l===null)throw xt();const f={name:p.fullPath},I=W(o,e.host,e._protocol),b="POST",j=e.maxUploadRetryTime,C=new Ae(I,b,nn(e,n),j);return C.urlParams=f,C.headers=r,C.body=l.uploadData(),C.errorHandler=Ie(t),C}class un{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=D.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=D.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=D.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,i,o){if(this.sent_)throw P("cannot .send() more than once");if(ae(t)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const r in o)o.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,o[r].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw P("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw P("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw P("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw P("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class dn extends un{initXhr(){this.xhr_.responseType="text"}}function ye(){return new dn}/**
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
 */class E{constructor(t,n){this._service=t,n instanceof v?this._location=n:this._location=v.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new E(t,n)}get root(){const t=new v(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pe(this._location.path)}get storage(){return this._service}get parent(){const t=Wt(this._location.path);if(t===null)return null;const n=new v(this._location.bucket,t);return new E(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw jt(t)}}function hn(e,t,n){e._throwIfRoot("uploadBytes");const s=cn(e.storage,e._location,ge(),new _(t,!0),n);return e.storage.makeRequestWithTokens(s,ye).then(i=>({metadata:i,ref:e}))}function mn(e){e._throwIfRoot("getDownloadURL");const t=on(e.storage,e._location,ge());return e.storage.makeRequestWithTokens(t,ye).then(n=>{if(n===null)throw vt();return n})}function pn(e,t){const n=Yt(e._location.path,t),s=new v(e._location.bucket,n);return new E(e.storage,s)}/**
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
 */function gn(e){return/^[A-Za-z]+:\/\//.test(e)}function fn(e,t){return new E(e,t)}function we(e,t){if(e instanceof Y){const n=e;if(n._bucket==null)throw Rt();const s=new E(n,n._bucket);return t!=null?we(s,t):s}else return t!==void 0?pn(e,t):e}function An(e,t){if(t&&gn(t)){if(e instanceof Y)return fn(e,t);throw F("To use ref(service, url), the first argument must be a Storage instance.")}else return we(e,t)}function ee(e,t){const n=t?.[re];return n==null?null:v.makeFromBucketSpec(n,e)}function bn(e,t,n,s={}){e.host=`${t}:${n}`;const i=ae(t);i&&(Pe(`https://${e.host}/b`),Se("Storage",!0)),e._isUsingEmulator=!0,e._protocol=i?"https":"http";const{mockUserToken:o}=s;o&&(e._overrideAuthToken=typeof o=="string"?o:Le(o,e.app.options.projectId))}class Y{constructor(t,n,s,i,o,r=!1){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=o,this._isUsingEmulator=r,this._bucket=null,this._host=oe,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=dt,this._maxUploadRetryTime=ht,this._requests=new Set,i!=null?this._bucket=v.makeFromBucketSpec(i,this._host):this._bucket=ee(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=v.makeFromBucketSpec(this._url,t):this._bucket=ee(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){$("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){$("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(De(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new E(this,t)}_makeRequest(t,n,s,i,o=!0){if(this._deleted)return new kt(le());{const r=Lt(t,this._appId,s,i,n,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(t,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,i).getPromise()}}const te="@firebase/storage",ne="0.14.0";/**
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
 */const Re="storage";function In(e,t,n){return e=G(e),hn(e,t,n)}function yn(e){return e=G(e),mn(e)}function wn(e,t){return e=G(e),An(e,t)}function Rn(e=Ue(),t){e=G(e);const s=Be(e,Re).getImmediate({identifier:t}),i=Oe("storage");return i&&xn(s,...i),s}function xn(e,t,n,s={}){bn(e,t,n,s)}function vn(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new Y(n,s,i,t,Te)}function Cn(){Ne(new _e(Re,vn,"PUBLIC").setMultipleInstances(!0)),K(te,ne,""),K(te,ne,"esm2020")}Cn();const jn=Rn(Me);async function kn(e,t){const n=localStorage.getItem("companyId"),s=wn(jn,`${n}/CustomItems/${t.replace(" ","_")}.${e.name.split(".").pop()}`),i=await In(s,e);return await yn(i.ref)}function Nn({dialogRef:e,closeDialog:t,createCustomItem:n}){const[s,i]=A.useState(null),[o,r]=A.useState(""),[d,c]=A.useState(1),[p,h]=A.useState(1),[g,R]=A.useState(!0),l=A.useRef(null);return a.jsx("dialog",{ref:e,className:"custom-item-dialog",children:a.jsxs("div",{className:"custom-item-dialog-div",children:[a.jsx("h2",{children:"Create Custom Item"}),a.jsxs("div",{className:"custom-item-row",children:[a.jsx("label",{htmlFor:"item-name",children:"Name:"}),a.jsx("input",{type:"text",id:"item-name",name:"item-name",onChange:f=>r(f.target.value??""),value:o})]}),a.jsxs("div",{className:"custom-item-row",children:[a.jsx("label",{htmlFor:"item-icon",children:"Icon:"}),a.jsx("input",{type:"file",id:"item-icon",name:"item-icon",ref:l,accept:".png,.jpeg,.svg,.webp,.jpg"})]}),a.jsxs("div",{className:"custom-item-row custom-item-size",children:[a.jsx("label",{htmlFor:"item-width",children:"Size (in feet):"}),a.jsx("input",{type:"number",id:"item-width",name:"item-width",min:"1",value:d,onChange:f=>c(parseFloat(f.target.value)??1)}),a.jsx("span",{children:" x "}),a.jsx("input",{type:"number",id:"item-height",name:"item-height",min:"1",value:p,onChange:f=>h(parseFloat(f.target.value)??1)})]}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"item-moveable",children:"Moveable:"}),a.jsx("input",{type:"checkbox",id:"item-moveable",name:"item-moveable",checked:g,onChange:f=>R(f.target.checked)})]}),a.jsx("br",{}),a.jsx("br",{}),a.jsx("button",{className:"action-btn",onClick:async()=>{if(o.trim()===""&&s==null){alert("Item name cannot be empty");return}if(l.current?.files==null||l.current.files.length===0){alert("Please select an icon file for the item");return}const f=await kn(l.current.files[0],o);let I=s;I==null&&(I=new Ge({id:o+(Math.random()*1e4).toString(),name:o,icon:f,cellsLong:Math.ceil(d),cellsTall:Math.ceil(p),moveable:g})),n(I),R(!0),i(null),r(""),c(1),h(1),l.current&&(l.current.value=""),t()},children:"Add Item"}),a.jsx("button",{className:"action-btn",onClick:t,children:"Close"})]})})}ve.createRoot(document.getElementById("root")).render(a.jsx(_n,{}));function _n(){const[e,t]=A.useState(/Mobi|Android/i.test(navigator.userAgent)),[n,s]=A.useState("designs"),[i,o]=A.useState([]),[r,d]=A.useState([]),[c,p]=A.useState([]),[h,g]=A.useState([]),[R,l]=A.useState(!0),f=A.useRef(null),I=A.useRef(null),b=A.useRef(null),j=A.useRef(null),C=A.useRef(null);return A.useEffect(()=>{He();const m=new URLSearchParams(window.location.search).get("view");m==="designs"?s("designs"):m==="areas"?s("areas"):m==="boothmaps"?s("boothmaps"):m==="items"&&s("items");async function U(){const N=localStorage.getItem("companyId");if(!N){se();return}const O=await Xe(N),B=[];(await Promise.all(O.map(T=>Ke(N,T.id)))).forEach(T=>{B.push(...T)});const X=[];(await Promise.all(O.map(T=>qe(N,T.id)))).forEach(T=>{X.push(...T)});const xe=await $e(N);g([...xe]),d([...O]),o([...X]),p([...B]),l(!1)}U()},[]),a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"App",children:[a.jsx("h1",{className:"title",children:"LayItOut"}),R&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"loader-backdrop"}),a.jsx("div",{className:"loader"})]}),a.jsxs("div",{className:"dashboard",children:[a.jsxs("div",{className:"sidebar",children:[a.jsx("div",{className:"account-div",children:a.jsx("img",{src:nt,alt:"Account Icon",className:"account-icon",onClick:()=>{f.current?.showModal()}})}),a.jsxs("div",{className:"nav-buttons",children:[a.jsx("button",{className:`nav-button ${n=="designs"?"selected":""}`,onClick:()=>s("designs"),children:"Designs"}),a.jsx("button",{className:`nav-button ${n=="boothmaps"?"selected":""}`,onClick:()=>s("boothmaps"),children:"Booth Maps"}),a.jsx("button",{className:`nav-button ${n=="areas"?"selected":""}`,onClick:()=>s("areas"),children:"Areas"}),a.jsx("button",{className:`nav-button ${n=="items"?"selected":""}`,onClick:()=>s("items"),children:"Inventory Items"})]})]}),a.jsxs("div",{className:"content",children:[n=="designs"&&i.length==0&&a.jsx("div",{className:"no-designs",children:a.jsx("h3",{children:"No Designs Yet"})}),n=="areas"&&r.length==0&&a.jsx("div",{className:"no-areas",children:a.jsx("h3",{children:"No Areas Yet"})}),n=="boothmaps"&&c.length==0&&a.jsx("div",{className:"no-boothmaps",children:a.jsx("h3",{children:"No BoothMaps Yet"})}),n=="items"&&h.length==0&&a.jsx("div",{className:"no-items",children:a.jsx("h3",{children:"No Custom Items Yet"})}),n=="areas"&&a.jsx("div",{className:"area-tiles",children:r.map(u=>a.jsx(at,{area:u,onClick:()=>{const m=localStorage.getItem("companyId");window.location.href=`/LayItOut/Layout/?companyId=${m}&areaId=${u.id}&type=view-area`},deleteArea:async()=>{d(r.filter(m=>m.id!==u.id)),o(i.filter(m=>m.areaId!==u.id)),l(!0),await Ze(localStorage.getItem("companyId"),u.id),l(!1)}},u.id))}),n=="designs"&&a.jsx("div",{className:"design-tiles",children:i.map(u=>a.jsx(ot,{areaName:r.find(m=>m.id==u.areaId)?.name||"",design:u,onClick:()=>{const m=localStorage.getItem("companyId");window.location.href=`/LayItOut/Layout/?companyId=${m}&areaId=${u.areaId}&type=view-design&designId=${u.id}&designName=${u.name}`},deleteDesign:async()=>{o(i.filter(m=>m.id!==u.id)),l(!0),await Fe(localStorage.getItem("companyId"),u.areaId,u.id),l(!1)}},u.id))}),n=="boothmaps"&&a.jsx("div",{className:"boothmap-tiles",children:c.map(u=>a.jsx(ut,{areaName:r.find(m=>m.id==u.areaId)?.name||"",boothMap:u,onClick:()=>{const m=localStorage.getItem("companyId");window.location.href=`/LayItOut/Layout/?companyId=${m}&areaId=${u.areaId}&type=view-boothMap&boothMapId=${u.id}&boothMapName=${u.name}`},deleteBoothMap:async()=>{p(c.filter(m=>m.id!==u.id)),l(!0),await Je(localStorage.getItem("companyId"),u.areaId,u.id),l(!1)}},u.id))}),n=="items"&&a.jsx("div",{className:"custom-item-tiles",children:h.map(u=>a.jsx(tt,{item:u,onSelect:()=>{},canDelete:!0,onDelete:async()=>{g(h.filter(m=>m.id!==u.id)),l(!0),await Qe(localStorage.getItem("companyId"),u.id),l(!1)}},u.id))}),n=="designs"||!e?a.jsx("div",{className:"plus-icon",onClick:()=>{n=="designs"?I.current?.showModal():n=="boothmaps"?j.current?.showModal():n=="areas"?b.current?.showModal():n=="items"&&C.current?.showModal()},children:a.jsx("img",{src:st,alt:"Plus Icon"})}):null]})]})]}),a.jsx(it,{areas:r,dialogRef:I,closeDialog:()=>I.current?.close(),createDesign:async u=>{o([...i,u]),await ze(localStorage.getItem("companyId"),u.areaId,u),I.current?.close()}}),a.jsx(rt,{dialogRef:f,closeDialog:()=>f.current?.close()}),a.jsx(lt,{dialogRef:b,closeDialog:()=>b.current?.close(),createArea:async u=>{await Ve(localStorage.getItem("companyId"),u),d([...r,u]),b.current?.close(),window.location.href=`/LayItOut/Layout/?companyId=${localStorage.getItem("companyId")}&areaId=${u.id}&type=create-area&stage=placing-sections`}}),a.jsx(ct,{areas:r,dialogRef:j,closeDialog:()=>j.current?.close(),createBoothMap:async u=>{p([...c,u]),await We(localStorage.getItem("companyId"),u.areaId,u),j.current?.close()}}),a.jsx(Nn,{dialogRef:C,closeDialog:()=>C.current?.close(),createCustomItem:async u=>{await Ye(localStorage.getItem("companyId"),u),g([...h,u]),C.current?.close()}})]})}
