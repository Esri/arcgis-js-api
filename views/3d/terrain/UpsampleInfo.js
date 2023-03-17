/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/vec2f64"],(function(t,e){"use strict";let i=function(){function t(){this.offset=e.create(),this.scale=0,this.tile=null}var i=t.prototype;return i.init=function(t,e,i,s){this.tile=t,this.offset[0]=e,this.offset[1]=i,this.scale=s},i.dispose=function(){this.tile=null,this.offset[0]=0,this.offset[1]=0,this.scale=0},t}();t.UpsampleInfo=i,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
