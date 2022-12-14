/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import r from"../../../core/Collection.js";import{isSome as t}from"../../../core/maybe.js";import{property as o}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";import i from"../../LayerList/ListItem.js";import{canDisplayLayer as p}from"../../LayerList/support/layerListUtils.js";import{isValidSnappingLayer as a}from"./snappingLayerListUtils.js";var n;let c=n=class extends i{constructor(e){super(e),this.children=new r}get enabled(){return!!t(this.featureSource)&&this.featureSource.enabled}get featureSource(){const{layer:e,getFeatureSnappingSources:r}=this;return r().find((r=>r.layer===e))}_initializeChildLayers(e){const r=e.filter(a);super._initializeChildLayers(r)}_makeChildren(e){return e.map((e=>p(e)?new n({layer:e,parent:this,view:this.view,getFeatureSnappingSources:this.getFeatureSnappingSources}):null)).reverse()}};e([o()],c.prototype,"children",void 0),e([o()],c.prototype,"enabled",null),e([o({constructOnly:!0})],c.prototype,"getFeatureSnappingSources",void 0),e([o()],c.prototype,"featureSource",null),e([o()],c.prototype,"parent",void 0),c=n=e([s("esri.widgets.support.SnappingControls.SnappingListItem")],c);export{c as SnappingListItem};