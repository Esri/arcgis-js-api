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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","./SearchLayerField"],function(e,r,t,o,p,i,n,s,c){return function(e){function r(r){var t=e.call(this,r)||this;return t.field=null,t.id=null,t.subLayer=null,t}t(r,e),p=r,r.prototype.clone=function(){return new p(i.clone({field:this.field,id:this.id,subLayer:this.subLayer}))};var p;return o([n.property({type:c,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"field",void 0),o([n.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"id",void 0),o([n.property({type:s.Integer,json:{write:!0}})],r.prototype,"subLayer",void 0),r=p=o([n.subclass("esri.webdoc.applicationProperties.SearchLayer")],r)}(n.declared(p.JSONSupport))});