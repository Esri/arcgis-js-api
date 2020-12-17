/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/vec2f64"],(function(t,e){"use strict";let s=function(){function t(){this.offset=e.create(),this.scale=0,this.tile=null}var s=t.prototype;return s.init=function(t,e,s,i){this.tile=t,this.offset[0]=e,this.offset[1]=s,this.scale=i},s.dispose=function(){this.tile=null,this.offset[0]=0,this.offset[1]=0,this.scale=0},t}();t.UpsampleInfo=s,Object.defineProperty(t,"__esModule",{value:!0})}));
