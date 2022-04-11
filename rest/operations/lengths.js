/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../core/jsonMap"],(function(e,t){"use strict";const n=new t.JSONMap({preserveShape:"preserve-shape"});function o(e){const{polylines:t,lengthUnit:o,geodesic:i,calculationType:s}=e.toJSON(),l={};l.polylines=JSON.stringify(t);const r=e.polylines[0].spatialReference;return l.sr=r.wkid?r.wkid:JSON.stringify(r.toJSON()),o&&(l.lengthUnit=o),i&&(l.geodesic=i),s&&(l.calculationType=n.toJSON(s)),l}e.lengthsToRESTParameters=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
