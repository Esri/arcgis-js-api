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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/when","dojo/dom-construct","dojo/dom-style","esri/graphic","esri/geometry/ScreenPoint","esri/layers/GraphicsLayer","esri/symbols/PictureMarkerSymbol","esri/dijit/geoenrichment/utils/htmlToSvg/HTMLtoSVGConverter","esri/dijit/geoenrichment/utils/DomUtil","../imageUtils/ImagePrintUtil","../imageUtils/NodeToCanvasUtil"],function(e,t,o,i,n,r,s,a,d,l,m,c){return{legendToGraphicsLayer:function(g,u,h){var p=g.domNode.scrollHeight>g.domNode.clientHeight,y=l.position(g.domNode),v=i.get(g.domNode,"left"),x=i.get(g.domNode,"top"),f=i.get(g.domNode,"maxHeight");i.set(g.domNode,{left:0,top:0,maxHeight:"10000px"});var N=o.toDom(g.domNode.outerHTML);o.place(N,document.body),N.style.zIndex="-1000",N.style.position="absolute";var S=e.mixin({},l.position(N));return S.x=y.x,S.y=y.y,i.set(g.domNode,{left:v+"px",top:x+"px",maxHeight:f+"px"}),t(d.htmlToSvg(N,{iterationsPerScript:100}),function(e){return t(m.printImages({svgStrings:[e],nodeToCanvasFunc:function(e,t,o){var i=e.children[0];return c.svgNodeToCanvasFunc(i,t,o)},scale:5}),function(e){o.destroy(N);var t=new n,i=l.position(h),d=1;p&&(S.x=i.x+10,S.y=i.y+10,d=(i.h-20)/S.h);var m=u.toMap(new r(S.x-i.x,S.y-i.y));m.setSpatialReference(u.spatialReference),t.setGeometry(m);var c=new a;c.setUrl(e[0]),c.setWidth(S.w*d),c.setHeight(S.h*d),c.setOffset(S.w/2*d,-S.h/2*d),t.setSymbol(c);var g=new s;return g.add(t),g})}).otherwise(function(e){return console.log(e),null})}}});