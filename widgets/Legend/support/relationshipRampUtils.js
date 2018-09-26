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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","dojox/gfx","dojox/gfx/matrix","../../../symbols","../../../symbols/support/gfxUtils","../../../symbols/support/previewSymbol3D"],function(t,e,r,a,o,s,l){function i(t){if(t){var e=t.type;if(e.indexOf("3d")>-1)return l.getSymbolLayerFill(t.symbolLayers.getItemAt(0));if("simple-line"===e){var r=s.getStroke(t);return r&&r.color}if("simple-marker"===t.type&&(t.style===o.SimpleMarkerSymbol.STYLE_X||t.style===o.SimpleMarkerSymbol.STYLE_CROSS)){var r=s.getStroke(t);return r&&r.color}return s.getFill(t)}}function n(t,e){var r=e.HH.label,a=e.LL.label,o=e.HL.label,s=e.LH.label;switch(t){case"HH":return{top:r,bottom:a,left:o,right:s};case"HL":return{top:o,bottom:s,left:a,right:r};case"LL":return{top:a,bottom:r,left:s,right:o};case"LH":return{top:s,bottom:o,left:r,right:a};default:return{top:r,bottom:a,left:o,right:s}}}function u(t){var e=t.focus,r=t.infos,a=t.numClasses,o=H[a],s={};r.forEach(function(t){s[t.value]={label:t.label,fill:i(t.symbol)}});for(var l=[],u=0;u<a;u++){for(var p=[],f=0;f<a;f++){var c=s[o[u][f]];p.push(c.fill)}l.push(p)}return{type:"relationship-ramp",numClasses:a,focus:e,colors:l,labels:n(e,s),rotation:m(e)}}function m(t){var e=d[t];return t&&null==e&&(e=d.HH),e||0}function p(t,e,r,a){var o=a+"_arrowStart",s=a+"_arrowEnd",l="left"===e;switch(r){case"HL":t.setAttribute(l?"marker-start":"marker-end","url(#"+(l?s:o)+")");break;case"LL":t.setAttribute("marker-start","url(#"+s+")");break;case"LH":t.setAttribute(l?"marker-end":"marker-start","url(#"+(l?o:s)+")");break;default:t.setAttribute("marker-end","url(#"+o+")")}}function f(t,e,r){var a="start"===e,o=a?r+"_arrowStart":r+"_arrowEnd",s=a?"0,0 5,5 0,10":"5,0 0,5 5,10",l=a?"5":"0",i=document.createElementNS(b,"marker");i.setAttribute("id",o),i.setAttribute("markerWidth","10"),i.setAttribute("markerHeight","10"),i.setAttribute("refX",l),i.setAttribute("refY","5"),i.setAttribute("markerUnits","strokeWidth"),i.setAttribute("orient","auto");var n=document.createElementNS(b,"polyline");n.setAttribute("points",s),n.setAttribute("fill","none"),n.setAttribute("stroke",L),n.setAttribute("stroke-width","1"),i.appendChild(n),t.appendChild(i)}function c(t,e,o){void 0===o&&(o=60);var l=t.focus,i=t.numClasses,n=t.colors,u=t.rotation,m=!!l,c=Math.sqrt(Math.pow(o,2)+Math.pow(o,2))+(m?0:5),b=document.createElement("div"),d=r.createSurface(b,c,c),H=s.create2DColorRamp({surface:d,colors:n,numClasses:i,size:o}),M=(c-o)/2,y=(c-o)/2;H.applyTransform(a.translate(M,y));var h=o/2,g=o/2;H.applyTransform(a.rotategAt(u,h,g));var k=d.createGroup(),v={width:1,color:L},A=d.defNode;f(A,"start",e),f(A,"end",e);var S=k.createLine({x1:-10,y1:o-15,x2:-10,y2:15}).setStroke(v),w=k.createLine({x1:15,y1:o+10,x2:o-15,y2:o+10}).setStroke(v);return p(S.rawNode,"left",l,e),p(w.rawNode,"right",l,e),k.applyTransform(a.translate(M,y)),m?k.applyTransform(a.rotategAt(-45,h,g)):d.rawNode.style.margin="-15px -15px -18px -15px",b}Object.defineProperty(e,"__esModule",{value:!0});var b="http://www.w3.org/2000/svg",L="#555555",d={HH:315,HL:45,LL:135,LH:225},H={2:[["HL","HH"],["LL","LH"]],3:[["HL","HM","HH"],["ML","MM","MH"],["LL","LM","LH"]],4:[["HL","HM1","HM2","HH"],["M2L","M2M1","M2M2","M2H"],["M1L","M1M1","M1M2","M1H"],["LL","LM1","LM2","LH"]]};e.getRelationshipRampElement=u,e.getRotationAngleForFocus=m,e.renderRamp=c});