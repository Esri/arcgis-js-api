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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../geometry","../../core/JSONSupport","../../core/lang","../../core/Warning","../../core/accessorSupport/decorators","../../core/accessorSupport/decorators/persistable","../../views/3d/support/projectionUtils"],(function(e,t,r,o,a,i,p,n,s,c){return function(e){function t(t){var r=e.call(this,t)||this;return r.geometry=null,r.type="clip",r}var a;return r.__extends(t,e),a=t,t.prototype.writeGeometry=function(e,t,r,a){if(a.layer&&a.layer.spatialReference&&!a.layer.spatialReference.equals(this.geometry.spatialReference)){if(!c.canProject(e.spatialReference,a.layer.spatialReference))return void(a&&a.messages&&a.messages.push(new p("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:a.layer.spatialReference,context:a})));var i=new o.Polygon({spatialReference:a.layer.spatialReference});c.polygonToPolygon(e,i),t[r]=i.toJSON(a)}else t[r]=e.toJSON(a);delete t[r].spatialReference},t.prototype.clone=function(){return new a({geometry:i.clone(this.geometry),type:this.type})},r.__decorate([n.property({type:o.Polygon}),s.persistable()],t.prototype,"geometry",void 0),r.__decorate([n.writer(["web-scene","portal-item"],"geometry")],t.prototype,"writeGeometry",null),r.__decorate([n.property({type:["clip","mask","replace"],nonNullable:!0}),s.persistable()],t.prototype,"type",void 0),t=a=r.__decorate([n.subclass("esri.layers.support.SceneModification")],t)}(a.JSONSupport)}));