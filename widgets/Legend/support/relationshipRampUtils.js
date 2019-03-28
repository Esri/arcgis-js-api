// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","dojox/gfx","dojox/gfx/matrix","../../../symbols/support/gfxUtils","../../../symbols/support/previewSymbol3D"],function(t,e,r,a,o,s){function l(t){if(t){var e=t.type;if(e.indexOf("3d")>-1)return s.getSymbolLayerFill(t.symbolLayers.getItemAt(0));if("simple-line"===e){var r=o.getStroke(t);return r&&r.color}if("simple-marker"===t.type&&("x"===t.style||"cross"===t.style)){var r=o.getStroke(t);return r&&r.color}return o.getFill(t)}}function i(t,e){var r=e.HH.label,a=e.LL.label,o=e.HL.label,s=e.LH.label;switch(t){case"HH":return{top:r,bottom:a,left:o,right:s};case"HL":return{top:o,bottom:s,left:a,right:r};case"LL":return{top:a,bottom:r,left:s,right:o};case"LH":return{top:s,bottom:o,left:r,right:a};default:return{top:r,bottom:a,left:o,right:s}}}function n(t){var e=t.focus,r=t.infos,a=t.numClasses,o=d[a],s={};r.forEach(function(t){s[t.value]={label:t.label,fill:l(t.symbol)}});for(var n=[],f=0;f<a;f++){for(var p=[],m=0;m<a;m++){var c=s[o[f][m]];p.push(c.fill)}n.push(p)}return{type:"relationship-ramp",numClasses:a,focus:e,colors:n,labels:i(e,s),rotation:u(e)}}function u(t){var e=b[t];return t&&null==e&&(e=b.HH),e||0}function f(t,e,r,a){var o=a+"_arrowStart",s=a+"_arrowEnd",l="left"===e;switch(r){case"HL":t.setAttribute(l?"marker-start":"marker-end","url(#"+(l?s:o)+")");break;case"LL":t.setAttribute("marker-start","url(#"+s+")");break;case"LH":t.setAttribute(l?"marker-end":"marker-start","url(#"+(l?o:s)+")");break;default:t.setAttribute("marker-end","url(#"+o+")")}}function p(t,e,r){var a="start"===e,o=a?r+"_arrowStart":r+"_arrowEnd",s=a?"0,0 5,5 0,10":"5,0 0,5 5,10",l=a?"5":"0",i=document.createElementNS(c,"marker");i.setAttribute("id",o),i.setAttribute("markerWidth","10"),i.setAttribute("markerHeight","10"),i.setAttribute("refX",l),i.setAttribute("refY","5"),i.setAttribute("markerUnits","strokeWidth"),i.setAttribute("orient","auto");var n=document.createElementNS(c,"polyline");n.setAttribute("points",s),n.setAttribute("fill","none"),n.setAttribute("stroke",L),n.setAttribute("stroke-width","1"),i.appendChild(n),t.appendChild(i)}function m(t,e,s){void 0===s&&(s=60);var l=t.focus,i=t.numClasses,n=t.colors,u=t.rotation,m=!!l,c=Math.sqrt(Math.pow(s,2)+Math.pow(s,2))+(m?0:5),b=document.createElement("div"),d=r.createSurface(b,c,c),H=o.create2DColorRamp({surface:d,colors:n,numClasses:i,size:s}),M=(c-s)/2,h=(c-s)/2;H.applyTransform(a.translate(M,h));var y=s/2,g=s/2;H.applyTransform(a.rotategAt(u,y,g));var v=d.createGroup(),k={width:1,color:L},A=d.defNode;p(A,"start",e),p(A,"end",e);var w=v.createLine({x1:-10,y1:s-15,x2:-10,y2:15}).setStroke(k),x=v.createLine({x1:15,y1:s+10,x2:s-15,y2:s+10}).setStroke(k);return f(w.rawNode,"left",l,e),f(x.rawNode,"right",l,e),v.applyTransform(a.translate(M,h)),m?v.applyTransform(a.rotategAt(-45,y,g)):d.rawNode.style.margin="-15px -15px -18px -15px",b}Object.defineProperty(e,"__esModule",{value:!0});var c="http://www.w3.org/2000/svg",L="#555555",b={HH:315,HL:45,LL:135,LH:225},d={2:[["HL","HH"],["LL","LH"]],3:[["HL","HM","HH"],["ML","MM","MH"],["LL","LM","LH"]],4:[["HL","HM1","HM2","HH"],["M2L","M2M1","M2M2","M2H"],["M1L","M1M1","M1M2","M1H"],["LL","LM1","LM2","LH"]]};e.getRelationshipRampElement=n,e.getRotationAngleForFocus=u,e.renderRamp=m});