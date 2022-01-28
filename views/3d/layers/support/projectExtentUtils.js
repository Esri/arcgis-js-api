/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../../../../geometry/support/webMercatorUtils","../../../../portal/support/geometryServiceUtils"],(function(e,r,o,t){"use strict";function s(e){const s=e.view.spatialReference,l=e.layer.fullExtent,i=r.isSome(l)&&l.spatialReference;if(r.isNone(l)||!i)return Promise.resolve(null);if(i.equals(s))return Promise.resolve(l.clone());const n=o.project(l,s);return r.isSome(n)?Promise.resolve(n):e.view.state.isLocal?t.projectGeometry(l,s,e.layer.portalItem).then((r=>!e.destroyed&&r?r:void 0)).catch((()=>null)):Promise.resolve(null)}e.toViewIfLocal=s,Object.defineProperty(e,"__esModule",{value:!0})}));
