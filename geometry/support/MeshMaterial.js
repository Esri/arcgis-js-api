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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../Color","../../core/JSONSupport","../../core/lang","../../core/Logger","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","./ImageMeshColor","./MeshTexture","./ValueMeshColor"],function(e,o,t,r,a,n,l,u,s,i,p,c,d){function f(){T.warn('Assigning ImageMeshColor to "MeshMaterial.color" is deprecated. Assigning to "MeshMaterial.colorTexture" instead.')}function h(){T.warn('Assigning ValueMeshColor to "MeshMaterial.color" is deprecated. Automatically converting it to esri.Color.')}Object.defineProperty(o,"__esModule",{value:!0});var T=u.getLogger("esri.geometry.support.MeshMaterial"),y=function(e){function o(o){var t=e.call(this)||this;return t.color=null,t.colorTexture=null,t.normalTexture=null,t.alphaMode="auto",t.alphaCutoff=.5,t.doubleSided=!0,t}t(o,e),n=o,o.prototype.castColor=function(e){return e?Array.isArray(e)?new a(e):e instanceof a||e instanceof c?e:"string"==typeof e?x.test(e)||a.named[e]?new a(e):(f(),this.colorTexture=new c({url:e}),null):e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageData?(f(),this.colorTexture=new c({data:e}),null):e instanceof p?(f(),this.colorTexture=new c({url:e.url,data:e.data}),null):"image"===e.type?(f(),this.colorTexture=new c(e),null):e instanceof d?(h(),new a(e.value)):i.ensureType(a,e):e},o.prototype.castColorTexture=function(e){return e?"string"==typeof e?new c({url:e}):e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageData?new c({data:e}):i.ensureType(c,e):e},o.prototype.readColorTexture=function(e,o,t){if(e)return new c(e)},o.prototype.castNormalTexture=function(e){return e?"string"==typeof e?new c({url:e}):e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageData?new c({data:e}):i.ensureType(c,e):e},o.prototype.readNormalTexture=function(e,o,t){if(e)return new c(e)},o.prototype.clone=function(){return new n({color:l.clone(this.color),colorTexture:l.clone(this.colorTexture),normalTexture:l.clone(this.normalTexture),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided})},o.prototype.cloneWithSharedTextures=function(){return new n({color:l.clone(this.color),colorTexture:this.colorTexture,normalTexture:this.normalTexture,alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided})};var n;return r([s.property({type:a,json:{write:!0}})],o.prototype,"color",void 0),r([s.cast("color")],o.prototype,"castColor",null),r([s.property({json:{write:!0}})],o.prototype,"colorTexture",void 0),r([s.cast("colorTexture")],o.prototype,"castColorTexture",null),r([s.reader("colorTexture")],o.prototype,"readColorTexture",null),r([s.property({json:{write:!0}})],o.prototype,"normalTexture",void 0),r([s.cast("normalTexture")],o.prototype,"castNormalTexture",null),r([s.reader("normalTexture")],o.prototype,"readNormalTexture",null),r([s.property({json:{write:!0}})],o.prototype,"alphaMode",void 0),r([s.property({json:{write:!0}})],o.prototype,"alphaCutoff",void 0),r([s.property({json:{write:!0}})],o.prototype,"doubleSided",void 0),o=n=r([s.subclass("esri.geometry.support.MeshMaterial")],o)}(s.declared(n));o.MeshMaterial=y;var x=/^\s*(#|rgba?\()/;o.default=y});