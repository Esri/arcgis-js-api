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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/promise/all","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/when","./CSSFilesLoader","./HTMLStringBuilder","esri/dijit/geoenrichment/utils/htmlToSvg/HTMLtoSVGConverter","esri/dijit/geoenrichment/utils/htmlToSvg/supportClasses/imageUtils/ImageOptimizer"],function(t,o,n,e,i,r,s,a,l,u){var c={htmlToSvg:function(t,o,n){return this._htmlToSvg(t,o,n)},htmlToSvgInHtml:function(t,o,n,e){return r(this._htmlToSvg(t,n,e),function(t){return r(s.loadCssFontFiles(),function(n){var e=a.composeHtmlStringFromParts({reportTitle:o,contentString:t.join(""),cssFiles:n});return e})})},_htmlToSvg:function(t,n,i){var r=this,s=e.create("div",{style:"position: absolute; left: 0px; top: 0px; z-index: -1000;"},document.body);s.innerHTML=t;for(var a=[];s.children.length;){var l=e.create("div",{style:"position: absolute; left: 0px; top: 0px; z-index: -1000;"},document.body);e.place(s.children[0],l),a.push(l)}return o(a.map(function(t,o){return r._nodeToSvg(t,{fitParams:n})})).then(function(t){return e.destroy(s),a.forEach(function(t){e.destroy(t)}),u.optimizeSize(t,i)})},_nodeToSvg:function(o,e){return l.htmlToSvg(o,t.mixin({clipFunc:function(t){return t&&(n.contains(t,"shapeContainer_svgContainerShowAsBar")||n.contains(t,"imageNavigator_imagePaginationRoot"))}},e))}};return c});