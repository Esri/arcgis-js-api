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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/arrayUtils","../../core/lang","./RasterFunction","../../renderers/support/colorRampUtils","../../renderers/support/stretchRendererUtils"],function(e,r,t,a,n,u,o){function i(e){var r=e.type;return"raster-stretch"===r||"unique-value"===r||"class-breaks"===r}function s(e,r){if(!e||!r)return a.clone(e||r);var t=a.clone(e);if("none"!==r.functionName.toLowerCase()){l(t.functionArguments).Raster=r}return t}function c(e,r){switch(r=r||{},e.type){case"raster-stretch":return m(e,r);case"class-breaks":return p(e,r);case"unique-value":return g(e,r)}}function l(e){var r=e.Raster;return r&&"esri.layers.support.RasterFunction"===r.declaredClass?l(r.functionArguments):e}function m(e,r){var t=new n;t.functionName="Stretch";var a=R[o.stretchTypeJSONDict.toJSON(e.stretchType)],i={StretchType:a,Statistics:e.statistics,DRA:e.dynamicRangeAdjustment,UseGamma:e.useGamma,Gamma:e.gamma,ComputeGamma:e.computeGamma};if(null!=e.outputMin&&(i.Min=e.outputMin),null!=e.outputMax&&(i.Max=e.outputMax),a===R.standardDeviation?(i.NumberOfStandardDeviations=e.numberOfStandardDeviations,t.outputPixelType="u8"):a===R.percentClip?(i.MinPercent=e.minPercent,i.MaxPercent=e.maxPercent,t.outputPixelType="u8"):a===R.minMax?t.outputPixelType="u8":a===R.sigmoid&&(i.SigmoidStrengthLevel=e.sigmoidStrengthLevel),t.functionArguments=i,t.variableName="Raster",e.colorRamp){var s=e.colorRamp,c=new n;return!r.convertColorRampToColormap||"algorithmic"!==s.type&&"multipart"!==s.type?c.functionArguments={colorRamp:e.colorRamp.toJSON()}:c.functionArguments={Colormap:u.convertColorRampToColormap(s,256)},c.functionArguments={colorRamp:e.colorRamp.toJSON()},c.variableName="Raster",c.functionName="Colormap",c.functionArguments.Raster=t,c}return t}function p(e,r){var t=[],a=[],u=[],o=[],i=r.pixelType,s=r.rasterAttributeTable,c=s&&s.features,l=v(s);if(c&&Array.isArray(c)&&e.classBreakInfos){e.classBreakInfos.forEach(function(r,t){var a,n=r.symbol.color;n.a&&c.forEach(function(u){((a=u.attributes[e.field])>=r.minValue&&a<r.maxValue||t===e.classBreakInfos.length-1&&a>=r.minValue)&&o.push([u.attributes[l],n.r,n.g,n.b])})});var m=i?f(o,i):o,p=new n;return p.functionName="Colormap",p.functionArguments={},p.functionArguments.Colormap=m,p.variableName="Raster",p}e.classBreakInfos.forEach(function(e,r){var n=e.symbol&&e.symbol.color;n.a?(0===r?t.push(e.minValue,e.maxValue+1e-6):t.push(e.minValue+1e-6,e.maxValue+1e-6),a.push(r),o.push([r,n.r,n.g,n.b])):u.push(e.minValue,e.maxValue)});var g=i?f(o,i):o,d=new n;d.functionName="Remap",d.functionArguments={InputRanges:t,OutputValues:a,NoDataRanges:u},d.variableName="Raster";var R=new n;return R.functionName="Colormap",R.functionArguments={Colormap:g,Raster:d},R}function f(e,r){var t=d[String(r).toLowerCase()];return t&&e.push([Math.floor(t[0]-1),0,0,0],[Math.ceil(t[1]+1),0,0,0]),e}function v(e){if(e){var r=e.fields,a=r&&t.find(r,function(e){return e&&e.name&&"value"===e.name.toLowerCase()});return a&&a.name}}function g(e,r){var t=[],a=r.pixelType,u=r.rasterAttributeTable,o=u&&u.features,i=v(u);e.uniqueValueInfos&&e.uniqueValueInfos.forEach(function(r){var a=r.symbol.color;a.a&&(e.field!==i&&o?o&&o.forEach(function(n){String(n.attributes[e.field])===String(r.value)&&t.push([n.attributes[i],a.r,a.g,a.b])}):t.push([r.value,a.r,a.g,a.b]))});var s=a?f(t,a):t,c=new n;return c.functionName="Colormap",c.functionArguments={},c.functionArguments.Colormap=s,c.variableName="Raster",c}Object.defineProperty(r,"__esModule",{value:!0});var d={u1:[0,1],u2:[0,3],u4:[0,15],u8:[0,255],s8:[-128,127],u16:[0,65535],s16:[-32768,32767]};r.isSupportedRendererType=i,r.combineRenderingRules=s,r.convertRendererToRenderingRule=c;var R={none:0,standardDeviation:3,histogramEqualization:4,minMax:5,percentClip:6,sigmoid:9}});