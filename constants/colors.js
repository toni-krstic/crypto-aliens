const colors = {
"000": "#BBBDBE",
"001": "#4600F1",
"002": "#39178E",
"003": "#74B304",
"004": "#9A42D3",
"005": "#820678",
"006": "#B355C5",
"007": "#743864",
"008": "#A8CBBD",
"009": "#3C8C89",
"010": "#B259FF",
"011": "#621B43",
"012": "#622893",
"013": "#42B3B4",
"014": "#4C15DC",
"015": "#25DA32",
"016": "#C3C03D",
"017": "#3C9AD3",
"018": "#6818DB",
"019": "#2860C7",
"020": "#79B1C7",
"021": "#0D0D33",
"022": "#CCDDB4",
"023": "#7E036A",
"024": "#3EC7D1",
"025": "#303F73",
"026": "#A6E239",
"027": "#FF04E2",
"028": "#1FA29F",
"029": "#32A6CD",
"030": "#C7EB1C",
"031": "#2C2C93",
"032": "#115CA4",
"033": "#534E2E",
"034": "#D0549A",
"035": "#DDF841",
"036": "#79E9DD",
"037": "#4CD22E",
"038": "#82F605",
"039": "#C27FAE",
"040": "#09B13E",
"041": "#A99BB8",
"042": "#18F37C",
"043": "#575211",
"044": "#EDFAF0",
"045": "#74CCD5",
"046": "#13AC51",
"047": "#871A21",
"048": "#F07A4F",
"049": "#C17818",
"050": "#8A7EFF",
"051": "#7D977D",
"052": "#2FA3EF",
"053": "#B799CC",
"054": "#44666B",
"055": "#64F6D3",
"056": "#55CA06",
"057": "#236068",
"058": "#140DB1",
"059": "#501052",
"060": "#016DD9",
"061": "#6845F6",
"062": "#E69872",
"063": "#1D171D",
"064": "#C1ACED",
"065": "#67913B",
"066": "#674046",
"067": "#E4153A",
"068": "#DC0ADE",
"069": "#0B1395",
"070": "#78D293",
"071": "#B2CB30",
"072": "#D1EFA0",
"073": "#45200C",
"074": "#507B5C",
"075": "#CF9C22",
"076": "#512A96",
"077": "#A6F28A",
"078": "#6F199E",
"079": "#EA3672",
"080": "#AD933E",
"081": "#2479F1",
"082": "#6AE473",
"083": "#FCFC30",
"084": "#461098",
"085": "#D58B5E",
"086": "#4149D6",
"087": "#12E208",
"088": "#3FC7DE",
"089": "#44B819",
"090": "#90CF2B",
"091": "#08D0F0",
"092": "#C5AE26",
"093": "#EDF4EA",
"094": "#1F03A1",
"095": "#0A76C3",
"096": "#A19290",
"097": "#BFE5F5",
"098": "#0677CD",
"099": "#E5ADE6",
"100": "#92112A",
"101": "#EB1149",
"102": "#2D457D",
"103": "#97533F",
"104": "#679BEE",
"105": "#3A9035",
"106": "#2ABCF0",
"107": "#078223",
"108": "#A2F581",
"109": "#8A1D4D",
"110": "#DE032E",
"111": "#AE53E7",
"112": "#E08991",
"113": "#3F915F",
"114": "#504A3B",
"115": "#C32990",
"116": "#0BA85A",
"117": "#2B4F2D",
"118": "#A0907F",
"119": "#2AE513",
"120": "#D72B04",
"121": "#113D14",
"122": "#4AAC55",
"123": "#673B42",
"124": "#C49B45",
"125": "#50F69A",
"126": "#129862",
"127": "#1A9B07",
"128": "#7BA2EB",
"129": "#27F7F2",
"130": "#6C685B",
"131": "#98497A",
"132": "#6FD721",
"133": "#21D5AB",
"134": "#0317F7",
"135": "#572E28",
"136": "#577074",
"137": "#3D530F",
"138": "#333DD0",
"139": "#5526F7",
"140": "#E9517D",
"141": "#DDFCA6",
"142": "#8F6519",
"143": "#698B8A",
"144": "#7BE6EC",
"145": "#36C499",
"146": "#C4DA9C",
"147": "#0FD675",
"148": "#68DE19",
"149": "#C01FE1",
"150": "#EB8358",
"151": "#F9FF0D",
"152": "#9E471E",
"153": "#D36B22",
"154": "#D5FFB6",
"155": "#080F1D",
"156": "#C7902E",
"157": "#3A412F",
"158": "#9E4DF2",
"159": "#1776CF",
"160": "#C8FE52",
"161": "#478FB2",
"162": "#8D2203",
"163": "#255D11",
"164": "#017B14",
"165": "#E96FF6",
"166": "#AA7657",
"167": "#EA1B98",
"168": "#569A12",
"169": "#18EA3D",
"170": "#C293C1",
"171": "#F1666B",
"172": "#3ECFAE",
"173": "#483E48",
"174": "#DF381C",
"175": "#A137C2",
"176": "#8DD854",
"177": "#2798E7",
"178": "#F613D5",
"179": "#4C21F2",
"180": "#ACAF48",
"181": "#1AB952",
"182": "#4E8CCE",
"183": "#1E70FF",
"184": "#551C06",
"185": "#FBC33D",
"186": "#2F7EF4",
"187": "#D86373",
"188": "#A9F798",
"189": "#2DC431",
"190": "#0E25A4",
"191": "#9CAEC0",
"192": "#99A51F",
"193": "#24E9BE",
"194": "#F80174",
"195": "#43C4AD",
"196": "#794F61",
"197": "#991600",
"198": "#2D6013",
"199": "#6A5E0E",
"200": "#6E300E",
"201": "#9DCC96",
"202": "#28190D",
"203": "#8D56D1",
"204": "#2987C3",
"205": "#D402EC",
"206": "#E934D5",
"207": "#4F2DF0",
"208": "#86E5E8",
"209": "#DFB57D",
"210": "#B60560",
"211": "#DACEBC",
"212": "#2CE3E4",
"213": "#A226E9",
"214": "#2BDBCB",
"215": "#59C894",
"216": "#0DF9B7",
"217": "#6B6AB6",
"218": "#00A7A1",
"219": "#DFCFF2",
"220": "#B2EAF6",
"221": "#218B62",
"222": "#EC8BFD",
"223": "#DCDFBB",
"224": "#1B662F",
"225": "#4174AE",
"226": "#5BDD22",
"227": "#75625C",
"228": "#3DA46B",
"229": "#3BB537",
"230": "#463DC9",
"231": "#6F2E1C",
"232": "#BD6900",
"233": "#05D98B",
"234": "#05A4C0",
"235": "#FF7BAA",
"236": "#888D95",
"237": "#5AB314",
"238": "#944C78",
"239": "#FDA2DE",
"240": "#CA2039",
"241": "#E9EF29",
"242": "#566FE0",
"243": "#12CEDE",
"244": "#6D1D9D",
"245": "#9650E0",
"246": "#360565",
"247": "#69E107",
"248": "#2C344B",
"249": "#0D97F4",
"250": "#E10F9C",
"251": "#662F85",
"252": "#270F33",
"253": "#CAFA32",
"254": "#E2F301",
"255": "#4328B8",
"256": "#269110",
"257": "#268F64",
"258": "#F9321E",
"259": "#E26D3D",
"260": "#34ADCD",
"261": "#671E2A",
"262": "#83397B",
"263": "#246A34",
"264": "#FC95FD",
"265": "#E0027F",
"266": "#67B5F9",
"267": "#668195",
"268": "#7B0DD7",
"269": "#2E1088",
"270": "#C9BEE9",
"271": "#DC185C",
"272": "#343CC4",
"273": "#D60FBC",
"274": "#AD1225",
"275": "#A85C55",
"276": "#2FB55C",
"277": "#4F7C69",
"278": "#4780FC",
"279": "#04169C",
"280": "#563049",
"281": "#4E387E",
"282": "#AD84D3",
"283": "#4673F6",
"284": "#D7DE5E",
"285": "#245F0D",
"286": "#99A98D",
"287": "#6E740B",
"288": "#EFDA7D",
"289": "#7FA270",
"290": "#95FBE6",
"291": "#149642",
"292": "#38A800",
"293": "#3B5096",
"294": "#2CC9ED",
"295": "#ADEF66",
"296": "#27D56A",
"297": "#4974F1",
"298": "#E5D4B7",
"299": "#1F3B31",
"300": "#301549",
"301": "#F791D6",
"302": "#838B74",
"303": "#120593",
"304": "#85CA3B",
"305": "#C7738D",
"306": "#2D8BEF",
"307": "#B3C901",
"308": "#18BB8E",
"309": "#16E09F",
"310": "#0E5C0E",
"311": "#643BDA",
"312": "#9EAD6F",
"313": "#4F0345",
"314": "#EEF413",
"315": "#413A2F",
"316": "#54E2FF",
"317": "#A82CC8",
"318": "#50F1C7",
"319": "#BC14C6",
"320": "#098991",
"321": "#029DD7",
"322": "#E6EBD2",
"323": "#7155DD",
"324": "#A0501C",
"325": "#AFBEFA",
"326": "#EF91CF",
"327": "#B5BD1D",
"328": "#E61533",
"329": "#E55365",
"330": "#C2F1DB",
"331": "#D284CB",
"332": "#0069EC",
"333": "#56C1F8",
"334": "#DF25C1",
"335": "#83EC55",
"336": "#5C2C5C",
"337": "#C2D76D",
"338": "#16E367",
"339": "#3B4F11",
"340": "#016589",
"341": "#01D04E",
"342": "#1C5FDB",
"343": "#C6F319",
"344": "#4B7230",
"345": "#BE7770",
"346": "#F6EDB2",
"347": "#45723A",
"348": "#9A827B",
"349": "#6AE23D",
"350": "#39049B",
"351": "#516676",
"352": "#CE50DE",
"353": "#734C13",
"354": "#0FAD2E",
"355": "#676A52",
"356": "#88C405",
"357": "#91F9D3",
"358": "#4FF5C9",
"359": "#944CC5",
"360": "#CEC9D9",
"361": "#522C70",
"362": "#397A4F",
"363": "#D1882A",
"364": "#B51BD2",
"365": "#453A3C",
"366": "#1CD073",
"367": "#B3A022",
"368": "#4B66E8",
"369": "#962CC7",
"370": "#3AC573",
"371": "#D5C999",
"372": "#C7AD2B",
"373": "#A2CE7A",
"374": "#B30502",
"375": "#378F99",
"376": "#D6E5AE",
"377": "#7BCD42",
"378": "#50176F",
"379": "#C52FF1",
"380": "#2E715F",
"381": "#064965",
"382": "#ADDE9A",
"383": "#616464",
"384": "#F776EA",
"385": "#D9380E",
"386": "#F32B68",
"387": "#DEBD81",
"388": "#B26016",
"389": "#1EA98A",
"390": "#4522C0",
"391": "#496D91",
"392": "#4B4122",
"393": "#47AB64",
"394": "#51203E",
"395": "#C510A9",
"396": "#999E38",
"397": "#A58B2C",
"398": "#8A9D67",
"399": "#A8AADF",
"400": "#B3DC1E",
"401": "#3BE004",
"402": "#1B757A",
"403": "#2757F1",
"404": "#60125B",
"405": "#36C432",
"406": "#7E3A5C",
"407": "#0DD4C6",
"408": "#49B026",
"409": "#786EAF",
"410": "#F22FDE",
"411": "#00DECE",
"412": "#E14592",
"413": "#0F20DC",
"414": "#DB1EF7",
"415": "#C0A2EF",
"416": "#FBD72B",
"417": "#B98D58",
"418": "#99FCE5",
"419": "#2BCE0A",
"420": "#7B1018",
"421": "#1B8F94",
"422": "#B6CDA4",
"423": "#EB005B",
"424": "#B48A48",
"425": "#E70395",
"426": "#41F379",
"427": "#75BD53",
"428": "#8F07F3",
"429": "#9AFF5F",
"430": "#504266",
"431": "#A3FDC2",
"432": "#25968D",
"433": "#462A11",
"434": "#F0EC6B",
"435": "#EF1FC2",
"436": "#FD1055",
"437": "#F38908",
"438": "#394A67",
"439": "#268E68",
"440": "#5EC2E3",
"441": "#F76B5B",
"442": "#706262",
"443": "#B50E8A",
"444": "#9E7592",
"445": "#9E141F",
"446": "#771BF2",
"447": "#26034E",
"448": "#AE332C",
"449": "#8BE835",
"450": "#77BB80",
"451": "#C4742C",
"452": "#E5EE4A",
"453": "#ACEC16",
"454": "#71DDCC",
"455": "#8E76EF",
"456": "#114370",
"457": "#6D50A5",
"458": "#C67DCD",
"459": "#F107AC",
"460": "#264787",
"461": "#BF8D44",
"462": "#A9BFE6",
"463": "#5BA8E4",
"464": "#9F53C5",
"465": "#17AF90",
"466": "#4A5692",
"467": "#7D47E3",
"468": "#52AA4B",
"469": "#57C269",
"470": "#45EE4C",
"471": "#B2CC7B",
"472": "#C12825",
"473": "#977F54",
"474": "#89B3EE",
"475": "#C2EBE8",
"476": "#A264AA",
"477": "#178669",
"478": "#15A5A9",
"479": "#57ABAC",
"480": "#37E781",
"481": "#E131AC",
"482": "#6E93DC",
"483": "#39A408",
"484": "#C3BFD5",
"485": "#5B07B6",
"486": "#E441DA",
"487": "#29E5E0",
"488": "#CAD882",
"489": "#772F2B",
"490": "#8EABD1",
"491": "#3DEDAD",
"492": "#ADFF64",
"493": "#DFA940",
"494": "#1364A1",
"495": "#F70F65",
"496": "#F1D96A",
"497": "#B062EB",
"498": "#FD5B9A",
"499": "#2F9EF0",
"500": "#68A6DA",
"501": "#5CC163",
"502": "#61F6CF",
"503": "#406A28",
"504": "#7B0E3D",
"505": "#59D4F1",
"506": "#FD3F3C",
"507": "#B75327",
"508": "#A78663",
"509": "#93E9A8",
"510": "#30C6C2",
"511": "#5216EB",
"512": "#3CBA6A",
"513": "#E91199",
"514": "#836DB3",
"515": "#E2CB93",
"516": "#FACA9B",
"517": "#CFA7F2",
"518": "#051F73",
"519": "#0336D9",
"520": "#5D30E8",
"521": "#E6DC0B",
"522": "#B538F7",
"523": "#3B23B9",
"524": "#BC22FB",
"525": "#514B09",
"526": "#9E2374",
"527": "#F45597",
"528": "#8E3A92",
"529": "#B2E51D",
"530": "#64ABF4",
"531": "#2C3A56",
"532": "#931C37",
"533": "#97C069",
"534": "#007741",
"535": "#56D0C9",
"536": "#41F955",
"537": "#4ECB65",
"538": "#5C0A7D",
"539": "#567F0C",
"540": "#9154C8",
"541": "#3AD4F4",
"542": "#BB9874",
"543": "#6EFC5A",
"544": "#F8D9A6",
"545": "#518943",
"546": "#455293",
"547": "#0BBCED",
"548": "#A97468",
"549": "#B1C24A",
"550": "#49DF24",
"551": "#7D70A9",
"552": "#5C360E",
"553": "#67EDA2",
"554": "#B149E7",
"555": "#FBD338",
"556": "#1B9899",
"557": "#7D8900",
"558": "#376BEC",
"559": "#CCFB91",
"560": "#21595F",
"561": "#0451FD",
"562": "#65606F",
"563": "#B1A7C9",
"564": "#9B5F8D",
"565": "#6C4037",
"566": "#ABD493",
"567": "#2F6E66",
"568": "#876E58",
"569": "#4D5A40",
"570": "#D5F366",
"571": "#5A7175",
"572": "#6F9A75",
"573": "#978C89",
"574": "#441C47",
"575": "#4A16B5",
"576": "#37B13D",
"577": "#C26261",
"578": "#25CE8E",
"579": "#7ED330",
"580": "#1FCCEE",
"581": "#E6C0BD",
"582": "#56C26B",
"583": "#65F42F",
"584": "#4C12A4",
"585": "#E8774F",
"586": "#E000F4",
"587": "#9D7AE0",
"588": "#36B25E",
"589": "#B08E33",
"590": "#726284",
"591": "#6CCD24",
"592": "#45F322",
"593": "#06AADF",
"594": "#F4F134",
"595": "#4D5293",
"596": "#826860",
"597": "#D50E4C",
"598": "#9ACF59",
"599": "#4E8754",
"600": "#D66997",
"601": "#AB6D38",
"602": "#CAB486",
"603": "#22B625",
"604": "#086374",
"605": "#B079D0",
"606": "#D6BD74",
"607": "#EB4AB2",
"608": "#A12390",
"609": "#59A575",
"610": "#9B399F",
"611": "#43DBD3",
"612": "#85CF0E",
"613": "#20B3F8",
"614": "#26B5AA",
"615": "#4B91DD",
"616": "#E57F16",
"617": "#ABA1FC",
"618": "#E7EBCF",
"619": "#B97954",
"620": "#A81B38",
"621": "#407BE9",
"622": "#CAF2ED",
"623": "#21B671",
"624": "#F6531E",
"625": "#D3AE36",
"626": "#BB53F6",
"627": "#C21A52",
"628": "#F44A4E",
"629": "#8155A1",
"630": "#1509AB",
"631": "#ADAF68",
"632": "#EBA2E8",
"633": "#7984D6",
"634": "#E506E9",
"635": "#67542C",
"636": "#0CABB0",
"637": "#FEB1A3",
"638": "#AE0B48",
"639": "#3764A2",
"640": "#446723",
"641": "#DFD094",
"642": "#A5E45B",
"643": "#3B8A0B",
"644": "#7364B0",
"645": "#3628A9",
"646": "#F955FD",
"647": "#7F57C2",
"648": "#184ED3",
"649": "#C11A10",
"650": "#12CCF2",
"651": "#DC7DE1",
"652": "#389712",
"653": "#874F2D",
"654": "#13BB1D",
"655": "#314B5D",
"656": "#F48186",
"657": "#1F25DB",
"658": "#ED745F",
"659": "#DD6F6A",
"660": "#95618A",
"661": "#7BAC76",
"662": "#CD4018",
"663": "#A329F8",
"664": "#DE2F7D",
"665": "#81AE7D",
"666": "#2BABBA",
"667": "#523AE6",
"668": "#801736",
"669": "#3E1208",
"670": "#407858",
"671": "#1E1868",
"672": "#20A981",
"673": "#675D52",
"674": "#11C848",
"675": "#2EEF36",
"676": "#AF8EC1",
"677": "#B52F77",
"678": "#004654",
"679": "#1C089C",
"680": "#E8C663",
"681": "#757AA1",
"682": "#3BC8B5",
"683": "#12EDF2",
"684": "#F36C1F",
"685": "#9B4C44",
"686": "#12C71B",
"687": "#664DCC",
"688": "#CF02B0",
"689": "#215A33",
"690": "#A87D7F",
"691": "#DE201A",
"692": "#85FBF6",
"693": "#7B5AC5",
"694": "#89D705",
"695": "#4F6292",
"696": "#AD14F6",
"697": "#2D93F6",
"698": "#03BB97",
"699": "#F9397B",
"700": "#17F366",
"701": "#7A25CB",
"702": "#79025D",
"703": "#D5CD81",
"704": "#AF97FD",
"705": "#628CC4",
"706": "#60A0F6",
"707": "#A09000",
"708": "#388780",
"709": "#595B51",
"710": "#17F081",
"711": "#246D48",
"712": "#2403A0",
"713": "#DF18D6",
"714": "#127478",
"715": "#EFCDB5",
"716": "#6F0EE2",
"717": "#056CE3",
"718": "#B1CCCA",
"719": "#2FCDFD",
"720": "#0E1A47",
"721": "#ECF325",
"722": "#2786AD",
"723": "#699D68",
"724": "#70B6AC",
"725": "#44ECF8",
"726": "#929115",
"727": "#A1721E",
"728": "#93BAD4",
"729": "#C8A148",
"730": "#A744E3",
"731": "#829BE0",
"732": "#4DE9F2",
"733": "#C76AFD",
"734": "#E79E2E",
"735": "#39CFED",
"736": "#F349F4",
"737": "#32411E",
"738": "#EF16FB",
"739": "#F9FCF9",
"740": "#153AE9",
"741": "#D016FC",
"742": "#A8345A",
"743": "#F83887",
"744": "#B91EA6",
"745": "#AF66A1",
"746": "#F81B60",
"747": "#80C207",
"748": "#EED496",
"749": "#5DF1FB",
"750": "#22DD8B",
"751": "#D703CD",
"752": "#744D0B",
"753": "#1464D3",
"754": "#524C07",
"755": "#A5908E",
"756": "#FB3F42",
"757": "#2E2FAC",
"758": "#2130D2",
"759": "#396F31",
"760": "#09C0E6",
"761": "#FA75D9",
"762": "#4106F9",
"763": "#9888A7",
"764": "#C8AEB2",
"765": "#1EAF3B",
"766": "#CD7C63",
"767": "#926785",
"768": "#F7F053",
"769": "#98929A",
"770": "#3B44E0",
"771": "#876E34",
"772": "#131447",
"773": "#E78973",
"774": "#5DC5E9",
"775": "#51EF56",
"776": "#70267F",
"777": "#03B96B",
"778": "#2EB5EA",
"779": "#2F80CE",
"780": "#29AF1D",
"781": "#4C5BBF",
"782": "#DC06C2",
"783": "#13EDA1",
"784": "#B62879",
"785": "#AB7B5D",
"786": "#0E94EF",
"787": "#367225",
"788": "#5A41FE",
"789": "#8B90A5",
"790": "#1B897A",
"791": "#173071",
"792": "#49E57E",
"793": "#5E4FD2",
"794": "#4C7543",
"795": "#D199B9",
"796": "#E53D8E",
"797": "#D82135",
"798": "#B9AB82",
"799": "#639DD6",
"800": "#A26355",
"801": "#BCF1DE",
"802": "#6FDB6F",
"803": "#D37379",
"804": "#A8E20A",
"805": "#83E0EC",
"806": "#238692",
"807": "#B0DA8E",
"808": "#69B4B3",
"809": "#6435D9",
"810": "#1B16F5",
"811": "#14B031",
"812": "#F90CD3",
"813": "#254022",
"814": "#31A4E2",
"815": "#5B6ECD",
"816": "#3B8F00",
"817": "#0CBC10",
"818": "#EE37A6",
"819": "#32A0C7",
"820": "#80362D",
"821": "#BD3EF9",
"822": "#AE16B9",
"823": "#42BB62",
"824": "#72C394",
"825": "#76A1F3",
"826": "#652252",
"827": "#BB8568",
"828": "#6FDD7C",
"829": "#BCED94",
"830": "#4F3653",
"831": "#DF7427",
"832": "#7A341F",
"833": "#A0E994",
"834": "#41655F",
"835": "#800461",
"836": "#2290EC",
"837": "#F2185B",
"838": "#3F8DA3",
"839": "#B8BA71",
"840": "#A3F0E3",
"841": "#2A6726",
"842": "#CCD17F",
"843": "#845791",
"844": "#CB9980",
"845": "#048A36",
"846": "#908AE8",
"847": "#6F40AD",
"848": "#B335F5",
"849": "#2F3E4A",
"850": "#7E6F27",
"851": "#23B9C8",
"852": "#2A6C66",
"853": "#60A666",
"854": "#F56D9E",
"855": "#602D92",
"856": "#BA1C1A",
"857": "#74E1C4",
"858": "#53F188",
"859": "#7E3059",
"860": "#BFCF11",
"861": "#C3A1E4",
"862": "#52F979",
"863": "#25DD9C",
"864": "#71D537",
"865": "#85C0D9",
"866": "#8E4F89",
"867": "#424037",
"868": "#D002D3",
"869": "#142A01",
"870": "#786D2E",
"871": "#E837EF",
"872": "#1F76CA",
"873": "#49927D",
"874": "#ED3C22",
"875": "#BEEC53",
"876": "#116282",
"877": "#CBDB35",
"878": "#55D16B",
"879": "#A7D1E0",
"880": "#40518D",
"881": "#034379",
"882": "#C2DF4D",
"883": "#B79211",
"884": "#066A11",
"885": "#02709D",
"886": "#3DEB3D",
"887": "#A29678",
"888": "#D5B16F",
"889": "#B24870",
"890": "#557FF7",
"891": "#A46226",
"892": "#C9D42A",
"893": "#FFC36C",
"894": "#E16B41",
"895": "#1D42B9",
"896": "#C2F14D",
"897": "#3E0B81",
"898": "#2A569D",
"899": "#511113",
"900": "#1B75AB",
"901": "#67C3A9",
"902": "#207CF4",
"903": "#81DCCC",
"904": "#5100C7",
"905": "#E76D45",
"906": "#D1C5B3",
"907": "#7FC419",
"908": "#461291",
"909": "#04D12E",
"910": "#F578A2",
"911": "#0561CA",
"912": "#F81C30",
"913": "#EAE2A3",
"914": "#036A15",
"915": "#3F75C1",
"916": "#6313F8",
"917": "#09C3A4",
"918": "#914510",
"919": "#4229DD",
"920": "#11C2E0",
"921": "#12265A",
"922": "#4DCE95",
"923": "#E72DA7",
"924": "#4AAB6F",
"925": "#2AE7D9",
"926": "#E949D2",
"927": "#903080",
"928": "#01EA36",
"929": "#9712B6",
"930": "#30FF0E",
"931": "#EBE9E4",
"932": "#110C13",
"933": "#88254E",
"934": "#EAD2A8",
"935": "#038986",
"936": "#4F64B3",
"937": "#46225E",
"938": "#8C19A7",
"939": "#748346",
"940": "#A0CBD1",
"941": "#88DFD3",
"942": "#92E25E",
"943": "#A8A3A1",
"944": "#30045C",
"945": "#40C817",
"946": "#FDEA01",
"947": "#683248",
"948": "#BB705C",
"949": "#7EEF35",
"950": "#F0E62A",
"951": "#FFBDB3",
"952": "#E019DC",
"953": "#BDE7E4",
"954": "#8C45D8",
"955": "#532B4C",
"956": "#40ABA4",
"957": "#A5BB52",
"958": "#37FD46",
"959": "#0C1EE1",
"960": "#DA8456",
"961": "#81AB49",
"962": "#647C40",
"963": "#70E728",
"964": "#E9A1AB",
"965": "#1F4B34",
"966": "#0B8DA7",
"967": "#9047F8",
"968": "#78EE5C",
"969": "#64FB03",
"970": "#4E66DF",
"971": "#50EF1B",
"972": "#DAD254",
"973": "#EDD2D3",
"974": "#9663A6",
"975": "#07BB77",
"976": "#1E426C",
"977": "#998356",
"978": "#01DDEE",
"979": "#8A2E55",
"980": "#7AC13C",
"981": "#466068",
"982": "#CFF790",
"983": "#33F097",
"984": "#36F29E",
"985": "#9759E2",
"986": "#EF0571",
"987": "#91B077",
"988": "#F87464",
"989": "#28EA5D",
"990": "#3398AB",
"991": "#10026E",
"992": "#3CC92E",
"993": "#E0988A",
"994": "#8AEEF6",
"995": "#17C3E8",
"996": "#19EB03",
"997": "#2EE87F",
"998": "#3C44C6",
"999": "#3E5640"
};

export default colors;