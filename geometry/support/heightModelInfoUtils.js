// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../core/Error","../HeightModelInfo"],function(e,t,n,i){function r(e,t){if(!e)return null;if(!l(e))return new n("webscene:unsupported-height-model-info","The vertical coordinate system of the scene is not supported",{heightModelInfo:e});var r=e.heightUnit,h=i.deriveUnitFromSR(e,t).heightUnit;return r!==h?new n("webscene:incompatible-height-unit","The vertical units of the scene ("+r+") must match the horizontal units of the scene ("+h+")",{verticalUnit:r,horizontalUnit:h}):null}function h(e,t,r){var h=u(e),l=t,c=o(h,l,r),s=null;if(h){var d=i.deriveUnitFromSR(h,e.spatialReference).heightUnit;r||d===h.heightUnit||(s=new n("layerview:unmatched-height-unit","The vertical units of the layer must match the horizontal units ("+d+")",{horizontalUnit:d}))}if(!a(e)||4===c||s)return new n("layerview:unsupported-height-model-info","The vertical coordinate system of the layer is not supported",{heightModelInfo:h,error:s});var s=null;switch(c){case 1:var f=h.heightUnit||"unknown",g=l.heightUnit||"unknown";s=new n("layerview:incompatible-height-unit","The vertical units of the layer ("+f+") must match the vertical units of the scene ("+g+")",{layerUnit:f,sceneUnit:g});break;case 2:var v=h.heightModel||"unknown",m=l.heightModel||"unknown";s=new n("layerview:incompatible-height-model","The height model of the layer ("+v+") must match the height model of the scene ("+m+")",{layerHeightModel:v,sceneHeightModel:m});break;case 3:var w=h.vertCRS||"unknown",y=l.vertCRS||"unknown";s=new n("layerview:incompatible-vertical-datum","The vertical datum of the layer ("+w+") must match the vertical datum of the scene ("+y+")",{layerDatum:w,sceneDatum:y})}return s?new n("layerview:incompatible-height-model-info","The vertical coordinate system of the layer is incompatible with the scene",{layerHeightModelInfo:h,sceneHeightModelInfo:l,error:s}):null}function o(e,t,n){if(!l(e)||!l(t))return 4;if(null==e||null==t)return 0;if(!n&&e.heightUnit!==t.heightUnit)return 1;if(e.heightModel!==t.heightModel)return 2;switch(e.heightModel){case"gravity-related-height":return 0;case"ellipsoidal":return e.vertCRS===t.vertCRS?0:3;default:return 4}}function l(e){return null==e||null!=e.heightModel&&null!=e.heightUnit}function a(e){return null!=e.heightModelInfo||null!=e.spatialReference||!c(e)}function u(e){return e.heightModelInfo?e.heightModelInfo:c(e)?i.deriveUnitFromSR(f,e.spatialReference):null}function c(e){return"hasZ"in e?e.hasZ===!0:d(e)}function s(e){return null!=e.layers||d(e)||void 0!==e.hasZ||void 0!==e.heightModelInfo}function d(e){switch(e.type){case"elevation":case"integrated-mesh":case"point-cloud":case"scene":return!0;default:return!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.validateWebSceneError=r,t.rejectLayerError=h,t.deriveHeightModelInfoFromLayer=u,t.mayHaveHeightModelInfo=s;var f=new i({heightModel:"gravity-related-height"})});