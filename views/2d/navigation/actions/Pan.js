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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/accessorSupport/decorators","../../../../core/Accessor","../../viewpointUtils"],function(t,e,o,r,n,i,p){var a=function(t){function e(e){var o=t.call(this)||this;return o.viewpoint=p.create(),o}return o(e,t),e.prototype.begin=function(t,e){this.navigation.begin()},e.prototype.update=function(t,e){var o=e.currentEvent.x,r=e.currentEvent.y,n=e.previousEvent;o=n?n.x-o:-o,r=n?r-n.y:r,t.viewpoint=p.translateBy(this.viewpoint,t.viewpoint,[o||0,r||0])},e.prototype.end=function(t,e){this.navigation.end()},e}(n.declared(i));return r([n.property()],a.prototype,"viewpoint",void 0),r([n.property()],a.prototype,"navigation",void 0),a=r([n.subclass("esri.views.2d.navigation.actions.Pan")],a)});