/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as e,none as t}from"../../../../../core/maybe.js";function r(t){return e(t.geometry)&&"mesh"===t.geometry.type?o(t.geometry):n(t)}function o(t){return e(t.transform)?m(t,t.transform):i(t)}function n(e){let r=e.geometry,o=t;return{undo(e){o=e.geometry,e.geometry=r},redo(e){r=e.geometry,e.geometry=o}}}function m(t,r){let o=r.clone(),n=null;return{undo:r=>{n=e(t.transform)?t.transform.clone():null,t.transform=o,r.notifyGeometryChanged()},redo:r=>{o=e(t.transform)?t.transform.clone():null,t.transform=n,r.notifyGeometryChanged()}}}function i(e){let t,r=e.vertexAttributes.clonePositional();return{undo:o=>{t=e.vertexAttributes.clonePositional(),e.vertexAttributes=r,o.notifyGeometryChanged()},redo:o=>{r=e.vertexAttributes.clonePositional(),e.vertexAttributes=t,o.notifyGeometryChanged()}}}export{r as createGraphicGeometryUndoRecord};
