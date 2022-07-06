/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class e{constructor(){this._username="",this._password="",this._token=null}static fromUserName(s,t){const n=new e;return n._username=s,n._password=t,n._token=null,n}static fromArcadeDictionary(s){const t=new e;return s.hasField("username")&&(t._username=s.field("username")),s.hasField("password")&&(t._password=s.field("password")),s.hasField("token")&&(t._token=s.field("token")),t}static fromToken(s){const t=new e;return t._token=s,t}get username(){return this._username}get password(){return this._password}async getToken(){return null===this._token?"No Token Provided":this._token}}export{e as default};
