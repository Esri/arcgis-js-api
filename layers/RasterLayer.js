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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/array","dojo/sniff","dojo/dom-construct","dojo/dom-style","dojo/number","../kernel","../lang","../domUtils","./BaseRasterLayer","./ImageServiceLayerMixin","./pixelFilters/StretchFilter","../SpatialReference","../geometry/Point"],(function(e,t,i,s,a,r,l,o,n,h,u,m,d,f,c,x){var p=e([m,d],{declaredClass:"esri.layers.RasterLayer",constructor:function(e,t){this.pixelData=null,null!==this.format&&void 0!==this.format||this.setImageFormat("LERC",!0)},_setDefaultFilter:function(){if(this.loaded&&this.drawType&&!this._isVectorData()&&(!this.pixelFilter||this._isDefaultPixelFilter))if("jpeg"===this.format.toLowerCase()||"jpg"===this.format.toLowerCase()||this.format.toLowerCase().indexOf("png")>-1)this._isDefaultPixelFilter&&(this.pixelFilter=null,this._isDefaultPixelFilter=!1);else{var e,t;if(this.minValues&&this.maxValues&&this.stdvValues&&this.meanValues){for(e=[],t=0;t<this.minValues.length;t++)e.push([this.minValues[t],this.maxValues[t],this.meanValues[t],this.stdvValues[t]]);this.bandCount!==e.length&&(e=null)}var i=0,s=!1;"U8"===this.pixelType?(i=5,s=!e):e?(i=5,s=!1):(i=6,s=!0),this.renderingRule&&(i=5,s=!0);var a=new f({stretchType:i,min:0,max:255,dra:s,minPercent:.25,maxPercent:.25,useGamma:!1,computeGamma:!1,statistics:e,numberOfStandardDeviations:2.5});this.pixelFilter=a.filter,this._isDefaultPixelFilter=!0}}});return a("extend-esri")&&t.setObject("layers.RasterLayer",p,n),p}));