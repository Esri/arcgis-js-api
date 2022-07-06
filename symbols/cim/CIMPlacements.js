/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t{constructor(){this.setIdentity()}getAngle(){return(null==this.rz||0===this.rz&&1!==this.rz_c&&0!==this.rz_s)&&(this.rz=Math.atan2(this.rz_s,this.rz_c)),this.rz}setIdentity(){this.tx=0,this.ty=0,this.tz=0,this.s=1,this.rx=0,this.ry=0,this.rz=0,this.rz_c=1,this.rz_s=0}setTranslate(t,s){this.tx=t,this.ty=s}setTranslateZ(t){this.tz=t}setRotateCS(t,s){this.rz=void 0,this.rz_c=t,this.rz_s=s}setRotate(t){this.rz=t,this.rz_c=void 0,this.rz_s=void 0}setRotateY(t){this.ry=t}setScale(t){this.s=t}setMeasure(t){this.m=t}}class s{next(){return null}}export{s as EmptyPlacementCursor,t as Placement};
