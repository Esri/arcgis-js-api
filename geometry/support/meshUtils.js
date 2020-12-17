/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["require","exports","./meshUtils/merge","./meshUtils/georeference","../Mesh"],(function(e,n,r,t,i){"use strict";n.createElevationSampler=async function(n,r){return(await new Promise((function(n,r){e(["./meshUtils/elevationSampler"],n,r)}))).create(n,r)},n.createFromElevation=async function(n,r,t){return(await new Promise((function(n,r){e(["./meshUtils/elevation"],n,r)}))).create(n,r,t)},n.georeference=function(e,n,r){return t.georeference(e,n,r)},n.merge=function(e){return new i(r.merge(e))},n.ungeoreference=function(e,n,r){return t.ungeoreference(e,n,r)},Object.defineProperty(n,"__esModule",{value:!0})}));
