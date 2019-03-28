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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/kebabDictionary","../../core/Logger","../../core/Warning","../../core/accessorSupport/decorators","./ColorVariable","./OpacityVariable","./RotationVariable","./SizeVariable"],function(e,t,a,r,i,o,s,n,l,u,c,p,b){var h=s.getLogger("esri.renderers.visualVariables.VisualVariableFactory"),f={color:u,size:b,opacity:c,rotation:p},V=new o.default({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"}),g=/^\[([^\]]+)\]$/i;return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.colorVariables=null,t.opacityVariables=null,t.rotationVariables=null,t.sizeVariables=null,t}return a(t,e),Object.defineProperty(t.prototype,"visualVariables",{set:function(e){if(this._resetVariables(),!(e=e&&e.filter(function(e){return!!e}))||!e.length)return void this._set("visualVariables",e);for(var t=0,a=e;t<a.length;t++){var r=a[t];switch(r.type){case"color":this.colorVariables.push(r);break;case"opacity":this.opacityVariables.push(r);break;case"rotation":this.rotationVariables.push(r);break;case"size":this.sizeVariables.push(r)}}if(this.sizeVariables.length){this.sizeVariables.some(function(e){return!!e.target})&&e.sort(function(e,t){return e.target===t.target?0:e.target?1:-1})}for(var i=0;i<e.length;i++){var r=e[i];r.index=i}this._set("visualVariables",e)},enumerable:!0,configurable:!0}),t.prototype.readVariables=function(e,t,a){var r=t.rotationExpression,i=t.rotationType,o=r&&r.match(g),s=o&&o[1];if(s&&(e||(e=[]),e.push({type:"rotationInfo",rotationType:i,field:s})),e)return e.map(function(e){var t=V.read(e.type),r=f[t];r||(h.warn("Unknown variable type: "+t),a&&a.messages&&a.messages.push(new n("visual-variable:unsupported","visualVariable of type '"+t+"' is not supported",{definition:e,context:a})));var i=new r;return i.read(e,a),i})},t.prototype.writeVariables=function(e,t){for(var a=[],r=0,i=e;r<i.length;r++){var o=i[r],s=o.toJSON(t);s&&a.push(s)}return a},t.prototype.getVisualVariableValues=function(e,t){var a=[];return this.colorVariables.forEach(function(r){var i=r.getColor(e,t);a.push({variable:r,value:i})}),this.opacityVariables.forEach(function(r){var i=r.getOpacity(e,t);a.push({variable:r,value:i})}),this.rotationVariables.forEach(function(r){var i=r.getRotationAngle(e,t);a.push({variable:r,value:i})}),this.sizeVariables.forEach(function(r){var i=r.getSize(e,t);a.push({variable:r,value:i})}),a.filter(function(e){return null!=e.value})},t.prototype.getColor=function(e,t){if(this.colorVariables.length){return this.colorVariables[0].getColor(e,t)}},t.prototype.getOpacity=function(e,t){if(this.opacityVariables.length){return this.opacityVariables[0].getOpacity(e,t)}},t.prototype.getRotationAngle=function(e,t){if(this.rotationVariables.length){return this.rotationVariables[0].getRotationAngle(e,t)}},t.prototype.getSize=function(e,t){if(this.sizeVariables.length){return this.sizeVariables[0].getSize(e,t)}},t.prototype.getSizeRangeAtScale=function(e,t){if(this.sizeVariables.length){return this.sizeVariables[0].getSizeRangeAtScale(e,t)}},t.prototype._resetVariables=function(){this.colorVariables=[],this.opacityVariables=[],this.rotationVariables=[],this.sizeVariables=[]},r([l.property()],t.prototype,"visualVariables",null),t=r([l.subclass("esri.renderers.visualVariables.VisualVariableFactory")],t)}(l.declared(i))});