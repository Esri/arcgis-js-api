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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["../request","../core/lang","../geometry/support/normalizeUtils","./Task","./support/ImageServiceIdentifyResult"],function(e,t,r,n,s){return n.createSubclass({declaredClass:"esri.tasks.ImageServiceIdentifyTask",properties:{parsedUrl:{get:function(){var e=this._parseUrl(this.url);return e.path+="/identify",e}},url:{}},execute:function(n,s){var i=n.geometry?[n.geometry]:[];return r.normalizeCentralMeridian(i).then(function(r){var i=this._encode(t.mixin({},this.parsedUrl.query,{f:"json"},n.toJSON({geometry:r&&r[0]}))),a={query:i};return(this.requestOptions||s)&&(a=t.mixin({},this.requestOptions,s,a)),e(this.parsedUrl.path,a)}.bind(this)).then(this._handleExecuteResponse)},_handleExecuteResponse:function(e){return s.fromJSON(e.data)}})});