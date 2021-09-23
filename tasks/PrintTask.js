/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/jsonMap","../core/accessorSupport/decorators/property","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/subclass","../rest/print","./Task"],(function(e,t,r,o,s,a,n,p,c,u){"use strict";const i=new r.JSONMap({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"});let y=function(t){function r(...e){var r;return(r=t.call(this,...e)||this)._gpMetadata=null,r.updateDelay=1e3,r}e._inheritsLoose(r,t);var o=r.prototype;return o.execute=function(e,t){return e&&(e.updateDelay=this.updateDelay),c.execute(this.url,e,{...this.requestOptions,...t})},o._getGpPrintParams=function(){var t=e._asyncToGenerator((function*(e){const t=c.getGpServerUrl(this.url),r=c.printCacheMap.get(t);return c.getGpPrintParams(e,r)}));function r(e){return t.apply(this,arguments)}return r}(),e._createClass(r,[{key:"mode",get:function(){return this._gpMetadata&&this._gpMetadata.executionType?i.fromJSON(this._gpMetadata.executionType):"sync"}}]),r}(u);return t.__decorate([o.property()],y.prototype,"_gpMetadata",void 0),t.__decorate([o.property({readOnly:!0})],y.prototype,"mode",null),t.__decorate([o.property()],y.prototype,"updateDelay",void 0),y=t.__decorate([p.subclass("esri.tasks.PrintTask")],y),y}));
