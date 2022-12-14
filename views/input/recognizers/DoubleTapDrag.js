/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{clock as t}from"../../../core/clock.js";import{someMap as e}from"../../../core/MapUtils.js";import{createScreenPoint as i}from"../../../core/screenUtils.js";import{DragEventSeparator as a}from"../DragEventSeparator.js";import{InputHandler as o}from"../InputHandler.js";import{DefaultParameters as r}from"./SingleAndDoubleClick.js";import{manhattanDistance as n}from"./support.js";class s extends o{constructor(e=r.maximumDoubleClickDelay,o=r.maximumDoubleClickDistance,n=r.maximumDoubleTouchDelay,s=r.maximumDoubleTouchDistance,u=t){super(!1),this.maximumDoubleClickDelay=e,this.maximumDoubleClickDistance=o,this.maximumDoubleTouchDelay=n,this.maximumDoubleTouchDistance=s,this._clock=u,this._doubleTapDragReady=!1,this._doubleTapDragActive=!1,this._dragStartCenter=i(0,0),this._pointerState=new Map,this._doubleTapDrag=this.registerOutgoing("double-tap-drag"),this._dragEventSeparator=new a({start:(t,e)=>this._dragStart(t,e),update:(t,e)=>this._dragUpdate(e),end:(t,e)=>this._dragEnd(e)}),this.registerIncoming("drag",(t=>this._dragEventSeparator.handle(t))),this.registerIncoming("pointer-down",(t=>this._handlePointerDown(t))),this.registerIncoming("pointer-up",(()=>this._handlePointerUp()))}onUninstall(){this._pointerState.forEach((t=>{null!=t.doubleTapTimeout&&(t.doubleTapTimeout.remove(),t.doubleTapTimeout=null)}))}get hasPendingInputs(){return e(this._pointerState,(t=>null!=t.doubleTapTimeout))}_clearPointerDown(t){const e=this._pointerState.get(t);e&&(e.doubleTapTimeout.remove(),e.doubleTapTimeout=null,this._pointerState.delete(t),this.refreshHasPendingInputs())}_createDoubleTapDragData(t,e,i){const{button:a,buttons:o,pointer:r,pointers:n,pointerType:s,timestamp:u}=i;return{action:t,delta:e,button:a,buttons:o,pointer:r,pointers:n,pointerType:s,timestamp:u}}_dragStart(t,e){if(!this._doubleTapDragReady||1!==t)return;this._doubleTapDragReady=!1,this._doubleTapDragActive=!0;const{data:a,modifiers:o}=e,{center:r}=a;this._dragStartCenter=r;const n=this._createDoubleTapDragData("begin",i(0,0),a);this._doubleTapDrag.emit(n,void 0,o),e.stopPropagation()}_dragUpdate(t){if(!this._doubleTapDragActive)return;const{data:e,modifiers:a}=t,{center:o}=e,r=i(o.x-this._dragStartCenter.x,o.y-this._dragStartCenter.y),n=this._createDoubleTapDragData("update",r,e);this._doubleTapDrag.emit(n,void 0,a),t.stopPropagation()}_dragEnd(t){if(!this._doubleTapDragActive)return;const{data:e,modifiers:a}=t,{center:o}=e,r=i(o.x-this._dragStartCenter.x,o.y-this._dragStartCenter.y),n=this._createDoubleTapDragData("end",r,e);this._doubleTapDrag.emit(n,void 0,a),this._doubleTapDragActive=!1,t.stopPropagation()}_handlePointerDown(t){const{data:e}=t,i=this._pointerId(e),a=this._pointerState.get(i),{pointerType:o}=e.native;if(a){const r="touch"===o?this.maximumDoubleTouchDistance:this.maximumDoubleClickDistance;this._clearPointerDown(i),n(a.event.data,e)>r?this._storePointerDown(t):this._doubleTapDragReady=!0}else this._storePointerDown(t)}_handlePointerUp(){this._doubleTapDragReady=!1}_pointerId(t){const{native:e}=t,{pointerId:i,button:a,pointerType:o}=e;return"mouse"===o?`${i}:${a}`:`${o}`}_storePointerDown(t){const{data:e}=t,{pointerType:i}=e.native,a=this._pointerId(e),o="touch"===i?this.maximumDoubleTouchDelay:this.maximumDoubleClickDelay,r=this._clock.setTimeout((()=>this._clearPointerDown(a)),o);this._pointerState.set(a,{event:t,doubleTapTimeout:r}),this.refreshHasPendingInputs()}}export{s as DoubleTapDrag};