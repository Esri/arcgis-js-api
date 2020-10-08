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

define(["require","exports","tslib","../core/Collection","../core/lang","../core/accessorSupport/decorators","./LineSymbol3DLayer","./PathSymbol3DLayer","./Symbol3D"],(function(e,o,t,r,n,l,y,i,s){"use strict";var a=r.ofType({base:null,key:"type",typeMap:{line:y,path:i}}),p=r.ofType({base:null,key:"type",typeMap:{line:y,path:i}});return function(e){function o(o){var t=e.call(this,o)||this;return t.symbolLayers=new a,t.type="line-3d",t}var r;return t.__extends(o,e),r=o,o.prototype.clone=function(){return new r({styleOrigin:n.clone(this.styleOrigin),symbolLayers:n.clone(this.symbolLayers),thumbnail:n.clone(this.thumbnail)})},o.fromSimpleLineSymbol=function(e){return new r({symbolLayers:[y.fromSimpleLineSymbol(e)]})},t.__decorate([l.property({type:a,json:{type:p}})],o.prototype,"symbolLayers",void 0),t.__decorate([l.enumeration({LineSymbol3D:"line-3d"},{readOnly:!0})],o.prototype,"type",void 0),o=r=t.__decorate([l.subclass("esri.symbols.LineSymbol3D")],o)}(s)}));