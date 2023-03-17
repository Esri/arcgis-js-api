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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/declare"],(function(e){return e(null,{_levelsCache:null,_levels:null,constructor:function(e){this._initWithLevels(e.levels)},_initWithLevels:function(e){this._levels=e,this._levelsCache={},this._levels.forEach((function(e){delete e.description,this._levelsCache[e.id]=e,e.adminLevel&&(this._levelsCache[e.adminLevel]=e)}),this)},getLevels:function(e){return e?this._levels.filter((function(e){return!e.isWholeCountry})):this._levels.slice()},getLevel:function(e){return this._levelsCache[e]},getLevelPluralName:function(e){var l=this.getLevel(e);return l?l.name||l.pluralName:null},toJson:function(){return{levels:this._levels}}})}));