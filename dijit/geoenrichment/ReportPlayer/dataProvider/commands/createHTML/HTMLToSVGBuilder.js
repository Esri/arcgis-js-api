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

define(["dojo/_base/lang","dojo/dom-class","dojo/dom-construct","esri/dijit/geoenrichment/when","./CSSFilesLoader","./HTMLPageBuilder","esri/dijit/geoenrichment/utils/htmlToSvg/HTMLtoSVGConverter","esri/dijit/geoenrichment/utils/htmlToSvg/supportClasses/imageUtils/ImageOptimizer","esri/dijit/geoenrichment/utils/async/AsyncQueue","esri/dijit/geoenrichment/utils/DelayUtil"],(function(e,n,t,i,o,r,c,s,a,u){var g={htmlToSvg:function(e,n,t,i,o,r,c){return this._htmlToSvg(e,n,t,i,o,r,c)},htmlToSvgInHtml:function(e,n,t,c,s,a,u,g){return i(this._htmlToSvg(e,t,c,s,a,u,g),(function(e){return i(o.loadCssFontFiles(),(function(t){return r.composeHtmlStringFromParts({reportTitle:n,contentString:e.join(""),cssFiles:t})}))}))},_htmlToSvg:function(e,n,i,o,r,c,g){var l=this,d=t.create("div",{class:"esriGEBehindScreen"},document.body);d.innerHTML=e;for(var h=[];d.children.length;){var m=t.create("div",{class:"esriGEBehindScreen"},document.body);t.place(d.children[0],m),h.push(m)}var S=new a,f=[];return h.map((function(e,t){S.add((function(){return l._nodeToSvg(e,{fitParams:n,convertUrlImages:r,hideUrlImages:c,getItemResourceUrl:g}).then((function(e){return f.push(e),o(t,h.length),u.delay(50)}))}))})),S.getPromise().then((function(){return t.destroy(d),h.forEach((function(e){t.destroy(e)})),s.optimizeSize(f,i)}))},_NODES_TO_CLIP:["shapeContainer_svgContainerShowAsBar","imageNavigator_imagePaginationRoot","infographicPageStack_infographicSectionNode_stackNode","infographicPageStack_infographicSectionNode_background"],_nodeToSvg:function(t,i){return c.htmlToSvg(t,e.mixin({iterationsPerScript:100,clipFunc:function(e){return e&&g._NODES_TO_CLIP.some((function(t){return n.contains(e,t)}))}},i))}};return g}));