define(["dojo/_base/lang"],function(e){var n={_recommendedScales:{world:1e8,continent:5e7,countriesBig:25e6,countriesSmall:12e6,statesProvinces:6e6,stateProvince:3e6,counties:15e5,county:75e4,metropolitanArea:32e4,cities:16e4,city:8e4,town:4e4,neighborhood:2e4,streets:1e4,street:5e3,buildings:2500,building:1250},getRecommendedScale:function(e){return n._recommendedScales[e]},all:function(){return e.clone(n._recommendedScales)}};return n});