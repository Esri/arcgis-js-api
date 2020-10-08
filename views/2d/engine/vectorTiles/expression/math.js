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

define(["require","exports","tslib","./expression"],(function(n,t,r,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Calculate=t.Add=t.Pow=t.Mod=t.Div=t.Mul=t.Sub=void 0;var u=function(){function n(n,t){this.args=n,this.calculate=t}return n.parse=function(t,r){return new n(t.slice(1).map((function(n){return e.createExpression(n)})),r)},n.prototype.evaluate=function(n,t){var r;return this.args&&(r=this.args.map((function(r){return r.evaluate(n,t)}))),this.calculate(r)},n}(),a=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return r.__extends(t,n),t.parse=function(n){switch(n.length){case 2:return u.parse(n,(function(n){return-n[0]}));case 3:return u.parse(n,(function(n){return n[0]-n[1]}));default:throw new Error('"-" expects 1 or 2 arguments')}},t}(u);t.Sub=a;var i=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return r.__extends(t,n),t.parse=function(n){return u.parse(n,(function(n){for(var t=1,r=0,e=n;r<e.length;r++){t*=e[r]}return t}))},t}(u);t.Mul=i;var o=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return r.__extends(t,n),t.parse=function(n){if(3===n.length)return u.parse(n,(function(n){return n[0]/n[1]}));throw new Error('"/" expects 2 arguments')},t}(u);t.Div=o;var s=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return r.__extends(t,n),t.parse=function(n){if(3===n.length)return u.parse(n,(function(n){return n[0]%n[1]}));throw new Error('"%" expects 2 arguments')},t}(u);t.Mod=s;var c=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return r.__extends(t,n),t.parse=function(n){if(3===n.length)return u.parse(n,(function(n){return Math.pow(n[0],n[1])}));throw new Error('"^" expects 1 or 2 arguments')},t}(u);t.Pow=c;var f=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return r.__extends(t,n),t.parse=function(n){return u.parse(n,(function(n){for(var t=0,r=0,e=n;r<e.length;r++){t+=e[r]}return t}))},t}(u);t.Add=f;var l=function(){function n(n,t){this.args=n,this.calculate=t}return n.parse=function(t){return new n(t.slice(1).map((function(n){return e.createExpression(n)})),n.ops[t[0]])},n.prototype.evaluate=function(n,t){var r;return this.args&&(r=this.args.map((function(r){return r.evaluate(n,t)}))),this.calculate(r)},n.ops={abs:function(n){return Math.abs(n[0])},acos:function(n){return Math.acos(n[0])},asin:function(n){return Math.asin(n[0])},atan:function(n){return Math.atan(n[0])},ceil:function(n){return Math.ceil(n[0])},cos:function(n){return Math.cos(n[0])},e:function(){return Math.E},floor:function(n){return Math.floor(n[0])},ln:function(n){return Math.log(n[0])},ln2:function(){return Math.LN2},log10:function(n){return Math.log(n[0])/Math.LN10},log2:function(n){return Math.log(n[0])/Math.LN2},max:function(n){return Math.max.apply(Math,n)},min:function(n){return Math.min.apply(Math,n)},pi:function(){return Math.PI},round:function(n){return Math.round(n[0])},sin:function(n){return Math.sin(n[0])},sqrt:function(n){return Math.sqrt(n[0])},tan:function(n){return Math.tan(n[0])}},n}();t.Calculate=l}));