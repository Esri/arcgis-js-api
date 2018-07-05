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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["../../request","../../core/lang","./WMBaseTask"],function(e,r,l){return l.createSubclass({declaredClass:"esri.tasks.workflow.LOILayerTask",properties:{url:{}},_getJobIdField:function(){var l=this.parsedUrl.path,n=this._encode(r.mixin({},this.parsedUrl.query,{f:"json"}));return e(l,{query:n,callbackParamName:"callback"},this.requestOptions).then(function(e){var r=e.data,n=null,a=null,t=r.fields;if(null==t)return new Error(l+", data fields = null");for(var s=0,u=t.length;s<u;s++)null!=(a=t[s].name.toString())&&"JOB_ID"==a.toUpperCase().substring(a.length-"JOB_ID".length)&&(null==n?n=a:-1!=a.toUpperCase().indexOf("JTX_JOBS_AOI")&&(n=a));return null!=n?n:new Error("jobIDField = null")})}})});