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

define(["require","exports","tslib","../../geometry","../../core/JSONSupport","../../core/lang","../../core/Warning","../../core/accessorSupport/decorators","../../core/accessorSupport/decorators/persistable","../../views/3d/support/polygonUtils","../../views/3d/support/projectionUtils"],(function(e,t,r,o,i,p,s,a,n,c,l){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.geometry=null,r.type="clip",r}var i;return r.__extends(t,e),i=t,t.prototype.writeGeometry=function(e,t,r,i){if(i.layer&&i.layer.spatialReference&&!i.layer.spatialReference.equals(this.geometry.spatialReference)){if(!l.canProject(e.spatialReference,i.layer.spatialReference))return void(i&&i.messages&&i.messages.push(new s("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:i.layer.spatialReference,context:i})));var p=new o.Polygon({spatialReference:i.layer.spatialReference});c.polygonToPolygon(e,p),t[r]=p.toJSON(i)}else t[r]=e.toJSON(i);delete t[r].spatialReference},t.prototype.clone=function(){return new i({geometry:p.clone(this.geometry),type:this.type})},r.__decorate([a.property({type:o.Polygon}),n.persistable()],t.prototype,"geometry",void 0),r.__decorate([a.writer(["web-scene","portal-item"],"geometry")],t.prototype,"writeGeometry",null),r.__decorate([a.property({type:["clip","mask","replace"],nonNullable:!0}),n.persistable()],t.prototype,"type",void 0),t=i=r.__decorate([a.subclass("esri.layers.support.SceneModification")],t)}(i.JSONSupport)}));