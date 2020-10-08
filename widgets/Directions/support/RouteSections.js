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

define(["require","exports","tslib","../../../core/Accessor","../../../core/accessorSupport/decorators","./directionsUtils","./RouteSection"],(function(t,e,r,o,n,i,s){"use strict";return function(t){function e(e){var r=t.call(this,e)||this;return r.routePath=null,r}return r.__extends(e,t),Object.defineProperty(e.prototype,"sections",{get:function(){var t=this.routePath;return t?this._createSections(t):[]},enumerable:!1,configurable:!0}),e.prototype._createSections=function(t){var e=(t=this._filterDuplicateStops(t)).map((function(t,e){return i.getAssociatedStop(t)?e:-1})).filter((function(t){return t>-1}));return e.map((function(r,o){var n=i.getAssociatedStop(t[r]).attributes.Name,c=o===e.length-1?[]:t.slice(e[o]+1,e[o+1]);return new s({name:n,maneuvers:c,open:0===o})}))},e.prototype._filterDuplicateStops=function(t){var e;return t.filter((function(t){var r=i.getAssociatedStop(t),o=r===e;return e=r,!r||!o}))},r.__decorate([n.property()],e.prototype,"routePath",void 0),r.__decorate([n.property({dependsOn:["routePath"],readOnly:!0})],e.prototype,"sections",null),e=r.__decorate([n.subclass("esri.widgets.Directions.support.RouteSections")],e)}(o)}));