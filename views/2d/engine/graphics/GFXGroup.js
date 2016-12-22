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

define(["require","exports","../../../../core/tsSupport/extendsHelper","dojo/_base/lang","../Container"],function(t,e,r,n,o){var a=function(t){function e(){t.call(this)}return r(e,t),e.prototype.attach=function(e){return this.g=e.surface.createGroup(),t.prototype.attach.call(this,e)},e.prototype.detach=function(e){t.prototype.detach.call(this,e),this.g.destroy(),this.g=null},e.prototype.prepareChildrenRenderParameters=function(t){return n.mixin({},t,{surface:this.g})},e.prototype.detachChild=function(t,e){return t.detach(e)},e.prototype.attachChild=function(t,e){return t.attach(e)},e.prototype.renderChild=function(t,e){return t.render(e)},e}(o);return a});