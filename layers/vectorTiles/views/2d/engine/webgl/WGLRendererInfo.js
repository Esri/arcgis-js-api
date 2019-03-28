// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["require","exports","../../../../core/screenUtils","../../../../geometry/support/scaleUtils","../../../../renderers/support/utils","./color","./Utils"],function(e,t,i,a,r,s,l){function o(e){for(var t,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],r=0;r<16;r++){var l=Math.min(r,e.length-1),o=e[l];i[r]=o.ratio,t=4*r,a[t+0]=o.color[0]/255,a[t+1]=o.color[1]/255,a[t+2]=o.color[2]/255,a[t+3]=o.color[3]>1?o.color[3]/255:o.color[3],s.premultiplyAlpha(a,t,!0)}return{values:i,colors:a,refreshColorRamp:!0}}function n(e,t){var i=t.length;if(e<t[0].value||1===i)return t[0].size;for(var a=1;a<i;a++)if(e<t[a].value){var r=(e-t[a-1].value)/(t[a].value-t[a-1].value);return t[a-1].size+r*(t[a].size-t[a-1].size)}return t[i-1].size}return function(){function e(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.vvSizeFieldStopsValues=new Float32Array(6),this.vvSizeFieldStopsSizes=new Float32Array(6),this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this.symbolLevels.push(0)}return Object.defineProperty(e.prototype,"vvMaterialParameters",{get:function(){return this._vvMaterialParameters},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"heatmapParameters",{get:function(){return this._heatmapParameters},enumerable:!0,configurable:!0}),e.prototype.updateHeatmapParameters=function(e){var t=e.blurRadius,i=Math.round(4.5*e.blurRadius),a=2*i+1;this._heatmapParameters||(this._heatmapParameters={radius:t,blurRadius:i,kernelSize:a,refreshIntensityKernel:!0,intensityKernel:null,color:null,maxPixelIntensity:e.maxPixelIntensity,minPixelIntensity:e.minPixelIntensity});var r=this._heatmapParameters;r.color=o(e.colorStops);Math.abs(r.radius-e.radius)>1e-6&&(r.radius=t,r.blurRadius=i,r.kernelSize=a,r.refreshIntensityKernel=!0),r.maxPixelIntensity=e.maxPixelIntensity,r.minPixelIntensity=e.minPixelIntensity},e.prototype.updateVisualVariables=function(e,t){var s=this._vvMaterialParameters;if(s.vvOpacityEnabled=!1,s.vvSizeEnabled=!1,s.vvColorEnabled=!1,s.vvRotationEnabled=!1,e){var o=e.size;if(o){if(s.vvSizeEnabled=!0,o.minMaxValue){var v=o.minMaxValue,u=void 0,p=void 0;if(l.isDefined(v.minSize)&&l.isDefined(v.maxSize))if(l.isNumber(v.minSize)&&l.isNumber(v.maxSize))u=i.pt2px(v.minSize),p=i.pt2px(v.maxSize);else{var m=t.scale;u=i.pt2px(n(m,v.minSize.stops)),p=i.pt2px(n(m,v.maxSize.stops))}this.vvSizeMinMaxValue.set([v.minDataValue,v.maxDataValue,u,p])}if(o.scaleStops&&(this.vvSizeScaleStopsValue=i.pt2px(n(t.scale,o.scaleStops.stops))),o.unitValue){var c=a.getMetersPerUnitForSR(t.spatialReference),h=r.meterIn[o.unitValue.unit],d=c/h;this.vvSizeUnitValueToPixelsRatio=d/t.resolution}o.fieldStops&&(this.vvSizeFieldStopsValues.set(o.fieldStops.values),this.vvSizeFieldStopsSizes.set(o.fieldStops.sizes))}var y=e.color;y&&(s.vvColorEnabled=!0,this.vvColorValues.set(y.values),this.vvColors.set(y.colors));var S=e.opacity;S&&(s.vvOpacityEnabled=!0,this.vvOpacityValues.set(S.values),this.vvOpacities.set(S.opacities));var f=e.rotation;f&&(s.vvRotationEnabled=!0,s.vvRotationType=f.type)}},e}()});