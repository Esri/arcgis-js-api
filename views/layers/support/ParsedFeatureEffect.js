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

define(["require","exports","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/assignHelper","../../../core/Error","../../../core/JSONSupport","../../../core/Logger","../../../core/accessorSupport/decorators","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f32","./cssFilterParser"],function(r,t,e,a,o,n,s,u,f,m,i,c){var p=u.getLogger("esri.views.layers.support.ParsedFeatureEffect"),l=function(r){var t=1-r.amount,e=i.mat4f32.fromValues(.2126+.7874*t,.7152-.7152*t,.0722-.0722*t,0,.2126-.2126*t,.7152+.2848*t,.0722-.0722*t,0,.2126-.2126*t,.7152-.7152*t,.0722+.9278*t,0,0,0,0,1);return m.mat4.transpose(e,e)},v=function(r){var t=1-r.amount,e=i.mat4f32.fromValues(.393+.607*t,.769-.769*t,.189-.189*t,0,.349-.349*t,.686+.314*t,.168-.168*t,0,.272-.272*t,.534-.534*t,.131+.869*t,0,0,0,0,1);return m.mat4.transpose(e,e)},y=function(r){var t=r.amount,e=i.mat4f32.fromValues(.213+.787*t,.715-.715*t,.072-.072*t,0,.213-.213*t,.715+.285*t,.072-.072*t,0,.213-.213*t,.715-.715*t,.072+.928*t,0,0,0,0,1);return m.mat4.transpose(e,e)},h=function(r){var t=Math.sin(r.angle*Math.PI/180),e=Math.cos(r.angle*Math.PI/180),a=i.mat4f32.fromValues(.213+.787*e-.213*t,.715-.715*e-.715*t,.072-.072*e+.928*t,0,.213-.213*e+.143*t,.715+.285*e+.14*t,.072-.072*e-.283*t,0,.213-.213*e-.787*t,.715-.715*e+.715*t,.072+.928*e+.072*t,0,0,0,0,1);return m.mat4.transpose(a,a)},g=function(r){var t=r.amount,e=i.mat4f32.fromValues(-t,0,0,1,0,-t,0,1,0,0,-t,1,0,0,0,1);return m.mat4.transpose(e,e)},d=function(r){var t=r.amount,e=i.mat4f32.fromValues(t,0,0,0,0,t,0,0,0,0,t,0,0,0,0,t);return m.mat4.transpose(e,e)},V=function(r){var t=r.amount,e=i.mat4f32.fromValues(t,0,0,0,0,t,0,0,0,0,t,0,0,0,0,1);return m.mat4.transpose(e,e)},x=function(r){var t=r.amount,e=i.mat4f32.fromValues(t,0,0,.5-.5*t,0,t,0,.5-.5*t,0,0,t,.5-.5*t,0,0,0,1);return m.mat4.transpose(e,e)},S={grayscale:l,sepia:v,saturate:y,"hue-rotate":h,invert:g,opacity:d,brightness:V,contrast:x};return function(r){function t(){var t=null!==r&&r.apply(this,arguments)||this;return t.customTransforms=null,t.done=!0,t}a(t,r),s=t,t.fromString=function(r){var t;try{t=c.parse(r)}catch(r){p.error(new n("invalid-type","Encountered an error when parsing css",r))}return new s({transforms:t})},t.prototype.getColorMatrix=function(){var r=this;return(this.transforms||[]).map(function(r){return o({},r)}).reverse().reduce(function(t,e){return m.mat4.multiply(t,t,r._getFactory(e)(e))},i.mat4f32.create())},t.prototype.clone=function(){return new s({transforms:this.transforms&&this.transforms.map(function(r){return o({},r)}),customTransforms:this.customTransforms&&this.customTransforms.map(function(r){return o({},r)})})},t.prototype._getFactory=function(r){var t=S[r.type];if(!t){if(this.customTransforms)for(var e=0,a=this.customTransforms;e<a.length;e++){var o=a[e],n=function(t){if(t.type===r.type){var e=i.mat4f32.fromValues.apply(i.mat4f32,t.matrix),a=m.mat4.transpose(e,e);return{value:function(r){return a}}}}(o);if("object"==typeof n)return n.value}return p.error("invalid-type","No effect "+r.type+" exists"),function(r){return i.mat4f32.create()}}return t};var s;return e([f.property()],t.prototype,"transforms",void 0),e([f.property()],t.prototype,"customTransforms",void 0),t=s=e([f.subclass("esri.views.layers.support.ParsedFeatureEffect")],t)}(f.declared(s))});