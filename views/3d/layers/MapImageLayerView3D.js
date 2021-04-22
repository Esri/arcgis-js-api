/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../support/drapedUtils","../../layers/MapImageLayerView","./DynamicLayerView3D"],(function(e,r,t,s,i,o,a,n,u,c,p,l,d){"use strict";let h=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).updateWhenStationary=!0,e}e._inheritsLoose(t,r);var s=t.prototype;return s.initialize=function(){this.updatingHandles.add(this,"exportImageVersion",(()=>this.updatingHandles.addPromise(this.refreshDebounced())))},s.createFetchPopupFeaturesQueryGeometry=function(e,r){return p.createQueryGeometry(e,r,this.view)},s.getFetchOptions=function(){return{timeExtent:this.timeExtent,timestamp:this.refreshTimestamp}},t}(l.MapImageLayerView(d));return h=r.__decorate([a.subclass("esri.views.3d.layers.MapImageLayerView3D")],h),h}));
