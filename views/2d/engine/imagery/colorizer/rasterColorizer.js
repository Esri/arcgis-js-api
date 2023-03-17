/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./lut","./shadedrelief","./stretch"],(function(e,t,r,s){"use strict";const n=new Map;function o(e){return n.get(e)}n.set("lut",t),n.set("hillshade",r),n.set("stretch",s),e.getColorizer=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
