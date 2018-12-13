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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Collection","../../core/Warning","../../core/accessorSupport/decorators","./BuildingComponentSublayer","./BuildingSublayer"],function(e,r,n,u,o,s,t,a,i,l){function p(e,r,n){if(e&&Array.isArray(e))return new s(e.map(function(e){var r=c(e);if(r){var u=new r;return u.read(e,n),u}n&&n.messages&&e&&n.messages.push(new t("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:n}))}))}function c(e){return"group"===e.layerType?d:i}var y={type:s,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:p}}},read:!1}},d=function(e){function r(r){var n=e.call(this)||this;return n.type="building-group",n.sublayers=null,n}return u(r,e),o([a.property(y)],r.prototype,"sublayers",void 0),r=o([a.subclass("esri.layers.buildingSublayers.BuildingGroupSublayer")],r)}(a.declared(l));return function(e){function r(e,n){e.forEach(function(e){n(e),"building-group"===e.type&&r(e.sublayers,n)})}e.sublayersProperty=y,e.readSublayers=p,e.forEachSublayer=r}(d||(d={})),d});