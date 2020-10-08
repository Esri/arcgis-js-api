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

define(["require","exports","tslib","../../Ground","../../core/JSONSupport","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","../../webdoc/support/opacityUtils"],(function(e,r,t,o,n,p,c,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.opacity=null,r}var n;return t.__extends(r,e),n=r,r.prototype.clone=function(){return new n({opacity:this.opacity})},r.prototype.cloneAndApplyTo=function(e){return null==this.opacity?e:((e=null!=e?e.clone():new o).opacity=this.opacity,e)},r.fromGround=function(e){return new n({opacity:e.opacity})},t.__decorate([p.property({type:Number,json:{type:c.Integer,read:{reader:a.transparencyToOpacity,source:"transparency"},write:{writer:function(e,r){r.transparency=a.opacityToTransparency(e)},target:"transparency"}}})],r.prototype,"opacity",void 0),r=n=t.__decorate([p.subclass("esri.webscene.support.SlideGround")],r)}(n.JSONSupport);r.default=i}));