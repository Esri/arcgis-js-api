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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/has","dojo/on","dojo/_base/array","../../kernel","../../request","../../lang","../../tasks/Geoprocessor","../../tasks/JobInfo","../../renderers/colorUtils","../../renderers/colorRampUtils"],function(r,e,o,t,n,a,i,l,u,s,m){function c(r,e,t,n){var i=r.url,s=function(r){T&&(T.remove(),T=null);var e=r&&r.result&&r.result.value;if(e&&e.url)return void a({url:e.url,callbackParamName:"callback",content:{f:"json"},handleAs:"json",load:t,error:n})},m=function(r){if(j&&(j.remove(),j=null),r.jobInfo.jobStatus!==u.STATUS_SUCCEEDED)return c(),void n(r);h.getResultData(r.jobInfo.jobId,"outputRasterFunction")},c=function(){T&&(T.remove(),T=null),j&&(j.remove(),j=null)};h||(h=new l(i),o(h,"error",c)),j=o(h,"job-complete",m),T=o(h,"get-result-data-complete",s);var f={inputRasterFunction:JSON.stringify(r.rft),format:r.format};return h.submitJob(f,e,null,n)}function f(r){if(!r)return null;var e=r.url;r.credential&&(e=e+"?token="+r.credential.token,r.credential.referer&&(e+=r.credential.referer));var o={url:e,name:r.name};return r.renderingRule&&(o.renderingRule=r.renderingRule.toJson?r.renderingRule.toJson():r.renderingRule),r.mosaicRule&&(o.mosaicRule=r.mosaicRule.toJson?r.mosaicRule.toJson():r.mosaicRule),o}function p(r,e){if(r&&e){var o;return t.some(e,function(e){if(e&&e.url===r.url&&e.name===r.name&&r.name)return o=e.id,!0}),o}}function R(r){if(r){var e=t.map([r.FromColor,r.ToColor],function(r){var e=s.toRGB({h:r.Hue,s:r.Saturation,v:r.Value});return[e.r,e.g,e.b]});return{fromColor:e[0],toColor:e[1],type:"algorithmic",algorithm:r.Algorithm}}}function d(r){if(r){var e,o,n;if(r.type&&r.type.toLowerCase().indexOf("colorramp")>-1?e=r:r.value&&r.value.type.toLowerCase().indexOf("colorramp")>-1&&(e=r.value),e)return o=e.type.toLowerCase(),o===_.toLowerCase()?n=m.fromJson({type:"multipart",colorRamps:t.map(e.ArrayOfColorRamp,function(r){return R(r)})}):o===J.toLowerCase()&&(n=m.fromJson(R(e))),n.id=n.name=e.Name,n}}function g(r){if(r){var e=s.toHSV(s.getDojoColor(r));return{type:"HsvColor",Hue:e.h,Saturation:e.s,Value:e.v,AlphaValue:255}}}function v(r){if(r){var e=r.toJson?r.toJson():void 0;return{Algorithm:e&&e.Algorithm||"esriHSVAlgorithm",type:J,FromColor:g(r.fromColor),ToColor:g(r.toColor)}}}function A(e){if(e){if(e.fromColor&&e.toColor)return r.mixin(v(e),{Name:e.name});if(e.colorRamps){var o=t.map(e.colorRamps,v);return{type:_,NumColorRamps:o.length,ArrayOfColorRamp:o,Name:e.name}}}}function y(r){if(r)return r.type===S?r:r.value&&r.value.type===S?r.value:void 0}function C(r){var e=r.split("/");return e[e.length-2]}function b(r){if(r)return!!i.isDefined(r._object_ref_id)||void 0}function F(r){if(Array.isArray(r))return r.forEach(function(r){r.key=r.key.toString()}),r}var h,j,T,E={},J="AlgorithmicColorRamp",_="MultiPartColorRamp",S="RasterFunctionTemplate",L={local:"LocalFunction",gpAdapter:"GPAdapterFunction",pythonAdapter:"PythonAdapterFunction"},P={name:"Raster",isDataset:!0,isPublic:!1,type:"RasterFunctionVariable"};return r.mixin(E,{convertRFT:c,getRasterJsonFromLayer:f,getLayerIdfromRasterValue:p,getColorRampFromArg:d,getRFxArgColorRampValue:A,RFX_VARIABLE_TYPE:"RasterFunctionVariable",RFX_TEMPLATE_TYPE:S,ARGUMENT_ARRAY_TYPE:"ArgumentArray",getArgRFT:y,getEnumData:F,getImageServiceTitle:C,isReferencedObject:b,functionTypes:L,defaultRasterNodeProps:P}),e("extend-esri")&&r.setObject("dijit.RasterFunctionEditor.utils",E,n),E});