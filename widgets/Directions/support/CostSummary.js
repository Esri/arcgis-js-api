// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","./directionsUtils","../../../core/accessorSupport/decorators","../../../core/Accessor"],function(e,t,r,i,o,n,s){var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),Object.defineProperty(t.prototype,"primary",{get:function(){var e=this.get("directionsViewModel.lastRoute.routeResults.0.directions"),t=this.directionsViewModel.impedanceAttribute,r=this.get("directionsViewModel.routeParameters.directionsLengthUnits");return o.isTimeUnits(t.units)?o.formatTime(e.totalTime,{unit:t.units.replace("esriNAU","")}):o.formatDistance(e.totalLength,{toUnits:r})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"secondary",{get:function(){var e=this.get("directionsViewModel.lastRoute.routeResults.0.directions"),t=this.get("directionsViewModel.routeParameters.directionsLengthUnits"),r=this.directionsViewModel.impedanceAttribute;return o.isTimeUnits(r.units)?o.formatDistance(e.totalLength,{toUnits:t}):o.formatTime(e.totalTime)},enumerable:!0,configurable:!0}),i([n.property()],t.prototype,"directionsViewModel",void 0),i([n.property({dependsOn:["directionsViewModel"],readOnly:!0})],t.prototype,"primary",null),i([n.property({dependsOn:["directionsViewModel"],readOnly:!0})],t.prototype,"secondary",null),t=i([n.subclass("esri.widgets.Directions.support.CostSummary")],t)}(n.declared(s));return c});