// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define({countryCodes:{WORLD:"世界",AD:"安道尔",AE:"阿拉伯联合酋长国",AF:"阿富汗",AG:"安提瓜和巴布达",AI:"安圭拉",AL:"阿尔巴尼亚",AM:"亚美尼亚",AO:"安哥拉",AQ:"南极洲",AR:"阿根廷",AS:"美属萨摩亚",AT:"奥地利",AU:"澳大利亚",AW:"阿鲁巴",AZ:"阿塞拜疆",BA:"波黑",BB:"巴巴多斯",BD:"孟加拉国",BE:"比利时",BF:"布基纳法索",BG:"保加利亚",BH:"巴林",BI:"布隆迪",BJ:"贝宁",BL:"圣巴托洛缪岛",BM:"百慕大",BN:"文莱",BO:"多民族玻利维亚国",BQ:"博奈尔岛、圣尤斯特歇斯岛和萨巴岛",BR:"巴西",BS:"巴哈马",BT:"不丹",BV:"布维岛",BW:"博茨瓦纳",BY:"白俄罗斯",BZ:"伯利兹",CA:"加拿大",CD:"刚果民主共和国",CF:"中非共和国",CG:"刚果",CH:"瑞士",CI:"科特迪瓦",CK:"库克群岛",CL:"智利",CM:"喀麦隆",CN:"中国",CO:"哥伦比亚",CR:"哥斯达黎加",CU:"古巴",CV:"佛得角",CW:"库拉索",CY:"塞浦路斯",CZ:"捷克共和国",DE:"德国",DJ:"吉布提",DK:"丹麦",DM:"多米尼克",DO:"多米尼加共和国",DZ:"阿尔及利亚",EC:"厄瓜多尔",EE:"爱沙尼亚",EG:"埃及",EH:"西撒哈拉",ER:"厄立特里亚",ES:"西班牙",ET:"埃塞俄比亚",FI:"芬兰",FJ:"斐济",FK:"福克兰群岛(马尔维纳斯)",FM:"密克罗尼西亚联邦国",FO:"法罗群岛",FR:"法国",GA:"加蓬",GB:"英国",GD:"格林纳达",GE:"格鲁吉亚",GF:"法属圭亚那",GG:"根西",GH:"加纳",GI:"直布罗陀",GL:"格陵兰岛",GM:"冈比亚",GN:"几内亚",GP:"法属瓜德罗普岛",GQ:"赤道几内亚",GR:"希腊",GS:"南乔治亚和南桑德韦奇群岛",GT:"危地马拉",GW:"几内亚比绍",GY:"圭亚那",HK:"中国香港特别行政区",HM:"赫德岛和麦克唐纳群岛",HN:"洪都拉斯",HR:"克罗地亚",HT:"海地",HU:"匈牙利",ID:"印度尼西亚",IE:"爱尔兰",IL:"以色列",IM:"马恩岛",IN:"印度",IO:"英属印度洋领地",IQ:"伊拉克",IR:"伊朗伊斯兰共和国",IS:"冰岛",IT:"意大利",JE:"泽西岛",JM:"牙买加",JO:"约旦",JP:"日本",KE:"肯尼亚",KG:"吉尔吉斯斯坦",KH:"柬埔寨",KI:"基里巴斯",KM:"科摩罗",KN:"圣基茨与尼维斯",KP:"朝鲜民主主义人民共和国",KR:"大韩民国",KW:"科威特",KY:"开曼群岛",KZ:"哈萨克斯坦",LA:"老挝人民民主共和国",LB:"黎巴嫩",LC:"圣卢西亚",LI:"列支敦士登",LK:"斯里兰卡",LR:"利比里亚",LS:"莱索托",LT:"立陶宛",LU:"卢森堡",LV:"拉脱维亚",LY:"利比亚",MA:"摩洛哥",MC:"摩纳哥",MD:"摩尔多瓦共和国",ME:"黑山",MF:"圣马丁(法属)",MG:"马达加斯加",MH:"马歇尔群岛",MK:"前南斯拉夫马其顿共和国",ML:"马里",MM:"缅甸",MN:"蒙古",MO:"中国澳门特别行政区",MP:"北马里亚纳群岛",MQ:"马提尼克岛",MR:"毛里塔尼亚",MS:"蒙特塞拉特岛",MT:"马耳他",MU:"毛里求斯",MV:"马尔代夫",MW:"马拉维",MX:"墨西哥",MY:"马来西亚",MZ:"莫桑比克",NA:"纳米比亚",NC:"新喀里多尼亚",NE:"尼日尔",NG:"尼日利亚",NI:"尼加拉瓜",NL:"荷兰",NO:"挪威",NP:"尼泊尔",NR:"瑙鲁",NU:"纽埃",NZ:"新西兰",OM:"阿曼",PA:"巴拿马",PE:"秘鲁",PF:"法属波利尼西亚",PG:"巴布亚新几内亚",PH:"菲律宾",PK:"巴基斯坦",PL:"波兰",PM:"圣皮埃尔和密克隆",PN:"皮特克恩",PS:"巴勒斯坦国",PT:"葡萄牙",PW:"帕劳",PY:"巴拉圭",QA:"卡塔尔",RE:"留尼汪岛",RO:"罗马尼亚",RS:"塞尔维亚",RU:"俄罗斯联邦",RW:"卢旺达",SA:"沙特阿拉伯",SB:"所罗门群岛",SC:"塞舌尔",SD:"苏丹",SE:"瑞典",SG:"新加坡",SH:"圣赫勒拿岛、阿森松岛和特里斯坦-达库尼亚群岛",SI:"斯洛文尼亚",SJ:"斯瓦尔巴岛和扬马延岛",SK:"斯洛伐克",SL:"塞拉利昂",SM:"圣马力诺",SN:"塞内加尔",SO:"索马里",SR:"苏里南",SS:"南苏丹",ST:"圣多美和普林西比",SV:"萨尔瓦多",SX:"圣马丁岛(荷属)",SY:"阿拉伯叙利亚共和国",SZ:"斯威士兰",TC:"特克斯和凯科斯群岛",TD:"乍得",TF:"法属南部领地",TG:"多哥",TH:"泰国",TJ:"塔吉克斯坦",TK:"托克劳",TL:"东帝汶",TM:"土库曼斯坦",TN:"突尼斯",TO:"汤加",TR:"土耳其",TT:"特立尼达和多巴哥",TV:"图瓦卢",TW:"中国台湾",TZ:"坦桑尼亚联合共和国",UA:"乌克兰",UG:"乌干达",UM:"美属边疆群岛",US:"美国",UY:"乌拉圭",UZ:"乌兹别克斯坦",VA:"罗马教廷(梵蒂冈)",VC:"圣文森特和格林纳丁斯",VE:"委内瑞拉玻利瓦尔共和国",VG:"英属维尔京群岛",VN:"越南",VU:"瓦努阿图",WF:"瓦利斯和富图纳",WS:"萨摩亚群岛",XK:"科索沃",YE:"也门",YT:"马约特岛",ZA:"南非",ZM:"赞比亚",ZW:"津巴布韦"}});