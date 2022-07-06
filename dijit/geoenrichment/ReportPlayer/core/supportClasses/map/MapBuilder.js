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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","dojo/dom-construct","dojo/dom-geometry","esri/graphic","esri/graphicsUtils","esri/dijit/HomeButton","./layers/MapContentBuilder","./legend/LegendBuilder","./MapLoadTracker","./StaticMap","./WebMapsUtil","./Popup","./Projector","./mobile/MobilePanUtil","../../../dataProvider/supportClasses/data/AreaDataUtil","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/ReportPlayer/_devConfig"],(function(e,a,t,n,r,o,i,s,l,u,c,f,d,m,p,I,h,g,y,v,x){var b=e(null,{_mapInfos:null,_mapDivId:0,_mapImageInfos:null,constructor:function(e){a.mixin(this,e),this.reset()},reset:function(){this._mapInfos={},this._mapImageInfos=null},collectAreaMaps:function(e){var a=[];e=e||0;var t=this._mapInfos[e];for(var n in t){var r=t[n],o=r.node;if(o.parentNode){var s=i.position(o);a.push({areaIndex:e,node:o,x:s.x,y:s.y,position:-1,map:r.map,legend:r.legend,itemId:r.itemId,mapName:r.mapName})}}return a.sort((function(e,a){return e.x-a.x})),a.sort((function(e,a){return e.y-a.y})),a.forEach((function(e,a){e.position=a})),a},collectAllAreasMaps:function(){var e=[];for(var a in this._mapInfos)e=e.concat(this.collectAreaMaps(a));return e},setFallbackMapImageInfos:function(e){e?(this._mapImageInfos={},e.forEach((function(e){var a=e.areaIndex||0;(this._mapImageInfos[a]=this._mapImageInfos[a]||{})[e.itemId||e.mapName]=e}),this)):this._mapImageInfos=null},createMap:function(e,a){return a.areaIndex=a.areaIndex||0,p.setLoadedItemsCache(a.reportData.loadedMapPortalItems),r(this._doCreateMap(e,a),(function(e){return a.waitForLoad?e&&r(d.waitForLoad(e.map),(function(){return e})):e}))},_doCreateMap:function(e,t){var o,i,s=this;if(t.webMapName)o=p.getItemByMapName(t.webMapName,!1).then((function(e){return e||(t.webMapId?p.getItem(t.webMapId).otherwise((function(){return null})):null)}));else if(t.webMapId)o=p.getItem(t.webMapId).otherwise((function(){return null}));else if(t.calculatorFieldName){var l=y.getAreaDataValue({fieldName:t.calculatorFieldName,fieldData:t.fieldData,featureIndex:t.areaIndex}),u=l&&l.webMapJson;u&&(u=a.mixin({},u),i=[],t.additionalLayerInfos=[],u.operationalLayers=u.operationalLayers.filter((function(e){if(e.isSiteLayer)return i.push(e),!1;if(e.isLocatorLayer)return!1;if(e.isComparisonLayer){var n=t.stdPolygonsControllers&&t.stdPolygonsControllers.filter((function(a){return a.getCalculatorName()===e.calculatorName}));if(n&&n.length){var r=e.featureCollection.layers[0].featureSet,o=n[0].buildGeometryFieldName(r.spatialReference.wkid);r.features.forEach((function(e){e.geometry.spatialReference=a.mixin({},r.spatialReference),e.attributes[o]=JSON.stringify(e.geometry)})),n.forEach((function(e){r.features.forEach((function(a){e.saveGeometryInCalculatorData(a.attributes,o)}))}))}return!1}return!0})),o={item:{type:"Web Map"},itemData:u})}return o=o?r(o).then((function(e){return e||p.getPortalDefaultBasemap()})):p.getPortalDefaultBasemap(),r(o).then((function(a){if(!a||x.emulateErrors.getMapItemError)return(new n).reject(new Error("Can't load an item or the item is incorrect."));var r=new n;try{s._prepareFeaturesToShow(t,i),s._createMapFromItemInfo(a,e,t).then(r.resolve,r.reject)}catch(e){r.reject(e),console.log(e)}return r.promise})).otherwise(this._createFallbackStaticMap.bind(this,t,e))},_prepareFeaturesToShow:function(e,t){var n,r={},o=e.areaIndex,i=e.reportData,l=i.analysisAreas;if(t){var u={},c={};t.forEach((function(e){var a=e.featureCollection.layers[0],t=a.featureSet.features[0],n=t.attributes;t.geometry.spatialReference=a.featureSet.spatialReference;var r=new s({geometry:t.geometry,attributes:n,symbol:a.layerDefinition.drawingInfo.renderer.symbol});"esriGeometryPoint"===a.featureSet.geometryType?c[n.STORE_ID]=r:u[n.AREA_ID]=r})),(l=l.map((function(e){return a.mixin({},e)}))).forEach((function(e){var t=e.feature.attributes;e.feature=u[t.AREA_ID],e.feature&&a.mixin(e.feature.attributes,t);var n=e.location&&e.location.attributes;e.location=c[t.STORE_ID],e.location&&a.mixin(e.location.attributes,n)}))}if(i.isMultiFeature){n=[];var f=i.reverseAnalysisAreasOnMap?l.slice().reverse():l;f.forEach((function(e,a){var t=i.reverseAnalysisAreasOnMap?f.length-a-1:a;r[n.length]=t,n.push(e.feature);var o=i.combinedAreasInfo.groups;o&&o.length&&o.some((function(e){return-1!==e.indexes.indexOf(t)}))||(e.location&&(r[n.length]=t,n.push(e.location)),e.additionalFeatures&&e.additionalFeatures.forEach((function(e){r[n.length]=t,n.push(e)})))})),i.combinedAreasInfo.groups&&i.combinedAreasInfo.groups.forEach((function(e){var a=l[e.indexes[0]],t=e.location||a&&a.location;t&&(r[n.length]=e.indexes[0],n.push(t),t.locationName=e.locationName||a&&a.locationName),e.additionalFeatures&&e.additionalFeatures.forEach((function(a){r[n.length]=e.indexes[0],n.push(a)}))}))}else{var d=l[o];if(n=[d.feature],d.location)n.push(d.location);else{var m=i.combinedAreasInfo&&i.combinedAreasInfo.groups,p=m&&m.filter((function(e){return-1!==e.indexes.indexOf(o)}))[0];p&&p.location&&n.push(p.location)}d.additionalFeatures&&(n=n.concat(d.additionalFeatures)),n.forEach((function(e,a){r[a]=o}))}e.features=n,e.featureIndexToAreaIndexMap=r},_createMapFromItemInfo:function(e,a,t){var i=this,s=v.isMobileDevice();return p.createMap(e,a,{defaultBasemapId:t.defaultBasemapId,defaultBasemapName:t.defaultBasemapName,additionalLayerInfos:t.additionalLayerInfos,mapOptions:{extent:t.extent||t.features.length&&l.graphicsExtent(t.features).expand(t.expandFactor||1.5),sliderPosition:!1===t.sliderPosition?"none":t.sliderPosition||"top-right",infoWindow:new I({getPlayerZoomScale:function(){return i.getPlayerZoomScale(a)}},o.create("div")),isMapNavigation:!s}}).then((function(e){var o=e&&e.map;return o?r(i._setInitialExtent(o,t),(function(){return r(c.addLayersToMap(o,{features:t.features,featureIndexToAreaIndexMap:t.featureIndexToAreaIndexMap,analysisAreas:t.reportData.analysisAreas,locatorPointsControllers:t.locatorPointsControllers,stdPolygonsControllers:t.stdPolygonsControllers,thisAreasHighlightController:t.thisAreasHighlightController,geClient:t.geClient,countryID:t.countryID,hierarchy:t.hierarchy,additionalLayerInfos:t.additionalLayerInfos,calculatorFieldName:t.calculatorFieldName,pinSymbolJson:t.pinSymbolJson,areaSymbolJsons:t.areaSymbolJsons,areaSymbolRamp:t.areaSymbolRamp,attachmentsStore:t.attachmentsStore}),(function(){s&&g.setUpMapPan(o,t.onPanContainer),void 0===a.__mapDivId&&(a.__mapDivId=i._mapDivId++);var e={node:a,map:o,itemId:t.webMapId,mapName:t.webMapName,legend:null};f.createLegend(o,a,t.legendController,{onCreated:function(a){e.legend=a},onDestroyed:function(){delete e.legend}});var n=new u({map:o}).placeAt(a);return n.startup(),n.own(o.on("before-unload",(function(){n.destroy()}))),(i._mapInfos[t.areaIndex]=i._mapInfos[t.areaIndex]||{})[a.__mapDivId]=e,e}))})):(new n).reject(new Error("Can't create a map."))}))},_setInitialExtent:function(e,a){if(a.features.length)return r(a.extent||t(a.features.map((function(a){return h.needProject(a.geometry,e)?r(h.projectGeometries(a.geometry,e),(function(e){return new s(e)})):a}))).then((function(e){return l.graphicsExtent(e).expand(a.expandFactor||1.5)})),(function(a){return h.needProject(a,e)?r(h.projectGeometries(a,e),(function(a){return e.setExtent(a)})):e.setExtent(a)}))},_createFallbackStaticMap:function(e,a){var t=this._mapImageInfos&&this._mapImageInfos[e.areaIndex]&&(this._mapImageInfos[e.areaIndex][e.webMapId]||this._mapImageInfos[e.areaIndex][e.webMapName]);return this._createStaticMap(t,a,e)},_createStaticMap:function(e,a,t){var n=e&&new m(e,a);return n&&n.load().then((function(){return n.loaded?{node:a,map:n,itemId:t.webMapId,mapName:t.webMapName,legend:null}:null}))},getPlayerZoomScale:function(e){}});return b.EXPAND_FACTOR=1.5,b}));