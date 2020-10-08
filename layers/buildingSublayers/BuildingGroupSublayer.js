// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/Collection","../../core/loadAll","../../core/Warning","../../core/accessorSupport/decorators","./BuildingComponentSublayer","./BuildingSublayer"],(function(e,r,n,o,t,u,i,s,a){"use strict";var l={type:o,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:y}}},read:!1}};function y(e,r,n){if(e&&Array.isArray(e))return new o(e.map((function(e){var r=function(e){return"group"===e.layerType?c:s}(e);if(r){var o=new r;return o.read(e,n),o}n&&n.messages&&e&&n.messages.push(new u("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:n}))})))}var c=function(e){function r(r){var n=e.call(this,r)||this;return n.type="building-group",n.listMode="show",n.sublayers=null,n}var o;return n.__extends(r,e),o=r,r.prototype.loadAll=function(){var e=this;return t.loadAllChildren(this,(function(r){return o.forEachSublayer(e.sublayers,(function(e){"building-group"!==e.type&&r(e)}))}))},n.__decorate([i.property({type:["hide","show","hide-children"],json:{write:!0}})],r.prototype,"listMode",void 0),n.__decorate([i.property(l)],r.prototype,"sublayers",void 0),r=o=n.__decorate([i.subclass("esri.layers.buildingSublayers.BuildingGroupSublayer")],r)}(a);return function(e){e.sublayersProperty=l,e.readSublayers=y,e.forEachSublayer=function e(r,n){r.forEach((function(r){n(r),"building-group"===r.type&&e(r.sublayers,n)}))}}(c||(c={})),c}));