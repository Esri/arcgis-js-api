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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["dojo/_base/lang","../request","./Task","./support/FindResult"],function(e,r,s,t){var n=s.createSubclass({declaredClass:"esri.tasks.FindTask",properties:{parsedUrl:{get:function(){var e=this._parseUrl(this.url);return e.path+="/find",e}},gdbVersion:{value:null,type:String},url:{}},execute:function(s,t){var n=this._encode(e.mixin({},this.parsedUrl.query,{f:"json"},s.toJSON()));this.gdbVersion&&(n.gdbVersion=this.gdbVersion);var a={query:n,callbackParamName:"callback"};return(this.requestOptions||t)&&(a=e.mixin({},this.requestOptions,t,a)),r(this.parsedUrl.path,a).then(this._handleExecuteResponse)},_handleExecuteResponse:function(e){var r=e.data,s=r.results||[];return r.results=s.map(function(e){return t.fromJSON(e)}),r}});return n});