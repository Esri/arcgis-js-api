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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/dom-class","esri/dijit/geoenrichment/OnDemandSelect","../templateJsonUtils/countryConfig"],function(e,t,r,a){var n={getListOptions:function(e){function t(e){var t=a.getGeographiesModel();return t?t.getLevelPluralName(e):e}function r(e){return e.attributes.name||e.attributes.StdGeographyName||""}function n(e){e.features.forEach(function(e){i.push({isArea:!0,value:String(l++),AREA_ID:e.attributes.AREA_ID,label:r(e)})})}e=e.slice(),e.shift();var i=[],u={},o=[];e.forEach(function(e){var r=e.attributes.StdGeographyLevel||"default",a=u[r];a||(a={levelId:r,label:t(r)+":",features:[]},u[r]=a,o.push(a)),a.features.push(e)}),o.forEach(function(e,t){e.features.sort(function(e,t){return r(e).localeCompare(r(t))})});var l=0;return 1===o.length&&"default"===o[0].levelId?n(o[0]):o.forEach(function(e,t){t>0&&i.push({isSeparator:!0}),i.push({isTitle:!0,enabled:!1,value:e.levelId,label:e.label}),n(e)}),i},getDefaultOptionValue:function(e){var t;return e.some(function(e){return e.isArea?(t=e,!0):void 0}),t&&t.value},listValueToAreaID:function(e){return Number(e)+1}},i=e(r.itemRenderers.DefaultItemRenderer,{createPresentation:function(e,r,a,n,i){var u=this.inherited(arguments);return e.isArea&&t.add(u,"esriGEComparisonList_areaItemRoot"),u}}),u={};return u.getListOptions=n.getListOptions,u.getDefaultOptionValue=n.getDefaultOptionValue,u.listValueToAreaID=n.listValueToAreaID,u.ComparisonListItemRenderer=i,u});