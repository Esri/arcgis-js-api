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

define(["../lang","dojo/_base/lang","dojo/_base/kernel","dojo/_base/Deferred"],(function(e,t,n,r){var a=function(o){if(!o)return o;function u(e){o[e]||(o[e]=function(){var t=arguments;return r.when(o,(function(r){return Array.prototype.unshift.call(t,r.features||r),new a(n[e].apply(n,t))}))})}return o.then&&(o=t.delegate(o)),o.total||(o.total=r.when(o,(function(t){return e.isDefined(t.total)?t.total:t.length||0}))),u("forEach"),u("filter"),u("map"),u("some"),u("every"),o};return t.setObject("dijit.FeatureLayerQueryResult",a),a}));