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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators"],(function(e,t,r,o,p){"use strict";return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.age=null,t.ageReceived=null,t.displayCount=null,t.maxObservations=1,t}var o;return r.__extends(t,e),o=t,t.prototype.clone=function(){return new o({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})},r.__decorate([p.property({type:Number,json:{write:!0}})],t.prototype,"age",void 0),r.__decorate([p.property({type:Number,json:{write:!0}})],t.prototype,"ageReceived",void 0),r.__decorate([p.property({type:Number,json:{write:!0}})],t.prototype,"displayCount",void 0),r.__decorate([p.property({type:Number,json:{write:!0}})],t.prototype,"maxObservations",void 0),t=o=r.__decorate([p.subclass("esri.layers.support.PurgeOptions")],t)}(o.JSONSupport)}));