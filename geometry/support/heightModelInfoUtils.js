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

define(["require","exports","../../core/compilerUtils","../../core/Error","../HeightModelInfo","../../layers/support/arcgisLayerUrl"],(function(e,t,n,i,r,a){function l(e){return null==e||null!=e.heightModel&&null!=e.heightUnit}function o(e){var t=e.url&&a.parse(e.url);return!(null==(e.spatialReference&&e.spatialReference.vcsWkid)&&t&&"ImageServer"===t.serverType)&&c(e)&&e.heightModelInfo?e.heightModelInfo:h(e)?r.deriveUnitFromSR(d,e.spatialReference):null}function c(e){return"heightModelInfo"in e}function s(e){if("unknown"===e.type||!("capabilities"in e))return!1;switch(e.type){case"csv":case"feature":case"geojson":case"ogc-feature":return!0;case"imagery":case"map-image":case"tile":case"vector-tile":case null:return!1;default:return n.neverReached(e),!1}}function h(e){return s(e)?!!(e.capabilities&&e.capabilities.data&&e.capabilities.data.supportsZ):u(e)}function u(e){switch(e.type){case"building-scene":case"elevation":case"integrated-mesh":case"point-cloud":case"scene":return!0;case"base-dynamic":case"base-elevation":case"base-tile":case"bing-maps":case"csv":case"geojson":case"feature":case"geo-rss":case"graphics":case"group":case"imagery":case"imagery-tile":case"kml":case"map-image":case"map-notes":case"ogc-feature":case"open-street-map":case"route":case"stream":case"tile":case"unknown":case"unsupported":case"vector-tile":case"web-tile":case"wms":case"wmts":case null:return!1;default:n.neverReached(e)}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.validateWebSceneError=function(e,t){if(!e)return null;if(!l(e))return new i("webscene:unsupported-height-model-info","The vertical coordinate system of the scene is not supported",{heightModelInfo:e});var n=e.heightUnit,a=r.deriveUnitFromSR(e,t).heightUnit;return n!==a?new i("webscene:incompatible-height-unit","The vertical units of the scene ("+n+") must match the horizontal units of the scene ("+a+")",{verticalUnit:n,horizontalUnit:a}):null},t.rejectLayerError=function(e,t,n){var a=o(e),c=t,s=function(e,t,n){if(!l(e)||!l(t))return 4;if(null==e||null==t)return 0;if(!n&&e.heightUnit!==t.heightUnit)return 1;if(e.heightModel!==t.heightModel)return 2;switch(e.heightModel){case"gravity-related-height":return 0;case"ellipsoidal":return e.vertCRS===t.vertCRS?0:3;default:return 4}}(a,c,n),u=null;if(a){var d=r.deriveUnitFromSR(a,e.spatialReference).heightUnit;n||d===a.heightUnit||(u=new i("layerview:unmatched-height-unit","The vertical units of the layer must match the horizontal units ("+d+")",{horizontalUnit:d}))}if(!function(e){return"heightModelInfo"in e&&null!=e.heightModelInfo||null!=e.spatialReference||!h(e)}(e)||4===s||u)return new i("layerview:unsupported-height-model-info","The vertical coordinate system of the layer is not supported",{heightModelInfo:a,error:u});switch(u=null,s){case 1:var f=a.heightUnit||"unknown",g=c.heightUnit||"unknown";u=new i("layerview:incompatible-height-unit","The vertical units of the layer ("+f+") must match the vertical units of the scene ("+g+")",{layerUnit:f,sceneUnit:g});break;case 2:var m=a.heightModel||"unknown",v=c.heightModel||"unknown";u=new i("layerview:incompatible-height-model","The height model of the layer ("+m+") must match the height model of the scene ("+v+")",{layerHeightModel:m,sceneHeightModel:v});break;case 3:var p=a.vertCRS||"unknown",y=c.vertCRS||"unknown";u=new i("layerview:incompatible-vertical-datum","The vertical datum of the layer ("+p+") must match the vertical datum of the scene ("+y+")",{layerDatum:p,sceneDatum:y})}return u?new i("layerview:incompatible-height-model-info","The vertical coordinate system of the layer is incompatible with the scene",{layerHeightModelInfo:a,sceneHeightModelInfo:c,error:u}):null},t.deriveHeightModelInfoFromLayer=o,t.mayHaveHeightModelInfo=function(e){return null!=e.layers||u(e)||s(e)||c(e)};var d=new r({heightModel:"gravity-related-height"})}));