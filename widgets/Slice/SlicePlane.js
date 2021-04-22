/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/lang","../../core/maybe","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/cast","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/persistable","../../core/JSONSupport","../../geometry/Point","../../geometry","../../views/3d/support/mathUtils"],(function(e,t,o,r,i,s,p,n,a,c,l,h,u,d,y){"use strict";var g;let b=g=function(t){function o(e){var o;return(o=t.call(this,e)||this).type="plane",o.position=null,o.heading=0,o.tilt=0,o.width=10,o.height=10,o}e._inheritsLoose(o,t);var s=o.prototype;return s.clone=function(){return new g({position:r.clone(this.position),heading:this.heading,tilt:this.tilt,width:this.width,height:this.height})},s.equals=function(e){return this.heading===e.heading&&this.tilt===e.tilt&&i.isSome(this.position)&&i.isSome(e.position)&&this.position.equals(e.position)&&this.width===e.width&&this.height===e.height},o}(h.JSONSupport);return t.__decorate([n.property({readOnly:!0,json:{read:!1,write:!0}})],b.prototype,"type",void 0),t.__decorate([n.property({type:u}),l.persistable()],b.prototype,"position",void 0),t.__decorate([n.property({type:Number,nonNullable:!0,range:{min:0,max:360}}),l.persistable(),a.cast((e=>y.cyclicalDeg.normalize(p.ensureNumber(e),0,!0)))],b.prototype,"heading",void 0),t.__decorate([n.property({type:Number,nonNullable:!0,range:{min:0,max:360}}),l.persistable(),a.cast((e=>y.cyclicalDeg.normalize(p.ensureNumber(e),0,!0)))],b.prototype,"tilt",void 0),t.__decorate([n.property({type:Number,nonNullable:!0}),l.persistable()],b.prototype,"width",void 0),t.__decorate([n.property({type:Number,nonNullable:!0}),l.persistable()],b.prototype,"height",void 0),b=g=t.__decorate([c.subclass("esri.widgets.Slice.SlicePlane")],b),b}));
