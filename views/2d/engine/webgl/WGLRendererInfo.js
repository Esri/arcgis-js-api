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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/screenUtils","../../../../geometry/support/scaleUtils","../../../../renderers/support/utils","./Utils"],function(e,i,S,c,z,d){function f(e,i){var t=i.length;if(e<i[0].value||1===t)return i[0].size;for(var a=1;a<t;a++)if(e<i[a].value){var s=(e-i[a-1].value)/(i[a].value-i[a-1].value);return i[a-1].size+s*(i[a].size-i[a-1].size)}return i[t-1].size}return function(){function e(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.vvSizeFieldStopsValues=new Float32Array(6),this.vvSizeFieldStopsSizes=new Float32Array(6),this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this.symbolLevels.push(0)}return Object.defineProperty(e.prototype,"vvMaterialParameters",{get:function(){return this._vvMaterialParameters},enumerable:!0,configurable:!0}),e.prototype.updateVisualVariables=function(e,i){var t=this._vvMaterialParameters;if(t.vvOpacityEnabled=!1,t.vvSizeEnabled=!1,t.vvColorEnabled=!1,t.vvRotationEnabled=!1,e){var a=e.size;if(a){if(t.vvSizeEnabled=!0,a.minMaxValue){var s=a.minMaxValue,v=void 0,r=void 0;if(d.isDefined(s.minSize)&&d.isDefined(s.maxSize))if(d.isNumber(s.minSize)&&d.isNumber(s.maxSize))v=S.pt2px(s.minSize),r=S.pt2px(s.maxSize);else{var l=i.scale;v=S.pt2px(f(l,s.minSize.stops)),r=S.pt2px(f(l,s.maxSize.stops))}this.vvSizeMinMaxValue.set([s.minDataValue,s.maxDataValue,v,r])}if(a.scaleStops&&(this.vvSizeScaleStopsValue=S.pt2px(f(i.scale,a.scaleStops.stops))),a.unitValue){var o=c.getMetersPerUnitForSR(i.spatialReference)/z.meterIn[a.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=o/i.resolution}a.fieldStops&&(this.vvSizeFieldStopsValues.set(a.fieldStops.values),this.vvSizeFieldStopsSizes.set(a.fieldStops.sizes))}var n=e.color;n&&(t.vvColorEnabled=!0,this.vvColorValues.set(n.values),this.vvColors.set(n.colors));var u=e.opacity;u&&(t.vvOpacityEnabled=!0,this.vvOpacityValues.set(u.values),this.vvOpacities.set(u.opacities));var p=e.rotation;p&&(t.vvRotationEnabled=!0,t.vvRotationType=p.type)}},e}()});