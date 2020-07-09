// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../core/Error","../../core/object","./FeatureReduction","./FeatureReductionCluster","./FeatureReductionSelection"],(function(e,t,r,n,u,o,c){function i(e,t,n){return e?"selection"!==e.type?(n.messages&&n.messages.push(new r("featureReduction:unsupported","FeatureReduction of type '"+e.declaredClass+"' are not supported in scenes.",{featureReduction:e,context:n})),null):e.write(t,n):null}Object.defineProperty(t,"__esModule",{value:!0}),t.webSceneFeatureReductionTypes={key:"type",base:u.default,typeMap:{selection:c}},t.read=function(e,t){var r=(t=t.layerDefinition||t).featureReduction;if(r)switch(r.type){case"selection":return c.fromJSON(r);case"cluster":return o.fromJSON(r)}return null},t.writeTarget=function(e,t,r,u){var o=i(e,{},u);o&&n.setDeepValue(r,o,t)},t.write=i}));