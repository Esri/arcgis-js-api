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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/asyncUtils","../../core/Collection","../../core/loadAll","../../core/Warning","../../core/accessorSupport/decorators","./BuildingComponentSublayer","./BuildingSublayer"],function(e,r,n,o,t,u,s,i,a,l,p,c){function y(e,r,n){if(e&&Array.isArray(e))return new s(e.map(function(e){var r=d(e);if(r){var o=new r;return o.read(e,n),o}n&&n.messages&&e&&n.messages.push(new a("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:n}))}))}function d(e){return"group"===e.layerType?f:p}var b={type:s,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:y}}},read:!1}},f=function(e){function r(r){var n=e.call(this)||this;return n.type="building-group",n.listMode="show",n.sublayers=null,n}o(r,e),n=r,r.prototype.loadAll=function(){var e=this;return u.safeCast(i.loadAllChildren(this,function(r){return n.forEachSublayer(e.sublayers,function(e){"building-group"!==e.type&&r(e)})}))};var n;return t([l.property({type:["hide","show","hide-children"],json:{write:!0}})],r.prototype,"listMode",void 0),t([l.property(b)],r.prototype,"sublayers",void 0),r=n=t([l.subclass("esri.layers.buildingSublayers.BuildingGroupSublayer")],r)}(l.declared(c));return function(e){function r(e,n){e.forEach(function(e){n(e),"building-group"===e.type&&r(e.sublayers,n)})}e.sublayersProperty=b,e.readSublayers=y,e.forEachSublayer=r}(f||(f={})),f});