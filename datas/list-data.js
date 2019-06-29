// 此文件存放新闻和电影数据

// 娱乐新闻的数据
let news_data = [
  
  {

    date: '2019-06-13',
    title: '《我心深触》定档6.19',
    detail_img: '/images/detail/list/01.jpg',
    avatar: '/images/avatar/4.png',
    detail_content: '由王可如、周澄奥、李茂等领衔主演的悬疑烧脑治愈剧——《我心深触》正式官宣6月19日晚8点黄金档上线，腾讯视频独播，并首发概念预告、海报及角色海报。剧情讲述了拥有神奇能力的孔逸飞与双重人格的韩冰，在惊心动魄的离奇案件中揭秘真相并互相治愈的故事。虽然首段预告片时长不足2分钟，但精彩的镜头、厚重的电影质感及血脉偾张的视觉冲击完全可以称得上“剧版狼人杀”。动作、青春、热血、爱情、悬疑等颇多看点累加，引发了不少网友的追剧热情。新生代小花王可如在剧中饰演的是拥有双重人格的女主韩冰/韩雪，人物海报中，王可如身着正装，随性地撩着头发，眼神却坚定地看着远方。“宁可冲动，也不要卑鄙地藏起来“，这句话是她角色的阐述，也是正义的化身。并且这个角色呐，还是人前人后“两副面孔”。表面上她是江城电视台的头号热血记者，私底下却能随时邀请你在线尬舞。',
    headImgSrc: '/images/detail/carousel/01.jpg',
    author: '钢铁侠 ',
    dataTime: '24time',
    detail_love_image1: '/images/icon/chat.png',
    detail_love_image2: '/images/icon/view.png',
    love_count: 88,
    attention_count: 66,
    detail: '钢铁战队。。',
    music: {
      dataUrl: 'http://www.ytmp3.cn/down/47868.mp3', // 音乐链接
      title: 'Dream It Possible',   // 音乐标题
      coverImgUrl: '/images/music/coverImg.jpg',
    },
    postId: 0
  },
  {
    
    date: '2019-06-13',
    title: '《Vogue Film时装电影酒会》在沪盛大举行',
    detail_img: '/images/detail/list/02.jpg',
    avatar: '/images/avatar/4.png',
    detail_content: '活动现场星光熠熠，《Vogue服饰与美容》编辑总监张宇(Angelica Cheung)同章子怡、胡歌、廖凡、陈伟霆、桂纶镁、Angelababy、景甜、娜扎、董洁、钟楚曦、杜鹃、何穗、李梦、文淇、孙怡等多位明星盛装亮相，闪耀红毯。更有刘雨霖、苏有朋、邱阳、张末、顾晓刚、程亮、杨超、杨明明、王一淳、文晔等著名导演齐聚一堂，共同见证时尚与电影的完美邂逅。亮相红毯的章子怡是《Vogue Film》第一期封面人物，本次酒会的红毯造型依旧时尚夺目。章子怡说：“时装造就了电影中的经典形象，而电影又将经典定格为永恒，与Vogue Film的每一次合作都十分美好。”',
    headImgSrc: '/images/detail/carousel/02.jpg',
    author: '美国队长',
    dataTime: '24time',
    detail_love_image1: '/images/icon/chat.png',
    detail_love_image2: '/images/icon/view.png',
    love_count: 88,
    attention_count: 66,
    detail: '有魅力的老男人。',
    music: {
      dataUrl: 'http://www.ytmp3.cn/down/37412.mp3', // 音乐链接
      title: '未闻花名',   // 音乐标题
      coverImgUrl: '/images/music/coverImg.jpg',
    },
    postId: 1
  },
  {

    date: '2019-06-13',
    title: '马伊琍获中国电影最佳女主角',
    detail_img: '/images/detail/list/03.jpg',
    avatar: '/images/avatar/4.png',
    detail_content: '昨日，第25届华鼎奖在澳门举办。马伊琍凭借在电影《找到你》中孙芳一角斩获中国电影最佳女主角。身着黑色抹胸套装亮相的马伊琍干练优雅，锁骨美背十足吸睛。再谈保姆孙芳“演员的职责是靠近角色，不是角色靠近我”。据悉，此次也是马伊琍继《江北好人》《北上广不相信眼泪》后第三度斩获华鼎奖杯。今早，马伊琍发布微博，回忆高中时为“中国电影最佳男主”郭富城伴舞的趣事，称“终于鼓足勇气告诉刘杰辉扮演者自己曾在高中时代当伴舞演员时在上海万体馆给他伴过舞”，网友热评：是追星女孩没错了。',
    headImgSrc: '/images/detail/carousel/03.jpg',
    author: '绿巨人',
    dataTime: '24time',
    detail_love_image1: '/images/icon/chat.png',
    detail_love_image2: '/images/icon/view.png',
    love_count: 88,
    attention_count: 66,
    detail: '巨无霸教授。',
    music: {
      dataUrl: 'http://www.ytmp3.cn/down/70077.mp3', // 音乐链接
      title: '晴天',   // 音乐标题
      coverImgUrl: '/images/music/coverImg.jpg',
    },
    postId: 2
  },
  {
    date: '2019-06-13 下午 4:30:35',
    title: '小S“魔性眼妆”吓跑服务员 大S自曝减肥秘诀',
    detail_img: '/images/detail/list/04.jpg',
    detail_content: '6月13日电 原生友谊真情秀《我们是真正的朋友》第六期节目将于今晚播出，结束了茵莱湖的自然之旅，四姐妹本期行程将抵达仰光。值得一提的是，本期节目也将揭秘“大S减肥秘籍”。第六期节目中，四姐妹一行来到了第三站仰光，此次正巧赶上当地新年的泼水节。四姐妹为了提升防御力，不仅泳帽、防水衣、泳镜等装备一应俱全，大S黄色长款雨衣搭配时尚防水镜；小S凭借着米奇潜水帽瞬间萌翻观众；阿雅和范晓萱更是从头武装到脚踝。对比当地人日常出街的常规造型，四姐妹的造型遭遇“大流量水枪”攻击，十分搞笑。',
    detail_love_image1: '/images/icon/chat.png',
    detail_love_image2: '/images/icon/view.png',
    love_count: 92,
    headImgSrc: '/images/detail/carousel/04.jpg',
    author: '新华社',
    attention_count: 88,
    avatar: '/images/avatar/1.png',
    music: {
      dataUrl: 'http://up.mcyt.net/down/43024.mp3', // 音乐链接
      title: '氧气',   // 音乐标题
      coverImgUrl: '/images/music/coverImg.jpg',
    },
    postId: 3
  },
  {
    date: '2019-06-13 下午3:30:35',
    title: '周冬雨井柏然为《千与千寻》中文版献声',
    detail_img: '/images/detail/list/05.jpg',
    detail_content: '北京6月12日电 近日，即将上映的宫崎骏经典作品《千与千寻》公布男女主角的中文配音演员：周冬雨担任千寻配音，井柏然则为白龙首次献声，加上此前公布的田壮壮(饰演锅炉爷爷)、王琳(饰演汤&钱婆婆)、彭昱畅(饰演无脸男)，《千与千寻》中文配音阵容已集结完毕。作为宫崎骏作品的忠实影迷，周冬雨和井柏然表示，能为自己一直很喜欢的《千与千寻》配音仿佛“梦想成真”，对于影片的内核，两人都谈到，不同阶段看一定会有不同的收获，《千与千寻》是一部值得多看几遍的经典。周冬雨表示，虽然此前有为动画配音的经历，但“千寻”仍是一个很大的挑战：揣摩一个小女孩的情绪和音色并非易事，刚录制时，需要花费2-3个小时打磨一句台词以达到要求。她调侃自己就像进入汤屋的千寻，起初是一个“菜鸟”，但不断坚持后，终会达到令自己满意的效果。',
    detail_love_image1: '/images/icon/chat.png',
    detail_love_image2: '/images/icon/view.png',
    love_count: 88,
    attention_count: 66,
    headImgSrc: '/images/detail/carousel/05.jpg',
    author: '新华社',
    avatar: '/images/avatar/2.png',
    music: {
      dataUrl: 'http://up.mcyt.net/down/46100.mp3', // 音乐链接
      title: 'IF-Ken Arai',   // 音乐标题
      coverImgUrl: '/images/music/coverImg.jpg',
    },
    postId: 4
  },
  {

    date: '2019-06-11',
    title: '著名男高音歌唱家杨阳因抑郁症去世 年仅45岁',
    detail_img: '/images/detail/list/06.jpg',
    avatar: '/images/avatar/3.png',
    detail_content: '6月11日电(记者 张曦) 记者获悉，10日下午，著名男高音歌唱家杨阳因抑郁症不幸离世，年仅45岁。据首都师范大学音乐学院官网介绍，杨阳是该学院的声乐教授、硕士生导师，也是国家一级演员、中央歌剧院特聘艺术家。杨阳本科毕业于解放军艺术学院，获得“美声唱法”学士学位，后就读中国音乐学院，获“民族唱法”硕士学位。他曾在意大利、德国、俄罗斯、匈牙利、克罗地亚、以色列、韩国等几十个国家的歌剧及音乐会舞台演唱，主演数十部中外歌剧。2012年被中央电视台评选为“中国十大男高音”，还曾获得第十二届“文华表演奖”、十三届“五个一工程奖”、第四届中国音乐“金钟奖”金奖、乌克兰国家艺术勋章等。',
    headImgSrc: '/images/detail/list/06.jpg',
    author: '李白3',
    detail_love_image1: '/images/icon/chat.png',
    detail_love_image2: '/images/icon/view.png',
    love_count: 88,
    attention_count: 66,
    detail: '女神。。。',
    music: {
      dataUrl: 'http://up.mcyt.net/down/46102.mp3', // 音乐链接
      title: '汪峰 - 儿时',   // 音乐标题
      coverImgUrl: '/images/music/coverImg.jpg',
    },
    postId: 5
  },
  {

    date: '2019-06-11',
    title: '周笔畅巡演将启动：将表演新歌 丰富舞蹈',
    detail_img: '/images/detail/list/07.jpg',
    avatar: '/images/avatar/4.png',
    detail_content: '北京6月11日电 10日，“周笔畅2019LUNAR巡回演唱会”在北京举行发布会。周笔畅除了介绍演唱会的看点外，还透露自己将抓紧时间进行高强度的舞蹈训练。谈到此次演唱会的名称“LUNAR”，周笔畅解释称：“LUNAR代表了女性的力量，想通过专辑和演唱会来呈现女性独特的美，以及自信和独立。”。为了让演唱会呈现出高度的视觉和音乐审美，周笔畅邀请到著名音乐制作人梁翹柏和监制庄少荣合作，希望艺术化地呈现“刚”、“柔”并存。音乐方面，周笔畅透露，此次巡回演唱会不仅要带来全新专辑所有歌曲的首度表演舞台，也将重新演绎出道至今多首金曲。同时，这次的舞蹈相比上一轮巡演会更加丰富，周笔畅还调侃称，自己等发布会结束后就要进行高强度的舞蹈训练，为演唱会做准备。',
    headImgSrc: '/images/detail/carousel/07.jpg',
    author: '新华社',
    detail_love_image1: '/images/icon/chat.png',
    detail_love_image2: '/images/icon/view.png',
    love_count: 88,
    attention_count: 66,
    detail: '女神2。。。',
    music: {
      dataUrl: 'http://up.mcyt.net/down/46110.mp3', // 音乐链接
      title: '曲婉婷 - 我的歌声里-(电视剧《在线爱》主题曲)',   // 音乐标题
      coverImgUrl: '/images/music/coverImg.jpg',
    },
    postId: 6
  },
];




