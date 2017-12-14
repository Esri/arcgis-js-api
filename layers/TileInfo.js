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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../lang","../SpatialReference","../geometry/Point","./LOD"],function(e,i,s,t,o,n,r,a,l){var h=e(null,{declaredClass:"esri.layers.TileInfo",constructor:function(e){i.mixin(this,e),this.width=this.cols,this.height=this.rows,this._levelToLOD={};var t=this.spatialReference,o=this.origin;t&&(t=this.spatialReference=new r(t.toJson?t.toJson():t)),o&&(this.origin=new a(o.toJson?o.toJson():o),!o.spatialReference&&t&&this.origin.setSpatialReference(new r(t.toJson()))),this.lods=s.map(this.lods,function(e){return new l(e)}),s.forEach(this.lods,function(e){this._levelToLOD[e.level]=e},this);var n=!1,h=this.spatialReference,c=this.origin;if(h&&c){var f=h._getInfo();f&&(n=h._isWrappable()&&Math.abs(f.origin[0]-c.x)<=f.dx)}this.isWrappable=n},toJson:function(){return n.fixJson({rows:this.rows,cols:this.cols,dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin&&this.origin.toJson(),spatialReference:this.spatialReference&&this.spatialReference.toJson(),lods:this.lods&&s.map(this.lods,function(e){return e.toJson()})})},lodAt:function(e){return this._levelToLOD&&this._levelToLOD[e]||null}});return t("extend-esri")&&i.setObject("layers.TileInfo",h,o),h});