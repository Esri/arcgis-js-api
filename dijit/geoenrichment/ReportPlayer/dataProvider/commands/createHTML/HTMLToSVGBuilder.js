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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/dom-class","dojo/dom-construct","esri/dijit/geoenrichment/when","./CSSFilesLoader","./HTMLStringBuilder","esri/dijit/geoenrichment/utils/htmlToSvg/HTMLtoSVGConverter","esri/dijit/geoenrichment/utils/htmlToSvg/supportClasses/imageUtils/ImageOptimizer","esri/dijit/geoenrichment/utils/async/AsyncQueue","esri/dijit/geoenrichment/utils/DelayUtil"],function(e,n,t,i,r,o,s,c,a,u){return{htmlToSvg:function(e,n,t,i){return this._htmlToSvg(e,n,t,i)},htmlToSvgInHtml:function(e,n,t,s,c){return i(this._htmlToSvg(e,t,s,c),function(e){return i(r.loadCssFontFiles(),function(t){return o.composeHtmlStringFromParts({reportTitle:n,contentString:e.join(""),cssFiles:t})})})},_htmlToSvg:function(e,n,i,r){var o=this,s=t.create("div",{class:"esriGEBehindScreen"},document.body);s.innerHTML=e;for(var l=[];s.children.length;){var d=t.create("div",{class:"esriGEBehindScreen"},document.body);t.place(s.children[0],d),l.push(d)}var m=new a,h=[];return l.map(function(e,t){m.add(function(){return o._nodeToSvg(e,{fitParams:n}).then(function(e){return h.push(e),r(t,l.length),u.delay(50)})})}),m.getPromise().then(function(){return t.destroy(s),l.forEach(function(e){t.destroy(e)}),c.optimizeSize(h,i)})},_nodeToSvg:function(t,i){return s.htmlToSvg(t,e.mixin({iterationsPerScript:100,clipFunc:function(e){return e&&(n.contains(e,"shapeContainer_svgContainerShowAsBar")||n.contains(e,"imageNavigator_imagePaginationRoot"))}},i))}}});