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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../Ground","../../core/JSONSupport","../../core/accessorSupport/decorators","../../webdoc/support/opacityUtils"],function(r,e,t,o,n,p,c,a){Object.defineProperty(e,"__esModule",{value:!0});var i=function(r){function e(){var e=null!==r&&r.apply(this,arguments)||this;return e.opacity=null,e}t(e,r),p=e,e.prototype.clone=function(){return new p({opacity:this.opacity})},e.prototype.cloneAndApplyTo=function(r){return null==this.opacity?r:(r=null!=r?r.clone():new n,r.opacity=this.opacity,r)},e.fromGround=function(r){return new p({opacity:r.opacity})},e.sanitizeJSON=function(r){return{transparency:r.transparency}};var p;return o([c.property({type:Number,json:{read:{reader:a.transparencyToOpacity,source:"transparency"},write:{writer:function(r,e){e.transparency=a.opacityToTransparency(r)},target:"transparency"}}})],e.prototype,"opacity",void 0),e=p=o([c.subclass("esri.webscene.support.SlideGround")],e)}(c.declared(p));e.default=i});