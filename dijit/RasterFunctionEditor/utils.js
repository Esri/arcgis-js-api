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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/has","dojo/on","dojo/_base/array","dojo/_base/Color","../../kernel","../../request","../../tasks/Geoprocessor","../../tasks/JobInfo","../../tasks/AlgorithmicColorRamp","../../tasks/MultipartColorRamp","../../renderers/colorUtils","../../renderers/colorRampUtils"],function(r,o,e,t,n,a,l,i,u,m,s,f,c){function p(r,o,t,n){var a=r.url,m=function(r){h&&(h.remove(),h=null);var o=r&&r.result&&r.result.value;if(o&&o.url)return void l({url:o.url,callbackParamName:"callback",content:{f:"json"},handleAs:"json",load:t,error:n})},s=function(r){if(y&&(y.remove(),y=null),r.jobInfo.jobStatus!==u.STATUS_SUCCEEDED)return f(),void n(r);j.getResultData(r.jobInfo.jobId,"outputRasterFunction")},f=function(){h&&(h.remove(),h=null),y&&(y.remove(),y=null)};j||(j=new i(a),e(j,"error",f)),y=e(j,"job-complete",s),h=e(j,"get-result-data-complete",m);var c={inputRasterFunction:JSON.stringify(r.rft),format:r.format};return j.submitJob(c,o,null,n)}function R(r){if(!r)return null;var o=r.url;r.credential&&(o=o+"?token="+r.credential.token,r.credential.referer&&(o+=r.credential.referer));var e={url:o,name:r.name};return r.renderingRule&&(e.renderingRule=r.renderingRule.toJson()),r.mosaicRule&&(e.mosaicRule=r.mosaicRule.toJson()),e}function d(r,o){if(r&&o){var e;return t.some(o,function(o){if(o&&o.url===r.url&&o.name===r.name&&r.name)return e=o.id,!0}),e}}function C(r){if(r){var o=t.map([r.FromColor,r.ToColor],function(r){var o=f.toRGB({h:r.Hue,s:r.Saturation,v:r.Value});return[o.r,o.g,o.b]});return{fromColor:o[0],toColor:o[1],type:"algorithmic",algorithm:r.Algorithm}}}function v(r){if(r){var o,e,n;if(r.type&&r.type.toLowerCase().indexOf("colorramp")>-1?o=r:r.value&&r.value.type.toLowerCase().indexOf("colorramp")>-1&&(o=r.value),o)return e=o.type.toLowerCase(),e===T.toLowerCase()?n=c.fromJson({type:"multipart",colorRamps:t.map(o.ArrayOfColorRamp,function(r){return C(r)})}):e===J.toLowerCase()&&(n=c.fromJson(C(o))),n.id=n.name=o.Name,n}}function g(r){if(r){var o=f.toHSV(f.getDojoColor(r));return{type:"HsvColor",Hue:o.h,Saturation:o.s,Value:o.v,AlphaValue:255}}}function b(r){if(r){var o=r.toJson?r.toJson():void 0;return{Algorithm:o&&o.Algorithm||"esriHSVAlgorithm",type:J,FromColor:g(r.fromColor),ToColor:g(r.toColor)}}}function A(o){if(o){if(o.fromColor&&o.toColor)return r.mixin(b(o),{Name:o.name});if(o.colorRamps){var e=t.map(o.colorRamps,b);return{type:T,NumColorRamps:e.length,ArrayOfColorRamp:e,Name:o.name}}}}var j,y,h,F={},J="AlgorithmicColorRamp",T="MultipartColorRamp";return r.mixin(F,{convertRFT:p,getRasterJsonFromLayer:R,getLayerIdfromRasterValue:d,getColorRampFromArg:v,getRFxArgColorRampValue:A,RFX_VARIABLE_TYPE:"RasterFunctionVariable",RFX_TEMPLATE_TYPE:"RasterFunctionTemplate"}),o("extend-esri")&&r.setObject("dijit.RasterFunctionEditor.utils",F,a),F});