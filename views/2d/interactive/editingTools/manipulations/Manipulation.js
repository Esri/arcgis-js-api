/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers"],(function(n,t){"use strict";let e=function(){function n(){}var e=n.prototype;return e.hasManipulator=function(n){return this.someManipulator((t=>t===n))},e.someManipulator=function(n){let t=!1;return this.forEachManipulator((e=>{!t&&n(e)&&(t=!0)})),t},t._createClass(n,[{key:"hovering",get:function(){return this.someManipulator((n=>n.hovering))}},{key:"grabbing",get:function(){return this.someManipulator((n=>n.grabbing))}},{key:"dragging",get:function(){return this.someManipulator((n=>n.dragging))}}]),n}();var r;n.ManipulatorType=void 0,(r=n.ManipulatorType||(n.ManipulatorType={}))[r.TRANSLATE_XY=0]="TRANSLATE_XY",r[r.SCALE=1]="SCALE",r[r.ROTATE=2]="ROTATE",n.Manipulation=e,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
