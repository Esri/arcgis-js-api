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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/watchUtils","../../layers/LayerView"],function(e,t,r,p,i,o,s){var a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.attached=!1,t.moving=!1,t.updateRequested=!1,t.updating=!1,t}return r(t,e),t.prototype.initialize=function(){var e=this;this.requestUpdate(),o.init(this,"suspended",function(t){e.container.visible=!t,!t&&e.updateRequested&&e.view.requestLayerViewUpdate(e)},!0),o.init(this,"fullOpacity",function(t){e.container.opacity=t},!0)},t.prototype.destroy=function(){this.updateRequested=!1,this.layer=null},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},t.prototype.processUpdate=function(e){this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))},t.prototype.canResume=function(){var e=this.inherited(arguments),t=this.layer;if(e&&null!=t.minScale&&null!=t.minScale){var r=this.view.scale,p=t.minScale,i=t.maxScale,o=!p,s=!i;!o&&p>=r&&(o=!0),!s&&r>=i&&(s=!0),e=o&&s}return e},t}(i.declared(s));return p([i.property()],a.prototype,"attached",void 0),p([i.property()],a.prototype,"container",void 0),p([i.property()],a.prototype,"moving",void 0),p([i.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],a.prototype,"suspended",void 0),p([i.property({readOnly:!0})],a.prototype,"updateParameters",void 0),p([i.property()],a.prototype,"updateRequested",void 0),p([i.property({dependsOn:["updateRequested"]})],a.prototype,"updating",void 0),p([i.property()],a.prototype,"view",void 0),a=p([i.subclass("esri.views.2d.layers.LayerView2D")],a)});