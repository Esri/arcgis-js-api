/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{Camera as e}from"../Camera.js";class t{constructor(t,s){this.thresholdScale=1,this._camera=new e,this._worldSpaceRadius=t,this._thresholds=s.map((e=>e))}updateCamera(e){this._camera.copyFrom(e)}selectLevel(e,t){const s=this._camera.computeScreenPixelSizeAt(e),r=this._worldSpaceRadius*t/s,a=this._thresholds;let h=-1;for(let o=0;o<a.length;++o)r>=a[o]*this.thresholdScale&&(h=o);return h}}export{t as LevelSelector};
