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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["esri/main","dojo/_base/declare","dojo/Evented","dojo/_base/lang","dojo/_base/kernel","dojo/_base/Deferred","dojo/DeferredList","dojo/_base/array"],function(e,t,r,n,o,a){var u=function(t){function r(e){t[e]||(t[e]=function(){var r=arguments;return a.when(t,function(t){return Array.prototype.unshift.call(r,t.features||t),u(o[e].apply(o,r))})})}return t?(t.then&&(t=n.delegate(t)),t.total||(t.total=a.when(t,function(t){return e._isDefined(t.total)?t.total:t.length||0})),r("forEach"),r("filter"),r("map"),r("some"),r("every"),t):t};return n.setObject("dijit.FeatureLayerQueryResult",u),u});