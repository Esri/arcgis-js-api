// COPYRIGHT © 2017 Esri
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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/accessorSupport/decorators","./Lighting"],function(e,t,r,n,i,o,c){var p=l=function(e){function t(t){var r=e.call(this,t)||this;return r.lighting=new c,r}return r(t,e),t.prototype.clone=function(){return new l({lighting:c.prototype.clone.call(this.lighting)})},t.sanitizeJSON=function(e){return{lighting:e.lighting?c.sanitizeJSON(e.lighting):(new c).toJSON()}},t}(o.declared(i));n([o.property({type:c,json:{write:!0}})],p.prototype,"lighting",void 0),p=l=n([o.subclass("esri.webscene.Environment")],p);var l;return p});