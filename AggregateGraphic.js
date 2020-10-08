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

define(["require","exports","tslib","./Graphic","./core/accessorSupport/decorators"],(function(e,t,r,o,p){"use strict";return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}var o;return r.__extends(t,e),o=t,t.prototype.getEffectivePopupTemplate=function(e){if(void 0===e&&(e=!1),this.popupTemplate)return this.popupTemplate;var t=this.sourceLayer&&this.sourceLayer.featureReduction;return t&&"popupTemplate"in t&&t.popupEnabled?t.popupTemplate:null},t.prototype.getObjectId=function(){return this.objectId},t.prototype.clone=function(){return new o(r.__assign({objectId:this.objectId},this.cloneProperties()))},r.__decorate([p.property({type:Number,json:{read:!0}})],t.prototype,"objectId",void 0),t=o=r.__decorate([p.subclass("esri.AggregateGraphic")],t)}(o)}));