// COPYRIGHT © 2018 Esri
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

define(["require","exports","../../core/Error","../HeightModelInfo","../../layers/support/arcgisLayerUrl"],function(e,t,n,i,r){function a(e,t){if(!e)return null;if(!h(e))return new n("webscene:unsupported-height-model-info","The vertical coordinate system of the scene is not supported",{heightModelInfo:e});var r=e.heightUnit,a=i.deriveUnitFromSR(e,t).heightUnit;return r!==a?new n("webscene:incompatible-height-unit","The vertical units of the scene ("+r+") must match the horizontal units of the scene ("+a+")",{verticalUnit:r,horizontalUnit:a}):null}function o(e,t,r){var a=c(e),o=t,h=l(a,o,r),u=null;if(a){var d=i.deriveUnitFromSR(a,e.spatialReference).heightUnit;r||d===a.heightUnit||(u=new n("layerview:unmatched-height-unit","The vertical units of the layer must match the horizontal units ("+d+")",{horizontalUnit:d}))}if(!s(e)||4===h||u)return new n("layerview:unsupported-height-model-info","The vertical coordinate system of the layer is not supported",{heightModelInfo:a,error:u});var u=null;switch(h){case 1:var f=a.heightUnit||"unknown",g=o.heightUnit||"unknown";u=new n("layerview:incompatible-height-unit","The vertical units of the layer ("+f+") must match the vertical units of the scene ("+g+")",{layerUnit:f,sceneUnit:g});break;case 2:var m=a.heightModel||"unknown",v=o.heightModel||"unknown";u=new n("layerview:incompatible-height-model","The height model of the layer ("+m+") must match the height model of the scene ("+v+")",{layerHeightModel:m,sceneHeightModel:v});break;case 3:var p=a.vertCRS||"unknown",y=o.vertCRS||"unknown";u=new n("layerview:incompatible-vertical-datum","The vertical datum of the layer ("+p+") must match the vertical datum of the scene ("+y+")",{layerDatum:p,sceneDatum:y})}return u?new n("layerview:incompatible-height-model-info","The vertical coordinate system of the layer is incompatible with the scene",{layerHeightModelInfo:a,sceneHeightModelInfo:o,error:u}):null}function l(e,t,n){if(!h(e)||!h(t))return 4;if(null==e||null==t)return 0;if(!n&&e.heightUnit!==t.heightUnit)return 1;if(e.heightModel!==t.heightModel)return 2;switch(e.heightModel){case"gravity-related-height":return 0;case"ellipsoidal":return e.vertCRS===t.vertCRS?0:3;default:return 4}}function h(e){return null==e||null!=e.heightModel&&null!=e.heightUnit}function s(e){return null!=e.heightModelInfo||null!=e.spatialReference||!u(e)}function c(e){var t=e.url&&r.parse(e.url);return null==(e.spatialReference&&e.spatialReference.vcsWkid)&&t&&"ImageServer"===t.serverType||!e.heightModelInfo?u(e)?i.deriveUnitFromSR(g,e.spatialReference):null:e.heightModelInfo}function u(e){return"hasZ"in e?!0===e.hasZ:f(e)}function d(e){return null!=e.layers||f(e)||void 0!==e.hasZ||void 0!==e.heightModelInfo}function f(e){switch(e.type){case"elevation":case"integrated-mesh":case"point-cloud":case"scene":return!0;case"base-dynamic":case"base-elevation":case"base-tile":case"csv":case"feature":case"geo-rss":case"graphics":case"group":case"imagery":case"kml":case"map-image":case"map-notes":case"open-street-map":case"stream":case"tile":case"unknown":case"unsupported":case"vector-tile":case"web-tile":case"wms":case"wmts":return!1;default:e.type}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.validateWebSceneError=a,t.rejectLayerError=o,t.deriveHeightModelInfoFromLayer=c,t.mayHaveHeightModelInfo=d;var g=new i({heightModel:"gravity-related-height"})});