/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Viewpoint","../../../core/Accessor","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../../../geometry/Point","../viewpointUtils","./ZoomBox","./actions/Pan","./actions/Pinch","./actions/Rotate"],(function(t,n,i,o,e,s,a,r,c,u,p,h,l,m,v){"use strict";const _=10,w=1,d=new i({targetGeometry:new u}),f=[0,0],y=250;let g=function(n){function i(t){var i;return(i=n.call(this,t)||this)._endTimer=null,i.animationManager=null,i}t._inheritsLoose(i,n);var o=i.prototype;return o.initialize=function(){this.pan=new l({navigation:this}),this.rotate=new v({navigation:this}),this.pinch=new m({navigation:this}),this.zoomBox=new h({view:this.view,navigation:this})},o.destroy=function(){this.zoomBox.destroy(),this.zoomBox=null,this.animationManager=null},o.begin=function(){this._set("interacting",!0)},o.end=function(){this._lastEventTimestamp=performance.now(),this._startTimer(y)},o.zoom=function(){var n=t._asyncToGenerator((function*(t,n=this._getDefaultAnchor()){if(this.stop(),this.begin(),this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs)return t<1?this.zoomIn(n):this.zoomOut(n);this.setViewpoint(n,t,0,[0,0])}));function i(t){return n.apply(this,arguments)}return i}(),o.zoomIn=function(){var n=t._asyncToGenerator((function*(t){const n=this.view,i=n.constraints.snapToNextScale(n.scale);return this._zoomToScale(i,t)}));function i(t){return n.apply(this,arguments)}return i}(),o.zoomOut=function(){var n=t._asyncToGenerator((function*(t){const n=this.view,i=n.constraints.snapToPreviousScale(n.scale);return this._zoomToScale(i,t)}));function i(t){return n.apply(this,arguments)}return i}(),o.setViewpoint=function(t,n,i,o){this.begin(),this.view.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,t,n,i,o),this.end()},o.setViewpointImmediate=function(t,n=0,i=[0,0],o=this._getDefaultAnchor()){this.view.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,o,t,n,i)},o.continousRotateClockwise=function(){const t=this.get("view.viewpoint");this.animationManager.animateContinous(t,(t=>{p.rotateBy(t,t,-w)}))},o.continousRotateCounterclockwise=function(){const t=this.get("view.viewpoint");this.animationManager.animateContinous(t,(t=>{p.rotateBy(t,t,w)}))},o.resetRotation=function(){this.view.rotation=0},o.continousPanLeft=function(){this._continuousPan([-_,0])},o.continousPanRight=function(){this._continuousPan([_,0])},o.continousPanUp=function(){this._continuousPan([0,_])},o.continousPanDown=function(){this._continuousPan([0,-_])},o.stop=function(){this.pan.stopMomentumNavigation(),this.animationManager.stop(),this.end(),null!==this._endTimer&&(clearTimeout(this._endTimer),this._endTimer=null,this._set("interacting",!1))},o._continuousPan=function(t){const n=this.get("view.viewpoint");this.animationManager.animateContinous(n,(n=>{p.translateBy(n,n,t),this.view.constraints.constrainByGeometry(n)}))},o._startTimer=function(t){return null!==this._endTimer||(this._endTimer=setTimeout((()=>{this._endTimer=null;const t=performance.now()-this._lastEventTimestamp;t<y?this._endTimer=this._startTimer(t):this._set("interacting",!1)}),t)),this._endTimer},o._getDefaultAnchor=function(){const{size:t,padding:{left:n,right:i,top:o,bottom:e}}=this.view;return f[0]=.5*(t[0]-i+n),f[1]=.5*(t[1]-e+o),f},o._zoomToScale=function(){var n=t._asyncToGenerator((function*(t,n=this._getDefaultAnchor()){const{view:i}=this,{constraints:o,scale:e,viewpoint:s,size:a,padding:r}=i,c=o.canZoomInTo(t),u=o.canZoomOutTo(t);if(!(t<e&&!c||t>e&&!u))return p.padAndScaleAndRotateBy(d,s,t/e,0,n,a,r),o.constrainByGeometry(d),i.goTo(d,{animate:!0})}));function i(t){return n.apply(this,arguments)}return i}(),o._scaleRotateTranslateViewpoint=function(t,n,i,o,e){const{view:s}=this,{size:a,padding:r,constraints:c,scale:u,viewpoint:h}=s,l=u*i,m=c.canZoomInTo(l),v=c.canZoomOutTo(l);return(i<1&&!m||i>1&&!v)&&(i=1),p.translateBy(h,h,e),p.padAndScaleAndRotateBy(t,h,i,o,n,a,r),c.constrainByGeometry(t)},i}(o);return n.__decorate([e.property()],g.prototype,"animationManager",void 0),n.__decorate([e.property({type:Boolean,readOnly:!0})],g.prototype,"interacting",void 0),n.__decorate([e.property()],g.prototype,"pan",void 0),n.__decorate([e.property()],g.prototype,"pinch",void 0),n.__decorate([e.property()],g.prototype,"rotate",void 0),n.__decorate([e.property()],g.prototype,"view",void 0),n.__decorate([e.property()],g.prototype,"zoomBox",void 0),g=n.__decorate([c.subclass("esri.views.2d.navigation.MapViewNavigation")],g),g}));
