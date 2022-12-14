/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{someMap as t}from"../../core/MapUtils.js";import{clamp as e}from"../../core/mathUtils.js";import{isNone as o,isSome as i,applySome as r,unwrap as n}from"../../core/maybe.js";import{createScreenPoint as a}from"../../core/screenUtils.js";import{areToolManipulatorsEditable as s}from"./interactiveToolUtils.js";import{createScreenPointFromEvent as l}from"../support/screenUtils.js";class p{constructor(){this._pointerLocations=new Map,this._hoveredManipulators=new Map,this._grabbedManipulators=new Map,this._draggedManipulators=new Map,this._stopDrag=!1,this._currentlyActiveTool=null,this._revertToActiveTool=!1,this._cursor=null}get cursor(){return this._cursor}handleInputEvent(t,a){const s=()=>t.stopPropagation();switch(t.type){case"pointer-move":c(t.pointerType)&&this._pointerLocations.set(t.pointerId,{x:t.x,y:t.y,pointerType:t.pointerType});break;case"drag":this._grabbedManipulators.size>0&&(this._stopDrag=!0),this._stopDrag&&(s(),"end"===t.action&&(this._stopDrag=!1));break;case"pointer-down":{if(!u(t))break;const e=l(t),n=this._intersect(e,t.pointerType,a.forEachTool);if(o(n))break;const p=this._findToolAndManipulatorByKey(n,a.forEachTool,h),c=r(p,(t=>t.manipulator)),d=r(p,(t=>t.tool));!(i(c)&&i(d)&&c.interactive)||c.grabbable&&c.grabbableForEvent(t)||!c.grabbing||c.dragging||this._ungrabManipulatorBeforeDragging(c,d,t),i(c)&&c.interactive&&c.grabbable&&c.grabbableForEvent(t)&&!c.grabbing&&(this._grabbedManipulators.set(t.pointerId,{key:n,start:e,pointerType:t.pointerType}),1===this._grabbedManipulators.size&&a.activeTool!==n.tool&&(this._currentlyActiveTool=a.activeTool,this._revertToActiveTool=!0,a.setActiveTool(n.tool)),c.grabbing=!0,c.events.emit("grab-changed",{action:"start",pointerType:t.pointerType,screenPoint:e}),s());break}case"pointer-up":this._handlePointerEnd(t,a);break;case"pointer-drag":{if(!u(t))break;const i=this._grabbedManipulators.get(t.pointerId),p=this._draggedManipulators.get(t.pointerId),c=r(i||p,(({key:t})=>t)),d=this._findManipulatorByKey(c,a.forEachTool);if(o(d))break;const h=l(t);h.x=e(h.x,0,a.view.width),h.y=e(h.y,0,a.view.height);const g=n(i||p).start;switch(t.action){case"start":case"update":"update"!==t.action&&1!==this._grabbedManipulators.size||(d.dragging=!0,p?d.events.emit("drag",{action:"update",start:g,screenPoint:h}):d.events.emit("drag",{action:"start",start:g,screenPoint:h,pointerType:t.pointerType}),this._draggedManipulators.set(t.pointerId,{key:n(c),start:g}));break;case"end":d.dragging=!1,p&&d.events.emit("drag",{action:"end",start:g,screenPoint:h}),this._draggedManipulators.delete(t.pointerId),this._handlePointerEnd(t,a)}s();break}case"immediate-click":{const e=l(t),r=this._intersect(e,t.pointerType,a.forEachTool),n=this._findToolAndManipulatorByKey(r,a.forEachTool,h);if(d(t)||a.forEachTool((t=>{if((!i(n)||n.tool!==t||t.automaticManipulatorSelection)&&t.manipulators){let e=!1;t.manipulators.forEach((({manipulator:t})=>{t.selected&&(t.selected=!1,e=!0)})),e&&t.manipulatorSelectionChanged&&t.manipulatorSelectionChanged()}})),o(n))break;const{manipulator:p,tool:c}=n;if(!p.interactive)break;p.selectable&&c.automaticManipulatorSelection&&(p.selected=!p.selected,c.manipulatorSelectionChanged&&c.manipulatorSelectionChanged());const u=t.native.shiftKey;p.events.emit("immediate-click",{screenPoint:e,button:t.button,pointerType:t.pointerType,shiftKey:u,stopPropagation:s});break}case"click":{const e=l(t),i=this._intersect(e,t.pointerType,a.forEachTool),r=this._findManipulatorByKey(i,a.forEachTool);if(o(r)||!r.interactive)break;const n=t.native.shiftKey;r.events.emit(t.type,{screenPoint:e,button:t.button,pointerType:t.pointerType,shiftKey:n}),s();break}case"double-click":{const e=l(t),i=this._intersect(e,t.pointerType,a.forEachTool),r=this._findManipulatorByKey(i,a.forEachTool);if(o(r)||!r.interactive)break;const n=t.native.shiftKey;r.events.emit("double-click",{screenPoint:e,button:t.button,pointerType:t.pointerType,shiftKey:n,stopPropagation:s});break}case"immediate-double-click":{const e=l(t),i=this._intersect(e,t.pointerType,a.forEachTool),r=this._findManipulatorByKey(i,a.forEachTool);if(o(r)||!r.interactive)break;const n=t.native.shiftKey;r.events.emit("immediate-double-click",{screenPoint:e,button:t.button,pointerType:t.pointerType,shiftKey:n,stopPropagation:s});break}}this._onFocusChange(a.forEachTool)}_ungrabManipulatorBeforeDragging(t,e,o){t.grabbing=!1,t.events.emit("grab-changed",{action:"end",pointerType:o.pointerType,screenPoint:l(o)}),this._grabbedManipulators.forEach((({key:o},i)=>{o.tool===e&&e.manipulators.findById(o.manipulatorId)===t&&this._grabbedManipulators.delete(i)}))}_handlePointerEnd(t,e){const o=r(this._grabbedManipulators.get(t.pointerId),(({key:t})=>t)),n=this._findManipulatorByKey(o,e.forEachTool);i(n)&&!n.dragging&&(1===this._grabbedManipulators.size&&0===this._draggedManipulators.size&&this._revertToActiveTool&&(e.setActiveTool(this._currentlyActiveTool),this._revertToActiveTool=!1,this._currentlyActiveTool=null),n.grabbing&&(n.grabbing=!1,n.events.emit("grab-changed",{action:"end",pointerType:t.pointerType,screenPoint:l(t)})),this._grabbedManipulators.delete(t.pointerId))}_cursorFromMap(e,o){let r=null;return t(e,(({key:t})=>{const e=this._findManipulatorByKey(t,o);return!!(i(e)&&e.interactive&&"cursor"in e&&e.cursor)&&(r=e.cursor,!0)})),r}_onFocusChange(t){this._updateCursor(t),this._updateFocusedManipulatorTools(t)}_updateCursor(t){this._grabbedManipulators.size>0?this._cursor=this._cursorFromMap(this._grabbedManipulators,t)||"grabbing":this._hoveredManipulators.size>0?this._cursor=this._cursorFromMap(this._hoveredManipulators,t)||"pointer":this._cursor=null}_updateFocusedManipulatorTools(t){const e=new Set;this._grabbedManipulators.forEach((({key:{tool:t}})=>{e.add(t)})),this._hoveredManipulators.forEach((({key:{tool:t}})=>{e.add(t)})),t((t=>{t.hasFocusedManipulators=e.has(t)}))}clearPointers(t,e,r=!0,n){const a=e=>e.tool===t&&(o(n)||e.manipulatorId===n);this._grabbedManipulators.forEach((({key:t,pointerType:o},r)=>{if(a(t)){this._grabbedManipulators.delete(r);const n=this._findManipulatorByKey(t,e);i(n)&&(n.grabbing=!1,n.events.emit("grab-changed",{action:"end",screenPoint:null,pointerType:o}))}})),this._draggedManipulators.forEach((({key:t},o)=>{if(a(t)){this._draggedManipulators.delete(o);const r=this._findManipulatorByKey(t,e);i(r)&&(r.dragging=!1,r.events.emit("drag",{action:"cancel"}))}})),r&&this._hoveredManipulators.forEach((({key:t},o)=>{if(a(t)){this._hoveredManipulators.delete(o);const r=this._findManipulatorByKey(t,e);i(r)&&(r.hovering=!1)}})),this._onFocusChange(e)}_intersect(t,e,i){let r=null;return i((i=>{if(null==i.manipulators||!s(i))return!1;const n=i.manipulators.intersect(t,e);return!o(n)&&(r={manipulatorId:n.id,tool:i},!0)})),r}updateHoveredStateFromKnownPointers(t){this._pointerLocations.forEach(((e,o)=>{this._updateHoveredStateForPointerAtScreenPosition(a(e.x,e.y),o,e.pointerType,t)}))}handleHoverEvent(t,e){"pointer-up"!==t.type&&"immediate-click"!==t.type&&"pointer-move"!==t.type||!c(t.pointerType)||this._updateHoveredStateForPointerAtScreenPosition(l(t),t.pointerId,t.pointerType,e)}_updateHoveredStateForPointerAtScreenPosition(t,e,o,a){const s=this._intersect(t,o,a);let l=this._findManipulatorByKey(s,a);const p=r(this._hoveredManipulators.get(e),(({key:t})=>t)),c=this._findManipulatorByKey(p,a);i(l)&&!l.interactive&&(l=null),c!==l&&(i(c)&&(c.hovering=!1),i(l)?(l.hovering=!0,this._hoveredManipulators.set(e,{key:n(s)})):this._hoveredManipulators.delete(e),this._onFocusChange(a))}_findManipulatorByKey(t,e){return this._findToolAndManipulatorByKey(t,e,h)?h.manipulator:null}_findToolAndManipulatorByKey(t,e,r){return o(t)?null:(r.tool=null,r.manipulator=null,e((e=>{if(e!==t.tool||null==e.manipulators||!s(e))return!1;const o=e.manipulators.findById(t.manipulatorId);return!!i(o)&&(r.manipulator=o,r.tool=e,!0)})),r.manipulator?r:null)}}function c(t){return"mouse"===t}function u(t){return"mouse"!==t.pointerType||0===t.button}function d(t){return!!t.native.shiftKey}const h={manipulator:null,tool:null};export{p as default};