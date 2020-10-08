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

define(["require","exports","tslib","../core/Collection","../core/collectionUtils","../core/Logger","../core/accessorSupport/decorators"],(function(e,t,r,o,n,a,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TablesMixin=void 0;var i="esri.support.TablesMixin",l=a.getLogger(i);t.TablesMixin=function(e){return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=e.apply(this,t)||this;return n.tables=new o,n.tables.on("after-add",(function(e){var t=e.item;t.parent&&t.parent!==n&&"tables"in t.parent&&t.parent.tables.remove(t),t.parent=n,"feature"!==t.type&&l.error("Layer 'title:"+t.title+", id:"+t.id+"' of type '"+t.type+"' is not supported as a table and will therefore be ignored.")})),n.tables.on("after-remove",(function(e){e.item.parent=null})),n}return r.__extends(t,e),t.prototype.destroy=function(){for(var e=0,t=this.tables.removeAll();e<t.length;e++){t[e].destroy()}this.tables.destroy()},Object.defineProperty(t.prototype,"tables",{set:function(e){this._set("tables",n.referenceSetter(e,this._get("tables")))},enumerable:!1,configurable:!0}),r.__decorate([s.property()],t.prototype,"tables",null),t=r.__decorate([s.subclass(i)],t)}(e)}}));