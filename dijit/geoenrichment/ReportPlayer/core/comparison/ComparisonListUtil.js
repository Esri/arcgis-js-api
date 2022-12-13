// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/dom-class","esri/dijit/geoenrichment/lists/FlowListDefaultItemRenderer","esri/dijit/geoenrichment/ReportPlayer/countryConfig"],(function(e,t,r,n){function a(e){var t=n.getGeographiesModel();return t?t.getLevelPluralName(e):e}function i(e){return e.attributes.StdGeographyName||""}var u={getListOptionsFromFeatures:function(e,t){var r=u.getFeatureGroups(e,t);return u.getOptionsFromGroups(r,t)},getFeatureGroups:function(e,t){var r={},n=[];return e.forEach((function(e){if(!e.attributes.isThisArea){var t=e.attributes.StdGeographyLevel||"",i=r[t];i||(i={levelId:t,label:a(t),features:[]},r[t]=i,n.push(i)),i.features.push(e)}})),n.forEach((function(e){e.features.sort((function(e,t){return i(e).localeCompare(i(t))}))})),n},getOptionsFromGroups:function(e,t){var r=t&&t.isIndexBased,n=t&&t.hideTitleForSingleGroup,a=[],u=0;function o(e){e.features.forEach((function(t){a.push({isArea:!0,value:r||!t.attributes.StdGeographyID?String(u++):t.attributes.StdGeographyLevel+"."+t.attributes.StdGeographyID,label:i(t),attributes:t.attributes,featureId:t.attributes.StdGeographyID,levelId:e.levelId})}))}return 1!==e.length||e[0].levelId?e.forEach((function(t,r){r>0&&a.push({isSeparator:!0}),(e.length>1||!n)&&a.push({isTitle:!0,enabled:!1,value:t.levelId,label:t.label+":"}),o(t)})):o(e[0]),a},getDefaultOptionValue:function(e,t){var r;if(t){var a=n.getGeographiesModel();r=a.getLevel(t)}function i(t){var n;return e.some((function(e){if(e.isArea&&(!t||!r||e.levelId===r.id))return n=e,!0})),n}var u=i(!0)||i(!1);return u&&u.value},getFeatureIndexInOptionsById:function(e,t,r){var n=t+"."+r,a=-1,i=0;return e.some((function(e){if(e.isArea){if(e.value===n)return a=i,!0;i++}})),a},getOptionValueByFeatureIndex:function(e,t){var r,n=0;return e.some((function(e){if(e.isArea){if(n===t)return r=e,!0;n++}})),r&&r.value},getNumFeaturesFromOptions:function(e){var t=0;return e.forEach((function(e){e.isArea&&t++})),t}},o=e(r,{createPresentation:function(e,r,n,a,i){var u=this.inherited(arguments);return e.isArea&&t.add(u,"esriGEComparisonList_areaItemRoot"),u}});return u.ComparisonListItemRenderer=o,u}));