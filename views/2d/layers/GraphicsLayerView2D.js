/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Graphic","../../../core/Collection","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","./LayerView2D","./graphics/GraphicContainer","./graphics/GraphicsView2D","../../layers/LayerView"],(function(e,i,r,t,s,a,n,c,h,o,p,u,l){"use strict";const g={remove(){},pause(){},resume(){}};let d=function(i){function s(){return i.apply(this,arguments)||this}e._inheritsLoose(s,i);var a=s.prototype;return a.initialize=function(){this.graphicsView=new u({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new p(this.view.featuresTilingScheme)})},a.attach=function(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")},a.detach=function(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")},a.hitTest=function(e,i){return this.suspended||!this.graphicsView?Promise.resolve(null):this.graphicsView.hitTest(e,i)},a.fetchPopupFeatures=function(){var i=e._asyncToGenerator((function*(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}));function r(e){return i.apply(this,arguments)}return r}(),a.update=function(e){this.graphicsView.processUpdate(e)},a.moveStart=function(){},a.viewChange=function(){this.graphicsView.viewChange()},a.moveEnd=function(){},a.isUpdating=function(){return!this.graphicsView||this.graphicsView.updating},a.highlight=function(e){let i;return"number"==typeof e?i=[e]:e instanceof r?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):t.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray()),i=i.filter((e=>null!=e)),i.length?(this.graphicsView.addHighlight(i),{remove:()=>this.graphicsView.removeHighlight(i)}):g},a.queryGraphics=function(){return Promise.resolve(this.graphicsView.graphics)},s}(o.LayerView2DMixin(l));return i.__decorate([s.property()],d.prototype,"graphicsView",void 0),i.__decorate([s.property()],d.prototype,"updating",void 0),d=i.__decorate([h.subclass("esri.views.2d.layers.GraphicsLayerView2D")],d),d}));
