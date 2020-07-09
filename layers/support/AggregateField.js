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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators","./OutStatistic"],(function(t,e,r,o,i,n){return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name=null,e}var o;return r.__extends(e,t),o=e,e.prototype.clone=function(){return new o({name:this.name,outStatistic:this.outStatistic.clone()})},r.__decorate([i.property({type:String,json:{write:!0}})],e.prototype,"name",void 0),r.__decorate([i.property({type:n,json:{write:!0}})],e.prototype,"outStatistic",void 0),e=o=r.__decorate([i.subclass("esri.layers.support.AggregateField")],e)}(o.JSONSupport)}));