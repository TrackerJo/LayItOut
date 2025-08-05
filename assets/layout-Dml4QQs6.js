import{j as N,r as $,c as cu}from"./index-DtNZodfB.js";function uu({id:n,mouseOver:e,canPlaceItem:t,hasItem:s,mouseOverLocation:r,inSection:o,section:a,size:c}){return N.jsx("div",{className:`cell ${e?"hovered":""} ${t?"legal":"illegal"} ${s?"hasItem":""} ${r} ${o?"":"outside"}`,id:`${a==null?"":a.split(" ").join("")}${n.toId()}`,style:{width:`${c}px`,height:`${c}px`},children:N.jsx("div",{className:"cell cell-border",id:`${a==null?"":a.split(" ").join("")}${n.toId()}`})})}function Ys({width:n,height:e,cells:t,id:s,visibile:r,section:o}){return N.jsx("div",{className:`area ${r??!0?"":"invisible"}`,style:{width:`${n}px`,height:`${e}px`},id:s!=null?s.split(" ").join("-"):"",children:t.map(a=>N.jsx(uu,{size:a.size,id:a.id,canPlaceItem:a.canPlaceItem,mouseOver:a.mouseOver,hasItem:a.hasItem,itemId:a.itemId,mouseOverLocation:a.mouseOverLocation,inSection:a.inSection,section:o}))})}class Z{x;y;constructor({x:e,y:t}){this.x=e,this.y=t}toId(){return`Cell-${this.x}-${this.y}`}static fromString(e){return new Z({x:parseInt(e.split("-")[1]),y:parseInt(e.split("-")[2])})}}class de{name;id;icon;cellsLong;cellsTall;hasMoved;initialElement;moveable;rotation;starterItem;isDisplayItem;sectionCell;constructor({id:e,cellsLong:t,cellsTall:s,initialElement:r,name:o,icon:a,moveable:c,starterItem:h,displayItem:d,sectionCell:y,rotation:I}){this.id=e,this.cellsLong=t,this.cellsTall=s,this.hasMoved=!1,this.initialElement=r,this.name=o,this.icon=a,this.rotation=I||0,this.moveable=c??!0,this.starterItem=h??!1,this.isDisplayItem=d??!1,this.sectionCell=y}static fromDoc(e){return new de({id:e.id,name:e.name,icon:e.icon,cellsLong:e.cellsLong,cellsTall:e.cellsTall,moveable:e.moveable,starterItem:e.starterItem,displayItem:e.displayItem||!1,rotation:e.rotation||0})}static fromJSON(e){return new de({id:e.id,name:e.name,icon:e.icon,cellsLong:e.cellsLong,cellsTall:e.cellsTall,moveable:e.moveable,starterItem:e.starterItem,displayItem:e.displayItem||!1,rotation:e.rotation||0})}toJSON(){return{id:this.id,name:this.name,icon:this.icon,cellsLong:this.cellsLong,cellsTall:this.cellsTall,moveable:this.moveable,starterItem:this.starterItem,displayItem:this.isDisplayItem,rotation:this.rotation||0}}toDoc(){return{id:this.id,name:this.name,icon:this.icon,cellsLong:this.cellsLong,cellsTall:this.cellsTall,moveable:this.moveable,starterItem:this.starterItem,displayItem:this.isDisplayItem,rotation:this.rotation||0}}}class gt{item;quantity;constructor({item:e,quantity:t}){this.item=e,this.quantity=t}static fromDoc(e){return new gt({item:de.fromDoc(e.item),quantity:e.quantity})}static fromJSON(e){return new gt({item:de.fromJSON(e.item),quantity:e.quantity})}toJSON(){return{item:this.item.toJSON(),quantity:this.quantity}}toDoc(){return{item:this.item.toDoc(),quantity:this.quantity}}}class Et{cell;item;constructor({cell:e,item:t}){this.cell=e,this.item=t}}class Ce{name;cellId;cellElement;cellsLong;cellsTall;startingItems;items;constructor({name:e,cellId:t,cellsLong:s,cellsTall:r,startingItems:o,items:a}){this.name=e,this.cellId=t,this.cellsLong=s,this.cellsTall=r,this.startingItems=o,this.cellElement=null,this.items=a||[]}static fromJSON(e){const t=JSON.parse(e);return new Ce({name:t.name,cellId:Z.fromString(t.cellId),cellsLong:t.cellsLong,cellsTall:t.cellsTall,startingItems:t.startingItems.map(s=>new Et({cell:Z.fromString(s.cell),item:de.fromJSON(s.item)}))})}static fromDoc(e){return new Ce({name:e.name,cellId:Z.fromString(e.cellId),cellsLong:e.cellsLong,cellsTall:e.cellsTall,startingItems:e.startingItems?e.startingItems.map(t=>new Et({cell:Z.fromString(t.cell),item:de.fromDoc(t.item)})):[]})}toJSON(){return{name:this.name,cellId:this.cellId.toId(),cellsLong:this.cellsLong,cellsTall:this.cellsTall,startingItems:this.startingItems.map(e=>({cell:e.cell.toId(),item:e.item.toJSON()}))}}toDoc(){return{name:this.name,cellId:this.cellId.toId(),cellsLong:this.cellsLong,cellsTall:this.cellsTall,startingItems:this.startingItems.map(e=>({cell:e.cell.toId(),item:e.item.toDoc()}))}}}class Tt{name;sections;id;constructor({name:e,sections:t,id:s}){this.name=e,this.sections=t,this.id=s}toJSON(){return JSON.stringify({name:this.name,id:this.id,sections:this.sections.map(e=>e.toJSON())})}toDoc(){return{name:this.name,id:this.id,sections:this.sections.map(e=>e.toDoc())}}static fromJSON(e){const t=JSON.parse(e);return new Tt({name:t.name,id:t.id,sections:t.sections.map(s=>Ce.fromJSON(s))})}static fromDoc(e){return new Tt({name:e.name,id:e.id,sections:e.sections?e.sections.map(t=>Ce.fromDoc(t)):[]})}}class ls{id;name;sections;templates;inventoryItems;constructor({name:e,sections:t,templates:s,inventoryItems:r,id:o}){this.name=e,this.sections=t,this.templates=s,this.inventoryItems=r,this.id=o}static fromDoc(e){return new ls({name:e.name,id:e.id,sections:e.sections?e.sections.map(t=>Ce.fromDoc(t)):[],templates:e.templates?e.templates.map(t=>Tt.fromDoc(t)):[],inventoryItems:e.inventoryItems?e.inventoryItems.map(t=>gt.fromDoc(t)):[]})}static fromJSON(e){return new ls({name:e.name,id:e.id,sections:e.sections?e.sections.map(t=>Ce.fromJSON(t)):[],templates:e.templates?e.templates.map(t=>Tt.fromJSON(t)):[],inventoryItems:e.inventoryItems?e.inventoryItems.map(t=>gt.fromJSON(t)):[]})}toJSON(){return{name:this.name,id:this.id,sections:this.sections.map(e=>e.toJSON()),templates:this.templates.map(e=>e.toJSON()),inventoryItems:this.inventoryItems.map(e=>e.toJSON())}}toDoc(){return{name:this.name,id:this.id,sections:this.sections.map(e=>e.toJSON()),templates:this.templates.map(e=>e.toDoc()),inventoryItems:this.inventoryItems.map(e=>e.toDoc())}}}const Go="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAADwAAAADW5XGhAAABRUlEQVQoFY2Tz0oDMRDGv4lgPXkUPAiCvfUBbD3VLoJoBUuPPoI+jlffQIqiUC9tb/45+QIF7bXFB9jDZjrZNptN090a2M0km++XyZdZ4rPGH4AdaN2mwddI4tLGtdo29nd7ILqExq2S1w1AW1DqlaPj0zK1Jwb3MZk+kBFw1DiHoieJkqJMAvHPrEPjcZwCNkGKxEaXAYogZeIAEELQlS3uUsPMmZdpm3W2eRnYSecJKou59WLzTVmR109mIzC+3Zy+N4a5sYsCAFerFRzuyT2jLpBPWRqD1aPUS+RkLvIAOfGFXGkfv9MmNF+LB0pgL9w6aTnpIso8CMQ5wzJPmDU0tWn4PrSgFLDpqsziDGKKLaErC6H/iO1uHmT575CY05N66qRnzqVtRau9D6GmMedInud1RbIqNmMafLwh0bIhxSB9MAfmu9CGVRsdYgAAAABJRU5ErkJggg==",Wo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGaADAAQAAAABAAAAGQAAAABY85deAAABrUlEQVRIDe1VPUsDQRB9ezk0GO0FwVhFBQtDWot09oqFCGopgp1ILoWNEEHRRmy0EmwEK7XxB1gIfjQWdmlFLEQRDcaM7y4f3O4lmJw2QhYuu29m3szeu2ECmGtZYsjKAVZk0HSFxVaAqNBL2ywiuIYjcwF/CIMqc0QhgwkoTBEnuCd9udaQU6s+3PKRbyIWsjhi4n2y83wOfVnyKOLEh0MdLb7BIgRpfCKFdeWghGMvk7DwK0axoa5CZdZIWbml9hnDNqLhXwKb/CFKdanlyak7D89LFB0INocWTLCHD0CVTHMVu0Wi1P29avD2jEyz8DYft9N+Xg4KUHJGeWewowomweb3uOddn2qOtNheEyg80rZJ/1fN1/iQoGsS3Tjn7jaQtmx+7GHNkkIfi8Ro22Xrbmm+RmBJOtHjSsb2r7OCeltwJXRXsbw18ftQi61yNVKwiOb+G9Au0pKObbn+g1w2XrxrlhBv+rpx9Fdiy1yDWPlnNKyO3HC0JDm33uhpOF19rC7GRxg/xjF14bN7x7pjgJ5xpl7g4BwgMWKSAljwzCKn9QoEYtuGnxT4Bng+WDuZ4k7PAAAAAElFTkSuQmCC";function el({item:n,canPlaceItem:e,placeItem:t,deleteItem:s,deleteItemRotate:r,isSelected:o,onSelect:a,onDeselect:c,isUnselecting:h,highlightCells:d,unHighlightCells:y,visible:I,removeItem:A}){const[b,x]=$.useState(0),[k,P]=$.useState(0),M=$.useRef(null),[U,z]=$.useState(0),[ie,pe]=$.useState(0),[ee,E]=$.useState(!1),[m,p]=$.useState(0),[g,T]=$.useState(null),[w,_]=$.useState(!0),[Ke,Pt]=$.useState(12),ke=/Mobi|Android/i.test(navigator.userAgent)?5:10,Oe=$.useRef(null),[ot,Ee]=$.useState(!0),at=K=>{const oe=K%2===1;return{width:oe?n.cellsTall*ke:n.cellsLong*ke,height:oe?n.cellsLong*ke:n.cellsTall*ke,cellsWide:oe?n.cellsTall:n.cellsLong,cellsTall:oe?n.cellsLong:n.cellsTall}},ht=K=>{const oe=n.cellsLong*ke,re=n.cellsTall*ke;switch(K%4){case 0:return{x:0,y:0};case 1:return{x:(re-oe)/2,y:(oe-re)/2};case 2:return{x:0,y:0};case 3:return{x:(re-oe)/2,y:(oe-re)/2};default:return{x:0,y:0}}},nt=()=>{if(!n.hasMoved)return;const K=m+1,oe=at(K),re=de.fromDoc(n.toDoc());re.cellsLong=oe.cellsWide,re.cellsTall=oe.cellsTall,re.initialElement=n.initialElement,re.rotation=K,re.hasMoved=n.hasMoved;let ae=g;if(!n.hasMoved&&n.rotation!=0||ae&&e(Z.fromString(ae.id),re)){ae==null&&(ae=n.initialElement),console.log("ROTATE ITEM",n.id,"to rotation:",K,"at cell:",ae?.id),p(K),r(n,Z.fromString(ae.id)),n.rotation=K;const Me=ht(K),me=ae.offsetLeft,Pe=ae.offsetTop;x(me+Me.x),P(Pe+Me.y),z(me+Me.x),pe(Pe+Me.y)}};function Te(K){const oe=M.current,re=window.getComputedStyle(oe),ae=document.createElement("span");ae.style.font=re.font,ae.style.fontSize=K+"px",ae.style.fontFamily=re.fontFamily,ae.style.fontWeight=re.fontWeight,ae.style.position="absolute",ae.style.visibility="hidden",ae.style.whiteSpace="nowrap",ae.textContent=oe.textContent,document.body.appendChild(ae);const Me=ae.offsetWidth;return document.body.removeChild(ae),Me}function pn(K){if(M.current){const oe=M.current;return Te(K-1)>oe.offsetWidth&&K-1>8?pn(K-1):K-1}return K}$.useEffect(()=>{setTimeout(()=>{M.current&&Pt(pn(Ke)),n.isDisplayItem&&!n.hasMoved&&(console.log("Starting item as dragging item"),E(!0))},100)},[]),$.useEffect(()=>{if(n.initialElement!=null&&!n.hasMoved&&(console.log("Item initial element:",n.rotation),n.rotation&&setTimeout(()=>{console.log("Rotating item to initial rotation:",n.rotation);for(let K=0;K<n.rotation;K++)console.log("Rotating item",K+1,"times"),p(oe=>{const re=(oe+1)%4,ae=ht(re),Me=n.initialElement.offsetLeft,me=n.initialElement.offsetTop;return x(Me+ae.x),P(me+ae.y),z(Me+ae.x),pe(me+ae.y),re})},100),n.initialElement&&!n.hasMoved)){n.initialElement.classList.contains("cell")&&(console.log("Setting cell to initial element:",n.initialElement.children[0]),T(n.initialElement.children[0]));const K=document.querySelector(".toolbox"),oe=K.scrollLeft,re=K.scrollTop;n.isDisplayItem?(x(n.initialElement.offsetLeft-oe),P(n.initialElement.offsetTop-re),z(n.initialElement.offsetLeft-oe),pe(n.initialElement.offsetTop-re)):(x(n.initialElement.offsetLeft),P(n.initialElement.offsetTop),z(n.initialElement.offsetLeft),pe(n.initialElement.offsetTop))}},[n]);const lt=()=>{if(ee)return;if(g==null){x(n.initialElement.offsetLeft),z(n.initialElement.offsetLeft),P(n.initialElement.offsetTop),pe(n.initialElement.offsetTop);return}const K=g.offsetTop,oe=g.offsetLeft,re=ht(m);x(oe+re.x),P(K+re.y),z(oe+re.x),pe(K+re.y)};$.useEffect(()=>(window.addEventListener("resize",lt),()=>{window.removeEventListener("resize",lt)}),[g,m,ee]);const _t=K=>{K.preventDefault()};$.useEffect(()=>{if(console.log("IS Dragging: ",ee),ee){z(b),pe(k),document.body.addEventListener("touchmove",_t,{passive:!1});const K=document.getElementById(n.id)?.getBoundingClientRect(),oe=K?K.left-b:0,re=K?K.top-k:0;o&&c();const ae=(me,Pe,Ue)=>{const Vt=at(m),st=de.fromDoc(n.toDoc());st.cellsLong=Vt.cellsWide,st.cellsTall=Vt.cellsTall,st.initialElement=n.initialElement,st.rotation=m,st.hasMoved=n.hasMoved,st.id=n.id;let ft=Ue;if(!ft||!ft.classList?.contains("cell")){const pt=document.elementFromPoint(me,Pe);pt?.classList?.contains("cell")&&(ft=pt)}ft?.classList?.contains("cell")?d(Z.fromString(ft.id),st):y(),x(me-oe),P(Pe-re+5)},Me=(me,Pe)=>{console.log("Drag ended"),y(),document.body.removeEventListener("touchmove",_t);const Ue=document.elementFromPoint(me,Pe);if(Ue?.classList?.contains("cell")){const Vt=at(m),st={...n,cellsLong:Vt.cellsWide,cellsTall:Vt.cellsTall};if(!e(Z.fromString(Ue.id),st)){if(n.isDisplayItem&&!n.hasMoved){console.log("Removing item from toolbox"),A(n);return}x(U),P(ie),E(!1);return}const ft=Ue.offsetTop,pt=Ue.offsetLeft,Ot=ht(m),yn=pt+Ot.x,Mt=ft+Ot.y;x(yn),P(Mt),z(yn),pe(Mt),t(Z.fromString(Ue.id),st,g!=null?Z.fromString(g.id):null),console.log("Placed item at cell:",Ue),T(Ue)}else{if(n.isDisplayItem&&!n.hasMoved){console.log("Removing item from toolbox"),A(n);return}x(U),P(ie)}E(!1)};return document.onmousemove=me=>{me.preventDefault(),ae(me.clientX,me.clientY,me.target)},document.onmouseup=me=>{Me(me.clientX,me.clientY),document.onmousemove=null,document.onmouseup=null,document.ontouchmove=null,document.ontouchend=null},document.ontouchmove=me=>{me.preventDefault();const Pe=me.touches[0];ae(Pe.clientX,Pe.clientY,me.target)},document.ontouchend=me=>{const Pe=me.changedTouches[0];Me(Pe.clientX,Pe.clientY),document.removeEventListener("touchmove",_t),document.onmousemove=null,document.onmouseup=null,document.ontouchmove=null,document.ontouchend=null},()=>{document.removeEventListener("touchmove",_t)}}else document.onmousemove=null,document.onmouseup=null,document.ontouchmove=null,document.ontouchend=null,document.body.removeEventListener("touchmove",_t)},[ee,g,m]);const dt=at(m);function Bn(){if(g){const K=m+1,oe=at(K),re={...n,cellsLong:oe.cellsWide,cellsTall:oe.cellsTall};console.log("Can place item at cell:",e(Z.fromString(g?.id||""),re)),_(e(Z.fromString(g.id),re))}else _(!1)}return b==0||k==0||!ot?null:N.jsxs(N.Fragment,{children:[N.jsx("div",{id:n.id,ref:Oe,className:`draggable-item ${ee?"dragging":o?"selected":""} ${n.moveable?"":"not-moveable"} ${I?"":"invisible"}`,style:{top:`${k}px`,left:`${b}px`,width:`${n.cellsLong*(n.isDisplayItem&&!ee&&!n.hasMoved?10:ke)-(o?4:0)}px`,height:`${n.cellsTall*(n.isDisplayItem&&!ee&&!n.hasMoved?10:ke)-(o?4:0)}px`,rotate:`${m*90}deg`,transformOrigin:"center center",fontSize:`${Ke}px`},onMouseDown:n.moveable?()=>E(!0):void 0,onTouchStart:n.moveable?K=>{K.preventDefault(),E(!0)}:void 0,onClick:K=>{K.stopPropagation(),n.hasMoved&&(o?c():(Bn(),a(n.id)))},children:n.icon.includes("custom-")?N.jsx("div",{className:"custom-icon",children:N.jsx("div",{children:N.jsx("p",{ref:M,children:n.icon.split("custom-")[1]})})}):N.jsx("img",{src:n.icon,alt:"icon"})}),(o||h)&&N.jsx(N.Fragment,{children:/Mobi|Android/i.test(navigator.userAgent)?N.jsxs(N.Fragment,{children:[N.jsx("div",{className:`draggable-item-options mobile-left ${h?"exiting":""}`,style:{top:`${k+n.cellsTall*ke/2-10}px`,left:`${b+n.cellsLong*ke/2-dt.width/2-20}px`,width:"10px"},children:N.jsx("img",{src:Wo,alt:"rotate",className:"rotate-icon"+(w?" can-rotate":" cannot-rotate"),onClick:K=>{K.stopPropagation(),nt()}})}),N.jsx("div",{className:`draggable-item-options mobile-right ${h?"exiting":""}`,style:{top:`${k+n.cellsTall*ke/2-10}px`,left:`${b+n.cellsLong*ke/2+dt.width/2+10}px`,width:"10px"},children:N.jsx("img",{src:Go,alt:"delete",className:"delete-icon",onClick:K=>{K.stopPropagation(),s(n,Z.fromString(g?.id||""))}})})]}):N.jsxs("div",{className:`draggable-item-options ${h?"exiting":""}`,style:{top:`${k+n.cellsTall*ke/2-dt.height/2-20}px`,left:`${b+n.cellsLong*ke/2-dt.width/2}px`,width:`${dt.width}px`},children:[N.jsx("img",{src:Wo,alt:"rotate",className:"rotate-icon"+(w?" can-rotate":" cannot-rotate"),onClick:K=>{K.stopPropagation(),nt()}}),N.jsx("img",{src:Go,alt:"delete",className:"delete-icon",onClick:K=>{K.stopPropagation(),s(n,Z.fromString(g?.id||""))}})]})})]})}function hu({inventoryItem:n,addDraggingItem:e,removeItem:t}){const s=$.useRef(null),r=$.useRef(null),[o,a]=$.useState(12),[c,h]=$.useState(n.item);function d(I){const A=r.current,b=window.getComputedStyle(A),x=document.createElement("span");x.style.font=b.font,x.style.fontSize=I+"px",x.style.fontFamily=b.fontFamily,x.style.fontWeight=b.fontWeight,x.style.position="absolute",x.style.visibility="hidden",x.style.whiteSpace="nowrap",x.textContent=A.textContent,document.body.appendChild(x);const k=x.offsetWidth;return document.body.removeChild(x),k}function y(I){if(r.current){const A=r.current;return d(I-1)>A.offsetWidth&&I-1>8?y(I-1):I-1}return I}return $.useEffect(()=>{setTimeout(()=>{r.current&&a(y(o))},100)},[]),N.jsxs("div",{className:"display",children:[N.jsx("div",{ref:s,id:n.item.id,className:"display-item",style:{width:`${n.item.cellsLong*10}px`,height:`${n.item.cellsTall*10}px`},onMouseDown:I=>{I.preventDefault(),I.stopPropagation(),n.item.initialElement=s.current,n.item.id=n.item.name+(Math.random()*1e4).toString(),console.log("ADDING ITEM",n.item.id,"to initialElement",n.item.initialElement),h(new de({id:n.item.id,cellsLong:n.item.cellsLong,cellsTall:n.item.cellsTall,name:n.item.name,icon:n.item.icon,moveable:n.item.moveable,starterItem:n.item.starterItem,displayItem:n.item.isDisplayItem})),e(n.item)},onTouchStart:I=>{I.preventDefault(),I.stopPropagation(),n.item.initialElement=s.current,n.item.id=n.item.name+(Math.random()*1e4).toString(),console.log("ADDING ITEM",n.item.id,"to initialElement",n.item.initialElement),h(new de({id:n.item.id,cellsLong:n.item.cellsLong,cellsTall:n.item.cellsTall,name:n.item.name,icon:n.item.icon,moveable:n.item.moveable,starterItem:n.item.starterItem,displayItem:n.item.isDisplayItem})),e(n.item)},children:n.item.icon.includes("custom-")?N.jsx("div",{className:"custom-icon",children:N.jsx("div",{children:N.jsx("p",{ref:r,style:{fontSize:`${o}px`},children:n.item.icon.split("custom-")[1]})})}):N.jsx("img",{src:n.item.icon,alt:"icon"})}),N.jsx("p",{children:n.item.name}),N.jsxs("p",{className:"quantity",children:["x",n.quantity]})]})}const du="/LayItOut/assets/plus.circle-Ce3xm00a.png";function fu({inventoryItems:n,addDraggingItem:e,maxHeight:t,removeItem:s,showAddCustomItem:r,isCreatingTemplate:o,isEditingTemplate:a}){return N.jsxs("div",{className:"toolbox",style:{maxHeight:t?`${t}px`:"200px"},children:[n.map(c=>N.jsx(hu,{inventoryItem:c,addDraggingItem:e,removeItem:s})),!(o||a)&&N.jsx("div",{className:"add-item",onClick:()=>{r()},children:N.jsx("img",{src:du,alt:"Add Item"})})]})}function Ti({section:n,visible:e,cellSize:t}){const[s,r]=$.useState(n.cellElement?.offsetLeft??0),[o,a]=$.useState(n.cellElement?.offsetTop??0),c=$.useRef(null),[h,d]=$.useState(16);function y(b){const x=c.current,k=window.getComputedStyle(x),P=document.createElement("span");P.style.font=k.font,P.style.fontSize=b+"px",P.style.fontFamily=k.fontFamily,P.style.fontWeight=k.fontWeight,P.style.position="absolute",P.style.visibility="hidden",P.style.whiteSpace="no-wrap",P.textContent=x.textContent,document.body.appendChild(P);const M=P.offsetWidth;return document.body.removeChild(P),M}function I(b){if(c.current){const x=c.current,k=y(b-1);return console.log("Current text width:",k),console.log("Paragraph width:",x.offsetWidth),k>x.offsetWidth&&h>6?(console.log("Decreasing font size to:",b-1),I(b-1)):b-1}return b}$.useEffect(()=>{setTimeout(()=>{c.current&&d(I(h))},100)},[]);const A=()=>{n.cellElement!=null&&(r(n.cellElement.offsetLeft),a(n.cellElement.offsetTop))};return $.useEffect(()=>(window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A)}),[n.cellElement]),n.cellElement&&N.jsx("div",{className:`section ${e??!0?"":"invisible"}`,style:{top:`${n.cellElement.offsetTop}px`,left:`${n.cellElement.offsetLeft}px`,width:`${n.cellsLong*t-2}px`,height:`${n.cellsTall*t-2}px`},children:N.jsx("h2",{className:"section-title",style:{fontSize:`${h}px`},ref:c,children:n.name})})}const Js="/LayItOut/assets/forward-Drovs4r6.png";function mu({dialogRef:n,closeDialog:e,layoutSections:t,isOpen:s}){const[r,o]=$.useState(0),[a,c]=$.useState(0),[h,d]=$.useState([]),[y,I]=$.useState([...t]),A=/Mobi|Android/i.test(navigator.userAgent)?5:10;function b(k){for(const P of y)if(k.x>=P.cellId.x&&k.x<P.cellId.x+P.cellsLong&&k.y>=P.cellId.y&&k.y<P.cellId.y+P.cellsTall)return P;return null}$.useEffect(()=>{if(!s)return;console.log("Layout dialog opened, generating cells and sections",t);const k=[];let P=0,M=0;for(const U of t)console.log("Generating cells for section",U.name,"at",U.cellId,"with size",U.cellsLong,"x",U.cellsTall),console.log("Added section Length:",U.cellsLong*A+U.cellId.x),(U.cellsLong+U.cellId.x)*A>P&&(P+=U.cellsLong*A),(U.cellsTall+U.cellId.y)*A>M&&(M+=U.cellsTall*A);console.log("Current width:",P,"Current height:",M),o(P),c(M),[...Array(M/A).keys()].map(U=>{const z=[];[...Array(P/A).keys()].map(ie=>{console.log(b(new Z({x:ie,y:U}))!=null?"In section":"Outside section"),z.push({id:new Z({x:ie,y:U}),hasItem:!1,itemId:"",mouseOver:!1,canPlaceItem:!1,mouseOverLocation:"",inSection:!1,size:A})}),k.push(z)}),d([...k]),setTimeout(()=>{const U=[...t];for(const z of U)console.log("Adding section",z.name,z.cellId),z.cellElement=document.querySelector(`.layout-dialog #${z.cellId.toId()}.cell:not(.cell-border)`),console.log("Section element found",z.cellElement);console.log("Setting sections",U),I([...U]),d([...k])},100)},[s,t]);function x(k){let P=[];return k.map(M=>P=[...P,...M]),P}return N.jsxs("dialog",{ref:n,className:"layout-dialog",children:[N.jsxs("div",{className:"layout-dialog-div",children:[N.jsx("h2",{children:"Layout"}),N.jsx(Ys,{width:r,height:a,cells:x(h)}),N.jsx("br",{}),N.jsx("button",{className:"layout-dialog-close",onClick:e,children:"Close"})]}),y.map(k=>N.jsx(Ti,{section:k,visible:!0,cellSize:A},k.cellId.toId()))]})}const gu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE2mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI1LTA4LTAzPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmE2MmM1Y2UxLTIzNTYtNGE3Ny1hNTAwLTViNWJjMjE1MDU3NzwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5VbnRpdGxlZCBkZXNpZ24gLSAxPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnRpdGxlPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpwZGY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8nPgogIDxwZGY6QXV0aG9yPlNhcmFoIEtlbW1lTmFzaDwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhIChSZW5kZXJlcikgZG9jPURBR3UyeXVFTlpBIHVzZXI9VUFGakdXNnh0Q1EgYnJhbmQ9W0FSQ0hJVkVEXSBGb3J0IFdheW5lIENvbW11bml0eSBTY2hvb2xzIHRlbXBsYXRlPTwveG1wOkNyZWF0b3JUb29sPgogPC9yZGY6RGVzY3JpcHRpb24+CjwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9J3InPz7fMgZvAAADaElEQVR4nO3dO2gTAQDG8e8ujz6k6FBbUeOjKILV4CAiDgWxLqK4KM4dCuLiIIg6OQgibi5OgjgoDhZB7NIiIr6gCFFThIotaSsVtSJtadI87hykiKSNd/Uu9yX3/cZwyV3yv0fukYth27YNoWEGPQHyNwUhoyBkFISMgpBREDIKQkZByCgImajTAa88XMDTDyU/p8VXjTHg0vEGHNgeCXpSKnK8hNRyDADIFYCXI/zvwfESsujInig6N/i7prv+OO/puO6/LmB82kYtHLRzHSSZMNG9y/XTXFkMsjth4rAH4xpIFzE+XQs5tFGnoyBkFISMgpBREDIKQkZByCgIGQUhoyBkFISMvwelVujU/iiGJy3s3cp9qNwPlEF6D8aDnoTAaJVFRkHIKAgZBSGjIGQUhIyCkFEQMgpCRkHIKAgZymNZfvkxZ+NtpsqXkxrAtnYTqxoMR4OHKsjQaAlDo9W/vndzq4FbvU2Ohg3FKqtzY7CH8TPfnV/GGoolpKcrhp6uWNXHO5Au4tqjvKvnhGIJqSUKQkZByCgIGQUhoyBkFISMgpBREDIKQkZByFAGsSwgm6+N35V7jTLIubs5nLyRxdg3K+hJqTrKIOlJC7kCMDKlIBQW7yRsUk6dv0L4lrkpCBkFIeP6FO67CQslq1j2+I71Jra0qu//ch2kP1VEf6r88XgU6DvbhMa4s8tdZGmezdJrWwxEwvcbTc+5XkIuHIv7fke5MNNKn4yCkFEQMgpCRkHIUH9dujmYx+1nhbLHkwkT5482wKjDXR7qIDNZYCZbfqLqyWwJZ7pttDTVXxHqIMvdanzdGqMuYwDkQby61Xgt0UadTLhmv2XM5Wxc7lvA1E9vL6xYyYUaCgLg4xcLqQzH+XsFAZDcFMHpQzHML3j7up++Wnjh8k9kFARAxARO7PP+N4gD6aLrINqokwlsCUllSrj3qoBihRmoxLFar6rAgjwYKuLNWOVPfHaJvfR6F1iQnq4Ytrcvvca88/z38avVzfW5N15JYEE62kx0tFUOUo8HD/9FG3UyCkJGQcgoCBnPLiX1w/sJC1aVxuWH4c/ud6QM27Ydfdnvvjrv+sXlj8GLzY6Gc7zK2unzHxLXs2TC+WfneAmR6tBsT0ZByCgIGQUhoyBkFISMgpBREDIKQuYX+jTA4JQOFzkAAAAASUVORK5CYII=",pu="/LayItOut/assets/template-Cjj8EPhc.png";function yu({dialogRef:n,closeDialog:e,templates:t,isOpen:s}){const[r,o]=$.useState([]),[a,c]=$.useState([]),h=5,[d,y]=$.useState([]),[I,A]=$.useState(/Mobi|Android/i.test(navigator.userAgent)),[b,x]=$.useState([]);function k(M,U,z){const ie=[],pe=t.filter(ee=>M.some(E=>E.name===ee.name));pe.sort((ee,E)=>M.indexOf(ee)-M.indexOf(E));for(const ee of pe){const E=[];let m=0,p=0;for(const g of ee.sections)console.log("Generating cells for section",g.name,"at",g.cellId,"with size",g.cellsLong,"x",g.cellsTall),console.log("Added section Length:",g.cellsLong*h+g.cellId.x),(g.cellsLong+g.cellId.x)*h>m&&(m+=g.cellsLong*h),(g.cellsTall+g.cellId.y)*h>p&&(p+=g.cellsTall*h);console.log("Current width:",m,"Current height:",p),[...Array(p/h).keys()].map(g=>{const T=[];[...Array(m/h).keys()].map(w=>{T.push({id:new Z({x:w,y:g}),hasItem:!1,itemId:"",mouseOver:!1,canPlaceItem:!1,mouseOverLocation:"",inSection:!1,size:h})}),E.push(T)}),ie.push({width:m,height:p,templateName:ee.name,cells:E})}c([...ie]),setTimeout(()=>{const ee=[],E=[];for(const m of pe){const p=[];for(const g of m.sections)console.log("Adding section",g.name,g.cellId,m.name.split(" ").join("-")),g.cellElement=document.querySelector(`.template-dialog #${m.name.split(" ").join("-")} #${g.cellId.toId()}.cell:not(.cell-border)`),console.log("Section element found",g.cellElement),ee.push(g),p.push(...g.startingItems.map(T=>new Et({cell:new Z({x:g.cellId.x+T.cell.x,y:g.cellId.y+T.cell.y}),item:new de({id:T.item.id,name:T.item.name,cellsLong:T.item.cellsLong,cellsTall:T.item.cellsTall,icon:T.item.icon,initialElement:document.querySelector(`.template-dialog #${m.name.split(" ").join("-")} #${T.cell.toId()}.cell:not(.cell-border)`),starterItem:!0,moveable:!1})})));for(const g of p){console.log("Placing starting item",g.item.name,g.cell);for(let T=0;T<g.item.cellsTall;T++)for(let w=0;w<g.item.cellsLong;w++)ie[ie.findIndex(_=>_.templateName==m.name)].cells[g.cell.y+T][g.cell.x+w].hasItem=!0,ie[ie.findIndex(_=>_.templateName==m.name)].cells[g.cell.y+T][g.cell.x+w].itemId=g.item.id;g.item.initialElement=document.querySelector(`.template-dialog #${m.name.split(" ").join("-")} #${g.cell.toId()}.cell:not(.cell-border)`),console.log("Adding item to items",g.item.initialElement),E.push(new de({id:g.item.id,name:g.item.name,cellsLong:g.item.cellsLong,cellsTall:g.item.cellsTall,icon:g.item.icon,initialElement:g.item.initialElement,starterItem:!0,moveable:!1}))}}y(m=>[...m,...E]),o([...ee])},100)}$.useEffect(()=>{if(s&&(console.log("Layout dialog opened, generating cells and sections",t),t.length!==0)){if(t.length==1){k([t[0]]);return}x(I?[t[0].name]:[t[0].name,t[1].name])}},[s,t]),$.useEffect(()=>{const M=t.filter(U=>b.includes(U.name));console.log("Viewing templates:",b),M.sort((U,z)=>b.indexOf(U.name)-b.indexOf(z.name)),console.log("Generating templates for",M.map(U=>U.name)),k(M)},[b]);function P(M){let U=[];return M.map(z=>U=[...U,...z]),U}return N.jsxs("dialog",{ref:n,className:"template-dialog",children:[N.jsxs("div",{className:"template-dialog-div",children:[N.jsx("h2",{children:"Templates"}),N.jsxs("div",{className:"templates",children:[t.length>1&&t.filter(M=>!b.includes(M.name)).length>0&&N.jsx("img",{src:Js,onClick:()=>{if(I){const U=(t.findIndex(z=>z.name===b[0])-1+t.length)%t.length;x([t[U].name])}else x(M=>{const z=(t.findIndex(ie=>ie.name===M[0])-1+t.length)%t.length;return[t[z].name,M[0]]})},className:"back-mobile-areas"}),a.map((M,U)=>N.jsxs("div",{children:[N.jsx(Ys,{width:M.width,height:M.height,cells:P(M.cells),id:M.templateName.split(" ").join("-"),visibile:!0},U),N.jsx("h3",{children:M.templateName}),N.jsx("button",{className:"template-select-btn",onClick:()=>{const z=t.find(ee=>ee.name===M.templateName),ie=new Tt({name:z.name,id:z.id,sections:z.sections.map(ee=>new Ce({name:ee.name,cellId:new Z({x:ee.cellId.x*(I?20:10),y:ee.cellId.y*(I?20:10)}),cellsLong:ee.cellsLong*(I?20:10),cellsTall:ee.cellsTall*(I?20:10),startingItems:ee.startingItems.map(E=>new Et({cell:new Z({x:E.cell.x*(I?2:1),y:E.cell.y*(I?2:1)}),item:new de({id:E.item.id,name:E.item.name,icon:E.item.icon,cellsLong:E.item.cellsLong*2,cellsTall:E.item.cellsTall*2,starterItem:E.item.starterItem,moveable:E.item.moveable})}))}))}),pe=new URLSearchParams(window.location.search);pe.set("templateName",ie.name),window.location.search=pe.toString()},children:" Select"})]})),t.length>1&&t.filter(M=>!b.includes(M.name)).length>0&&N.jsx("img",{src:Js,onClick:()=>{if(I){const U=(t.findIndex(z=>z.name===b[0])+1)%t.length;x([t[U].name])}else x(M=>{const z=(t.findIndex(ie=>ie.name===M[M.length-1])+1)%t.length;return[M[1],t[z].name]})},className:"forward-mobile-areas"})]}),N.jsx("br",{}),N.jsx("button",{className:"template-dialog-close",onClick:e,children:"Close"})]}),r.map(M=>N.jsx(Ti,{section:M,visible:!0,cellSize:h},M.cellId.toId())),d.map(M=>N.jsx(el,{removeItem:()=>{},visible:!0,item:M,canPlaceItem:()=>!1,placeItem:()=>{},deleteItemRotate:()=>{},highlightCells:()=>{},unHighlightCells:()=>{},deleteItem:()=>{},isSelected:!1,onSelect:U=>{},isUnselecting:!1,onDeselect:()=>{}},M.id))]})}function _u({dialogRef:n,closeDialog:e,addInventoryItem:t}){const[s,r]=$.useState(""),[o,a]=$.useState(1),[c,h]=$.useState(1),[d,y]=$.useState(1);return N.jsx("dialog",{ref:n,className:"custom-item-dialog",children:N.jsxs("div",{className:"custom-item-dialog-div",children:[N.jsx("h2",{children:"Add Custom Item"}),N.jsxs("div",{className:"custom-item-row",children:[N.jsx("label",{htmlFor:"item-name",children:"Name:"}),N.jsx("input",{type:"text",id:"item-name",name:"item-name",onChange:I=>r(I.target.value??""),value:s})]}),N.jsxs("div",{className:"custom-item-row",children:[N.jsx("label",{htmlFor:"item-icon",children:"Count:"}),N.jsx("input",{type:"number",id:"item-count",name:"item-count",min:"1",value:o,onChange:I=>a(parseInt(I.target.value)??1)})]}),N.jsxs("div",{className:"custom-item-row custom-item-size",children:[N.jsx("label",{htmlFor:"item-width",children:"Size (in feet):"}),N.jsx("input",{type:"number",id:"item-width",name:"item-width",min:"1",value:c,onChange:I=>h(parseFloat(I.target.value)??1)}),N.jsx("span",{children:" x "}),N.jsx("input",{type:"number",id:"item-height",name:"item-height",min:"1",value:d,onChange:I=>y(parseFloat(I.target.value)??1)})]}),N.jsx("br",{}),N.jsx("button",{className:"custom-item-dialog-add",onClick:()=>{if(s.trim()===""){alert("Item name cannot be empty");return}const I=new gt({quantity:o,item:new de({id:s+(Math.random()*1e4).toString(),name:s,icon:`custom-${s}`,cellsLong:Math.ceil(c),cellsTall:Math.ceil(d),moveable:!0,starterItem:!1,displayItem:!0})});t(I),r(""),a(1),h(1),y(1),e()},children:"Add Item"}),N.jsx("br",{}),N.jsx("br",{}),N.jsx("button",{className:"custom-item-dialog-close",onClick:e,children:"Close"})]})})}const Iu=()=>{};var Ho={};/**
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
 */const tl=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Eu=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const o=n[t++];e[s++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=n[t++],a=n[t++],c=n[t++],h=((r&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(h>>10)),e[s++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(o&63)<<6|a&63)}}return e.join("")},nl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const o=n[r],a=r+1<n.length,c=a?n[r+1]:0,h=r+2<n.length,d=h?n[r+2]:0,y=o>>2,I=(o&3)<<4|c>>4;let A=(c&15)<<2|d>>6,b=d&63;h||(b=64,a||(A=64)),s.push(t[y],t[I],t[A],t[b])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(tl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Eu(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const o=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const d=r<n.length?t[n.charAt(r)]:64;++r;const I=r<n.length?t[n.charAt(r)]:64;if(++r,o==null||c==null||d==null||I==null)throw new Tu;const A=o<<2|c>>4;if(s.push(A),d!==64){const b=c<<4&240|d>>2;if(s.push(b),I!==64){const x=d<<6&192|I;s.push(x)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Tu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Au=function(n){const e=tl(n);return nl.encodeByteArray(e,!0)},Xs=function(n){return Au(n).replace(/\./g,"")},vu=function(n){try{return nl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function wu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ru=()=>wu().__FIREBASE_DEFAULTS__,Su=()=>{if(typeof process>"u"||typeof Ho>"u")return;const n=Ho.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},bu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&vu(n[1]);return e&&JSON.parse(e)},Ai=()=>{try{return Iu()||Ru()||Su()||bu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Cu=n=>Ai()?.emulatorHosts?.[n],Pu=n=>{const e=Cu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},sl=()=>Ai()?.config;/**
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
 */class Vu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function vi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function xu(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Du(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Xs(JSON.stringify(t)),Xs(JSON.stringify(a)),""].join(".")}const ns={};function Nu(){const n={prod:[],emulator:[]};for(const e of Object.keys(ns))ns[e]?n.emulator.push(e):n.prod.push(e);return n}function Lu(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ko=!1;function ku(n,e){if(typeof window>"u"||typeof document>"u"||!vi(window.location.host)||ns[n]===e||ns[n]||Ko)return;ns[n]=e;function t(A){return`__firebase__banner__${A}`}const s="__firebase__banner",o=Nu().prod.length>0;function a(){const A=document.getElementById(s);A&&A.remove()}function c(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function h(A,b){A.setAttribute("width","24"),A.setAttribute("id",b),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function d(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{Ko=!0,a()},A}function y(A,b){A.setAttribute("id",b),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function I(){const A=Lu(s),b=t("text"),x=document.getElementById(b)||document.createElement("span"),k=t("learnmore"),P=document.getElementById(k)||document.createElement("a"),M=t("preprendIcon"),U=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const z=A.element;c(z),y(P,k);const ie=d();h(U,M),z.append(U,x,P,ie),document.body.appendChild(z)}o?(x.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
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
 */function Ou(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mu(){const n=Ai()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fu(){return!Mu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ju(){try{return typeof indexedDB=="object"}catch{return!1}}function Uu(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const Bu="FirebaseError";class On extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Bu,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rl.prototype.create)}}class rl{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],a=o?qu(o,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new On(r,c,s)}}function qu(n,e){return n.replace(zu,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const zu=/\{\$([^}]+)}/g;function Zs(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const o=n[r],a=e[r];if(Qo(o)&&Qo(a)){if(!Zs(o,a))return!1}else if(o!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function Qo(n){return n!==null&&typeof n=="object"}/**
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
 */function Ht(n){return n&&n._delegate?n._delegate:n}class cs{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ln="[DEFAULT]";/**
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
 */class $u{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Vu;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wu(e))try{this.getOrInitializeService({instanceIdentifier:ln})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:r});s.resolve(o)}catch{}}}}clearInstance(e=ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ln){return this.instances.has(e)}getOptions(e=ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);s===c&&a.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Gu(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ln){return this.component?this.component.multipleInstances?e:ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gu(n){return n===ln?void 0:n}function Wu(n){return n.instantiationMode==="EAGER"}/**
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
 */class Hu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $u(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const Ku={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},Qu=he.INFO,Yu={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},Ju=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=Yu[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class il{constructor(e){this.name=e,this._logLevel=Qu,this._logHandler=Ju,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ku[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const Xu=(n,e)=>e.some(t=>n instanceof t);let Yo,Jo;function Zu(){return Yo||(Yo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eh(){return Jo||(Jo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ol=new WeakMap,Zr=new WeakMap,al=new WeakMap,$r=new WeakMap,wi=new WeakMap;function th(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(qt(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ol.set(t,n)}).catch(()=>{}),wi.set(e,n),e}function nh(n){if(Zr.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Zr.set(n,e)}let ei={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Zr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||al.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return qt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function sh(n){ei=n(ei)}function rh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Gr(this),e,...t);return al.set(s,e.sort?e.sort():[e]),qt(s)}:eh().includes(n)?function(...e){return n.apply(Gr(this),e),qt(ol.get(this))}:function(...e){return qt(n.apply(Gr(this),e))}}function ih(n){return typeof n=="function"?rh(n):(n instanceof IDBTransaction&&nh(n),Xu(n,Zu())?new Proxy(n,ei):n)}function qt(n){if(n instanceof IDBRequest)return th(n);if($r.has(n))return $r.get(n);const e=ih(n);return e!==n&&($r.set(n,e),wi.set(e,n)),e}const Gr=n=>wi.get(n);function oh(n,e,{blocked:t,upgrade:s,blocking:r,terminated:o}={}){const a=indexedDB.open(n,e),c=qt(a);return s&&a.addEventListener("upgradeneeded",h=>{s(qt(a.result),h.oldVersion,h.newVersion,qt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),r&&h.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const ah=["get","getKey","getAll","getAllKeys","count"],lh=["put","add","delete","clear"],Wr=new Map;function Xo(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Wr.get(e))return Wr.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=lh.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||ah.includes(t)))return;const o=async function(a,...c){const h=this.transaction(a,r?"readwrite":"readonly");let d=h.store;return s&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),r&&h.done]))[0]};return Wr.set(e,o),o}sh(n=>({...n,get:(e,t,s)=>Xo(e,t)||n.get(e,t,s),has:(e,t)=>!!Xo(e,t)||n.has(e,t)}));/**
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
 */class ch{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(uh(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function uh(n){return n.getComponent()?.type==="VERSION"}const ti="@firebase/app",Zo="0.14.0";/**
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
 */const Nt=new il("@firebase/app"),hh="@firebase/app-compat",dh="@firebase/analytics-compat",fh="@firebase/analytics",mh="@firebase/app-check-compat",gh="@firebase/app-check",ph="@firebase/auth",yh="@firebase/auth-compat",_h="@firebase/database",Ih="@firebase/data-connect",Eh="@firebase/database-compat",Th="@firebase/functions",Ah="@firebase/functions-compat",vh="@firebase/installations",wh="@firebase/installations-compat",Rh="@firebase/messaging",Sh="@firebase/messaging-compat",bh="@firebase/performance",Ch="@firebase/performance-compat",Ph="@firebase/remote-config",Vh="@firebase/remote-config-compat",xh="@firebase/storage",Dh="@firebase/storage-compat",Nh="@firebase/firestore",Lh="@firebase/ai",kh="@firebase/firestore-compat",Oh="firebase",Mh="12.0.0";/**
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
 */const ni="[DEFAULT]",Fh={[ti]:"fire-core",[hh]:"fire-core-compat",[fh]:"fire-analytics",[dh]:"fire-analytics-compat",[gh]:"fire-app-check",[mh]:"fire-app-check-compat",[ph]:"fire-auth",[yh]:"fire-auth-compat",[_h]:"fire-rtdb",[Ih]:"fire-data-connect",[Eh]:"fire-rtdb-compat",[Th]:"fire-fn",[Ah]:"fire-fn-compat",[vh]:"fire-iid",[wh]:"fire-iid-compat",[Rh]:"fire-fcm",[Sh]:"fire-fcm-compat",[bh]:"fire-perf",[Ch]:"fire-perf-compat",[Ph]:"fire-rc",[Vh]:"fire-rc-compat",[xh]:"fire-gcs",[Dh]:"fire-gcs-compat",[Nh]:"fire-fst",[kh]:"fire-fst-compat",[Lh]:"fire-vertex","fire-js":"fire-js",[Oh]:"fire-js-all"};/**
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
 */const er=new Map,jh=new Map,si=new Map;function ea(n,e){try{n.container.addComponent(e)}catch(t){Nt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function tr(n){const e=n.name;if(si.has(e))return Nt.debug(`There were multiple attempts to register component ${e}.`),!1;si.set(e,n);for(const t of er.values())ea(t,n);for(const t of jh.values())ea(t,n);return!0}function Uh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Bh(n){return n==null?!1:n.settings!==void 0}/**
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
 */const qh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zt=new rl("app","Firebase",qh);/**
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
 */class zh{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new cs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
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
 */const $h=Mh;function ll(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:ni,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw zt.create("bad-app-name",{appName:String(r)});if(t||(t=sl()),!t)throw zt.create("no-options");const o=er.get(r);if(o){if(Zs(t,o.options)&&Zs(s,o.config))return o;throw zt.create("duplicate-app",{appName:r})}const a=new Hu(r);for(const h of si.values())a.addComponent(h);const c=new zh(t,s,a);return er.set(r,c),c}function Gh(n=ni){const e=er.get(n);if(!e&&n===ni&&sl())return ll();if(!e)throw zt.create("no-app",{appName:n});return e}function bn(n,e,t){let s=Fh[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nt.warn(a.join(" "));return}tr(new cs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Wh="firebase-heartbeat-database",Hh=1,us="firebase-heartbeat-store";let Hr=null;function cl(){return Hr||(Hr=oh(Wh,Hh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(us)}catch(t){console.warn(t)}}}}).catch(n=>{throw zt.create("idb-open",{originalErrorMessage:n.message})})),Hr}async function Kh(n){try{const t=(await cl()).transaction(us),s=await t.objectStore(us).get(ul(n));return await t.done,s}catch(e){if(e instanceof On)Nt.warn(e.message);else{const t=zt.create("idb-get",{originalErrorMessage:e?.message});Nt.warn(t.message)}}}async function ta(n,e){try{const s=(await cl()).transaction(us,"readwrite");await s.objectStore(us).put(e,ul(n)),await s.done}catch(t){if(t instanceof On)Nt.warn(t.message);else{const s=zt.create("idb-set",{originalErrorMessage:t?.message});Nt.warn(s.message)}}}function ul(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Qh=1024,Yh=30;class Jh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Zh(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=na();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>Yh){const r=ed(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Nt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=na(),{heartbeatsToSend:t,unsentEntries:s}=Xh(this._heartbeatsCache.heartbeats),r=Xs(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return Nt.warn(e),""}}}function na(){return new Date().toISOString().substring(0,10)}function Xh(n,e=Qh){const t=[];let s=n.slice();for(const r of n){const o=t.find(a=>a.agent===r.agent);if(o){if(o.dates.push(r.date),sa(t)>e){o.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),sa(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Zh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ju()?Uu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Kh(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ta(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ta(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function sa(n){return Xs(JSON.stringify({version:2,heartbeats:n})).length}function ed(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function td(n){tr(new cs("platform-logger",e=>new ch(e),"PRIVATE")),tr(new cs("heartbeat",e=>new Jh(e),"PRIVATE")),bn(ti,Zo,n),bn(ti,Zo,"esm2020"),bn("fire-js","")}td("");var ra=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $t,hl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,m){function p(){}p.prototype=m.prototype,E.D=m.prototype,E.prototype=new p,E.prototype.constructor=E,E.C=function(g,T,w){for(var _=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)_[Ke-2]=arguments[Ke];return m.prototype[T].apply(g,_)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(E,m,p){p||(p=0);var g=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)g[T]=m.charCodeAt(p++)|m.charCodeAt(p++)<<8|m.charCodeAt(p++)<<16|m.charCodeAt(p++)<<24;else for(T=0;16>T;++T)g[T]=m[p++]|m[p++]<<8|m[p++]<<16|m[p++]<<24;m=E.g[0],p=E.g[1],T=E.g[2];var w=E.g[3],_=m+(w^p&(T^w))+g[0]+3614090360&4294967295;m=p+(_<<7&4294967295|_>>>25),_=w+(T^m&(p^T))+g[1]+3905402710&4294967295,w=m+(_<<12&4294967295|_>>>20),_=T+(p^w&(m^p))+g[2]+606105819&4294967295,T=w+(_<<17&4294967295|_>>>15),_=p+(m^T&(w^m))+g[3]+3250441966&4294967295,p=T+(_<<22&4294967295|_>>>10),_=m+(w^p&(T^w))+g[4]+4118548399&4294967295,m=p+(_<<7&4294967295|_>>>25),_=w+(T^m&(p^T))+g[5]+1200080426&4294967295,w=m+(_<<12&4294967295|_>>>20),_=T+(p^w&(m^p))+g[6]+2821735955&4294967295,T=w+(_<<17&4294967295|_>>>15),_=p+(m^T&(w^m))+g[7]+4249261313&4294967295,p=T+(_<<22&4294967295|_>>>10),_=m+(w^p&(T^w))+g[8]+1770035416&4294967295,m=p+(_<<7&4294967295|_>>>25),_=w+(T^m&(p^T))+g[9]+2336552879&4294967295,w=m+(_<<12&4294967295|_>>>20),_=T+(p^w&(m^p))+g[10]+4294925233&4294967295,T=w+(_<<17&4294967295|_>>>15),_=p+(m^T&(w^m))+g[11]+2304563134&4294967295,p=T+(_<<22&4294967295|_>>>10),_=m+(w^p&(T^w))+g[12]+1804603682&4294967295,m=p+(_<<7&4294967295|_>>>25),_=w+(T^m&(p^T))+g[13]+4254626195&4294967295,w=m+(_<<12&4294967295|_>>>20),_=T+(p^w&(m^p))+g[14]+2792965006&4294967295,T=w+(_<<17&4294967295|_>>>15),_=p+(m^T&(w^m))+g[15]+1236535329&4294967295,p=T+(_<<22&4294967295|_>>>10),_=m+(T^w&(p^T))+g[1]+4129170786&4294967295,m=p+(_<<5&4294967295|_>>>27),_=w+(p^T&(m^p))+g[6]+3225465664&4294967295,w=m+(_<<9&4294967295|_>>>23),_=T+(m^p&(w^m))+g[11]+643717713&4294967295,T=w+(_<<14&4294967295|_>>>18),_=p+(w^m&(T^w))+g[0]+3921069994&4294967295,p=T+(_<<20&4294967295|_>>>12),_=m+(T^w&(p^T))+g[5]+3593408605&4294967295,m=p+(_<<5&4294967295|_>>>27),_=w+(p^T&(m^p))+g[10]+38016083&4294967295,w=m+(_<<9&4294967295|_>>>23),_=T+(m^p&(w^m))+g[15]+3634488961&4294967295,T=w+(_<<14&4294967295|_>>>18),_=p+(w^m&(T^w))+g[4]+3889429448&4294967295,p=T+(_<<20&4294967295|_>>>12),_=m+(T^w&(p^T))+g[9]+568446438&4294967295,m=p+(_<<5&4294967295|_>>>27),_=w+(p^T&(m^p))+g[14]+3275163606&4294967295,w=m+(_<<9&4294967295|_>>>23),_=T+(m^p&(w^m))+g[3]+4107603335&4294967295,T=w+(_<<14&4294967295|_>>>18),_=p+(w^m&(T^w))+g[8]+1163531501&4294967295,p=T+(_<<20&4294967295|_>>>12),_=m+(T^w&(p^T))+g[13]+2850285829&4294967295,m=p+(_<<5&4294967295|_>>>27),_=w+(p^T&(m^p))+g[2]+4243563512&4294967295,w=m+(_<<9&4294967295|_>>>23),_=T+(m^p&(w^m))+g[7]+1735328473&4294967295,T=w+(_<<14&4294967295|_>>>18),_=p+(w^m&(T^w))+g[12]+2368359562&4294967295,p=T+(_<<20&4294967295|_>>>12),_=m+(p^T^w)+g[5]+4294588738&4294967295,m=p+(_<<4&4294967295|_>>>28),_=w+(m^p^T)+g[8]+2272392833&4294967295,w=m+(_<<11&4294967295|_>>>21),_=T+(w^m^p)+g[11]+1839030562&4294967295,T=w+(_<<16&4294967295|_>>>16),_=p+(T^w^m)+g[14]+4259657740&4294967295,p=T+(_<<23&4294967295|_>>>9),_=m+(p^T^w)+g[1]+2763975236&4294967295,m=p+(_<<4&4294967295|_>>>28),_=w+(m^p^T)+g[4]+1272893353&4294967295,w=m+(_<<11&4294967295|_>>>21),_=T+(w^m^p)+g[7]+4139469664&4294967295,T=w+(_<<16&4294967295|_>>>16),_=p+(T^w^m)+g[10]+3200236656&4294967295,p=T+(_<<23&4294967295|_>>>9),_=m+(p^T^w)+g[13]+681279174&4294967295,m=p+(_<<4&4294967295|_>>>28),_=w+(m^p^T)+g[0]+3936430074&4294967295,w=m+(_<<11&4294967295|_>>>21),_=T+(w^m^p)+g[3]+3572445317&4294967295,T=w+(_<<16&4294967295|_>>>16),_=p+(T^w^m)+g[6]+76029189&4294967295,p=T+(_<<23&4294967295|_>>>9),_=m+(p^T^w)+g[9]+3654602809&4294967295,m=p+(_<<4&4294967295|_>>>28),_=w+(m^p^T)+g[12]+3873151461&4294967295,w=m+(_<<11&4294967295|_>>>21),_=T+(w^m^p)+g[15]+530742520&4294967295,T=w+(_<<16&4294967295|_>>>16),_=p+(T^w^m)+g[2]+3299628645&4294967295,p=T+(_<<23&4294967295|_>>>9),_=m+(T^(p|~w))+g[0]+4096336452&4294967295,m=p+(_<<6&4294967295|_>>>26),_=w+(p^(m|~T))+g[7]+1126891415&4294967295,w=m+(_<<10&4294967295|_>>>22),_=T+(m^(w|~p))+g[14]+2878612391&4294967295,T=w+(_<<15&4294967295|_>>>17),_=p+(w^(T|~m))+g[5]+4237533241&4294967295,p=T+(_<<21&4294967295|_>>>11),_=m+(T^(p|~w))+g[12]+1700485571&4294967295,m=p+(_<<6&4294967295|_>>>26),_=w+(p^(m|~T))+g[3]+2399980690&4294967295,w=m+(_<<10&4294967295|_>>>22),_=T+(m^(w|~p))+g[10]+4293915773&4294967295,T=w+(_<<15&4294967295|_>>>17),_=p+(w^(T|~m))+g[1]+2240044497&4294967295,p=T+(_<<21&4294967295|_>>>11),_=m+(T^(p|~w))+g[8]+1873313359&4294967295,m=p+(_<<6&4294967295|_>>>26),_=w+(p^(m|~T))+g[15]+4264355552&4294967295,w=m+(_<<10&4294967295|_>>>22),_=T+(m^(w|~p))+g[6]+2734768916&4294967295,T=w+(_<<15&4294967295|_>>>17),_=p+(w^(T|~m))+g[13]+1309151649&4294967295,p=T+(_<<21&4294967295|_>>>11),_=m+(T^(p|~w))+g[4]+4149444226&4294967295,m=p+(_<<6&4294967295|_>>>26),_=w+(p^(m|~T))+g[11]+3174756917&4294967295,w=m+(_<<10&4294967295|_>>>22),_=T+(m^(w|~p))+g[2]+718787259&4294967295,T=w+(_<<15&4294967295|_>>>17),_=p+(w^(T|~m))+g[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+w&4294967295}s.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var p=m-this.blockSize,g=this.B,T=this.h,w=0;w<m;){if(T==0)for(;w<=p;)r(this,E,w),w+=this.blockSize;if(typeof E=="string"){for(;w<m;)if(g[T++]=E.charCodeAt(w++),T==this.blockSize){r(this,g),T=0;break}}else for(;w<m;)if(g[T++]=E[w++],T==this.blockSize){r(this,g),T=0;break}}this.h=T,this.o+=m},s.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var p=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=p&255,p/=256;for(this.u(E),E=Array(16),m=p=0;4>m;++m)for(var g=0;32>g;g+=8)E[p++]=this.g[m]>>>g&255;return E};function o(E,m){var p=c;return Object.prototype.hasOwnProperty.call(p,E)?p[E]:p[E]=m(E)}function a(E,m){this.h=m;for(var p=[],g=!0,T=E.length-1;0<=T;T--){var w=E[T]|0;g&&w==m||(p[T]=w,g=!1)}this.g=p}var c={};function h(E){return-128<=E&&128>E?o(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return I;if(0>E)return P(d(-E));for(var m=[],p=1,g=0;E>=p;g++)m[g]=E/p|0,p*=4294967296;return new a(m,0)}function y(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return P(y(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=d(Math.pow(m,8)),g=I,T=0;T<E.length;T+=8){var w=Math.min(8,E.length-T),_=parseInt(E.substring(T,T+w),m);8>w?(w=d(Math.pow(m,w)),g=g.j(w).add(d(_))):(g=g.j(p),g=g.add(d(_)))}return g}var I=h(0),A=h(1),b=h(16777216);n=a.prototype,n.m=function(){if(k(this))return-P(this).m();for(var E=0,m=1,p=0;p<this.g.length;p++){var g=this.i(p);E+=(0<=g?g:4294967296+g)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(x(this))return"0";if(k(this))return"-"+P(this).toString(E);for(var m=d(Math.pow(E,6)),p=this,g="";;){var T=ie(p,m).g;p=M(p,T.j(m));var w=((0<p.g.length?p.g[0]:p.h)>>>0).toString(E);if(p=T,x(p))return w+g;for(;6>w.length;)w="0"+w;g=w+g}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function x(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function k(E){return E.h==-1}n.l=function(E){return E=M(this,E),k(E)?-1:x(E)?0:1};function P(E){for(var m=E.g.length,p=[],g=0;g<m;g++)p[g]=~E.g[g];return new a(p,~E.h).add(A)}n.abs=function(){return k(this)?P(this):this},n.add=function(E){for(var m=Math.max(this.g.length,E.g.length),p=[],g=0,T=0;T<=m;T++){var w=g+(this.i(T)&65535)+(E.i(T)&65535),_=(w>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);g=_>>>16,w&=65535,_&=65535,p[T]=_<<16|w}return new a(p,p[p.length-1]&-2147483648?-1:0)};function M(E,m){return E.add(P(m))}n.j=function(E){if(x(this)||x(E))return I;if(k(this))return k(E)?P(this).j(P(E)):P(P(this).j(E));if(k(E))return P(this.j(P(E)));if(0>this.l(b)&&0>E.l(b))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,p=[],g=0;g<2*m;g++)p[g]=0;for(g=0;g<this.g.length;g++)for(var T=0;T<E.g.length;T++){var w=this.i(g)>>>16,_=this.i(g)&65535,Ke=E.i(T)>>>16,Pt=E.i(T)&65535;p[2*g+2*T]+=_*Pt,U(p,2*g+2*T),p[2*g+2*T+1]+=w*Pt,U(p,2*g+2*T+1),p[2*g+2*T+1]+=_*Ke,U(p,2*g+2*T+1),p[2*g+2*T+2]+=w*Ke,U(p,2*g+2*T+2)}for(g=0;g<m;g++)p[g]=p[2*g+1]<<16|p[2*g];for(g=m;g<2*m;g++)p[g]=0;return new a(p,0)};function U(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function z(E,m){this.g=E,this.h=m}function ie(E,m){if(x(m))throw Error("division by zero");if(x(E))return new z(I,I);if(k(E))return m=ie(P(E),m),new z(P(m.g),P(m.h));if(k(m))return m=ie(E,P(m)),new z(P(m.g),m.h);if(30<E.g.length){if(k(E)||k(m))throw Error("slowDivide_ only works with positive integers.");for(var p=A,g=m;0>=g.l(E);)p=pe(p),g=pe(g);var T=ee(p,1),w=ee(g,1);for(g=ee(g,2),p=ee(p,2);!x(g);){var _=w.add(g);0>=_.l(E)&&(T=T.add(p),w=_),g=ee(g,1),p=ee(p,1)}return m=M(E,T.j(m)),new z(T,m)}for(T=I;0<=E.l(m);){for(p=Math.max(1,Math.floor(E.m()/m.m())),g=Math.ceil(Math.log(p)/Math.LN2),g=48>=g?1:Math.pow(2,g-48),w=d(p),_=w.j(m);k(_)||0<_.l(E);)p-=g,w=d(p),_=w.j(m);x(w)&&(w=A),T=T.add(w),E=M(E,_)}return new z(T,E)}n.A=function(E){return ie(this,E).h},n.and=function(E){for(var m=Math.max(this.g.length,E.g.length),p=[],g=0;g<m;g++)p[g]=this.i(g)&E.i(g);return new a(p,this.h&E.h)},n.or=function(E){for(var m=Math.max(this.g.length,E.g.length),p=[],g=0;g<m;g++)p[g]=this.i(g)|E.i(g);return new a(p,this.h|E.h)},n.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),p=[],g=0;g<m;g++)p[g]=this.i(g)^E.i(g);return new a(p,this.h^E.h)};function pe(E){for(var m=E.g.length+1,p=[],g=0;g<m;g++)p[g]=E.i(g)<<1|E.i(g-1)>>>31;return new a(p,E.h)}function ee(E,m){var p=m>>5;m%=32;for(var g=E.g.length-p,T=[],w=0;w<g;w++)T[w]=0<m?E.i(w+p)>>>m|E.i(w+p+1)<<32-m:E.i(w+p);return new a(T,E.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,hl=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=y,$t=a}).apply(typeof ra<"u"?ra:typeof self<"u"?self:typeof window<"u"?window:{});var js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dl,Xn,fl,$s,ri,ml,gl,pl;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,u){return i==Array.prototype||i==Object.prototype||(i[l]=u.value),i};function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof js=="object"&&js];for(var l=0;l<i.length;++l){var u=i[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var s=t(this);function r(i,l){if(l)e:{var u=s;i=i.split(".");for(var f=0;f<i.length-1;f++){var S=i[f];if(!(S in u))break e;u=u[S]}i=i[i.length-1],f=u[i],l=l(f),l!=f&&l!=null&&e(u,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var u=0,f=!1,S={next:function(){if(!f&&u<i.length){var C=u++;return{value:l(C,i[C]),done:!1}}return f=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}r("Array.prototype.values",function(i){return i||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function d(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function y(i,l,u){return i.call.apply(i.bind,arguments)}function I(i,l,u){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,f),i.apply(l,S)}}return function(){return i.apply(l,arguments)}}function A(i,l,u){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:I,A.apply(null,arguments)}function b(i,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function x(i,l){function u(){}u.prototype=l.prototype,i.aa=l.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(f,S,C){for(var B=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)B[Ie-2]=arguments[Ie];return l.prototype[S].apply(f,B)}}function k(i){const l=i.length;if(0<l){const u=Array(l);for(let f=0;f<l;f++)u[f]=i[f];return u}return[]}function P(i,l){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const S=i.length||0,C=f.length||0;i.length=S+C;for(let B=0;B<C;B++)i[S+B]=f[B]}else i.push(f)}}class M{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function U(i){return/^[\s\xa0]*$/.test(i)}function z(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function ie(i){return ie[" "](i),i}ie[" "]=function(){};var pe=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function ee(i,l,u){for(const f in i)l.call(u,i[f],f,i)}function E(i,l){for(const u in i)l.call(void 0,i[u],u,i)}function m(i){const l={};for(const u in i)l[u]=i[u];return l}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function g(i,l){let u,f;for(let S=1;S<arguments.length;S++){f=arguments[S];for(u in f)i[u]=f[u];for(let C=0;C<p.length;C++)u=p[C],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function T(i){var l=1;i=i.split(":");const u=[];for(;0<l&&i.length;)u.push(i.shift()),l--;return i.length&&u.push(i.join(":")),u}function w(i){c.setTimeout(()=>{throw i},0)}function _(){var i=Ee;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class Ke{constructor(){this.h=this.g=null}add(l,u){const f=Pt.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var Pt=new M(()=>new ke,i=>i.reset());class ke{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Oe,ot=!1,Ee=new Ke,at=()=>{const i=c.Promise.resolve(void 0);Oe=()=>{i.then(ht)}};var ht=()=>{for(var i;i=_();){try{i.h.call(i.g)}catch(u){w(u)}var l=Pt;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}ot=!1};function nt(){this.s=this.s,this.C=this.C}nt.prototype.s=!1,nt.prototype.ma=function(){this.s||(this.s=!0,this.N())},nt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var pn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return i}();function lt(i,l){if(Te.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(pe){e:{try{ie(l.nodeName);var S=!0;break e}catch{}S=!1}S||(l=null)}}else u=="mouseover"?l=i.fromElement:u=="mouseout"&&(l=i.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:_t[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&lt.aa.h.call(this)}}x(lt,Te);var _t={2:"touch",3:"pen",4:"mouse"};lt.prototype.h=function(){lt.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var dt="closure_listenable_"+(1e6*Math.random()|0),Bn=0;function K(i,l,u,f,S){this.listener=i,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=S,this.key=++Bn,this.da=this.fa=!1}function oe(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function re(i){this.src=i,this.g={},this.h=0}re.prototype.add=function(i,l,u,f,S){var C=i.toString();i=this.g[C],i||(i=this.g[C]=[],this.h++);var B=Me(i,l,f,S);return-1<B?(l=i[B],u||(l.fa=!1)):(l=new K(l,this.src,C,!!f,S),l.fa=u,i.push(l)),l};function ae(i,l){var u=l.type;if(u in i.g){var f=i.g[u],S=Array.prototype.indexOf.call(f,l,void 0),C;(C=0<=S)&&Array.prototype.splice.call(f,S,1),C&&(oe(l),i.g[u].length==0&&(delete i.g[u],i.h--))}}function Me(i,l,u,f){for(var S=0;S<i.length;++S){var C=i[S];if(!C.da&&C.listener==l&&C.capture==!!u&&C.ha==f)return S}return-1}var me="closure_lm_"+(1e6*Math.random()|0),Pe={};function Ue(i,l,u,f,S){if(Array.isArray(l)){for(var C=0;C<l.length;C++)Ue(i,l[C],u,f,S);return null}return u=As(u),i&&i[dt]?i.K(l,u,d(f)?!!f.capture:!1,S):Vt(i,l,u,!1,f,S)}function Vt(i,l,u,f,S,C){if(!l)throw Error("Invalid event type");var B=d(S)?!!S.capture:!!S,Ie=Mt(i);if(Ie||(i[me]=Ie=new re(i)),u=Ie.add(l,u,f,B,C),u.proxy)return u;if(f=st(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)pn||(S=B),S===void 0&&(S=!1),i.addEventListener(l.toString(),f,S);else if(i.attachEvent)i.attachEvent(Ot(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function st(){function i(u){return l.call(i.src,i.listener,u)}const l=yn;return i}function ft(i,l,u,f,S){if(Array.isArray(l))for(var C=0;C<l.length;C++)ft(i,l[C],u,f,S);else f=d(f)?!!f.capture:!!f,u=As(u),i&&i[dt]?(i=i.i,l=String(l).toString(),l in i.g&&(C=i.g[l],u=Me(C,u,f,S),-1<u&&(oe(C[u]),Array.prototype.splice.call(C,u,1),C.length==0&&(delete i.g[l],i.h--)))):i&&(i=Mt(i))&&(l=i.g[l.toString()],i=-1,l&&(i=Me(l,u,f,S)),(u=-1<i?l[i]:null)&&pt(u))}function pt(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[dt])ae(l.i,i);else{var u=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(u,f,i.capture):l.detachEvent?l.detachEvent(Ot(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=Mt(l))?(ae(u,i),u.h==0&&(u.src=null,l[me]=null)):oe(i)}}}function Ot(i){return i in Pe?Pe[i]:Pe[i]="on"+i}function yn(i,l){if(i.da)i=!0;else{l=new lt(l,this);var u=i.listener,f=i.ha||i.src;i.fa&&pt(i),i=u.call(f,l)}return i}function Mt(i){return i=i[me],i instanceof re?i:null}var _n="__closure_events_fn_"+(1e9*Math.random()>>>0);function As(i){return typeof i=="function"?i:(i[_n]||(i[_n]=function(l){return i.handleEvent(l)}),i[_n])}function Be(){nt.call(this),this.i=new re(this),this.M=this,this.F=null}x(Be,nt),Be.prototype[dt]=!0,Be.prototype.removeEventListener=function(i,l,u,f){ft(this,i,l,u,f)};function ze(i,l){var u,f=i.F;if(f)for(u=[];f;f=f.F)u.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new Te(l,i);else if(l instanceof Te)l.target=l.target||i;else{var S=l;l=new Te(f,i),g(l,S)}if(S=!0,u)for(var C=u.length-1;0<=C;C--){var B=l.g=u[C];S=nn(B,f,!0,l)&&S}if(B=l.g=i,S=nn(B,f,!0,l)&&S,S=nn(B,f,!1,l)&&S,u)for(C=0;C<u.length;C++)B=l.g=u[C],S=nn(B,f,!1,l)&&S}Be.prototype.N=function(){if(Be.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var u=i.g[l],f=0;f<u.length;f++)oe(u[f]);delete i.g[l],i.h--}}this.F=null},Be.prototype.K=function(i,l,u,f){return this.i.add(String(i),l,!1,u,f)},Be.prototype.L=function(i,l,u,f){return this.i.add(String(i),l,!0,u,f)};function nn(i,l,u,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var S=!0,C=0;C<l.length;++C){var B=l[C];if(B&&!B.da&&B.capture==u){var Ie=B.listener,$e=B.ha||B.src;B.fa&&ae(i.i,B),S=Ie.call($e,f)!==!1&&S}}return S&&!f.defaultPrevented}function vs(i,l,u){if(typeof i=="function")u&&(i=A(i,u));else if(i&&typeof i.handleEvent=="function")i=A(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(i,l||0)}function ws(i){i.g=vs(()=>{i.g=null,i.i&&(i.i=!1,ws(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class xr extends nt{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:ws(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function v(i){nt.call(this),this.h=i,this.g={}}x(v,nt);var V=[];function F(i){ee(i.g,function(l,u){this.g.hasOwnProperty(u)&&pt(l)},i),i.g={}}v.prototype.N=function(){v.aa.N.call(this),F(this)},v.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var O=c.JSON.stringify,Y=c.JSON.parse,q=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function R(){}R.prototype.h=null;function j(i){return i.h||(i.h=i.i())}function se(){}var xe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ye(){Te.call(this,"d")}x(ye,Te);function _e(){Te.call(this,"c")}x(_e,Te);var W={},J=null;function sn(){return J=J||new Be}W.La="serverreachability";function et(i){Te.call(this,W.La,i)}x(et,Te);function Re(i){const l=sn();ze(l,new et(l))}W.STAT_EVENT="statevent";function so(i,l){Te.call(this,W.STAT_EVENT,i),this.stat=l}x(so,Te);function tt(i){const l=sn();ze(l,new so(l,i))}W.Ma="timingevent";function ro(i,l){Te.call(this,W.Ma,i),this.size=l}x(ro,Te);function qn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},l)}function zn(){this.g=!0}zn.prototype.xa=function(){this.g=!1};function Uc(i,l,u,f,S,C){i.info(function(){if(i.g)if(C)for(var B="",Ie=C.split("&"),$e=0;$e<Ie.length;$e++){var fe=Ie[$e].split("=");if(1<fe.length){var Qe=fe[0];fe=fe[1];var Ye=Qe.split("_");B=2<=Ye.length&&Ye[1]=="type"?B+(Qe+"="+fe+"&"):B+(Qe+"=redacted&")}}else B=null;else B=C;return"XMLHTTP REQ ("+f+") [attempt "+S+"]: "+l+`
`+u+`
`+B})}function Bc(i,l,u,f,S,C,B){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+S+"]: "+l+`
`+u+`
`+C+" "+B})}function In(i,l,u,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+zc(i,u)+(f?" "+f:"")})}function qc(i,l){i.info(function(){return"TIMEOUT: "+l})}zn.prototype.info=function(){};function zc(i,l){if(!i.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var f=u[i];if(!(2>f.length)){var S=f[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var B=1;B<S.length;B++)S[B]=""}}}}return O(u)}catch{return l}}var Rs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},io={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dr;function Ss(){}x(Ss,R),Ss.prototype.g=function(){return new XMLHttpRequest},Ss.prototype.i=function(){return{}},Dr=new Ss;function Ft(i,l,u,f){this.j=i,this.i=l,this.l=u,this.R=f||1,this.U=new v(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new oo}function oo(){this.i=null,this.g="",this.h=!1}var ao={},Nr={};function Lr(i,l,u){i.L=1,i.v=Vs(xt(l)),i.m=u,i.P=!0,lo(i,null)}function lo(i,l){i.F=Date.now(),bs(i),i.A=xt(i.v);var u=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),vo(u.i,"t",f),i.C=0,u=i.j.J,i.h=new oo,i.g=Bo(i.j,u?l:null,!i.m),0<i.O&&(i.M=new xr(A(i.Y,i,i.g),i.O)),l=i.U,u=i.g,f=i.ca;var S="readystatechange";Array.isArray(S)||(S&&(V[0]=S.toString()),S=V);for(var C=0;C<S.length;C++){var B=Ue(u,S[C],f||l.handleEvent,!1,l.h||l);if(!B)break;l.g[B.key]=B}l=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),Re(),Uc(i.i,i.u,i.A,i.l,i.R,i.m)}Ft.prototype.ca=function(i){i=i.target;const l=this.M;l&&Dt(i)==3?l.j():this.Y(i)},Ft.prototype.Y=function(i){try{if(i==this.g)e:{const Ye=Dt(this.g);var l=this.g.Ba();const An=this.g.Z();if(!(3>Ye)&&(Ye!=3||this.g&&(this.h.h||this.g.oa()||Vo(this.g)))){this.J||Ye!=4||l==7||(l==8||0>=An?Re(3):Re(2)),kr(this);var u=this.g.Z();this.X=u;t:if(co(this)){var f=Vo(this.g);i="";var S=f.length,C=Dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rn(this),$n(this);var B="";break t}this.h.i=new c.TextDecoder}for(l=0;l<S;l++)this.h.h=!0,i+=this.h.i.decode(f[l],{stream:!(C&&l==S-1)});f.length=0,this.h.g+=i,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=u==200,Bc(this.i,this.u,this.A,this.l,this.R,Ye,u),this.o){if(this.T&&!this.K){t:{if(this.g){var Ie,$e=this.g;if((Ie=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(Ie)){var fe=Ie;break t}}fe=null}if(u=fe)In(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Or(this,u);else{this.o=!1,this.s=3,tt(12),rn(this),$n(this);break e}}if(this.P){u=!0;let yt;for(;!this.J&&this.C<B.length;)if(yt=$c(this,B),yt==Nr){Ye==4&&(this.s=4,tt(14),u=!1),In(this.i,this.l,null,"[Incomplete Response]");break}else if(yt==ao){this.s=4,tt(15),In(this.i,this.l,B,"[Invalid Chunk]"),u=!1;break}else In(this.i,this.l,yt,null),Or(this,yt);if(co(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ye!=4||B.length!=0||this.h.h||(this.s=1,tt(16),u=!1),this.o=this.o&&u,!u)In(this.i,this.l,B,"[Invalid Chunked Response]"),rn(this),$n(this);else if(0<B.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),qr(Qe),Qe.M=!0,tt(11))}}else In(this.i,this.l,B,null),Or(this,B);Ye==4&&rn(this),this.o&&!this.J&&(Ye==4?Mo(this.j,this):(this.o=!1,bs(this)))}else au(this.g),u==400&&0<B.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),rn(this),$n(this)}}}catch{}finally{}};function co(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function $c(i,l){var u=i.C,f=l.indexOf(`
`,u);return f==-1?Nr:(u=Number(l.substring(u,f)),isNaN(u)?ao:(f+=1,f+u>l.length?Nr:(l=l.slice(f,f+u),i.C=f+u,l)))}Ft.prototype.cancel=function(){this.J=!0,rn(this)};function bs(i){i.S=Date.now()+i.I,uo(i,i.I)}function uo(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=qn(A(i.ba,i),l)}function kr(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Ft.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(qc(this.i,this.A),this.L!=2&&(Re(),tt(17)),rn(this),this.s=2,$n(this)):uo(this,this.S-i)};function $n(i){i.j.G==0||i.J||Mo(i.j,i)}function rn(i){kr(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,F(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function Or(i,l){try{var u=i.j;if(u.G!=0&&(u.g==i||Mr(u.h,i))){if(!i.K&&Mr(u.h,i)&&u.G==3){try{var f=u.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var S=f;if(S[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)Os(u),Ls(u);else break e;Br(u),tt(18)}}else u.za=S[1],0<u.za-u.T&&37500>S[2]&&u.F&&u.v==0&&!u.C&&(u.C=qn(A(u.Za,u),6e3));if(1>=mo(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else an(u,11)}else if((i.K||u.g==i)&&Os(u),!U(l))for(S=u.Da.g.parse(l),l=0;l<S.length;l++){let fe=S[l];if(u.T=fe[0],fe=fe[1],u.G==2)if(fe[0]=="c"){u.K=fe[1],u.ia=fe[2];const Qe=fe[3];Qe!=null&&(u.la=Qe,u.j.info("VER="+u.la));const Ye=fe[4];Ye!=null&&(u.Aa=Ye,u.j.info("SVER="+u.Aa));const An=fe[5];An!=null&&typeof An=="number"&&0<An&&(f=1.5*An,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const yt=i.g;if(yt){const Fs=yt.g?yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fs){var C=f.h;C.g||Fs.indexOf("spdy")==-1&&Fs.indexOf("quic")==-1&&Fs.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Fr(C,C.h),C.h=null))}if(f.D){const zr=yt.g?yt.g.getResponseHeader("X-HTTP-Session-Id"):null;zr&&(f.ya=zr,Ae(f.I,f.D,zr))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var B=i;if(f.qa=Uo(f,f.J?f.ia:null,f.W),B.K){go(f.h,B);var Ie=B,$e=f.L;$e&&(Ie.I=$e),Ie.B&&(kr(Ie),bs(Ie)),f.g=B}else ko(f);0<u.i.length&&ks(u)}else fe[0]!="stop"&&fe[0]!="close"||an(u,7);else u.G==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?an(u,7):Ur(u):fe[0]!="noop"&&u.l&&u.l.ta(fe),u.v=0)}}Re(4)}catch{}}var Gc=class{constructor(i,l){this.g=i,this.map=l}};function ho(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function mo(i){return i.h?1:i.g?i.g.size:0}function Mr(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function Fr(i,l){i.g?i.g.add(l):i.h=l}function go(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}ho.prototype.cancel=function(){if(this.i=po(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function po(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const u of i.g.values())l=l.concat(u.D);return l}return k(i.i)}function Wc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],u=i.length,f=0;f<u;f++)l.push(i[f]);return l}l=[],u=0;for(f in i)l[u++]=i[f];return l}function Hc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var u=0;u<i;u++)l.push(u);return l}l=[],u=0;for(const f in i)l[u++]=f;return l}}}function yo(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var u=Hc(i),f=Wc(i),S=f.length,C=0;C<S;C++)l.call(void 0,f[C],u&&u[C],i)}var _o=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kc(i,l){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var f=i[u].indexOf("="),S=null;if(0<=f){var C=i[u].substring(0,f);S=i[u].substring(f+1)}else C=i[u];l(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function on(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof on){this.h=i.h,Cs(this,i.j),this.o=i.o,this.g=i.g,Ps(this,i.s),this.l=i.l;var l=i.i,u=new Hn;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),Io(this,u),this.m=i.m}else i&&(l=String(i).match(_o))?(this.h=!1,Cs(this,l[1]||"",!0),this.o=Gn(l[2]||""),this.g=Gn(l[3]||"",!0),Ps(this,l[4]),this.l=Gn(l[5]||"",!0),Io(this,l[6]||"",!0),this.m=Gn(l[7]||"")):(this.h=!1,this.i=new Hn(null,this.h))}on.prototype.toString=function(){var i=[],l=this.j;l&&i.push(Wn(l,Eo,!0),":");var u=this.g;return(u||l=="file")&&(i.push("//"),(l=this.o)&&i.push(Wn(l,Eo,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(Wn(u,u.charAt(0)=="/"?Jc:Yc,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",Wn(u,Zc)),i.join("")};function xt(i){return new on(i)}function Cs(i,l,u){i.j=u?Gn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function Ps(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function Io(i,l,u){l instanceof Hn?(i.i=l,eu(i.i,i.h)):(u||(l=Wn(l,Xc)),i.i=new Hn(l,i.h))}function Ae(i,l,u){i.i.set(l,u)}function Vs(i){return Ae(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Gn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Wn(i,l,u){return typeof i=="string"?(i=encodeURI(i).replace(l,Qc),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Qc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Eo=/[#\/\?@]/g,Yc=/[#\?:]/g,Jc=/[#\?]/g,Xc=/[#\?@]/g,Zc=/#/g;function Hn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function jt(i){i.g||(i.g=new Map,i.h=0,i.i&&Kc(i.i,function(l,u){i.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}n=Hn.prototype,n.add=function(i,l){jt(this),this.i=null,i=En(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(l),this.h+=1,this};function To(i,l){jt(i),l=En(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Ao(i,l){return jt(i),l=En(i,l),i.g.has(l)}n.forEach=function(i,l){jt(this),this.g.forEach(function(u,f){u.forEach(function(S){i.call(l,S,f,this)},this)},this)},n.na=function(){jt(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let f=0;f<l.length;f++){const S=i[f];for(let C=0;C<S.length;C++)u.push(l[f])}return u},n.V=function(i){jt(this);let l=[];if(typeof i=="string")Ao(this,i)&&(l=l.concat(this.g.get(En(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)l=l.concat(i[u])}return l},n.set=function(i,l){return jt(this),this.i=null,i=En(this,i),Ao(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function vo(i,l,u){To(i,l),0<u.length&&(i.i=null,i.g.set(En(i,l),k(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var f=l[u];const C=encodeURIComponent(String(f)),B=this.V(f);for(f=0;f<B.length;f++){var S=C;B[f]!==""&&(S+="="+encodeURIComponent(String(B[f]))),i.push(S)}}return this.i=i.join("&")};function En(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function eu(i,l){l&&!i.j&&(jt(i),i.i=null,i.g.forEach(function(u,f){var S=f.toLowerCase();f!=S&&(To(this,f),vo(this,S,u))},i)),i.j=l}function tu(i,l){const u=new zn;if(c.Image){const f=new Image;f.onload=b(Ut,u,"TestLoadImage: loaded",!0,l,f),f.onerror=b(Ut,u,"TestLoadImage: error",!1,l,f),f.onabort=b(Ut,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=b(Ut,u,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function nu(i,l){const u=new zn,f=new AbortController,S=setTimeout(()=>{f.abort(),Ut(u,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(C=>{clearTimeout(S),C.ok?Ut(u,"TestPingServer: ok",!0,l):Ut(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(S),Ut(u,"TestPingServer: error",!1,l)})}function Ut(i,l,u,f,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),f(u)}catch{}}function su(){this.g=new q}function ru(i,l,u){const f=u||"";try{yo(i,function(S,C){let B=S;d(S)&&(B=O(S)),l.push(f+C+"="+encodeURIComponent(B))})}catch(S){throw l.push(f+"type="+encodeURIComponent("_badmap")),S}}function xs(i){this.l=i.Ub||null,this.j=i.eb||!1}x(xs,R),xs.prototype.g=function(){return new Ds(this.l,this.j)},xs.prototype.i=function(i){return function(){return i}}({});function Ds(i,l){Be.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Ds,Be),n=Ds.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,Qn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Kn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Qn(this)),this.g&&(this.readyState=3,Qn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function wo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?Kn(this):Qn(this),this.readyState==3&&wo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Kn(this))},n.Qa=function(i){this.g&&(this.response=i,Kn(this))},n.ga=function(){this.g&&Kn(this)};function Kn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Qn(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=l.next();return i.join(`\r
`)};function Qn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Ds.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Ro(i){let l="";return ee(i,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function jr(i,l,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=Ro(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):Ae(i,l,u))}function be(i){Be.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(be,Be);var iu=/^https?$/i,ou=["POST","PUT"];n=be.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dr.g(),this.v=this.o?j(this.o):j(Dr),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(C){So(this,C);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var S in f)u.set(S,f[S]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const C of f.keys())u.set(C,f.get(C));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(C=>C.toLowerCase()=="content-type"),S=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ou,l,void 0))||f||S||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,B]of u)this.g.setRequestHeader(C,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Po(this),this.u=!0,this.g.send(i),this.u=!1}catch(C){So(this,C)}};function So(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,bo(i),Ns(i)}function bo(i){i.A||(i.A=!0,ze(i,"complete"),ze(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,ze(this,"complete"),ze(this,"abort"),Ns(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ns(this,!0)),be.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Co(this):this.bb())},n.bb=function(){Co(this)};function Co(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Dt(i)!=4||i.Z()!=2)){if(i.u&&Dt(i)==4)vs(i.Ea,0,i);else if(ze(i,"readystatechange"),Dt(i)==4){i.h=!1;try{const B=i.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var u;if(!(u=l)){var f;if(f=B===0){var S=String(i.D).match(_o)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),f=!iu.test(S?S.toLowerCase():"")}u=f}if(u)ze(i,"complete"),ze(i,"success");else{i.m=6;try{var C=2<Dt(i)?i.g.statusText:""}catch{C=""}i.l=C+" ["+i.Z()+"]",bo(i)}}finally{Ns(i)}}}}function Ns(i,l){if(i.g){Po(i);const u=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||ze(i,"ready");try{u.onreadystatechange=f}catch{}}}function Po(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Dt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Dt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Y(l)}};function Vo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function au(i){const l={};i=(i.g&&2<=Dt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(U(i[f]))continue;var u=T(i[f]);const S=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const C=l[S]||[];l[S]=C,C.push(u)}E(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yn(i,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||l}function xo(i){this.Aa=0,this.i=[],this.j=new zn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Yn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Yn("baseRetryDelayMs",5e3,i),this.cb=Yn("retryDelaySeedMs",1e4,i),this.Wa=Yn("forwardChannelMaxRetries",2,i),this.wa=Yn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new ho(i&&i.concurrentRequestLimit),this.Da=new su,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=xo.prototype,n.la=8,n.G=1,n.connect=function(i,l,u,f){tt(0),this.W=i,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=Uo(this,null,this.W),ks(this)};function Ur(i){if(Do(i),i.G==3){var l=i.U++,u=xt(i.I);if(Ae(u,"SID",i.K),Ae(u,"RID",l),Ae(u,"TYPE","terminate"),Jn(i,u),l=new Ft(i,i.j,l),l.L=2,l.v=Vs(xt(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=Bo(l.j,null),l.g.ea(l.v)),l.F=Date.now(),bs(l)}jo(i)}function Ls(i){i.g&&(qr(i),i.g.cancel(),i.g=null)}function Do(i){Ls(i),i.u&&(c.clearTimeout(i.u),i.u=null),Os(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function ks(i){if(!fo(i.h)&&!i.s){i.s=!0;var l=i.Ga;Oe||at(),ot||(Oe(),ot=!0),Ee.add(l,i),i.B=0}}function lu(i,l){return mo(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=qn(A(i.Ga,i,l),Fo(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const S=new Ft(this,this.j,i);let C=this.o;if(this.S&&(C?(C=m(C),g(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)e:{for(var l=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=u;break e}if(l===4096||u===this.i.length-1){l=u+1;break e}}l=1e3}else l=1e3;l=Lo(this,S,l),u=xt(this.I),Ae(u,"RID",i),Ae(u,"CVER",22),this.D&&Ae(u,"X-HTTP-Session-Id",this.D),Jn(this,u),C&&(this.O?l="headers="+encodeURIComponent(String(Ro(C)))+"&"+l:this.m&&jr(u,this.m,C)),Fr(this.h,S),this.Ua&&Ae(u,"TYPE","init"),this.P?(Ae(u,"$req",l),Ae(u,"SID","null"),S.T=!0,Lr(S,u,null)):Lr(S,u,l),this.G=2}}else this.G==3&&(i?No(this,i):this.i.length==0||fo(this.h)||No(this))};function No(i,l){var u;l?u=l.l:u=i.U++;const f=xt(i.I);Ae(f,"SID",i.K),Ae(f,"RID",u),Ae(f,"AID",i.T),Jn(i,f),i.m&&i.o&&jr(f,i.m,i.o),u=new Ft(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),l&&(i.i=l.D.concat(i.i)),l=Lo(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Fr(i.h,u),Lr(u,f,l)}function Jn(i,l){i.H&&ee(i.H,function(u,f){Ae(l,f,u)}),i.l&&yo({},function(u,f){Ae(l,f,u)})}function Lo(i,l,u){u=Math.min(i.i.length,u);var f=i.l?A(i.l.Na,i.l,i):null;e:{var S=i.i;let C=-1;for(;;){const B=["count="+u];C==-1?0<u?(C=S[0].g,B.push("ofs="+C)):C=0:B.push("ofs="+C);let Ie=!0;for(let $e=0;$e<u;$e++){let fe=S[$e].g;const Qe=S[$e].map;if(fe-=C,0>fe)C=Math.max(0,S[$e].g-100),Ie=!1;else try{ru(Qe,B,"req"+fe+"_")}catch{f&&f(Qe)}}if(Ie){f=B.join("&");break e}}}return i=i.i.splice(0,u),l.D=i,f}function ko(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;Oe||at(),ot||(Oe(),ot=!0),Ee.add(l,i),i.v=0}}function Br(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=qn(A(i.Fa,i),Fo(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Oo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=qn(A(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),Ls(this),Oo(this))};function qr(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Oo(i){i.g=new Ft(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=xt(i.qa);Ae(l,"RID","rpc"),Ae(l,"SID",i.K),Ae(l,"AID",i.T),Ae(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&Ae(l,"TO",i.ja),Ae(l,"TYPE","xmlhttp"),Jn(i,l),i.m&&i.o&&jr(l,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=Vs(xt(l)),u.m=null,u.P=!0,lo(u,i)}n.Za=function(){this.C!=null&&(this.C=null,Ls(this),Br(this),tt(19))};function Os(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Mo(i,l){var u=null;if(i.g==l){Os(i),qr(i),i.g=null;var f=2}else if(Mr(i.h,l))u=l.D,go(i.h,l),f=1;else return;if(i.G!=0){if(l.o)if(f==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var S=i.B;f=sn(),ze(f,new ro(f,u)),ks(i)}else ko(i);else if(S=l.s,S==3||S==0&&0<l.X||!(f==1&&lu(i,l)||f==2&&Br(i)))switch(u&&0<u.length&&(l=i.h,l.i=l.i.concat(u)),S){case 1:an(i,5);break;case 4:an(i,10);break;case 3:an(i,6);break;default:an(i,2)}}}function Fo(i,l){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*l}function an(i,l){if(i.j.info("Error code "+l),l==2){var u=A(i.fb,i),f=i.Xa;const S=!f;f=new on(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Cs(f,"https"),Vs(f),S?tu(f.toString(),u):nu(f.toString(),u)}else tt(2);i.G=0,i.l&&i.l.sa(l),jo(i),Do(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function jo(i){if(i.G=0,i.ka=[],i.l){const l=po(i.h);(l.length!=0||i.i.length!=0)&&(P(i.ka,l),P(i.ka,i.i),i.h.i.length=0,k(i.i),i.i.length=0),i.l.ra()}}function Uo(i,l,u){var f=u instanceof on?xt(u):new on(u);if(f.g!="")l&&(f.g=l+"."+f.g),Ps(f,f.s);else{var S=c.location;f=S.protocol,l=l?l+"."+S.hostname:S.hostname,S=+S.port;var C=new on(null);f&&Cs(C,f),l&&(C.g=l),S&&Ps(C,S),u&&(C.l=u),f=C}return u=i.D,l=i.ya,u&&l&&Ae(f,u,l),Ae(f,"VER",i.la),Jn(i,f),f}function Bo(i,l,u){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new be(new xs({eb:u})):new be(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function qo(){}n=qo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ms(){}Ms.prototype.g=function(i,l){return new ct(i,l)};function ct(i,l){Be.call(this),this.g=new xo(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!U(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!U(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new Tn(this)}x(ct,Be),ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ct.prototype.close=function(){Ur(this.g)},ct.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=O(i),i=u);l.i.push(new Gc(l.Ya++,i)),l.G==3&&ks(l)},ct.prototype.N=function(){this.g.l=null,delete this.j,Ur(this.g),delete this.g,ct.aa.N.call(this)};function zo(i){ye.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){e:{for(const u in l){i=u;break e}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}x(zo,ye);function $o(){_e.call(this),this.status=1}x($o,_e);function Tn(i){this.g=i}x(Tn,qo),Tn.prototype.ua=function(){ze(this.g,"a")},Tn.prototype.ta=function(i){ze(this.g,new zo(i))},Tn.prototype.sa=function(i){ze(this.g,new $o)},Tn.prototype.ra=function(){ze(this.g,"b")},Ms.prototype.createWebChannel=Ms.prototype.g,ct.prototype.send=ct.prototype.o,ct.prototype.open=ct.prototype.m,ct.prototype.close=ct.prototype.close,pl=function(){return new Ms},gl=function(){return sn()},ml=W,ri={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Rs.NO_ERROR=0,Rs.TIMEOUT=8,Rs.HTTP_ERROR=6,$s=Rs,io.COMPLETE="complete",fl=io,se.EventType=xe,xe.OPEN="a",xe.CLOSE="b",xe.ERROR="c",xe.MESSAGE="d",Be.prototype.listen=Be.prototype.K,Xn=se,be.prototype.listenOnce=be.prototype.L,be.prototype.getLastError=be.prototype.Ka,be.prototype.getLastErrorCode=be.prototype.Ba,be.prototype.getStatus=be.prototype.Z,be.prototype.getResponseJson=be.prototype.Oa,be.prototype.getResponseText=be.prototype.oa,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Ha,dl=be}).apply(typeof js<"u"?js:typeof self<"u"?self:typeof window<"u"?window:{});const ia="@firebase/firestore",oa="4.9.0";/**
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
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
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
 */let Mn="12.0.0";/**
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
 */const hn=new il("@firebase/firestore");function vn(){return hn.logLevel}function G(n,...e){if(hn.logLevel<=he.DEBUG){const t=e.map(Ri);hn.debug(`Firestore (${Mn}): ${n}`,...t)}}function Lt(n,...e){if(hn.logLevel<=he.ERROR){const t=e.map(Ri);hn.error(`Firestore (${Mn}): ${n}`,...t)}}function Pn(n,...e){if(hn.logLevel<=he.WARN){const t=e.map(Ri);hn.warn(`Firestore (${Mn}): ${n}`,...t)}}function Ri(n){if(typeof n=="string")return n;try{/**
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
 */function X(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,yl(n,s,t)}function yl(n,e,t){let s=`FIRESTORE (${Mn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Lt(s),new Error(s)}function ge(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||yl(e,r,s)}function ne(n,e){return n}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends On{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class _l{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Xe.UNAUTHENTICATED))}shutdown(){}}class sd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class rd{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ge(this.o===void 0,42304);let s=this.i;const r=h=>this.i!==s?(s=this.i,t(h)):Promise.resolve();let o=new Gt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Gt,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await r(this.currentUser)})},c=h=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Gt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ge(typeof s.accessToken=="string",31837,{l:s}),new _l(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string",2055,{h:e}),new Xe(e)}}class id{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class od{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new id(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class aa{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ad{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Bh(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ge(this.o===void 0,3512);const s=o=>{o.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,G("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>s(o))};const r=o=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>r(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?r(o):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new aa(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ge(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new aa(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ld(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Si{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=ld(40);for(let o=0;o<r.length;++o)s.length<20&&r[o]<t&&(s+=e.charAt(r[o]%62))}return s}}function le(n,e){return n<e?-1:n>e?1:0}function ii(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),o=e.charAt(s);if(r!==o)return Kr(r)===Kr(o)?le(r,o):Kr(r)?1:-1}return le(n.length,e.length)}const cd=55296,ud=57343;function Kr(n){const e=n.charCodeAt(0);return e>=cd&&e<=ud}function Vn(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
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
 */const la="__name__";class It{constructor(e,t,s){t===void 0?t=0:t>e.length&&X(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&X(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return It.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof It?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const o=It.compareSegments(e.get(r),t.get(r));if(o!==0)return o}return le(e.length,t.length)}static compareSegments(e,t){const s=It.isNumericId(e),r=It.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?It.extractNumericId(e).compare(It.extractNumericId(t)):ii(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return $t.fromString(e.substring(4,e.length-2))}}class ve extends It{construct(e,t,s){return new ve(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new H(L.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new ve(t)}static emptyPath(){return new ve([])}}const hd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends It{construct(e,t,s){return new We(e,t,s)}static isValidIdentifier(e){return hd.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===la}static keyField(){return new We([la])}static fromServerFormat(e){const t=[];let s="",r=0;const o=()=>{if(s.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new H(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[r+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new H(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=h,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(s+=c,r++):(o(),r++)}if(o(),a)throw new H(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(t)}static emptyPath(){return new We([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(ve.fromString(e))}static fromName(e){return new Q(ve.fromString(e).popFirst(5))}static empty(){return new Q(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ve.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new ve(e.slice()))}}/**
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
 */function Il(n,e,t){if(!t)throw new H(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function dd(n,e,t,s){if(e===!0&&s===!0)throw new H(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ca(n){if(!Q.isDocumentKey(n))throw new H(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ua(n){if(Q.isDocumentKey(n))throw new H(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function El(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function bi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":X(12329,{type:typeof n})}function dn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new H(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=bi(n);throw new H(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ne(n,e){const t={typeString:n};return e&&(t.value=e),t}function ys(n,e){if(!El(n))throw new H(L.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,o="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${s}' field to equal '${o.value}'`;break}}if(t)throw new H(L.INVALID_ARGUMENT,t);return!0}/**
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
 */const ha=-62135596800,da=1e6;class we{static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*da);return new we(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ha)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/da}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:we._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ys(e,we._jsonSchema))return new we(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ha;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}we._jsonSchemaVersion="firestore/timestamp/1.0",we._jsonSchema={type:Ne("string",we._jsonSchemaVersion),seconds:Ne("number"),nanoseconds:Ne("number")};/**
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
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new we(0,0))}static max(){return new te(new we(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const hs=-1;function fd(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=te.fromTimestamp(s===1e9?new we(t+1,0):new we(t,s));return new Kt(r,Q.empty(),e)}function md(n){return new Kt(n.readTime,n.key,hs)}class Kt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Kt(te.min(),Q.empty(),hs)}static max(){return new Kt(te.max(),Q.empty(),hs)}}function gd(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Q.comparator(n.documentKey,e.documentKey),t!==0?t:le(n.largestBatchId,e.largestBatchId))}/**
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
 */const pd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Fn(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==pd)throw n;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((s,r)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(s,r)},this.catchCallback=o=>{this.wrapFailure(t,o).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,s)=>{t(e)})}static reject(e){return new D((t,s)=>{s(e)})}static waitFor(e){return new D((t,s)=>{let r=0,o=0,a=!1;e.forEach(c=>{++r,c.next(()=>{++o,a&&o===r&&t()},h=>s(h))}),a=!0,o===r&&t()})}static or(e){let t=D.resolve(!1);for(const s of e)t=t.next(r=>r?D.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,o)=>{s.push(t.call(this,r,o))}),this.waitFor(s)}static mapArray(e,t){return new D((s,r)=>{const o=e.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(y=>{a[d]=y,++c,c===o&&s(a)},y=>r(y))}})}static doWhile(e,t){return new D((s,r)=>{const o=()=>{e()===!0?t().next(()=>{o()},r):s()};o()})}}function _d(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function jn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class mr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}mr.ce=-1;/**
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
 */const Ci=-1;function gr(n){return n==null}function nr(n){return n===0&&1/n==-1/0}function Id(n){return typeof n=="number"&&Number.isInteger(n)&&!nr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Tl="";function Ed(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=fa(e)),e=Td(n.get(t),e);return fa(e)}function Td(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const o=n.charAt(r);switch(o){case"\0":t+="";break;case Tl:t+="";break;default:t+=o}}return t}function fa(n){return n+Tl+""}/**
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
 */function ma(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function en(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Al(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Se{constructor(e,t){this.comparator=e,this.root=t||Ge.EMPTY}insert(e,t){return new Se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Us(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Us(this.root,e,this.comparator,!1)}getReverseIterator(){return new Us(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Us(this.root,e,this.comparator,!0)}}class Us{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?s(e.key,t):1,t&&r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,t,s,r,o){this.key=e,this.value=t,this.color=s??Ge.RED,this.left=r??Ge.EMPTY,this.right=o??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,o){return new Ge(e??this.key,t??this.value,s??this.color,r??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const o=s(e,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(e,t,s),null):o===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Ge.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,t,s,r,o){return this}insert(e,t,s){return new Ge(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class je{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ga(this.data.getIterator())}getIteratorFrom(e){return new ga(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=s.getNext().key;if(this.comparator(r,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new je(this.comparator);return t.data=e,t}}class ga{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ut{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new ut([])}unionWith(e){let t=new je(We.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new ut(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Vn(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class vl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new vl("Invalid base64 string: "+o):o}}(e);return new He(t)}static fromUint8Array(e){const t=function(r){let o="";for(let a=0;a<r.length;++a)o+=String.fromCharCode(r[a]);return o}(e);return new He(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const Ad=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(n){if(ge(!!n,39018),typeof n=="string"){let e=0;const t=Ad.exec(n);if(ge(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ve(n.seconds),nanos:Ve(n.nanos)}}function Ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Yt(n){return typeof n=="string"?He.fromBase64String(n):He.fromUint8Array(n)}/**
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
 */const wl="server_timestamp",Rl="__type__",Sl="__previous_value__",bl="__local_write_time__";function Pi(n){return(n?.mapValue?.fields||{})[Rl]?.stringValue===wl}function pr(n){const e=n.mapValue.fields[Sl];return Pi(e)?pr(e):e}function ds(n){const e=Qt(n.mapValue.fields[bl].timestampValue);return new we(e.seconds,e.nanos)}/**
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
 */class vd{constructor(e,t,s,r,o,a,c,h,d,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=y}}const sr="(default)";class fs{constructor(e,t){this.projectId=e,this.database=t||sr}static empty(){return new fs("","")}get isDefaultDatabase(){return this.database===sr}isEqual(e){return e instanceof fs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Cl="__type__",wd="__max__",Bs={mapValue:{}},Pl="__vector__",rr="value";function Jt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Pi(n)?4:Sd(n)?9007199254740991:Rd(n)?10:11:X(28295,{value:n})}function bt(n,e){if(n===e)return!0;const t=Jt(n);if(t!==Jt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ds(n).isEqual(ds(e));case 3:return function(r,o){if(typeof r.timestampValue=="string"&&typeof o.timestampValue=="string"&&r.timestampValue.length===o.timestampValue.length)return r.timestampValue===o.timestampValue;const a=Qt(r.timestampValue),c=Qt(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,o){return Yt(r.bytesValue).isEqual(Yt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,o){return Ve(r.geoPointValue.latitude)===Ve(o.geoPointValue.latitude)&&Ve(r.geoPointValue.longitude)===Ve(o.geoPointValue.longitude)}(n,e);case 2:return function(r,o){if("integerValue"in r&&"integerValue"in o)return Ve(r.integerValue)===Ve(o.integerValue);if("doubleValue"in r&&"doubleValue"in o){const a=Ve(r.doubleValue),c=Ve(o.doubleValue);return a===c?nr(a)===nr(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Vn(n.arrayValue.values||[],e.arrayValue.values||[],bt);case 10:case 11:return function(r,o){const a=r.mapValue.fields||{},c=o.mapValue.fields||{};if(ma(a)!==ma(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!bt(a[h],c[h])))return!1;return!0}(n,e);default:return X(52216,{left:n})}}function ms(n,e){return(n.values||[]).find(t=>bt(t,e))!==void 0}function xn(n,e){if(n===e)return 0;const t=Jt(n),s=Jt(e);if(t!==s)return le(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return le(n.booleanValue,e.booleanValue);case 2:return function(o,a){const c=Ve(o.integerValue||o.doubleValue),h=Ve(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,e);case 3:return pa(n.timestampValue,e.timestampValue);case 4:return pa(ds(n),ds(e));case 5:return ii(n.stringValue,e.stringValue);case 6:return function(o,a){const c=Yt(o),h=Yt(a);return c.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const y=le(c[d],h[d]);if(y!==0)return y}return le(c.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const c=le(Ve(o.latitude),Ve(a.latitude));return c!==0?c:le(Ve(o.longitude),Ve(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ya(n.arrayValue,e.arrayValue);case 10:return function(o,a){const c=o.fields||{},h=a.fields||{},d=c[rr]?.arrayValue,y=h[rr]?.arrayValue,I=le(d?.values?.length||0,y?.values?.length||0);return I!==0?I:ya(d,y)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===Bs.mapValue&&a===Bs.mapValue)return 0;if(o===Bs.mapValue)return 1;if(a===Bs.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},y=Object.keys(d);h.sort(),y.sort();for(let I=0;I<h.length&&I<y.length;++I){const A=ii(h[I],y[I]);if(A!==0)return A;const b=xn(c[h[I]],d[y[I]]);if(b!==0)return b}return le(h.length,y.length)}(n.mapValue,e.mapValue);default:throw X(23264,{he:t})}}function pa(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return le(n,e);const t=Qt(n),s=Qt(e),r=le(t.seconds,s.seconds);return r!==0?r:le(t.nanos,s.nanos)}function ya(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const o=xn(t[r],s[r]);if(o)return o}return le(t.length,s.length)}function Dn(n){return oi(n)}function oi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=Qt(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Yt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",r=!0;for(const o of t.values||[])r?r=!1:s+=",",s+=oi(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${oi(t.fields[a])}`;return r+"}"}(n.mapValue):X(61005,{value:n})}function Gs(n){switch(Jt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=pr(n);return e?16+Gs(e):16;case 5:return 2*n.stringValue.length;case 6:return Yt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,o)=>r+Gs(o),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return en(s.fields,(o,a)=>{r+=o.length+Gs(a)}),r}(n.mapValue);default:throw X(13486,{value:n})}}function ai(n){return!!n&&"integerValue"in n}function Vi(n){return!!n&&"arrayValue"in n}function _a(n){return!!n&&"nullValue"in n}function Ia(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ws(n){return!!n&&"mapValue"in n}function Rd(n){return(n?.mapValue?.fields||{})[Cl]?.stringValue===Pl}function ss(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return en(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=ss(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ss(n.arrayValue.values[t]);return e}return{...n}}function Sd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===wd}/**
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
 */class it{constructor(e){this.value=e}static empty(){return new it({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ws(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ss(t)}setAll(e){let t=We.emptyPath(),s={},r=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const h=this.getFieldsMap(t);this.applyChanges(h,s,r),s={},r=[],t=c.popLast()}a?s[c.lastSegment()]=ss(a):r.push(c.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,s,r)}delete(e){const t=this.field(e.popLast());Ws(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return bt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Ws(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){en(t,(r,o)=>e[r]=o);for(const r of s)delete e[r]}clone(){return new it(ss(this.value))}}function Vl(n){const e=[];return en(n.fields,(t,s)=>{const r=new We([t]);if(Ws(s)){const o=Vl(s.mapValue).fields;if(o.length===0)e.push(r);else for(const a of o)e.push(r.child(a))}else e.push(r)}),new ut(e)}/**
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
 */class Ze{constructor(e,t,s,r,o,a,c){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ze(e,0,te.min(),te.min(),te.min(),it.empty(),0)}static newFoundDocument(e,t,s,r){return new Ze(e,1,t,te.min(),s,r,0)}static newNoDocument(e,t){return new Ze(e,2,t,te.min(),te.min(),it.empty(),0)}static newUnknownDocument(e,t){return new Ze(e,3,t,te.min(),te.min(),it.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=it.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=it.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ir{constructor(e,t){this.position=e,this.inclusive=t}}function Ea(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const o=e[r],a=n.position[r];if(o.field.isKeyField()?s=Q.comparator(Q.fromName(a.referenceValue),t.key):s=xn(a,t.data.field(o.field)),o.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ta(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!bt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class or{constructor(e,t="asc"){this.field=e,this.dir=t}}function bd(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class xl{}class Fe extends xl{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Pd(e,t,s):t==="array-contains"?new Dd(e,s):t==="in"?new Nd(e,s):t==="not-in"?new Ld(e,s):t==="array-contains-any"?new kd(e,s):new Fe(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Vd(e,s):new xd(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(xn(t,this.value)):t!==null&&Jt(this.value)===Jt(t)&&this.matchesComparison(xn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ct extends xl{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ct(e,t)}matches(e){return Dl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Dl(n){return n.op==="and"}function Nl(n){return Cd(n)&&Dl(n)}function Cd(n){for(const e of n.filters)if(e instanceof Ct)return!1;return!0}function li(n){if(n instanceof Fe)return n.field.canonicalString()+n.op.toString()+Dn(n.value);if(Nl(n))return n.filters.map(e=>li(e)).join(",");{const e=n.filters.map(t=>li(t)).join(",");return`${n.op}(${e})`}}function Ll(n,e){return n instanceof Fe?function(s,r){return r instanceof Fe&&s.op===r.op&&s.field.isEqual(r.field)&&bt(s.value,r.value)}(n,e):n instanceof Ct?function(s,r){return r instanceof Ct&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((o,a,c)=>o&&Ll(a,r.filters[c]),!0):!1}(n,e):void X(19439)}function kl(n){return n instanceof Fe?function(t){return`${t.field.canonicalString()} ${t.op} ${Dn(t.value)}`}(n):n instanceof Ct?function(t){return t.op.toString()+" {"+t.getFilters().map(kl).join(" ,")+"}"}(n):"Filter"}class Pd extends Fe{constructor(e,t,s){super(e,t,s),this.key=Q.fromName(s.referenceValue)}matches(e){const t=Q.comparator(e.key,this.key);return this.matchesComparison(t)}}class Vd extends Fe{constructor(e,t){super(e,"in",t),this.keys=Ol("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class xd extends Fe{constructor(e,t){super(e,"not-in",t),this.keys=Ol("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ol(n,e){return(e.arrayValue?.values||[]).map(t=>Q.fromName(t.referenceValue))}class Dd extends Fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Vi(t)&&ms(t.arrayValue,this.value)}}class Nd extends Fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ms(this.value.arrayValue,t)}}class Ld extends Fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(ms(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ms(this.value.arrayValue,t)}}class kd extends Fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Vi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>ms(this.value.arrayValue,s))}}/**
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
 */class Od{constructor(e,t=null,s=[],r=[],o=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=o,this.startAt=a,this.endAt=c,this.Te=null}}function Aa(n,e=null,t=[],s=[],r=null,o=null,a=null){return new Od(n,e,t,s,r,o,a)}function xi(n){const e=ne(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>li(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(o){return o.field.canonicalString()+o.dir}(s)).join(","),gr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Dn(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Dn(s)).join(",")),e.Te=t}return e.Te}function Di(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!bd(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ll(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ta(n.startAt,e.startAt)&&Ta(n.endAt,e.endAt)}function ci(n){return Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class yr{constructor(e,t=null,s=[],r=[],o=null,a="F",c=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Md(n,e,t,s,r,o,a,c){return new yr(n,e,t,s,r,o,a,c)}function Ni(n){return new yr(n)}function va(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Fd(n){return n.collectionGroup!==null}function rs(n){const e=ne(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new je(We.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new or(o,s))}),t.has(We.keyField().canonicalString())||e.Ie.push(new or(We.keyField(),s))}return e.Ie}function At(n){const e=ne(n);return e.Ee||(e.Ee=jd(e,rs(n))),e.Ee}function jd(n,e){if(n.limitType==="F")return Aa(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const o=r.dir==="desc"?"asc":"desc";return new or(r.field,o)});const t=n.endAt?new ir(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new ir(n.startAt.position,n.startAt.inclusive):null;return Aa(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function ui(n,e,t){return new yr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function _r(n,e){return Di(At(n),At(e))&&n.limitType===e.limitType}function Ml(n){return`${xi(At(n))}|lt:${n.limitType}`}function wn(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(r=>kl(r)).join(", ")}]`),gr(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(r=>Dn(r)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(r=>Dn(r)).join(",")),`Target(${s})`}(At(n))}; limitType=${n.limitType})`}function Ir(n,e){return e.isFoundDocument()&&function(s,r){const o=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(o):Q.isDocumentKey(s.path)?s.path.isEqual(o):s.path.isImmediateParentOf(o)}(n,e)&&function(s,r){for(const o of rs(s))if(!o.field.isKeyField()&&r.data.field(o.field)===null)return!1;return!0}(n,e)&&function(s,r){for(const o of s.filters)if(!o.matches(r))return!1;return!0}(n,e)&&function(s,r){return!(s.startAt&&!function(a,c,h){const d=Ea(a,c,h);return a.inclusive?d<=0:d<0}(s.startAt,rs(s),r)||s.endAt&&!function(a,c,h){const d=Ea(a,c,h);return a.inclusive?d>=0:d>0}(s.endAt,rs(s),r))}(n,e)}function Ud(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Fl(n){return(e,t)=>{let s=!1;for(const r of rs(n)){const o=Bd(r,e,t);if(o!==0)return o;s=s||r.field.isKeyField()}return 0}}function Bd(n,e,t){const s=n.field.isKeyField()?Q.comparator(e.key,t.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?xn(h,d):X(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return X(19790,{direction:n.dir})}}/**
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
 */class mn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,o]of s)if(this.equalsFn(r,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){en(this.inner,(t,s)=>{for(const[r,o]of s)e(r,o)})}isEmpty(){return Al(this.inner)}size(){return this.innerSize}}/**
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
 */const qd=new Se(Q.comparator);function kt(){return qd}const jl=new Se(Q.comparator);function Zn(...n){let e=jl;for(const t of n)e=e.insert(t.key,t);return e}function Ul(n){let e=jl;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function cn(){return is()}function Bl(){return is()}function is(){return new mn(n=>n.toString(),(n,e)=>n.isEqual(e))}const zd=new Se(Q.comparator),$d=new je(Q.comparator);function ce(...n){let e=$d;for(const t of n)e=e.add(t);return e}const Gd=new je(le);function Wd(){return Gd}/**
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
 */function Li(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nr(e)?"-0":e}}function ql(n){return{integerValue:""+n}}function Hd(n,e){return Id(e)?ql(e):Li(n,e)}/**
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
 */class Er{constructor(){this._=void 0}}function Kd(n,e,t){return n instanceof ar?function(r,o){const a={fields:{[Rl]:{stringValue:wl},[bl]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return o&&Pi(o)&&(o=pr(o)),o&&(a.fields[Sl]=o),{mapValue:a}}(t,e):n instanceof gs?$l(n,e):n instanceof ps?Gl(n,e):function(r,o){const a=zl(r,o),c=wa(a)+wa(r.Ae);return ai(a)&&ai(r.Ae)?ql(c):Li(r.serializer,c)}(n,e)}function Qd(n,e,t){return n instanceof gs?$l(n,e):n instanceof ps?Gl(n,e):t}function zl(n,e){return n instanceof lr?function(s){return ai(s)||function(o){return!!o&&"doubleValue"in o}(s)}(e)?e:{integerValue:0}:null}class ar extends Er{}class gs extends Er{constructor(e){super(),this.elements=e}}function $l(n,e){const t=Wl(e);for(const s of n.elements)t.some(r=>bt(r,s))||t.push(s);return{arrayValue:{values:t}}}class ps extends Er{constructor(e){super(),this.elements=e}}function Gl(n,e){let t=Wl(e);for(const s of n.elements)t=t.filter(r=>!bt(r,s));return{arrayValue:{values:t}}}class lr extends Er{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function wa(n){return Ve(n.integerValue||n.doubleValue)}function Wl(n){return Vi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Yd(n,e){return n.field.isEqual(e.field)&&function(s,r){return s instanceof gs&&r instanceof gs||s instanceof ps&&r instanceof ps?Vn(s.elements,r.elements,bt):s instanceof lr&&r instanceof lr?bt(s.Ae,r.Ae):s instanceof ar&&r instanceof ar}(n.transform,e.transform)}class Jd{constructor(e,t){this.version=e,this.transformResults=t}}class vt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new vt}static exists(e){return new vt(void 0,e)}static updateTime(e){return new vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Tr{}function Hl(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ql(n.key,vt.none()):new _s(n.key,n.data,vt.none());{const t=n.data,s=it.empty();let r=new je(We.comparator);for(let o of e.fields)if(!r.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?s.delete(o):s.set(o,a),r=r.add(o)}return new tn(n.key,s,new ut(r.toArray()),vt.none())}}function Xd(n,e,t){n instanceof _s?function(r,o,a){const c=r.value.clone(),h=Sa(r.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof tn?function(r,o,a){if(!Hs(r.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Sa(r.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Kl(r)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(r,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function os(n,e,t,s){return n instanceof _s?function(o,a,c,h){if(!Hs(o.precondition,a))return c;const d=o.value.clone(),y=ba(o.fieldTransforms,h,a);return d.setAll(y),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,s):n instanceof tn?function(o,a,c,h){if(!Hs(o.precondition,a))return c;const d=ba(o.fieldTransforms,h,a),y=a.data;return y.setAll(Kl(o)),y.setAll(d),a.convertToFoundDocument(a.version,y).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,e,t,s):function(o,a,c){return Hs(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function Zd(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),o=zl(s.transform,r||null);o!=null&&(t===null&&(t=it.empty()),t.set(s.field,o))}return t||null}function Ra(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Vn(s,r,(o,a)=>Yd(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class _s extends Tr{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class tn extends Tr{constructor(e,t,s,r,o=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Kl(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function Sa(n,e,t){const s=new Map;ge(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let r=0;r<t.length;r++){const o=n[r],a=o.transform,c=e.data.field(o.field);s.set(o.field,Qd(a,c,t[r]))}return s}function ba(n,e,t){const s=new Map;for(const r of n){const o=r.transform,a=t.data.field(r.field);s.set(r.field,Kd(o,a,e))}return s}class Ql extends Tr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ef extends Tr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class tf{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const o=this.mutations[r];o.key.isEqual(e.key)&&Xd(o,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=os(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=os(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Bl();return this.mutations.forEach(r=>{const o=e.get(r.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=t.has(r.key)?null:c;const h=Hl(a,c);h!==null&&s.set(r.key,h),a.isValidDocument()||a.convertToNoDocument(te.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ce())}isEqual(e){return this.batchId===e.batchId&&Vn(this.mutations,e.mutations,(t,s)=>Ra(t,s))&&Vn(this.baseMutations,e.baseMutations,(t,s)=>Ra(t,s))}}class ki{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){ge(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=function(){return zd}();const o=e.mutations;for(let a=0;a<o.length;a++)r=r.insert(o[a].key,s[a].version);return new ki(e,t,s,r)}}/**
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
 */class nf{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sf{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var De,ue;function rf(n){switch(n){case L.OK:return X(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return X(15467,{code:n})}}function Yl(n){if(n===void 0)return Lt("GRPC error has no .code"),L.UNKNOWN;switch(n){case De.OK:return L.OK;case De.CANCELLED:return L.CANCELLED;case De.UNKNOWN:return L.UNKNOWN;case De.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case De.INTERNAL:return L.INTERNAL;case De.UNAVAILABLE:return L.UNAVAILABLE;case De.UNAUTHENTICATED:return L.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case De.NOT_FOUND:return L.NOT_FOUND;case De.ALREADY_EXISTS:return L.ALREADY_EXISTS;case De.PERMISSION_DENIED:return L.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case De.ABORTED:return L.ABORTED;case De.OUT_OF_RANGE:return L.OUT_OF_RANGE;case De.UNIMPLEMENTED:return L.UNIMPLEMENTED;case De.DATA_LOSS:return L.DATA_LOSS;default:return X(39323,{code:n})}}(ue=De||(De={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function of(){return new TextEncoder}/**
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
 */const af=new $t([4294967295,4294967295],0);function Ca(n){const e=of().encode(n),t=new hl;return t.update(e),new Uint8Array(t.digest())}function Pa(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new $t([t,s],0),new $t([r,o],0)]}class Oi{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new es(`Invalid padding: ${t}`);if(s<0)throw new es(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new es(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new es(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=$t.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply($t.fromNumber(s)));return r.compare(af)===1&&(r=new $t([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Ca(e),[s,r]=Pa(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(s,r,o);if(!this.we(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new Oi(o,r,t);return s.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=Ca(e),[s,r]=Pa(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(s,r,o);this.Se(a)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class es extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ar{constructor(e,t,s,r,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,Is.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ar(te.min(),r,new Se(le),kt(),ce())}}class Is{constructor(e,t,s,r,o){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Is(s,t,ce(),ce(),ce())}}/**
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
 */class Ks{constructor(e,t,s,r){this.be=e,this.removedTargetIds=t,this.key=s,this.De=r}}class Jl{constructor(e,t){this.targetId=e,this.Ce=t}}class Xl{constructor(e,t,s=He.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Va{constructor(){this.ve=0,this.Fe=xa(),this.Me=He.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ce(),t=ce(),s=ce();return this.Fe.forEach((r,o)=>{switch(o){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:X(38017,{changeType:o})}}),new Is(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=xa()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ge(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class lf{constructor(e){this.Ge=e,this.ze=new Map,this.je=kt(),this.Je=qs(),this.He=qs(),this.Ye=new Se(le)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:X(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((s,r)=>{this.rt(r)&&t(r)})}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const o=r.target;if(ci(o))if(s===0){const a=new Q(o.path);this.et(t,a,Ze.newNoDocument(a,te.min()))}else ge(s===1,20013,{expectedCount:s});else{const a=this._t(t);if(a!==s){const c=this.ut(e),h=c?this.ct(c,e,a):1;if(h!==0){this.it(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:o=0}=t;let a,c;try{a=Yt(s).toUint8Array()}catch(h){if(h instanceof vl)return Pn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Oi(a,r,o)}catch(h){return Pn(h instanceof es?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.ge===0?null:c}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach(o=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(c)||(this.et(t,o,null),r++)}),r}Tt(e){const t=new Map;this.ze.forEach((o,a)=>{const c=this.ot(a);if(c){if(o.current&&ci(c.target)){const h=new Q(c.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,Ze.newNoDocument(h,e))}o.Be&&(t.set(a,o.ke()),o.qe())}});let s=ce();this.He.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(s=s.add(o))}),this.je.forEach((o,a)=>a.setReadTime(e));const r=new Ar(e,t,this.Ye,this.je,s);return this.je=kt(),this.Je=qs(),this.He=qs(),this.Ye=new Se(le),r}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.Qe(t,1):r.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Va,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new je(le),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new je(le),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||G("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Va),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function qs(){return new Se(Q.comparator)}function xa(){return new Se(Q.comparator)}const cf={asc:"ASCENDING",desc:"DESCENDING"},uf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hf={and:"AND",or:"OR"};class df{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function hi(n,e){return n.useProto3Json||gr(e)?e:{value:e}}function cr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zl(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ff(n,e){return cr(n,e.toTimestamp())}function wt(n){return ge(!!n,49232),te.fromTimestamp(function(t){const s=Qt(t);return new we(s.seconds,s.nanos)}(n))}function Mi(n,e){return di(n,e).canonicalString()}function di(n,e){const t=function(r){return new ve(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ec(n){const e=ve.fromString(n);return ge(ic(e),10190,{key:e.toString()}),e}function fi(n,e){return Mi(n.databaseId,e.path)}function Qr(n,e){const t=ec(e);if(t.get(1)!==n.databaseId.projectId)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Q(nc(t))}function tc(n,e){return Mi(n.databaseId,e)}function mf(n){const e=ec(n);return e.length===4?ve.emptyPath():nc(e)}function mi(n){return new ve(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function nc(n){return ge(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Da(n,e,t){return{name:fi(n,e),fields:t.value.mapValue.fields}}function gf(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:X(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],o=function(d,y){return d.useProto3Json?(ge(y===void 0||typeof y=="string",58123),He.fromBase64String(y||"")):(ge(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),He.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const y=d.code===void 0?L.UNKNOWN:Yl(d.code);return new H(y,d.message||"")}(a);t=new Xl(s,r,o,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Qr(n,s.document.name),o=wt(s.document.updateTime),a=s.document.createTime?wt(s.document.createTime):te.min(),c=new it({mapValue:{fields:s.document.fields}}),h=Ze.newFoundDocument(r,o,a,c),d=s.targetIds||[],y=s.removedTargetIds||[];t=new Ks(d,y,h.key,h)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Qr(n,s.document),o=s.readTime?wt(s.readTime):te.min(),a=Ze.newNoDocument(r,o),c=s.removedTargetIds||[];t=new Ks([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Qr(n,s.document),o=s.removedTargetIds||[];t=new Ks([],o,r,null)}else{if(!("filter"in e))return X(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:o}=s,a=new sf(r,o),c=s.targetId;t=new Jl(c,a)}}return t}function pf(n,e){let t;if(e instanceof _s)t={update:Da(n,e.key,e.value)};else if(e instanceof Ql)t={delete:fi(n,e.key)};else if(e instanceof tn)t={update:Da(n,e.key,e.data),updateMask:Rf(e.fieldMask)};else{if(!(e instanceof ef))return X(16599,{Vt:e.type});t={verify:fi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(o,a){const c=a.transform;if(c instanceof ar)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof gs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ps)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof lr)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw X(20930,{transform:a.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(r,o){return o.updateTime!==void 0?{updateTime:ff(r,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:X(27497)}(n,e.precondition)),t}function yf(n,e){return n&&n.length>0?(ge(e!==void 0,14353),n.map(t=>function(r,o){let a=r.updateTime?wt(r.updateTime):wt(o);return a.isEqual(te.min())&&(a=wt(o)),new Jd(a,r.transformResults||[])}(t,e))):[]}function _f(n,e){return{documents:[tc(n,e.path)]}}function If(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=tc(n,r);const o=function(d){if(d.length!==0)return rc(Ct.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(y=>function(A){return{field:Rn(A.field),direction:Af(A.dir)}}(y))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=hi(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:r}}function Ef(n){let e=mf(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){ge(s===1,65062);const y=t.from[0];y.allDescendants?r=y.collectionId:e=e.child(y.collectionId)}let o=[];t.where&&(o=function(I){const A=sc(I);return A instanceof Ct&&Nl(A)?A.getFilters():[A]}(t.where));let a=[];t.orderBy&&(a=function(I){return I.map(A=>function(x){return new or(Sn(x.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(A))}(t.orderBy));let c=null;t.limit&&(c=function(I){let A;return A=typeof I=="object"?I.value:I,gr(A)?null:A}(t.limit));let h=null;t.startAt&&(h=function(I){const A=!!I.before,b=I.values||[];return new ir(b,A)}(t.startAt));let d=null;return t.endAt&&(d=function(I){const A=!I.before,b=I.values||[];return new ir(b,A)}(t.endAt)),Md(e,r,a,o,c,"F",h,d)}function Tf(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:r})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function sc(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Sn(t.unaryFilter.field);return Fe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Sn(t.unaryFilter.field);return Fe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Sn(t.unaryFilter.field);return Fe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Sn(t.unaryFilter.field);return Fe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}}(n):n.fieldFilter!==void 0?function(t){return Fe.create(Sn(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ct.create(t.compositeFilter.filters.map(s=>sc(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return X(1026)}}(t.compositeFilter.op))}(n):X(30097,{filter:n})}function Af(n){return cf[n]}function vf(n){return uf[n]}function wf(n){return hf[n]}function Rn(n){return{fieldPath:n.canonicalString()}}function Sn(n){return We.fromServerFormat(n.fieldPath)}function rc(n){return n instanceof Fe?function(t){if(t.op==="=="){if(Ia(t.value))return{unaryFilter:{field:Rn(t.field),op:"IS_NAN"}};if(_a(t.value))return{unaryFilter:{field:Rn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ia(t.value))return{unaryFilter:{field:Rn(t.field),op:"IS_NOT_NAN"}};if(_a(t.value))return{unaryFilter:{field:Rn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Rn(t.field),op:vf(t.op),value:t.value}}}(n):n instanceof Ct?function(t){const s=t.getFilters().map(r=>rc(r));return s.length===1?s[0]:{compositeFilter:{op:wf(t.op),filters:s}}}(n):X(54877,{filter:n})}function Rf(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ic(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Bt{constructor(e,t,s,r,o=te.min(),a=te.min(),c=He.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(e){return new Bt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Sf{constructor(e){this.yt=e}}function bf(n){const e=Ef({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ui(e,e.limit,"L"):e}/**
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
 */class Cf{constructor(){this.Cn=new Pf}addToCollectionParentIndex(e,t){return this.Cn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(Kt.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(Kt.min())}updateCollectionGroup(e,t,s){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class Pf{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new je(ve.comparator),o=!r.has(s);return this.index[t]=r.add(s),o}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new je(ve.comparator)).toArray()}}/**
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
 */const Na={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},oc=41943040;class rt{static withCacheSize(e){return new rt(e,rt.DEFAULT_COLLECTION_PERCENTILE,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */rt.DEFAULT_COLLECTION_PERCENTILE=10,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rt.DEFAULT=new rt(oc,rt.DEFAULT_COLLECTION_PERCENTILE,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rt.DISABLED=new rt(-1,0,0);/**
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
 */class Nn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Nn(0)}static cr(){return new Nn(-1)}}/**
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
 */const La="LruGarbageCollector",Vf=1048576;function ka([n,e],[t,s]){const r=le(n,t);return r===0?le(e,s):r}class xf{constructor(e){this.Ir=e,this.buffer=new je(ka),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();ka(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Df{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){G(La,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){jn(t)?G(La,"Ignoring IndexedDB error during garbage collection: ",t):await Fn(t)}await this.Vr(3e5)})}}class Nf{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return D.resolve(mr.ce);const s=new xf(t);return this.mr.forEachTarget(e,r=>s.Ar(r.sequenceNumber)).next(()=>this.mr.pr(e,r=>s.Ar(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(Na)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Na):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,r,o,a,c,h,d;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),r=this.params.maximumSequenceNumbersToCollect):r=I,a=Date.now(),this.nthSequenceNumber(e,r))).next(I=>(s=I,c=Date.now(),this.removeTargets(e,s,t))).next(I=>(o=I,h=Date.now(),this.removeOrphanedDocuments(e,s))).next(I=>(d=Date.now(),vn()<=he.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-y}ms
	Determined least recently used ${r} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${I} documents in `+(d-h)+`ms
Total Duration: ${d-y}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:o,documentsRemoved:I})))}}function Lf(n,e){return new Nf(n,e)}/**
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
 */class kf{constructor(){this.changes=new mn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?D.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Of{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Mf{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&os(s.mutation,r,ut.empty(),we.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,ce()).next(()=>s))}getLocalViewOfDocuments(e,t,s=ce()){const r=cn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(o=>{let a=Zn();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const s=cn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,ce()))}populateOverlays(e,t,s){const r=[];return s.forEach(o=>{t.has(o)||r.push(o)}),this.documentOverlayCache.getOverlays(e,r).next(o=>{o.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,s,r){let o=kt();const a=is(),c=function(){return is()}();return t.forEach((h,d)=>{const y=s.get(d.key);r.has(d.key)&&(y===void 0||y.mutation instanceof tn)?o=o.insert(d.key,d):y!==void 0?(a.set(d.key,y.mutation.getFieldMask()),os(y.mutation,d,y.mutation.getFieldMask(),we.now())):a.set(d.key,ut.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,y)=>a.set(d,y)),t.forEach((d,y)=>c.set(d,new Of(y,a.get(d)??null))),c))}recalculateAndSaveOverlays(e,t){const s=is();let r=new Se((a,c)=>a-c),o=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let y=s.get(h)||ut.empty();y=c.applyToLocalView(d,y),s.set(h,y);const I=(r.get(c.batchId)||ce()).add(h);r=r.insert(c.batchId,I)})}).next(()=>{const a=[],c=r.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,y=h.value,I=Bl();y.forEach(A=>{if(!o.has(A)){const b=Hl(t.get(A),s.get(A));b!==null&&I.set(A,b),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,I))}return D.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,r){return function(a){return Q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Fd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(o=>{const a=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-o.size):D.resolve(cn());let c=hs,h=o;return a.next(d=>D.forEach(d,(y,I)=>(c<I.largestBatchId&&(c=I.largestBatchId),o.get(y)?D.resolve():this.remoteDocumentCache.getEntry(e,y).next(A=>{h=h.insert(y,A)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,ce())).next(y=>({batchId:c,changes:Ul(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Q(t)).next(s=>{let r=Zn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const o=t.collectionGroup;let a=Zn();return this.indexManager.getCollectionParents(e,o).next(c=>D.forEach(c,h=>{const d=function(I,A){return new yr(A,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,s,r).next(y=>{y.forEach((I,A)=>{a=a.insert(I,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,s,r){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,o,r))).next(a=>{o.forEach((h,d)=>{const y=d.getKey();a.get(y)===null&&(a=a.insert(y,Ze.newInvalidDocument(y)))});let c=Zn();return a.forEach((h,d)=>{const y=o.get(h);y!==void 0&&os(y.mutation,d,ut.empty(),we.now()),Ir(t,d)&&(c=c.insert(h,d))}),c})}}/**
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
 */class Ff{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return D.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:wt(r.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(r){return{name:r.name,query:bf(r.bundledQuery),readTime:wt(r.readTime)}}(t)),D.resolve()}}/**
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
 */class jf{constructor(){this.overlays=new Se(Q.comparator),this.qr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const s=cn();return D.forEach(t,r=>this.getOverlay(e,r).next(o=>{o!==null&&s.set(r,o)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,o)=>{this.St(e,t,o)}),D.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.qr.get(s);return r!==void 0&&(r.forEach(o=>this.overlays=this.overlays.remove(o)),this.qr.delete(s)),D.resolve()}getOverlaysForCollection(e,t,s){const r=cn(),o=t.length+1,a=new Q(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>s&&r.set(h.getKey(),h)}return D.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let o=new Se((d,y)=>d-y);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>s){let y=o.get(d.largestBatchId);y===null&&(y=cn(),o=o.insert(d.largestBatchId,y)),y.set(d.getKey(),d)}}const c=cn(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,y)=>c.set(d,y)),!(c.size()>=r)););return D.resolve(c)}St(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.qr.get(r.largestBatchId).delete(s.key);this.qr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new nf(t,s));let o=this.qr.get(t);o===void 0&&(o=ce(),this.qr.set(t,o)),this.qr.set(t,o.add(s.key))}}/**
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
 */class Uf{constructor(){this.sessionToken=He.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
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
 */class Fi{constructor(){this.Qr=new je(qe.$r),this.Ur=new je(qe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new qe(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Gr(new qe(e,t))}zr(e,t){e.forEach(s=>this.removeReference(s,t))}jr(e){const t=new Q(new ve([])),s=new qe(t,e),r=new qe(t,e+1),o=[];return this.Ur.forEachInRange([s,r],a=>{this.Gr(a),o.push(a.key)}),o}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new Q(new ve([])),s=new qe(t,e),r=new qe(t,e+1);let o=ce();return this.Ur.forEachInRange([s,r],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new qe(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class qe{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return Q.comparator(e.key,t.key)||le(e.Yr,t.Yr)}static Kr(e,t){return le(e.Yr,t.Yr)||Q.comparator(e.key,t.key)}}/**
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
 */class Bf{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new je(qe.$r)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new tf(o,t,s,r);this.mutationQueue.push(a);for(const c of r)this.Zr=this.Zr.add(new qe(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.ei(s),o=r<0?0:r;return D.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?Ci:this.tr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new qe(t,0),r=new qe(t,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([s,r],a=>{const c=this.Xr(a.Yr);o.push(c)}),D.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new je(le);return t.forEach(r=>{const o=new qe(r,0),a=new qe(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],c=>{s=s.add(c.Yr)})}),D.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let o=s;Q.isDocumentKey(o)||(o=o.child(""));const a=new qe(new Q(o),0);let c=new je(le);return this.Zr.forEachWhile(h=>{const d=h.key.path;return!!s.isPrefixOf(d)&&(d.length===r&&(c=c.add(h.Yr)),!0)},a),D.resolve(this.ti(c))}ti(e){const t=[];return e.forEach(s=>{const r=this.Xr(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){ge(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return D.forEach(t.mutations,r=>{const o=new qe(r.key,t.batchId);return s=s.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Zr=s})}ir(e){}containsKey(e,t){const s=new qe(t,0),r=this.Zr.firstAfterOrEqual(s);return D.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class qf{constructor(e){this.ri=e,this.docs=function(){return new Se(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),o=r?r.size:0,a=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return D.resolve(s?s.document.mutableCopy():Ze.newInvalidDocument(t))}getEntries(e,t){let s=kt();return t.forEach(r=>{const o=this.docs.get(r);s=s.insert(r,o?o.document.mutableCopy():Ze.newInvalidDocument(r))}),D.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let o=kt();const a=t.path,c=new Q(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:y}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||gd(md(y),s)<=0||(r.has(y.key)||Ir(t,y))&&(o=o.insert(y.key,y.mutableCopy()))}return D.resolve(o)}getAllFromCollectionGroup(e,t,s,r){X(9500)}ii(e,t){return D.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new zf(this)}getSize(e){return D.resolve(this.size)}}class zf extends kf{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(s)}),D.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class $f{constructor(e){this.persistence=e,this.si=new mn(t=>xi(t),Di),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.oi=0,this._i=new Fi,this.targetCount=0,this.ai=Nn.ur()}forEachTarget(e,t){return this.si.forEach((s,r)=>t(r)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),D.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Nn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.Pr(t),D.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,s){let r=0;const o=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)}),D.waitFor(o).next(()=>r)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return D.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),D.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const r=this.persistence.referenceDelegate,o=[];return r&&t.forEach(a=>{o.push(r.markPotentiallyOrphaned(e,a))}),D.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return D.resolve(s)}containsKey(e,t){return D.resolve(this._i.containsKey(t))}}/**
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
 */class ac{constructor(e,t){this.ui={},this.overlays={},this.ci=new mr(0),this.li=!1,this.li=!0,this.hi=new Uf,this.referenceDelegate=e(this),this.Pi=new $f(this),this.indexManager=new Cf,this.remoteDocumentCache=function(r){return new qf(r)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new Sf(t),this.Ii=new Ff(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new jf,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new Bf(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){G("MemoryPersistence","Starting transaction:",e);const r=new Gf(this.ci.next());return this.referenceDelegate.Ei(),s(r).next(o=>this.referenceDelegate.di(r).next(()=>o)).toPromise().then(o=>(r.raiseOnCommittedEvent(),o))}Ai(e,t){return D.or(Object.values(this.ui).map(s=>()=>s.containsKey(e,t)))}}class Gf extends yd{constructor(e){super(),this.currentSequenceNumber=e}}class ji{constructor(e){this.persistence=e,this.Ri=new Fi,this.Vi=null}static mi(e){return new ji(e)}get fi(){if(this.Vi)return this.Vi;throw X(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),D.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),D.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(r=>this.fi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(o=>this.fi.add(o.toString()))}).next(()=>s.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.fi,s=>{const r=Q.fromPath(s);return this.gi(e,r).next(o=>{o||t.removeEntry(r,te.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return D.or([()=>D.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class ur{constructor(e,t){this.persistence=e,this.pi=new mn(s=>Ed(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=Lf(this,t)}static mi(e,t){return new ur(e,t)}Ei(){}di(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}wr(e){let t=0;return this.pr(e,s=>{t++}).next(()=>t)}pr(e,t){return D.forEach(this.pi,(s,r)=>this.br(e,s,r).next(o=>o?D.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),o=r.newChangeBuffer();return r.ii(e,a=>this.br(e,a,t).next(c=>{c||(s++,o.removeEntry(a,te.min()))})).next(()=>o.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),D.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),D.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Gs(e.data.value)),t}br(e,t,s){return D.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.pi.get(t);return D.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ui{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=r}static As(e,t){let s=ce(),r=ce();for(const o of t.docChanges)switch(o.type){case 0:s=s.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new Ui(e,t.fromCache,s,r)}}/**
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
 */class Wf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Hf{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Fu()?8:_d(Ou())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const o={result:null};return this.ys(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ws(e,t,r,s).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Wf;return this.Ss(e,t,a).next(c=>{if(o.result=c,this.Vs)return this.bs(e,t,a,c.size)})}).next(()=>o.result)}bs(e,t,s,r){return s.documentReadCount<this.fs?(vn()<=he.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",wn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),D.resolve()):(vn()<=he.DEBUG&&G("QueryEngine","Query:",wn(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.gs*r?(vn()<=he.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",wn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,At(t))):D.resolve())}ys(e,t){if(va(t))return D.resolve(null);let s=At(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=ui(t,null,"F"),s=At(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(o=>{const a=ce(...o);return this.ps.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,s).next(h=>{const d=this.Ds(t,c);return this.Cs(t,d,a,h.readTime)?this.ys(e,ui(t,null,"F")):this.vs(e,d,t,h)}))})))}ws(e,t,s,r){return va(t)||r.isEqual(te.min())?D.resolve(null):this.ps.getDocuments(e,s).next(o=>{const a=this.Ds(t,o);return this.Cs(t,a,s,r)?D.resolve(null):(vn()<=he.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),wn(t)),this.vs(e,a,t,fd(r,hs)).next(c=>c))})}Ds(e,t){let s=new je(Fl(e));return t.forEach((r,o)=>{Ir(e,o)&&(s=s.add(o))}),s}Cs(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}Ss(e,t,s){return vn()<=he.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",wn(t)),this.ps.getDocumentsMatchingQuery(e,t,Kt.min(),s)}vs(e,t,s,r){return this.ps.getDocumentsMatchingQuery(e,s,r).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const Bi="LocalStore",Kf=3e8;class Qf{constructor(e,t,s,r){this.persistence=e,this.Fs=t,this.serializer=r,this.Ms=new Se(le),this.xs=new mn(o=>xi(o),Di),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Mf(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function Yf(n,e,t,s){return new Qf(n,e,t,s)}async function lc(n,e){const t=ne(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(o=>(r=o,t.Bs(e),t.mutationQueue.getAllMutationBatches(s))).next(o=>{const a=[],c=[];let h=ce();for(const d of r){a.push(d.batchId);for(const y of d.mutations)h=h.add(y.key)}for(const d of o){c.push(d.batchId);for(const y of d.mutations)h=h.add(y.key)}return t.localDocuments.getDocuments(s,h).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:c}))})})}function Jf(n,e){const t=ne(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),o=t.Ns.newChangeBuffer({trackRemovals:!0});return function(c,h,d,y){const I=d.batch,A=I.keys();let b=D.resolve();return A.forEach(x=>{b=b.next(()=>y.getEntry(h,x)).next(k=>{const P=d.docVersions.get(x);ge(P!==null,48541),k.version.compareTo(P)<0&&(I.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),y.addEntry(k)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(h,I))}(t,s,e,o).next(()=>o.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(c){let h=ce();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function cc(n){const e=ne(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function Xf(n,e){const t=ne(n),s=e.snapshotVersion;let r=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});r=t.Ms;const c=[];e.targetChanges.forEach((y,I)=>{const A=r.get(I);if(!A)return;c.push(t.Pi.removeMatchingKeys(o,y.removedDocuments,I).next(()=>t.Pi.addMatchingKeys(o,y.addedDocuments,I)));let b=A.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(I)!==null?b=b.withResumeToken(He.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):y.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(y.resumeToken,s)),r=r.insert(I,b),function(k,P,M){return k.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=Kf?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(A,b,y)&&c.push(t.Pi.updateTargetData(o,b))});let h=kt(),d=ce();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(o,y))}),c.push(Zf(o,a,e.documentUpdates).next(y=>{h=y.ks,d=y.qs})),!s.isEqual(te.min())){const y=t.Pi.getLastRemoteSnapshotVersion(o).next(I=>t.Pi.setTargetsMetadata(o,o.currentSequenceNumber,s));c.push(y)}return D.waitFor(c).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.Ms=r,o))}function Zf(n,e,t){let s=ce(),r=ce();return t.forEach(o=>s=s.add(o)),e.getEntries(n,s).next(o=>{let a=kt();return t.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(r=r.add(c)),h.isNoDocument()&&h.version.isEqual(te.min())?(e.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(c,h)):G(Bi,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{ks:a,qs:r}})}function em(n,e){const t=ne(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Ci),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function tm(n,e){const t=ne(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.Pi.getTargetData(s,e).next(o=>o?(r=o,D.resolve(r)):t.Pi.allocateTargetId(s).next(a=>(r=new Bt(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s})}async function gi(n,e,t){const s=ne(n),r=s.Ms.get(e),o=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",o,a=>s.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!jn(a))throw a;G(Bi,`Failed to update sequence numbers for target ${e}: ${a}`)}s.Ms=s.Ms.remove(e),s.xs.delete(r.target)}function Oa(n,e,t){const s=ne(n);let r=te.min(),o=ce();return s.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,y){const I=ne(h),A=I.xs.get(y);return A!==void 0?D.resolve(I.Ms.get(A)):I.Pi.getTargetData(d,y)}(s,a,At(e)).next(c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>s.Fs.getDocumentsMatchingQuery(a,e,t?r:te.min(),t?o:ce())).next(c=>(nm(s,Ud(e),c),{documents:c,Qs:o})))}function nm(n,e,t){let s=n.Os.get(e)||te.min();t.forEach((r,o)=>{o.readTime.compareTo(s)>0&&(s=o.readTime)}),n.Os.set(e,s)}class Ma{constructor(){this.activeTargetIds=Wd()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sm{constructor(){this.Mo=new Ma,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ma,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rm{Oo(e){}shutdown(){}}/**
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
 */const Fa="ConnectivityMonitor";class ja{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){G(Fa,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){G(Fa,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zs=null;function pi(){return zs===null?zs=function(){return 268435456+Math.round(2147483648*Math.random())}():zs++,"0x"+zs.toString(16)}/**
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
 */const Yr="RestConnection",im={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class om{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${r}`,this.Wo=this.databaseId.database===sr?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Go(e,t,s,r,o){const a=pi(),c=this.zo(e,t.toUriEncodedString());G(Yr,`Sending RPC '${e}' ${a}:`,c,s);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,r,o);const{host:d}=new URL(c),y=vi(d);return this.Jo(e,c,h,s,y).then(I=>(G(Yr,`Received RPC '${e}' ${a}: `,I),I),I=>{throw Pn(Yr,`RPC '${e}' ${a} failed with error: `,I,"url: ",c,"request:",s),I})}Ho(e,t,s,r,o,a){return this.Go(e,t,s,r,o)}jo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,o)=>e[o]=r),s&&s.headers.forEach((r,o)=>e[o]=r)}zo(e,t){const s=im[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
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
 */class am{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Je="WebChannelConnection";class lm extends om{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,r,o){const a=pi();return new Promise((c,h)=>{const d=new dl;d.setWithCredentials(!0),d.listenOnce(fl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case $s.NO_ERROR:const I=d.getResponseJson();G(Je,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(I)),c(I);break;case $s.TIMEOUT:G(Je,`RPC '${e}' ${a} timed out`),h(new H(L.DEADLINE_EXCEEDED,"Request time out"));break;case $s.HTTP_ERROR:const A=d.getStatus();if(G(Je,`RPC '${e}' ${a} failed with status:`,A,"response text:",d.getResponseText()),A>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const x=b?.error;if(x&&x.status&&x.message){const k=function(M){const U=M.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(U)>=0?U:L.UNKNOWN}(x.status);h(new H(k,x.message))}else h(new H(L.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new H(L.UNAVAILABLE,"Connection failed."));break;default:X(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{G(Je,`RPC '${e}' ${a} completed.`)}});const y=JSON.stringify(r);G(Je,`RPC '${e}' ${a} sending request:`,r),d.send(t,"POST",y,s,15)})}T_(e,t,s){const r=pi(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=pl(),c=gl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,t,s),h.encodeInitMessageHeaders=!0;const y=o.join("");G(Je,`Creating RPC '${e}' stream ${r}: ${y}`,h);const I=a.createWebChannel(y,h);this.I_(I);let A=!1,b=!1;const x=new am({Yo:P=>{b?G(Je,`Not sending because RPC '${e}' stream ${r} is closed:`,P):(A||(G(Je,`Opening RPC '${e}' stream ${r} transport.`),I.open(),A=!0),G(Je,`RPC '${e}' stream ${r} sending:`,P),I.send(P))},Zo:()=>I.close()}),k=(P,M,U)=>{P.listen(M,z=>{try{U(z)}catch(ie){setTimeout(()=>{throw ie},0)}})};return k(I,Xn.EventType.OPEN,()=>{b||(G(Je,`RPC '${e}' stream ${r} transport opened.`),x.o_())}),k(I,Xn.EventType.CLOSE,()=>{b||(b=!0,G(Je,`RPC '${e}' stream ${r} transport closed`),x.a_(),this.E_(I))}),k(I,Xn.EventType.ERROR,P=>{b||(b=!0,Pn(Je,`RPC '${e}' stream ${r} transport errored. Name:`,P.name,"Message:",P.message),x.a_(new H(L.UNAVAILABLE,"The operation could not be completed")))}),k(I,Xn.EventType.MESSAGE,P=>{if(!b){const M=P.data[0];ge(!!M,16349);const U=M,z=U?.error||U[0]?.error;if(z){G(Je,`RPC '${e}' stream ${r} received error:`,z);const ie=z.status;let pe=function(m){const p=De[m];if(p!==void 0)return Yl(p)}(ie),ee=z.message;pe===void 0&&(pe=L.INTERNAL,ee="Unknown error status: "+ie+" with message "+z.message),b=!0,x.a_(new H(pe,ee)),I.close()}else G(Je,`RPC '${e}' stream ${r} received:`,M),x.u_(M)}}),k(c,ml.STAT_EVENT,P=>{P.stat===ri.PROXY?G(Je,`RPC '${e}' stream ${r} detected buffering proxy`):P.stat===ri.NOPROXY&&G(Je,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{x.__()},0),x}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Jr(){return typeof document<"u"?document:null}/**
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
 */function vr(n){return new df(n,!0)}/**
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
 */class uc{constructor(e,t,s=1e3,r=1.5,o=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=r,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&G("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Ua="PersistentStream";class hc{constructor(e,t,s,r,o,a,c,h){this.Mi=e,this.S_=s,this.b_=r,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new uc(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(Lt(t.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.D_===t&&this.G_(s,r)},s=>{e(()=>{const r=new H(L.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)})})}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(r=>{s(()=>this.z_(r))}),this.stream.onMessage(r=>{s(()=>++this.F_==1?this.J_(r):this.onNext(r))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return G(Ua,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(G(Ua,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cm extends hc{constructor(e,t,s,r,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=o}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=gf(this.serializer,e),s=function(o){if(!("targetChange"in o))return te.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?te.min():a.readTime?wt(a.readTime):te.min()}(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=mi(this.serializer),t.addTarget=function(o,a){let c;const h=a.target;if(c=ci(h)?{documents:_f(o,h)}:{query:If(o,h).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Zl(o,a.resumeToken);const d=hi(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(te.min())>0){c.readTime=cr(o,a.snapshotVersion.toTimestamp());const d=hi(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const s=Tf(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=mi(this.serializer),t.removeTarget=e,this.q_(t)}}class um extends hc{constructor(e,t,s,r,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ge(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ge(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ge(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=yf(e.writeResults,e.commitTime),s=wt(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=mi(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>pf(this.serializer,s))};this.q_(t)}}/**
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
 */class hm{}class dm extends hm{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Go(e,di(t,s),r,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(L.UNKNOWN,o.toString())})}Ho(e,t,s,r,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(e,di(t,s),r,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new H(L.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class fm{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Lt(t),this.aa=!1):G("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const fn="RemoteStore";class mm{constructor(e,t,s,r,o){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo(a=>{s.enqueueAndForget(async()=>{gn(this)&&(G(fn,"Restarting streams for network reachability change."),await async function(h){const d=ne(h);d.Ea.add(4),await Es(d),d.Ra.set("Unknown"),d.Ea.delete(4),await wr(d)}(this))})}),this.Ra=new fm(s,r)}}async function wr(n){if(gn(n))for(const e of n.da)await e(!0)}async function Es(n){for(const e of n.da)await e(!1)}function dc(n,e){const t=ne(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Gi(t)?$i(t):Un(t).O_()&&zi(t,e))}function qi(n,e){const t=ne(n),s=Un(t);t.Ia.delete(e),s.O_()&&fc(t,e),t.Ia.size===0&&(s.O_()?s.L_():gn(t)&&t.Ra.set("Unknown"))}function zi(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Un(n).Y_(e)}function fc(n,e){n.Va.Ue(e),Un(n).Z_(e)}function $i(n){n.Va=new lf({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Un(n).start(),n.Ra.ua()}function Gi(n){return gn(n)&&!Un(n).x_()&&n.Ia.size>0}function gn(n){return ne(n).Ea.size===0}function mc(n){n.Va=void 0}async function gm(n){n.Ra.set("Online")}async function pm(n){n.Ia.forEach((e,t)=>{zi(n,e)})}async function ym(n,e){mc(n),Gi(n)?(n.Ra.ha(e),$i(n)):n.Ra.set("Unknown")}async function _m(n,e,t){if(n.Ra.set("Online"),e instanceof Xl&&e.state===2&&e.cause)try{await async function(r,o){const a=o.cause;for(const c of o.targetIds)r.Ia.has(c)&&(await r.remoteSyncer.rejectListen(c,a),r.Ia.delete(c),r.Va.removeTarget(c))}(n,e)}catch(s){G(fn,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await hr(n,s)}else if(e instanceof Ks?n.Va.Ze(e):e instanceof Jl?n.Va.st(e):n.Va.tt(e),!t.isEqual(te.min()))try{const s=await cc(n.localStore);t.compareTo(s)>=0&&await function(o,a){const c=o.Va.Tt(a);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const y=o.Ia.get(d);y&&o.Ia.set(d,y.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const y=o.Ia.get(h);if(!y)return;o.Ia.set(h,y.withResumeToken(He.EMPTY_BYTE_STRING,y.snapshotVersion)),fc(o,h);const I=new Bt(y.target,h,d,y.sequenceNumber);zi(o,I)}),o.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(s){G(fn,"Failed to raise snapshot:",s),await hr(n,s)}}async function hr(n,e,t){if(!jn(e))throw e;n.Ea.add(1),await Es(n),n.Ra.set("Offline"),t||(t=()=>cc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{G(fn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await wr(n)})}function gc(n,e){return e().catch(t=>hr(n,t,e))}async function Rr(n){const e=ne(n),t=Xt(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ci;for(;Im(e);)try{const r=await em(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,Em(e,r)}catch(r){await hr(e,r)}pc(e)&&yc(e)}function Im(n){return gn(n)&&n.Ta.length<10}function Em(n,e){n.Ta.push(e);const t=Xt(n);t.O_()&&t.X_&&t.ea(e.mutations)}function pc(n){return gn(n)&&!Xt(n).x_()&&n.Ta.length>0}function yc(n){Xt(n).start()}async function Tm(n){Xt(n).ra()}async function Am(n){const e=Xt(n);for(const t of n.Ta)e.ea(t.mutations)}async function vm(n,e,t){const s=n.Ta.shift(),r=ki.from(s,e,t);await gc(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await Rr(n)}async function wm(n,e){e&&Xt(n).X_&&await async function(s,r){if(function(a){return rf(a)&&a!==L.ABORTED}(r.code)){const o=s.Ta.shift();Xt(s).B_(),await gc(s,()=>s.remoteSyncer.rejectFailedWrite(o.batchId,r)),await Rr(s)}}(n,e),pc(n)&&yc(n)}async function Ba(n,e){const t=ne(n);t.asyncQueue.verifyOperationInProgress(),G(fn,"RemoteStore received new credentials");const s=gn(t);t.Ea.add(3),await Es(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await wr(t)}async function Rm(n,e){const t=ne(n);e?(t.Ea.delete(2),await wr(t)):e||(t.Ea.add(2),await Es(t),t.Ra.set("Unknown"))}function Un(n){return n.ma||(n.ma=function(t,s,r){const o=ne(t);return o.sa(),new cm(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)}(n.datastore,n.asyncQueue,{Xo:gm.bind(null,n),t_:pm.bind(null,n),r_:ym.bind(null,n),H_:_m.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),Gi(n)?$i(n):n.Ra.set("Unknown")):(await n.ma.stop(),mc(n))})),n.ma}function Xt(n){return n.fa||(n.fa=function(t,s,r){const o=ne(t);return o.sa(),new um(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Tm.bind(null,n),r_:wm.bind(null,n),ta:Am.bind(null,n),na:vm.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await Rr(n)):(await n.fa.stop(),n.Ta.length>0&&(G(fn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class Wi{constructor(e,t,s,r,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=o,this.deferred=new Gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,o){const a=Date.now()+s,c=new Wi(e,t,a,r,o);return c.start(s),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hi(n,e){if(Lt("AsyncQueue",`${e}: ${n}`),jn(n))return new H(L.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Cn{static emptySet(e){return new Cn(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||Q.comparator(t.key,s.key):(t,s)=>Q.comparator(t.key,s.key),this.keyedMap=Zn(),this.sortedSet=new Se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Cn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=s.getNext().key;if(!r.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Cn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class qa{constructor(){this.ga=new Se(Q.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):X(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,s)=>{e.push(s)}),e}}class Ln{constructor(e,t,s,r,o,a,c,h,d){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,s,r,o){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Ln(e,t,Cn.emptySet(t),a,s,r,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_r(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Sm{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class bm{constructor(){this.queries=za(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=ne(t),o=r.queries;r.queries=za(),o.forEach((a,c)=>{for(const h of c.Sa)h.onError(s)})})(this,new H(L.ABORTED,"Firestore shutting down"))}}function za(){return new mn(n=>Ml(n),_r)}async function Cm(n,e){const t=ne(n);let s=3;const r=e.query;let o=t.queries.get(r);o?!o.ba()&&e.Da()&&(s=2):(o=new Sm,s=e.Da()?0:1);try{switch(s){case 0:o.wa=await t.onListen(r,!0);break;case 1:o.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const c=Hi(a,`Initialization of query '${wn(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,o),o.Sa.push(e),e.va(t.onlineState),o.wa&&e.Fa(o.wa)&&Ki(t)}async function Pm(n,e){const t=ne(n),s=e.query;let r=3;const o=t.queries.get(s);if(o){const a=o.Sa.indexOf(e);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?r=e.Da()?0:1:!o.ba()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Vm(n,e){const t=ne(n);let s=!1;for(const r of e){const o=r.query,a=t.queries.get(o);if(a){for(const c of a.Sa)c.Fa(r)&&(s=!0);a.wa=r}}s&&Ki(t)}function xm(n,e,t){const s=ne(n),r=s.queries.get(e);if(r)for(const o of r.Sa)o.onError(t);s.queries.delete(e)}function Ki(n){n.Ca.forEach(e=>{e.next()})}var yi,$a;($a=yi||(yi={})).Ma="default",$a.Cache="cache";class Dm{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ln(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ln.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==yi.Cache}}/**
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
 */class _c{constructor(e){this.key=e}}class Ic{constructor(e){this.key=e}}class Nm{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ce(),this.mutatedKeys=ce(),this.eu=Fl(e),this.tu=new Cn(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new qa,r=t?t.tu:this.tu;let o=t?t.mutatedKeys:this.mutatedKeys,a=r,c=!1;const h=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,d=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((y,I)=>{const A=r.get(y),b=Ir(this.query,I)?I:null,x=!!A&&this.mutatedKeys.has(A.key),k=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let P=!1;A&&b?A.data.isEqual(b.data)?x!==k&&(s.track({type:3,doc:b}),P=!0):this.su(A,b)||(s.track({type:2,doc:b}),P=!0,(h&&this.eu(b,h)>0||d&&this.eu(b,d)<0)&&(c=!0)):!A&&b?(s.track({type:0,doc:b}),P=!0):A&&!b&&(s.track({type:1,doc:A}),P=!0,(h||d)&&(c=!0)),P&&(b?(a=a.add(b),o=k?o.add(y):o.delete(y)):(a=a.delete(y),o=o.delete(y)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const y=this.query.limitType==="F"?a.last():a.first();a=a.delete(y.key),o=o.delete(y.key),s.track({type:1,doc:y})}return{tu:a,iu:s,Cs:c,mutatedKeys:o}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((y,I)=>function(b,x){const k=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{Rt:P})}};return k(b)-k(x)}(y.type,I.type)||this.eu(y.doc,I.doc)),this.ou(s),r=r??!1;const c=t&&!r?this._u():[],h=this.Xa.size===0&&this.current&&!r?1:0,d=h!==this.Za;return this.Za=h,a.length!==0||d?{snapshot:new Ln(this.query,e.tu,o,a,e.mutatedKeys,h===0,d,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new qa,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ce(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const t=[];return e.forEach(s=>{this.Xa.has(s)||t.push(new Ic(s))}),this.Xa.forEach(s=>{e.has(s)||t.push(new _c(s))}),t}cu(e){this.Ya=e.Qs,this.Xa=ce();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ln.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Qi="SyncEngine";class Lm{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class km{constructor(e){this.key=e,this.hu=!1}}class Om{constructor(e,t,s,r,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new mn(c=>Ml(c),_r),this.Iu=new Map,this.Eu=new Set,this.du=new Se(Q.comparator),this.Au=new Map,this.Ru=new Fi,this.Vu={},this.mu=new Map,this.fu=Nn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Mm(n,e,t=!0){const s=Rc(n);let r;const o=s.Tu.get(e);return o?(s.sharedClientState.addLocalQueryTarget(o.targetId),r=o.view.lu()):r=await Ec(s,e,t,!0),r}async function Fm(n,e){const t=Rc(n);await Ec(t,e,!0,!1)}async function Ec(n,e,t,s){const r=await tm(n.localStore,At(e)),o=r.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let c;return s&&(c=await jm(n,e,o,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&dc(n.remoteStore,r),c}async function jm(n,e,t,s,r){n.pu=(I,A,b)=>async function(k,P,M,U){let z=P.view.ru(M);z.Cs&&(z=await Oa(k.localStore,P.query,!1).then(({documents:E})=>P.view.ru(E,z)));const ie=U&&U.targetChanges.get(P.targetId),pe=U&&U.targetMismatches.get(P.targetId)!=null,ee=P.view.applyChanges(z,k.isPrimaryClient,ie,pe);return Wa(k,P.targetId,ee.au),ee.snapshot}(n,I,A,b);const o=await Oa(n.localStore,e,!0),a=new Nm(e,o.Qs),c=a.ru(o.documents),h=Is.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),d=a.applyChanges(c,n.isPrimaryClient,h);Wa(n,t,d.au);const y=new Lm(e,t,a);return n.Tu.set(e,y),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function Um(n,e,t){const s=ne(n),r=s.Tu.get(e),o=s.Iu.get(r.targetId);if(o.length>1)return s.Iu.set(r.targetId,o.filter(a=>!_r(a,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await gi(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),t&&qi(s.remoteStore,r.targetId),_i(s,r.targetId)}).catch(Fn)):(_i(s,r.targetId),await gi(s.localStore,r.targetId,!0))}async function Bm(n,e){const t=ne(n),s=t.Tu.get(e),r=t.Iu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),qi(t.remoteStore,s.targetId))}async function qm(n,e,t){const s=Qm(n);try{const r=await function(a,c){const h=ne(a),d=we.now(),y=c.reduce((b,x)=>b.add(x.key),ce());let I,A;return h.persistence.runTransaction("Locally write mutations","readwrite",b=>{let x=kt(),k=ce();return h.Ns.getEntries(b,y).next(P=>{x=P,x.forEach((M,U)=>{U.isValidDocument()||(k=k.add(M))})}).next(()=>h.localDocuments.getOverlayedDocuments(b,x)).next(P=>{I=P;const M=[];for(const U of c){const z=Zd(U,I.get(U.key).overlayedDocument);z!=null&&M.push(new tn(U.key,z,Vl(z.value.mapValue),vt.exists(!0)))}return h.mutationQueue.addMutationBatch(b,d,M,c)}).next(P=>{A=P;const M=P.applyToLocalDocumentSet(I,k);return h.documentOverlayCache.saveOverlays(b,P.batchId,M)})}).then(()=>({batchId:A.batchId,changes:Ul(I)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(a,c,h){let d=a.Vu[a.currentUser.toKey()];d||(d=new Se(le)),d=d.insert(c,h),a.Vu[a.currentUser.toKey()]=d}(s,r.batchId,t),await Ts(s,r.changes),await Rr(s.remoteStore)}catch(r){const o=Hi(r,"Failed to persist write");t.reject(o)}}async function Tc(n,e){const t=ne(n);try{const s=await Xf(t.localStore,e);e.targetChanges.forEach((r,o)=>{const a=t.Au.get(o);a&&(ge(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.hu=!0:r.modifiedDocuments.size>0?ge(a.hu,14607):r.removedDocuments.size>0&&(ge(a.hu,42227),a.hu=!1))}),await Ts(t,s,e)}catch(s){await Fn(s)}}function Ga(n,e,t){const s=ne(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach((o,a)=>{const c=a.view.va(e);c.snapshot&&r.push(c.snapshot)}),function(a,c){const h=ne(a);h.onlineState=c;let d=!1;h.queries.forEach((y,I)=>{for(const A of I.Sa)A.va(c)&&(d=!0)}),d&&Ki(h)}(s.eventManager,e),r.length&&s.Pu.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function zm(n,e,t){const s=ne(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Au.get(e),o=r&&r.key;if(o){let a=new Se(Q.comparator);a=a.insert(o,Ze.newNoDocument(o,te.min()));const c=ce().add(o),h=new Ar(te.min(),new Map,new Se(le),a,c);await Tc(s,h),s.du=s.du.remove(o),s.Au.delete(e),Yi(s)}else await gi(s.localStore,e,!1).then(()=>_i(s,e,t)).catch(Fn)}async function $m(n,e){const t=ne(n),s=e.batch.batchId;try{const r=await Jf(t.localStore,e);vc(t,s,null),Ac(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ts(t,r)}catch(r){await Fn(r)}}async function Gm(n,e,t){const s=ne(n);try{const r=await function(a,c){const h=ne(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let y;return h.mutationQueue.lookupMutationBatch(d,c).next(I=>(ge(I!==null,37113),y=I.keys(),h.mutationQueue.removeMutationBatch(d,I))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,y,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,y)).next(()=>h.localDocuments.getDocuments(d,y))})}(s.localStore,e);vc(s,e,t),Ac(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ts(s,r)}catch(r){await Fn(r)}}function Ac(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function vc(n,e,t){const s=ne(n);let r=s.Vu[s.currentUser.toKey()];if(r){const o=r.get(e);o&&(t?o.reject(t):o.resolve(),r=r.remove(e)),s.Vu[s.currentUser.toKey()]=r}}function _i(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(s=>{n.Ru.containsKey(s)||wc(n,s)})}function wc(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(qi(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Yi(n))}function Wa(n,e,t){for(const s of t)s instanceof _c?(n.Ru.addReference(s.key,e),Wm(n,s)):s instanceof Ic?(G(Qi,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||wc(n,s.key)):X(19791,{wu:s})}function Wm(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(G(Qi,"New document in limbo: "+t),n.Eu.add(s),Yi(n))}function Yi(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new Q(ve.fromString(e)),s=n.fu.next();n.Au.set(s,new km(t)),n.du=n.du.insert(t,s),dc(n.remoteStore,new Bt(At(Ni(t.path)),s,"TargetPurposeLimboResolution",mr.ce))}}async function Ts(n,e,t){const s=ne(n),r=[],o=[],a=[];s.Tu.isEmpty()||(s.Tu.forEach((c,h)=>{a.push(s.pu(h,e,t).then(d=>{if((d||t)&&s.isPrimaryClient){const y=d?!d.fromCache:t?.targetChanges.get(h.targetId)?.current;s.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(d){r.push(d);const y=Ui.As(h.targetId,d);o.push(y)}}))}),await Promise.all(a),s.Pu.H_(r),await async function(h,d){const y=ne(h);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>D.forEach(d,A=>D.forEach(A.Es,b=>y.persistence.referenceDelegate.addReference(I,A.targetId,b)).next(()=>D.forEach(A.ds,b=>y.persistence.referenceDelegate.removeReference(I,A.targetId,b)))))}catch(I){if(!jn(I))throw I;G(Bi,"Failed to update sequence numbers: "+I)}for(const I of d){const A=I.targetId;if(!I.fromCache){const b=y.Ms.get(A),x=b.snapshotVersion,k=b.withLastLimboFreeSnapshotVersion(x);y.Ms=y.Ms.insert(A,k)}}}(s.localStore,o))}async function Hm(n,e){const t=ne(n);if(!t.currentUser.isEqual(e)){G(Qi,"User change. New user:",e.toKey());const s=await lc(t.localStore,e);t.currentUser=e,function(o,a){o.mu.forEach(c=>{c.forEach(h=>{h.reject(new H(L.CANCELLED,a))})}),o.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ts(t,s.Ls)}}function Km(n,e){const t=ne(n),s=t.Au.get(e);if(s&&s.hu)return ce().add(s.key);{let r=ce();const o=t.Iu.get(e);if(!o)return r;for(const a of o){const c=t.Tu.get(a);r=r.unionWith(c.view.nu)}return r}}function Rc(n){const e=ne(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Tc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Km.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zm.bind(null,e),e.Pu.H_=Vm.bind(null,e.eventManager),e.Pu.yu=xm.bind(null,e.eventManager),e}function Qm(n){const e=ne(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$m.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Gm.bind(null,e),e}class dr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vr(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Yf(this.persistence,new Hf,e.initialUser,this.serializer)}Cu(e){return new ac(ji.mi,this.serializer)}Du(e){return new sm}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}dr.provider={build:()=>new dr};class Ym extends dr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ge(this.persistence.referenceDelegate instanceof ur,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Df(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?rt.withCacheSize(this.cacheSizeBytes):rt.DEFAULT;return new ac(s=>ur.mi(s,t),this.serializer)}}class Ii{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ga(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hm.bind(null,this.syncEngine),await Rm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bm}()}createDatastore(e){const t=vr(e.databaseInfo.databaseId),s=function(o){return new lm(o)}(e.databaseInfo);return function(o,a,c,h){return new dm(o,a,c,h)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,r,o,a,c){return new mm(s,r,o,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Ga(this.syncEngine,t,0),function(){return ja.v()?new ja:new rm}())}createSyncEngine(e,t){return function(r,o,a,c,h,d,y){const I=new Om(r,o,a,c,h,d);return y&&(I.gu=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const s=ne(t);G(fn,"RemoteStore shutting down."),s.Ea.add(5),await Es(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ii.provider={build:()=>new Ii};/**
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
 */class Jm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Lt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Zt="FirestoreClient";class Xm{constructor(e,t,s,r,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=Xe.UNAUTHENTICATED,this.clientId=Si.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(s,async a=>{G(Zt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(s,a=>(G(Zt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Hi(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Xr(n,e){n.asyncQueue.verifyOperationInProgress(),G(Zt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await lc(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ha(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Zm(n);G(Zt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>Ba(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>Ba(e.remoteStore,r)),n._onlineComponents=e}async function Zm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){G(Zt,"Using user provided OfflineComponentProvider");try{await Xr(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===L.FAILED_PRECONDITION||r.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;Pn("Error using user provided cache. Falling back to memory cache: "+t),await Xr(n,new dr)}}else G(Zt,"Using default OfflineComponentProvider"),await Xr(n,new Ym(void 0));return n._offlineComponents}async function Sc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(G(Zt,"Using user provided OnlineComponentProvider"),await Ha(n,n._uninitializedComponentsProvider._online)):(G(Zt,"Using default OnlineComponentProvider"),await Ha(n,new Ii))),n._onlineComponents}function eg(n){return Sc(n).then(e=>e.syncEngine)}async function tg(n){const e=await Sc(n),t=e.eventManager;return t.onListen=Mm.bind(null,e.syncEngine),t.onUnlisten=Um.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Fm.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Bm.bind(null,e.syncEngine),t}function ng(n,e,t={}){const s=new Gt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const y=new Jm({next:A=>{y.Nu(),a.enqueueAndForget(()=>Pm(o,I));const b=A.docs.has(c);!b&&A.fromCache?d.reject(new H(L.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&A.fromCache&&h&&h.source==="server"?d.reject(new H(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(A)},error:A=>d.reject(A)}),I=new Dm(Ni(c.path),y,{includeMetadataChanges:!0,qa:!0});return Cm(o,I)}(await tg(n),n.asyncQueue,e,t,s)),s.promise}/**
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
 */function bc(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Ka=new Map;/**
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
 */const Cc="firestore.googleapis.com",Qa=!0;class Ya{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Cc,this.ssl=Qa}else this.host=e.host,this.ssl=e.ssl??Qa;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=oc;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Vf)throw new H(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dd("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bc(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sr{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ya({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ya(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new nd;switch(s.type){case"firstParty":return new od(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new H(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Ka.get(t);s&&(G("ComponentProvider","Removing Datastore"),Ka.delete(t),s.terminate())}(this),Promise.resolve()}}function sg(n,e,t,s={}){n=dn(n,Sr);const r=vi(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;r&&(xu(`https://${c}`),ku("Firestore",!0)),o.host!==Cc&&o.host!==c&&Pn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:c,ssl:r,emulatorOptions:s};if(!Zs(h,a)&&(n._setSettings(h),s.mockUserToken)){let d,y;if(typeof s.mockUserToken=="string")d=s.mockUserToken,y=Xe.MOCK_USER;else{d=Du(s.mockUserToken,n._app?.options.projectId);const I=s.mockUserToken.sub||s.mockUserToken.user_id;if(!I)throw new H(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Xe(I)}n._authCredentials=new sd(new _l(d,y))}}/**
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
 */class Ji{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ji(this.firestore,e,this._query)}}class Le{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}toJSON(){return{type:Le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ys(t,Le._jsonSchema))return new Le(e,s||null,new Q(ve.fromString(t.referencePath)))}}Le._jsonSchemaVersion="firestore/documentReference/1.0",Le._jsonSchema={type:Ne("string",Le._jsonSchemaVersion),referencePath:Ne("string")};class Wt extends Ji{constructor(e,t,s){super(e,t,Ni(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new Q(e))}withConverter(e){return new Wt(this.firestore,e,this._path)}}function rg(n,e,...t){if(n=Ht(n),Il("collection","path",e),n instanceof Sr){const s=ve.fromString(e,...t);return ua(s),new Wt(n,null,s)}{if(!(n instanceof Le||n instanceof Wt))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ve.fromString(e,...t));return ua(s),new Wt(n.firestore,null,s)}}function kn(n,e,...t){if(n=Ht(n),arguments.length===1&&(e=Si.newId()),Il("doc","path",e),n instanceof Sr){const s=ve.fromString(e,...t);return ca(s),new Le(n,null,new Q(s))}{if(!(n instanceof Le||n instanceof Wt))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ve.fromString(e,...t));return ca(s),new Le(n.firestore,n instanceof Wt?n.converter:null,new Q(s))}}/**
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
 */const Ja="AsyncQueue";class Xa{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new uc(this,"async_queue_retry"),this._c=()=>{const s=Jr();s&&G(Ja,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Jr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Jr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Gt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!jn(e))throw e;G(Ja,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,Lt("INTERNAL UNHANDLED ERROR: ",Za(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Wi.createAndSchedule(this,e,t,s,o=>this.hc(o));return this.tc.push(r),r}uc(){this.nc&&X(47125,{Pc:Za(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Za(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class br extends Sr{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Xa,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xa(e),this._firestoreClient=void 0,await e}}}function ig(n,e){const t=typeof n=="object"?n:Gh(),s=typeof n=="string"?n:sr,r=Uh(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const o=Pu("firestore");o&&sg(r,...o)}return r}function Pc(n){if(n._terminated)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||og(n),n._firestoreClient}function og(n){const e=n._freezeSettings(),t=function(r,o,a,c){return new vd(r,o,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,bc(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)}(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Xm(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(r){const o=r?._online.build();return{_offline:r?._offline.build(o),_online:o}}(n._componentsProvider))}/**
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
 */class mt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mt(He.fromBase64String(e))}catch(t){throw new H(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new mt(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:mt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ys(e,mt._jsonSchema))return mt.fromBase64String(e.bytes)}}mt._jsonSchemaVersion="firestore/bytes/1.0",mt._jsonSchema={type:Ne("string",mt._jsonSchemaVersion),bytes:Ne("string")};/**
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
 */class Cr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new H(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Xi{constructor(e){this._methodName=e}}/**
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
 */class Rt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new H(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new H(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Rt._jsonSchemaVersion}}static fromJSON(e){if(ys(e,Rt._jsonSchema))return new Rt(e.latitude,e.longitude)}}Rt._jsonSchemaVersion="firestore/geoPoint/1.0",Rt._jsonSchema={type:Ne("string",Rt._jsonSchemaVersion),latitude:Ne("number"),longitude:Ne("number")};/**
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
 */class St{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let o=0;o<s.length;++o)if(s[o]!==r[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:St._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ys(e,St._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new St(e.vectorValues);throw new H(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}St._jsonSchemaVersion="firestore/vectorValue/1.0",St._jsonSchema={type:Ne("string",St._jsonSchemaVersion),vectorValues:Ne("object")};/**
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
 */const ag=/^__.*__$/;class lg{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new tn(e,this.data,this.fieldMask,t,this.fieldTransforms):new _s(e,this.data,t,this.fieldTransforms)}}class Vc{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new tn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function xc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X(40011,{Ac:n})}}class Zi{constructor(e,t,s,r,o,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Zi({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return fr(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(xc(this.Ac)&&ag.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class cg{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||vr(e)}Cc(e,t,s,r=!1){return new Zi({Ac:e,methodName:t,Dc:s,path:We.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dc(n){const e=n._freezeSettings(),t=vr(n._databaseId);return new cg(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ug(n,e,t,s,r,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,e,t,r);eo("Data must be an object, but it was:",a,s);const c=Nc(s,a);let h,d;if(o.merge)h=new ut(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const y=[];for(const I of o.mergeFields){const A=Ei(e,I,t);if(!a.contains(A))throw new H(L.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);kc(y,A)||y.push(A)}h=new ut(y),d=a.fieldTransforms.filter(I=>h.covers(I.field))}else h=null,d=a.fieldTransforms;return new lg(new it(c),h,d)}class Pr extends Xi{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Pr}}function hg(n,e,t,s){const r=n.Cc(1,e,t);eo("Data must be an object, but it was:",r,s);const o=[],a=it.empty();en(s,(h,d)=>{const y=to(e,h,t);d=Ht(d);const I=r.yc(y);if(d instanceof Pr)o.push(y);else{const A=Vr(d,I);A!=null&&(o.push(y),a.set(y,A))}});const c=new ut(o);return new Vc(a,c,r.fieldTransforms)}function dg(n,e,t,s,r,o){const a=n.Cc(1,e,t),c=[Ei(e,s,t)],h=[r];if(o.length%2!=0)throw new H(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<o.length;A+=2)c.push(Ei(e,o[A])),h.push(o[A+1]);const d=[],y=it.empty();for(let A=c.length-1;A>=0;--A)if(!kc(d,c[A])){const b=c[A];let x=h[A];x=Ht(x);const k=a.yc(b);if(x instanceof Pr)d.push(b);else{const P=Vr(x,k);P!=null&&(d.push(b),y.set(b,P))}}const I=new ut(d);return new Vc(y,I,a.fieldTransforms)}function Vr(n,e){if(Lc(n=Ht(n)))return eo("Unsupported field value:",e,n),Nc(n,e);if(n instanceof Xi)return function(s,r){if(!xc(r.Ac))throw r.Sc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(r);o&&r.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(s,r){const o=[];let a=0;for(const c of s){let h=Vr(c,r.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(s,r){if((s=Ht(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Hd(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const o=we.fromDate(s);return{timestampValue:cr(r.serializer,o)}}if(s instanceof we){const o=new we(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:cr(r.serializer,o)}}if(s instanceof Rt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof mt)return{bytesValue:Zl(r.serializer,s._byteString)};if(s instanceof Le){const o=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(o))throw r.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Mi(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof St)return function(a,c){return{mapValue:{fields:{[Cl]:{stringValue:Pl},[rr]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.Sc("VectorValues must only contain numeric values.");return Li(c.serializer,d)})}}}}}}(s,r);throw r.Sc(`Unsupported field value: ${bi(s)}`)}(n,e)}function Nc(n,e){const t={};return Al(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):en(n,(s,r)=>{const o=Vr(r,e.mc(s));o!=null&&(t[s]=o)}),{mapValue:{fields:t}}}function Lc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof we||n instanceof Rt||n instanceof mt||n instanceof Le||n instanceof Xi||n instanceof St)}function eo(n,e,t){if(!Lc(t)||!El(t)){const s=bi(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function Ei(n,e,t){if((e=Ht(e))instanceof Cr)return e._internalPath;if(typeof e=="string")return to(n,e);throw fr("Field path arguments must be of type string or ",n,!1,void 0,t)}const fg=new RegExp("[~\\*/\\[\\]]");function to(n,e,t){if(e.search(fg)>=0)throw fr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Cr(...e.split("."))._internalPath}catch{throw fr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function fr(n,e,t,s,r){const o=s&&!s.isEmpty(),a=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${s}`),a&&(h+=` in document ${r}`),h+=")"),new H(L.INVALID_ARGUMENT,c+n+h)}function kc(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Oc{constructor(e,t,s,r,o){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Mc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class mg extends Oc{data(){return super.data()}}function Mc(n,e){return typeof e=="string"?to(n,e):e instanceof Cr?e._internalPath:e._delegate._internalPath}class gg{convertValue(e,t="none"){switch(Jt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Yt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return en(e,(r,o)=>{s[r]=this.convertValue(o,t)}),s}convertVectorValue(e){const t=e.fields?.[rr].arrayValue?.values?.map(s=>Ve(s.doubleValue));return new St(t)}convertGeoPoint(e){return new Rt(Ve(e.latitude),Ve(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=pr(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(ds(e));default:return null}}convertTimestamp(e){const t=Qt(e);return new we(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ve.fromString(e);ge(ic(s),9688,{name:e});const r=new fs(s.get(1),s.get(3)),o=new Q(s.popFirst(5));return r.isEqual(t)||Lt(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */function pg(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class ts{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class un extends Oc{constructor(e,t,s,r,o,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Mc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=un._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}un._jsonSchemaVersion="firestore/documentSnapshot/1.0",un._jsonSchema={type:Ne("string",un._jsonSchemaVersion),bundleSource:Ne("string","DocumentSnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class Qs extends un{data(e={}){return super.data(e)}}class as{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ts(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Qs(this._firestore,this._userDataWriter,s.key,s,new ts(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new H(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,o){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(c=>{const h=new Qs(r._firestore,r._userDataWriter,c.doc.key,c.doc,new ts(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new Qs(r._firestore,r._userDataWriter,c.doc.key,c.doc,new ts(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let d=-1,y=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),y=a.indexOf(c.doc.key)),{type:yg(c.type),doc:h,oldIndex:d,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=as._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Si.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach(o=>{o._document!==null&&(t.push(o._document),s.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),r.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function yg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:n})}}/**
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
 */function _g(n){n=dn(n,Le);const e=dn(n.firestore,br);return ng(Pc(e),n._key).then(t=>Ag(e,n,t))}as._jsonSchemaVersion="firestore/querySnapshot/1.0",as._jsonSchema={type:Ne("string",as._jsonSchemaVersion),bundleSource:Ne("string","QuerySnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class Ig extends gg{constructor(e){super(),this.firestore=e}convertBytes(e){return new mt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,t)}}function Eg(n,e,t){n=dn(n,Le);const s=dn(n.firestore,br),r=pg(n.converter,e);return Fc(s,[ug(Dc(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,vt.none())])}function Tg(n,e,t,...s){n=dn(n,Le);const r=dn(n.firestore,br),o=Dc(r);let a;return a=typeof(e=Ht(e))=="string"||e instanceof Cr?dg(o,"updateDoc",n._key,e,t,s):hg(o,"updateDoc",n._key,e),Fc(r,[a.toMutation(n._key,vt.exists(!0))])}function Fc(n,e){return function(s,r){const o=new Gt;return s.asyncQueue.enqueueAndForget(async()=>qm(await eg(s),r,o)),o.promise}(Pc(n),e)}function Ag(n,e,t){const s=t.docs.get(e._key),r=new Ig(n);return new un(n,r,e._key,s,new ts(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(r){Mn=r})($h),tr(new cs("firestore",(s,{instanceIdentifier:r,options:o})=>{const a=s.getProvider("app").getImmediate(),c=new br(new rd(s.getProvider("auth-internal")),new ad(a,s.getProvider("app-check-internal")),function(d,y){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new H(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fs(d.options.projectId,y)}(a,r),a);return o={useFetchStreams:t,...o},c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),bn(ia,oa,e),bn(ia,oa,"esm2020")})();var vg="firebase",wg="12.0.0";/**
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
 */bn(vg,wg,"app");const Rg={apiKey:"AIzaSyDL8XA6JF2L5pyz6hZPkYxCLIdwTJCR4-Y",authDomain:"kazoom-layitout.firebaseapp.com",projectId:"kazoom-layitout",storageBucket:"kazoom-layitout.firebasestorage.app",messagingSenderId:"1054171031364",appId:"1:1054171031364:web:ffc4a80699a6c297aa9911"},Sg=ll(Rg);function bg(){return[]}function jc(){return new ls({name:"Local Area",id:"vY4BHs3ebZZ1MUnqTEi7",templates:bg(),inventoryItems:[new gt({quantity:60,item:new de({id:"1",name:"Chair",cellsLong:2,cellsTall:2,icon:"https://github.com/TrackerJo/LayItOut/blob/main/src/assets/Chair.png?raw=true",displayItem:!0})}),new gt({quantity:4,item:new de({id:"2",name:"Table",cellsLong:8,cellsTall:4,icon:"https://github.com/TrackerJo/LayItOut/blob/main/src/assets/rectangle_Table.png?raw=true",displayItem:!0})}),new gt({quantity:8,item:new de({id:"3",name:"Rounded Table",cellsLong:4,cellsTall:4,icon:"https://github.com/TrackerJo/LayItOut/blob/main/src/assets/rounded_table.png?raw=true",displayItem:!0})})],sections:[new Ce({cellId:new Z({x:0,y:200}),cellsLong:500,cellsTall:300,startingItems:[new Et({cell:new Z({x:0,y:0}),item:new de({id:"Table2",name:"Table",cellsLong:8,cellsTall:4,icon:"https://github.com/TrackerJo/LayItOut/blob/main/src/assets/rectangle_Table.png?raw=true",starterItem:!0,rotation:1})})],name:"Main Area"}),new Ce({cellId:new Z({x:500,y:200}),cellsLong:300,cellsTall:200,startingItems:[],name:"Outdoor Area"}),new Ce({cellId:new Z({x:400,y:0}),cellsLong:100,cellsTall:200,startingItems:[],name:"Hallway"}),new Ce({cellId:new Z({x:500,y:0}),cellsLong:300,cellsTall:200,startingItems:[],name:"Veranda"}),new Ce({cellId:new Z({x:0,y:500}),cellsLong:300,cellsTall:100,startingItems:[],name:"Kitchen"})]})}const Cg=ig(Sg),no=rg(Cg,"companies");async function Pg(n,e){{const t=kn(no,n),s=kn(t,"areas",e),r=await _g(s);if(r.exists()){const o=r.data();return ls.fromDoc(o)}else return console.error("No such area document!"),jc()}}async function Vg(n,e){{const t=kn(no,n),s=kn(t,"areas",e.id);await Eg(s,e.toDoc())}}async function xg(n,e,t){{const s=kn(no,n),r=kn(s,"areas",e);await Tg(r,{templates:t.map(o=>o.toDoc())})}}cu.createRoot(document.getElementById("root")).render(N.jsx(Dg,{}));function Dg(){const[n,e]=$.useState(/Mobi|Android/i.test(navigator.userAgent)),[t,s]=$.useState(0),[r,o]=$.useState(0),[a,c]=$.useState([]),[h,d]=$.useState([]),[y,I]=$.useState(0),[A,b]=$.useState(null),[x,k]=$.useState([]),P=/Mobi|Android/i.test(navigator.userAgent)?5:10,[M,U]=$.useState([]),z=$.useRef(null),[ie,pe]=$.useState(!1),[ee,E]=$.useState([]),[m,p]=$.useState([]),[g,T]=$.useState([]),[w,_]=$.useState(!1),Ke=$.useRef(null),[Pt,ke]=$.useState([]),[Oe,ot]=$.useState([]),[Ee,at]=$.useState(null),[ht,nt]=$.useState(!1),[Te,pn]=$.useState(!1),[lt,_t]=$.useState(""),[dt,Bn]=$.useState(""),[K,oe]=$.useState(""),[re,ae]=$.useState(!0),[Me,me]=$.useState(null),Pe=$.useRef(null);function Ue(v,V){for(const F of V)if(v.x>=F.cellId.x&&v.x<F.cellId.x+F.cellsLong&&v.y>=F.cellId.y&&v.y<F.cellId.y+F.cellsTall)return F;return null}function Vt(v){E([...v.map(O=>new Ce({name:O.name,cellId:new Z({x:O.cellId.x/2,y:O.cellId.y/2}),cellsLong:O.cellsLong/2,cellsTall:O.cellsTall/2,startingItems:[]}))]);let V=t,F=r;if(n){let O=0;const Y=[],q=[];for(const R of v){const j=[],se={width:R.cellsLong*P,height:R.cellsTall*P,sectionName:R.name};se.height>O&&(O=se.height),ke(xe=>[...xe,se]),R.cellId.x=0,R.cellId.y=0,[...Array(se.height/P).keys()].map(xe=>{const ye=[];[...Array(se.width/P).keys()].map(_e=>{ye.push({id:new Z({x:_e,y:xe}),hasItem:!1,itemId:"",mouseOver:!1,canPlaceItem:!1,mouseOverLocation:"",inSection:!0,size:P})}),j.push(ye)}),Y.push({sectionName:R.name,cells:[...j]}),q.push(R)}ot(Y),p(q),I(O),at(v[0]?v[0].name:null),setTimeout(()=>{ae(!1)},500)}else{const O=[];for(const Y of v)console.log("Generating cells for section",Y.name,"at",Y.cellId,"with size",Y.cellsLong,"x",Y.cellsTall),console.log("Needed section Width:",(Y.cellsLong+Y.cellId.x)*P,"Current width:",V),(Y.cellsLong+Y.cellId.x)*P>V&&(console.log("Added section Width:",Y.cellsLong*P+Y.cellId.x),V+=(Y.cellsLong+Y.cellId.x)*P-V),console.log("Needed section Height:",(Y.cellsTall+Y.cellId.y)*P,"Current height:",F),(Y.cellsTall+Y.cellId.y)*P>F&&(console.log("Added section Height:",Y.cellsTall*P+Y.cellId.y),F+=(Y.cellsTall+Y.cellId.y)*P-F);s(V),o(F),[...Array(F/P).keys()].map(Y=>{const q=[];[...Array(V/P).keys()].map(R=>{q.push({id:new Z({x:R,y:Y}),hasItem:!1,itemId:"",mouseOver:!1,canPlaceItem:!1,mouseOverLocation:"",inSection:Ue(new Z({x:R,y:Y}),v)!=null,size:P})}),O.push(q)}),c([...O]),setTimeout(()=>{const Y=[],q=[...v];for(const R of q)R.cellElement=document.querySelector(`.App #${R.cellId.toId()}.cell:not(.cell-border)`),Y.push(...R.startingItems.map(j=>new Et({cell:new Z({x:R.cellId.x+j.cell.x,y:R.cellId.y+j.cell.y}),item:new de({id:j.item.id,name:j.item.name,cellsLong:j.item.cellsLong,cellsTall:j.item.cellsTall,icon:j.item.icon,initialElement:document.querySelector(`.App #${j.cell.toId()}.cell:not(.cell-border)`),starterItem:!0,moveable:j.item.moveable,rotation:j.item.rotation||0})})));p([...q]);for(const R of Y){const j=ye=>{const _e=ye%2===1;return{cellsLong:_e?R.item.cellsTall:R.item.cellsLong,cellsTall:_e?R.item.cellsLong:R.item.cellsTall}},se=R.item.rotation||0,xe=j(se);for(let ye=0;ye<xe.cellsTall;ye++)for(let _e=0;_e<xe.cellsLong;_e++)O[R.cell.y+ye][R.cell.x+_e].hasItem=!0,O[R.cell.y+ye][R.cell.x+_e].itemId=R.item.id;R.item.initialElement=document.querySelector(`.App #${R.cell.toId()}.cell:not(.cell-border)`),d(ye=>[...ye,R.item])}c([...O]),setTimeout(()=>{ae(!1)},500)},100)}}async function st(){const v=new URLSearchParams(window.location.search),V=v.get("companyId"),F=v.get("areaId"),O=v.get("areaId")||"",Y=v.get("companyId")||"",q=v.get("templateId")||"",R=await Pg(Y,O),j=v.get("type")||"";if(j==="create-template")nt(!0);else if(j==="edit-template"){pn(!0);const W=R.templates.find(J=>J.id===q);W&&(me(W),_t(W.name))}V&&Bn(V),F&&oe(F),U(R.inventoryItems.map(W=>new gt({item:new de({id:W.item.id,name:W.item.name,cellsLong:W.item.cellsLong,cellsTall:W.item.cellsTall,icon:W.item.icon,initialElement:W.item.initialElement,moveable:W.item.moveable,starterItem:W.item.starterItem,displayItem:!0}),quantity:W.quantity})));const se=[],xe=[];for(const W of R.templates){const J=[],sn=[];for(const et of W.sections)J.push(new Ce({name:et.name,cellId:new Z({x:et.cellId.x/(n?20:10),y:et.cellId.y/(n?20:10)}),cellsLong:et.cellsLong/(n?20:10),cellsTall:et.cellsTall/(n?20:10),startingItems:et.startingItems.map(Re=>new Et({cell:new Z({x:Re.cell.x/(n?2:1),y:Re.cell.y/(n?2:1)}),item:new de({id:Re.item.id,name:Re.item.name,cellsLong:Re.item.cellsLong/2,cellsTall:Re.item.cellsTall/2,icon:Re.item.icon,starterItem:!0,moveable:Re.item.moveable})}))})),sn.push(new Ce({name:et.name,cellId:new Z({x:et.cellId.x,y:et.cellId.y}),cellsLong:et.cellsLong,cellsTall:et.cellsTall,startingItems:et.startingItems.map(Re=>new Et({cell:new Z({x:Re.cell.x,y:Re.cell.y}),item:new de({id:Re.item.id,name:Re.item.name,cellsLong:Re.item.cellsLong,cellsTall:Re.item.cellsTall,icon:Re.item.icon,starterItem:!0,moveable:Re.item.moveable})}))}));se.push(new Tt({name:W.name,sections:J,id:W.id})),xe.push(new Tt({name:W.name,sections:sn,id:W.id}))}T([...se]);const ye=[],_e=q===""?void 0:xe.find(W=>W.id===q);console.log("TEMPLATE",_e,"AREA",R),_e!==void 0?(E([..._e.sections]),p([..._e.sections.map(W=>new Ce({name:W.name,cellId:new Z({x:W.cellId.x/10,y:W.cellId.y/10}),cellsLong:W.cellsLong/10,cellsTall:W.cellsTall/10,startingItems:W.startingItems,items:W.startingItems.map(J=>new de({id:J.item.id,name:J.item.name,sectionCell:J.cell,cellsLong:J.item.cellsLong,cellsTall:J.item.cellsTall,icon:J.item.icon,moveable:J.item.moveable,starterItem:J.item.starterItem,rotation:J.item.rotation}))}))]),ye.push(..._e.sections.map(W=>new Ce({name:W.name,cellId:new Z({x:W.cellId.x/10,y:W.cellId.y/10}),cellsLong:W.cellsLong/10,cellsTall:W.cellsTall/10,startingItems:W.startingItems,items:W.startingItems.map(J=>new de({id:J.item.id,name:J.item.name,cellsLong:J.item.cellsLong,cellsTall:J.item.cellsTall,icon:J.item.icon,moveable:J.item.moveable,starterItem:J.item.starterItem,rotation:J.item.rotation,sectionCell:J.cell}))})))):(E([...R.sections]),p([...R.sections.map(W=>new Ce({name:W.name,cellId:new Z({x:W.cellId.x/10,y:W.cellId.y/10}),cellsLong:W.cellsLong/10,cellsTall:W.cellsTall/10,startingItems:W.startingItems,items:W.startingItems.map(J=>new de({id:J.item.id,name:J.item.name,sectionCell:J.cell,cellsLong:J.item.cellsLong,cellsTall:J.item.cellsTall,icon:J.item.icon,moveable:J.item.moveable,starterItem:J.item.starterItem,rotation:J.item.rotation}))}))]),ye.push(...R.sections.map(W=>new Ce({name:W.name,cellId:new Z({x:W.cellId.x/10,y:W.cellId.y/10}),cellsLong:W.cellsLong/10,cellsTall:W.cellsTall/10,startingItems:W.startingItems,items:W.startingItems.map(J=>new de({id:J.item.id,name:J.item.name,sectionCell:J.cell,cellsLong:J.item.cellsLong,cellsTall:J.item.cellsTall,icon:J.item.icon,moveable:J.item.moveable,starterItem:J.item.starterItem,rotation:J.item.rotation}))})))),console.log("SECTIONS TO GENERATE",ye),Vt(ye)}$.useEffect(()=>{st();async function v(){const V=jc();Vg("dMjfwNN0XFes0WxUH8h1",V)}v()},[]);function ft(v,V,F){if(!n||v==null)return;const O=[...F],Y=[],q=F.find(R=>R.name==v);console.log("NEW SECTION",q),console.log("Adding section",q.name,q.cellId),console.log("MOBILE CELLS",V),q.cellElement=document.querySelector(`.App #${q.name.split(" ").join("-")} #${q.name.split(" ").join("")}${q.cellId.toId()}.cell:not(.cell-border)`),console.log("Section element found",q.cellElement);for(const R of q.startingItems){console.log("Placing starting item",R.item.name,R.cell);const j=ye=>{const _e=ye%2===1;return{cellsLong:_e?R.item.cellsTall:R.item.cellsLong,cellsTall:_e?R.item.cellsLong:R.item.cellsTall}},se=R.item.rotation||0,xe=j(se);for(let ye=0;ye<xe.cellsTall;ye++)for(let _e=0;_e<xe.cellsLong;_e++){const W=V.find(J=>J.sectionName===q.name);W.cells[R.cell.y+ye][R.cell.x+_e].hasItem=!0,W.cells[R.cell.y+ye][R.cell.x+_e].itemId=R.item.id}R.item.initialElement=document.querySelector(`.App #${q.name.split(" ").join("-")} #${q.name.split(" ").join("")}${R.cell.toId()}.cell:not(.cell-border)`),console.log("Adding item to items",R.item.initialElement),Y.push(new de({id:R.item.id,name:R.item.name,cellsLong:R.item.cellsLong,cellsTall:R.item.cellsTall,icon:R.item.icon,initialElement:R.item.initialElement,starterItem:!0,moveable:R.item.moveable,rotation:R.item.rotation}))}console.log("Setting sections",O),p([...O]),console.log("ITEMS",Y),d(R=>[...R.filter(se=>!Y.some(xe=>xe.id===se.id)),...Y.map(se=>new de({id:se.id,name:se.name,cellsLong:se.cellsLong,cellsTall:se.cellsTall,icon:se.icon,initialElement:se.initialElement,starterItem:!0,moveable:se.moveable,rotation:se.rotation}))])}function pt(v){let V=[];return v.map(F=>V=[...V,...F]),V}function Ot(v,V){console.log(v);const F=n?Oe.find(R=>R.sectionName===Ee).cells:a,O=F[v.y].length,Y=F.length;if(console.log(O,Y),v.x+V.cellsLong>O||v.y+V.cellsTall>Y)return!1;const q=Ue(v,m);if(!q&&!n)return console.log("Item is out of bounds of any section"),!1;for(let R=0;R<V.cellsTall;R++)for(let j=0;j<V.cellsLong;j++){if(!n){const se=Ue(new Z({x:v.x+j,y:v.y+R}),m);if(!se)return console.log("Item is out of bounds of any section"),!1;if(se.name!=q.name)return console.log("Item is crossing section boundaries"),!1}if(F[v.y+R][v.x+j].hasItem&&F[v.y+R][v.x+j].itemId!=V.id)return console.log("Something is already here"),!1}return!0}function yn(v,V,F){const O=Array.from(n?Oe.find(R=>R.sectionName===Ee).cells:a);if(F!=null){console.log("Removing item");const R=n?m.find(j=>j.name===Ee):Ue(F,m);R.items=R.items.filter(j=>j.id!=V.id);for(let j=0;j<V.cellsTall;j++)for(let se=0;se<V.cellsLong;se++)O[F.y+j][F.x+se].hasItem=!1,O[F.y+j][F.x+se].itemId=""}const Y=n?m.find(R=>R.name===Ee):Ue(v,m),q=new Z({x:v.x-Y.cellId.x,y:v.y-Y.cellId.y});V.sectionCell=q,Y.items.push(V);for(let R=0;R<V.cellsTall;R++)for(let j=0;j<V.cellsLong;j++)O[v.y+R][v.x+j].hasItem=!0,O[v.y+R][v.x+j].itemId=V.id;if(console.log(O),n){const R=Oe.find(j=>j.sectionName===Ee);R&&(R.cells=O.map(j=>j.map(se=>({...se}))),ot([...Oe]))}else c(O);if(console.log("Removing item from inventory",V.name),!V.hasMoved){const R=M.findIndex(j=>j.item.name==V.name&&!j.item.hasMoved);if(R!==-1){const j=[...M];j[R].quantity-=1,j[R].quantity<=0&&j.splice(R,1),U(j)}else U(M)}d(R=>(console.log("Placing item",V.id),console.log("Updating item",V.id),R.find(j=>j.id==V.id).hasMoved||(R.find(j=>j.id==V.id).hasMoved=!0),R))}function Mt(v){h.find(V=>V.name==v.name&&!V.hasMoved&&!V.starterItem)||d(V=>[...V,v])}function _n(v){console.log("Removing item",v.id),d(V=>V.filter(F=>F.id!=v.id))}function As(v,V){const F=Array.from(a),O=R=>{const j=R%2===1;return{cellsWide:j?v.cellsTall:v.cellsLong,cellsTall:j?v.cellsLong:v.cellsTall}},Y=v.rotation||0,q=O(Y);for(let R=0;R<q.cellsTall;R++)for(let j=0;j<q.cellsWide;j++)F[V.y+R][V.x+j].hasItem=!1,F[V.y+R][V.x+j].itemId="";c(F),console.log("DELETING ITEM",v.id),d(R=>(console.log(),R.filter(j=>j.id!=v.id))),U(R=>{const j=R.findIndex(se=>se.item.name==v.name&&!se.item.hasMoved);if(j!==-1){const se=[...R];return se[j].quantity+=1,se}else return[...R,new gt({item:new de({id:v.id,name:v.name,cellsLong:q.cellsWide,cellsTall:q.cellsTall,icon:v.icon}),quantity:1})]})}function Be(v,V){const F=Array.from(n?Oe.find(R=>R.sectionName===Ee).cells:a);console.log("DELETING ITEM ROTATE",v.id,v.rotation);const O=R=>{const j=R%2===1;return{cellsWide:j?v.cellsTall:v.cellsLong,cellsTall:j?v.cellsLong:v.cellsTall}},Y=v.rotation||0,q=O(Y);for(let R=0;R<q.cellsTall;R++)for(let j=0;j<q.cellsWide;j++)console.log("Deleting cell",V.y+R,V.x+j),F[V.y+R][V.x+j].hasItem=!1,F[V.y+R][V.x+j].itemId="";c([...F]),console.log("DELETING ITEM",v.id)}function ze(v,V){const F=n?Oe.find(q=>q.sectionName===Ee).cells:a,O=Array.from(F);if(F[v.y]==null){nn();return}const Y=Ot(v,V);O.forEach(q=>q.forEach(R=>{R.mouseOver=!1,R.canPlaceItem=!1,R.mouseOverLocation=""}));for(let q=0;q<V.cellsTall;q++)for(let R=0;R<V.cellsLong;R++)v.y+q<O.length&&v.x+R<O[v.y+q].length&&(V.cellsLong===1&&V.cellsTall===1?O[v.y+q][v.x+R].mouseOverLocation="single":V.cellsTall===1?R===0?O[v.y+q][v.x+R].mouseOverLocation="leftFull":R===V.cellsLong-1?O[v.y+q][v.x+R].mouseOverLocation="rightFull":O[v.y+q][v.x+R].mouseOverLocation="middleFull":V.cellsLong===1?q===0?O[v.y+q][v.x+R].mouseOverLocation="topFull":q===V.cellsTall-1?O[v.y+q][v.x+R].mouseOverLocation="bottomFull":O[v.y+q][v.x+R].mouseOverLocation="middleVFull":q===0&&R===0?O[v.y+q][v.x+R].mouseOverLocation="topLeftCorner":q===0&&R===V.cellsLong-1?O[v.y+q][v.x+R].mouseOverLocation="topRightCorner":q===V.cellsTall-1&&R===0?O[v.y+q][v.x+R].mouseOverLocation="bottomLeftCorner":q===V.cellsTall-1&&R===V.cellsLong-1?O[v.y+q][v.x+R].mouseOverLocation="bottomRightCorner":q===0?O[v.y+q][v.x+R].mouseOverLocation="top":q===V.cellsTall-1?O[v.y+q][v.x+R].mouseOverLocation="bottom":R===0?O[v.y+q][v.x+R].mouseOverLocation="left":R===V.cellsLong-1?O[v.y+q][v.x+R].mouseOverLocation="right":O[v.y+q][v.x+R].mouseOverLocation="middle",O[v.y+q][v.x+R].mouseOver=!0,O[v.y+q][v.x+R].canPlaceItem=Y);if(n){const q=Oe.find(R=>R.sectionName===Ee);q&&(q.cells=O.map(R=>R.map(j=>({...j}))),ot([...Oe])),ot(R=>R.map(j=>j.sectionName===Ee?{...j,cells:O}:j))}else c(O)}function nn(){const v=Array.from(n?Oe.find(V=>V.sectionName===Ee).cells:a);v.forEach(V=>V.forEach(F=>{F.mouseOver=!1,F.canPlaceItem=!1,F.mouseOverLocation=""})),c(v)}$.useEffect(()=>{ft(Ee,Oe,m)},[Ee]),$.useEffect(()=>{const v=()=>{const V=h.find(F=>F.id===A);console.log("Unselecting item",A),b(null),V&&(k(F=>[...F,V.id]),console.log("Unselecting item",V.id),setTimeout(()=>{k(F=>F.filter(O=>O!==V.id))},300))};return document.addEventListener("click",v),()=>document.removeEventListener("click",v)},[A,h]);function vs(v){b(null),k(V=>[...V,v]),console.log("Unselecting item",v),setTimeout(()=>{k(V=>V.filter(F=>F!==v))},300)}function ws(v){const V=h.find(F=>F.id===A);console.log("Unselecting item",A),b(v),V&&(k(F=>[...F,V.id]),console.log("Unselecting item",V.id),setTimeout(()=>{k(F=>F.filter(O=>O!==V.id))},300))}function xr(v){U(V=>[...V,v])}return N.jsxs(N.Fragment,{children:[N.jsxs("div",{className:"App",children:[N.jsx("h1",{className:"title",children:"LayItOut"}),N.jsx("br",{}),(ht||Te)&&N.jsxs("div",{className:"template-name-row",children:[N.jsx("label",{htmlFor:"template-name",children:"Template Name:"}),N.jsx("input",{type:"text",id:"template-name",name:"template-name",onChange:v=>_t(v.target.value),value:lt})]}),(ht||Te)&&N.jsxs("div",{className:"template-creation",children:[N.jsxs("button",{className:"action-btn",onClick:()=>{if(lt.trim()==""){alert("Please enter a template name");return}if(g.some(v=>v.name===lt&&(Te?v.id!==Me.id:!0))){alert("Template with this name already exists");return}if(Te){const v=g.map(V=>V.id===Me.id?(console.log("SECTION",m),new Tt({name:lt,sections:m.map(F=>new Ce({name:F.name,cellId:new Z({x:V.sections.find(O=>O.name==F.name).cellId.x*(n?20:10),y:V.sections.find(O=>O.name==F.name).cellId.y*(n?20:10)}),cellsLong:F.cellsLong*10,cellsTall:F.cellsTall*10,startingItems:F.items.map(O=>new Et({cell:new Z({x:O.sectionCell.x,y:O.sectionCell.y}),item:new de({id:O.id,name:O.name,cellsLong:O.cellsLong,cellsTall:O.cellsTall,icon:O.icon,starterItem:!0,moveable:O.moveable})}))})),id:V.id})):new Tt({name:V.name,sections:V.sections.map(F=>new Ce({name:F.name,cellId:new Z({x:F.cellId.x*(n?20:10),y:F.cellId.y*(n?20:10)}),cellsLong:F.cellsLong*(n?20:10),cellsTall:F.cellsTall*(n?20:10),startingItems:F.startingItems.map(O=>new Et({cell:new Z({x:O.cell.x*(n?2:1),y:O.cell.y*(n?2:1)}),item:new de({id:O.item.id,name:O.item.name,cellsLong:O.item.cellsLong,cellsTall:O.item.cellsTall,icon:O.item.icon,starterItem:O.item.starterItem,moveable:O.item.moveable})}))})),id:V.id}));ae(!0),xg(dt,K,v).then(()=>{console.log("Template updated successfully"),ae(!1)})}},children:[ht?"Create":"Save"," Template"]}),N.jsx("button",{className:"action-btn",onClick:()=>{nt(!1),T([]),E([]),p([]),ot([]),ke([]),at(null)},children:"Cancel"})]}),re&&N.jsxs(N.Fragment,{children:[N.jsx("div",{className:"loader-backdrop"}),N.jsx("div",{className:"loader"})]})," ",N.jsxs("div",{className:"layout",children:[N.jsx(fu,{isEditingTemplate:Te,isCreatingTemplate:ht,maxHeight:n?200:r,showAddCustomItem:()=>{Pe.current?.showModal()},addDraggingItem:Mt,removeItem:_n,inventoryItems:M.map(v=>new gt({item:new de({id:v.item.id,name:v.item.name,cellsLong:v.item.cellsLong,cellsTall:v.item.cellsTall,icon:v.item.icon,displayItem:!0}),quantity:v.quantity}))}),n?N.jsxs("div",{className:"mobile-areas",style:{height:y+"px"},children:[N.jsx("img",{src:Js,onClick:()=>{const v=m.findIndex(F=>F.name==Ee);if(v===-1)return;const V=(v-1+m.length)%m.length;at(m[V].name),console.log("Changing viewing section to",m[V].name)},className:"back-mobile-areas"}),Pt.map((v,V)=>N.jsx(Ys,{width:v.width,height:v.height,cells:pt(Oe.find(F=>F.sectionName==v.sectionName).cells),id:v.sectionName,visibile:Ee==null?!0:v.sectionName==Ee,section:v.sectionName},V)),N.jsx("img",{src:Js,onClick:()=>{const v=m.findIndex(F=>F.name==Ee);if(v===-1)return;const V=(v+1)%m.length;at(m[V].name),console.log("Changing viewing section to",m[V].name)},className:"forward-mobile-areas"})]}):N.jsx(Ys,{width:t,height:r,cells:pt(a)})]})]}),m.map(v=>N.jsx(Ti,{section:v,visible:Ee==null?!0:v.name==Ee,cellSize:P},v.cellId.toId())),h.map(v=>N.jsx(el,{removeItem:_n,visible:n?!v.hasMoved&&!v.starterItem?!0:Ee==null?!1:v.starterItem?m.find(V=>V.name==Ee)?.startingItems.some(V=>V.item.id===v.id):m.find(V=>V.name==Ee)?.items.some(V=>V.id===v.id):!0,item:v,canPlaceItem:Ot,placeItem:yn,deleteItemRotate:Be,highlightCells:ze,unHighlightCells:nn,deleteItem:As,isSelected:A===v.id,onSelect:ws,isUnselecting:x.includes(v.id),onDeselect:()=>vs(v.id)},v.id)),n&&!re&&N.jsx("div",{className:"layout-icon",onClick:()=>{z.current?.showModal(),pe(!0),console.log("Showing layout dialog")},children:N.jsx("img",{src:gu,alt:""})}),!re&&!(ht||Te)&&N.jsx("div",{className:"template-icon",onClick:()=>{Ke.current?.showModal(),_(!0),console.log("Showing template dialog")},children:N.jsx("img",{src:pu,alt:""})}),N.jsx(yu,{dialogRef:Ke,isOpen:w,closeDialog:()=>{Ke.current?.close(),_(!1)},templates:g}),N.jsx(mu,{dialogRef:z,isOpen:ie,closeDialog:()=>{z.current?.close(),pe(!1)},layoutSections:ee}),N.jsx(_u,{dialogRef:Pe,addInventoryItem:xr,closeDialog:()=>{Pe.current?.close()}})]})}
