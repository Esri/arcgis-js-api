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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../Graphic","../../core/JSONSupport","../../core/accessorSupport/decorators","./DirectionsFeatureSet"],(function(t,e,r,o,p,s,i){"use strict";return function(t){function e(e){var r=t.call(this,e)||this;return r.directions=null,r.route=null,r.routeName=null,r.stops=null,r}return r.__extends(e,t),r.__decorate([s.property({type:i,json:{write:!0}})],e.prototype,"directions",void 0),r.__decorate([s.property({type:o,json:{write:!0}})],e.prototype,"route",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],e.prototype,"routeName",void 0),r.__decorate([s.property({type:[o],json:{write:!0}})],e.prototype,"stops",void 0),e=r.__decorate([s.subclass("esri.tasks.support.RouteResult")],e)}(p.JSONSupport)}));