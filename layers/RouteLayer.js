/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Collection","../core/MultiOriginJSONSupport","../core/accessorSupport/decorators/property","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","./FeatureLayer","./Layer","./mixins/OperationalLayer","./mixins/PortalLayer"],(function(e,t,r,o,n,a,i,l,s,u,c,p,y,d){"use strict";let f=function(t){function r(...e){var r;return(r=t.call(this,...e)||this).type="route",r}e._inheritsLoose(r,t);var o=r.prototype;return o.readFeatureCollectionsFromItem=function(e,t,r){return this.revert("featureCollections","portal-item"),t.layers.map((e=>{const t=new c;return t.read(e,r),t}))},o.readFeatureCollectionsFromWebMap=function(e,t,r){return t.featureCollection.layers.map((e=>{const t=new c;return t.read(e,r),t}))},o.load=function(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)},o._getNamedFeatureLayer=function(e){if(this.featureCollections)return this.featureCollections.find((t=>t.title===e))},e._createClass(r,[{key:"barrierLines",get:function(){return this._getNamedFeatureLayer("PolylineBarriers")}},{key:"barrierPoints",get:function(){return this._getNamedFeatureLayer("Barriers")}},{key:"barrierPolygons",get:function(){return this._getNamedFeatureLayer("PolygonBarriers")}},{key:"directionLines",get:function(){return this._getNamedFeatureLayer("DirectionLines")}},{key:"directionPoints",get:function(){return this._getNamedFeatureLayer("DirectionPoints")}},{key:"fullExtent",get:function(){const e=null;return this.featureCollections?this.featureCollections.reduce(((e,t)=>e?e.union(t.fullExtent):t.fullExtent),e):e}},{key:"maxScale",get:function(){const e=null;return this.featureCollections?this.featureCollections.reduce(((e,t)=>null==e?t.maxScale:Math.min(e,t.maxScale)),e):0},set:function(e){this.featureCollections.forEach((t=>{t.maxScale=e})),this._set("maxScale",e)}},{key:"minScale",get:function(){const e=null;return this.featureCollections?this.featureCollections.reduce(((e,t)=>null==e?t.minScale:Math.min(e,t.minScale)),e):0},set:function(e){this.featureCollections.forEach((t=>{t.minScale=e})),this._set("minScale",e)}},{key:"routeInfo",get:function(){return this._getNamedFeatureLayer("RouteInfo")}},{key:"stops",get:function(){return this._getNamedFeatureLayer("Stops")}}]),r}(y.OperationalLayer(d.PortalLayer(o.MultiOriginJSONMixin(p))));return t.__decorate([n.property()],f.prototype,"barrierLines",null),t.__decorate([n.property()],f.prototype,"barrierPoints",null),t.__decorate([n.property()],f.prototype,"barrierPolygons",null),t.__decorate([n.property()],f.prototype,"directionLines",null),t.__decorate([n.property()],f.prototype,"directionPoints",null),t.__decorate([n.property({type:r.ofType(c)})],f.prototype,"featureCollections",void 0),t.__decorate([s.reader("portal-item","featureCollections",["layers"])],f.prototype,"readFeatureCollectionsFromItem",null),t.__decorate([s.reader("web-map","featureCollections",["featureCollection.layers"])],f.prototype,"readFeatureCollectionsFromWebMap",null),t.__decorate([n.property({readOnly:!0})],f.prototype,"fullExtent",null),t.__decorate([n.property({type:["show","hide"]})],f.prototype,"listMode",void 0),t.__decorate([n.property()],f.prototype,"maxScale",null),t.__decorate([n.property()],f.prototype,"minScale",null),t.__decorate([n.property()],f.prototype,"routeInfo",null),t.__decorate([n.property()],f.prototype,"stops",null),t.__decorate([n.property({readOnly:!0,json:{read:!1}})],f.prototype,"type",void 0),f=t.__decorate([u.subclass("esri.layers.RouteLayer")],f),f}));
