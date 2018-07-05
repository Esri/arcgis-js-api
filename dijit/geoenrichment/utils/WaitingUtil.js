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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/Deferred","dojo/when","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style"],function(r,s,e,o,g,n){var i={},t="esri.dijit.geoenrichment.util.WaitingUtil.waitingDiv";return i.showProgress=function(r,s){r&&!r[t]&&(r[t]=o.create("div",{class:"esriGEProgress esriGEProgressAbsolute "+(s||"")},r))},i.removeProgress=function(r){r&&r[t]&&(o.destroy(r[t]),delete r[t])},i.showProgressBar=function(r){var s=r.node;if(s){s._progressBar&&o.destroy(s._progressBar),delete s._progressBar;var e=Number(r.value);e<=0||isNaN(e)||(e=Math.min(e,1),s._progressBar=o.create("div",{class:"esriGEWaitingMessageProgressBar esriGEWaitingMessageProgressBar_"+(r.position||"bottom")},s),n.set(s._progressBar,"width",g.position(s).w*e+"px"))}},i.showProgressPromise=function(e,o,g){return g=g||{},void 0===e.__progressIndex&&(e.__progressIndex=0),0===e.__progressIndex&&(e.__progressDfd=new r,i.showProgress(e,g.progressClass),g.onShowProgress&&g.onShowProgress()),e.__progressIndex++,s(o).always(function(){e.__progressIndex=Math.max(0,--e.__progressIndex),0===e.__progressIndex&&(e.__progressDfd&&e.__progressDfd.resolve(),delete e.__progressDfd,i.removeProgress(e),g.onRemoveProgress&&g.onRemoveProgress())}),o},i.getProgressPromiseForNode=function(r){return r.__progressDfd&&r.__progressDfd.promise},i});