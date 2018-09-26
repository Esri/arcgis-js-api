// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/dom-class","esri/dijit/geoenrichment/OnDemandSelect","esri/dijit/geoenrichment/ReportPlayer/countryConfig"],function(e,t,r,n){function a(e){var t=n.getGeographiesModel();return t?t.getLevelPluralName(e):e}function i(e){return e.attributes.StdGeographyName||""}var o={getListOptionsFromFeatures:function(e,t){var r=o.getFeatureGroups(e,t);return o.getOptionsFromGroups(r,t)},getFeatureGroups:function(e,t){e=e.slice(),t&&t.noThisArea||e.shift();var r={},n=[];return e.forEach(function(e){var t=e.attributes.StdGeographyLevel||"",i=r[t];i||(i={levelId:t,label:a(t),features:[]},r[t]=i,n.push(i)),i.features.push(e)}),n.forEach(function(e){e.features.sort(function(e,t){return i(e).localeCompare(i(t))})}),n},getOptionsFromGroups:function(e,t){function r(e){e.features.forEach(function(t){o.push({isArea:!0,value:n||!t.attributes.StdGeographyID?String(u++):t.attributes.StdGeographyID,label:i(t),attributes:t.attributes,levelId:e.levelId})})}var n=t&&t.isIndexBased,a=t&&t.hideTitleForSingleGroup,o=[],u=0;return 1!==e.length||e[0].levelId?e.forEach(function(t,n){n>0&&o.push({isSeparator:!0}),(e.length>1||!a)&&o.push({isTitle:!0,enabled:!1,value:t.levelId,label:t.label+":"}),r(t)}):r(e[0]),o},getDefaultOptionValue:function(e){var t;return e.some(function(e){if(e.isArea)return t=e,!0}),t&&t.value}},u=e(r.itemRenderers.DefaultItemRenderer,{createPresentation:function(e,r,n,a,i){var o=this.inherited(arguments);return e.isArea&&t.add(o,"esriGEComparisonList_areaItemRoot"),o}});return o.ComparisonListItemRenderer=u,o});