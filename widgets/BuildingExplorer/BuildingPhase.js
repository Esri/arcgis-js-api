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

define(["require","exports","tslib","../../core/maybe","../../core/accessorSupport/decorators","./BuildingNumericFilterViewModel","./support/buildingLayerUtils","./support/filterUtils","./support/validation"],(function(e,t,l,r,s,i,a,o,d){"use strict";return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._createdPhaseFieldName=null,t._demolishedPhaseFieldName=null,t._parseValueFromFilter=function(e){for(var l,r=t._createdPhaseFieldName,s=new RegExp(r+"\\s*<=\\s*(\\d+)\\s*OR\\s*"+r+"\\s*IS\\s*NULL","gi"),i=t._demolishedPhaseFieldName,a=new RegExp(i+"\\s*>\\s*(\\d+)\\s*OR\\s*"+i+"\\s*IS\\s*NULL","gi"),o=0,d=e.filterBlocks.items;o<d.length;o++){var n=d[o].filterExpression,u=null!==(l=s.exec(n))&&void 0!==l?l:a.exec(n);if(u)return parseInt(u[1],10)}return null},t}return l.__extends(t,e),Object.defineProperty(t.prototype,"filterExpressions",{get:function(){if(!this.enabled)return{solid:null,xRay:null};var e=[],t=this._createdPhaseFieldName;t&&e.push("("+t+" <= "+this.value+" OR "+t+" IS NULL)");var l=this._demolishedPhaseFieldName;l&&e.push("("+l+" > "+this.value+" OR "+l+" IS NULL)");var r=e.join(" AND ");return{solid:r,xRay:r}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_lastValue",{get:function(){var e=this.allowedValues;return e.length>0?e[e.length-1]:0},enumerable:!1,configurable:!0}),t.prototype._setup=function(){var e=this,t=[];this.layers.forEach((function(l){var s=a.findFieldInfoByModelName(l,"createdphase");r.isSome(s)&&(e._createdPhaseFieldName=s.fieldName,t.push(s));var i=a.findFieldInfoByModelName(l,"demolishedphase");r.isSome(i)&&(e._demolishedPhaseFieldName=i.fieldName,t.push(i))})),this._domainInfo=d.getDomainInfo(t);var l=o.getValueFromFilters(this.layers,this._parseValueFromFilter);this.allowedValues.length>0?this.select(r.isSome(l)?l:this._lastValue):this.clear()},l.__decorate([s.property({readOnly:!0,dependsOn:["enabled","value","_createdPhaseFieldName","_demolishedPhaseFieldName"]})],t.prototype,"filterExpressions",null),l.__decorate([s.property()],t.prototype,"_createdPhaseFieldName",void 0),l.__decorate([s.property()],t.prototype,"_demolishedPhaseFieldName",void 0),l.__decorate([s.property({readOnly:!0,dependsOn:["allowedValues.length"]})],t.prototype,"_lastValue",null),t=l.__decorate([s.subclass("esri.widgets.BuildingExplorer.BuildingPhase")],t)}(i)}));