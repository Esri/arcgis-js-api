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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../geometry","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","../../views/3d/support/mathUtils"],(function(e,t,r,o,i,n,p,s,a){return function(e){function t(t){var o=e.call(this,function(e){var t=r.__assign({},e);return t.type&&"slice"===t.type&&delete t.type,t}(t))||this;return o.type="plane",o.position=null,o.heading=0,o.tilt=0,o.width=10,o.height=10,o}var i;return r.__extends(t,e),i=t,t.prototype.clone=function(){return new i({position:n.clone(this.position),heading:this.heading,tilt:this.tilt,width:this.width,height:this.height})},r.__decorate([p.property({readOnly:!0,json:{read:!1,write:!0}})],t.prototype,"type",void 0),r.__decorate([p.property({type:o.Point}),p.persistable()],t.prototype,"position",void 0),r.__decorate([p.property({type:Number,nonNullable:!0,range:{min:0,max:360}}),p.persistable(),p.cast((function(e){return a.cyclicalDeg.normalize(s.ensureNumber(e),0,!0)}))],t.prototype,"heading",void 0),r.__decorate([p.property({type:Number,nonNullable:!0,range:{min:0,max:360}}),p.persistable(),p.cast((function(e){return a.cyclicalDeg.normalize(s.ensureNumber(e),0,!0)}))],t.prototype,"tilt",void 0),r.__decorate([p.property({type:Number,nonNullable:!0}),p.persistable()],t.prototype,"width",void 0),r.__decorate([p.property({type:Number,nonNullable:!0}),p.persistable()],t.prototype,"height",void 0),t=i=r.__decorate([p.subclass("esri.widgets.Slice.SlicePlane")],t)}(i.JSONSupport)}));