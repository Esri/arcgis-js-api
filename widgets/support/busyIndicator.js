// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["dijit/registry","dojo/_base/lang","dojo/dom","dojo/dom-construct","dojox/widget/Standby","require"],function(o,a,r,t,e,n){var d={_defaultStandbyParams:{image:n.toUrl("../../themes/base/images/loading-throb.gif"),color:"#fff",opacity:.75,duration:200},create:function(o){var a;return(o=this._normalizeParams(o))?(a=new e(d._toStandbyParams(o)),t.place(a.domNode,document.body),d._createHandle(a)):void 0},_normalizeParams:function(a){var t;if(a){if(a.target)return a;if("string"==typeof a){var e=o.byId(a);t=e?e.domNode:r.byId(a)}else t=a.domNode?a.domNode:r.byId(a);if(t)return{target:t}}},_toStandbyParams:function(o){return o.imageUrl&&(o.image=o.imageUrl),o.backgroundColor&&(o.color=o.backgroundColor),o.backgroundOpacity&&(o.opacity=o.backgroundOpacity),o.fadeDuration&&(o.duration=o.fadeDuration),a.mixin({},d._defaultStandbyParams,o)},_createHandle:function(o){return{show:function(){o&&o.show()},hide:function(){o&&o.hide()},destroy:function(){o&&(o.destroy(),o=null)}}}};return d});