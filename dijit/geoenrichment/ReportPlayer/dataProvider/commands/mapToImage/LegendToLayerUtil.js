// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/when","dojo/dom-construct","dojo/dom-style","esri/graphic","esri/geometry/ScreenPoint","esri/layers/GraphicsLayer","esri/symbols/PictureMarkerSymbol","esri/dijit/geoenrichment/utils/htmlToSvg/HTMLtoSVGConverter","esri/dijit/geoenrichment/utils/DomUtil","../imageUtils/ImagePrintUtil","../imageUtils/NodeToCanvasUtil"],function(e,o,t,i,n,r,s,a,d,l,m,c){return{legendToGraphicsLayer:function(g,h,u){var y=g.domNode.scrollHeight>g.domNode.clientHeight,f=l.noTransformPosition(g.domNode),p=i.get(g.domNode,"left"),v=i.get(g.domNode,"top"),x=i.get(g.domNode,"maxHeight");i.set(g.domNode,{left:0,top:0,maxHeight:"10000px"});var N=t.toDom(g.domNode.outerHTML);t.place(N,document.body),N.style.zIndex="-1000",N.style.position="absolute";var T=e.mixin({},l.noTransformPosition(N));return T.x=f.x,T.y=f.y,i.set(g.domNode,{left:p+"px",top:v+"px",maxHeight:x+"px"}),o(d.htmlToSvg(N,{iterationsPerScript:100}),function(e){return o(m.printImages({svgStrings:[e],nodeToCanvasFunc:function(e,o,t){var i=e.children[0];return c.svgNodeToCanvasFunc(i,o,t)},scale:5}),function(e){t.destroy(N);var o=new n,i=l.noTransformPosition(u),d=1;y&&(T.x=i.x+10,T.y=i.y+10,d=(i.h-20)/T.h);var m=h.toMap(new r(T.x-i.x,T.y-i.y));m.setSpatialReference(h.spatialReference),o.setGeometry(m);var c=new a;c.setUrl(e[0]),c.setWidth(T.w*d),c.setHeight(T.h*d),c.setOffset(T.w/2*d,-T.h/2*d),o.setSymbol(c);var g=new s;return g.add(o),g})}).otherwise(function(e){return console.log(e),null})}}});