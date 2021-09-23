/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/vec3f64","../../../chunks/vec4f64"],(function(e,t,s){"use strict";let f=function(){function e(e,f,n,o,r,c,i){this.texture=e,this.type=f,e.retain(),this.offsetAndScale=s.fromValues(n.offset[0],n.offset[1],n.scale,n.scale),this.opacities=t.fromValues(o,i?c:0,r)}return e.prototype.destroy=function(){this.texture.release()},e}();e.TextureReference=f,Object.defineProperty(e,"__esModule",{value:!0})}));
