/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["require","exports","./meshUtils/merge","./meshUtils/georeference","../Mesh"],(function(e,n,r,t,i){"use strict";async function o(n,r,t){return(await new Promise((function(n,r){e(["./meshUtils/elevation"],n,r)}))).create(n,r,t)}async function c(n,r){return(await new Promise((function(n,r){e(["./meshUtils/elevationSampler"],n,r)}))).create(n,r)}function u(e,n,r){return t.georeference(e,n,r)}function a(e,n,r){return t.ungeoreference(e,n,r)}function s(e){return new i(r.merge(e))}n.createElevationSampler=c,n.createFromElevation=o,n.georeference=u,n.merge=s,n.ungeoreference=a,Object.defineProperty(n,"__esModule",{value:!0})}));
