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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/lang","../../core/Logger","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","./MeshMaterial","./MeshVertexAttributes"],function(e,r,t,o,s,a,n,c,i,p,u){var l=n.getLogger("esri.geometry.support.MeshComponent");return function(e){function r(r){var t=e.call(this,r)||this;return t.faces=null,t.material=null,t.shading="source",t.trustSourceNormals=!1,t}t(r,e),s=r,r.from=function(e){return i.ensureClass(s,e)},r.prototype.castFaces=function(e){var r={loggerTag:".faces=",stride:3};return u.castArray(e,Uint32Array,[Uint16Array],r,l)},r.prototype.clone=function(){return new s({faces:a.clone(this.faces),shading:this.shading,material:a.clone(this.material),trustSourceNormals:this.trustSourceNormals})},r.prototype.cloneWithDeduplication=function(e,r){return new s({faces:a.clone(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(e,r):null,trustSourceNormals:this.trustSourceNormals})};var s;return o([c.property({json:{write:!0}})],r.prototype,"faces",void 0),o([c.cast("faces")],r.prototype,"castFaces",null),o([c.property({type:p,json:{write:!0}})],r.prototype,"material",void 0),o([c.property({type:String,json:{write:!0}})],r.prototype,"shading",void 0),o([c.property({type:Boolean})],r.prototype,"trustSourceNormals",void 0),r=s=o([c.subclass("esri.geometry.support.MeshComponent")],r)}(c.declared(s))});