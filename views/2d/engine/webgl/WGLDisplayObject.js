// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","./definitions","./WGLDisplayRecord","./collisions/Metric","./util/serializationUtils"],function(i,t,s,n,a,o){return function(){function l(i){this.insertAfter=null,this.filterFlags=0,this.id=i,this.displayRecords=[],this.metrics=[]}return l.prototype.copy=function(){var i=new l(this.id);return i.set(this),i},l.prototype.clone=function(){var i=new l(this.id);return i.displayRecords=this.displayRecords.map(function(i){return i.clone()}),i.metrics=this.metrics.map(function(i){return i.clone()}),i.insertAfter=this.insertAfter,i.filterFlags=this.filterFlags,i},l.prototype.set=function(i){this.id=i.id,this.displayRecords=i.displayRecords,this.metrics=i.metrics,this.insertAfter=i.insertAfter,this.filterFlags=i.filterFlags},l.prototype.getLabelVisibility=function(i){var t=!i.filter||!!(this.filterFlags&s.FILTER_FLAG_0),e=!i.effect||i.effect.excludedLabelsVisible||!!(this.filterFlags&s.EFFECT_FLAG_0);return t&&e},l.prototype.setFilterFlag=function(i,t){var e=1<<i;t?this.filterFlags|=e:this.filterFlags&=~e},l.prototype.serialize=function(i){return i.push(this.id),i.push(this.filterFlags),o.serializeList(i,this.metrics),o.serializeList(i,this.displayRecords),i},l.deserialize=function(i){var t=i.readInt32(),e=new l(t);e.filterFlags=i.readInt32();var s={id:t},r=o.deserializeList(i,a.default);return r.length&&(e.metrics=r),e.displayRecords=o.deserializeList(i,n,s),e},l}()});