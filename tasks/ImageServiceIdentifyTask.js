define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../request","../geometry/normalizeUtils","./Task","./ImageServiceIdentifyResult"],function(e,t,r,n,a,s,i,o){var c=e(i,{declaredClass:"esri.tasks.ImageServiceIdentifyTask",constructor:function(){this._url.path+="/identify",this._handler=t.hitch(this,this._handler)},__msigns:[{n:"execute",c:3,a:[{i:0,p:["geometry"]}],e:2}],_handler:function(e,t,r,n,a){try{var s=new o(e);this._successHandler([s],"onComplete",r,a)}catch(i){this._errorHandler(i,n,a)}},execute:function(e,r,n,s){var i=s.assembly,o=this._encode(t.mixin({},this._url.query,{f:"json"},e.toJson(i&&i[0]))),c=this._handler,l=this._errorHandler;return a({url:this._url.path,content:o,callbackParamName:"callback",load:function(e,t){c(e,t,r,n,s.dfd)},error:function(e){l(e,n,s.dfd)}})},onComplete:function(){}});return s._createWrappers(c),r("extend-esri")&&t.setObject("tasks.ImageServiceIdentifyTask",c,n),c});