/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/maybe","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../../LayerList/ListItem","../../LayerList/support/layerListUtils","./snappingLayerListUtils"],(function(e,t,r,i,p,o,s,n,a,c,l,u){"use strict";var y;e.SnappingListItem=y=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).featureSource=null,t}t._inheritsLoose(r,e);var p=r.prototype;return p._initializeChildLayers=function(t){const r=t.filter(u.isValidSnappingLayer);e.prototype._initializeChildLayers.call(this,r)},p._makeChildren=function(e){return e.map((e=>l.canDisplayLayer(e)?new y({layer:e,parent:this,view:this.view}):null)).reverse()},t._createClass(r,[{key:"enabled",get:function(){return!!i.isSome(this.featureSource)&&this.featureSource.enabled}}]),r}(c),r.__decorate([p.property()],e.SnappingListItem.prototype,"children",void 0),r.__decorate([p.property()],e.SnappingListItem.prototype,"enabled",null),r.__decorate([p.property()],e.SnappingListItem.prototype,"featureSource",void 0),r.__decorate([p.property()],e.SnappingListItem.prototype,"parent",void 0),e.SnappingListItem=y=r.__decorate([a.subclass("esri.widgets.support.SnappingControls.SnappingListItem")],e.SnappingListItem),Object.defineProperty(e,"__esModule",{value:!0})}));
