define(["dojo/_base/declare","./messageHandler","./errorMessages","./ExtensionBase"],function(e,n,s,i){return e([i],{_setConfig:function(e){this.config=e||{}},__messageReceived:function(e){return"updateconfig"===e.functionName.toLowerCase()?(e.args={configuration:this.config},n._sendMessage(e)):void this.inherited(arguments)},readyToPersistConfig:function(e){if(!this._isHostInitialized())throw new Error(s.hostNotReady);n._sendMessage({functionName:"readyToPersistConfig",args:{canAccept:e}})}})});