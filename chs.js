/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Easels provide a way to hold colors that aren't Library colors, but may be useful on your journey to blending them. Colors in\n                    your easel can be added to the blender, and clicking on colors in Mixtory or having them be added via AutoEasel will populate\n                    the easel.": "画架提供了一种保存不是库颜色的颜色的方法，但在您混合它们的过程中可能很有用。 画架中的颜色可以添加到调色板中，然后单击 调色板 中的颜色或通过 自动画架 添加它们将填充画架。",
    "Blenders blend two colors together to make a new one. Colors are reprented by their hex RGB codes. \n                    When blending, each digit of the resulting color has a 45% to match either of the parent digits, plus a 5% chance of a random\n                    value. Blenders can be upgraded to output a max of 3 colors per blend. When you blend a color from the color library that you\n                    haven't seen, you gain a pallete point and unlock the ability to forever reference that color for blending. Match all the colors\n                    to beat the game!": "调色板将两种颜色混合在一起制成一种新颜色。 颜色由其十六进制 RGB 代码表示。 \n 混合时，结果颜色的每个数字都有 45% 的概率匹配任一父数字，外加 5% 的随机值概率。 调色板可以升级为每次混合最多输出 3 种颜色。 当您从颜色库中混合您未见过的颜色时，您将获得一个调色板点并解锁永久引用该颜色进行混合的能力。 匹配所有颜色\n 来通关游戏！",
    "\"Force\" Properties": "\"强制\" 属性",
    "AutoEasel allows colors to be automatically\n                    added to the easel. The \"x\" character is a wildcard. So, for example, if a blender AutoEasel is set to #FxF0FF, it will add\n                    colors such as #FAF0FF and #F5F0FF to the easel, but not #0AF0FF. They also have": "自动画架 允许将颜色自动添加到画架中。 \"x\" 字符是通配符。 因此，例如，如果将调色板 自动画架 设置为 #FxF0FF，它将向画架添加\n 颜色，例如 #FAF0FF 和 #F5F0FF，但不会添加 #0AF0FF。 他们还有",
    "Force Properties will force the blend outcome to always have the digit present in the resulting color. For example, if your top\n                    blender color is #A0F5D1, the \"Force Top Digit 2\" will force the output color to always be some form of #x0xxxx. You can force up\n                    to four blender color digits at once, with all four blender slots.": "强制属性将强制混合结果始终使数字出现在结果颜色中。 例如，如果您的顶部\n 搅拌器颜色是#A0F5D1，则“强制顶部数字 2”将强制输出颜色始终为某种形式的 #x0xxxx。 您可以一次强制使用多达四个搅拌器颜色数字，所有四个搅拌器插槽。",
    "SilverLinings": "银线",
    "SkyBlue": "天蓝色",
    "SlateBlue": "板岩蓝",
    "SlateGray": "板岩灰",
    "Snow": "雪",
    "some amt": "一些amt",
    "SortaBlack": "排序黑色",
    "SpringGreen": "春绿",
    "SteelBlue": "钢蓝",
    "Tan": "谭",
    "Teal": "蓝绿色",
    "Thank you for Playing!": "谢谢你来玩！",
    "The library denotes 154 web-color codes for you to collect. Each completed color in the library will add 1": "该库提供 154 个网络颜色代码供您收集。 库中每个完成的颜色将增加 1",
    "Thistle": "蓟",
    "DarkRed": "深红",
    "DarkSalmon": "黑鲑鱼",
    "DarkSeaGreen": "暗海绿",
    "DarkSlateBlue": "深石板蓝",
    "DarkSlateGray": "深石板灰",
    "DarkTurquoise": "深色绿松石",
    "DarkViolet": "暗紫",
    "Deep Purple": "深紫色",
    "DeepPink": "深粉红",
    "DeepSkyBlue": "深天蓝",
    "DodgerBlue": "道奇蓝",
    "Easel": "画架",
    "Elephantastic": "大象",
    "Empty": "空的",
    "Export Save": "导出保存",
    "Fast Blending": "快速混合",
    "Fast blending will double the speed of the blender.": "快速搅拌将使调色板的速度加倍。",
    "FireBrick": "耐火砖",
    "FloralWhite": "花白",
    "ForestGreen": "森林绿",
    "Fuchsia": "紫红色",
    "Gainsboro": "盖恩斯伯勒",
    "Game Running": "游戏运行",
    "GhostWhite": "鬼白",
    "Gold": "金子",
    "GoldenRod": "金棒",
    "Gray": "灰色的",
    "Green": "绿色的",
    "GreenYellow": "黄绿色",
    "History of colors": "颜色的历史",
    "Hold useful colors here": "在这里保留有用的颜色",
    "HoneyDew": "甘露",
    "HotPink": "亮粉色",
    "How to Play": "怎么玩",
    "Import Save": "导入保存",
    "IndianRed": "印度红",
    "Indigo": "靛青",
    "Ivory": "象牙",
    "Khaki": "卡其色",
    "Lavender": "薰衣草",
    "LavenderBlush": "薰衣草腮红",
    "LawnGreen": "草坪绿",
    "LemonChiffon": "柠檬雪纺",
    "Library": "图书馆",
    "LightBlue": "浅蓝色",
    "LightCoral": "光珊瑚",
    "LightCyan": "浅青色",
    "LightGoldenRodYellow": "光金色棒黄色",
    "LightGray": "浅灰",
    "LightGreen": "浅绿色",
    "LightPink": "浅粉色",
    "LightSalmon": "淡鲑鱼",
    "LightSeaGreen": "光海绿",
    "LightSkyBlue": "浅天蓝",
    "LightSlateGray": "浅石板灰",
    "LightSteelBlue": "轻钢蓝色",
    "LightYellow": "浅黄色",
    "Lime": "酸橙",
    "LimeGreen": "青柠",
    "Linen": "亚麻布",
    "Make these for palette points (1 pt remaining": "将这些作为调色板点（剩余 1 pt",
    "Maroon": "栗色",
    "MediumAquaMarine": "间绿色",
    "MediumBlue": "中蓝",
    "MediumOrchid": "中兰花",
    "MediumPurple": "中紫色",
    "MediumSeaGreen": "中海绿",
    "MediumSlateBlue": "中石板蓝",
    "MediumSpringGreen": "中春天绿色",
    "MediumTurquoise": "中绿松石",
    "MediumVioletRed": "中紫红",
    "MidnightBlue": "午夜蓝",
    "MintCream": "薄荷奶油",
    "MistyRose": "迷雾玫瑰",
    "Mixtory": "混合动力",
    "Moccasin": "莫卡辛",
    "Mutate": "变异",
    "NavajoWhite": "纳瓦霍白",
    "Navy": "海军",
    "NiceGray": "好灰",
    "NightmareBlack": "梦魇黑",
    "No Mutate will remove the random variation from blending. High Mutate will double the mutation chance to 10% per digit.": "无变异 会从混合中移除随机变化。高变异将使变异几率翻倍至每位数 10%。",
    "OldLace": "老花边",
    "Olive": "橄榄",
    "OliveDrab": "橄榄色",
    "OMG": "我的天啊",
    "Orange": "橘子",
    "OrangeRed": "橙红色",
    "Orchid": "兰花",
    "PaleGoldenRod": "淡金棒",
    "PaleGreen": "淡绿色",
    "PaleTurquoise": "淡绿松石色",
    "PaleVioletRed": "淡紫色红色",
    "PapayaWhip": "木瓜鞭",
    "PeachPuff": "桃子泡芙",
    "Peru": "秘鲁",
    "AliceBlue": "爱丽丝蓝",
    "AngryGray": "愤怒的灰色",
    "AntiqueWhite": "古董白色",
    "Aquamarine": "蓝晶",
    "AutoEasel": "自动画架",
    "AutoEasel (1": "自动画架 (1",
    "Azure": "天蓝色",
    "BattleshipGraey": "战舰格雷",
    "Beige": "浅褐色的",
    "Bisque": "浓汤",
    "Black": "黑色的",
    "BlanchedAlmond": "去皮杏仁",
    "Blend two colors to make new ones (sometimes they mutate": "混合两种颜色来制作新的颜色（有时它们会发生变异",
    "Blenders": "调色板",
    "Blue": "蓝色",
    "BlueViolet": "紫罗兰色",
    "Brown": "棕色的",
    "BurlyWood": "伯利伍德",
    "CadetBlue": "少年蓝",
    "Charcoal Gray": "木炭灰",
    "Chartreuse": "黄绿色",
    "Chocolate": "巧克力",
    "Clear All Blender Colors": "清除所有调色板颜色",
    "Clear All Blenders": "清除所有调色板",
    "Clear Save": "清除保存",
    "CloudyDay": "阴天",
    "Colors Mixed": "颜色混合",
    "Coral": "珊瑚",
    "CornflowerBlue": "矢车菊蓝色",
    "Cornsilk": "玉米丝",
    "Crimson": "赤红",
    "Cyan": "青色",
    "DarkBlue": "深蓝",
    "DarkCyan": "深青色",
    "DarkGoldenRod": "暗金棒",
    "DarkGray": "深灰色",
    "DarkGreen": "深绿色",
    "DarkKhaki": "深卡其色",
    "Purchase 3 Easels": "购买 3 个画架",
    "Purple": "紫色的",
    "RandomNumberGray": "随机数灰色",
    "RebeccaBlack": "丽贝卡布莱克",
    "RebeccaPurple": "丽贝卡紫",
    "Red": "红色的",
    "remaining": "其余的",
    "DarkMagenta": "深洋红色",
    "DarkOliveGreen": "深橄榄绿",
    "DarkOrange": "深橙色",
    "DarkOrchid": "黑兰花",
    "Pink": "粉色的",
    "PipGray": "点灰",
    "PirateGray": "海盗灰",
    "Plum": "李子",
    "PowderBlue": "粉蓝色",
    "PrinceofGrayness": "灰王子",
    "Propagate First Blender": "传播第一个调色板",
    "Properties": "特性",
    "RGBlender": "调色板放置",
    "RGBlender Help": "调色板放置 帮助",
    "RosyBrown": "玫瑰色棕色",
    "RoyalBlue": "宝蓝色",
    "SaddleBrown": "鞍棕色",
    "Salmon": "三文鱼",
    "SandyBrown": "桑迪布朗",
    "SeaGreen": "海绿色",
    "SeaShell": "贝壳",
    "ShadesofGray": "灰色阴影",
    "Sienna": "赭色",
    "Silver": "银",
    "Time Spent": "所花费的时间",
    "Tomato": "番茄",
    "Turquoise": "绿松石",
    "Violet": "紫色",
    "Wheat": "小麦",
    "which can be spent on a variety of upgrades. Completed Library colors can be clicked on to\n                    add them to a blender. Blend all the Remaining Library colors to complete the game.": "可用于各种升级。 可以单击已完成的库颜色以\n 将它们添加到调色板中。 混合所有剩余的库颜色以完成游戏。",
    "White": "白色的",
    "WhiteSmoke": "白色的烟",
    "Yellow": "黄色的",
    "YellowGreen": "黄绿色",
    "You can add these to blenders": "您可以将这些添加到调色板",
    "YOU WIN!": "你赢了！",
    "Properties allow you to change the default behavior of a blender. Blenders can have up to 4 properties equipped, although you\n                    must purchase these property slots. There's three basic properties": "属性允许您更改调色板的默认行为。 调色板最多可以装备 4 个属性，但您\n 必须购买这些属性插槽。 有三个基本属性",
    "Buying properties buys them for all mixers": "购买属性为所有混合器购买",
    "Properties available": "可用属性",
    "Mixer Properties": "混合器属性",
    "Auto Off": "自动关闭",
    "Disabled": "已禁用",
    "Purchase Mixer": "购买混合器",
    "Game Paused": "游戏已暂停",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Mix these for palette points (": "混合这些调色板点（",
    "Completed Library (": "已完成的库 (",
    "Properties (": "属性 (",
    "Remaining Library (": "剩余库 (",
    "AutoEasel: ": "自动画架：",
    "Buy A Property Slot (": "购买一个属性插槽 (",
    "Fast Blending (": "快速混合 (",
    "Force Bottom Digit ": "强制下位数字",
    "Force Top Digit ": "强制上位数字",
    "High Mutate Chance (": "高变异几率 (",
    "No Mutate Chance (": "无变异几率 (",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\#(.+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^([\d\.]+) Color Per Fill \(([\d\.]+)$/, '每个填充 $1 种颜色（$2'],
    [/^([\d\.]+) Colors Per Fill \(([\d\.]+)$/, '每个填充 $1 种颜色（$2'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) \/ (.+) elves$/, '成本：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);