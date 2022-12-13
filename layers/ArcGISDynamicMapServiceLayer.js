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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/sniff","dojo/io-query","../kernel","../config","../lang","../request","../urlUtils","../layerUtils","../geometry/scaleUtils","./DynamicMapServiceLayer","./ArcGISMapServiceLayer","./TimeInfo","./LayerTimeOptions","./ImageParameters","./DynamicLayerInfo","./LayerMapSource"],(function(i,e,s,a,t,n,r,o,h,l,y,m,f,c,p,d,u,_,g,L){var D=i([c,p],{declaredClass:"esri.layers.ArcGISDynamicMapServiceLayer",_eventMap:{"visible-layers-change":["visibleLayers"]},constructor:function(i,s){var a=s&&s.imageParameters,t=e.hitch;if(a){var n=a.layerDefinitions;n&&this.setLayerDefinitions(n),a.layerOption===_.LAYER_OPTION_SHOW&&(this.visibleLayers=[].concat(a.layerIds),this.onVisibleLayersChange(this.visibleLayers))}this._setIsPNG32=t(this,this._setIsPNG32),this.dpi=a&&a.dpi||96,this.imageFormat=a&&a.format||"png8",this.imageTransparency=!a||!1!==a.transparent,this._setIsPNG32(),this.gdbVersion=s&&s.gdbVersion,this._params.gdbVersion=this.gdbVersion;var r=a&&a.layerDefinitions;e.mixin(this._params,this._url.query,{dpi:this.dpi,transparent:this.imageTransparency,format:this.imageFormat},a?a.toJson():{}),r&&(this._params.layerDefs=r),this.getImageUrl=t(this,this.getImageUrl),this._initLayer=t(this,this._initLayer),this._load=t(this,this._load),this.useMapImage=!!s&&s.useMapImage,this._loadCallback=s&&s.loadCallback;var o=s&&s.resourceInfo;o?this._initLayer(o):void 0!==arguments[2]&&!1!==arguments[2]||this._load(),this.registerConnectEvents()},disableClientCaching:!1,layerDefinitions:null,_initLayer:function(i,e){this.inherited(arguments),i.timeInfo&&(this.timeInfo=new d(i.timeInfo)),this.loaded=!0,this.onLoad(this);var s=this._loadCallback;s&&(delete this._loadCallback,s(this))},getImageUrl:function(i,s,t,r){var h=this._url.path+"/export",f=this._params,c=f.token=this._getToken(),p=i.spatialReference.wkid||a.toJson(i.spatialReference.toJson()),d=this._errorHandler;if(delete f._ts,e.mixin(f,{bbox:i.xmin+","+i.ymin+","+i.xmax+","+i.ymax,bboxSR:p,imageSR:p,size:s+","+t},this.disableClientCaching?{_ts:(new Date).getTime()}:{}),f.layerDefs){var u=this.version>=10.5,_=m._serializeLayerDefinitions(f.layerDefs,u);delete(f=e.mixin({},f)).layerDefs,f.layerDefs=_}var g=y.addProxy(y.normalize(h)+"?"+n.objectToQuery(e.mixin({},f,{f:"image"})));g.length>o.defaults.io.postLength||this.useMapImage?this._jsonRequest=l({url:h,content:e.mixin(f,{f:"json"}),callbackParamName:"callback",load:function(i){var e;if(i.imageData)e="data:"+(i.contentType||"image")+";base64,"+i.imageData;else{var s=i.href;c&&(s+=-1===s.indexOf("?")?"?token="+c:"&token="+c),e=y.addProxy(s)}r(e)},error:d}):r(g)},_setIsPNG32:function(){var i=this.imageFormat.toLowerCase(),e=t("ie");this.isPNG32=e&&6===e&&("png32"===i||"png24"===i)&&this.imageTransparency},_setTime:function(i){var e=this.timeInfo,a=this._params.time=i?i.toJson().join(","):null;if(this.version<10.02&&e)if(a)this._params.layerTimeOptions=m._serializeTimeOptions(this.layerTimeOptions);else{var t=this.layerInfos;if(t){var n=this.layerTimeOptions,r=n?n.slice(0):[],o=[];s.forEach(t,(function(i){i.subLayerIds||o.push(i.id)})),o.length&&(s.forEach(o,(function(i){if(!r[i]){var e=new u;e.useTime=!1,r[i]=e}})),this._params.layerTimeOptions=m._serializeTimeOptions(r,o))}}this.version>=10.02&&e&&(a||e.hasLiveData||(this._params.time="null,null"))},setDPI:function(i,e){this.dpi=this._params.dpi=i,e||this.refresh(!0)},setImageFormat:function(i,e){this.imageFormat=this._params.format=i,this._setIsPNG32(),e||this.refresh(!0)},setImageTransparency:function(i,e){this.imageTransparency=this._params.transparent=i,this._setIsPNG32(),e||this.refresh(!0)},setVisibleLayers:function(i,e){this.visibleLayers=i,this._params.layers=_.LAYER_OPTION_SHOW+":"+(i.length?i.join():"-1"),this._updateDynamicLayers(),e||this.refresh(!0),this.onVisibleLayersChange(this.visibleLayers)},onVisibleLayersChange:function(){},setDefaultVisibleLayers:function(i){this.visibleLayers=this._defaultVisibleLayers,this._params.layers=null,this._updateDynamicLayers(),i||this.refresh(!0),this.onVisibleLayersChange(this.visibleLayers)},setLayerDefinitions:function(i,e){this.layerDefinitions=i,this._params.layerDefs=i,this._updateDynamicLayers(),e||this.refresh(!0)},setDefaultLayerDefinitions:function(i){this.layerDefinitions=this._params.layerDefs=null,this._updateDynamicLayers(),i||this.refresh(!0)},setDisableClientCaching:function(i){this.disableClientCaching=i},setLayerTimeOptions:function(i,e){this.layerTimeOptions=i,this._params.layerTimeOptions=m._serializeTimeOptions(i),this._updateDynamicLayers(),e||this.refresh(!0)},refresh:function(i){if(!0===i)this.inherited(arguments);else{var e=this.disableClientCaching;this.disableClientCaching=!0,this.inherited(arguments),this.disableClientCaching=e}},setLayerDrawingOptions:function(i,e){this.layerDrawingOptions=i,this._updateDynamicLayers(),e||this.refresh(!0)},setDynamicLayerInfos:function(i,e){i&&i.length>0?(this.dynamicLayerInfos=i,this.visibleLayers=m._getDefaultVisibleLayers(i),this.onVisibleLayersChange(this.visibleLayers)):this.dynamicLayerInfos=this.layerDrawingOptions=null,this._updateDynamicLayers(),e||this.refresh(!0)},createDynamicLayerInfosFromLayerInfos:function(){var i,e=[];return s.forEach(this.layerInfos,(function(s){(i=new g(s.toJson())).source=new L({mapLayerId:s.id}),e.push(i)})),e},_onDynamicLayersChange:function(){},_updateDynamicLayers:function(){if(this.dynamicLayerInfos&&this.dynamicLayerInfos.length>0||this.layerDrawingOptions&&this.layerDrawingOptions.length>0){this.dynamicLayerInfos&&0!==this.dynamicLayerInfos.length||(this.dynamicLayerInfos=this.createDynamicLayerInfosFromLayerInfos());var i,e=this._map&&f.getScale(this._map),s=this._getDynLayerObjs(e);i=a.toJson(s),this._params.dynamicLayers&&this._params.dynamicLayers.length===i.length&&this._params.dynamicLayers===i||(this._params.dynamicLayers=i,this._onDynamicLayersChange(this._params.dynamicLayers))}else this._params.dynamicLayers?(this._params.dynamicLayers=null,this._onDynamicLayersChange(null)):this._params.dynamicLayers=null},_getDynLayerObjs:function(i){var e=this.dynamicLayerInfos,a=[],t=this.visibleLayers,n=i?m._getLayersForScale(i,e):t;return s.forEach(e,(function(i){if(!i.subLayerIds){var e,r=i.id;if(-1!==s.indexOf(t,r)&&-1!==s.indexOf(n,r)){var o,h,l;if((e={id:r,name:i.name}).source=i.source&&i.source.toJson(),this.layerDefinitions&&this.layerDefinitions[r]&&(o=this.layerDefinitions[r]),o&&(e.definitionExpression=o),this.layerDrawingOptions&&this.layerDrawingOptions[r]&&(h=this.layerDrawingOptions[r]),h){var y=h.toJson();this._fixMarkerColor(y.renderer),e.drawingInfo=y}this.layerTimeOptions&&this.layerTimeOptions[r]&&(l=this.layerTimeOptions[r]),l&&(e.layerTimeOptions=l.toJson()),e.minScale=i.minScale||0,e.maxScale=i.maxScale||0,a.push(e)}}}),this),a},_fixMarkerColor:function(i){s.forEach(this._getAllSimpleMarkerSymbols(i),(function(i){if(!i.color){var e=[0,0,0,0],s=i.outline&&i.outline.color;"esriSMSX"!==i.style&&"esriSMSCross"!==i.style||!s||(e=s.slice(0)),i.color=e}}))},_getAllSimpleMarkerSymbols:function(i){return s.filter(this._getAllSymbols(i),(function(i){return"esriSMS"===i.type}))},_getAllSymbols:function(i){var e=[];if(i){e.push(i.symbol),e.push(i.defaultSymbol);var a=i.uniqueValueInfos||i.classBreakInfos;s.forEach(a,(function(i){e.push(i.symbol)})),e=s.filter(e,h.isDefined)}return e},_onExtentChangeHandler:function(i,e,s){s&&this._updateDynamicLayers(),this.inherited(arguments)},_setMap:function(i,e,s){return this._map=i,this._updateDynamicLayers(),this.inherited(arguments)},onGDBVersionChange:function(){},setGDBVersion:function(i,e){this.gdbVersion=i,this._params.gdbVersion=i,this.onGDBVersionChange(),e||this.refresh(!0)},exportMapImage:function(i,s){var a=e.hitch(this,(function(){var a=o.defaults.map,t=i&&i.layerDefinitions;if(i=i?i.toJson(this.normalization):{},t&&(i.layerDefs=t),delete(i=e.mixin({size:a.width+","+a.height},this._params,i,{f:"json"}))._ts,i.layerDefs){var n=this.version>=10.5,r=m._serializeLayerDefinitions(i.layerDefs,n);delete i.layerDefs,i.layerDefs=r}this._exportMapImage(this._url.path+"/export",i,s)}));this.loaded?a():this.on("load",a)}});return t("extend-esri")&&e.setObject("layers.ArcGISDynamicMapServiceLayer",D,r),D}));