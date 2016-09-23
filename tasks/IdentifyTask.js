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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["dojo/_base/lang","../request","../geometry/support/normalizeUtils","./Task","./support/IdentifyResult"],function(e,r,s,t,a){var n=t.createSubclass({declaredClass:"esri.tasks.IdentifyTask",__msigns:[{n:"execute",c:1,a:[{i:0,p:["geometry"]}],e:2}],properties:{gdbVersion:{value:null,type:String},parsedUrl:{get:function(){var e=this._parseUrl(this.url);return e.path+="/identify",e}},url:{}},execute:function(s,t){var a=t.assembly,n=this._encode(e.mixin({},this.parsedUrl.query,{f:"json"},s.toJSON(a&&a[0])));return this.gdbVersion&&(n.gdbVersion=this.gdbVersion),r(this.parsedUrl.path,{query:n,callbackParamName:"callback"}).then(this._handleExecuteResponse)},_handleExecuteResponse:function(e){var r=e.data,s=r.results||[];return r.results=s.map(function(e){return a.fromJSON(e)}),r}});return s._createWrappers(n),n});