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

define(["../../request","../../core/lang","../Task"],function(e,t,r){return r.createSubclass({declaredClass:"esri.tasks.workflow.WMBaseTask",_sendRequest:function(r,n,s){var i=this.parsedUrl.path+n;r.f="json";var u=this._encode(t.mixin({},this.parsedUrl.query,r)),a=this._generateOptions(u,s);return e(i,a).then(function(e){return e.data})},_sendRequestFile:function(r,n,s){var i=this.parsedUrl.path+n,u={form:r,f:"json"},a=this._encode(t.mixin({},this.parsedUrl.query,u)),o=this._generateOptions(a,s);return e(i,o).then(function(e){return e.data})},_generateOptions:function(e,r){var n={query:e};if(this.requestOptions||r){n=t.mixin({},this.requestOptions,r,n);var s=this.requestOptions?this.requestOptions.query:null,i=r?r.query:null;n.query=t.mixin({},s,i,n.query)}return n}})});