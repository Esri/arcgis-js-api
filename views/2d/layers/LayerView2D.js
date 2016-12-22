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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/watchUtils","../../layers/LayerView"],function(e,t,i,r,p,s,o){var a=function(e){function t(){e.apply(this,arguments),this.attached=!1,this.moving=!1,this.updateRequested=!1,this.updating=!1}return i(t,e),t.prototype.initialize=function(){var e=this;this.requestUpdate(),s.init(this,"suspended",function(t){e.container.visible=!t,!t&&e.updateRequested&&e.view.requestLayerViewUpdate(e)},!0),s.init(this,"fullOpacity",function(t){e.container.opacity=t},!0)},t.prototype.destroy=function(){this.updateRequested=!1,this.layer=null},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},t.prototype.processUpdate=function(e){this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))},t.prototype.canResume=function(){var e=this.inherited(arguments),t=this.layer;if(e&&null!=t.minScale&&null!=t.minScale){var i=this.view.scale,r=t.minScale,p=t.maxScale,s=!r,o=!p;!s&&r>=i&&(s=!0),!o&&i>=p&&(o=!0),e=s&&o}return e},r([p.property()],t.prototype,"attached",void 0),r([p.property()],t.prototype,"container",void 0),r([p.property()],t.prototype,"moving",void 0),r([p.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r([p.property()],t.prototype,"updateRequested",void 0),r([p.property({dependsOn:["updateRequested"]})],t.prototype,"updating",void 0),r([p.property()],t.prototype,"view",void 0),t=r([p.subclass("esri.views.2d.layers.LayerView2D")],t)}(p.declared(o));return a});