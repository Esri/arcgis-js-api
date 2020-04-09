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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/jsonMap","../../core/Logger","../../core/Warning","../../core/accessorSupport/decorators","./ColorVariable","./OpacityVariable","./RotationVariable","./SizeVariable"],(function(e,r,a,t,i,o,s,n,l,u,c,p,b){var V=s.getLogger("esri.renderers.visualVariables.VisualVariableFactory"),f={color:u,size:b,opacity:c,rotation:p},h=new o.default({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"}),y=/^\[([^\]]+)\]$/i;return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.colorVariables=null,r.opacityVariables=null,r.rotationVariables=null,r.sizeVariables=null,r}return a(r,e),Object.defineProperty(r.prototype,"visualVariables",{set:function(e){if(this._resetVariables(),(e=e&&e.filter((function(e){return!!e})))&&e.length){for(var r=0,a=e;r<a.length;r++){switch((i=a[r]).type){case"color":this.colorVariables.push(i);break;case"opacity":this.opacityVariables.push(i);break;case"rotation":this.rotationVariables.push(i);break;case"size":this.sizeVariables.push(i)}}if(this.sizeVariables.length)this.sizeVariables.some((function(e){return!!e.target}))&&e.sort((function(e,r){return e.target===r.target?0:e.target?1:-1}));for(var t=0;t<e.length;t++){var i;(i=e[t]).index=t}this._set("visualVariables",e)}else this._set("visualVariables",e)},enumerable:!0,configurable:!0}),r.prototype.readVariables=function(e,r,a){var t=r.rotationExpression,i=r.rotationType,o=t&&t.match(y),s=o&&o[1];if(s&&(e||(e=[]),e.push({type:"rotationInfo",rotationType:i,field:s})),e)return e.map((function(e){var r=h.read(e.type),t=f[r];t||(V.warn("Unknown variable type: "+r),a&&a.messages&&a.messages.push(new n("visual-variable:unsupported","visualVariable of type '"+r+"' is not supported",{definition:e,context:a})));var i=new t;return i.read(e,a),i}))},r.prototype.writeVariables=function(e,r){for(var a=[],t=0,i=e;t<i.length;t++){var o=i[t].toJSON(r);o&&a.push(o)}return a},r.prototype._resetVariables=function(){this.colorVariables=[],this.opacityVariables=[],this.rotationVariables=[],this.sizeVariables=[]},t([l.property()],r.prototype,"visualVariables",null),r=t([l.subclass("esri.renderers.visualVariables.VisualVariableFactory")],r)}(l.declared(i))}));