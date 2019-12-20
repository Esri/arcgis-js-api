// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/accessorSupport/decorators","../../portal/Portal"],function(t,r,e,o,p,l,s){return function(t){function r(){var r=null!==t&&t.apply(this,arguments)||this;return r.portal=null,r}e(r,t),p=r,r.prototype.clone=function(){return new p({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})};var p;return o([l.property({type:String})],r.prototype,"name",void 0),o([l.property({type:String})],r.prototype,"styleUrl",void 0),o([l.property({type:String})],r.prototype,"styleName",void 0),o([l.property({type:s})],r.prototype,"portal",void 0),r=p=o([l.subclass("esri.symbols.support.StyleOrigin")],r)}(l.declared(p))});