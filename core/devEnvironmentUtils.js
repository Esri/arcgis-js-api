/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(c){"use strict";function t(c){return c=c||globalThis.location.hostname,l.some((t=>null!=c?.match(t)))}function a(c,t){return c&&(t=t||globalThis.location.hostname)?null!=t.match(o)||null!=t.match(n)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(i)||null!=t.match(s)?c.replace("static.arcgis.com","staticqa.arcgis.com"):c:c}function e(c){c=c||globalThis.location.hostname;return[/^zrh-.+?\.esri\.com$/].concat(l).some((t=>null!=c?.match(t)))}const o=/^devext.arcgis.com$/,i=/^qaext.arcgis.com$/,n=/^[\w-]*\.mapsdevext.arcgis.com$/,s=/^[\w-]*\.mapsqa.arcgis.com$/,l=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,o,i,/^jsapps.esri.com$/,n,s];c.adjustStaticAGOUrl=a,c.isDevEnvironment=t,c.isTelemetryDevEnvironment=e,Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})}));
