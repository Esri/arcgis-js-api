// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","dojo/dom-construct","dojo/dom-style","esri/graphic","esri/geometry/ScreenPoint","esri/layers/GraphicsLayer","esri/symbols/PictureMarkerSymbol","esri/dijit/geoenrichment/utils/DomUtil","../imageUtils/ImagePrintUtil","../imageUtils/NodeToCanvasUtil","dojo/i18n!esri/nls/jsapi"],(function(e,t,o,r,i,n,s,a,l,d,m,c,g,u){u=u.geoenrichment.dijit.ReportPlayer.ReportPlayer;return{legendToGraphicsLayer:function(f,h,y){var p=f.domNode.scrollHeight>f.domNode.clientHeight,v=m.noTransformPosition(f.domNode),x=n.get(f.domNode,"left"),N=n.get(f.domNode,"top"),S=n.get(f.domNode,"maxHeight");n.set(f.domNode,{left:0,top:0,maxHeight:"10000px"});var T=i.toDom(f.domNode.outerHTML);i.place(T,document.body),T.style.zIndex="-1000",T.style.position="absolute";var j=t.mixin({},m.noTransformPosition(T));j.x=v.x,j.y=v.y,n.set(f.domNode,{left:x+"px",top:N+"px",maxHeight:S+"px"});var w=new o;return e(["esri/dijit/geoenrichment/utils/htmlToSvg/HTMLtoSVGConverter"],(function(e){w.resolve(e)})),w.promise.then((function(e){return r(e.htmlToSvg(T,{iterationsPerScript:100}),(function(e){return r(c.printImages({svgStrings:[e],nodeToCanvasFunc:function(e,t,o){var r=e.children[0];return g.svgNodeToCanvasFunc(r,t,o)},scale:5}),(function(e){i.destroy(T);var t=new s,o=m.noTransformPosition(y),r=1;p&&(j.x=o.x+10,j.y=o.y+10,r=(o.h-20)/j.h);var n=h.toMap(new a(j.x-o.x,j.y-o.y));n.setSpatialReference(h.spatialReference),t.setGeometry(n);var c=new d;c.setUrl(e[0]),c.setWidth(j.w*r),c.setHeight(j.h*r),c.setOffset(j.w/2*r,-j.h/2*r),t.setSymbol(c);var g=new l;return g.id="legend-layer",g.name=u.legend,g.add(t),g}))}))})).otherwise((function(e){return console.log(e),null}))},correctLegendPositionByScale:function(e,t){var o=e.operationalLayers.filter((function(e){return"legend-layer"===e.id}))[0];if(o){var r=o.featureCollection.layers[0].featureSet.features[0].symbol;r.width*=t,r.height*=t,r.xoffset*=t,r.yoffset*=t}}}}));