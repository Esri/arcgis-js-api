/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/vec3f64","../../../../../chunks/vec3","../../../../../chunks/vec3f32"],(function(t,e,n,s,i){"use strict";let o=function(){function t(t){this._low=i.create(),this._high=i.create(),t&&this.set(t)}var n=t.prototype;return n.set=function(t){const e=this._low,n=this._high;s.copy(e,t),s.sub(n,t,e)},n.setElements=function(t,e,n){s.set(c,t,e,n),this.set(c)},n.get=function(t){return s.add(t,this._low,this._high)},n.getLowScaled=function(t){return s.scale(t,this._low,1)},e._createClass(t,[{key:"low",get:function(){return this._low}},{key:"high",get:function(){return this._high}}]),t}();const c=n.create();t.TwoVectorPosition=o,Object.defineProperty(t,"__esModule",{value:!0})}));
