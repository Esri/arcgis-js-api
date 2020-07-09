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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/Accessor","../../../core/accessorSupport/decorators","./directionsUtils"],(function(e,t,i,r,o,s){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.messages=null,t}return i.__extends(t,e),Object.defineProperty(t.prototype,"primary",{get:function(){var e=this.get("directionsViewModel.lastRoute.routeResults.0.directions"),t=this.directionsViewModel.impedanceAttribute,i=this.get("directionsViewModel.routeParameters.directionsLengthUnits");return s.isTimeUnits(t.units)?s.formatTime(e.totalTime,{unit:t.units.replace("esriNAU","")}):s.formatDistance(this.messages,e.totalLength,{toUnits:i})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"secondary",{get:function(){var e=this.get("directionsViewModel.lastRoute.routeResults.0.directions"),t=this.get("directionsViewModel.routeParameters.directionsLengthUnits"),i=this.directionsViewModel.impedanceAttribute;return s.isTimeUnits(i.units)?s.formatDistance(this.messages,e.totalLength,{toUnits:t}):s.formatTime(e.totalTime)},enumerable:!0,configurable:!0}),i.__decorate([o.property()],t.prototype,"directionsViewModel",void 0),i.__decorate([o.property()],t.prototype,"messages",void 0),i.__decorate([o.property({dependsOn:["directionsViewModel.lastRoute"],readOnly:!0})],t.prototype,"primary",null),i.__decorate([o.property({dependsOn:["directionsViewModel.lastRoute"],readOnly:!0})],t.prototype,"secondary",null),t=i.__decorate([o.subclass("esri.widgets.Directions.support.CostSummary")],t)}(r)}));