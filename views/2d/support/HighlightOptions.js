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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../Color","../../../core/Accessor","../../../core/accessorSupport/decorators"],(function(o,r,e,t,p,l,i){var c=0;return function(o){function r(){var r=null!==o&&o.apply(this,arguments)||this;return r.color=new p([0,255,255]),r.haloOpacity=1,r.fillOpacity=.25,r}return e(r,o),Object.defineProperty(r.prototype,"version",{get:function(){return c++},enumerable:!0,configurable:!0}),t([i.property({readOnly:!0,dependsOn:["color","haloColor","haloOpacity","fillOpacity"]})],r.prototype,"version",null),t([i.property({type:p})],r.prototype,"color",void 0),t([i.property({type:p})],r.prototype,"haloColor",void 0),t([i.property()],r.prototype,"haloOpacity",void 0),t([i.property()],r.prototype,"fillOpacity",void 0),r=t([i.subclass("esri.views.2d.support.HighlightOptions")],r)}(i.declared(l))}));