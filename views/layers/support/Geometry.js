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

define(["require","exports","tslib","../../../geometry","../../../core/accessorSupport/decorators","../../../geometry/Geometry","../../../geometry/support/jsonUtils","./ClipArea"],(function(e,t,r,o,n,p,s,y){"use strict";var i={base:p,key:"type",typeMap:{extent:o.Extent,polygon:o.Polygon}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="geometry",t.geometry=null,t}var o;return r.__extends(t,e),o=t,Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!1,configurable:!0}),t.prototype.clone=function(){return new o({geometry:this.geometry.clone()})},r.__decorate([n.property({types:i,json:{read:s.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r.__decorate([n.property({readOnly:!0,dependsOn:["geometry"]})],t.prototype,"version",null),t=o=r.__decorate([n.subclass("esri.views.layers.support.Geometry")],t)}(y)}));