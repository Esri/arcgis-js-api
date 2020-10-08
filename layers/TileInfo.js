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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../lang","../SpatialReference","../geometry/Point","./LOD"],(function(e,t,i,s,o,n,l,r,a){var h=e(null,{declaredClass:"esri.layers.TileInfo",constructor:function(e){t.mixin(this,e),this.width=this.cols,this.height=this.rows,this._levelToLOD={};var s=this.spatialReference,o=this.origin;s&&(s=this.spatialReference=new l(s.toJson?s.toJson():s)),o&&(this.origin=new r(o.toJson?o.toJson():o),!o.spatialReference&&s&&this.origin.setSpatialReference(new l(s.toJson()))),this.lods=i.map(this.lods,(function(e){return new a(e)})),i.forEach(this.lods,(function(e){this._levelToLOD[e.level]=e}),this);var n=!1,h=this.spatialReference,c=this.origin;if(h&&c){var f=h._getInfo();f&&(n=h._isWrappable()&&Math.abs(f.origin[0]-c.x)<=f.dx)}this.isWrappable=n,this._initializeUpsampleLevels()},toJson:function(){return n.fixJson({rows:this.rows,cols:this.cols,dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin&&this.origin.toJson(),spatialReference:this.spatialReference&&this.spatialReference.toJson(),lods:this.lods&&i.map(this.lods,(function(e){return e.toJson()}))})},lodAt:function(e){return this._levelToLOD&&this._levelToLOD[e]||null},updateTileInfo:function(e){var t=this.lodAt(e.level),i=t.resolution*this.width,s=t.resolution*this.height;e.id=e.level+"/"+e.row+"/"+e.col,e.extent||(e.extent=[0,0,0,0]),e.extent[0]=this.origin.x+e.col*i,e.extent[1]=this.origin.y-(e.row+1)*s,e.extent[2]=e.extent[0]+i,e.extent[3]=e.extent[1]+s},upsampleTile:function(e){var t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel)&&(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),!0)},_initializeUpsampleLevels:function(){var e=this.lods;this._upsampleLevels=[];for(var t=null,i=0;i<e.length;i++){var s=e[i];this._upsampleLevels[s.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/s.resolution:0},t=s}}});return s("extend-esri")&&t.setObject("layers.TileInfo",h,o),h}));