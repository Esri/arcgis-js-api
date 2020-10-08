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

define(["require","exports","tslib","../core/Error","../core/maybe","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/accessorSupport/decorators","./Layer","./mixins/ImageryTileMixin","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./support/commonProperties","./support/Field","./support/rasterDatasets/WCSRaster","../support/popupUtils"],(function(e,r,t,o,a,i,p,n,s,l,u,c,d,y,m,f,_,g){"use strict";return function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var o=e.apply(this,r)||this;return o.coverageId=null,o.customParameters=null,o.version=null,o.isReference=null,o.type="wcs",o.popupEnabled=!0,o.popupTemplate=null,o}return t.__extends(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t.__assign({url:e},r):e},r.prototype.load=function(e){var r=a.isSome(e)?e.signal:null;return this.addResolvingPromise(this._openRaster(r)),p.resolve(this)},Object.defineProperty(r.prototype,"defaultPopupTemplate",{get:function(){return this.createPopupTemplate()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fields",{get:function(){return[new f({name:"Raster.ServicePixelValue",alias:"Pixel Value",domain:null,editable:!1,length:50,type:"string"})]},enumerable:!1,configurable:!0}),r.prototype.createPopupTemplate=function(e){return g.createPopupTemplate(this,e)},r.prototype._openRaster=function(e){return t.__awaiter(this,void 0,void 0,(function(){var r;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,(r=new _({url:this.url,version:this.version,coverageId:this.coverageId,ioConfig:{sampling:"closest",customFetchParameters:this.customParameters}})).open({signal:e})];case 1:if(t.sent(),!r.rasterInfo)throw r.destroy(),new o("wcs-layer:load","cannot load resources on "+this.url);return null==this.title&&this.setAtOrigin("title",this.raster.datasetName,"service"),this.raster=r,this._configDefaultSettings(),[2]}}))}))},t.__decorate([n.property()],r.prototype,"coverageId",void 0),t.__decorate([n.property({json:{type:Object,write:!0}})],r.prototype,"customParameters",void 0),t.__decorate([n.property()],r.prototype,"version",void 0),t.__decorate([n.property()],r.prototype,"isReference",void 0),t.__decorate([n.property({readOnly:!0})],r.prototype,"type",void 0),t.__decorate([n.property(m.popupEnabled)],r.prototype,"popupEnabled",void 0),t.__decorate([n.property()],r.prototype,"popupTemplate",void 0),t.__decorate([n.property({readOnly:!0,dependsOn:["title"]})],r.prototype,"defaultPopupTemplate",null),t.__decorate([n.property({readOnly:!0,dependsOn:["rasterInfo"]})],r.prototype,"fields",null),r=t.__decorate([n.subclass("esri.layers.WCSLayer")],r)}(y.ScaleRangeLayer(d.RefreshableLayer(u.OperationalLayer(c.PortalLayer(l.ImageryTileMixin(i.MultiOriginJSONMixin(s)))))))}));