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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/typescript","../../core/Accessor","dojo/dom","dojo/dom-class"],function(e,t,o,r,i,d,n,s){var p={component:"esri-component"},c=function(e){function t(){e.apply(this,arguments),this.id=null,this.node=null,this.widget=null}return o(t,e),t.prototype.destroy=function(){return this.widget?void this.widget.destroy():void(this.node=null)},r([i.shared("esri.views.ui.Component")],t.prototype,"declaredClass",void 0),r([i.property({get:function(){return this._get("id")||this.get("node.id")}})],t.prototype,"id",void 0),r([i.property({set:function(e){var t=this._get("node");if(e!==t){if(this._set("widget",null),e){var o=!!e.domNode;this._set("widget",o?e:null),e=e.domNode||n.byId(e),s.add(e,p.component)}t&&s.remove(t,p.component),this._set("node",e)}}})],t.prototype,"node",void 0),r([i.property({readOnly:!0})],t.prototype,"widget",void 0),t=r([i.subclass()],t)}(d);return c});