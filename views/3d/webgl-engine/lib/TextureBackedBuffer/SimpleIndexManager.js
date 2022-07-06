/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class e{constructor(e){this.maxCount=e,this._nextIndex=0,this.recycledIndices=[]}get activeCount(){return this._nextIndex-this.recycledIndices.length}get availableCount(){return this.recycledIndices.length+this.maxCount-this._nextIndex}acquire(){return this.recycledIndices.length>0?this.recycledIndices.pop():this.availableCount?this._nextIndex++:void 0}release(e){this.recycledIndices.push(e)}}export{e as SimpleIndexManager};
