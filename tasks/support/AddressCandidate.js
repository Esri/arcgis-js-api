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

define(["require","exports","../../core/tsSupport/decorateHelper","../../core/tsSupport/declareExtendsHelper","../../core/JSONSupport","../../core/accessorSupport/decorators","../../geometry/Extent","../../geometry/Point"],(function(t,e,r,o,p,s,n,i){return function(t){function e(e){var r=t.call(this,e)||this;return r.address=null,r.attributes=null,r.extent=null,r.location=null,r.score=null,r}return o(e,t),r([s.property({type:String,json:{write:!0}})],e.prototype,"address",void 0),r([s.property({type:Object,json:{write:!0}})],e.prototype,"attributes",void 0),r([s.property({type:n,json:{write:!0}})],e.prototype,"extent",void 0),r([s.property({type:i,json:{write:!0}})],e.prototype,"location",void 0),r([s.property({type:Number,json:{write:!0}})],e.prototype,"score",void 0),e=r([s.subclass("esri.tasks.support.AddressCandidate")],e)}(s.declared(p.JSONSupport))}));