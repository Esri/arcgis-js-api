// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/assignHelper","@dojo/framework/shim/array","@dojo/framework/shim/Set","../../../geometry","../../../TimeExtent","../../../core/jsonMap","../../../core/JSONSupport","../../../core/lang","../../../core/accessorSupport/decorators","../../../geometry/support/jsonUtils","../../../tasks/support/Query"],function(e,t,r,i,o,n,s,a,p,l,d,c,u,y,h){var w=new l.default({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),m=new l.default({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});return function(e){function t(t){var r=e.call(this,t)||this;return r.where=null,r.geometry=null,r.spatialRelationship="intersects",r.hiddenIds=new s.default,r.distance=void 0,r.objectIds=null,r.units=null,r.timeExtent=null,r.enabled=!1,r}i(t,e),l=t,t.prototype.writeWhere=function(e,t,r){t.where=e||"1=1"},t.prototype.enable=function(){this._set("enabled",!0)},t.prototype.createQuery=function(e){void 0===e&&(e={});var t=this,r=t.where,i=t.geometry,n=t.spatialRelationship,s=t.timeExtent,a=t.objectIds,p=t.units,l=t.distance;return new h(o({geometry:c.clone(i),objectIds:c.clone(a),spatialRelationship:n,timeExtent:c.clone(s),where:r,units:p,distance:l},e))},t.prototype.clone=function(){var e=this,t=e.where,r=e.geometry,i=e.spatialRelationship,o=e.hiddenIds,n=e.timeExtent,a=e.objectIds,p=e.units,d=e.distance,u=new s.default;return o.forEach(function(e){return u.add(e)}),new l({geometry:c.clone(r),hiddenIds:u,objectIds:c.clone(a),spatialRelationship:i,timeExtent:c.clone(n),where:t,units:p,distance:d})};var l;return r([u.property({type:String})],t.prototype,"where",void 0),r([u.writer("where")],t.prototype,"writeWhere",null),r([u.property({types:a.geometryTypes,json:{read:y.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r([u.property({type:String,json:{read:{source:"spatialRel",reader:w.read},write:{target:"spatialRel",writer:w.write}}})],t.prototype,"spatialRelationship",void 0),r([u.property({json:{write:function(e,t,r){return t[r]=n.from(e)},read:function(e,t){return new s.default(e)}}})],t.prototype,"hiddenIds",void 0),r([u.property({type:Number,json:{write:{overridePolicy:function(e){return{enabled:e>0}}}}})],t.prototype,"distance",void 0),r([u.property({type:[Number],json:{write:!0}})],t.prototype,"objectIds",void 0),r([u.property({type:String,json:{read:m.read,write:{writer:m.write,overridePolicy:function(e){return{enabled:e&&this.distance>0}}}}})],t.prototype,"units",void 0),r([u.property({type:p,json:{write:!0}})],t.prototype,"timeExtent",void 0),r([u.property({readOnly:!0})],t.prototype,"enabled",void 0),t=l=r([u.subclass("esri.views.layers.support.FeatureFilter")],t)}(u.declared(d))});