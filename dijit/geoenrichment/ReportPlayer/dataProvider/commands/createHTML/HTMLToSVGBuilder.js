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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/when","./CSSFilesLoader","./HTMLStringBuilder","esri/dijit/geoenrichment/utils/htmlToSvg/HTMLtoSVGConverter","esri/dijit/geoenrichment/utils/htmlToSvg/supportClasses/imageUtils/ImageOptimizer","esri/dijit/geoenrichment/utils/async/AsyncQueue","esri/dijit/geoenrichment/utils/DelayUtil"],function(t,n,e,o,i,r,s,l,u,a,c){return{htmlToSvg:function(t,n,e,o){return this._htmlToSvg(t,n,e,o)},htmlToSvgInHtml:function(t,n,e,o,l){return i(this._htmlToSvg(t,e,o,l),function(t){return i(r.loadCssFontFiles(),function(e){return s.composeHtmlStringFromParts({reportTitle:n,contentString:t.join(""),cssFiles:e})})})},_htmlToSvg:function(t,n,o,i){var r=this,s=e.create("div",{style:"position: absolute; left: 0px; top: 0px; z-index: -1000;"},document.body);s.innerHTML=t;for(var l=[];s.children.length;){var d=e.create("div",{style:"position: absolute; left: 0px; top: 0px; z-index: -1000;"},document.body);e.place(s.children[0],d),l.push(d)}var m=new a,g=[];return l.map(function(t,e){m.add(function(){return r._nodeToSvg(t,{fitParams:n}).then(function(t){return g.push(t),i(e,l.length),c.delay(50)})})}),m.getPromise().then(function(){return e.destroy(s),l.forEach(function(t){e.destroy(t)}),u.optimizeSize(g,o)})},_nodeToSvg:function(e,o){return l.htmlToSvg(e,t.mixin({iterationsPerScript:100,clipFunc:function(t){return t&&(n.contains(t,"shapeContainer_svgContainerShowAsBar")||n.contains(t,"imageNavigator_imagePaginationRoot"))}},o))}}});