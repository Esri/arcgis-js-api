/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/maybe","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/aliasOf","../core/accessorSupport/decorators/subclass","../core/Error","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","./Layer","../core/MultiOriginJSONSupport","./support/commonProperties","./mixins/OperationalLayer","./support/Field","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","../support/popupUtils","./mixins/ImageryTileMixin","./support/rasterDatasets/WCSRaster"],(function(e,r,t,o,a,s,i,p,n,l,c,u,d,y,g,m,f,v,h,_,P,O,S,I){"use strict";let b=function(r){function t(...e){var t;return(t=r.call(this,...e)||this).coverageId=null,t.coverageInfo=null,t.customParameters=null,t.version=null,t.isReference=null,t.type="wcs",t.popupEnabled=!0,t.popupTemplate=null,t}e._inheritsLoose(t,r);var a=t.prototype;return a.normalizeCtorArgs=function(e,r){return"string"==typeof e?{url:e,...r}:e},a.load=function(e){const r=o.isSome(e)?e.signal:null;return this.addResolvingPromise(this._openRaster(r)),Promise.resolve(this)},a.createPopupTemplate=function(e){return O.createPopupTemplate(this,e)},a._openRaster=async function(e){const r=new I({url:this.url,version:this.version,coverageId:this.coverageId,ioConfig:{...this.ioConfig,sampling:"closest",customFetchParameters:this.customParameters}});if(await r.open({signal:e}),!r.rasterInfo)throw r.destroy(),new l("wcs-layer:load","cannot load resources on "+this.url);null==this.title&&this.setAtOrigin("title",r.datasetName,"service"),null==this.coverageId&&this.setAtOrigin("coverageId",r.coverageInfo.id,"service"),this.raster=r,this._configDefaultSettings()},e._createClass(t,[{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"fields",get:function(){return[new v({name:"Raster.ServicePixelValue",alias:"Pixel Value",domain:null,editable:!1,length:50,type:"string"})]}}]),t}(P.ScaleRangeLayer(_.RefreshableLayer(f.OperationalLayer(h.PortalLayer(S.ImageryTileMixin(g.MultiOriginJSONMixin(y)))))));return r.__decorate([i.property({json:{write:!0}})],b.prototype,"coverageId",void 0),r.__decorate([i.property({readOnly:!0}),p.aliasOf("raster.coverageInfo")],b.prototype,"coverageInfo",void 0),r.__decorate([i.property({json:{type:Object,write:!0}})],b.prototype,"customParameters",void 0),r.__decorate([i.property()],b.prototype,"version",void 0),r.__decorate([i.property()],b.prototype,"isReference",void 0),r.__decorate([i.property({readOnly:!0})],b.prototype,"type",void 0),r.__decorate([i.property(m.popupEnabled)],b.prototype,"popupEnabled",void 0),r.__decorate([i.property()],b.prototype,"popupTemplate",void 0),r.__decorate([i.property({readOnly:!0})],b.prototype,"defaultPopupTemplate",null),r.__decorate([i.property({readOnly:!0})],b.prototype,"fields",null),b=r.__decorate([n.subclass("esri.layers.WCSLayer")],b),b}));
