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

define({countryCodes:{WORLD:"世界",AD:"アンドラ",AE:"アラブ首長国連邦",AF:"アフガニスタン",AG:"アンチグアバーブーダ",AI:"アングィラ",AL:"アルバニア",AM:"アルメニア",AO:"アンゴラ",AQ:"南極",AR:"アルゼンチン",AS:"米国領サモア",AT:"オーストリア",AU:"オーストラリア",AW:"アルバ",AZ:"アゼルバイジャン",BA:"ボスニア ヘルツェゴビナ",BB:"バルバドス",BD:"バングラデシュ",BE:"ベルギー",BF:"ブルキナファソ",BG:"ブルガリア",BH:"バーレーン",BI:"ブルンジ",BJ:"ベナン",BL:"サン バルテルミー",BM:"バミューダ",BN:"ブルネイ ダルサラーム",BO:"ボリビア多民族国",BQ:"ボネール、シント ユースタティウスおよびサバ",BR:"ブラジル",BS:"バハマ",BT:"ブータン",BV:"ブーベ島",BW:"ボツワナ",BY:"ベラルーシ",BZ:"ベリーズ",CA:"カナダ",CD:"コンゴ民主共和国",CF:"中央アフリカ共和国",CG:"コンゴ共和国",CH:"スイス",CI:"コートジボワール",CK:"クック諸島",CL:"チリ",CM:"カメルーン",CN:"中国",CO:"コロンビア",CR:"コスタリカ",CU:"キューバ",CV:"カーボベルデ",CW:"キュラソー島",CY:"キプロス",CZ:"チェコ共和国",DE:"ドイツ",DJ:"ジブチ",DK:"デンマーク",DM:"ドミニカ国",DO:"ドミニカ共和国",DZ:"アルジェリア",EC:"エクアドル",EE:"エストニア",EG:"エジプト",EH:"西サハラ",ER:"エリトリア",ES:"スペイン",ET:"エチオピア",FI:"フィンランド",FJ:"フィジー",FK:"フォークランド諸島 (マルビナス諸島)",FM:"ミクロネシア連邦",FO:"フェロー諸島",FR:"フランス",GA:"ガボン",GB:"英国",GD:"グレナダ",GE:"ジョージア",GF:"フランス領ギアナ",GG:"ガーンジー",GH:"ガーナ",GI:"ジブラルタル",GL:"グリーンランド",GM:"ガンビア",GN:"ギニア",GP:"グアドループ",GQ:"赤道ギニア",GR:"ギリシャ",GS:"南ジョージア島・南サンドイッチ諸島",GT:"グアテマラ",GW:"ギニアビサウ",GY:"ガイアナ",HK:"香港",HM:"ヘアド島・マクドナルド諸島",HN:"ホンジュラス",HR:"クロアチア",HT:"ハイチ",HU:"ハンガリー",ID:"インドネシア",IE:"アイルランド",IL:"イスラエル",IM:"マン島",IN:"インド",IO:"イギリス領インド洋地域",IQ:"イラク",IR:"イラン",IS:"アイスランド",IT:"イタリア",JE:"ジャージー島",JM:"ジャマイカ",JO:"ヨルダン",JP:"日本",KE:"ケニア",KG:"キルギスタン",KH:"カンボジア",KI:"キリバス",KM:"コモロ",KN:"セントクリストファー ネーヴィス",KP:"朝鮮民主主義人民共和国",KR:"韓国",KW:"クウェート",KY:"ケイマン諸島",KZ:"カザフスタン",LA:"ラオス",LB:"レバノン",LC:"セントルシア",LI:"リヒテンシュタイン",LK:"スリランカ",LR:"リベリア",LS:"レソト",LT:"リトアニア",LU:"ルクセンブルク",LV:"ラトビア",LY:"リビア",MA:"モロッコ",MC:"モナコ",MD:"モルドバ共和国",ME:"モンテネグロ",MF:"サン・マルタン島",MG:"マダガスカル",MH:"マーシャル諸島",MK:"マケドニア (旧ユーゴスラビア共和国)",ML:"マリ",MM:"ミャンマー",MN:"モンゴル",MO:"マカオ",MP:"北マリアナ諸島連邦",MQ:"マルチニーク島",MR:"モーリタニア",MS:"モントセラト島",MT:"マルタ",MU:"モーリシャス",MV:"モルディブ",MW:"マラウイ",MX:"メキシコ",MY:"マレーシア",MZ:"モザンビーク",NA:"ナミビア",NC:"フランス領ニューカレドニア",NE:"ニジェール",NG:"ナイジェリア",NI:"ニカラグア",NL:"オランダ",NO:"ノルウェー",NP:"ネパール",NR:"ナウル",NU:"ニウエ",NZ:"ニュージーランド",OM:"オマーン",PA:"パナマ",PE:"ペルー",PF:"フランス領ポリネシア",PG:"パプアニューギニア独立国",PH:"フィリピン",PK:"パキスタン",PL:"ポーランド",PM:"サンピエール島とミクロン島",PN:"ピトケアン",PS:"パレスチナ自治政府",PT:"ポルトガル",PW:"パラオ",PY:"パラグアイ",QA:"カタール",RE:"レユニオン",RO:"ルーマニア",RS:"セルビア",RU:"ロシア連邦",RW:"ルワンダ",SA:"サウジアラビア",SB:"ソロモン諸島",SC:"セイシェル",SD:"スーダン",SE:"スウェーデン",SG:"シンガポール",SH:"セント ヘレナ、アセンションおよびトリスタン ダ クーニャ",SI:"スロベニア",SJ:"スバールバル諸島・ヤンマイエン島",SK:"スロバキア",SL:"シエラ・レオネ",SM:"サンマリノ",SN:"セネガル",SO:"ソマリア民主共和国",SR:"スリナム",SS:"南スーダン",ST:"サントメ・プリンシペ",SV:"エルサルバドル",SX:"シント マールテン (オランダ領)",SY:"シリア",SZ:"スワジランド",TC:"タークス・カイコス諸島",TD:"チャド",TF:"フランス領南方・南極地域",TG:"トーゴ",TH:"タイ",TJ:"タジキスタン",TK:"トケラウ諸島",TL:"東ティモール",TM:"トルクメニスタン",TN:"チュニジア",TO:"トンガ",TR:"トルコ",TT:"トリニダード トバゴ",TV:"ツバル",TW:"台湾",TZ:"タンザニア",UA:"ウクライナ",UG:"ウガンダ",UM:"アメリカ領太平洋諸島",US:"米国",UY:"ウルグアイ",UZ:"ウズベキスタン",VA:"教皇庁 (バチカン市国)",VC:"セントビンセントおよびグレナディーン諸島",VE:"ベネズエラ・ボリバル共和国",VG:"イギリス領バージン諸島",VN:"ベトナム",VU:"バヌアツ",WF:"ワリー・エ・フトゥーナ諸島",WS:"サモア",XK:"コソボ共和国",YE:"イエメン",YT:"マヨット島",ZA:"南アフリカ",ZM:"ザンビア",ZW:"ジンバブエ"}});