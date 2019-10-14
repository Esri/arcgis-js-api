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

define(["require","exports","../../core/tsSupport/decorateHelper","../../core/tsSupport/declareExtendsHelper","../../Color","../../core/lang","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","./ColorRamp"],function(o,r,e,t,l,p,i,n,s){return function(o){function r(r){var e=o.call(this)||this;return e.algorithm=null,e.fromColor=null,e.toColor=null,e.type="algorithmic",e}t(r,o),s=r,r.prototype.clone=function(){return new s({fromColor:p.clone(this.fromColor),toColor:p.clone(this.toColor),algorithm:this.algorithm})};var s;return e([i.enumeration.serializable()({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],r.prototype,"algorithm",void 0),e([i.property({type:l,json:{type:[n.Integer],write:!0}})],r.prototype,"fromColor",void 0),e([i.property({type:l,json:{type:[n.Integer],write:!0}})],r.prototype,"toColor",void 0),e([i.property({type:["algorithmic"]})],r.prototype,"type",void 0),r=s=e([i.subclass("esri.tasks.support.AlgorithmicColorRamp")],r)}(i.declared(s))});