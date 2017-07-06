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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["dojo/_base/lang","../../request","./WMBaseTask"],function(e,r,l){var n=l.createSubclass({declaredClass:"esri.tasks.workflow.LOILayerTask",properties:{url:{}},_getJobIdField:function(){var l=this.parsedUrl.path,n=this._encode(e.mixin({},this.parsedUrl.query,{f:"json"}));return r(l,{query:n,callbackParamName:"callback"},this.requestOptions).then(function(e){var r=e.data,n="JOB_ID",a=null,t=null,s=r.fields;if(null==s)return new Error(l+", data fields = null");for(var u=0,i=s.length;i>u;u++)t=s[u].name.toString(),null!=t&&t.toUpperCase().substring(t.length-n.length)==n&&(null==a?a=t:-1!=t.toUpperCase().indexOf("JTX_JOBS_AOI")&&(a=t));return null!=a?a:new Error("jobIDField = null")})}});return n});