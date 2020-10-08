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

define(["require","exports","tslib","../../../geometry","../../../TimeExtent","../../../core/jsonMap","../../../core/JSONSupport","../../../core/lang","../../../core/SetUtils","../../../core/accessorSupport/decorators","../../../geometry/support/jsonUtils","../../../tasks/support/Query"],(function(e,t,r,i,o,n,s,a,p,l,c,d){"use strict";var u=new n.default({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),y=new n.default({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});return function(e){function t(t){var r=e.call(this,t)||this;return r.where=null,r.geometry=null,r.spatialRelationship="intersects",r.hiddenIds=new Set,r.distance=void 0,r.objectIds=null,r.units=null,r.timeExtent=null,r.enabled=!1,r}var n;return r.__extends(t,e),n=t,t.prototype.writeWhere=function(e,t){t.where=e||"1=1"},t.prototype.enable=function(){this._set("enabled",!0)},t.prototype.createQuery=function(e){void 0===e&&(e={});var t=this,i=t.where,o=t.geometry,n=t.spatialRelationship,s=t.timeExtent,p=t.objectIds,l=t.units,c=t.distance;return new d(r.__assign({geometry:a.clone(o),objectIds:a.clone(p),spatialRelationship:n,timeExtent:a.clone(s),where:i,units:l,distance:c},e))},t.prototype.clone=function(){var e=this,t=e.where,r=e.geometry,i=e.spatialRelationship,o=e.hiddenIds,s=e.timeExtent,p=e.objectIds,l=e.units,c=e.distance,d=new Set;return o.forEach((function(e){return d.add(e)})),new n({geometry:a.clone(r),hiddenIds:d,objectIds:a.clone(p),spatialRelationship:i,timeExtent:a.clone(s),where:t,units:l,distance:c})},r.__decorate([l.property({type:String})],t.prototype,"where",void 0),r.__decorate([l.writer("where")],t.prototype,"writeWhere",null),r.__decorate([l.property({types:i.geometryTypes,json:{read:c.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r.__decorate([l.property({type:String,json:{read:{source:"spatialRel",reader:u.read},write:{target:"spatialRel",writer:u.write}}})],t.prototype,"spatialRelationship",void 0),r.__decorate([l.property({json:{write:function(e,t,r){return t[r]=p.valuesOfSet(e)},read:function(e){return p.SetFromValues(e)}}})],t.prototype,"hiddenIds",void 0),r.__decorate([l.property({type:Number,json:{write:{overridePolicy:function(e){return{enabled:e>0}}}}})],t.prototype,"distance",void 0),r.__decorate([l.property({type:[Number],json:{write:!0}})],t.prototype,"objectIds",void 0),r.__decorate([l.property({type:String,json:{read:y.read,write:{writer:y.write,overridePolicy:function(e){return{enabled:e&&this.distance>0}}}}})],t.prototype,"units",void 0),r.__decorate([l.property({type:o,json:{write:!0}})],t.prototype,"timeExtent",void 0),r.__decorate([l.property({readOnly:!0})],t.prototype,"enabled",void 0),t=n=r.__decorate([l.subclass("esri.views.layers.support.FeatureFilter")],t)}(s.JSONSupport)}));