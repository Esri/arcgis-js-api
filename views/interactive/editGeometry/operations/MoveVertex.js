/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t{constructor(t,s,d,h){this.helper=t,this.dx=s,this.dy=d,this.dz=h}_move(t,s,d,h){this.helper.addDelta(t.pos,s,d,h)}apply(t){this._move(t,this.dx,this.dy,this.dz)}undo(t){this._move(t,-this.dx,-this.dy,-this.dz)}canAccumulate(s){return s instanceof t}accumulate(t,s){this._move(t,s.dx,s.dy,s.dz)}accumulateParams(t){this.dx+=t.dx,this.dy+=t.dy,this.dz+=t.dz}}export{t as MoveVertex};
