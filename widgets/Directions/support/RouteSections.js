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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/accessorSupport/decorators","./directionsUtils","./RouteSection"],function(e,t,r,o,n,i,c,s){return function(e){function t(t){var r=e.call(this)||this;return r.routePath=null,r}return r(t,e),Object.defineProperty(t.prototype,"sections",{get:function(){var e=this.routePath;return e?this._createSections(e):[]},enumerable:!0,configurable:!0}),t.prototype._createSections=function(e){e=this._filterDuplicateStops(e);var t=e.map(function(e,t){return c.getAssociatedStop(e)?t:-1}).filter(function(e){return e>-1});return t.map(function(r,o){var n=c.getAssociatedStop(e[r]),i=n.attributes.Name,u=o===t.length-1,p=u?[]:e.slice(t[o]+1,t[o+1]);return new s({name:i,maneuvers:p,open:0===o})})},t.prototype._filterDuplicateStops=function(e){var t;return e.filter(function(e){var r=c.getAssociatedStop(e),o=r===t;return t=r,!r||!o})},o([i.property()],t.prototype,"routePath",void 0),o([i.property({dependsOn:["routePath"],readOnly:!0})],t.prototype,"sections",null),t=o([i.subclass("esri.widgets.Directions.support.RouteSections")],t)}(i.declared(n))});