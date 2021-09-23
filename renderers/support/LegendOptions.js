/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,s,n,p,i,c){"use strict";var u;e.LegendOptions=u=function(e){function t(){var r;return(r=e.apply(this,arguments)||this).title=null,r}return r._inheritsLoose(t,e),t.prototype.clone=function(){return new u({title:this.title})},t}(o.JSONSupport),t.__decorate([s.property({type:String,json:{write:!0}})],e.LegendOptions.prototype,"title",void 0),e.LegendOptions=u=t.__decorate([c.subclass("esri.renderers.support.LegendOptions")],e.LegendOptions);var l=e.LegendOptions;e.default=l,Object.defineProperty(e,"__esModule",{value:!0})}));
