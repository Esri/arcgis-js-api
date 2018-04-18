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

define(["dojo/when","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style"],function(s,r,e,o,i){var n={},g="esri.dijit.geoenrichment.util.WaitingUtil.waitingDiv";return n.showProgress=function(s,r){s&&!s[g]&&(s[g]=e.create("div",{class:"esriGEProgress esriGEProgressAbsolute "+(r||"")},s))},n.removeProgress=function(s){s&&s[g]&&(e.destroy(s[g]),delete s[g])},n.showProgressBar=function(s){var r=s.node;if(r){r._progressBar&&e.destroy(r._progressBar),delete r._progressBar;var n=Number(s.value);n<=0||isNaN(n)||(n=Math.min(n,1),r._progressBar=e.create("div",{class:"esriGEWaitingMessageProgressBar esriGEWaitingMessageProgressBar_"+(s.position||"bottom")},r),i.set(r._progressBar,"width",o.position(r).w*n+"px"))}},n.showProgressPromise=function(r,e,o){return o=o||{},void 0===r.__progressIndex&&(r.__progressIndex=0),0===r.__progressIndex&&(n.showProgress(r,o.progressClass),o.onShowProgress&&o.onShowProgress()),r.__progressIndex++,s(e).always(function(){r.__progressIndex=Math.max(0,--r.__progressIndex),0===r.__progressIndex&&(n.removeProgress(r),o.onRemoveProgress&&o.onRemoveProgress())}),e},n});