// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["require","exports","../../../../core/screenUtils","../../../../geometry/support/scaleUtils","../../../../renderers/support/utils","./color","./Utils"],(function(e,t,i,a,r,s,l){function o(e,t){var i=t.length;if(e<t[0].value||1===i)return t[0].size;for(var a=1;a<i;a++)if(e<t[a].value){var r=(e-t[a-1].value)/(t[a].value-t[a-1].value);return t[a-1].size+r*(t[a].size-t[a-1].size)}return t[i-1].size}return function(){function e(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.vvSizeFieldStopsValues=new Float32Array(6),this.vvSizeFieldStopsSizes=new Float32Array(6),this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this.symbolLevels.push(0)}return Object.defineProperty(e.prototype,"vvMaterialParameters",{get:function(){return this._vvMaterialParameters},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"heatmapParameters",{get:function(){return this._heatmapParameters},enumerable:!0,configurable:!0}),e.prototype.updateHeatmapParameters=function(e){var t=e.blurRadius,i=Math.round(4.5*e.blurRadius),a=2*i+1;this._heatmapParameters||(this._heatmapParameters={radius:t,blurRadius:i,kernelSize:a,refreshIntensityKernel:!0,intensityKernel:null,color:null,maxPixelIntensity:e.maxPixelIntensity,minPixelIntensity:e.minPixelIntensity});var r=this._heatmapParameters;r.color=function(e){for(var t,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],r=0;r<16;r++){var l=e[Math.min(r,e.length-1)];i[r]=l.ratio,a[(t=4*r)+0]=l.color[0]/255,a[t+1]=l.color[1]/255,a[t+2]=l.color[2]/255,a[t+3]=l.color[3]>1?l.color[3]/255:l.color[3],s.premultiplyAlpha(a,t,!0)}return{values:i,colors:a,refreshColorRamp:!0}}(e.colorStops);Math.abs(r.radius-e.radius)>1e-6&&(r.radius=t,r.blurRadius=i,r.kernelSize=a,r.refreshIntensityKernel=!0),r.maxPixelIntensity=e.maxPixelIntensity,r.minPixelIntensity=e.minPixelIntensity},e.prototype.updateVisualVariables=function(e,t){var s=this._vvMaterialParameters;if(s.vvOpacityEnabled=!1,s.vvSizeEnabled=!1,s.vvColorEnabled=!1,s.vvRotationEnabled=!1,e){var n=e.size;if(n){if(s.vvSizeEnabled=!0,n.minMaxValue){var v=n.minMaxValue,u=void 0,p=void 0;if(l.isDefined(v.minSize)&&l.isDefined(v.maxSize))if(l.isNumber(v.minSize)&&l.isNumber(v.maxSize))u=i.pt2px(v.minSize),p=i.pt2px(v.maxSize);else{var m=t.scale;u=i.pt2px(o(m,v.minSize.stops)),p=i.pt2px(o(m,v.maxSize.stops))}this.vvSizeMinMaxValue.set([v.minDataValue,v.maxDataValue,u,p])}if(n.scaleStops&&(this.vvSizeScaleStopsValue=i.pt2px(o(t.scale,n.scaleStops.stops))),n.unitValue){var c=a.getMetersPerUnitForSR(t.spatialReference)/r.meterIn[n.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=c/t.resolution}n.fieldStops&&(this.vvSizeFieldStopsValues.set(n.fieldStops.values),this.vvSizeFieldStopsSizes.set(n.fieldStops.sizes))}var h=e.color;h&&(s.vvColorEnabled=!0,this.vvColorValues.set(h.values),this.vvColors.set(h.colors));var d=e.opacity;d&&(s.vvOpacityEnabled=!0,this.vvOpacityValues.set(d.values),this.vvOpacities.set(d.opacities));var y=e.rotation;y&&(s.vvRotationEnabled=!0,s.vvRotationType=y.type)}},e}()}));