// 电影频道的数据
let movies_data = [
  {
    casts: [
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p230.jpg"},
        name: "弗兰克·德拉邦特"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17525.jpg"},
        name: "蒂姆·罗宾斯"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34642.jpg"},
        name: "摩根·弗里曼"
      }
    ],
    comments_count: 222527,
    countries: ["美国"],
    directors: [{
      avatars: {large: null},
      name: "弗兰克·德拉邦特"
    }],
    genres: ["剧情","犯罪"],
    id: 3,
    images: { large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg"},
    original_title: "肖申克的救赎 The Shawshank Redemption",
    rating: {average: 9.6, max: 10, min: 0, stars: "50"},
    reviews_count: 5794,
    summary: "",
    title: "肖申克的救赎 The Shawshank Redemption",
    wish_count: 98814,
    year: 1994 
  },
  {
    casts: [
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451727734.81.jpg"},
        name: "陈凯歌"
      },
      {
        avatars: { large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p67.jpg"},
        name: "张国荣"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p46345.jpg"},
        name: "张丰毅"
      }
    ],
    comments_count: 182073,
    countries: ["中国大陆", "香港"],
    directors: [{
      avatars: {large: null},
      name: "陈凯歌"
    }],
    genres: ["剧情","爱情","同性"],
    id: 52,
    images: { large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910813120.jpg"},
    original_title: "霸王别姬",
    rating: {average: 9.5, max: 10, min: 0, stars: "50"},
    reviews_count: 5015,
    summary: "",
    title: "霸王别姬",
    wish_count: 83628,
    year: 1993 
  },
  {
    casts: [
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33301.jpg"},
        name: "吕克·贝松"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8833.jpg"},
        name: "让·雷诺"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2274.jpg"},
        name: "娜塔莉·波特曼"
      }
    ],
    comments_count: 203861,
    countries: ["法国"],
    directors: [{
      avatars: {large: null},
      name: "吕克·贝松"
    }],
    genres: ["剧情","动作","犯罪"],
    id: 169,
    images: { large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p511118051.jpg"},
    original_title: "这个杀手不太冷 Léon",
    rating: {average: 9.4, max: 10, min: 0, stars: "45"},
    reviews_count: 3776,
    summary: "",
    title: "这个杀手不太冷 Léon",
    wish_count: 71203,
    year: 1994 
  },
  {
    casts: [
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p505.jpg"},
        name: "罗伯特·泽米吉斯"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p551.jpg"},
        name: "汤姆·汉克斯"
      },
      {
        avatars: { large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51737.jpg"},
        name: "罗宾·怀特"
      }
    ],
    comments_count: 153578,
    countries: ["美国"],
    directors: [{
      avatars: {large: null},
      name: "罗伯特·泽米吉斯"
    }],
    genres: ["剧情","爱情"],
    id: 211,
    images: { large: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p510876377.jpg"},
    original_title: "阿甘正传 Forrest Gump",
    rating: {average: 9.4, max: 10, min: 0, stars: "45"},
    reviews_count: 2983,
    summary: "",
    title: "阿甘正传 Forrest Gump",
    wish_count: 60744,
    year: 1994 
  },
  {
    casts: [
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26764.jpg"},
        name: "罗伯托·贝尼尼"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p26764.jpg"},
        name: "罗伯托·贝尼尼"
      },
      {
        avatars: { large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9548.jpg"},
        name: "尼可莱塔·布拉斯基"
      }
    ],
    comments_count: 114126,
    countries: ["意大利"],
    directors: [{
      avatars: {large: null},
      name: "罗伯托·贝尼尼"
    }],
    genres: ["剧情","爱情","喜剧","战争"],
    id: 95,
    images: { large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p510861873.jpg"},
    original_title: "美丽人生 La vita è bella",
    rating: {average: 9.5, max: 10, min: 0, stars: "50"},
    reviews_count: 2385,
    summary: "",
    title: "美丽人生 La vita è bella",
    wish_count: 145440,
    year: 1997 
  },
  {
    casts: [
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p616.jpg"},
        name: "宫崎骏"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1463193210.13.jpg"},
        name: "柊瑠美"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p44986.jpg"},
        name: "入野自由"
      }
    ],
    comments_count: 144168,
    countries: ["意大利"],
    directors: [{
      avatars: {large: null},
      name: "宫崎骏"
    }],
    genres: ["剧情","动画","奇幻"],
    id: 76,
    images: { large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910830216.jpg"},
    original_title: "千与千寻 千と千尋の神隠し",
    rating: {average: 9.2, max: 10, min: 0, stars: "45"},
    reviews_count: 2529,
    summary: "",
    title: "千与千寻 千と千尋の神隠し",
    wish_count: 52352,
    year: 2001 
  },
  {
    casts: [
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33715.jpg"},
        name: "詹姆斯·卡梅隆"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p814.jpg"},
        name: "莱昂纳多·迪卡普里奥"
      },
      {
        avatars: { large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p53358.jpg"},
        name: "凯特·温丝莱特"
      }
    ],
    comments_count: 130866,
    countries: ["美国"],
    directors: [{
      avatars: {large: null},
      name: "詹姆斯·卡梅隆"
    }],
    genres: ["剧情","爱情","灾难"],
    id: 182,
    images: { large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p457760035.jpg"},
    original_title: "泰坦尼克号 Titanic",
    rating: {average: 9.2, max: 10, min: 0, stars: "45"},
    reviews_count: 1718,
    summary: "",
    title: "泰坦尼克号 Titanic",
    wish_count: 29897,
    year: 1997 
  },
  {
    casts: [
      {
        avatars: { large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p617.jpg"},
        name: "史蒂文·斯皮尔伯格"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p44906.jpg"},
        name: "连姆·尼森"
      },
      {
        avatars: { large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1374649659.58.jpg"},
        name: "本·金斯利"
      }
    ],
    comments_count: 76136,
    countries: ["美国"],
    directors: [{
      avatars: {large: null},
      name: "史蒂文·斯皮尔伯格"
    }],
    genres: ["剧情","历史","战争"],
    id: 42,
    images: { large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p492406163.jpg"},
    original_title: "辛德勒的名单 Schindler's List",
    rating: {average: 9.4, max: 10, min: 0, stars: "45"},
    reviews_count: 1382,
    summary: "",
    title: "辛德勒的名单 Schindler's List",
    wish_count: 130705,
    year: 1993 
  },
  {
    casts: [
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p673.jpg"},
        name: "克里斯托弗·诺兰"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p814.jpg"},
        name: "莱昂纳多·迪卡普里奥"
      },
      {
        avatars: { large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p3517.jpg"},
        name: "约瑟夫·高登-莱维特"
      }
    ],
    comments_count: 209333,
    countries: ["美国","英国"],
    directors: [{
      avatars: {large: null},
      name: "克里斯托弗·诺兰"
    }],
    genres: ["剧情", "动作", "科幻", "悬疑", "冒险"],
    id: 170,
    images: { large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p513344864.jpg"},
    original_title: "盗梦空间 Inception",
    rating: {average: 9.3, max: 10, min: 0, stars: "45"},
    reviews_count: 5061,
    summary: "",
    title: "盗梦空间 Inception",
    wish_count: 99160,
    year: 2010 
  },
  {
    casts: [
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1467359656.96.jpg"},
        name: "安德鲁·斯坦顿"
      },
      {
        avatars: { large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p13028.jpg"},
        name: "本·贝尔特"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1365856130.16.jpg"},
        name: "艾丽莎·奈特"
      }
    ],
    comments_count: 118563,
    countries: ["美国"],
    directors: [{
      avatars: {large: null},
      name: "安德鲁·斯坦顿"
    }],
    genres: ["喜剧", "爱情", "科幻", "动画", "冒险"],
    id: 168,
    images: { large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p449665982.jpg"},
    original_title: "机器人总动员 WALL·E",
    rating: {average: 9.3, max: 10, min: 0, stars: "45"},
    reviews_count: 2291,
    summary: "",
    title: "机器人总动员 WALL·E",
    wish_count: 69041,
    year: 2008 
  },
  {
    casts: [
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p195.jpg"},
        name: "朱塞佩·托纳多雷"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6281.jpg"},
        name: "蒂姆·罗斯"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1355152571.6.jpg"},
        name: "普路特·泰勒·文斯"
      }
    ],
    comments_count: 137239,
    countries: ["意大利"],
    directors: [{
      avatars: {large: null},
      name: "朱塞佩·托纳多雷"
    }],
    genres: ["剧情", "音乐"],
    id: 208,
    images: { large: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p511146807.jpg"},
    original_title: "海上钢琴师 La leggenda del pianista sull'oceano",
    rating: {average: 9.2, max: 10, min: 0, stars: "45"},
    reviews_count: 4696,
    summary: "",
    title: "海上钢琴师 La leggenda del pianista sull'oceano",
    wish_count: 103537,
    year: 1998 
  },
  {
    casts: [
      {
        avatars: { large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p16549.jpg"},
        name: "拉吉库马尔·希拉尼"
      },
      {
        avatars: { large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p13628.jpg"},
        name: "阿米尔·汗"
      },
      {
        avatars: { large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5568.jpg"},
        name: "卡琳娜·卡普尔"
      }
    ],
    comments_count: 200565,
    countries: ["印度"],
    directors: [{
      avatars: {large: null},
      name: "拉吉库马尔·希拉尼"
    }],
    genres: ["剧情", "喜剧", "爱情", "歌舞"],
    id: 6,
    images: { large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p579729551.jpg"},
    original_title: "三傻大闹宝莱坞 3 Idiots",
    rating: {average: 9.1, max: 10, min: 0, stars: "45"},
    reviews_count: 3662,
    summary: "",
    title: "三傻大闹宝莱坞 3 Idiots",
    wish_count: 53208,
    year: 2009 
  },
  {
    casts: [
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4333.jpg"},
        name: "拉斯·霍尔斯道姆"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33013.jpg"},
        name: "理查·基尔"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5502.jpg"},
        name: "萨拉·罗默尔"
      }
    ],
    comments_count: 144423,
    countries: ["美国","英国"],
    directors: [{
      avatars: {large: null},
      name: "拉斯·霍尔斯道姆"
    }],
    genres: ["剧情"],
    id: 156,
    images: { large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p524964016.jpg"},
    original_title: "忠犬八公的故事 Hachi: A Dog's Tale",
    rating: {average: 9.2, max: 10, min: 0, stars: "45"},
    reviews_count: 2598,
    summary: "",
    title: "忠犬八公的故事 Hachi: A Dog's Tale",
    wish_count: 64236,
    year: 2009 
  },
  {
    casts: [
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p24744.jpg"},
        name: "克里斯托夫·巴拉蒂"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p3363.jpg"},
        name: "热拉尔·朱尼奥"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1414312828.15.jpg"},
        name: "让-巴蒂斯特·莫尼耶"
      }
    ],
    comments_count: 102087,
    countries: ["法国","瑞士","德国"],
    directors: [{
      avatars: {large: null},
      name: "克里斯托夫·巴拉蒂"
    }],
    genres: ["剧情","音乐"],
    id: 70,
    images: { large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910824951.jpg"},
    original_title: "放牛班的春天 Les choristes",
    rating: {average: 9.2, max: 10, min: 0, stars: "45"},
    reviews_count: 1951,
    summary: "",
    title: "放牛班的春天 Les choristes",
    wish_count: 79766,
    year: 2004 
  },
  {
    casts: [
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p45374.jpg"},
        name: "刘镇伟"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p47421.jpg"},
        name: "周星驰"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p45481.jpg"},
        name: "吴孟达"
      }
    ],
    comments_count: 110762,
    countries: ["香港", "中国大陆"],
    directors: [{
      avatars: {large: null},
      name: "刘镇伟"
    }],
    genres: ["喜剧", "爱情", "奇幻", "冒险"],
    id: 105,
    images: { large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2455050536.jpg"},
    original_title: "大话西游之大圣娶亲 西遊記大結局之仙履奇緣",
    rating: {average: 9.2, max: 10, min: 0, stars: "45"},
    reviews_count: 3134,
    summary: "",
    title: "大话西游之大圣娶亲 西遊記大結局之仙履奇緣",
    wish_count: 47620,
    year: 1995 
  },
  {
    casts: [
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4360.jpg"},
        name: "彼得·威尔"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p615.jpg"},
        name: "金·凯瑞"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p516.jpg"},
        name: "劳拉·琳妮"
      }
    ],
    comments_count: 113367,
    countries: ["美国"],
    directors: [{
      avatars: {large: null},
      name: "彼得·威尔"
    }],
    genres: ["剧情", "科幻"],
    id: 150,
    images: { large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p479682972.jpg"},
    original_title: "楚门的世界 The Truman Show",
    rating: {average: 9.1, max: 10, min: 0, stars: "45"},
    reviews_count: 3174,
    summary: "",
    title: "楚门的世界 The Truman Show",
    wish_count: 90861,
    year: 1998 
  },
  {
    casts: [
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p616.jpg"},
        name: "宫崎骏"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1455201170.02.jpg"},
        name: "日高法子"
      },
      {
        avatars: { large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p29537.jpg"},
        name: "坂本千夏"
      }
    ],
    comments_count: 92554,
    countries: ["日本"],
    directors: [{
      avatars: {large: null},
      name: "宫崎骏"
    }],
    genres: ["动画", "家庭", "儿童", "奇幻"],
    id: 247,
    images: { large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p456668316.jpg"},
    original_title: "龙猫 となりのトトロ",
    rating: {average: 9.1, max: 10, min: 0, stars: "45"},
    reviews_count: 1172,
    summary: "",
    title: "龙猫 となりのトトロ",
    wish_count: 54821,
    year: 1988 
  },
  {
    casts: [
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p592.jpg"},
        name: "弗朗西斯·福特·科波拉"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p45035.jpg"},
        name: "马龙·白兰度"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p645.jpg"},
        name: "阿尔·帕西诺"
      }
    ],
    comments_count: 72875,
    countries: ["美国"],
    directors: [{
      avatars: {large: null},
      name: "弗朗西斯·福特·科波拉"
    }],
    genres: ["剧情", "犯罪"],
    id: 8,
    images: { large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2190556185.jpg"},
    original_title: "教父 The Godfather",
    rating: {average: 9.2, max: 10, min: 0, stars: "45"},
    reviews_count: 1015,
    summary: "",
    title: "教父 The Godfather",
    wish_count: 113982,
    year: 1972 
  },
  {
    casts: [
      {
        avatars: { large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p52558.jpg"},
        name: "黄东赫"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p55195.jpg"},
        name: "孔侑"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1352773255.21.jpg"},
        name: "郑有美"
      }
    ],
    comments_count: 103389,
    countries: ["韩国"],
    directors: [{
      avatars: {large: null},
      name: "黄东赫"
    }],
    genres: ["剧情"],
    id: 85,
    images: { large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1363250216.jpg"},
    original_title: "熔炉 도가니",
    rating: {average: 9.2, max: 10, min: 0, stars: "45"},
    reviews_count: 2798,
    summary: "",
    title: "熔炉 도가니",
    wish_count: 88472,
    year: 2011 
  },
  {
    casts: [
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p673.jpg"},
        name: "克里斯托弗·诺兰"
      },
      {
        avatars: { large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1392653727.04.jpg"},
        name: "马修·麦康纳"
      },
      {
        avatars: { large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p10467.jpg"},
        name: "安妮·海瑟薇"
      }
    ],
    comments_count: 183918,
    countries: ["美国", "英国", "加拿大", "冰岛"],
    directors: [{
      avatars: {large: null},
      name: "克里斯托弗·诺兰"
    }],
    genres: ["剧情", "科幻", "冒险"],
    id: 214,
    images: { large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2206088801.jpg"},
    original_title: "星际穿越 Interstellar",
    rating: {average: 9.1, max: 10, min: 0, stars: "45"},
    reviews_count: 4059,
    summary: "",
    title: "星际穿越 Interstellar",
    wish_count: 69736,
    year: 2014 
  },
]
// 这样暴露接口可以
// module.exports.news_data = news_data;
// module.exports.movies_data = movies_data;
// 这样暴露接口也可以
// module.exports = { 
//   news_data: news_data, 
//   movies_data: movies_data }
// 简写成这样
module.exports = { news_data, movies_data }
