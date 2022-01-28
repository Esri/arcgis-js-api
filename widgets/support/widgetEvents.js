/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";const o=["blur","change","click","dblclick","focus","input","keydown","keypress","keyup","load","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","mousewheel","scroll","submit","touchcancel","touchend","touchmove","touchstart"];function u(e){const u={};return o.forEach((o=>{u[`on${o}`]=function(u){e.emit.call(e,o,u)}})),u}function t(e){return!!o[e]}e.domEvents=u,e.isVNodeEvent=t,Object.defineProperty(e,"__esModule",{value:!0})}));
