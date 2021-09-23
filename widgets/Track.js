/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/accessorSupport/decorators/aliasOf","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","./Widget","./support/decorators/accessibleHandler","./support/decorators/messageBundle","./support/decorators/vmEvent","./support/jsxFactory","./support/widgetUtils","./Track/TrackViewModel"],(function(e,o,t,i,a,r,s,n,c,l,d,p,g,u,v){"use strict";const _={base:"esri-track esri-widget--button esri-widget",text:"esri-icon-font-fallback-text",icon:"esri-icon",loading:"esri-icon-loading-indicator",rotating:"esri-rotating",startTrackingIcon:"esri-icon-tracking",stopTrackingIcon:"esri-icon-pause",widgetIcon:"esri-icon-tracking",disabled:"esri-disabled",hidden:"esri-hidden"};let w=function(o){function t(e,t){var i;return(i=o.call(this,e,t)||this).geolocationOptions=null,i.goToLocationEnabled=null,i.goToOverride=null,i.graphic=null,i.iconClass=_.widgetIcon,i.label=void 0,i.messages=null,i.scale=null,i.tracking=null,i.useHeadingEnabled=null,i.view=null,i.viewModel=new v,i}e._inheritsLoose(t,o);var i=t.prototype;return i.start=function(){},i.stop=function(){},i.render=function(){const e=this.get("viewModel.state"),o={[_.disabled]:"disabled"===e,[_.hidden]:"feature-unsupported"===e},t="tracking"===e,i={[_.startTrackingIcon]:!t&&"waiting"!==e,[_.stopTrackingIcon]:t,[_.rotating]:"waiting"===e,[_.loading]:"waiting"===e},{messages:a}=this,r=t?a.stopTracking:a.startTracking;return g.tsx("div",{bind:this,class:this.classes(_.base,o),hidden:"feature-unsupported"===e,onclick:this._toggleTracking,onkeydown:this._toggleTracking,role:"button",tabIndex:0,"aria-label":r,title:r},g.tsx("span",{"aria-hidden":"true",class:this.classes(_.icon,i)}),g.tsx("span",{class:_.text},r))},i._toggleTracking=function(){const e=this.viewModel;e&&"feature-unsupported"!==e.state&&"disabled"!==e.state&&("tracking"!==e.state&&"waiting"!==e.state?this.viewModel.start():this.viewModel.stop())},t}(c);return o.__decorate([t.aliasOf("viewModel.geolocationOptions")],w.prototype,"geolocationOptions",void 0),o.__decorate([t.aliasOf("viewModel.goToLocationEnabled")],w.prototype,"goToLocationEnabled",void 0),o.__decorate([t.aliasOf("viewModel.goToOverride")],w.prototype,"goToOverride",void 0),o.__decorate([t.aliasOf("viewModel.graphic")],w.prototype,"graphic",void 0),o.__decorate([s.property()],w.prototype,"iconClass",void 0),o.__decorate([s.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],w.prototype,"label",void 0),o.__decorate([s.property(),d.messageBundle("esri/widgets/Track/t9n/Track")],w.prototype,"messages",void 0),o.__decorate([t.aliasOf("viewModel.scale")],w.prototype,"scale",void 0),o.__decorate([t.aliasOf("viewModel.tracking")],w.prototype,"tracking",void 0),o.__decorate([t.aliasOf("viewModel.useHeadingEnabled")],w.prototype,"useHeadingEnabled",void 0),o.__decorate([t.aliasOf("viewModel.view")],w.prototype,"view",void 0),o.__decorate([s.property({type:v}),p.vmEvent(["track","track-error"])],w.prototype,"viewModel",void 0),o.__decorate([t.aliasOf("viewModel.start")],w.prototype,"start",null),o.__decorate([t.aliasOf("viewModel.stop")],w.prototype,"stop",null),o.__decorate([l.accessibleHandler()],w.prototype,"_toggleTracking",null),w=o.__decorate([n.subclass("esri.widgets.Track")],w),w}));
