/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/maybe","../support/WorkerHandle"],(function(t,e,r,u){"use strict";let o=function(t){function u(e){return t.call(this,"PointCloudWorker","transform",e)||this}return e._inheritsLoose(u,t),u.prototype.getTransferList=function(t){const e=[t.geometryBuffer];if(r.isSome(t.primaryAttributeData)&&t.primaryAttributeData.buffer&&e.push(t.primaryAttributeData.buffer),r.isSome(t.modulationAttributeData)&&t.modulationAttributeData.buffer&&e.push(t.modulationAttributeData.buffer),r.isSome(t.filterAttributesData))for(const u of t.filterAttributesData)r.isSome(u)&&u.buffer&&e.push(u.buffer);for(const r of t.userAttributesData)r.buffer&&e.push(r.buffer);return e},u}(u.WorkerHandle);t.PointCloudWorkerHandle=o,Object.defineProperty(t,"__esModule",{value:!0})}));
