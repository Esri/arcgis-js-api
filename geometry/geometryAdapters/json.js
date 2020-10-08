// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports"],(function(t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.jsonAdapter=void 0,i.jsonAdapter={convertToGEGeometry:function(t,i){if(null==i)return null;return t.convertJSONToGeometry(i)},exportPoint:function(t,i,n){var s=new e(t.getPointX(i),t.getPointY(i),n),a=t.hasZ(i),h=t.hasM(i);a&&(s.z=t.getPointZ(i));h&&(s.m=t.getPointM(i));return s},exportPolygon:function(t,i,e){return new n(t.exportPaths(i),e,t.hasZ(i),t.hasM(i))},exportPolyline:function(t,i,e){return new s(t.exportPaths(i),e,t.hasZ(i),t.hasM(i))},exportMultipoint:function(t,i,e){return new a(t.exportPoints(i),e,t.hasZ(i),t.hasM(i))},exportExtent:function(t,i,e){var n=t.hasZ(i),s=t.hasM(i),a=new h(t.getXMin(i),t.getYMin(i),t.getXMax(i),t.getYMax(i),e);if(n){var o=t.getZExtent(i);a.zmin=o.vmin,a.zmax=o.vmax}if(s){var r=t.getMExtent(i);a.mmin=r.vmin,a.mmax=r.vmax}return a}};var e=function(t,i,e){this.x=t,this.y=i,this.spatialReference=e,this.z=void 0,this.m=void 0};var n=function(t,i,e,n){this.rings=t,this.spatialReference=i,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),n&&(this.hasM=n)};var s=function(t,i,e,n){this.paths=t,this.spatialReference=i,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),n&&(this.hasM=n)};var a=function(t,i,e,n){this.points=t,this.spatialReference=i,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),n&&(this.hasM=n)};var h=function(t,i,e,n,s){this.xmin=t,this.ymin=i,this.xmax=e,this.ymax=n,this.spatialReference=s,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}));