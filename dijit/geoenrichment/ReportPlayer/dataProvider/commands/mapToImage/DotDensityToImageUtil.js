// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/string","esri/dijit/geoenrichment/utils/ImageUtil","esri/dijit/geoenrichment/utils/ImageLayerUtil","../imageUtils/NodeToCanvasUtil"],(function(e,t,n,r){var i={svgNodeToCanvasFunc:r.svgNodeToCanvasFunc,_createDotDensityImage:function(t,r,a){var o=t.getNode(),s=o.ownerSVGElement,u=document.createElementNS("http://www.w3.org/2000/svg","svg"),d=t.getNavigationTransform();u.setAttribute("width",a.width+"px"),u.setAttribute("height",a.height+"px"),u.setAttribute("viewBox",e.substitute("${dx} ${dy} ${width} ${height}",{dx:-d.dx,dy:-d.dy,width:a.width,height:a.height})),(o=o.cloneNode(!0)).hasAttribute&&o.hasAttribute("transform")&&o.removeAttribute("transform"),u.appendChild(o);for(var g=s.getElementsByTagName("defs"),h=0;h<g.length;h++)u.appendChild(g[h].cloneNode(!0));return i.svgNodeToCanvasFunc(u,a.width,a.height).then((function(e){try{var t=e.toDataURL("image/png");return n.clipImageByExtent(t,r,a.extent)}catch(e){return console.log(e),null}})).otherwise((function(e){return console.log(e),null}))},isDotDensity:function(e){return e.renderer&&"esri.renderer.DotDensityRenderer"===e.renderer.declaredClass},createDotDensityImage:function(e,n,r){return e?(r=r||e.getMap(),i._createDotDensityImage(e,n,r).then((function(e){return e?{extent:e.extent,imageData:t.base64DataFromDataURL(e.dataURL)}:null}))):null},createPictureMarkersFromDotDensityLayer:function(e,t,r){return r=r||e.getMap(),i._createDotDensityImage(e,t,r).then((function(e){return e?n.dataURLToPictureMarkers(r,e.dataURL,r.width,r.height):null}))}};return i}));