/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/urlUtils"],(function(t,n){"use strict";const e={},i="text/plain",p=e[i],o={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const t in o)e[o[t]]=t;t.getResourceContentExtension=function(t){return e[function(t){if(t instanceof Blob)return t.type;return function(t){const e=n.getPathExtension(t);return o[e]||i}(t.url)}(t)]||p},Object.defineProperty(t,"__esModule",{value:!0})}));
