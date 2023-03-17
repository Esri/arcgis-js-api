/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../../../../geometry/support/webMercatorUtils","../../../../portal/support/geometryServiceUtils"],(function(e,r,t,o){"use strict";function l(e){const l=e.view.spatialReference,s=e.layer.fullExtent,i=r.isSome(s)&&s.spatialReference;if(r.isNone(s)||!i)return Promise.resolve(null);if(i.equals(l))return Promise.resolve(s.clone());const n=t.project(s,l);return r.isSome(n)?Promise.resolve(n):e.view.state.isLocal?o.projectGeometry(s,l,e.layer.portalItem).then((r=>!e.destroyed&&r?r:null)).catch((()=>null)):Promise.resolve(null)}e.toViewIfLocal=l,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
