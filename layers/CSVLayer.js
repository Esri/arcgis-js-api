// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

/**
     * options properties:
     *
     * columnDelimiter
     * latitudeFieldName
     * longitudeFieldName
     * fields: { name, alias, type }[]
     * outFields: String[]
     * copyright
     */

define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../arcgis/csv","./FeatureLayer","../geometry/Extent","../tasks/FeatureSet"],function(e,t,i,a,r,s,n,l,u){var o=t(n,{declaredClass:"esri.layers.CSVLayer",_preventInit:!0,_fieldTypeMap:{Date:"esriFieldTypeDate",Number:"esriFieldTypeDouble",String:"esriFieldTypeString"},constructor:function(t,a){this.url=t,a=i.mixin({},a),this.columnDelimiter=a.columnDelimiter,this.latitudeFieldName=a.latitudeFieldName,this.longitudeFieldName=a.longitudeFieldName;var r=a.layerDefinition;r||(r={fields:a.fields||[],geometryType:"esriGeometryPoint",copyrightText:a.copyright},a.fields&&e.forEach(a.fields,function(e){var t=e.type||"String";e.type=this._fieldTypeMap[t],e.alias||(e.alias=e.name)},this)),this._buildCsvFcParam={url:this.url,columnDelimiter:this.columnDelimiter,layerDefinition:r,outFields:a.outFields},this.latitudeFieldName&&this.longitudeFieldName&&(this._buildCsvFcParam.locationInfo={locationType:"coordinates",latitudeFieldName:this.latitudeFieldName,longitudeFieldName:this.longitudeFieldName}),this._projectFeatures=i.hitch(this,this._projectFeatures),this._addFeatures=i.hitch(this,this._addFeatures),this._initCSVLayer(a)},refresh:function(){this._fireUpdateStart(),this.applyEdits(null,null,this.graphics),this._loadFeatures()},_setMap:function(e){var t=this.inherited(arguments);return this._fireUpdateStart(),this._projectFeatures(this._csvFC).then(this._addFeatures).otherwise(this._errorHandler),this._csvFC=null,t},_initCSVLayer:function(e){var t=this;s.buildCSVFeatureCollection(this._buildCsvFcParam).then(function(i){t._csvFC=i;var a=i.layerDefinition;a.extent=t._getFCExtent(i),e.outFields||(e.outFields=["*"]),t._initFeatureLayer({layerDefinition:a},e)}).otherwise(this._errorHandler)},_loadFeatures:function(){s.buildCSVFeatureCollection(this._buildCsvFcParam).then(this._projectFeatures).then(this._addFeatures).otherwise(this._errorHandler)},_projectFeatures:function(e){return s.projectFeatureCollection(e,this._map.spatialReference)},_addFeatures:function(e){var t=new u(e.featureSet);this.applyEdits(t.features,null,null),this._fireUpdateEnd()},_getFCExtent:function(e){var t;if(e&&e.featureSet&&e.featureSet.features){var i=e.featureSet.features,a=i.length;if(a>1){var r=i[0].geometry;t=new l(r.x,r.y,r.x,r.y);for(var s=a-1;s>0;s--)r=i[s].geometry,t.xmin=Math.min(t.xmin,r.x),t.ymin=Math.min(t.ymin,r.y),t.xmax=Math.max(t.xmax,r.x),t.ymax=Math.max(t.ymax,r.y);t.getWidth()<=0&&t.getHeight()<=0&&(t=null)}}return t}});return a("extend-esri")&&i.setObject("layers.CSVLayer",o,r),o});