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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/dom-class","dojo/dom-construct","esri/dijit/geoenrichment/when","dojo/query","esri/dijit/geoenrichment/ReportPlayer/config","./CSSFilesLoader","./HTMLPageBuilder","esri/dijit/geoenrichment/utils/htmlToSvg/HTMLtoSVGConverter","esri/dijit/geoenrichment/utils/htmlToSvg/supportClasses/imageUtils/ImageOptimizer","esri/dijit/geoenrichment/utils/async/AsyncQueue","esri/dijit/geoenrichment/utils/DelayUtil"],(function(e,n,i,r,t,o,s,a,c,l,g,u){var d={htmlToSvg:function(e,n,i,r,t,o,s){return this._htmlToSvg(e,n,i,r,t,o,s)},htmlToSvgInHtml:function(e,n,i,t,o,c,l,g){return r(this._htmlToSvg(e,i,t,o,c,l,g),(function(e){return r(s.loadCssFontFiles(),(function(i){return a.composeHtmlStringFromParts({reportTitle:n,contentString:e.join(""),cssFiles:i})}))}))},_htmlToSvg:function(e,n,s,a,c,d,h){var m,S=this,f=[];if("string"==typeof e)for((m=i.create("div",{class:"esriGEBehindScreen"},document.body)).innerHTML=e;m.children.length;){var v=i.create("div",{class:"esriGEBehindScreen"},document.body);i.place(m.children[0],v),f.push(v)}else for(var p=t(".reportContainerGrid_gridContainerWrapper",m=e),_=0,T=p.length;_<T;_++)f.push(p[_]);var P=new g,y=[];return f.map((function(e,i){P.add((function(){return S._nodeToSvg(e,{fitParams:n,convertUrlImages:c,hideUrlImages:d,getItemResourceUrl:h}).then((function(n){return y.push(n),e.innerHTML="",a(i,f.length),o.isPlayerOnServer?null:u.delay(50)}))}))})),r(P.getPromise()).then((function(){return o.isPlayerOnServer?y:(m.innerHTML="",l.optimizeSize(y,s))}))},_NODES_TO_CLIP:["shapeContainer_svgContainerShowAsBar","imageNavigator_imagePaginationRoot","infographicPageStack_infographicSectionNode_stackNode","infographicPageStack_infographicSectionNode_background"],_nodeToSvg:function(i,r){return c.htmlToSvg(i,e.mixin({iterationsPerScript:o.isPlayerOnServer?1e5:100,clipFunc:function(e){return e&&d._NODES_TO_CLIP.some((function(i){return n.contains(e,i)}))}},r))}};return d}));