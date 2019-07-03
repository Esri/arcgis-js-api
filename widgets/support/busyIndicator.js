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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["../../core/domUtils","../../core/lang","dijit/registry","dojox/widget/Standby","require"],function(a,r,o,e,t){var n={_defaultStandbyParams:{image:t.toUrl("../../themes/base/images/loading-throb.gif"),color:"#fff",opacity:.75,duration:200},create:function(a){var r;if(a=this._normalizeParams(a))return r=new e(n._toStandbyParams(a)),document.body.appendChild(r.domNode),n._createHandle(r)},_normalizeParams:function(r){var e;if(r){if(r.target)return r;if("string"==typeof r){var t=o.byId(r);e=t?t.domNode:a.byId(r)}else e=r.domNode?r.domNode:a.byId(r);if(e)return{target:e}}},_toStandbyParams:function(a){return a.imageUrl&&(a.image=a.imageUrl),a.backgroundColor&&(a.color=a.backgroundColor),a.backgroundOpacity&&(a.opacity=a.backgroundOpacity),a.fadeDuration&&(a.duration=a.fadeDuration),r.mixin({},n._defaultStandbyParams,a)},_createHandle:function(a){return{show:function(){a&&a.show()},hide:function(){a&&a.hide()},destroy:function(){a&&(a.destroy(),a=null)}}}};return n});