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

define(["require","exports","tslib","../../Color","../../core/lang","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","./ColorRamp"],(function(o,r,t,e,l,i,p,n){return function(o){function r(r){var t=o.call(this,r)||this;return t.algorithm=null,t.fromColor=null,t.toColor=null,t.type="algorithmic",t}var n;return t.__extends(r,o),n=r,r.prototype.clone=function(){return new n({fromColor:l.clone(this.fromColor),toColor:l.clone(this.toColor),algorithm:this.algorithm})},t.__decorate([i.enumeration({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],r.prototype,"algorithm",void 0),t.__decorate([i.property({type:e,json:{type:[p.Integer],write:!0}})],r.prototype,"fromColor",void 0),t.__decorate([i.property({type:e,json:{type:[p.Integer],write:!0}})],r.prototype,"toColor",void 0),t.__decorate([i.property({type:["algorithmic"]})],r.prototype,"type",void 0),r=n=t.__decorate([i.subclass("esri.tasks.support.AlgorithmicColorRamp")],r)}(n)}));