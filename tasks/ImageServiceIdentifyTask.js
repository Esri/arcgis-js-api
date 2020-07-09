// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../request","../core/maybe","../core/accessorSupport/decorators","../geometry/support/normalizeUtils","./Task","./support/ImageServiceIdentifyResult"],(function(e,r,t,n,s,i,o,a,u){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),r.prototype.execute=function(e,r){var i=this,a=e.geometry?[e.geometry]:[];return o.normalizeCentralMeridian(a).then((function(o){var a=e.toJSON(),u=o&&o[0];s.isSome(u)&&(a.geometry=JSON.stringify(u.toJSON()));var c=i._encode(t.__assign(t.__assign({f:"json"},i.parsedUrl.query),a)),p=t.__assign(t.__assign({query:c},i.requestOptions),r);return n(i.parsedUrl.path+"/identify",p)})).then((function(e){return u.fromJSON(e.data)}))},r=t.__decorate([i.subclass("esri.tasks.ImageServiceIdentifyTask")],r)}(a)}));