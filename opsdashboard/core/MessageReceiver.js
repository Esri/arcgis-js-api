define(["dojo/_base/declare","dojo/_base/lang","dojo/Evented","./messageHandler"],function(e,s,i,n){return e([i],{constructor:function(e){this._setConfig(e),n.on("message-received",s.hitch(this,this.__messageReceived))},_setConfig:function(e){e&&s.mixin(this,e)},__messageReceived:function(e){this._messageReceived(e)},_messageReceived:function(){}})});