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

define(["require","exports","tslib","../core/Collection","../core/lang","../core/accessorSupport/decorators","./FillSymbol3DLayer","./Symbol3D"],(function(e,o,t,r,s,l,n,y){"use strict";var i=r.ofType({base:null,key:"type",typeMap:{fill:n}});return function(e){function o(o){var t=e.call(this,o)||this;return t.symbolLayers=new i,t.type="mesh-3d",t}var r;return t.__extends(o,e),r=o,o.prototype.clone=function(){return new r({styleOrigin:s.clone(this.styleOrigin),symbolLayers:s.clone(this.symbolLayers),thumbnail:s.clone(this.thumbnail)})},t.__decorate([l.property({type:i})],o.prototype,"symbolLayers",void 0),t.__decorate([l.enumeration({MeshSymbol3D:"mesh-3d"},{readOnly:!0})],o.prototype,"type",void 0),o=r=t.__decorate([l.subclass("esri.symbols.MeshSymbol3D")],o)}(y)}));