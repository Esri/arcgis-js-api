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

define(["require","exports","../../../../geometry/support/scaleUtils","../../../../core/screenUtils","../../../../renderers/support/utils","./Utils"],function(e,t,a,i,r,s){function l(e){for(var t,a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],r=0;16>r;r++){var l=Math.min(r,e.length-1),n=e[l];a[r]=n.ratio,t=4*r,i[t+0]=n.color[0]/255,i[t+1]=n.color[1]/255,i[t+2]=n.color[2]/255,i[t+3]=n.color[3]>1?n.color[3]/255:n.color[3],s.premultiplyAlpha(i,t,!0)}return{values:a,colors:i,refreshColorRamp:!0}}function n(e,t){var a=t.length;if(e<t[0].value||1===a)return t[0].size;for(var i=1;a>i;i++)if(e<t[i].value){var r=(e-t[i-1].value)/(t[i].value-t[i-1].value);return t[i-1].size+r*(t[i].size-t[i-1].size)}return t[a-1].size}var o=function(){function e(e){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.vvSizeFieldStopsValues=new Float32Array(6),this.vvSizeFieldStopsSizes=new Float32Array(6),this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this.symbolLevels.push(0)}return Object.defineProperty(e.prototype,"vvMaterialParameters",{get:function(){return this._vvMaterialParameters},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"heatmapParameters",{get:function(){return this._heatmapParameters},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"vvMaterialParams",{get:function(){return this._vvMaterialParameters},enumerable:!0,configurable:!0}),e.prototype.updateHeatmapParameters=function(e){var t=e.blurRadius,a=Math.round(4.5*e.blurRadius),i=2*a+1;this._heatmapParameters||(this._heatmapParameters={radius:t,blurRadius:a,kernelSize:i,refreshIntensityKernel:!0,intensityKernel:null,color:null,maxPixelIntensity:e.maxPixelIntensity,minPixelIntensity:e.minPixelIntensity});var r=this._heatmapParameters;r.color=l(e.colorStops);var s=1e-6;Math.abs(r.radius-e.radius)>s&&(r.radius=t,r.blurRadius=a,r.kernelSize=i,r.refreshIntensityKernel=!0),r.maxPixelIntensity=e.maxPixelIntensity,r.minPixelIntensity=e.minPixelIntensity},e.prototype.updateVisualVariables=function(e,t){var l=this._vvMaterialParameters;if(l.vvOpacityEnabled=!1,l.vvSizeEnabled=!1,l.vvColorEnabled=!1,l.vvRotationEnabled=!1,e){var o=e.size;if(o){if(l.vvSizeEnabled=!0,o.minMaxValue){var v=o.minMaxValue,u=void 0,p=void 0;if(s.isDefined(v.minSize)&&s.isDefined(v.maxSize))if(s.isNumber(v.minSize)&&s.isNumber(v.maxSize))u=i.pt2px(v.minSize),p=i.pt2px(v.maxSize);else{var m=t.scale;u=i.pt2px(n(m,v.minSize.stops)),p=i.pt2px(n(m,v.maxSize.stops))}this.vvSizeMinMaxValue.set([v.minDataValue,v.maxDataValue,u,p])}if(o.scaleStops&&(this.vvSizeScaleStopsValue=i.pt2px(n(t.scale,o.scaleStops.stops))),o.unitValue){var c=a.getMetersPerUnitForSR(t.spatialReference),h=r.meterIn[o.unitValue.unit],d=c/h;this.vvSizeUnitValueToPixelsRatio=d/t.resolution}o.fieldStops&&(this.vvSizeFieldStopsValues.set(o.fieldStops.values),this.vvSizeFieldStopsSizes.set(o.fieldStops.sizes))}var y=e.color;y&&(l.vvColorEnabled=!0,this.vvColorValues.set(y.values),this.vvColors.set(y.colors));var f=e.opacity;f&&(l.vvOpacityEnabled=!0,this.vvOpacityValues.set(f.values),this.vvOpacities.set(f.opacities));var S=e.rotation;S&&(l.vvRotationEnabled=!0,l.vvRotationType=S.type)}},e}();return o});