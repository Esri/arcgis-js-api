// COPYRIGHT © 2017 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define({countryCodes:{WORLD:"世界",AD:"安道爾",AE:"阿拉伯聯合大公國",AF:"阿富汗",AG:"安地卡及巴布達",AI:"安圭拉島",AL:"阿爾巴尼亞",AM:"亞美尼亞",AO:"安哥拉",AQ:"南極洲",AR:"阿根廷",AS:"美屬薩摩亞",AT:"奧地利",AU:"澳大利亞",AW:"阿魯巴島",AZ:"阿塞拜疆",BA:"波士尼亞與赫塞哥維納",BB:"巴貝多",BD:"孟加拉國",BE:"比利時",BF:"布吉納法索",BG:"保加利亞",BH:"巴林",BI:"蒲隆地",BJ:"貝南",BL:"聖巴瑟米",BM:"百慕達",BN:"汶萊",BO:"玻利維亞多民族共和國",BQ:"荷蘭加勒比區(博奈爾島、聖尤斯特歇斯島和薩巴島)",BR:"巴西",BS:"巴哈馬群島",BT:"不丹",BV:"布威島",BW:"波札那",BY:"白俄羅斯",BZ:"貝里斯",CA:"加拿大",CD:"剛果民主共和國",CF:"中非共和國",CG:"剛果",CH:"瑞士",CI:"象牙海岸",CK:"庫克群島",CL:"智利",CM:"喀麥隆",CN:"中國",CO:"哥倫比亞",CR:"哥斯大黎加",CU:"古巴",CV:"維德角",CW:"古拉索",CY:"塞浦路斯",CZ:"捷克共和國",DE:"德國",DJ:"吉布地",DK:"丹麥",DM:"多明尼加",DO:"多明尼克共和國",DZ:"阿爾及利亞",EC:"厄瓜多",EE:"愛沙尼亞",EG:"埃及",EH:"西撒哈拉",ER:"厄利垂亞",ES:"西班牙",ET:"衣索比亞",FI:"芬蘭",FJ:"斐濟",FK:"福克蘭群島(馬爾維納斯)",FM:"密克羅尼西亞聯邦國",FO:"法羅群島",FR:"法國",GA:"加彭",GB:"英國",GD:"格瑞那達",GE:"喬治亞",GF:"法屬圭亞那",GG:"根西",GH:"加納",GI:"直布羅陀",GL:"格陵蘭",GM:"甘比亞",GN:"幾內亞",GP:"法屬瓜德羅普島",GQ:"赤道幾內亞",GR:"希臘",GS:"南喬治亞與南三明治群島",GT:"瓜地馬拉",GW:"幾內亞比索",GY:"蓋亞那",HK:"中國香港",HM:"赫德島和麥克唐納群島",HN:"宏都拉斯",HR:"克羅埃西亞",HT:"海地",HU:"匈牙利",ID:"印尼",IE:"愛爾蘭",IL:"以色列",IM:"曼島",IN:"印度",IO:"英屬印度洋領地",IQ:"伊拉克",IR:"伊朗伊斯蘭共和國",IS:"冰島",IT:"義大利",JE:"澤西",JM:"牙買加",JO:"約旦",JP:"日本",KE:"肯亞",KG:"吉爾吉斯",KH:"柬埔寨",KI:"吉里巴斯",KM:"葛摩",KN:"聖克里斯多福及尼維斯",KP:"朝鮮民主人民共和國",KR:"大韓民國",KW:"科威特",KY:"開曼群島",KZ:"哈薩克",LA:"寮人民民主共和國",LB:"黎巴嫩",LC:"聖露西亞",LI:"列支敦士登",LK:"斯里蘭卡",LR:"賴比瑞亞",LS:"賴索托",LT:"立陶宛",LU:"盧森堡",LV:"拉脫維亞",LY:"利比亞",MA:"摩洛哥",MC:"摩納哥",MD:"摩爾多瓦共和國",ME:"蒙特內哥羅",MF:"聖馬丁 (法屬)",MG:"馬達加斯加",MH:"馬歇爾群島",MK:"前南斯拉夫馬其頓共和國",ML:"馬利",MM:"緬甸",MN:"蒙古",MO:"中國澳門",MP:"北馬里亞納群島",MQ:"馬丁尼克島",MR:"茅利塔尼亞",MS:"蒙特塞拉特山",MT:"馬爾他",MU:"模里西斯",MV:"馬爾地夫",MW:"馬拉威",MX:"墨西哥",MY:"馬來西亞",MZ:"莫三比克",NA:"納米比亞",NC:"新喀里多尼亞",NE:"尼日",NG:"奈及利亞",NI:"尼加拉瓜",NL:"荷蘭",NO:"挪威",NP:"尼泊爾",NR:"諾魯",NU:"紐埃島",NZ:"紐西蘭",OM:"阿曼",PA:"巴拿馬",PE:"秘魯",PF:"法屬玻里尼西亞",PG:"巴布亞紐幾內亞",PH:"菲律賓",PK:"巴基斯坦",PL:"波蘭",PM:"聖皮耶與密克隆群島",PN:"皮特凱恩",PS:"巴勒斯坦州",PT:"葡萄牙",PW:"帛琉",PY:"巴拉圭",QA:"卡達",RE:"留尼旺島",RO:"羅馬尼亞",RS:"塞爾維亞",RU:"俄羅斯聯邦",RW:"盧安達",SA:"沙烏地阿拉伯",SB:"所羅門群島",SC:"塞席爾",SD:"蘇丹",SE:"瑞典",SG:"新加坡",SH:"聖赫勒拿、亞森欣與垂斯坦昆哈",SI:"斯洛維尼亞",SJ:"斯瓦巴和揚馬延",SK:"斯洛伐克",SL:"獅子山共和國",SM:"聖馬利諾",SN:"塞內加爾",SO:"索馬利亞",SR:"蘇利南",SS:"南蘇丹",ST:"聖多美與普林西比",SV:"薩爾瓦多",SX:"聖馬丁島(荷屬)",SY:"敘利亞阿拉伯共和國",SZ:"史瓦濟蘭",TC:"特克斯和凱科斯群島",TD:"查德",TF:"法屬南部領地",TG:"多哥共和國",TH:"泰國",TJ:"塔吉克",TK:"托克勞",TL:"東帝汶",TM:"土庫曼",TN:"突尼西亞",TO:"東加",TR:"土耳其",TT:"千里達及托巴哥",TV:"圖瓦盧",TW:"中國臺灣省",TZ:"坦尚尼亞",UA:"烏克蘭",UG:"烏干達",UM:"美國本土外小島嶼",US:"美國",UY:"烏拉圭",UZ:"烏茲別克",VA:"羅馬教廷(梵蒂岡)",VC:"聖文森與格瑞那丁",VE:"委內瑞拉玻利瓦爾共和國",VG:"英屬維京群島",VN:"越南",VU:"萬那杜",WF:"瓦利斯和富圖納",WS:"薩摩亞群島",XK:"科索沃共和國",YE:"葉門",YT:"馬約特島",ZA:"南非",ZM:"尚比亞",ZW:"辛巴威"}});