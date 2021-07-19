/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../geometry/support/webMercatorUtils","../../../../portal/support/geometryServiceUtils"],(function(e,t,r){"use strict";function o(e){const o=e.view.spatialReference,l=e.layer.fullExtent,s=l&&l.spatialReference;return s?s.equals(o)?Promise.resolve(l.clone()):t.canProject(s,o)?Promise.resolve(t.project(l,o)):e.view.state.isLocal?r.projectGeometry(l,o,e.layer.portalItem).then((t=>!e.destroyed&&t?t:void 0)).catch((()=>null)):Promise.resolve(null):Promise.resolve(null)}e.toViewIfLocal=o,Object.defineProperty(e,"__esModule",{value:!0})}));
