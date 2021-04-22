/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../../core/Error","../../../renderers/support/rasterRendererHelper","../support/utils"],(function(e,r,t,o,n){"use strict";async function s(e){return e=await n.processRasterRendererParameters(e)}async function a(e){e=await s(e);const n=o.createVectorFieldRenderer(e.layer.rasterInfo);if(!r.isSome(n))throw new t("vector-field-renderer:not-supported","Only vector data is supported");return e.flowRepresentation&&(n.flowRepresentation=e.flowRepresentation),e.rotationType&&(n.rotationType=e.rotationType),e.style&&(n.style=e.style),{renderer:n}}e.createRenderer=a,Object.defineProperty(e,"__esModule",{value:!0})}));
