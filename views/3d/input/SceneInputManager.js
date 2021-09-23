/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/Handles","../../../core/watchUtils","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","./handlers/DoubleClickZoom","./handlers/DragRotate","./handlers/DragZoom","./handlers/GamepadNavigation","./handlers/KeyboardNavigation","./handlers/MouseWheelZoom","./handlers/PinchAndPanNavigation","./handlers/PointerDownCancelAnimation","./handlers/SingleKeyResetHeading","./handlers/SingleKeyResetTilt","./handlers/TwoFingerTilt","../../input/BrowserEventSource","../../input/InputManager","../../input/handlers/PreventContextMenu","../../input/recognizers/Drag","../../input/recognizers/ImmediateDoubleClick","../../input/recognizers/PointerClickHoldAndDrag","../../input/recognizers/SingleAndDoubleClick","../../input/recognizers/VerticalTwoFingerDrag"],(function(e,t,n,o,r,a,i,s,d,c,p,l,g,u,h,m,_,w,y,D,v,A,P,f,M,b,k,R,T){"use strict";let z=function(t){function n(){var e;return(e=t.apply(this,arguments)||this)._handles=new o,e}e._inheritsLoose(n,t);var a=n.prototype;return a.destroy=function(){this._handles&&(this._handles.removeAll(),this._handles=null),this.disconnect()},a.disconnect=function(){this.view.viewEvents.disconnect(),this._inputManager&&(this._inputManager.destroy(),this._inputManager=null),this._source&&(this._source.destroy(),this._source=null)},a.connect=function(){const e=this.view;this._source=new A.BrowserEventSource(this.view.surface,e.input);const t=[new b.ImmediateDoubleClick,new k.PointerClickHoldAndDrag,new R.SingleAndDoubleClick,new M.Drag(this.view.navigation),new T.VerticalTwoFingerDrag],n=new P.InputManager({eventSource:this._source,recognizers:t});this._inputManager=n,n.installHandlers("prevent-context-menu",[new f.PreventContextMenu],P.ViewEventPriorities.INTERNAL),this._modeDragPan=new _.PinchAndPanNavigation(e,"primary"),this._modeDragRotate=new l.DragRotate(e,"secondary",0),this._modeDragZoom=new g.DragZoom(e,"tertiary");const o={lookAround:"b",pan:{left:"ArrowLeft",right:"ArrowRight",forward:"ArrowUp",backward:"ArrowDown",up:"u",down:"j",headingLeft:"a",headingRight:"d",tiltUp:"w",tiltDown:"s",zoomIn:"+",zoomOut:"-"},resetHeading:"n",resetTilt:"p"};n.installHandlers("navigation",[new w.PointerDownCancelAnimation(e),new p.DoubleClickZoom(e),new u.GamepadNavigation(e),new h.KeyboardNavigation(e,o.pan),new m.MouseWheelZoom(e),new D.SingleKeyResetTilt(e,o.resetTilt),new y.SingleKeyResetHeading(e,o.resetHeading),new l.DragRotate(e,"primary",1,[o.lookAround]),new l.DragRotate(e,"secondary",0,[o.lookAround]),new _.PinchAndPanNavigation(e,"tertiary",[o.lookAround]),this._modeDragRotate,this._modeDragZoom,this._modeDragPan,new v.TwoFingerTilt(e)],P.ViewEventPriorities.INTERNAL),this.view.viewEvents.connect(n),this._updateMode(),r.init(this.view.navigation,"browserTouchPanEnabled",(e=>{this._source.browserTouchPanningEnabled=!e}))},a._updateMode=function(){const e=this.mode,t=this.primaryDragAction,n=C.get(e).get(t);this._modeDragPan&&(this._modeDragPan.pointerAction=n.pan),this._modeDragRotate&&(this._modeDragRotate.pointerAction=n.rotate),this._modeDragZoom&&(this._modeDragZoom.pointerAction=n.zoom)},e._createClass(n,[{key:"primaryDragAction",get:function(){return this._get("primaryDragAction")},set:function(e){"pan"!==e&&"rotate"!==e||e===this._get("primaryDragAction")||(this._set("primaryDragAction",e),this._updateMode())}},{key:"mode",get:function(){return this._get("mode")},set:function(e){"default"!==e&&"pro"!==e||e===this._get("mode")||(this._set("mode",e),this._updateMode())}},{key:"test",get:function(){return{inputManager:this._inputManager,modeDragPan:this._modeDragPan,modeDragRotate:this._modeDragRotate,modeDragZoom:this._modeDragZoom}}}]),n}(n);t.__decorate([a.property()],z.prototype,"view",void 0),t.__decorate([a.property({value:"pan"})],z.prototype,"primaryDragAction",null),t.__decorate([a.property({value:"default"})],z.prototype,"mode",null),t.__decorate([a.property({readOnly:!0,aliasOf:"_inputManager.hasPendingInputs"})],z.prototype,"hasPendingInputs",void 0),t.__decorate([a.property({readOnly:!0,aliasOf:"_inputManager.latestPointerType"})],z.prototype,"latestPointerType",void 0),t.__decorate([a.property()],z.prototype,"_inputManager",void 0),z=t.__decorate([c.subclass("esri.views.3d.input.SceneInputManager")],z);const C=new Map,S=new Map,Z=new Map;return S.set("pan",{pan:"primary",rotate:"secondary",zoom:"tertiary"}),S.set("rotate",{pan:"secondary",rotate:"primary",zoom:"tertiary"}),Z.set("pan",{pan:"primary",rotate:"tertiary",zoom:"secondary"}),Z.set("rotate",{pan:"tertiary",rotate:"primary",zoom:"secondary"}),C.set("default",S),C.set("pro",Z),z}));
