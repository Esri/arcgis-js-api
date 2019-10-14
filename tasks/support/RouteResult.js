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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/decorateHelper","../../core/tsSupport/declareExtendsHelper","../../Graphic","../../core/JSONSupport","../../core/accessorSupport/decorators","./DirectionsFeatureSet"],function(e,r,t,o,p,s,u,i){return function(e){function r(r){var t=e.call(this,r)||this;return t.directions=null,t.route=null,t.routeName=null,t.stops=null,t}return o(r,e),t([u.property({type:i,json:{write:!0}})],r.prototype,"directions",void 0),t([u.property({type:p,json:{write:!0}})],r.prototype,"route",void 0),t([u.property({type:String,json:{write:!0}})],r.prototype,"routeName",void 0),t([u.property({type:[p],json:{write:!0}})],r.prototype,"stops",void 0),r=t([u.subclass("esri.tasks.support.RouteResult")],r)}(u.declared(s.JSONSupport))});