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

define(["../core/declare","dojo/_base/lang","../request","./Task","./support/FindResult"],function(e,r,n,s,t){var a=e(s,{declaredClass:"esri.tasks.FindTask",url:null,gdbVersion:null,_parsedUrlGetter:function(){var e=this.inherited(arguments);return e.path+="/find",e},execute:function(e){var s=this._encode(r.mixin({},this.parsedUrl.query,{f:"json"},e.toJSON()));return this.gdbVersion&&(s.gdbVersion=this.gdbVersion),n(this.parsedUrl.path,{query:s,callbackParamName:"callback"}).then(this._handleExecuteResponse)},_handleExecuteResponse:function(e){var r=e.data,n=r.results||[];return r.results=n.map(function(e){return t.fromJSON(e)}),r}});return a});