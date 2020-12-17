/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../core/promiseUtils","../../../../geometry/support/webMercatorUtils","../../../../portal/support/geometryServiceUtils"],(function(e,t,r,o){"use strict";e.toViewIfLocal=function(e){const l=e.view.spatialReference,s=e.layer.fullExtent,c=s&&s.spatialReference;return c?c.equals(l)?t.resolve(s.clone()):r.canProject(c,l)?t.resolve(r.project(s,l)):e.view.state.isLocal?o.projectGeometry(s,l,e.layer.portalItem).then((t=>!e.destroyed&&t?t:void 0)).catch((()=>null)):t.resolve(null):t.resolve(null)},Object.defineProperty(e,"__esModule",{value:!0})}));
