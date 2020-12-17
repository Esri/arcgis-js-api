/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define((function(){"use strict";return function(){function e(t){for(this.extent=4096,this.keys=[],this.values=[],this._pbfLayer=t.clone();t.next();)switch(t.tag()){case 1:this.name=t.getString();break;case 3:this.keys.push(t.getString());break;case 4:this.values.push(t.processMessage(e._parseValue));break;case 5:this.extent=t.getUInt32();break;default:t.skip()}}return e.prototype.getData=function(){return this._pbfLayer},e._parseValue=function(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getInt64();case 5:return e.getUInt64();case 6:return e.getSInt64();case 7:return e.getBool();default:e.skip()}return null},e}()}));
