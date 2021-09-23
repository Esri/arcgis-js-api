/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/vec3","../../../../../chunks/vec3f32","../../../../../chunks/vec3f64"],(function(t,e,n,s,i){"use strict";let o=function(){function t(t){this._low=s.create(),this._high=s.create(),t&&this.set(t)}var i=t.prototype;return i.set=function(t){const e=this._low,s=this._high;n.copy(e,t),n.sub(s,t,e)},i.setElements=function(t,e,s){n.set(c,t,e,s),this.set(c)},i.get=function(t){return n.add(t,this._low,this._high)},i.getLowScaled=function(t){return n.scale(t,this._low,1)},e._createClass(t,[{key:"low",get:function(){return this._low}},{key:"high",get:function(){return this._high}}]),t}();const c=i.create();t.TwoVectorPosition=o,Object.defineProperty(t,"__esModule",{value:!0})}));
