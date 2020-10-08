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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators"],(function(t,r,e,n,o){"use strict";return function(t){function r(){var r=null!==t&&t.apply(this,arguments)||this;return r.unit=null,r}var n;return e.__extends(r,t),n=r,r.prototype.clone=function(){return new n({unit:this.unit})},e.__decorate([o.property({type:String,json:{write:!0}})],r.prototype,"unit",void 0),r=n=e.__decorate([o.subclass("esri.renderers.support.DotDensityLegendOptions")],r)}(n.JSONSupport)}));