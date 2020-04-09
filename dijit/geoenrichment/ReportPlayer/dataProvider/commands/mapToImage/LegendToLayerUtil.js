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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/when","dojo/dom-construct","dojo/dom-style","esri/graphic","esri/geometry/ScreenPoint","esri/layers/GraphicsLayer","esri/symbols/PictureMarkerSymbol","esri/dijit/geoenrichment/utils/htmlToSvg/HTMLtoSVGConverter","esri/dijit/geoenrichment/utils/DomUtil","../imageUtils/ImagePrintUtil","../imageUtils/NodeToCanvasUtil","dojo/i18n!esri/nls/jsapi"],(function(e,o,t,i,n,r,s,a,d,l,m,c,g){g=g.geoenrichment.dijit.ReportPlayer.ReportPlayer;return{legendToGraphicsLayer:function(h,u,y){var p=h.domNode.scrollHeight>h.domNode.clientHeight,f=l.noTransformPosition(h.domNode),v=i.get(h.domNode,"left"),x=i.get(h.domNode,"top"),N=i.get(h.domNode,"maxHeight");i.set(h.domNode,{left:0,top:0,maxHeight:"10000px"});var T=t.toDom(h.domNode.outerHTML);t.place(T,document.body),T.style.zIndex="-1000",T.style.position="absolute";var j=e.mixin({},l.noTransformPosition(T));return j.x=f.x,j.y=f.y,i.set(h.domNode,{left:v+"px",top:x+"px",maxHeight:N+"px"}),o(d.htmlToSvg(T,{iterationsPerScript:100}),(function(e){return o(m.printImages({svgStrings:[e],nodeToCanvasFunc:function(e,o,t){var i=e.children[0];return c.svgNodeToCanvasFunc(i,o,t)},scale:5}),(function(e){t.destroy(T);var o=new n,i=l.noTransformPosition(y),d=1;p&&(j.x=i.x+10,j.y=i.y+10,d=(i.h-20)/j.h);var m=u.toMap(new r(j.x-i.x,j.y-i.y));m.setSpatialReference(u.spatialReference),o.setGeometry(m);var c=new a;c.setUrl(e[0]),c.setWidth(j.w*d),c.setHeight(j.h*d),c.setOffset(j.w/2*d,-j.h/2*d),o.setSymbol(c);var h=new s;return h.name=g.legend,h.add(o),h}))})).otherwise((function(e){return console.log(e),null}))}}}));