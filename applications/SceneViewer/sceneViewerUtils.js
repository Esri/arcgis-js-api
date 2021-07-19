/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/Logger"],(function(e,t,r){"use strict";function n(e,t){return o.apply(this,arguments)}function o(){return(o=t._asyncToGenerator((function*(e,t,r="awaiting-feature-creation-info"){yield e.startBatchCreateWorkflowAtFeatureCreation(t,r)}))).apply(this,arguments)}function u(e){return e.numberOfFeatureTemplates}function a(e){const t=e.activeWorkflow;return"batch-create"===(null==t?void 0:t.type)?t.numPendingFeatures:0}function i(e){return e.state}function c(e){var t;return null==(t=e.activeWorkflow)?void 0:t.type}function l(e){return r.getLogger(e)}e.batchCreateGetNumPendingFeatures=a,e.getActiveWorkflowState=i,e.getActiveWorkflowType=c,e.getLogger=l,e.numberOfFeatureTemplates=u,e.startBatchCreateWorkflow=n,Object.defineProperty(e,"__esModule",{value:!0})}));
