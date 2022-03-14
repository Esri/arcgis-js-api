// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","dojo/dom-geometry","./StaticMap","../../../dataProvider/supportClasses/data/AreaDataUtil","esri/dijit/geoenrichment/utils/DataUtil","esri/dijit/geoenrichment/utils/ImageUtil"],(function(e,t,a,n,r,o,i,s,l,u){var c=e(null,{_mapInfos:null,_mapDivId:0,_mapImageInfos:null,constructor:function(e){t.mixin(this,e),this.reset()},reset:function(){this._mapInfos={},this._mapImageInfos=null},collectAreaMaps:function(e){var t=[];e=e||0;var a=this._mapInfos[e];for(var n in a){var r=a[n],i=r.node;if(i.parentNode){var s=o.position(i);t.push({areaIndex:e,node:i,x:s.x,y:s.y,position:-1,map:r.map,legend:r.legend,itemId:r.itemId})}}return t.sort((function(e,t){return e.x-t.x})),t.sort((function(e,t){return e.y-t.y})),t.forEach((function(e,t){e.position=t})),t},collectAllAreasMaps:function(){var e=[];for(var t in this._mapInfos)e=e.concat(this.collectAreaMaps(t));return e},setFallbackMapImageInfos:function(e){e?(this._mapImageInfos={},e.forEach((function(e){var t=e.areaIndex||0;(this._mapImageInfos[t]=this._mapImageInfos[t]||{})[e.itemId]=e}),this)):this._mapImageInfos=null},createMap:function(e,t){return t.areaIndex=t.areaIndex||0,r(this._doCreateMap(e,t))},_doCreateMap:function(e,t){if(t.calculatorFieldName){var a=s.getAreaDataValue({fieldName:t.calculatorFieldName,fieldData:t.fieldData,featureIndex:t.areaIndex});if(a)return"string"==typeof a?this._createStaticMap({url:u.base64DataToDataURL(a)},e,t):this._createStaticMapFromBase64Json(a,e,t)}},_createStaticMapFromBase64Json:function(e,t,r){var o=this,i=!1,s=[];return e.webMapJson.operationalLayers.forEach((function(e){if(e.isComparisonLayer){var t=r.stdPolygonsControllers&&r.stdPolygonsControllers.filter((function(t){return t.getCalculatorName()===e.calculatorName&&(t.currentFeatureIndex||0)===r.areaIndex}));if(t&&t.length){var o=function(e){return e.StdGeographyLevel+";"+e.StdGeographyID},l={},u=[];t.forEach((function(e){var t=e.getShownFeatureAttributes();function a(){t.forEach((function(e){l[o(e)]=1}))}if(t&&t.length)a();else{var r,i,s=new n,c=function(){r&&r.remove(),clearTimeout(i),s.resolve()};r=e.setShownFeaturesChangedListener((function(){(t=e.getShownFeatureAttributes())&&t.length&&(a(),c())})),i=setTimeout(c,500),u.push(s.promise)}})),s.push(a(u).then((function(){var t=e.featureCollection.layers[0].featureSet,a=t.features.length;t.features=t.features.filter((function(e){return l[o(e.attributes)]})),a!==t.features.length&&(i=!0)})))}}})),a(s).then((function(){var a="data:application/json;base64,"+l.base64FromJson(i?e.webMapJson:e.originalString),n=e.fileName+(i?"-modified":"");return o._createStaticMap({url:a,id:n,isWebMapJson:!!n},t,r)}))},_createStaticMap:function(e,t,a){var n=e&&new i(e,t);return n&&n.load().then((function(){return n.loaded?{node:t,map:n,itemId:a.webMapId,mapName:a.webMapName,legend:null}:null}))},getPlayerZoomScale:function(e){}});return c.EXPAND_FACTOR=1.5,c}));