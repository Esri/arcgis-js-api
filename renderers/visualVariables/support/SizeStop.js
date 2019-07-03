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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/JSONSupport","../../../core/screenUtils","../../../core/accessorSupport/decorators"],function(e,r,t,o,p,s,l){return function(e){function r(r){var t=e.call(this,r)||this;return t.label=null,t.size=null,t.value=null,t}t(r,e),p=r,r.prototype.clone=function(){return new p({label:this.label,size:this.size,value:this.value})};var p;return o([l.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o([l.property({type:Number,cast:s.toPt,json:{write:!0}})],r.prototype,"size",void 0),o([l.property({type:Number,json:{write:!0}})],r.prototype,"value",void 0),r=p=o([l.subclass("esri.renderers.visualVariables.support.SizeStop")],r)}(l.declared(p))});