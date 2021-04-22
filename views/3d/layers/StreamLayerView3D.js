/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/maybe","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/Error","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../tasks/support/Query","./LayerView3D","../../layers/LayerView","../../layers/StreamLayerView","../../../layers/graphics/controllers/StreamController","./FeatureLikeLayerView3D"],(function(e,r,t,o,s,a,n,c,i,p,u,l,y,d,h,_,w,L){"use strict";let f=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).asyncGraphicsUpdates=!0,e.hasZ=!0,e.hasM=!1,e}e._inheritsLoose(t,r);var s=t.prototype;return s.createQuery=function(){return new y({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})},s.queryLatestObservations=function(e,r){return this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(e),o.get(r,"signal"))},s.createController=function(){return new w({layer:this.layer,layerView:this})},s.beforeSetController=function(){},e._createClass(t,[{key:"connectionError",get:function(){const e=this.get("controller.connection.errorString");if(e)return new i("stream-controller",e)}}]),t}(_.StreamLayerView(L.FeatureLikeLayerView3D(d.LayerView3D(h))));return r.__decorate([n.property({readOnly:!0})],f.prototype,"asyncGraphicsUpdates",void 0),r.__decorate([n.property({readOnly:!0})],f.prototype,"connectionError",null),r.__decorate([n.property()],f.prototype,"controller",void 0),r.__decorate([n.property({readOnly:!0})],f.prototype,"hasZ",void 0),r.__decorate([n.property({readOnly:!0})],f.prototype,"hasM",void 0),f=r.__decorate([c.subclass("esri.views.3d.layers.StreamLayerView3D")],f),f}));
