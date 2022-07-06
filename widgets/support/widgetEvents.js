/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const e=["blur","change","click","dblclick","focus","input","keydown","keypress","keyup","load","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","mousewheel","scroll","submit","touchcancel","touchend","touchmove","touchstart"];function o(o){const u={};return e.forEach((e=>{u[`on${e}`]=u=>{o.emit.call(o,e,u)}})),u}function u(o){return!!e[o]}export{o as domEvents,u as isVNodeEvent};
