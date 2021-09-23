/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/Evented","../../../core/SetUtils"],(function(e,t,n,s){"use strict";let i=function(e){function n(){var t;return(t=e.apply(this,arguments)||this)._set=new Set,t}t._inheritsLoose(n,e);var i=n.prototype;return i.clear=function(){if(this._set.size>0){const e=this.toArray();this._set.clear(),this.emit("after-changes",{type:2}),this.emit("change",{added:[],removed:e})}},i.addMany=function(e){if(0!==e.length){for(const t of e)this._set.add(t);this.emit("after-changes",{type:1}),this.emit("change",{added:e,removed:[]})}},i.remove=function(e){this._set.delete(e)&&(this.emit("after-changes",{type:2}),this.emit("change",{added:[],removed:[e]}))},i.removeMany=function(e){const t=[];for(const n of e)this._set.delete(n)&&t.push(n);t.length>0&&(this.emit("after-changes",{type:2}),this.emit("change",{added:[],removed:t}))},i.toArray=function(){return[...this._set]},i.find=function(e){let t;return s.someSet(this._set,(n=>!!e(n)&&(t=n,!0))),t},i.forEach=function(e){this._set.forEach((t=>e(t)))},t._createClass(n,[{key:"length",get:function(){return this._set.size}}]),n}(n);e.EventedSet=i,Object.defineProperty(e,"__esModule",{value:!0})}));
