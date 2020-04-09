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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/assignHelper","../../../geometry","../../../TimeExtent","../../../core/jsonMap","../../../core/JSONSupport","../../../core/lang","../../../core/SetUtils","../../../core/accessorSupport/decorators","../../../geometry/support/jsonUtils","../../../tasks/support/Query"],(function(e,t,r,i,o,n,s,a,p,l,c,d,u,y){var S=new a.default({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),h=new a.default({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});return function(e){function t(t){var r=e.call(this,t)||this;return r.where=null,r.geometry=null,r.spatialRelationship="intersects",r.hiddenIds=new Set,r.distance=void 0,r.objectIds=null,r.units=null,r.timeExtent=null,r.enabled=!1,r}var a;return i(t,e),a=t,t.prototype.writeWhere=function(e,t){t.where=e||"1=1"},t.prototype.enable=function(){this._set("enabled",!0)},t.prototype.createQuery=function(e){void 0===e&&(e={});var t=this,r=t.where,i=t.geometry,n=t.spatialRelationship,s=t.timeExtent,a=t.objectIds,p=t.units,c=t.distance;return new y(o({geometry:l.clone(i),objectIds:l.clone(a),spatialRelationship:n,timeExtent:l.clone(s),where:r,units:p,distance:c},e))},t.prototype.clone=function(){var e=this,t=e.where,r=e.geometry,i=e.spatialRelationship,o=e.hiddenIds,n=e.timeExtent,s=e.objectIds,p=e.units,c=e.distance,d=new Set;return o.forEach((function(e){return d.add(e)})),new a({geometry:l.clone(r),hiddenIds:d,objectIds:l.clone(s),spatialRelationship:i,timeExtent:l.clone(n),where:t,units:p,distance:c})},r([d.property({type:String})],t.prototype,"where",void 0),r([d.writer("where")],t.prototype,"writeWhere",null),r([d.property({types:n.geometryTypes,json:{read:u.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r([d.property({type:String,json:{read:{source:"spatialRel",reader:S.read},write:{target:"spatialRel",writer:S.write}}})],t.prototype,"spatialRelationship",void 0),r([d.property({json:{write:function(e,t,r){return t[r]=c.valuesOfSet(e)},read:function(e){return c.createSetFromValues(e)}}})],t.prototype,"hiddenIds",void 0),r([d.property({type:Number,json:{write:{overridePolicy:function(e){return{enabled:e>0}}}}})],t.prototype,"distance",void 0),r([d.property({type:[Number],json:{write:!0}})],t.prototype,"objectIds",void 0),r([d.property({type:String,json:{read:h.read,write:{writer:h.write,overridePolicy:function(e){return{enabled:e&&this.distance>0}}}}})],t.prototype,"units",void 0),r([d.property({type:s,json:{write:!0}})],t.prototype,"timeExtent",void 0),r([d.property({readOnly:!0})],t.prototype,"enabled",void 0),t=a=r([d.subclass("esri.views.layers.support.FeatureFilter")],t)}(d.declared(p.JSONSupport))}));