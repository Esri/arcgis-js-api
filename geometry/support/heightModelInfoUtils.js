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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/compilerUtils","../../core/Error","../HeightModelInfo","../../layers/support/arcgisLayerUrl"],function(e,t,n,i,r,a){function l(e,t){if(!e)return null;if(!c(e))return new i("webscene:unsupported-height-model-info","The vertical coordinate system of the scene is not supported",{heightModelInfo:e});var n=e.heightUnit,a=r.deriveUnitFromSR(e,t).heightUnit;return n!==a?new i("webscene:incompatible-height-unit","The vertical units of the scene ("+n+") must match the horizontal units of the scene ("+a+")",{verticalUnit:n,horizontalUnit:a}):null}function o(e,t,n){var a=u(e),l=t,o=s(a,l,n),c=null;if(a){var d=r.deriveUnitFromSR(a,e.spatialReference).heightUnit;n||d===a.heightUnit||(c=new i("layerview:unmatched-height-unit","The vertical units of the layer must match the horizontal units ("+d+")",{horizontalUnit:d}))}if(!h(e)||4===o||c)return new i("layerview:unsupported-height-model-info","The vertical coordinate system of the layer is not supported",{heightModelInfo:a,error:c});var c=null;switch(o){case 1:var f=a.heightUnit||"unknown",g=l.heightUnit||"unknown";c=new i("layerview:incompatible-height-unit","The vertical units of the layer ("+f+") must match the vertical units of the scene ("+g+")",{layerUnit:f,sceneUnit:g});break;case 2:var m=a.heightModel||"unknown",v=l.heightModel||"unknown";c=new i("layerview:incompatible-height-model","The height model of the layer ("+m+") must match the height model of the scene ("+v+")",{layerHeightModel:m,sceneHeightModel:v});break;case 3:var p=a.vertCRS||"unknown",y=l.vertCRS||"unknown";c=new i("layerview:incompatible-vertical-datum","The vertical datum of the layer ("+p+") must match the vertical datum of the scene ("+y+")",{layerDatum:p,sceneDatum:y})}return c?new i("layerview:incompatible-height-model-info","The vertical coordinate system of the layer is incompatible with the scene",{layerHeightModelInfo:a,sceneHeightModelInfo:l,error:c}):null}function s(e,t,n){if(!c(e)||!c(t))return 4;if(null==e||null==t)return 0;if(!n&&e.heightUnit!==t.heightUnit)return 1;if(e.heightModel!==t.heightModel)return 2;switch(e.heightModel){case"gravity-related-height":return 0;case"ellipsoidal":return e.vertCRS===t.vertCRS?0:3;default:return 4}}function c(e){return null==e||null!=e.heightModel&&null!=e.heightUnit}function h(e){return"heightModelInfo"in e&&null!=e.heightModelInfo||null!=e.spatialReference||!g(e)}function u(e){var t=e.url&&a.parse(e.url);return null==(e.spatialReference&&e.spatialReference.vcsWkid)&&t&&"ImageServer"===t.serverType||!d(e)||!e.heightModelInfo?g(e)?r.deriveUnitFromSR(p,e.spatialReference):null:e.heightModelInfo}function d(e){return"heightModelInfo"in e}function f(e){if(!("capabilities"in e))return!1;switch(e.type){case"feature":case"csv":case"stream":case"geojson":return!0;case"map-image":case"imagery":case"tile":case"vector-tile":case null:return!1;default:return n.neverReached(e),!1}}function g(e){return f(e)?!!(e.capabilities&&e.capabilities.data&&e.capabilities.data.supportsZ):v(e)}function m(e){return null!=e.layers||v(e)||f(e)||d(e)}function v(e){switch(e.type){case"building-scene":case"elevation":case"integrated-mesh":case"point-cloud":case"scene":return!0;case"base-dynamic":case"base-elevation":case"base-tile":case"bing-maps":case"csv":case"geojson":case"feature":case"geo-rss":case"graphics":case"group":case"imagery":case"kml":case"map-image":case"map-notes":case"open-street-map":case"stream":case"tile":case"unknown":case"unsupported":case"vector-tile":case"web-tile":case"wms":case"wmts":case null:return!1;default:n.neverReached(e)}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.validateWebSceneError=l,t.rejectLayerError=o,t.deriveHeightModelInfoFromLayer=u,t.mayHaveHeightModelInfo=m;var p=new r({heightModel:"gravity-related-height"})});