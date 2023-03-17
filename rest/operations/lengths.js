/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../core/jsonMap"],(function(e,t){"use strict";const n=new t.JSONMap({preserveShape:"preserve-shape"});function o(e){const{polylines:t,lengthUnit:o,geodesic:i,calculationType:s}=e.toJSON(),r={};r.polylines=JSON.stringify(t);const l=e.polylines[0].spatialReference;return r.sr=l.wkid?l.wkid:JSON.stringify(l.toJSON()),o&&(r.lengthUnit=o),i&&(r.geodesic=i),s&&(r.calculationType=n.toJSON(s)),r}e.lengthsToRESTParameters=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
