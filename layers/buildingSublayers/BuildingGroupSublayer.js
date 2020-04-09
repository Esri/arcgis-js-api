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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Collection","../../core/loadAll","../../core/Warning","../../core/accessorSupport/decorators","./BuildingComponentSublayer","./BuildingSublayer"],(function(e,r,n,o,t,u,i,s,l,a,p){var c={type:u,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:d}}},read:!1}};function d(e,r,n){if(e&&Array.isArray(e))return new u(e.map((function(e){var r=function(e){return"group"===e.layerType?y:a}(e);if(r){var o=new r;return o.read(e,n),o}n&&n.messages&&e&&n.messages.push(new s("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:n}))})))}var y=function(e){function r(r){var n=e.call(this,r)||this;return n.type="building-group",n.listMode="show",n.sublayers=null,n}var n;return o(r,e),n=r,r.prototype.loadAll=function(){var e=this;return i.loadAllChildren(this,(function(r){return n.forEachSublayer(e.sublayers,(function(e){"building-group"!==e.type&&r(e)}))}))},t([l.property({type:["hide","show","hide-children"],json:{write:!0}})],r.prototype,"listMode",void 0),t([l.property(c)],r.prototype,"sublayers",void 0),r=n=t([l.subclass("esri.layers.buildingSublayers.BuildingGroupSublayer")],r)}(l.declared(p));return function(e){e.sublayersProperty=c,e.readSublayers=d,e.forEachSublayer=function e(r,n){r.forEach((function(r){n(r),"building-group"===r.type&&e(r.sublayers,n)}))}}(y||(y={})),y}));