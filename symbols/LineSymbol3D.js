// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/lang","../core/Collection","./Symbol3D","./LineSymbol3DLayer","./PathSymbol3DLayer","./TextSymbol3DLayer","../core/accessorSupport/decorators"],function(e,r,t,o,l,n,y,s,p,i,a){var c=n.ofType({base:null,key:"type",typeMap:{line:s,text:i,path:p}}),u=function(e){function r(r){var t=e.call(this)||this;return t.symbolLayers=new c,t.type="line-3d",t}return t(r,e),n=r,r.prototype.clone=function(){return new n({styleOrigin:l.clone(this.styleOrigin),symbolLayers:l.clone(this.symbolLayers),thumbnail:l.clone(this.thumbnail)})},o([a.property({type:c})],r.prototype,"symbolLayers",void 0),o([a.property()],r.prototype,"type",void 0),r=n=o([a.subclass("esri.symbols.LineSymbol3D")],r);var n}(a.declared(y));return u});