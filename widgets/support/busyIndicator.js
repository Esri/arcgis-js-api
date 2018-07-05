// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["../../core/lang","dijit/registry","dojo/dom","dojo/dom-construct","dojox/widget/Standby","require"],function(o,a,r,t,e,n){var d={_defaultStandbyParams:{image:n.toUrl("../../themes/base/images/loading-throb.gif"),color:"#fff",opacity:.75,duration:200},create:function(o){var a;if(o=this._normalizeParams(o))return a=new e(d._toStandbyParams(o)),t.place(a.domNode,document.body),d._createHandle(a)},_normalizeParams:function(o){var t;if(o){if(o.target)return o;if("string"==typeof o){var e=a.byId(o);t=e?e.domNode:r.byId(o)}else t=o.domNode?o.domNode:r.byId(o);if(t)return{target:t}}},_toStandbyParams:function(a){return a.imageUrl&&(a.image=a.imageUrl),a.backgroundColor&&(a.color=a.backgroundColor),a.backgroundOpacity&&(a.opacity=a.backgroundOpacity),a.fadeDuration&&(a.duration=a.fadeDuration),o.mixin({},d._defaultStandbyParams,a)},_createHandle:function(o){return{show:function(){o&&o.show()},hide:function(){o&&o.hide()},destroy:function(){o&&(o.destroy(),o=null)}}}};return d});