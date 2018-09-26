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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../Color","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","./ImageMeshColor","./MeshColor","./ValueMeshColor"],function(e,r,o,t,a,n,l,s,c,u,p,i){Object.defineProperty(r,"__esModule",{value:!0});var y={base:p.default,key:"type",defaultKeyValue:"value",typeMap:{value:i,image:u}},d=function(e){function r(r){var o=e.call(this)||this;return o.color=null,o}o(r,e),n=r,r.prototype.castColor=function(e){return e?"string"==typeof e?f.test(e)||a.named[e]?new i({value:e}):new u({url:e}):Array.isArray(e)?new i({value:e}):e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageData?new u({data:e}):c.ensureOneOfType(y,e):e},r.prototype.readColor=function(e,r,o){if(e)switch(e.type){case"image":return new u(e);case"value":return new i(e)}},r.prototype.clone=function(){return new n({color:l.clone(this.color)})};var n;return t([s.property({types:y,json:{write:!0}})],r.prototype,"color",void 0),t([s.cast("color")],r.prototype,"castColor",null),t([s.reader("color")],r.prototype,"readColor",null),r=n=t([s.subclass("esri.geometry.support.MeshResources")],r)}(s.declared(n));r.MeshMaterial=d;var f=/^\s*(#|rgba?\()/;r.default=d});