// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/when","./CSSFilesLoader","./HTMLStringBuilder","esri/dijit/geoenrichment/utils/htmlToSvg/HTMLtoSVGConverter","esri/dijit/geoenrichment/utils/htmlToSvg/supportClasses/imageUtils/ImageOptimizer","esri/dijit/geoenrichment/utils/async/AsyncQueue","esri/dijit/geoenrichment/utils/DelayUtil"],function(t,n,e,o,i,r,s,a,l,u,c){var d={htmlToSvg:function(t,n,e,o){return this._htmlToSvg(t,n,e,o)},htmlToSvgInHtml:function(t,n,e,o,a){return i(this._htmlToSvg(t,e,o,a),function(t){return i(r.loadCssFontFiles(),function(e){var o=s.composeHtmlStringFromParts({reportTitle:n,contentString:t.join(""),cssFiles:e});return o})})},_htmlToSvg:function(t,n,o,i){var r=this,s=e.create("div",{style:"position: absolute; left: 0px; top: 0px; z-index: -1000;"},document.body);s.innerHTML=t;for(var a=[];s.children.length;){var d=e.create("div",{style:"position: absolute; left: 0px; top: 0px; z-index: -1000;"},document.body);e.place(s.children[0],d),a.push(d)}var m=new u,g=[];return a.map(function(t,e){m.add(function(){return r._nodeToSvg(t,{fitParams:n}).then(function(t){return g.push(t),i(e,a.length),c.delay(50)})})}),m.getPromise().then(function(){return e.destroy(s),a.forEach(function(t){e.destroy(t)}),l.optimizeSize(g,o)})},_nodeToSvg:function(e,o){return a.htmlToSvg(e,t.mixin({iterationsPerScript:100,clipFunc:function(t){return t&&(n.contains(t,"shapeContainer_svgContainerShowAsBar")||n.contains(t,"imageNavigator_imagePaginationRoot"))}},o))}};return d});