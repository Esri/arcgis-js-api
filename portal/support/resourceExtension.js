/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../core/urlUtils"],(function(t,n){"use strict";function e(t){return o[i(t)]||g}function i(t){return t instanceof Blob?t.type:p(t.url)}function p(t){const e=n.getPathExtension(t);return c[e]||a}const o={},a="text/plain",g=o[a],c={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const l in c)o[c[l]]=l;t.getResourceContentExtension=e,Object.defineProperty(t,"__esModule",{value:!0})}));
