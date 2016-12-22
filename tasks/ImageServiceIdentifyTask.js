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

define(["dojo/_base/lang","../request","../geometry/support/normalizeUtils","./Task","./support/ImageServiceIdentifyResult"],function(e,t,r,s,n){var a=s.createSubclass({declaredClass:"esri.tasks.ImageServiceIdentifyTask",properties:{parsedUrl:{get:function(){var e=this._parseUrl(this.url);return e.path+="/identify",e}},url:{}},execute:function(s,n){var a=s.geometry?[s.geometry]:[];return r.normalizeCentralMeridian(a).then(function(r){var a=this._encode(e.mixin({},this.parsedUrl.query,{f:"json"},s.toJSON({geometry:r&&r[0]}))),i={query:a,callbackParamName:"callback"};return(this.requestOptions||n)&&(i=e.mixin({},this.requestOptions,n,i)),t(this.parsedUrl.path,i)}.bind(this)).then(this._handleExecuteResponse)},_handleExecuteResponse:function(e){return n.fromJSON(e.data)}});return a});