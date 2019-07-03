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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","dojox/gfx","dojox/gfx/matrix","../../../symbols/support/gfxUtils","../../../symbols/support/previewSymbol3D"],function(t,e,r,a,o,s){function l(t){if(t){var e=t.type;if(e.indexOf("3d")>-1)return s.getSymbolLayerFill(t.symbolLayers.getItemAt(0));if("simple-line"===e){var r=o.getStroke(t);return r&&r.color}if("simple-marker"===t.type&&("x"===t.style||"cross"===t.style)){var r=o.getStroke(t);return r&&r.color}return o.getFill(t)}}function i(t,e){var r=e.HH.label,a=e.LL.label,o=e.HL.label,s=e.LH.label;switch(t){case"HH":return{top:r,bottom:a,left:o,right:s};case"HL":return{top:o,bottom:s,left:a,right:r};case"LL":return{top:a,bottom:r,left:s,right:o};case"LH":return{top:s,bottom:o,left:r,right:a};default:return{top:r,bottom:a,left:o,right:s}}}function n(t){var e=t.focus,r=t.infos,a=t.numClasses,o=d[a],s={};r.forEach(function(t){s[t.value]={label:t.label,fill:l(t.symbol)}});for(var n=[],p=0;p<a;p++){for(var f=[],m=0;m<a;m++){var c=s[o[p][m]];f.push(c.fill)}n.push(f)}return{type:"relationship-ramp",numClasses:a,focus:e,colors:n,labels:i(e,s),rotation:u(e)}}function u(t){var e=b[t];return t&&null==e&&(e=b.HH),e||0}function p(t,e,r,a){var o=a+"_arrowStart",s=a+"_arrowEnd",l="left"===e;switch(r){case"HL":t.setAttribute(l?"marker-start":"marker-end","url(#"+(l?s:o)+")");break;case"LL":t.setAttribute("marker-start","url(#"+s+")");break;case"LH":t.setAttribute(l?"marker-end":"marker-start","url(#"+(l?o:s)+")");break;default:t.setAttribute("marker-end","url(#"+o+")")}}function f(t,e,r){var a="start"===e,o=a?r+"_arrowStart":r+"_arrowEnd",s=a?"0,0 5,5 0,10":"5,0 0,5 5,10",l=a?"5":"0",i=document.createElementNS(c,"marker");i.setAttribute("id",o),i.setAttribute("markerWidth","10"),i.setAttribute("markerHeight","10"),i.setAttribute("refX",l),i.setAttribute("refY","5"),i.setAttribute("markerUnits","strokeWidth"),i.setAttribute("orient","auto");var n=document.createElementNS(c,"polyline");n.setAttribute("points",s),n.setAttribute("fill","none"),n.setAttribute("stroke",L),n.setAttribute("stroke-width","1"),i.appendChild(n),t.appendChild(i)}function m(t,e,s,l){void 0===l&&(l=60);var i=t.focus,n=t.numClasses,u=t.colors,m=t.rotation,c=!!i,b=Math.sqrt(Math.pow(l,2)+Math.pow(l,2))+(c?0:5),d=document.createElement("div"),H=r.createSurface(d,b,b);null!=s&&(d.style.opacity=s.toString());var y=o.create2DColorRamp({surface:H,colors:u,numClasses:n,size:l}),M=(b-l)/2,g=(b-l)/2;y.applyTransform(a.translate(M,g));var h=l/2,v=l/2;y.applyTransform(a.rotategAt(m,h,v));var k=H.createGroup(),A={width:1,color:L},w=H.defNode;f(w,"start",e),f(w,"end",e);var x=k.createLine({x1:-10,y1:l-15,x2:-10,y2:15}).setStroke(A),S=k.createLine({x1:15,y1:l+10,x2:l-15,y2:l+10}).setStroke(A);return p(x.rawNode,"left",i,e),p(S.rawNode,"right",i,e),k.applyTransform(a.translate(M,g)),c?k.applyTransform(a.rotategAt(-45,h,v)):H.rawNode.style.margin="-15px -15px -18px -15px",d}Object.defineProperty(e,"__esModule",{value:!0});var c="http://www.w3.org/2000/svg",L="#555555",b={HH:315,HL:45,LL:135,LH:225},d={2:[["HL","HH"],["LL","LH"]],3:[["HL","HM","HH"],["ML","MM","MH"],["LL","LM","LH"]],4:[["HL","HM1","HM2","HH"],["M2L","M2M1","M2M2","M2H"],["M1L","M1M1","M1M2","M1H"],["LL","LM1","LM2","LH"]]};e.getRelationshipRampElement=n,e.getRotationAngleForFocus=u,e.renderRamp=m});