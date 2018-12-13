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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/accessorSupport/decorators"],function(r,t,o,e,p,i){return function(r){function t(t){var o=r.call(this)||this;return o.tooltip=null,o.x=null,o.y=null,o}o(t,r),p=t,t.prototype.clone=function(){return new p({tooltip:this.tooltip,x:this.x,y:this.y})};var p;return e([i.property()],t.prototype,"tooltip",void 0),e([i.property()],t.prototype,"x",void 0),e([i.property()],t.prototype,"y",void 0),t=p=e([i.subclass("esri.support.Media.Chart.Series")],t)}(i.declared(p))});