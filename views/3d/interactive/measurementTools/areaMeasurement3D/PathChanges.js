// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../support/setUtils"],function(e,t,n){return function(){function e(){this.change="none",this.updatedVertices=new Set}return e.prototype.fullChange=function(){this.change="full"},e.prototype.incrementalChange=function(e){"none"===this.change&&(this.change="incremental"),this.updatedVertices.add(e)},e.prototype.clear=function(){this.change="none",this.updatedVertices.clear()},e.prototype.assign=function(e){this.change=e.change,this.updatedVertices=n.clone(e.updatedVertices)},e.prototype.merge=function(e){var t=this;switch(this.change){case"none":this.assign(e);break;case"full":break;case"incremental":"incremental"===e.change?e.updatedVertices.forEach(function(e){t.updatedVertices.add(e)}):"full"===e.change&&(this.change="full")}},e}()});