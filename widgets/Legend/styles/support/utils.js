// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../symbols/support/svgUtils","../../../support/widget"],(function(r,t,e,s){Object.defineProperty(t,"__esModule",{value:!0});var a="esri-relationship-ramp--diamond__container",i="esri-relationship-ramp--diamond__left-column",l="esri-relationship-ramp--diamond__right-column",o="esri-relationship-ramp--diamond__middle-column",n="esri-relationship-ramp--diamond__middle-column--label",d="esri-relationship-ramp--diamond__middle-column--ramp",m="esri-relationship-ramp--square__table",p="esri-relationship-ramp--square__table-row",u="esri-relationship-ramp--square__table-cell",h="esri-relationship-ramp--square__table-label",c="esri-relationship-ramp--square__table-label--left-bottom",x="esri-relationship-ramp--square__table-label--right-bottom",k="esri-relationship-ramp--square__table-label--left-top",_="esri-relationship-ramp--square__table-label--right-top";function f(r,t,e){var s=e+"_arrowStart",a=e+"_arrowEnd",i="left"===r,l={markerStart:null,markerEnd:null};switch(t){case"HL":i?l.markerStart="url(#"+a+")":l.markerEnd="url(#"+s+")";break;case"LL":l.markerStart="url(#"+a+")";break;case"LH":i?l.markerEnd="url(#"+s+")":l.markerStart="url(#"+a+")";break;default:l.markerEnd="url(#"+s+")"}return l}t.renderRelationshipRamp=function(r,t,v){var b=r.focus,g=r.labels,w=!!b,y=function(r,t,a,i){void 0===i&&(i=60);var l=r.focus,o=r.numClasses,n=r.colors,m=r.rotation,p=!!l,h=Math.sqrt(Math.pow(i,2)+Math.pow(i,2))+(p?0:5),c=null;null!=a&&(c="opacity: "+a);for(var x=[],k=[],_=[],v=(i||75)/o,b=0;b<o;b++)for(var g=b*v,w=0;w<o;w++){var y=w*v,q=e.generateFillAttributes(n[b][w]),S=e.generateStrokeAttributes(null),E={type:"rect",x:y,y:g,width:v,height:v};x.push(e.renderDef(q)),k.push(e.renderShape(E,q.fill,S,null)),_.push(e.getBoundingBox(E))}var M=null;p||(M="margin: -15px -15px -18px -15px");var B=f("left",l,t),H=f("right",l,t),L=e.computeBBox(_),W=e.getTransformMatrix(L,h,h,0,!1,m),U=e.getTransformMatrix(L,h,h,0,!1,p?-45:null);return s.tsx("div",{style:c,class:p?d:u},s.tsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:h,height:h,style:M},s.tsx("defs",null,s.tsx("marker",{id:t+"_arrowStart",markerWidth:"10",markerHeight:"10",refX:"5",refY:"5",markerUnits:"strokeWidth",orient:"auto"},s.tsx("polyline",{points:"0,0 5,5 0,10",fill:"none",stroke:"#555555","stroke-width":"1"})),s.tsx("marker",{id:t+"_arrowEnd",markerWidth:"10",markerHeight:"10",refX:"0",refY:"5",markerUnits:"strokeWidth",orient:"auto"},s.tsx("polyline",{points:"5,0 0,5 5,10",fill:"none",stroke:"#555555","stroke-width":"1"})),x),s.tsx("g",{transform:W},k),s.tsx("g",{transform:U},s.tsx("line",{fill:"none",stroke:"#555555","stroke-width":"1","marker-start":B.markerStart,"marker-end":B.markerEnd,x1:-10,y1:i-15,x2:-10,y2:15}),s.tsx("line",{fill:"none",stroke:"#555555","stroke-width":"1","marker-start":H.markerStart,"marker-end":H.markerEnd,x1:15,y1:i+10,x2:i-15,y2:i+10}))))}(r,t,v);return w?s.tsx("div",{class:a},s.tsx("div",{class:i},g.left),s.tsx("div",{class:o},s.tsx("div",{class:n},g.top),y,s.tsx("div",{class:n},g.bottom)),s.tsx("div",{class:l},g.right)):s.tsx("div",{class:m},s.tsx("div",{class:p},s.tsx("div",{class:s.classes(u,h,x)},g.left),s.tsx("div",{class:u}),s.tsx("div",{class:s.classes(u,h,c)},g.top)),s.tsx("div",{class:p},s.tsx("div",{class:u}),y,s.tsx("div",{class:u})),s.tsx("div",{class:p},s.tsx("div",{class:s.classes(u,h,_)},g.bottom),s.tsx("div",{class:u}),s.tsx("div",{class:s.classes(u,h,k)},g.right)))}}));