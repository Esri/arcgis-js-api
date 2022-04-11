/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/vec3f64","../../../chunks/vec4f64"],(function(e,t,s){"use strict";let o=function(){function e(e,o,f,i,n,r,u){this.texture=e,this.type=o,e.retain(),this.offsetAndScale=s.fromValues(f.offset[0],f.offset[1],f.scale,f.scale),this.opacities=t.fromValues(i,u?r:0,n)}return e.prototype.destroy=function(){this.texture.release()},e}();e.TextureReference=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
