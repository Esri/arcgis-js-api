/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../core/maybe","../../../core/Logger","../../../core/Error","../../../geometry/support/boundsUtils","../../../geometry/support/aaBoundingRect","../../../tasks/support/Query","./utils","./spatialQuerySupport","./timeSupport","../../../views/2d/layers/features/FeatureStore2D","../../../views/2d/layers/features/support/whereUtils"],(function(e,t,i,s,r,o,n,a,h,l,u,c){"use strict";const d=i.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),_=1,f=2;return function(){function i(e){this._geometryBounds=o.create(),this._idToVisibility=new Map,this._serviceInfo=e}var y=i.prototype;return y.check=function(e){return this._applyFilter(e)},y.clear=function(){const e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}},y.invalidate=function(){this._idToVisibility.forEach(((e,t)=>{this._idToVisibility.set(t,0)}))},y.setKnownIds=function(e){for(const t of e)this._idToVisibility.set(t,_)},y.setTrue=function(e){const t=[],i=[],s=new Set(e);return this._idToVisibility.forEach(((e,r)=>{const o=!!(this._idToVisibility.get(r)&_),n=s.has(r);!o&&n?t.push(r):o&&!n&&i.push(r),this._idToVisibility.set(r,n?_|f:0)})),{show:t,hide:i}},y.createQuery=function(){const{geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:r}=this;return n.fromJSON({geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:r})},y.update=async function(e,t){this._hash=JSON.stringify(e);const i=await a.normalizeQueryLike(e,null,t);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])},y._setAttributeFilter=async function(e){if(!e||!e.where)return this._clause=null,void(this.where=null);this._clause=await c.createWhereClause(e.where,this._serviceInfo.fieldsIndex),this.where=e.where},y._setIdFilter=function(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds},y._setGeometryFilter=async function(e){if(!e||!e.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const t=e.geometry,i=e.spatialRel||"esriSpatialRelIntersects",s=await h.getSpatialQueryOperator(i,t,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);r.getBoundsXY(this._geometryBounds,t),this._spatialQueryOperator=s,this.geometry=t,this.spatialRel=i},y._setTimeFilter=function(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=l.getTimeOperator(this._serviceInfo.timeInfo,e.timeExtent,u.featureAdapter);else{const t=new s("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);d.error(t)}},y._applyFilter=function(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)},y._filterByExpression=function(e){return!this.where||this._clause(e)},y._filterById=function(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))},y._filterByGeometry=function(e){if(!this.geometry)return!0;const t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)},y._filterByTime=function(e){return!t.isSome(this._timeOperator)||this._timeOperator(e)},y._resetAllHiddenIds=function(){const e=[];return this._idToVisibility.forEach(((t,i)=>{t&_||(this._idToVisibility.set(i,_),e.push(i))})),e},e._createClass(i,[{key:"hash",get:function(){return this._hash}}]),i}()}));
