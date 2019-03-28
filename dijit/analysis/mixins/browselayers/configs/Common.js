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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/has","../../../../../kernel","dojo/i18n!../../../nls/BrowseLayerMixin","../../../ItemTypes"],function(t,e,s,r,a){var i={getLAALCustomSection:function(t){var e=this._isCustomAnalysisQuery(t.portal,t.isPortal),s=[{name:r.customeSectionName,baseQuery:this._getLAALBaseQuery(t.customQueryTags,t.portal,t.isPortal),filters:[{fetchGroupIdByQuery:this._getDefaultQueryString(t.isPortal),name:r.Categories,type:"group",path:["categories"],staticSchema:this._getStaticLAALSchema(t.portal,t.isPortal)}].concat(this._getFilters(t.isPortal)),disableSubResources:!0}];return e&&s.push({name:r.customAnalysisGroupName,baseQuery:"",filters:[{id:this._getAnalysisGroupQuery(t.portal,t.isPortal).split(":")[1],name:r.Categories,type:"group",path:["categories"],staticSchema:void 0}].concat(this._getFilters(t.isPortal)),disableSubResources:!1}),s},getAddtoMapActions:function(t){return{allowed:function(t){return t.type!==a.RFT&&t.type!==a.XLS&&t.type!==a.CSV},asynchronous:!1,onAction:t,name:r.customActionName}},getEditRFTActions:function(t){return{allowed:function(t){return t.type===a.RFT},asynchronous:!1,onAction:t,name:r.edit}},getSystemRFTSection:function(t){return{name:"System",baseQuery:'(group:"'+(t.rftGroupId&&t.rftGroupId.id)+'") -type:"Attachment" -tags:"mature support"',filters:[].concat(this._getFilters(t.isPortal)),addToFront:!1}},getStaticFilters:function(t){var e=t.tags;if(e&&0!==e.length){var s=[];return e.forEach(function(t){s.push(r[t]?r[t]:t)}),s}},getBoundaryLayersSection:function(t){return{name:r.boundaryLayers,baseQuery:"("+t.portal.EsriBoundaryLayersGroupQuery.split("AND")[1].trim()+')-type:"Attachment" -tags:"mature support"',filters:this._getFilters(t.isPortal),addToFront:!1,disableSubResources:!1}},getNumberOfPages:function(){return 16},_getLAALBaseQuery:function(t,e,s){var r=['typekeywords:"Analysis Ready"'];return(e||e.user||!e.user.demographics)&&r.push('-typekeywords:"Requires Credits"'),r.push('-type:"Attachment" -tags:"mature support"'),r.push(this._queryTagsForLivingAtlasItemBrowser(t)),r.join(" ")},_queryTagsForLivingAtlasItemBrowser:function(t){var e=t.tags,s=[];return e&&0!==e.length?1===e.length?"tags: ("+e[0]+")":(e.forEach(function(t){s.push(t)}),"tags: ("+s.join(" OR ")+")"):""},_getAnalysisGroupQuery:function(t,e){return this._isCustomAnalysisQuery(t,e)},_getDefaultQueryString:function(t){var e='title:"Living Atlas Analysis Layers" AND owner:esri';return t&&(e='title:"Living Atlas Analysis Layers" AND owner:"esri_livingatlas"'),e},_isCustomAnalysisQuery:function(t,e){return!(!t||!t.analysisLayersGroupQuery||t.analysisLayersGroupQuery===this._getDefaultQueryString(e))&&t.analysisLayersGroupQuery},_getStaticLAALSchema:function(t,e){return[{title:"categories",categories:[{title:"boundaries and places",categories:[{title:"boundaries",categories:[],displayName:r.boundaries},{title:"places",categories:[],displayName:r.places}],displayName:r.boundariesAndPlaces},{title:"hexbins",categories:[],displayName:r.hexbins},{title:"transportation",categories:[],displayName:r.transportation}]}]},_getFilters:function(t){return["tags"]}};return e("extend-esri")&&t.setObject("dijit.analysis.mixins.browselayers.configs.Common",i,s),i});