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

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/json","../../geometry/Polygon","dojo/has","../../kernel"],function(t,i,e,l,r,s,a){var n=t(null,{declaredClass:"esri.tasks.datareviewer.ReviewerFilters",constructor:function(){this.singleAttributeFilters=[],this.listAttributeFilters=[],this.rangeAttributeFilters=[],this.spatialFilters=[]},addAttributeFilter:function(t,i){var l={};l.fieldName=t,e.isArray(i)?i.length>1?(l.fieldValue=i,this.listAttributeFilters.push(l)):(l.fieldValue=i[0],this.singleAttributeFilters.push(l)):(l.fieldValue=i,this.singleAttributeFilters.push(l))},addRangeFilter:function(t,i,e){var l={},r={};r.minFieldValue=i,r.maxFieldValue=e,l.fieldName=t,l.fieldValue=r,this.rangeAttributeFilters.push(l)},addSpatialFilter:function(t){var i={};t&&"rings"in t&&"spatialReference"in t&&(i.rings=t.rings,i.spatialReference=t.spatialReference,this.spatialFilters.push(i))},toJSON:function(){var t=[];return null!==this.singleAttributeFilters&&this.singleAttributeFilters.length>0&&t.push({singleAttributeFilter:this.singleAttributeFilters}),null!==this.listAttributeFilters&&this.listAttributeFilters.length>0&&t.push({listAttributeFilter:this.listAttributeFilters}),null!==this.rangeAttributeFilters&&this.rangeAttributeFilters.length>0&&t.push({rangeAttributeFilter:this.rangeAttributeFilters}),null!==this.spatialFilters&&this.spatialFilters.length>0&&t.push({spatialFilter:this.spatialFilters}),0===t.length?"":l.stringify({filtersArray:t})},getCount:function(){var t=0;return null!==this.singleAttributeFilters&&this.singleAttributeFilters.length>0&&(t+=this.singleAttributeFilters.length),null!==this.listAttributeFilters&&this.listAttributeFilters.length>0&&(t+=this.listAttributeFilters.length),null!==this.rangeAttributeFilters&&this.rangeAttributeFilters.length>0&&(t+=this.rangeAttributeFilters.length),null!==this.spatialFilters&&this.spatialFilters.length>0&&(t+=this.spatialFilters.length),t},addReviewerFilters:function(t){if(!t)return 0;var e=0;return i.forEach(t.singleAttributeFilters,function(t){this.addAttributeFilter(t.fieldName,t.fieldValue),e++}),i.forEach(t.listAttributeFilters,function(t){this.addAttributeFilter(t.fieldName,t.fieldValue),e++}),i.forEach(t.rangeAttributeFilters,function(t){this.addRangeFilter(t.fieldName,t.minValue,t.maxValue),e++}),i.forEach(t.spatialFilters,function(t){this.addSpatialFilter(t),e++}),e},createFromJsonObject:function(t){if(t&&t.filters&&e.isArray(t.filters)){var l=t.filters;i.forEach(l,e.hitch(this,function(t){"spatialFilter"in t?i.forEach(t.spatialFilter,e.hitch(this,function(t){this.addSpatialFilter(new r(t))})):"singleAttributeFilter"in t?i.forEach(t.singleAttributeFilter,e.hitch(this,function(t){this.addAttributeFilter(t.fieldName,t.fieldValue)})):"listAttributeFilter"in t?i.forEach(t.listAttributeFilter,e.hitch(this,function(t){this.addAttributeFilter(t.fieldName,t.fieldValue)})):"rangeAttributeFilter"in t&&i.forEach(t.rangeAttributeFilter,e.hitch(this,function(t){this.addRangeFilter(t.fieldName,t.minValue,t.maxValue)}))}))}}});return s("extend-esri")&&e.setObject("tasks.datareviewer.ReviewerFilters",n,a),n});