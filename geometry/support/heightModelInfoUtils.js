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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/Error","../../layers/support/arcgisLayerUrl","../HeightModelInfo"],function(e,t,n,i,r){function h(e,t){if(!e)return null;if(!a(e))return new n("webscene:unsupported-height-model-info","The vertical coordinate system of the scene is not supported",{heightModelInfo:e});var i=e.heightUnit,h=r.deriveUnitFromSR(e,t).heightUnit;return i!==h?new n("webscene:incompatible-height-unit","The vertical units of the scene ("+i+") must match the horizontal units of the scene ("+h+")",{verticalUnit:i,horizontalUnit:h}):null}function l(e,t,i){var h=c(e),l=t,a=o(h,l,i),s=null;if(h){var d=r.deriveUnitFromSR(h,e.spatialReference).heightUnit;i||d===h.heightUnit||(s=new n("layerview:unmatched-height-unit","The vertical units of the layer must match the horizontal units ("+d+")",{horizontalUnit:d}))}if(!u(e)||4===a||s)return new n("layerview:unsupported-height-model-info","The vertical coordinate system of the layer is not supported",{heightModelInfo:h,error:s});var s=null;switch(a){case 1:var f=h.heightUnit||"unknown",g=l.heightUnit||"unknown";s=new n("layerview:incompatible-height-unit","The vertical units of the layer ("+f+") must match the vertical units of the scene ("+g+")",{layerUnit:f,sceneUnit:g});break;case 2:var v=h.heightModel||"unknown",m=l.heightModel||"unknown";s=new n("layerview:incompatible-height-model","The height model of the layer ("+v+") must match the height model of the scene ("+m+")",{layerHeightModel:v,sceneHeightModel:m});break;case 3:var y=h.vertCRS||"unknown",p=l.vertCRS||"unknown";s=new n("layerview:incompatible-vertical-datum","The vertical datum of the layer ("+y+") must match the vertical datum of the scene ("+p+")",{layerDatum:y,sceneDatum:p})}return s?new n("layerview:incompatible-height-model-info","The vertical coordinate system of the layer is incompatible with the scene",{layerHeightModelInfo:h,sceneHeightModelInfo:l,error:s}):null}function o(e,t,n){if(!a(e)||!a(t))return 4;if(null==e||null==t)return 0;if(!n&&e.heightUnit!==t.heightUnit)return 1;if(e.heightModel!==t.heightModel)return 2;switch(e.heightModel){case"gravity-related-height":return 0;case"ellipsoidal":return e.vertCRS===t.vertCRS?0:3;default:return 4}}function a(e){return null==e||null!=e.heightModel&&null!=e.heightUnit}function u(e){return null!=e.heightModelInfo||null!=e.spatialReference||!s(e)}function c(e){var t=e.url&&i.parse(e.url),n=e.spatialReference&&e.spatialReference.vcsWkid,h=null==n&&t&&"ImageServer"===t.serverType;return!h&&e.heightModelInfo?e.heightModelInfo:s(e)?r.deriveUnitFromSR(g,e.spatialReference):null}function s(e){return"hasZ"in e?e.hasZ===!0:f(e)}function d(e){return null!=e.layers||f(e)||void 0!==e.hasZ||void 0!==e.heightModelInfo}function f(e){switch(e.type){case"elevation":case"integrated-mesh":case"point-cloud":case"scene":return!0;default:return!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.validateWebSceneError=h,t.rejectLayerError=l,t.deriveHeightModelInfoFromLayer=c,t.mayHaveHeightModelInfo=d;var g=new r({heightModel:"gravity-related-height"})});