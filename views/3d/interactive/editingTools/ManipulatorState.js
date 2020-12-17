/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../Manipulator3D"],(function(t,e,i){"use strict";let a=function(){function t(){this.grabbingState=0,this.zManipulator=null,this.firstSelected=null,this.numSelected=0,this.firstGrabbedXY=null}return t.prototype.update=function(t){this.grabbingState=0,this.zManipulator=null,this.numSelected=0,this.firstSelected=null,this.firstGrabbedXY=null,t.forEachManipulator(((t,a)=>{if(0===a&&(this.zManipulator=t),t instanceof i.Manipulator3D&&(t.selected&&(0===this.numSelected&&(this.firstSelected=t),this.numSelected++),e.isNone(this.firstGrabbedXY)&&t.grabbing&&1===a&&(this.firstGrabbedXY=t)),t.grabbing)switch(this.grabbingState|=1,a){case 0:this.grabbingState|=2;break;case 1:this.grabbingState|=4}}))},t}();t.ManipulatorState=a,Object.defineProperty(t,"__esModule",{value:!0})}));
