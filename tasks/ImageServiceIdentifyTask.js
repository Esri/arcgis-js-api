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

define(["dojo/_base/lang","../request","../geometry/support/normalizeUtils","./Task","./support/ImageServiceIdentifyResult"],function(e,r,t,a,s){var n=a.createSubclass({declaredClass:"esri.tasks.ImageServiceIdentifyTask",__msigns:[{n:"execute",c:1,a:[{i:0,p:["geometry"]}],e:2}],properties:{parsedUrl:{get:function(){var e=this._parseUrl(this.url);return e.path+="/identify",e}},url:{}},execute:function(t,a){var s=a.assembly,n=this._encode(e.mixin({},this.parsedUrl.query,{f:"json"},t.toJSON(s&&s[0])));return r(this.parsedUrl.path,{query:n,callbackParamName:"callback"}).then(this._handleExecuteResponse)},_handleExecuteResponse:function(e){return s.fromJSON(e.data)}});return t._createWrappers(n),n});