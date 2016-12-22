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

define(["require","exports"],function(e,t){var r=function(){function e(t){for(this.extent=4096,this.keys=[],this.values=[],this._pbfLayer=t.clone();t.next();)switch(t.tag()){case 1:this.name=t.getString();break;case 3:this.keys.push(t.getString());break;case 4:this.values.push(e._parseValue(t.getMessage()));break;case 5:this.extent=t.getUInt32();break;default:t.skip()}}return e.prototype.getData=function(){return this._pbfLayer},e._parseValue=function(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getInt64();case 5:return e.getUInt64();case 6:return e.getSInt64();case 7:return e.getBool();default:e.skip()}return null},e}();return r});