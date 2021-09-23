/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","./Accessor","./Collection","./maybe","./accessorSupport/decorators/property","./accessorSupport/decorators/subclass"],(function(e,r,t,s,o,i,n){"use strict";let u=function(r){function t(e){var t;return(t=r.call(this,e)||this)._groups=new Map,t}e._inheritsLoose(t,r);var i=t.prototype;return i.destroy=function(){this.removeAll()},i.add=function(e,r){if(!this._isHandle(e)&&!Array.isArray(e)&&!s.isCollection(e))return this;const t=this._getOrCreateGroup(r);return Array.isArray(e)||s.isCollection(e)?e.forEach((e=>this._isHandle(e)&&t.push(e))):t.push(e),this.notifyChange("size"),this},i.forEach=function(e,r){if("function"==typeof e)this._groups.forEach((r=>r.forEach(e)));else{const t=this._getGroup(e);t&&r&&t.forEach(r)}},i.has=function(e){return this._groups.has(this._ensureGroupKey(e))},i.remove=function(e){if(Array.isArray(e)||s.isCollection(e))return e.forEach(this.remove,this),this;if(!this.has(e))return this;const r=this._getGroup(e);for(let t=0;t<r.length;t++)r[t].remove();return this._deleteGroup(e),this.notifyChange("size"),this},i.removeAll=function(){return this._groups.forEach((e=>{for(let r=0;r<e.length;r++)e[r].remove()})),this._groups.clear(),this.notifyChange("size"),this},i._isHandle=function(e){return e&&!!e.remove},i._getOrCreateGroup=function(e){if(this.has(e))return this._getGroup(e);const r=[];return this._groups.set(this._ensureGroupKey(e),r),r},i._getGroup=function(e){return o.assumeNonNull(this._groups.get(this._ensureGroupKey(e)))},i._deleteGroup=function(e){return this._groups.delete(this._ensureGroupKey(e))},i._ensureGroupKey=function(e){return e||"_default_"},e._createClass(t,[{key:"size",get:function(){let e=0;return this._groups.forEach((r=>{e+=r.length})),e}}]),t}(t);return r.__decorate([i.property({readOnly:!0})],u.prototype,"size",null),u=r.__decorate([n.subclass("esri.core.Handles")],u),u}));
