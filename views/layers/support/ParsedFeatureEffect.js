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

define(["require","exports","tslib","../../../core/Error","../../../core/JSONSupport","../../../core/Logger","../../../core/maybe","../../../core/accessorSupport/decorators","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f32","../effects/parser"],(function(r,e,t,o,a,s,n,i,c,p,u){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ParsedFeatureEffect=void 0;var f=s.getLogger("esri.views.layers.support.ParsedFeatureEffect"),l=function(r){function e(){var e=null!==r&&r.apply(this,arguments)||this;return e.done=!0,e}var a;return t.__extends(e,r),a=e,e.fromString=function(r){var e=[],t=null,s=u.parse(r);if(s.error)f.error(new o("invalid-type","Encountered an error when parsing css",s.error));else for(var n=0,i=s.effects;n<i.length;n++){var c=i[n];"opacity"===c.type?t=c:"colorMatrix"in c&&e.push(c)}return new a({transforms:e,opacity:t})},e.prototype.getOpacity=function(){return n.isSome(this.opacity)?this.opacity.amount:1},e.prototype.getColorMatrix=function(){return(this.transforms||[]).map((function(r){return{colorMatrix:p.mat4f32.clone(r.colorMatrix)}})).reverse().reduce((function(r,e){return c.mat4.multiply(r,r,e.colorMatrix)}),p.mat4f32.create())},e.prototype.clone=function(){return new a({transforms:this.transforms&&this.transforms.map((function(r){return t.__assign({},r)}))})},t.__decorate([i.property()],e.prototype,"opacity",void 0),t.__decorate([i.property()],e.prototype,"transforms",void 0),e=a=t.__decorate([i.subclass("esri.views.layers.support.ParsedFeatureEffect")],e)}(a.JSONSupport);e.ParsedFeatureEffect=l}));