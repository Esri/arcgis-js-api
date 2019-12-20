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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/accessorSupport/decorators"],function(e,r,o,t,p,s){Object.defineProperty(r,"__esModule",{value:!0});var c=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.x=0,r.y=0,r.z=0,r}o(r,e),p=r,r.prototype.clone=function(){return new p({x:this.x,y:this.y,z:this.z})};var p;return t([s.property({type:Number})],r.prototype,"x",void 0),t([s.property({type:Number})],r.prototype,"y",void 0),t([s.property({type:Number})],r.prototype,"z",void 0),r=p=t([s.subclass("esri.symbols.support.Symbol3DAnchorPosition3D")],r)}(s.declared(p));r.Symbol3DAnchorPosition3D=c,r.default=c});