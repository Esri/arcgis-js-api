// COPYRIGHT © 2018 Esri
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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Collection","../core/lang","../core/accessorSupport/decorators","./LineSymbol3DLayer","./PathSymbol3DLayer","./Symbol3D","./TextSymbol3DLayer"],function(e,r,t,o,l,n,y,s,p,i,a){var c=l.ofType({base:null,key:"type",typeMap:{line:s,text:a,path:p}});return function(e){function r(r){var t=e.call(this)||this;return t.symbolLayers=new c,t.type="line-3d",t}return t(r,e),l=r,r.prototype.clone=function(){return new l({styleOrigin:n.clone(this.styleOrigin),symbolLayers:n.clone(this.symbolLayers),thumbnail:n.clone(this.thumbnail)})},o([y.property({type:c})],r.prototype,"symbolLayers",void 0),o([y.property()],r.prototype,"type",void 0),r=l=o([y.subclass("esri.symbols.LineSymbol3D")],r);var l}(y.declared(i))});