/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../CIMCursor","../CurveHelper"],(function(t,e,s,n){"use strict";let i=function(){function t(){}return t.local=function(){return null===t.instance&&(t.instance=new t),t.instance},t.prototype.execute=function(t,e,s){return new o(t,e,s)},t}();i.instance=null;const r=1e-15;let o=function(t){function i(e,s,i){var r;return(r=t.call(this,e,!0,!0)||this)._curveHelper=new n.CurveHelper,r._angleToLine=void 0===s.angleToLine||s.angleToLine,r._offset=void 0!==s.offset?s.offset*i:0,r._endPoints=void 0===s.placeOnEndPoints||s.placeOnEndPoints,r._controlPoints=void 0===s.placeOnControlPoints||s.placeOnControlPoints,r._regularVertices=void 0===s.placeOnRegularVertices||s.placeOnRegularVertices,r._tags=[],r._tagIterator=0,r}e._inheritsLoose(i,t);var r=i.prototype;return r.processPath=function(t){if(this.iteratePath||(this._preparePath(t),this.iteratePath=!0),this._tagIterator>=this._tags.length)return this._tags.length=0,this._tagIterator=0,this.iteratePath=!1,null;const e=this._tags[this._tagIterator];this._angleToLine&&this.internalPlacement.setRotate(e[2]);let s=e[0],n=e[1];if(0!==this._offset){const t=Math.cos(e[2]),i=Math.sin(e[2]);s-=this._offset*i,n+=this._offset*t}return this.internalPlacement.setTranslate(s,n),this._tagIterator++,this.internalPlacement},r._preparePath=function(t){this._tags.length=0,this._tagIterator=0;const e=s.isClosedPath(t),n=t.length-1;let i,r,o=0,h=0,l=0,c=0,u=0;for(;o<n;){o++,i=t[o-1],r=t[o];const _=s.getId(i),g=s.getId(r);(this._angleToLine||0!==this._offset)&&(c=this._curveHelper.getAngle(i,r,0)),1===o?e?(h=c,l=_):this._endPoints&&this._tags.push([i[0],i[1],c]):1===_?this._controlPoints&&this._tags.push([i[0],i[1],a(u,c)]):this._regularVertices&&this._tags.push([i[0],i[1],a(u,c)]),(this._angleToLine||0!==this._offset)&&(u=this._curveHelper.getAngle(i,r,1)),o===n&&(e?1===g||1===l?this._controlPoints&&this._tags.push([r[0],r[1],a(u,h)]):this._regularVertices&&this._tags.push([r[0],r[1],a(u,h)]):this._endPoints&&this._tags.push([r[0],r[1],u]))}this._tagIterator=0},i}(s.PathTransformationCursor);function a(t,e){const s=Math.PI;for(;Math.abs(e-t)>s+2*r;)e-t>s?e-=2*s:e+=2*s;return(t+e)/2}t.PlacementOnVertices=i,Object.defineProperty(t,"__esModule",{value:!0})}));
