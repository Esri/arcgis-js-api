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

define(["require","exports","tslib","../../../Color","../../../core/Accessor","../../../core/accessorSupport/decorators"],(function(o,e,r,t,p,i){var c=0;return function(o){function e(){var e=null!==o&&o.apply(this,arguments)||this;return e.color=new t([0,255,255]),e.haloOpacity=1,e.fillOpacity=.25,e}return r.__extends(e,o),Object.defineProperty(e.prototype,"version",{get:function(){return c++},enumerable:!0,configurable:!0}),r.__decorate([i.property({readOnly:!0,dependsOn:["color","haloColor","haloOpacity","fillOpacity"]})],e.prototype,"version",null),r.__decorate([i.property({type:t})],e.prototype,"color",void 0),r.__decorate([i.property({type:t})],e.prototype,"haloColor",void 0),r.__decorate([i.property()],e.prototype,"haloOpacity",void 0),r.__decorate([i.property()],e.prototype,"fillOpacity",void 0),e=r.__decorate([i.subclass("esri.views.2d.support.HighlightOptions")],e)}(p)}));