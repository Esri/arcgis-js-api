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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/Accessor","../../core/jsonMap","../../core/Logger","../../core/Warning","../../core/accessorSupport/decorators","./ColorVariable","./OpacityVariable","./RotationVariable","./SizeVariable"],(function(e,r,a,t,i,o,s,n,l,u,c,p){var b=o.getLogger("esri.renderers.visualVariables.VisualVariableFactory"),V={color:l,size:p,opacity:u,rotation:c},f=new i.default({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"}),h=/^\[([^\]]+)\]$/i;return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.colorVariables=null,r.opacityVariables=null,r.rotationVariables=null,r.sizeVariables=null,r}return a.__extends(r,e),Object.defineProperty(r.prototype,"visualVariables",{set:function(e){if(this._resetVariables(),(e=e&&e.filter((function(e){return!!e})))&&e.length){for(var r=0,a=e;r<a.length;r++){switch((i=a[r]).type){case"color":this.colorVariables.push(i);break;case"opacity":this.opacityVariables.push(i);break;case"rotation":this.rotationVariables.push(i);break;case"size":this.sizeVariables.push(i)}}if(this.sizeVariables.length)this.sizeVariables.some((function(e){return!!e.target}))&&e.sort((function(e,r){return e.target===r.target?0:e.target?1:-1}));for(var t=0;t<e.length;t++){var i;(i=e[t]).index=t}this._set("visualVariables",e)}else this._set("visualVariables",e)},enumerable:!0,configurable:!0}),r.prototype.readVariables=function(e,r,a){var t=r.rotationExpression,i=r.rotationType,o=t&&t.match(h),n=o&&o[1];if(n&&(e||(e=[]),e.push({type:"rotationInfo",rotationType:i,field:n})),e)return e.map((function(e){var r=f.read(e.type),t=V[r];t||(b.warn("Unknown variable type: "+r),a&&a.messages&&a.messages.push(new s("visual-variable:unsupported","visualVariable of type '"+r+"' is not supported",{definition:e,context:a})));var i=new t;return i.read(e,a),i}))},r.prototype.writeVariables=function(e,r){for(var a=[],t=0,i=e;t<i.length;t++){var o=i[t].toJSON(r);o&&a.push(o)}return a},r.prototype._resetVariables=function(){this.colorVariables=[],this.opacityVariables=[],this.rotationVariables=[],this.sizeVariables=[]},a.__decorate([n.property()],r.prototype,"visualVariables",null),r=a.__decorate([n.subclass("esri.renderers.visualVariables.VisualVariableFactory")],r)}(t)}));