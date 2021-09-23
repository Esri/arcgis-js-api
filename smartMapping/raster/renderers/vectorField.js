/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/Error","../../../core/maybe","../../../renderers/support/rasterRendererHelper","../support/utils"],(function(e,r,t,n,o,s){"use strict";function i(e){return p.apply(this,arguments)}function p(){return(p=r._asyncToGenerator((function*(e){return e=yield s.processRasterRendererParameters(e)}))).apply(this,arguments)}function a(e){return l.apply(this,arguments)}function l(){return(l=r._asyncToGenerator((function*(e){e=yield i(e);const r=o.createVectorFieldRenderer(e.layer.rasterInfo);if(!n.isSome(r))throw new t("vector-field-renderer:not-supported","Only vector data is supported");return e.flowRepresentation&&(r.flowRepresentation=e.flowRepresentation),e.rotationType&&(r.rotationType=e.rotationType),e.style&&(r.style=e.style),{renderer:r}}))).apply(this,arguments)}e.createRenderer=a,Object.defineProperty(e,"__esModule",{value:!0})}));
