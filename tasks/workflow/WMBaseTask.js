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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["dojo/_base/lang","../../request","../Task"],function(e,t,r){return r.createSubclass({declaredClass:"esri.tasks.workflow.WMBaseTask",_sendRequest:function(r,s,n){var i=this.parsedUrl.path+s;r.f="json";var a=this._encode(e.mixin({},this.parsedUrl.query,r)),u=this._generateOptions(a,n);return t(i,u).then(function(e){return e.data})},_sendRequestFile:function(r,s,n){var i=this.parsedUrl.path+s,a={form:r,f:"json"},u=this._encode(e.mixin({},this.parsedUrl.query,a)),o=this._generateOptions(u,n);return t(i,o).then(function(e){return e.data})},_generateOptions:function(t,r){var s={query:t,callbackParamName:"callback"};if(this.requestOptions||r){s=e.mixin({},this.requestOptions,r,s);var n=this.requestOptions?this.requestOptions.query:null,i=r?r.query:null;s.query=e.mixin({},n,i,s.query)}return s}})});