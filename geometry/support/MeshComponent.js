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

define(["require","exports","tslib","../../core/Accessor","../../core/lang","../../core/Logger","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","./MeshMaterial","./MeshMaterialMetallicRoughness","./MeshVertexAttributes"],(function(e,t,r,o,s,a,n,i,c,l,u){"use strict";var p=a.getLogger("esri.geometry.support.MeshComponent");return function(e){function t(t){var r=e.call(this,t)||this;return r.faces=null,r.material=null,r.shading="source",r.trustSourceNormals=!1,r}var o;return r.__extends(t,e),o=t,t.from=function(e){return i.ensureClass(o,e)},t.prototype.castFaces=function(e){return u.castArray(e,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},p)},t.prototype.castMaterial=function(e){return e&&"object"==typeof e&&("metallic"in e||"roughness"in e||"metallicRoughnessTexture"in e)?i.ensureClass(l,e):i.ensureClass(c,e)},t.prototype.clone=function(){return new o({faces:s.clone(this.faces),shading:this.shading,material:s.clone(this.material),trustSourceNormals:this.trustSourceNormals})},t.prototype.cloneWithDeduplication=function(e,t){return new o({faces:s.clone(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(e,t):null,trustSourceNormals:this.trustSourceNormals})},r.__decorate([n.property({json:{write:!0}})],t.prototype,"faces",void 0),r.__decorate([n.cast("faces")],t.prototype,"castFaces",null),r.__decorate([n.property({type:c,json:{write:!0}})],t.prototype,"material",void 0),r.__decorate([n.cast("material")],t.prototype,"castMaterial",null),r.__decorate([n.property({type:String,json:{write:!0}})],t.prototype,"shading",void 0),r.__decorate([n.property({type:Boolean})],t.prototype,"trustSourceNormals",void 0),t=o=r.__decorate([n.subclass("esri.geometry.support.MeshComponent")],t)}(o)}));