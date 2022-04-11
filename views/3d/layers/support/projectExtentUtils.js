/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../../../../geometry/support/webMercatorUtils","../../../../portal/support/geometryServiceUtils"],(function(e,o,r,t){"use strict";function l(e){const l=e.view.spatialReference,s=e.layer.fullExtent,i=o.isSome(s)&&s.spatialReference;if(o.isNone(s)||!i)return Promise.resolve(null);if(i.equals(l))return Promise.resolve(s.clone());const n=r.project(s,l);return o.isSome(n)?Promise.resolve(n):e.view.state.isLocal?t.projectGeometry(s,l,e.layer.portalItem).then((o=>!e.destroyed&&o?o:void 0)).catch((()=>null)):Promise.resolve(null)}e.toViewIfLocal=l,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
