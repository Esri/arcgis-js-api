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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/array","./VariableUtil"],(function(t,i,n){return t(null,{id:null,label:null,isRangeFilter:!1,enumItems:null,rangeMin:0,rangeMax:0,range:null,constructor:function(t){this.id=t.id,this.label=t.aliasname,this.isRangeFilter="Range"==t.type,this.isRangeFilter?(this.rangeMin=Number(t.rangeMin),this.rangeMax=Number(t.rangeMax),this._match=this._updateRange,this.activate=this._activateRange):(this._index={},this.enumItems=[],i.forEach(t.enumValues.split(","),this._provideEnumItem,this),this._match=this._updateEnum,this.activate=this._activateEnum)},_provideEnumItem:function(t){if(!t)return null;var i=t.toLowerCase(),n=this._index[i];return n||(n={id:i,value:t,selected:!0,leafCount:0},this._index[i]=n,this.enumItems.push(n)),n},_updateEnum:function(t){var i=this._provideEnumItem(t.value);return!!i&&(i.leafCount++,!0)},_updateRange:function(t){var i=n.parseRangeValue(t.value);return!!i&&(this.range?(this.range.min>i.min&&(this.range.min=i.min),this.range.max<i.max&&(this.range.max=i.max)):this.range=i,!0)},activate:function(){},_activateEnum:function(){this._match=this._matchEnum;var t=[],n=0;return i.forEach(this.enumItems,(function(i){i.leafCount?t.push(i):delete this._index[i.id],n+=i.leafCount}),this),this.enumItems=t,n&&(this.isActive=this._isActiveEnum),0!=n},_activateRange:function(){return this._match=this._matchRange,!!this.range&&(this.isActive=this._isActiveRange,!isNaN(this.rangeMin)&&this.range.min>this.rangeMin?this.range.min=this.rangeMin:this.rangeMin=this.range.min,!isNaN(this.rangeMax)&&this.range.max<this.rangeMax?this.range.max=this.rangeMax:this.rangeMax=this.range.max,!0)},isActive:function(){return!1},_isActiveEnum:function(){return i.some(this.enumItems,(function(t){return!t.selected}))},_isActiveRange:function(){return this.rangeMin!=this.range.min||this.rangeMax!=this.range.max},match:function(t,i){var n=t.filteringTags[this.id];return n?this._match(n):!i||void 0},_matchEnum:function(t){var i=this._index[t.value.toLowerCase()];return i&&i.selected},_matchRange:function(t){var i=n.parseRangeValue(t.value);return i&&i.min==i.max&&0!=i.max&&(i.max=Math.max(i.max,this.rangeMax)),i&&this.range&&i.min<=this.range.max&&i.max>=this.range.min},updateRange:function(t){this.isRangeFilter&&(this.range.min=Math.min(Math.max(t.min,this.rangeMin),this.rangeMax),this.range.max=Math.min(Math.max(t.max,this.rangeMin),this.rangeMax))}})}));