/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../core/promiseUtils"],(function(e,n){"use strict";return function(){function t(){this._username="",this._password="",this._token=null}return t.fromUserName=function(e,n){const r=new t;return r._username=e,r._password=n,r._token=null,r},t.fromArcadeDictionary=function(e){const n=new t;return e.hasField("username")&&(n._username=e.field("username")),e.hasField("password")&&(n._password=e.field("password")),e.hasField("token")&&(n._token=e.field("token")),n},t.fromToken=function(e){const n=new t;return n._token=e,n},t.prototype.getToken=function(){return n.create(((e,n)=>{null===this._token?n("No Token Provided"):e(this._token)}))},e._createClass(t,[{key:"username",get:function(){return this._username}},{key:"password",get:function(){return this._password}}]),t}()}));
