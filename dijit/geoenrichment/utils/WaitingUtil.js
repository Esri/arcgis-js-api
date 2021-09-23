// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","esri/dijit/geoenrichment/ReportPlayer/config"],(function(e,r,s,o,i,n){var g={},t="esri.dijit.geoenrichment.util.WaitingUtil.waitingDiv";return g.showProgress=function(e,r){n.isPlayerOnServer||e&&!e[t]&&(e[t]=s.create("div",{class:"esriGEProgress esriGEProgressAbsolute "+(r||"")},e))},g.removeProgress=function(e){e&&e[t]&&(s.destroy(e[t]),delete e[t])},g.showProgressBar=function(e){var r=e.node;if(r){r._progressBar&&s.destroy(r._progressBar),delete r._progressBar;var n=Number(e.value);n<=0||isNaN(n)||(n=Math.min(n,1),r._progressBar=s.create("div",{class:"esriGEWaitingMessageProgressBar esriGEWaitingMessageProgressBar_"+(e.position||"bottom")},r),i.set(r._progressBar,"width",o.position(r).w*n+"px"))}},g.showProgressPromise=function(s,o,i){return s?(i=i||{},void 0===s.__progressIndex&&(s.__progressIndex=0),0===s.__progressIndex&&(s.__progressDfd=new e,g.showProgress(s,i.progressClass),i.onShowProgress&&i.onShowProgress()),s.__progressIndex++,r(o).finally((function(){s.__progressIndex=Math.max(0,--s.__progressIndex),0===s.__progressIndex&&(s.__progressDfd&&s.__progressDfd.resolve(),delete s.__progressDfd,g.removeProgress(s),i.onRemoveProgress&&i.onRemoveProgress())})),o):o},g.getProgressPromiseForNode=function(e){return e&&e.__progressDfd&&e.__progressDfd.promise},g}));