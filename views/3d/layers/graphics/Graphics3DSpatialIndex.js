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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/PooledArray","../../../../core/sniff","../../../../core/accessorSupport/decorators","../../../../core/libs/rbush/PooledRBush"],function(e,t,n,r,i,a,o,d,c){var s=function(e){function t(t){var n=e.call(this)||this;return n.index=new c.default(9,o("csp-restrictions")?function(e){return{minX:e.extent[0],minY:e.extent[1],maxX:e.extent[2],maxY:e.extent[3]}}:[".extent[0]",".extent[1]",".extent[2]",".extent[3]"]),n.spatialReference=null,n}return n(t,e),t.prototype.destroy=function(){this.index.clear(),this.index=null},t.prototype.queryGraphicUIDsInExtent=function(e,t,n){t.equals(this.spatialReference)&&(l.minX=e[0],l.minY=e[1],l.maxX=e[2],l.maxY=e[3],this.index.search(l,function(e){n(e.graphic.uid)}))},t.prototype.add=function(e){!e.addedToSpatialIndex&&e.computeExtent(this.spatialReference)&&(this.index.insert(e),e.addedToSpatialIndex=!0)},t.prototype.addMany=function(e,t){void 0===t&&(t=e.length),p.clear();for(var n=0;n<t;n++){var r=e[n];!r.addedToSpatialIndex&&r.computeExtent(this.spatialReference)&&(p.push(r),r.addedToSpatialIndex=!0)}this.index.load(p.data,p.length)},t.prototype.remove=function(e){e.addedToSpatialIndex&&(e.addedToSpatialIndex=!1,this.index.remove(e))},t.prototype.removeMany=function(e){for(var t=0,n=e;t<n.length;t++){var r=n[t];this.remove(r)}},t.prototype.clear=function(){this.index.clear()},r([d.property({constructOnly:!0})],t.prototype,"spatialReference",void 0),t=r([d.subclass("esri.views.3d.layers.graphics.Graphics3DSpatialIndex")],t)}(d.declared(i)),p=new a({initialSize:50}),l={minX:0,minY:0,maxX:0,maxY:0};return s});