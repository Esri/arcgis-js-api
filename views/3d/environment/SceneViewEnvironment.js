/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/lang","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/cast","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../webscene/Lighting","../../../webscene/Environment","./SceneViewAtmosphere","./SceneViewLighting"],(function(e,n,t,i,r,o,s,c,g,h,a,l,p,u,d,b){"use strict";var L;let m=L=function(n){function t(e){var t;return(t=n.call(this,e)||this).atmosphere=new d.default,t}e._inheritsLoose(t,n),t.fromWebsceneEnvironment=function(e){const n=e.cloneConstructProperties();return new L({...n,lighting:b.SceneViewLighting.fromWebsceneLighting(n.lighting)})};var r=t.prototype;return r.castLighting=function(e){return this.convertLighting(e)},r.applyLighting=function(e){this.lighting=this.convertLighting(e)},r.convertLighting=function(e){return e?e instanceof b.SceneViewLighting?e:e instanceof p?this.lighting?this.lighting.cloneWithWebsceneLighting(e):b.SceneViewLighting.fromWebsceneLighting(e):o.ensureType(b.SceneViewLighting,e):new b.SceneViewLighting},r.clone=function(){return new L({lighting:this.lighting.clone(),atmosphere:this.atmosphere.clone(),atmosphereEnabled:this.atmosphereEnabled,starsEnabled:this.starsEnabled,background:i.clone(this.background)})},r.cloneWithWebsceneEnvironment=function(e){return new L({atmosphere:this.atmosphere.clone(),atmosphereEnabled:this.atmosphereEnabled,starsEnabled:this.starsEnabled,background:i.clone(this.background),...e.cloneConstructProperties(),lighting:null!=this.lighting?this.lighting.cloneWithWebsceneLighting(e.lighting):b.SceneViewLighting.fromWebsceneLighting(e.lighting)})},t}(u);return n.__decorate([s.property({type:d.default,json:{read:!1}})],m.prototype,"atmosphere",void 0),n.__decorate([s.property()],m.prototype,"lighting",void 0),n.__decorate([c.cast("lighting")],m.prototype,"castLighting",null),m=L=n.__decorate([g.subclass("esri.views.3d.environment.SceneViewEnvironment")],m),m}));
