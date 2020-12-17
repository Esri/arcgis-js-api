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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/html","dojo/_base/lang","dojo/cookie","dojo/Deferred","dojo/query","esri/request"],(function(e,r,n,t,a,o,u){var i={promisifyGetValue:function(e){var r=e.getValue;e.getValue=function(){var n=r.apply(e);if(null!==n&&n.then)return n;var t=new o;return t.resolve(n),t}},allowShareResult:function(r){return e.some(r.outputParams,(function(e){return"GPRecordSet"===e.dataType||"GPFeatureRecordSetLayer"===e.dataType&&e.defaultValue&&e.defaultValue.geometryType}))},getServiceDescription:function(e){var r;return u({url:e,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}).then((function(n){return r=n,i.getGPServerDescription(e).then((function(e){return r.serverInfo=e,r.useResultMapServer=e.hasResultMapServer,i.uploadSupported(e).then((function(e){return r.serverInfo.supportsUpload=e.supportsUpload,"maxUploadFileSize"in e&&(r.serverInfo.maxUploadFileSize=e.maxUploadFileSize),r}))}))}))},getGPServerDescription:function(e){var r={url:i.getGPServerUrl(e),content:{f:"json"},handleAs:"json",callbackParamName:"callback"};return u(r,{useProxy:!1}).then((function(e){var n={};return n.currentVersion=e.currentVersion||0,n.url=r.url,n.hasResultMapServer="esriExecutionTypeAsynchronous"===e.executionType&&"resultMapServerName"in e&&""!==e.resultMapServerName,n.resultMapServerName=e.resultMapServerName,n}))},getGPServerUrl:function(e){if(!/\/GPServer\/.+$/.test(e))return"";var r=e.search(/[\w]+[^\/]*$/g);return e.substr(0,r)},getResultMapServerUrl:function(e,r){if(!/\/rest\/services\//.test(e))return"";var n=e.search(/\/rest\/services\//);return e.substr(0,n+15)+r+"/MapServer"},uploadSupported:function(e){if(e.currentVersion>=10.1){var r={url:e.url+"uploads/info",content:{f:"json"},handleAs:"json"};return u(r).then((function(e){return{supportsUpload:!0,maxUploadFileSize:e.maxUploadFileSize}}),(function(){return{supportsUpload:!1}}))}var n=new o;return n.resolve({supportsUpload:!1}),n},getResultMapLayers:function(r,n){var t={url:i.getResultMapServerUrl(r,n),content:{f:"json"},handleAs:"json",callbackParamName:"callback"};return u(t,{useProxy:!1}).then((function(r){var n=e.map(r.layers,(function(e){return e.name}));return e.forEach(r.tables,(function(e){n.push(e.name)})),n}))},useDynamicSchema:function(e,r){return"useDynamicSchema"in e?!0===e.useDynamicSchema:!0===r.useDynamicSchema},sanitizeHTML:function(e){return e},stripHTML:function(e){if(!e)return e;if(e.indexOf("<")>-1&&e.indexOf(">")>-1){return e.replace(/<(?:.|\s)*?>/g,"")}return e},setVerticalCenter:function(n){setTimeout((function(){var t,o,u=a(".jimu-vcenter-text",n);e.forEach(u,(function(e){t=r.getContentBox(e).h,r.setStyle(e,{lineHeight:t+"px"})}),this),u=a(".jimu-vcenter",n),e.forEach(u,(function(e){t=r.getContentBox(e).h,o=r.getContentBox(a(e).parent()[0]).h,r.setStyle(e,{marginTop:(o-t)/2+"px"})}),this)}),10)},getItemQueryStringByTypes:function(r){var n="",t=i.getAllItemTypes();if(r&&r.length>0&&r.length>0){var a="";e.forEach(r,(function(e,n){a+=' type:"'+e+'" ',n!==r.length-1&&(a+=" OR ")})),n=" ( "+a+" ) ";var o=r.concat(t),u=e.filter(o,(function(n){return e.every(r,(function(e){return e.toLowerCase().indexOf(n.toLowerCase())<0}))}));e.forEach(u,(function(e){n+=' -type:"'+e+'" '}))}return n},isInConfigOrPreviewWindow:function(){var e=!1;try{e=!window.isBuilder&&window.parent&&window.parent!==window&&window.parent.isBuilder}catch(r){e=!1}return!!e},removeCookie:function(r,a){var o=this._getDomainsByServerName(window.location.hostname);e.forEach(o,n.hitch(this,(function(e){t(r,null,{expires:-1,path:a}),t(r,null,{expires:-1,path:a,domain:e}),t(r,null,{expires:-1,path:a,domain:"."+e})})))},checkServiceNameAvailable:function(e,r,n){var t=e.orgId;return u({url:r+"/sharing/rest/portals/"+t+"/isServiceNameAvailable",content:{name:n,type:"Feature Service",f:"json"}})}};return i}));