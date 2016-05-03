// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../core/declare","dojo/_base/lang","../request","../geometry/support/normalizeUtils","./Task","./support/IdentifyResult"],function(e,r,t,s,n,a){var i=e(n,{declaredClass:"esri.tasks.IdentifyTask",url:null,gdbVersion:null,_parsedUrlGetter:function(){var e=this.inherited(arguments);return e.path+="/identify",e},__msigns:[{n:"execute",c:1,a:[{i:0,p:["geometry"]}],e:2}],execute:function(e,s){var n=s.assembly,a=this._encode(r.mixin({},this.parsedUrl.query,{f:"json"},e.toJSON(n&&n[0])));return this.gdbVersion&&(a.gdbVersion=this.gdbVersion),t(this.parsedUrl.path,{query:a,callbackParamName:"callback"}).then(this._handleExecuteResponse)},_handleExecuteResponse:function(e){var r=e.data,t=r.results||[];return r.results=t.map(function(e){return a.fromJSON(e)}),r}});return s._createWrappers(i),i});