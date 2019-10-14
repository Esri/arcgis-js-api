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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style"],function(r,e,s,o,i){var n={},g="esri.dijit.geoenrichment.util.WaitingUtil.waitingDiv";return n.showProgress=function(r,e){r&&!r[g]&&(r[g]=s.create("div",{class:"esriGEProgress esriGEProgressAbsolute "+(e||"")},r))},n.removeProgress=function(r){r&&r[g]&&(s.destroy(r[g]),delete r[g])},n.showProgressBar=function(r){var e=r.node;if(e){e._progressBar&&s.destroy(e._progressBar),delete e._progressBar;var n=Number(r.value);n<=0||isNaN(n)||(n=Math.min(n,1),e._progressBar=s.create("div",{class:"esriGEWaitingMessageProgressBar esriGEWaitingMessageProgressBar_"+(r.position||"bottom")},e),i.set(e._progressBar,"width",o.position(e).w*n+"px"))}},n.showProgressPromise=function(s,o,i){return i=i||{},void 0===s.__progressIndex&&(s.__progressIndex=0),0===s.__progressIndex&&(s.__progressDfd=new r,n.showProgress(s,i.progressClass),i.onShowProgress&&i.onShowProgress()),s.__progressIndex++,e(o).always(function(){s.__progressIndex=Math.max(0,--s.__progressIndex),0===s.__progressIndex&&(s.__progressDfd&&s.__progressDfd.resolve(),delete s.__progressDfd,n.removeProgress(s),i.onRemoveProgress&&i.onRemoveProgress())}),o},n.getProgressPromiseForNode=function(r){return r&&r.__progressDfd&&r.__progressDfd.promise},n});