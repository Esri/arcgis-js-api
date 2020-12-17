/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/object","../../core/Error","./FeatureReduction","./FeatureReductionCluster","./FeatureReductionSelection"],(function(e,t,n,r,u,o){"use strict";const c={key:"type",base:r.default,typeMap:{selection:o}};function s(e,t,r){return e?"selection"!==e.type?(r.messages&&r.messages.push(new n("featureReduction:unsupported",`FeatureReduction of type '${e.declaredClass}' are not supported in scenes.`,{featureReduction:e,context:r})),null):e.write(t,r):null}e.read=function(e,t){const n=(t=t.layerDefinition||t).featureReduction;if(n)switch(n.type){case"selection":return o.fromJSON(n);case"cluster":return u.fromJSON(n)}return null},e.webSceneFeatureReductionTypes=c,e.write=s,e.writeTarget=function(e,n,r,u){const o=s(e,{},u);o&&t.setDeepValue(r,o,n)},Object.defineProperty(e,"__esModule",{value:!0})}));
