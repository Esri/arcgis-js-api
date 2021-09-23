/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/lang","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/cast","../../../core/has","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../../../core/accessorSupport/ensureType","./Clouds","./SceneViewAtmosphere","./SceneViewLighting","../../../webscene/Environment","../../../webscene/Lighting"],(function(e,n,t,i,o,r,s,c,g,h,l,a,u,p){"use strict";var d;let b=d=function(n){function i(e){var t;return(t=n.call(this,e)||this).atmosphere=new l.default,t.clouds=null,t}e._inheritsLoose(i,n),i.fromWebsceneEnvironment=function(e){const n=e.cloneConstructProperties();return new d({...n,lighting:a.SceneViewLighting.fromWebsceneLighting(n.lighting)})};var o=i.prototype;return o.castLighting=function(e){return this.convertLighting(e)},o.applyLighting=function(e){this.lighting=this.convertLighting(e)},o.convertLighting=function(e){return e?e instanceof a.SceneViewLighting?e:e instanceof p?this.lighting?this.lighting.cloneWithWebsceneLighting(e):a.SceneViewLighting.fromWebsceneLighting(e):g.ensureType(a.SceneViewLighting,e):new a.SceneViewLighting},o.clone=function(){return new d({lighting:this.lighting.clone(),atmosphere:this.atmosphere.clone(),clouds:null===this.clouds?null:this.clouds.clone(),atmosphereEnabled:this.atmosphereEnabled,starsEnabled:this.starsEnabled,background:t.clone(this.background)})},o.cloneWithWebsceneEnvironment=function(e){return new d({atmosphere:this.atmosphere.clone(),clouds:null===this.clouds?null:this.clouds.clone(),atmosphereEnabled:this.atmosphereEnabled,starsEnabled:this.starsEnabled,background:t.clone(this.background),...e.cloneConstructProperties(),lighting:null!=this.lighting?this.lighting.cloneWithWebsceneLighting(e.lighting):a.SceneViewLighting.fromWebsceneLighting(e.lighting)})},i}(u);return n.__decorate([i.property({type:l.default,json:{read:!1}})],b.prototype,"atmosphere",void 0),n.__decorate([i.property({type:h,json:{write:!1}})],b.prototype,"clouds",void 0),n.__decorate([i.property()],b.prototype,"lighting",void 0),n.__decorate([o.cast("lighting")],b.prototype,"castLighting",null),b=d=n.__decorate([c.subclass("esri.views.3d.environment.SceneViewEnvironment")],b),b}));
