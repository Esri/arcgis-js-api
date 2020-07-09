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

define(["require","exports","tslib","../../core/Collection","../../core/lang","../../core/accessorSupport/decorators","./BuildingFilterAuthoringInfo","./BuildingFilterAuthoringInfoBlock"],(function(e,o,r,t,i,n,c,l){var p=t.ofType(l);return function(e){function o(){var o=null!==e&&e.apply(this,arguments)||this;return o.type="checkbox",o}var t;return r.__extends(o,e),t=o,o.prototype.clone=function(){return new t({filterBlocks:i.clone(this.filterBlocks)})},r.__decorate([n.property({type:["checkbox"]})],o.prototype,"type",void 0),r.__decorate([n.property({type:p,json:{write:!0}})],o.prototype,"filterBlocks",void 0),o=t=r.__decorate([n.subclass("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],o)}(c)}));