/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./heading-rotate-png","./tilt-rotate-png","../../../webgl-engine/lib/Texture"],(function(e,t,n,r){"use strict";const i={mipmap:!0,preMultiplyAlpha:!0,width:64,height:64};function o(e){return e.fromData(t,(()=>new r.Texture(t,i)))}function a(e){return e.fromData(n,(()=>new r.Texture(n,i)))}e.getRotateHeadingTexture=o,e.getTiltRotateTexture=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
