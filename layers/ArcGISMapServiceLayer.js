// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../lang","../request","../SpatialReference","../geometry/Extent","./LayerInfo"],function(e,i,t,a,s,n,l,r,o,h){var c=e(null,{declaredClass:"esri.layers.ArcGISMapServiceLayer",infoTemplates:null,constructor:function(e,i){this.layerInfos=[],i&&(this.infoTemplates=i.infoTemplates||null);var t=this._params={},a=this._url.query?this._url.query.token:null;a&&(t.token=a)},setInfoTemplates:function(e){this.infoTemplates=e},_load:function(){l({url:this._url.path,content:i.mixin({f:"json"},this._params),callbackParamName:"callback",load:this._initLayer,error:this._errorHandler})},spatialReference:null,initialExtent:null,fullExtent:null,description:null,units:null,_initLayer:function(e){try{this._findCredential();var i=this.credential&&this.credential.ssl||e&&e._ssl;i&&this._useSSL(),this.description=e.description,this.copyright=e.copyrightText,this.spatialReference=e.spatialReference&&new r(e.spatialReference),this.initialExtent=e.initialExtent&&new o(e.initialExtent),this.fullExtent=e.fullExtent&&new o(e.fullExtent),this.units=e.units,this.maxRecordCount=e.maxRecordCount,this.maxImageHeight=e.maxImageHeight,this.maxImageWidth=e.maxImageWidth,this.supportsDynamicLayers=e.supportsDynamicLayers;var a=this.layerInfos=[],s=e.layers,l=this._defaultVisibleLayers=[];if(t.forEach(s,function(e,i){a[i]=new h(e),e.defaultVisibility&&l.push(e.id)}),this.visibleLayers||(this.visibleLayers=l),this.version=e.currentVersion,!this.version){var c;c="capabilities"in e||"tables"in e?10:"supportedImageFormatTypes"in e?9.31:9.3,this.version=c}this.capabilities=e.capabilities,n.isDefined(e.minScale)&&!this._hasMin&&this.setMinScale(e.minScale),n.isDefined(e.maxScale)&&!this._hasMax&&this.setMaxScale(e.maxScale)}catch(u){this._errorHandler(u)}}});return a("extend-esri")&&i.setObject("layers.ArcGISMapServiceLayer",c,s),c});