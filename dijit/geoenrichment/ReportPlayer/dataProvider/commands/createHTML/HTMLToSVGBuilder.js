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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/dom-class","dojo/dom-construct","esri/dijit/geoenrichment/when","./CSSFilesLoader","./HTMLPageBuilder","esri/dijit/geoenrichment/utils/htmlToSvg/HTMLtoSVGConverter","esri/dijit/geoenrichment/utils/htmlToSvg/supportClasses/imageUtils/ImageOptimizer","esri/dijit/geoenrichment/utils/async/AsyncQueue","esri/dijit/geoenrichment/utils/DelayUtil"],function(e,n,t,i,o,r,c,s,a,u){var g={htmlToSvg:function(e,n,t,i){return this._htmlToSvg(e,n,t,i)},htmlToSvgInHtml:function(e,n,t,c,s){return i(this._htmlToSvg(e,t,c,s),function(e){return i(o.loadCssFontFiles(),function(t){return r.composeHtmlStringFromParts({reportTitle:n,contentString:e.join(""),cssFiles:t})})})},_htmlToSvg:function(e,n,i,o){var r=this,c=t.create("div",{class:"esriGEBehindScreen"},document.body);c.innerHTML=e;for(var g=[];c.children.length;){var d=t.create("div",{class:"esriGEBehindScreen"},document.body);t.place(c.children[0],d),g.push(d)}var l=new a,h=[];return g.map(function(e,t){l.add(function(){return r._nodeToSvg(e,{fitParams:n}).then(function(e){return h.push(e),o(t,g.length),u.delay(50)})})}),l.getPromise().then(function(){return t.destroy(c),g.forEach(function(e){t.destroy(e)}),s.optimizeSize(h,i)})},_NODES_TO_CLIP:["shapeContainer_svgContainerShowAsBar","imageNavigator_imagePaginationRoot","infographicPageStack_infographicSectionNode_stackNode","infographicPageStack_infographicSectionNode_background"],_nodeToSvg:function(t,i){return c.htmlToSvg(t,e.mixin({iterationsPerScript:100,clipFunc:function(e){return e&&g._NODES_TO_CLIP.some(function(t){return n.contains(e,t)})}},i))}};return g});