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

define(["require","exports","tslib","../../../core/accessorSupport/decorators","../../Slider/SliderViewModel"],(function(e,t,r,o,n){Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){function t(t){var r=e.call(this,t)||this;return r.items=null,r.currentIndex=0,r.isDropdownOpen=!1,r}return r.__extends(t,e),Object.defineProperty(t.prototype,"currentItem",{get:function(){return null!==this.items&&null!==this.currentIndex&&this.currentIndex<this.items.length?this.items[this.currentIndex]:null},enumerable:!0,configurable:!0}),t.prototype.selectItem=function(e){this.currentIndex=e,this.isDropdownOpen=!1},t.prototype.toggle=function(){this.isDropdownOpen=!this.isDropdownOpen},r.__decorate([o.property()],t.prototype,"items",void 0),r.__decorate([o.property()],t.prototype,"currentIndex",void 0),r.__decorate([o.property({dependsOn:["currentIndex","items"]})],t.prototype,"currentItem",null),r.__decorate([o.property()],t.prototype,"isDropdownOpen",void 0),t=r.__decorate([o.subclass("esri.widgets.Daylight.SliderWithDropdown")],t)}(n);t.SliderWithDropdownViewModel=i}));