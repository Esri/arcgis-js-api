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

define(["require","exports","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/declareExtendsHelper","../../../geometry","../../../core/accessorSupport/decorators","../../../geometry/Geometry","../../../geometry/support/jsonUtils","./ClipArea"],function(e,r,t,o,n,p,s,y,i){var l={base:s,key:"type",typeMap:{extent:n.Extent,polygon:n.Polygon}};return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="geometry",r.geometry=null,r}o(r,e),n=r,Object.defineProperty(r.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r.prototype.clone=function(){return new n({geometry:this.geometry.clone()})};var n;return t([p.property({types:l,json:{read:y.fromJSON,write:!0}})],r.prototype,"geometry",void 0),t([p.property({readOnly:!0,dependsOn:["geometry"]})],r.prototype,"version",null),r=n=t([p.subclass("esri.views.layers.support.Geometry")],r)}(p.declared(i))});