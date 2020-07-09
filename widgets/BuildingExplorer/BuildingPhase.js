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

define(["require","exports","tslib","../../core/maybe","../../core/accessorSupport/decorators","./BuildingNumericFilterViewModel","./support/buildingLayerUtils","./support/filterUtils","./support/validation"],(function(e,r,t,l,i,s,a,o,d){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._createdPhaseFieldName=null,r._demolishedPhaseFieldName=null,r._parseValueFromFilter=function(e){for(var t,l=r._createdPhaseFieldName,i=new RegExp(l+"\\s*<=\\s*(\\d+)\\s*OR\\s*"+l+"\\s*IS\\s*NULL","gi"),s=r._demolishedPhaseFieldName,a=new RegExp(s+"\\s*>\\s*(\\d+)\\s*OR\\s*"+s+"\\s*IS\\s*NULL","gi"),o=0,d=e.filterBlocks.items;o<d.length;o++){var n=d[o].filterExpression,u=null!==(t=i.exec(n))&&void 0!==t?t:a.exec(n);if(u)return parseInt(u[1],10)}return null},r}return t.__extends(r,e),Object.defineProperty(r.prototype,"filterExpressions",{get:function(){if(!this.enabled)return{solid:null,xRay:null};var e=[],r=this._createdPhaseFieldName;r&&e.push("("+r+" <= "+this.value+" OR "+r+" IS NULL)");var t=this._demolishedPhaseFieldName;t&&e.push("("+t+" > "+this.value+" OR "+t+" IS NULL)");var l=e.join(" AND ");return{solid:l,xRay:l}},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"_lastValue",{get:function(){var e=this.allowedValues;return e.length>0?e[e.length-1]:0},enumerable:!0,configurable:!0}),r.prototype._setup=function(){var e=this,r=[];this.layers.forEach((function(t){var i=a.findFieldInfoByModelName(t,"createdphase");l.isSome(i)&&(e._createdPhaseFieldName=i.fieldName,r.push(i));var s=a.findFieldInfoByModelName(t,"demolishedphase");l.isSome(s)&&(e._demolishedPhaseFieldName=s.fieldName,r.push(s))})),this._domainInfo=d.getDomainInfo(r);var t=o.getValueFromFilters(this.layers,this._parseValueFromFilter);this.select(l.isSome(t)?t:this._lastValue)},t.__decorate([i.property({readOnly:!0,dependsOn:["enabled","value","_createdPhaseFieldName","_demolishedPhaseFieldName"]})],r.prototype,"filterExpressions",null),t.__decorate([i.property()],r.prototype,"_createdPhaseFieldName",void 0),t.__decorate([i.property()],r.prototype,"_demolishedPhaseFieldName",void 0),t.__decorate([i.property({readOnly:!0,dependsOn:["allowedValues.length"]})],r.prototype,"_lastValue",null),r=t.__decorate([i.subclass("esri.widgets.BuildingExplorer.BuildingPhase")],r)}(s)}));