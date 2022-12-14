/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../core/urlUtils"],(function(t,e){"use strict";function i(t){return p[n(t)]||g}function n(t){return t instanceof Blob?t.type:o(t.url)}function o(t){const i=e.getPathExtension(t);return l[i]||a}const p={},a="text/plain",g=p[a],l={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const c in l)p[l[c]]=c;t.getResourceContentExtension=i,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
