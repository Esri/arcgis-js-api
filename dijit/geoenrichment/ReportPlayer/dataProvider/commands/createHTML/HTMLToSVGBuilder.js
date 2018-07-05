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

define(["dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/when","./CSSFilesLoader","./HTMLStringBuilder","esri/dijit/geoenrichment/utils/htmlToSvg/HTMLtoSVGConverter","esri/dijit/geoenrichment/utils/htmlToSvg/supportClasses/imageUtils/ImageOptimizer","esri/dijit/geoenrichment/utils/async/AsyncQueue","esri/dijit/geoenrichment/utils/DelayUtil"],function(n,t,e,i,o,r,s,c,a,u,l){return{htmlToSvg:function(n,t,e,i){return this._htmlToSvg(n,t,e,i)},htmlToSvgInHtml:function(n,t,e,i,c){return o(this._htmlToSvg(n,e,i,c),function(n){return o(r.loadCssFontFiles(),function(e){return s.composeHtmlStringFromParts({reportTitle:t,contentString:n.join(""),cssFiles:e})})})},_htmlToSvg:function(n,t,i,o){var r=this,s=e.create("div",{class:"esriGEBehindScreen"},document.body);s.innerHTML=n;for(var c=[];s.children.length;){var d=e.create("div",{class:"esriGEBehindScreen"},document.body);e.place(s.children[0],d),c.push(d)}var m=new u,h=[];return c.map(function(n,e){m.add(function(){return r._nodeToSvg(n,{fitParams:t}).then(function(n){return h.push(n),o(e,c.length),l.delay(50)})})}),m.getPromise().then(function(){return e.destroy(s),c.forEach(function(n){e.destroy(n)}),a.optimizeSize(h,i)})},_nodeToSvg:function(e,i){return c.htmlToSvg(e,n.mixin({iterationsPerScript:100,clipFunc:function(n){return n&&(t.contains(n,"shapeContainer_svgContainerShowAsBar")||t.contains(n,"imageNavigator_imagePaginationRoot"))}},i))}}});