/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/JSONSupport","../core/accessorSupport/decorators/property","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass"],(function(e,o,t,r,n,s,a,i,c,p){"use strict";var u;e.NavigationConstraint=u=function(e){function t(o){var t;return(t=e.call(this,o)||this).type="none",t}return o._inheritsLoose(t,e),t.prototype.clone=function(){return new u({type:this.type})},t}(r.JSONSupport),t.__decorate([c.enumeration({none:"none",stayAbove:"stay-above"})],e.NavigationConstraint.prototype,"type",void 0),e.NavigationConstraint=u=t.__decorate([p.subclass("esri.ground.NavigationConstraint")],e.NavigationConstraint),Object.defineProperty(e,"__esModule",{value:!0})}));
