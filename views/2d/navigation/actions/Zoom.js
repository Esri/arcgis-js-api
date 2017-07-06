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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/accessorSupport/decorators","../../../../core/Accessor"],function(o,t,n,i,e,r){var a=.6,s=function(o){function t(t){var n=o.call(this)||this;return n._canZoom=!0,n}return n(t,o),t.prototype.scroll=function(o,t){var n=this;if(this._canZoom){var i=t.data,e=i.x,r=i.y,s=i.deltaY;if(0===s)return void this.navigation.end();this.navigation.begin();var c=Math.pow(a,1/60*s);o.constraints.snapToZoom?(this._canZoom=!1,0>s?this.navigation.zoomIn([e,r]).then(function(){n._canZoom=!0}):this.navigation.zoomOut([e,r]).then(function(){n._canZoom=!0})):this.navigation.setViewpoint([e,r],c,0)}},t}(e.declared(r));return i([e.property()],s.prototype,"navigation",void 0),s=i([e.subclass("esri.views.2d.navigation.actions.Zoom")],s)});