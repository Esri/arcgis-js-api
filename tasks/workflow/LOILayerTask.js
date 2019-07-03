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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["../../request","../../core/lang","./WMBaseTask"],function(e,r,n){return n.createSubclass({declaredClass:"esri.tasks.workflow.LOILayerTask",properties:{url:{}},_getJobIdField:function(){var n=this.parsedUrl.path,l=this._encode(r.mixin({},this.parsedUrl.query,{f:"json"}));return e(n,{query:l},this.requestOptions).then(function(e){var r=e.data,l=null,t=null,s=r.fields;if(null==s)return new Error(n+", data fields = null");for(var a=0,u=s.length;a<u;a++)null!=(t=s[a].name.toString())&&"JOB_ID"==t.toUpperCase().substring(t.length-"JOB_ID".length)&&(null==l?l=t:-1!=t.toUpperCase().indexOf("JTX_JOBS_AOI")&&(l=t));return null!=l?l:new Error("jobIDField = null")})}})});