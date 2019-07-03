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

define(["require","exports","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/assignHelper","../../../core/Error","../../../core/JSONSupport","../../../core/Logger","../../../core/maybe","../../../core/accessorSupport/decorators","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f32","./cssFilterParser"],function(r,t,e,o,a,n,s,u,i,p,c,f,m){var l=u.getLogger("esri.views.layers.support.ParsedFeatureEffect"),y=function(r){var t=1-r.amount,e=f.mat4f32.fromValues(.2126+.7874*t,.7152-.7152*t,.0722-.0722*t,0,.2126-.2126*t,.7152+.2848*t,.0722-.0722*t,0,.2126-.2126*t,.7152-.7152*t,.0722+.9278*t,0,0,0,0,1);return c.mat4.transpose(e,e)},v=function(r){var t=1-r.amount,e=f.mat4f32.fromValues(.393+.607*t,.769-.769*t,.189-.189*t,0,.349-.349*t,.686+.314*t,.168-.168*t,0,.272-.272*t,.534-.534*t,.131+.869*t,0,0,0,0,1);return c.mat4.transpose(e,e)},h=function(r){var t=r.amount,e=f.mat4f32.fromValues(.213+.787*t,.715-.715*t,.072-.072*t,0,.213-.213*t,.715+.285*t,.072-.072*t,0,.213-.213*t,.715-.715*t,.072+.928*t,0,0,0,0,1);return c.mat4.transpose(e,e)},g=function(r){var t=Math.sin(r.angle*Math.PI/180),e=Math.cos(r.angle*Math.PI/180),o=f.mat4f32.fromValues(.213+.787*e-.213*t,.715-.715*e-.715*t,.072-.072*e+.928*t,0,.213-.213*e+.143*t,.715+.285*e+.14*t,.072-.072*e-.283*t,0,.213-.213*e-.787*t,.715-.715*e+.715*t,.072+.928*e+.072*t,0,0,0,0,1);return c.mat4.transpose(o,o)},d=function(r){var t=1-2*r.amount,e=r.amount,o=f.mat4f32.fromValues(t,0,0,e,0,t,0,e,0,0,t,e,0,0,0,1);return c.mat4.transpose(o,o)},S=function(r){var t=r.amount,e=f.mat4f32.fromValues(t,0,0,0,0,t,0,0,0,0,t,0,0,0,0,1);return c.mat4.transpose(e,e)},V=function(r){var t=r.amount,e=f.mat4f32.fromValues(t,0,0,.5-.5*t,0,t,0,.5-.5*t,0,0,t,.5-.5*t,0,0,0,1);return c.mat4.transpose(e,e)},x={grayscale:y,sepia:v,saturate:h,"hue-rotate":g,invert:d,brightness:S,contrast:V};return function(r){function t(){var t=null!==r&&r.apply(this,arguments)||this;return t.customTransforms=null,t.done=!0,t}o(t,r),s=t,t.fromString=function(r){var t=[],e=null;try{for(var o=0,a=m.parse(r);o<a.length;o++){var u=a[o];"opacity"===u.type?e=u:t.push(u)}}catch(r){l.error(new n("invalid-type","Encountered an error when parsing css",r))}return new s({transforms:t,opacity:e})},t.prototype.getOpacity=function(){return i.isSome(this.opacity)?this.opacity.amount:1},t.prototype.getColorMatrix=function(){var r=this;return(this.transforms||[]).map(function(r){return a({},r)}).reverse().reduce(function(t,e){return c.mat4.multiply(t,t,r._getFactory(e)(e))},f.mat4f32.create())},t.prototype.clone=function(){return new s({transforms:this.transforms&&this.transforms.map(function(r){return a({},r)}),customTransforms:this.customTransforms&&this.customTransforms.map(function(r){return a({},r)})})},t.prototype._getFactory=function(r){var t=x[r.type];if(!t){if(this.customTransforms)for(var e=0,o=this.customTransforms;e<o.length;e++){var a=o[e],n=function(t){if(t.type===r.type){var e=f.mat4f32.fromValues.apply(f.mat4f32,t.matrix),o=c.mat4.transpose(e,e);return{value:function(r){return o}}}}(a);if("object"==typeof n)return n.value}return l.error("invalid-type","No effect "+r.type+" exists"),function(r){return f.mat4f32.create()}}return t};var s;return e([p.property()],t.prototype,"opacity",void 0),e([p.property()],t.prototype,"transforms",void 0),e([p.property()],t.prototype,"customTransforms",void 0),t=s=e([p.subclass("esri.views.layers.support.ParsedFeatureEffect")],t)}(p.declared(s))});