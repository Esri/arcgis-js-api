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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../core/Accessoire"],function(t){var e=t.createSubclass({classMetadata:{properties:{indexById:{dependsOn:["graphics","objectIdField"]}}},destroy:function(){this.removeAll()},graphics:null,objectIdField:null,indexById:null,_indexByIdGetter:function(){return this._createIndexById(this.graphics&&this.graphics.toArray(),this.objectIdField)},_oldIndex:null,beginUpdate:function(){this._oldIndex=this.indexById,this.indexById=null},add:function(t){if(t&&t.length){this.indexById=this.indexById||{};var e=this._updateAndExtractNew(t,this.indexById,this._oldIndex);this.graphics.addMany(e)}},revertUpdate:function(){var t=this._extractLeftOnly(this.indexById,this._oldIndex);this.indexById=this._oldIndex,this._oldIndex=null,this.graphics.removeMany(t)},endUpdate:function(){var t=this._extractLeftOnly(this._oldIndex,this.indexById);this._oldIndex=null,this.graphics.removeMany(t)},find:function(t){return null!=t&&this.indexById&&this.indexById[t]},removeAll:function(){this.indexById=this._oldIndex=null,this.graphics.removeAll()},_createIndexById:function(t,e){var i;if(t&&t.length&&e){var n,d,r;for(i={},n=0;d=t[n];n++)r=d.attributes&&d.attributes[e],null!=r&&(i[r]=d)}return i},_updateAndExtractNew:function(t,e,i){var n,d,r,s,l=[],a=t?t.length:0,h=this.objectIdField;for(n=0;a>n;n++)d=t[n],r=d.attributes&&d.attributes[h],null!=r?(s=i&&i[r],s?(e[r]=s,s.geometry=d.geometry,s.attributes=d.attributes):(e[r]=d,l.push(d))):l.push(d);return l},_extractLeftOnly:function(t,e){var i,n,d=[];for(i in t)n=t[i],!n||e&&e[i]||d.push(n);return d}});return e});