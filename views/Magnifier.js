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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Accessor","../core/accessorSupport/decorators"],function(e,o,r,t,p,i){return function(e){function o(o){var r=e.call(this)||this;return r.factor=1.5,r.offsetX=0,r.offsetY=0,r.position=null,r.visible=!1,r}return r(o,e),Object.defineProperty(o.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),t([i.property({type:Number})],o.prototype,"factor",void 0),t([i.property({type:Number})],o.prototype,"offsetX",void 0),t([i.property({type:Number})],o.prototype,"offsetY",void 0),t([i.property()],o.prototype,"position",void 0),t([i.property({readOnly:!0,dependsOn:["factor","offsetX","offsetY","position","visible"]})],o.prototype,"version",null),t([i.property({type:Boolean})],o.prototype,"visible",void 0),o=t([i.subclass("esri.views.Magnifier")],o)}(i.declared(p))});