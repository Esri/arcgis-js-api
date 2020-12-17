/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/jsonMap"],(function(e,n){"use strict";const t=new n.JSONMap({preserveShape:"preserve-shape"});e.lengthsToRESTParameters=function(e){const{polylines:n,lengthUnit:s,geodesic:i,calculationType:o}=e.toJSON(),r={};r.polylines=JSON.stringify(n);const l=e.polylines[0].spatialReference;return r.sr=l.wkid?l.wkid:JSON.stringify(l.toJSON()),s&&(r.lengthUnit=s),i&&(r.geodesic=i),o&&(r.calculationType=t.toJSON(o)),r},Object.defineProperty(e,"__esModule",{value:!0})}));
