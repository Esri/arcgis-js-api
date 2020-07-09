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

define(["require","exports","tslib","../../core/maybe","../../core/accessorSupport/decorators","./BuildingNumericFilterViewModel","./support/buildingLayerUtils","./support/filterUtils","./support/validation"],(function(e,l,t,r,i,s,o,n,a){return function(e){function l(){var l=null!==e&&e.apply(this,arguments)||this;return l._levelFieldName=null,l._parseValueFromFilter=function(e){for(var t=new RegExp(l._levelFieldName+"\\s*=\\s*(\\d+)","gi"),i=new RegExp(l._levelFieldName+"\\s*<\\s*(\\d+)","gi"),s=0,o=e.filterBlocks.items;s<o.length;s++){var n=o[s],a=n.filterMode,u=n.filterExpression,d=null;if("solid"===a.type?d=t.exec(u):"x-ray"===a.type&&(d=i.exec(u)),r.isSome(d))return parseInt(d[1],10)}return null},l}return t.__extends(l,e),Object.defineProperty(l.prototype,"filterExpressions",{get:function(){return this.enabled&&this._levelFieldName?{xRay:this._levelFieldName+" < "+this.value,solid:this._levelFieldName+" = "+this.value}:{solid:null,xRay:null}},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_firstValue",{get:function(){var e=this.allowedValues;return e.length>0?e[0]:0},enumerable:!0,configurable:!0}),l.prototype._setup=function(){var e=this,l=[];this.layers.forEach((function(t){var i=o.findFieldInfoByModelName(t,"bldglevel");r.isSome(i)&&(e._levelFieldName=i.fieldName,l.push(i))})),this._domainInfo=a.getDomainInfo(l);var t=n.getValueFromFilters(this.layers,this._parseValueFromFilter);r.isSome(t)?this.select(t):(this.enabled=!1,this.value=this._firstValue)},t.__decorate([i.property({readOnly:!0,dependsOn:["enabled","value","_levelFieldName"]})],l.prototype,"filterExpressions",null),t.__decorate([i.property()],l.prototype,"_levelFieldName",void 0),t.__decorate([i.property({readOnly:!0,dependsOn:["allowedValues.length"]})],l.prototype,"_firstValue",null),l=t.__decorate([i.subclass("esri.widgets.BuildingExplorer.BuildingLevel")],l)}(s)}));