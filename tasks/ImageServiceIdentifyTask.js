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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","../request","../core/maybe","../core/accessorSupport/decorators","../geometry/support/normalizeUtils","./Task","./support/ImageServiceIdentifyResult"],(function(e,r,t,o,n,s,i,u,a,p,c){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),r.prototype.execute=function(e,r){var t=this,o=e.geometry?[e.geometry]:[];return a.normalizeCentralMeridian(o).then((function(o){var u=e.toJSON(),a=o&&o[0];i.isSome(a)&&(u.geometry=JSON.stringify(a.toJSON()));var p=t._encode(n({f:"json"},t.parsedUrl.query,u)),c=n({query:p},t.requestOptions,r);return s(t.parsedUrl.path+"/identify",c)})).then((function(e){return c.fromJSON(e.data)}))},r=o([u.subclass("esri.tasks.ImageServiceIdentifyTask")],r)}(u.declared(p))}));