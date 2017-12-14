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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/has","dojo/on","dojo/_base/array","dojo/_base/Color","../../kernel","../../request","../../tasks/Geoprocessor","../../tasks/JobInfo","../../tasks/AlgorithmicColorRamp","../../tasks/MultipartColorRamp","../../renderers/colorUtils","../../renderers/colorRampUtils"],function(o,r,e,t,n,a,l,u,i,m,s,f,c){function p(o,r,t,n){var a=o.url,m=function(o){A&&(A.remove(),A=null);var r=o&&o.result&&o.result.value;return r&&r.url?void l({url:r.url,callbackParamName:"callback",content:{f:"json"},handleAs:"json",load:t,error:n}):void 0},s=function(o){return h&&(h.remove(),h=null),o.jobInfo.jobStatus!==i.STATUS_SUCCEEDED?(f(),void n(o)):void y.getResultData(o.jobInfo.jobId,"outputRasterFunction")},f=function(){A&&(A.remove(),A=null),h&&(h.remove(),h=null)};y||(y=new u(a),e(y,"error",f)),h=e(y,"job-complete",s),A=e(y,"get-result-data-complete",m);var c={inputRasterFunction:JSON.stringify(o.rft),format:o.format};return y.submitJob(c,r,null,n)}function d(o){if(!o)return null;var r=o.url;o.credential&&(r=r+"?token="+o.credential.token,o.credential.referer&&(r+=o.credential.referer));var e={url:r,name:o.name};return o.renderingRule&&(e.renderingRule=o.renderingRule.toJson()),o.mosaicRule&&(e.mosaicRule=o.mosaicRule.toJson()),e}function v(o,r){if(o&&r){var e;return t.some(r,function(r){return r&&r.url===o.url&&r.name===o.name&&o.name?(e=r.id,!0):void 0}),e}}function C(o){if(o){var r=t.map([o.FromColor,o.ToColor],function(o){var r=f.toRGB({h:o.Hue,s:o.Saturation,v:o.Value});return[r.r,r.g,r.b]});return{fromColor:r[0],toColor:r[1],type:"algorithmic",algorithm:o.Algorithm}}}function R(o){if(o){var r,e,n,a="colorramp";if(o.type&&o.type.toLowerCase().indexOf(a)>-1?r=o:o.value&&o.value.type.toLowerCase().indexOf(a)>-1&&(r=o.value),r)return e=r.type.toLowerCase(),e===F.toLowerCase()?n=c.fromJson({type:"multipart",colorRamps:t.map(r.ArrayOfColorRamp,function(o){return C(o)})}):e===k.toLowerCase()&&(n=c.fromJson(C(r))),n.id=n.name=r.Name,n}}function g(o){if(o){var r=f.toHSV(f.getDojoColor(o));return{type:"HsvColor",Hue:r.h,Saturation:r.s,Value:r.v,AlphaValue:255}}}function b(o){if(o){var r=o.toJson?o.toJson():void 0;return{Algorithm:r&&r.Algorithm||"esriHSVAlgorithm",type:k,FromColor:g(o.fromColor),ToColor:g(o.toColor)}}}function j(r){if(r){if(r.fromColor&&r.toColor)return o.mixin(b(r),{Name:r.name});if(r.colorRamps){var e=t.map(r.colorRamps,b);return{type:F,NumColorRamps:e.length,ArrayOfColorRamp:e,Name:r.name}}}}var y,h,A,J={},k="AlgorithmicColorRamp",F="MultipartColorRamp";return o.mixin(J,{convertRFT:p,getRasterJsonFromLayer:d,getLayerIdfromRasterValue:v,getColorRampFromArg:R,getRFxArgColorRampValue:j}),r("extend-esri")&&o.setObject("dijit.RasterFunctionEditor.utils",J,a),J});