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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/JSONSupport","../../../../core/accessorSupport/decorators"],function(r,e,t,o,n,p){return function(r){function e(e){var t=r.call(this)||this;return t.linkURL=null,t.sourceURL=null,t}t(e,r),n=e,e.prototype.clone=function(){return new n({linkURL:this.linkURL,sourceURL:this.sourceURL})};var n;return o([p.property({type:String,json:{write:!0}})],e.prototype,"linkURL",void 0),o([p.property({type:String,json:{write:!0}})],e.prototype,"sourceURL",void 0),e=n=o([p.subclass("esri.support.MediaInfo.Image.Value")],e)}(p.declared(n))});