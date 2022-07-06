/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import o from"./Graphics3DPointSymbol.js";import r from"./Graphics3DSymbol.js";function t(t,i,e){let p;if("point-3d"===t.type)p=o;else p=r;return new p(t,i,e)}export{t as make};
