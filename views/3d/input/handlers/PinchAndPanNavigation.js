/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../state/controllers/global/PinchAndPanController","../../state/controllers/local/PinchAndPanController","../../../input/InputHandler","../../../input/handlers/support"],(function(t,e,n,i,r,o){"use strict";let a=function(t){function r(e,n,i){var r;return(r=t.call(this,!0)||this).view=e,r.pointerAction=n,r.lastEndTimestamp=0,r.lastTimestamp=0,r.registerIncoming("drag",i,(t=>r.handleDrag(t))),r}e._inheritsLoose(r,t);var a=r.prototype;return a.handleDrag=function(t){if("mouse"===t.data.pointerType&&!o.eventMatchesMousePointerAction(t.data,this.pointerAction))return;const e=t.timestamp-this.lastEndTimestamp,n=40,i=this.momentum&&this.momentum.active&&e<n;switch(t.data.action){case"start":case"update":if(i)break;this.controller&&this.controller.active?t.data.timestamp-this.lastTimestamp>2&&(this.controller.update(t.data),this.lastTimestamp=t.timestamp):this.startController(t);break;case"end":case"removed":this.endController(t,!0);break;case"added":this.endController(t,!1),this.startController(t)}t.stopPropagation()},a.endController=function(t,e){if(this.controller&&this.controller.active){this.lastEndTimestamp=t.timestamp;const n=this.controller.end(t.data);e&&n&&(this.momentum=n,this.view.state.switchCameraController(this.momentum))}this.controller=null},a.startController=function(t){this.controller=this.createController(),this.view.state.switchCameraController(this.controller),this.controller.begin(t.data),this.lastTimestamp=t.timestamp},a.createController=function(){return this.view.state.isGlobal?new n.PinchAndPanController({view:this.view}):new i.PinchAndPanController({view:this.view})},r}(r.InputHandler);t.PinchAndPanNavigation=a,Object.defineProperty(t,"__esModule",{value:!0})}));
