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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/has","dojo/on","dojo/_base/array","../../kernel","../../request","../../lang","../../tasks/Geoprocessor","../../tasks/JobInfo","../../renderers/colorUtils","../../renderers/colorRampUtils"],(function(r,e,o,t,n,a,l,i,u,s,m){var c,f,p,R={},d={name:"Raster",isDataset:!0,isPublic:!1,type:"RasterFunctionVariable"};function g(r){if(r){var e=t.map([r.FromColor,r.ToColor],(function(r){var e=s.toRGB({h:r.Hue,s:r.Saturation,v:r.Value});return[e.r,e.g,e.b]}));return{fromColor:e[0],toColor:e[1],type:"algorithmic",algorithm:r.Algorithm}}}function v(r){if(r){var e=s.toHSV(s.getDojoColor(r));return{type:"HsvColor",Hue:e.h,Saturation:e.s,Value:e.v,AlphaValue:255}}}function A(r){if(r){var e=r.toJson?r.toJson():void 0;return{Algorithm:e&&e.Algorithm||"esriHSVAlgorithm",type:"AlgorithmicColorRamp",FromColor:v(r.fromColor),ToColor:v(r.toColor)}}}return r.mixin(R,{convertRFT:function(r,e,t,n){var l=r.url,s=function(){p&&(p.remove(),p=null),f&&(f.remove(),f=null)};c||(c=new i(l),o(c,"error",s)),f=o(c,"job-complete",(function(r){if(f&&(f.remove(),f=null),r.jobInfo.jobStatus!==u.STATUS_SUCCEEDED)return s(),void n(r);c.getResultData(r.jobInfo.jobId,"outputRasterFunction")})),p=o(c,"get-result-data-complete",(function(r){p&&(p.remove(),p=null);var e=r&&r.result&&r.result.value;e&&e.url&&a({url:e.url,callbackParamName:"callback",content:{f:"json"},handleAs:"json",load:t,error:n})}));var m={inputRasterFunction:JSON.stringify(r.rft),format:r.format};return c.submitJob(m,e,null,n)},getRasterJsonFromLayer:function(r){if(!r)return null;var e=r.url;r.credential&&(e=e+"?token="+r.credential.token,r.credential.referer&&(e+=r.credential.referer));var o={url:e,name:r.name};return r.renderingRule&&(o.renderingRule=r.renderingRule.toJson?r.renderingRule.toJson():r.renderingRule),r.mosaicRule&&(o.mosaicRule=r.mosaicRule.toJson?r.mosaicRule.toJson():r.mosaicRule),o},getLayerIdfromRasterValue:function(r,e){var o;if(r&&e)return t.some(e,(function(e){if(e&&e.url===r.url&&e.name===r.name&&r.name)return o=e.id,!0})),o},getColorRampFromArg:function(r){var e,o,n;if(r&&(r.type&&r.type.toLowerCase().indexOf("colorramp")>-1?e=r:r.value&&r.value.type.toLowerCase().indexOf("colorramp")>-1&&(e=r.value),e))return(o=e.type.toLowerCase())==="MultiPartColorRamp".toLowerCase()?n=m.fromJson({type:"multipart",colorRamps:t.map(e.ArrayOfColorRamp,(function(r){return g(r)}))}):o==="AlgorithmicColorRamp".toLowerCase()&&(n=m.fromJson(g(e))),n.id=n.name=e.Name,n},getRFxArgColorRampValue:function(e){if(e){if(e.fromColor&&e.toColor)return r.mixin(A(e),{Name:e.name});if(e.colorRamps){var o=t.map(e.colorRamps,A);return{type:"MultiPartColorRamp",NumColorRamps:o.length,ArrayOfColorRamp:o,Name:e.name}}}},RFX_VARIABLE_TYPE:"RasterFunctionVariable",RFX_TEMPLATE_TYPE:"RasterFunctionTemplate",ARGUMENT_ARRAY_TYPE:"ArgumentArray",getArgRFT:function(r){if(r)return"RasterFunctionTemplate"===r.type?r:r.value&&"RasterFunctionTemplate"===r.value.type?r.value:void 0},getEnumData:function(r){if(Array.isArray(r))return r.forEach((function(r){r.key=r.key.toString()})),r},getImageServiceTitle:function(r){var e=r.split("/");return e[e.length-2]},isReferencedObject:function(r){if(r)return!!l.isDefined(r._object_ref_id)||void 0},functionTypes:{local:"LocalFunction",gpAdapter:"GPAdapterFunction",pythonAdapter:"PythonAdapterFunction"},defaultRasterNodeProps:d}),e("extend-esri")&&r.setObject("dijit.RasterFunctionEditor.utils",R,n),R}));