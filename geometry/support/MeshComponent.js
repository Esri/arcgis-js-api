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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/lang","../../core/Logger","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","./MeshMaterial","./MeshMaterialMetallicRoughness","./MeshVertexAttributes"],(function(e,t,r,o,s,a,n,i,c,l,u,p){var h=n.getLogger("esri.geometry.support.MeshComponent");return function(e){function t(t){var r=e.call(this,t)||this;return r.faces=null,r.material=null,r.shading="source",r.trustSourceNormals=!1,r}var s;return r(t,e),s=t,t.from=function(e){return c.ensureClass(s,e)},t.prototype.castFaces=function(e){return p.castArray(e,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},h)},t.prototype.castMaterial=function(e){return e&&"object"==typeof e&&("metallic"in e||"roughness"in e||"metallicRoughnessTexture"in e)?c.ensureClass(u,e):c.ensureClass(l,e)},t.prototype.clone=function(){return new s({faces:a.clone(this.faces),shading:this.shading,material:a.clone(this.material),trustSourceNormals:this.trustSourceNormals})},t.prototype.cloneWithDeduplication=function(e,t){return new s({faces:a.clone(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(e,t):null,trustSourceNormals:this.trustSourceNormals})},o([i.property({json:{write:!0}})],t.prototype,"faces",void 0),o([i.cast("faces")],t.prototype,"castFaces",null),o([i.property({type:l,json:{write:!0}})],t.prototype,"material",void 0),o([i.cast("material")],t.prototype,"castMaterial",null),o([i.property({type:String,json:{write:!0}})],t.prototype,"shading",void 0),o([i.property({type:Boolean})],t.prototype,"trustSourceNormals",void 0),t=s=o([i.subclass("esri.geometry.support.MeshComponent")],t)}(i.declared(s))}));