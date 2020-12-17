/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";const o=["blur","change","click","dblclick","focus","input","keydown","keypress","keyup","load","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","mousewheel","scroll","submit","touchcancel","touchend","touchmove","touchstart"];e.domEvents=function(e){const u={};return o.forEach((o=>{u[`on${o}`]=function(u){e.emit.call(e,o,u)}})),u},e.isVNodeEvent=function(e){return!!o[e]},Object.defineProperty(e,"__esModule",{value:!0})}));
