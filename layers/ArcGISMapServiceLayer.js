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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../lang","../request","../SpatialReference","../geometry/Extent","./LayerInfo"],(function(e,i,t,s,a,n,l,r,o,c){var h=e(null,{declaredClass:"esri.layers.ArcGISMapServiceLayer",infoTemplates:null,constructor:function(e,i){this.layerInfos=[],i&&(this.infoTemplates=i.infoTemplates||null);var t=this._params={},s=this._url.query?this._url.query.token:null;s&&(t.token=s)},setInfoTemplates:function(e){this.infoTemplates=e},_load:function(){l({url:this._url.path,content:i.mixin({f:"json"},this._params),callbackParamName:"callback",load:this._initLayer,error:this._errorHandler})},spatialReference:null,initialExtent:null,fullExtent:null,description:null,units:null,_initLayer:function(e,i){try{this._findCredential(),(this.credential&&this.credential.ssl||e&&e._ssl)&&this._useSSL(),this.description=e.description,this.copyright=e.copyrightText,this.spatialReference=e.spatialReference&&new r(e.spatialReference),this.initialExtent=e.initialExtent&&new o(e.initialExtent),this.fullExtent=e.fullExtent&&new o(e.fullExtent),this.units=e.units,this.maxRecordCount=e.maxRecordCount,this.maxImageHeight=e.maxImageHeight,this.maxImageWidth=e.maxImageWidth,this.supportsDynamicLayers=e.supportsDynamicLayers;var s,a=this.layerInfos=[],l=e.layers,h=this._defaultVisibleLayers=[];if(t.forEach(l,(function(e,i){a[i]=new c(e),e.defaultVisibility&&h.push(e.id)})),this.visibleLayers||(this.visibleLayers=h),this.version=e.currentVersion,this.cimVersion=e.cimVersion,!this.version)s="capabilities"in e||"tables"in e?10:"supportedImageFormatTypes"in e?9.31:9.3,this.version=s;this.capabilities=e.capabilities,n.isDefined(e.minScale)&&!this._hasMin&&this.setMinScale(e.minScale),n.isDefined(e.maxScale)&&!this._hasMax&&this.setMaxScale(e.maxScale)}catch(e){this._errorHandler(e)}}});return s("extend-esri")&&i.setObject("layers.ArcGISMapServiceLayer",h,a),h}));