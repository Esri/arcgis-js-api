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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/lang","../../core/Logger","../../core/accessorSupport/decorators","./MeshMaterial","./MeshVertexAttributes"],function(e,r,t,o,s,a,i,n,c,p){var l=i.getLogger("esri.geometry.support.MeshComponent");return function(e){function r(r){var t=e.call(this)||this;return t.faces=null,t.material=null,t.shading="source",t.trustSourceNormals=!1,t}t(r,e),s=r,r.prototype.castFaces=function(e){var r={loggerTag:".faces=",stride:3};return p.castArray(e,Uint32Array,[Uint16Array],r,l)},r.prototype.clone=function(){return new s({faces:a.clone(this.faces),shading:this.shading,material:a.clone(this.material),trustSourceNormals:this.trustSourceNormals})},r.prototype.cloneWithSharedTextures=function(){return new s({faces:a.clone(this.faces),shading:this.shading,material:this.material?this.material.cloneWithSharedTextures():null,trustSourceNormals:this.trustSourceNormals})};var s;return o([n.property({json:{write:!0}})],r.prototype,"faces",void 0),o([n.cast("faces")],r.prototype,"castFaces",null),o([n.property({type:c.MeshMaterial,json:{write:!0}})],r.prototype,"material",void 0),o([n.property({type:String,json:{write:!0}})],r.prototype,"shading",void 0),o([n.property({type:Boolean})],r.prototype,"trustSourceNormals",void 0),r=s=o([n.subclass("esri.geometry.support.MeshComponent")],r)}(n.declared(s))});