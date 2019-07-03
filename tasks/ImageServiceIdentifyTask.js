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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","../request","../core/asyncUtils","../core/maybe","../core/accessorSupport/decorators","../geometry/support/normalizeUtils","./Task","./support/ImageServiceIdentifyResult"],function(e,r,t,o,s,n,a,i,u,c,p,l){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),r.prototype.execute=function(e,r){var t=this,o=e.geometry?[e.geometry]:[];return a.safeCast(c.normalizeCentralMeridian(o)).then(function(o){var a=e.toJSON(),u=o&&o[0];i.isSome(u)&&(a.geometry=JSON.stringify(u.toJSON()));var c=t._encode(s({f:"json"},t.parsedUrl.query,a)),p=s({query:c},t.requestOptions,r);return n(t.parsedUrl.path+"/identify",p)}).then(function(e){return l.fromJSON(e.data)})},r=o([u.subclass("esri.tasks.ImageServiceIdentifyTask")],r)}(u.declared(p))});