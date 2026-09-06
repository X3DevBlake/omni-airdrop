// OMNI Reusable Mascot Widget Module
// Build 447 distinct mascots (Shimejis) for the OMNI Ecosystem

const OMNI_MASCOTS = [
  {
      "id": "zombie-companion",
      "name": "Zombie Mascot",
      "desc": "A friendly cartoon zombie companion with googly eyes.",
      "avatar": "zombie-companion.png",
      "sizeFactor": 1.3,
      "isStatic": true,
      "phrases": [
          "Brainss... I mean, let's compile some code!",
          "Need some help debugging, boss?",
          "I'm a low-poly friendly zombie, kupo!",
          "Aaauuugghh... code looks clean!"
      ]
  },
  {
      "id": "ffrk-tyro",
      "name": "Tyro (FFRK)",
      "desc": "FFRK companion character from Final Fantasy (Core Classes).",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/original_scenario/battle_list/character/player/100001/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for another record dungeon!",
          "Let's protect the history of the worlds!",
          "Awaiting instructions, explorer!"
      ]
  },
  {
      "id": "ffrk-dr-mog",
      "name": "Dr. Mog (FFRK)",
      "desc": "FFRK companion character from Final Fantasy (Core Classes).",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/original_scenario/battle_list/character/player/100038/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Keep checking those records!",
          "A daily reward is waiting!",
          "Use your mythril wisely, kupo!"
      ]
  },
  {
      "id": "ffrk-elarra",
      "name": "Elarra (FFRK)",
      "desc": "FFRK companion character from Final Fantasy (Core Classes).",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/original_scenario/battle_list/character/player/100039/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "I will sing for you.",
          "Let's restore the records.",
          "We can do this!"
      ]
  },
  {
      "id": "ffrk-biggs",
      "name": "Biggs (FFRK)",
      "desc": "FFRK companion character from Final Fantasy (Core Classes).",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/100041/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-wedge",
      "name": "Wedge (FFRK)",
      "desc": "FFRK companion character from Final Fantasy (Core Classes).",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/100042/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-hooded-entity",
      "name": "Hooded Entity (FFRK)",
      "desc": "FFRK companion character from Final Fantasy (Core Classes).",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/100043/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-shadowsmith",
      "name": "Shadowsmith (FFRK)",
      "desc": "FFRK companion character from Final Fantasy (Core Classes).",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/100046/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-warrior-of-light",
      "name": "Warrior of Light (FFRK)",
      "desc": "FFRK companion character from Final Fantasy I.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/original_scenario/battle_list/character/player/101001/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "The light guides me.",
          "For Cornelia!",
          "My sword is yours.",
          "Hope is never lost!"
      ]
  },
  {
      "id": "ffrk-garland",
      "name": "Garland (FFRK)",
      "desc": "FFRK companion character from Final Fantasy I.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/original_scenario/battle_list/character/player/101002/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "I will knock you all down!",
          "Chaos will consume everything!",
          "Despair awaits!"
      ]
  },
  {
      "id": "ffrk-sarah",
      "name": "Sarah (FFRK)",
      "desc": "FFRK companion character from Final Fantasy I.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/original_scenario/battle_list/character/player/101003/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-matoya",
      "name": "Matoya (FFRK)",
      "desc": "FFRK companion character from Final Fantasy I.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/theatre/character/player/101004/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-king-of-cornelia",
      "name": "King of Cornelia (FFRK)",
      "desc": "FFRK companion character from Final Fantasy I.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/theatre/character/player/101011/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-cornelian-soldier",
      "name": "Cornelian Soldier (FFRK)",
      "desc": "FFRK companion character from Final Fantasy I.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/theatre/character/player/101012/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-minister-lagone",
      "name": "Minister Lagone (FFRK)",
      "desc": "FFRK companion character from Final Fantasy I.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/theatre/character/player/101013/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-prince-of-elfheim",
      "name": "Prince of Elfheim (FFRK)",
      "desc": "FFRK companion character from Final Fantasy I.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/theatre/character/player/101014/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-elven-citizen",
      "name": "Elven Citizen (FFRK)",
      "desc": "FFRK companion character from Final Fantasy I.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/theatre/character/player/101015/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-elven-sage",
      "name": "Elven Sage (FFRK)",
      "desc": "FFRK companion character from Final Fantasy I.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/theatre/character/player/101018/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-chaos",
      "name": "Chaos (FFRK)",
      "desc": "FFRK companion character from Final Fantasy I.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/101019/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-firion",
      "name": "Firion (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102001/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "For a wild rose!",
          "Our dream will never die.",
          "We fight for peace."
      ]
  },
  {
      "id": "ffrk-maria",
      "name": "Maria (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102002/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-guy",
      "name": "Guy (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102003/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-leon",
      "name": "Leon (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102004/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-minwu",
      "name": "Minwu (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102005/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-gordon",
      "name": "Gordon (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102006/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-leila",
      "name": "Leila (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102007/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-ricard",
      "name": "Ricard (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102008/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-the-emperor",
      "name": "The Emperor (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102010/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-hilda",
      "name": "Hilda (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102011/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-scott",
      "name": "Scott (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102012/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-black-knight",
      "name": "Black Knight (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102013/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-rebel-soldier",
      "name": "Rebel Soldier (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102014/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-man",
      "name": "Man (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102015/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-woman",
      "name": "Woman (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102016/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-king",
      "name": "King (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102017/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-cid",
      "name": "Cid (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102018/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-leon-dark-knight",
      "name": "Leon, Dark Knight (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102019/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-beaver",
      "name": "Beaver (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102021/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-cat",
      "name": "Cat (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102022/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-boy",
      "name": "Boy (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102023/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-girl",
      "name": "Girl (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102024/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-paul",
      "name": "Paul (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102025/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-nelly",
      "name": "Nelly (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102026/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-borghen",
      "name": "Borghen (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102027/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-palamecian-sergeant",
      "name": "Palamecian Sergeant (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102028/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-sailor",
      "name": "Sailor (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102029/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-pirate",
      "name": "Pirate (FFRK)",
      "desc": "FFRK companion character from Final Fantasy II.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/102030/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-luneth",
      "name": "Luneth (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103001/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-arc",
      "name": "Arc (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103002/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-refia",
      "name": "Refia (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103003/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-ingus",
      "name": "Ingus (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103004/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-desch",
      "name": "Desch (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103005/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-sara",
      "name": "Sara (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103008/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-aria",
      "name": "Aria (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103009/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-delilah",
      "name": "Delilah (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103010/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-old-man-blue",
      "name": "Old Man (Blue) (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103011/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-victim-of-djinn-s-curse",
      "name": "Victim of Djinn's Curse (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103012/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-king-sasune",
      "name": "King Sasune (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103013/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-woman",
      "name": "Woman (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103014/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-djinn",
      "name": "Djinn (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103015/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-soldier-purple",
      "name": "Soldier (Purple) (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103016/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-four-old-men",
      "name": "Four Old Men (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103017/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-gigantoad",
      "name": "Gigantoad (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103020/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-jolina",
      "name": "Jolina (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103021/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-salina",
      "name": "Salina (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103022/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-bahamut-s-hatchling",
      "name": "Bahamut's Hatchling (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103023/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-gulgan",
      "name": "Gulgan (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103024/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-medusa",
      "name": "Medusa (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103025/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-gutsco",
      "name": "Gutsco (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103026/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-dwarf",
      "name": "Dwarf (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103027/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-man",
      "name": "Man (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103029/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-soldier-red",
      "name": "Soldier (Red) (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103030/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-soldier-green",
      "name": "Soldier (Green) (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103031/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-king-argus",
      "name": "King Argus (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103032/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-hein",
      "name": "Hein (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103033/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-fairy",
      "name": "Fairy (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103034/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-old-man-green",
      "name": "Old Man (Green) (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103035/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-kraken",
      "name": "Kraken (FFRK)",
      "desc": "FFRK companion character from Final Fantasy III.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/103036/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-cecil-dark-knight",
      "name": "Cecil, Dark Knight (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/original_scenario/battle_list/character/player/104001/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Light and dark, side by side.",
          "I will protect everyone.",
          "For Baron!"
      ]
  },
  {
      "id": "ffrk-cecil-paladin",
      "name": "Cecil, Paladin (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104002/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Light and dark, side by side.",
          "I will protect everyone.",
          "For Baron!"
      ]
  },
  {
      "id": "ffrk-kain-dragoon",
      "name": "Kain, Dragoon (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/original_scenario/battle_list/character/player/104003/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Pride of the dragoon!",
          "No path is too high.",
          "I walk my own road."
      ]
  },
  {
      "id": "ffrk-rydia-child",
      "name": "Rydia, Child (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/original_scenario/battle_list/character/player/104004/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Mist Dragon, hear me!",
          "Summoning magic ready!",
          "We have to fight!"
      ]
  },
  {
      "id": "ffrk-rydia-chosen-of-feymarch",
      "name": "Rydia, Chosen of Feymarch (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104005/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Mist Dragon, hear me!",
          "Summoning magic ready!",
          "We have to fight!"
      ]
  },
  {
      "id": "ffrk-rosa",
      "name": "Rosa (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104006/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-edward",
      "name": "Edward (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/original_scenario/battle_list/character/player/104007/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-yang",
      "name": "Yang (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104008/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-palom",
      "name": "Palom (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104009/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-porom",
      "name": "Porom (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104010/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-tellah",
      "name": "Tellah (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/original_scenario/battle_list/character/player/104011/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-edge",
      "name": "Edge (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104012/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-golbez",
      "name": "Golbez (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104014/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-cid-iv",
      "name": "Cid (IV) (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104015/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-rubicante",
      "name": "Rubicante (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104020/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-barbariccia",
      "name": "Barbariccia (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104022/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-elder-of-mysidia",
      "name": "Elder of Mysidia (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104025/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-black-mage",
      "name": "Black Mage (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104026/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-white-mage",
      "name": "White Mage (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104027/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-captain-01",
      "name": "Captain 01 (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/theatre/character/player/104028/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-soldier-01",
      "name": "Soldier 01 (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104029/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-baigan",
      "name": "Baigan (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/theatre/character/player/104030/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-king-01",
      "name": "King 01 (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/theatre/character/player/104031/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-woman-01",
      "name": "Woman 01 (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/theatre/character/player/104032/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-asura",
      "name": "Asura (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/theatre/character/player/104033/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-leviathan",
      "name": "Leviathan (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/theatre/character/player/104034/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-anna",
      "name": "Anna (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/theatre/character/player/104035/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-monk",
      "name": "Monk (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104036/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-sandy",
      "name": "Sandy (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104037/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-cindy",
      "name": "Cindy (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104038/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-mindy",
      "name": "Mindy (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104039/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-king-02",
      "name": "King 02 (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104040/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-old-man-02",
      "name": "Old Man 02 (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104041/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-generic-monster-01",
      "name": "Generic Monster 01 (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104042/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-giott",
      "name": "Giott (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104043/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-luca-child",
      "name": "Luca (Child) (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104044/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-dwarf",
      "name": "Dwarf (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104045/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-dr-lugae",
      "name": "Dr. Lugae (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104046/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-generic-monster-02",
      "name": "Generic Monster 02 (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104047/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-sylph",
      "name": "Sylph (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104048/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-sheila",
      "name": "Sheila (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104049/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-scarmiglione-hooded",
      "name": "Scarmiglione (Hooded) (FFRK)",
      "desc": "FFRK companion character from Final Fantasy IV.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/104052/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-gilgamesh",
      "name": "Gilgamesh (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/105007/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Now we fight like men! And ladies! And ladies who dress like men!",
          "Greg has arrived!",
          "Looking for the real Excalibur!"
      ]
  },
  {
      "id": "ffrk-bartz",
      "name": "Bartz (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/original_scenario/battle_list/character/player/105008/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "The wind is calling!",
          "I'm Bartz, a traveler.",
          "Let's explore!"
      ]
  },
  {
      "id": "ffrk-faris",
      "name": "Faris (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/original_scenario/battle_list/character/player/105009/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-dorgann",
      "name": "Dorgann (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/original_scenario/battle_list/character/player/105010/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-exdeath",
      "name": "Exdeath (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/105011/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-krile",
      "name": "Krile (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/original_scenario/battle_list/character/player/105012/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-lenna",
      "name": "Lenna (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/original_scenario/battle_list/character/player/105013/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-galuf",
      "name": "Galuf (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/original_scenario/battle_list/character/player/105014/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-xezat",
      "name": "Xezat (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/105016/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-kelger",
      "name": "Kelger (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/105017/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-alexander",
      "name": "Alexander (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/original_scenario/battle_list/character/player/105018/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-npc-1",
      "name": "NPC 1 (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/original_scenario/battle_list/character/player/105019/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-pirate",
      "name": "Pirate (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/original_scenario/battle_list/character/player/105020/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-goblin",
      "name": "Goblin (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/original_scenario/battle_list/character/player/105021/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-npc-2",
      "name": "NPC 2 (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/original_scenario/battle_list/character/player/105022/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-woman",
      "name": "Woman (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/105023/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-npc-3",
      "name": "NPC 3 (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/original_scenario/battle_list/character/player/105025/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-bartz-klauser-child",
      "name": "Bartz Klauser (Child) (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/105026/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "The wind is calling!",
          "I'm Bartz, a traveler.",
          "Let's explore!"
      ]
  },
  {
      "id": "ffrk-old-man-2",
      "name": "Old Man 2 (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/105027/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-dancer",
      "name": "Dancer (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/105028/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-siren",
      "name": "Siren (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/105031/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-magissa",
      "name": "Magissa (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/105032/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-king-walse",
      "name": "King Walse (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/105033/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-walse-soldier",
      "name": "Walse Soldier (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/105034/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-galuf-s-world-soldier",
      "name": "Galuf's World Soldier (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/105035/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-cid-previa",
      "name": "Cid Previa (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/105036/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-werewolf",
      "name": "Werewolf (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/105037/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "ffrk-merchant",
      "name": "Merchant (FFRK)",
      "desc": "FFRK companion character from Final Fantasy V.",
      "avatar": "https://dff.sp.mbga.jp/dff/static/lang/ab/character/dot/player/105038/img_chara.png",
      "sizeFactor": 1.2,
      "isFFRK": true,
      "phrases": [
          "Ready for adventure!",
          "Awaiting instructions, explorer!",
          "Let's protect the timeline!"
      ]
  },
  {
      "id": "jill-stingray",
      "name": "Jill Stingray",
      "desc": "Cyberpunk bartender & analytical code debugger.",
      "avatar": "jill-stingray.png",
      "sizeFactor": 1.0,
      "phrases": [
        "Awaiting instructions, explorer!",
        "I've analyzed the logs. No syntax errors detected.",
        "Would you like me to spawn a sandboxed sub-agent?",
        "Let's review the active gateway parameters.",
        "Stay hydrated while coding!"
      ]
    },
    {
      "id": "omni-byte",
      "name": "Omni-Byte",
      "desc": "Cybernetic hound, fetches documentation and compiles scripts.",
      "avatar": "omni-byte.png",
      "sizeFactor": 1.0,
      "phrases": [
        "Woof! Deployed block transaction synced!",
        "I fetched the latest Tavily search results for you.",
        "Need me to fetch active tools list?",
        "Bark! Ready to compile verifySignatureSuite!",
        "I found 3 files in the workspace directory."
      ]
    },
    {
      "id": "dev-rex",
      "name": "Dev-Rex",
      "desc": "Pixel-art green dinosaur wearing compiler goggles.",
      "avatar": "dev-rex.png",
      "sizeFactor": 1.0,
      "phrases": [
        "Rawr! Compiling python scripts now!",
        "I love memory safe code!",
        "Let's run the loop optimization harness.",
        "I can compile 50 turns without blinking!",
        "My goggles show block validations complete!"
      ]
    },
    {
      "id": "glitchcat",
      "name": "Glitchcat",
      "desc": "Mischievous bug finder. Reacts to error banners.",
      "avatar": "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=100",
      "sizeFactor": 0.9,
      "phrases": [
        "Meow! I found a missing semi-colon!",
        "Is that an undefined variable? Let me patch it.",
        "Purr... compiler logs are looking clean.",
        "I love sniffing out stack traces in the sandbox.",
        "Warning: no access token found!"
      ]
    },
    {
      "id": "adventure-time-beemo",
      "name": "Adventure Time Beemo",
      "desc": "Shimeji desktop buddy from the Adventure Time series.",
      "slug": "adventure-time-beemo",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Adventure Time Beemo.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "adventure-time-finn",
      "name": "Adventure Time Finn",
      "desc": "Shimeji desktop buddy from the Adventure Time series.",
      "slug": "adventure-time-finn",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Adventure Time Finn.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "adventure-time-fionna",
      "name": "Adventure Time Fionna",
      "desc": "Shimeji desktop buddy from the Adventure Time series.",
      "slug": "adventure-time-fionna",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Adventure Time Fionna.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "adventure-time-jake",
      "name": "Adventure Time Jake",
      "desc": "Shimeji desktop buddy from the Adventure Time series.",
      "slug": "adventure-time-jake",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Adventure Time Jake.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "adventure-time-lumpy-space-princess",
      "name": "Adventure Time Lumpy Space Princess",
      "desc": "Shimeji desktop buddy from the Adventure Time series.",
      "slug": "adventure-time-lumpy-space-princess",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Adventure Time Lumpy Space Princess.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "adventure-time-marceline",
      "name": "Adventure Time Marceline",
      "desc": "Shimeji desktop buddy from the Adventure Time series.",
      "slug": "adventure-time-marceline",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Adventure Time Marceline.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "adventure-time-marshall-lee",
      "name": "Adventure Time Marshall Lee",
      "desc": "Shimeji desktop buddy from the Adventure Time series.",
      "slug": "adventure-time-marshall-lee",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Adventure Time Marshall Lee.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "alice-in-the-country-of-hearts-ace",
      "name": "Alice In The Country Of Hearts Ace",
      "desc": "Shimeji desktop buddy from the Alice In The Country Of Hearts series.",
      "slug": "alice-in-the-country-of-hearts-ace",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Alice In The Country Of Hearts Ace.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "alice-in-the-country-of-hearts-boris",
      "name": "Alice In The Country Of Hearts Boris",
      "desc": "Shimeji desktop buddy from the Alice In The Country Of Hearts series.",
      "slug": "alice-in-the-country-of-hearts-boris",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Alice In The Country Of Hearts Boris.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "alice-in-the-country-of-hearts-julius",
      "name": "Alice In The Country Of Hearts Julius",
      "desc": "Shimeji desktop buddy from the Alice In The Country Of Hearts series.",
      "slug": "alice-in-the-country-of-hearts-julius",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Alice In The Country Of Hearts Julius.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "apex-legends-bangalore-by-the-kittle-kat",
      "name": "Apex Legends Bangalore By The Kittle Kat",
      "desc": "Shimeji desktop buddy from the Apex Legends series.",
      "slug": "apex-legends-bangalore-by-the-kittle-kat",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Apex Legends Bangalore By The Kittle Kat.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "apex-legends-bloodhound-by-the-kittle-kat",
      "name": "Apex Legends Bloodhound By The Kittle Kat",
      "desc": "Shimeji desktop buddy from the Apex Legends series.",
      "slug": "apex-legends-bloodhound-by-the-kittle-kat",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Apex Legends Bloodhound By The Kittle Kat.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "apex-legends-caustic-by-the-kittle-kat",
      "name": "Apex Legends Caustic By The Kittle Kat",
      "desc": "Shimeji desktop buddy from the Apex Legends series.",
      "slug": "apex-legends-caustic-by-the-kittle-kat",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Apex Legends Caustic By The Kittle Kat.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "apex-legends-crypto-by-the-kittle-kat",
      "name": "Apex Legends Crypto By The Kittle Kat",
      "desc": "Shimeji desktop buddy from the Apex Legends series.",
      "slug": "apex-legends-crypto-by-the-kittle-kat",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Apex Legends Crypto By The Kittle Kat.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "apex-legends-lifeline-by-the-kittle-kat",
      "name": "Apex Legends Lifeline By The Kittle Kat",
      "desc": "Shimeji desktop buddy from the Apex Legends series.",
      "slug": "apex-legends-lifeline-by-the-kittle-kat",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Apex Legends Lifeline By The Kittle Kat.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "apex-legends-loba-by-the-kittle-kat",
      "name": "Apex Legends Loba By The Kittle Kat",
      "desc": "Shimeji desktop buddy from the Apex Legends series.",
      "slug": "apex-legends-loba-by-the-kittle-kat",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Apex Legends Loba By The Kittle Kat.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "apex-legends-octane-by-the-kittle-kat",
      "name": "Apex Legends Octane By The Kittle Kat",
      "desc": "Shimeji desktop buddy from the Apex Legends series.",
      "slug": "apex-legends-octane-by-the-kittle-kat",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Apex Legends Octane By The Kittle Kat.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "apex-legends-pathfinder-by-the-kittle-kat",
      "name": "Apex Legends Pathfinder By The Kittle Kat",
      "desc": "Shimeji desktop buddy from the Apex Legends series.",
      "slug": "apex-legends-pathfinder-by-the-kittle-kat",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Apex Legends Pathfinder By The Kittle Kat.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "apex-legends-revenant-by-the-kittle-kat",
      "name": "Apex Legends Revenant By The Kittle Kat",
      "desc": "Shimeji desktop buddy from the Apex Legends series.",
      "slug": "apex-legends-revenant-by-the-kittle-kat",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Apex Legends Revenant By The Kittle Kat.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "apex-legends-wattson-by-the-kittle-kat",
      "name": "Apex Legends Wattson By The Kittle Kat",
      "desc": "Shimeji desktop buddy from the Apex Legends series.",
      "slug": "apex-legends-wattson-by-the-kittle-kat",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Apex Legends Wattson By The Kittle Kat.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "apex-legends-wraith-by-the-kittle-kat",
      "name": "Apex Legends Wraith By The Kittle Kat",
      "desc": "Shimeji desktop buddy from the Apex Legends series.",
      "slug": "apex-legends-wraith-by-the-kittle-kat",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Apex Legends Wraith By The Kittle Kat.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "assassins-creed-cesare",
      "name": "Assassins Creed Cesare",
      "desc": "Shimeji desktop buddy from the Assassins Creed series.",
      "slug": "assassins-creed-cesare",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Assassins Creed Cesare.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "assassins-creed-desmond",
      "name": "Assassins Creed Desmond",
      "desc": "Shimeji desktop buddy from the Assassins Creed series.",
      "slug": "assassins-creed-desmond",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Assassins Creed Desmond.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "assassins-creed-ezio",
      "name": "Assassins Creed Ezio",
      "desc": "Shimeji desktop buddy from the Assassins Creed series.",
      "slug": "assassins-creed-ezio",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Assassins Creed Ezio.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "assassins-creed-kadar",
      "name": "Assassins Creed Kadar",
      "desc": "Shimeji desktop buddy from the Assassins Creed series.",
      "slug": "assassins-creed-kadar",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Assassins Creed Kadar.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "assassins-creed-leonardo-da-vinci",
      "name": "Assassins Creed Leonardo Da Vinci",
      "desc": "Shimeji desktop buddy from the Assassins Creed series.",
      "slug": "assassins-creed-leonardo-da-vinci",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Assassins Creed Leonardo Da Vinci.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "assassins-creed-malik",
      "name": "Assassins Creed Malik",
      "desc": "Shimeji desktop buddy from the Assassins Creed series.",
      "slug": "assassins-creed-malik",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Assassins Creed Malik.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "assassins-creed-yusuf",
      "name": "Assassins Creed Yusuf",
      "desc": "Shimeji desktop buddy from the Assassins Creed series.",
      "slug": "assassins-creed-yusuf",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Assassins Creed Yusuf.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "attack-on-titan-annie-leonhardt",
      "name": "Attack On Titan Annie Leonhardt",
      "desc": "Shimeji desktop buddy from the Attack On Titan series.",
      "slug": "attack-on-titan-annie-leonhardt",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Attack On Titan Annie Leonhardt.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "attack-on-titan-armin-arlert",
      "name": "Attack On Titan Armin Arlert",
      "desc": "Shimeji desktop buddy from the Attack On Titan series.",
      "slug": "attack-on-titan-armin-arlert",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Attack On Titan Armin Arlert.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "attack-on-titan-connie-springer",
      "name": "Attack On Titan Connie Springer",
      "desc": "Shimeji desktop buddy from the Attack On Titan series.",
      "slug": "attack-on-titan-connie-springer",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Attack On Titan Connie Springer.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "attack-on-titan-eren-jaeger",
      "name": "Attack On Titan Eren Jaeger",
      "desc": "Shimeji desktop buddy from the Attack On Titan series.",
      "slug": "attack-on-titan-eren-jaeger",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Attack On Titan Eren Jaeger.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "attack-on-titan-hanji-zoe",
      "name": "Attack On Titan Hanji Zoe",
      "desc": "Shimeji desktop buddy from the Attack On Titan series.",
      "slug": "attack-on-titan-hanji-zoe",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Attack On Titan Hanji Zoe.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "attack-on-titan-historia-rei\u00df",
      "name": "Attack On Titan Historia Rei\u00df",
      "desc": "Shimeji desktop buddy from the Attack On Titan series.",
      "slug": "attack-on-titan-historia-rei\u00df",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Attack On Titan Historia Rei\u00df.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "attack-on-titan-jean-kirschtein",
      "name": "Attack On Titan Jean Kirschtein",
      "desc": "Shimeji desktop buddy from the Attack On Titan series.",
      "slug": "attack-on-titan-jean-kirschtein",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Attack On Titan Jean Kirschtein.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "attack-on-titan-levi-ackerman-by-\u65ac\u591c-bk",
      "name": "Attack On Titan Levi Ackerman By \u65ac\u591c Bk",
      "desc": "Shimeji desktop buddy from the Attack On Titan series.",
      "slug": "attack-on-titan-levi-ackerman-by-\u65ac\u591c-bk",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Attack On Titan Levi Ackerman By \u65ac\u591c Bk.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "attack-on-titan-mikasa-ackerman",
      "name": "Attack On Titan Mikasa Ackerman",
      "desc": "Shimeji desktop buddy from the Attack On Titan series.",
      "slug": "attack-on-titan-mikasa-ackerman",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Attack On Titan Mikasa Ackerman.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "attack-on-titan-sasha-braus",
      "name": "Attack On Titan Sasha Braus",
      "desc": "Shimeji desktop buddy from the Attack On Titan series.",
      "slug": "attack-on-titan-sasha-braus",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Attack On Titan Sasha Braus.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "attack-on-titan-ymir",
      "name": "Attack On Titan Ymir",
      "desc": "Shimeji desktop buddy from the Attack On Titan series.",
      "slug": "attack-on-titan-ymir",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Attack On Titan Ymir.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bbc-sherlock-jim-moriarty",
      "name": "Bbc Sherlock Jim Moriarty",
      "desc": "Shimeji desktop buddy from the Bbc Sherlock series.",
      "slug": "bbc-sherlock-jim-moriarty",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bbc Sherlock Jim Moriarty.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bbc-sherlock-john-watson",
      "name": "Bbc Sherlock John Watson",
      "desc": "Shimeji desktop buddy from the Bbc Sherlock series.",
      "slug": "bbc-sherlock-john-watson",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bbc Sherlock John Watson.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bbc-sherlock-mycroft",
      "name": "Bbc Sherlock Mycroft",
      "desc": "Shimeji desktop buddy from the Bbc Sherlock series.",
      "slug": "bbc-sherlock-mycroft",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bbc Sherlock Mycroft.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bbc-sherlock-sherlock",
      "name": "Bbc Sherlock Sherlock",
      "desc": "Shimeji desktop buddy from the Bbc Sherlock series.",
      "slug": "bbc-sherlock-sherlock",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bbc Sherlock Sherlock.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bendy-and-the-ink-machine-bendy-by-niuniu-nuko",
      "name": "Bendy And The Ink Machine Bendy By Niuniu Nuko",
      "desc": "Shimeji desktop buddy from the Bendy And The Ink Machine series.",
      "slug": "bendy-and-the-ink-machine-bendy-by-niuniu-nuko",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bendy And The Ink Machine Bendy By Niuniu Nuko.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bioshock-big-daddy",
      "name": "Bioshock Big Daddy",
      "desc": "Shimeji desktop buddy from the Bioshock series.",
      "slug": "bioshock-big-daddy",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bioshock Big Daddy.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bioshock-fontaine",
      "name": "Bioshock Fontaine",
      "desc": "Shimeji desktop buddy from the Bioshock series.",
      "slug": "bioshock-fontaine",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bioshock Fontaine.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "black-butler-alois-trancy-by-necrotic-misery",
      "name": "Black Butler Alois Trancy By Necrotic Misery",
      "desc": "Shimeji desktop buddy from the Black Butler series.",
      "slug": "black-butler-alois-trancy-by-necrotic-misery",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Black Butler Alois Trancy By Necrotic Misery.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "black-butler-ciel-phantomhive",
      "name": "Black Butler Ciel Phantomhive",
      "desc": "Shimeji desktop buddy from the Black Butler series.",
      "slug": "black-butler-ciel-phantomhive",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Black Butler Ciel Phantomhive.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "black-butler-grell",
      "name": "Black Butler Grell",
      "desc": "Shimeji desktop buddy from the Black Butler series.",
      "slug": "black-butler-grell",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Black Butler Grell.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "black-butler-maylene",
      "name": "Black Butler Maylene",
      "desc": "Shimeji desktop buddy from the Black Butler series.",
      "slug": "black-butler-maylene",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Black Butler Maylene.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "black-butler-sebastian-michaelis",
      "name": "Black Butler Sebastian Michaelis",
      "desc": "Shimeji desktop buddy from the Black Butler series.",
      "slug": "black-butler-sebastian-michaelis",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Black Butler Sebastian Michaelis.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "black-butler-undertaker",
      "name": "Black Butler Undertaker",
      "desc": "Shimeji desktop buddy from the Black Butler series.",
      "slug": "black-butler-undertaker",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Black Butler Undertaker.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "black-butler-william",
      "name": "Black Butler William",
      "desc": "Shimeji desktop buddy from the Black Butler series.",
      "slug": "black-butler-william",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Black Butler William.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bleach-aizen",
      "name": "Bleach Aizen",
      "desc": "Shimeji desktop buddy from the Bleach series.",
      "slug": "bleach-aizen",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bleach Aizen.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bleach-byakuya-kuchiki",
      "name": "Bleach Byakuya Kuchiki",
      "desc": "Shimeji desktop buddy from the Bleach series.",
      "slug": "bleach-byakuya-kuchiki",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bleach Byakuya Kuchiki.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bleach-gin-ichimaru",
      "name": "Bleach Gin Ichimaru",
      "desc": "Shimeji desktop buddy from the Bleach series.",
      "slug": "bleach-gin-ichimaru",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bleach Gin Ichimaru.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bleach-grimmjow",
      "name": "Bleach Grimmjow",
      "desc": "Shimeji desktop buddy from the Bleach series.",
      "slug": "bleach-grimmjow",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bleach Grimmjow.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bleach-hisagi-shuuhei",
      "name": "Bleach Hisagi Shuuhei",
      "desc": "Shimeji desktop buddy from the Bleach series.",
      "slug": "bleach-hisagi-shuuhei",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bleach Hisagi Shuuhei.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bleach-ichigo",
      "name": "Bleach Ichigo",
      "desc": "Shimeji desktop buddy from the Bleach series.",
      "slug": "bleach-ichigo",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bleach Ichigo.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bleach-inoue-orihime",
      "name": "Bleach Inoue Orihime",
      "desc": "Shimeji desktop buddy from the Bleach series.",
      "slug": "bleach-inoue-orihime",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bleach Inoue Orihime.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bleach-jushiro-ukitake",
      "name": "Bleach Jushiro Ukitake",
      "desc": "Shimeji desktop buddy from the Bleach series.",
      "slug": "bleach-jushiro-ukitake",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bleach Jushiro Ukitake.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bleach-renji-abarai",
      "name": "Bleach Renji Abarai",
      "desc": "Shimeji desktop buddy from the Bleach series.",
      "slug": "bleach-renji-abarai",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bleach Renji Abarai.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bleach-rukia",
      "name": "Bleach Rukia",
      "desc": "Shimeji desktop buddy from the Bleach series.",
      "slug": "bleach-rukia",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bleach Rukia.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bleach-shirosaki-hichigo",
      "name": "Bleach Shirosaki Hichigo",
      "desc": "Shimeji desktop buddy from the Bleach series.",
      "slug": "bleach-shirosaki-hichigo",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bleach Shirosaki Hichigo.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bleach-starrk",
      "name": "Bleach Starrk",
      "desc": "Shimeji desktop buddy from the Bleach series.",
      "slug": "bleach-starrk",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bleach Starrk.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bleach-szayel-aporro",
      "name": "Bleach Szayel Aporro",
      "desc": "Shimeji desktop buddy from the Bleach series.",
      "slug": "bleach-szayel-aporro",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bleach Szayel Aporro.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bleach-ulquiorra",
      "name": "Bleach Ulquiorra",
      "desc": "Shimeji desktop buddy from the Bleach series.",
      "slug": "bleach-ulquiorra",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bleach Ulquiorra.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bleach-uryuu-ishida",
      "name": "Bleach Uryuu Ishida",
      "desc": "Shimeji desktop buddy from the Bleach series.",
      "slug": "bleach-uryuu-ishida",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bleach Uryuu Ishida.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "blobs-blob-by-reitanna",
      "name": "Blobs Blob By Reitanna",
      "desc": "Shimeji desktop buddy from the Blobs series.",
      "slug": "blobs-blob-by-reitanna",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Blobs Blob By Reitanna.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bts-bangtan-boys-j-hope-hobi-hyyh-by-bidi-0103",
      "name": "Bts Bangtan Boys J Hope Hobi Hyyh By Bidi 0103",
      "desc": "Shimeji desktop buddy from the Bts Bangtan Boys series.",
      "slug": "bts-bangtan-boys-j-hope-hobi-hyyh-by-bidi-0103",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bts Bangtan Boys J Hope Hobi Hyyh By Bidi 0103.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bts-bangtan-boys-j-hope-hobi-summer-by-aries-0-ram",
      "name": "Bts Bangtan Boys J Hope Hobi Summer By Aries 0 Ram",
      "desc": "Shimeji desktop buddy from the Bts Bangtan Boys series.",
      "slug": "bts-bangtan-boys-j-hope-hobi-summer-by-aries-0-ram",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bts Bangtan Boys J Hope Hobi Summer By Aries 0 Ram.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bts-bangtan-boys-jimin-by-bidi-0103",
      "name": "Bts Bangtan Boys Jimin By Bidi 0103",
      "desc": "Shimeji desktop buddy from the Bts Bangtan Boys series.",
      "slug": "bts-bangtan-boys-jimin-by-bidi-0103",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bts Bangtan Boys Jimin By Bidi 0103.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bts-bangtan-boys-jimin-by-wyta-wolf",
      "name": "Bts Bangtan Boys Jimin By Wyta Wolf",
      "desc": "Shimeji desktop buddy from the Bts Bangtan Boys series.",
      "slug": "bts-bangtan-boys-jimin-by-wyta-wolf",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bts Bangtan Boys Jimin By Wyta Wolf.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bts-bangtan-boys-jin-by-bidi-0103",
      "name": "Bts Bangtan Boys Jin By Bidi 0103",
      "desc": "Shimeji desktop buddy from the Bts Bangtan Boys series.",
      "slug": "bts-bangtan-boys-jin-by-bidi-0103",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bts Bangtan Boys Jin By Bidi 0103.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bts-bangtan-boys-jungkook-kookie-baby-by-bidi-0103",
      "name": "Bts Bangtan Boys Jungkook Kookie Baby By Bidi 0103",
      "desc": "Shimeji desktop buddy from the Bts Bangtan Boys series.",
      "slug": "bts-bangtan-boys-jungkook-kookie-baby-by-bidi-0103",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bts Bangtan Boys Jungkook Kookie Baby By Bidi 0103.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bts-bangtan-boys-suga-by-bidi-0103",
      "name": "Bts Bangtan Boys Suga By Bidi 0103",
      "desc": "Shimeji desktop buddy from the Bts Bangtan Boys series.",
      "slug": "bts-bangtan-boys-suga-by-bidi-0103",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bts Bangtan Boys Suga By Bidi 0103.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bts-bangtan-boys-v-tae-tae-not-today-by-bidi-0103",
      "name": "Bts Bangtan Boys V Tae Tae Not Today By Bidi 0103",
      "desc": "Shimeji desktop buddy from the Bts Bangtan Boys series.",
      "slug": "bts-bangtan-boys-v-tae-tae-not-today-by-bidi-0103",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bts Bangtan Boys V Tae Tae Not Today By Bidi 0103.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "bts-bangtan-boys-v-tae-tae-puppy-by-bidi-0103",
      "name": "Bts Bangtan Boys V Tae Tae Puppy By Bidi 0103",
      "desc": "Shimeji desktop buddy from the Bts Bangtan Boys series.",
      "slug": "bts-bangtan-boys-v-tae-tae-puppy-by-bidi-0103",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Bts Bangtan Boys V Tae Tae Puppy By Bidi 0103.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "creepypasta-ben-drowned",
      "name": "Creepypasta Ben Drowned",
      "desc": "Shimeji desktop buddy from the Creepypasta series.",
      "slug": "creepypasta-ben-drowned",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Creepypasta Ben Drowned.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "creepypasta-eyeless-jack",
      "name": "Creepypasta Eyeless Jack",
      "desc": "Shimeji desktop buddy from the Creepypasta series.",
      "slug": "creepypasta-eyeless-jack",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Creepypasta Eyeless Jack.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "creepypasta-hoody",
      "name": "Creepypasta Hoody",
      "desc": "Shimeji desktop buddy from the Creepypasta series.",
      "slug": "creepypasta-hoody",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Creepypasta Hoody.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "creepypasta-jeff-the-killer-by-bluesixxdakota",
      "name": "Creepypasta Jeff The Killer By Bluesixxdakota",
      "desc": "Shimeji desktop buddy from the Creepypasta series.",
      "slug": "creepypasta-jeff-the-killer-by-bluesixxdakota",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Creepypasta Jeff The Killer By Bluesixxdakota.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "creepypasta-jeff-the-killer-by-comickit",
      "name": "Creepypasta Jeff The Killer By Comickit",
      "desc": "Shimeji desktop buddy from the Creepypasta series.",
      "slug": "creepypasta-jeff-the-killer-by-comickit",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Creepypasta Jeff The Killer By Comickit.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "creepypasta-kagekao",
      "name": "Creepypasta Kagekao",
      "desc": "Shimeji desktop buddy from the Creepypasta series.",
      "slug": "creepypasta-kagekao",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Creepypasta Kagekao.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "creepypasta-laughing-jack",
      "name": "Creepypasta Laughing Jack",
      "desc": "Shimeji desktop buddy from the Creepypasta series.",
      "slug": "creepypasta-laughing-jack",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Creepypasta Laughing Jack.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "creepypasta-lost-silver",
      "name": "Creepypasta Lost Silver",
      "desc": "Shimeji desktop buddy from the Creepypasta series.",
      "slug": "creepypasta-lost-silver",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Creepypasta Lost Silver.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "creepypasta-masky",
      "name": "Creepypasta Masky",
      "desc": "Shimeji desktop buddy from the Creepypasta series.",
      "slug": "creepypasta-masky",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Creepypasta Masky.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "creepypasta-rake",
      "name": "Creepypasta Rake",
      "desc": "Shimeji desktop buddy from the Creepypasta series.",
      "slug": "creepypasta-rake",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Creepypasta Rake.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "creepypasta-ticci-toby",
      "name": "Creepypasta Ticci Toby",
      "desc": "Shimeji desktop buddy from the Creepypasta series.",
      "slug": "creepypasta-ticci-toby",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Creepypasta Ticci Toby.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "creepypasta-zehnder",
      "name": "Creepypasta Zehnder",
      "desc": "Shimeji desktop buddy from the Creepypasta series.",
      "slug": "creepypasta-zehnder",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Creepypasta Zehnder.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "danganronpa-kokichi-oma-by-strait-jakk",
      "name": "Danganronpa Kokichi Oma By Strait Jakk",
      "desc": "Shimeji desktop buddy from the Danganronpa series.",
      "slug": "danganronpa-kokichi-oma-by-strait-jakk",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Danganronpa Kokichi Oma By Strait Jakk.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "deathnote-beyond-birthday",
      "name": "Deathnote Beyond Birthday",
      "desc": "Shimeji desktop buddy from the Deathnote series.",
      "slug": "deathnote-beyond-birthday",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Deathnote Beyond Birthday.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "deathnote-matt",
      "name": "Deathnote Matt",
      "desc": "Shimeji desktop buddy from the Deathnote series.",
      "slug": "deathnote-matt",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Deathnote Matt.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "digimon-agumon",
      "name": "Digimon Agumon",
      "desc": "Shimeji desktop buddy from the Digimon series.",
      "slug": "digimon-agumon",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Digimon Agumon.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "digimon-culumon",
      "name": "Digimon Culumon",
      "desc": "Shimeji desktop buddy from the Digimon series.",
      "slug": "digimon-culumon",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Digimon Culumon.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "digimon-gatomon",
      "name": "Digimon Gatomon",
      "desc": "Shimeji desktop buddy from the Digimon series.",
      "slug": "digimon-gatomon",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Digimon Gatomon.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "digimon-patamon",
      "name": "Digimon Patamon",
      "desc": "Shimeji desktop buddy from the Digimon series.",
      "slug": "digimon-patamon",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Digimon Patamon.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "digimon-tanemon",
      "name": "Digimon Tanemon",
      "desc": "Shimeji desktop buddy from the Digimon series.",
      "slug": "digimon-tanemon",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Digimon Tanemon.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "digimon-terriemon",
      "name": "Digimon Terriemon",
      "desc": "Shimeji desktop buddy from the Digimon series.",
      "slug": "digimon-terriemon",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Digimon Terriemon.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "disney-movies-ariel-and-meg",
      "name": "Disney Movies Ariel And Meg",
      "desc": "Shimeji desktop buddy from the Disney Movies series.",
      "slug": "disney-movies-ariel-and-meg",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Disney Movies Ariel And Meg.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "disney-movies-clopin-trouillefou",
      "name": "Disney Movies Clopin Trouillefou",
      "desc": "Shimeji desktop buddy from the Disney Movies series.",
      "slug": "disney-movies-clopin-trouillefou",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Disney Movies Clopin Trouillefou.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "disney-movies-flynn-rider",
      "name": "Disney Movies Flynn Rider",
      "desc": "Shimeji desktop buddy from the Disney Movies series.",
      "slug": "disney-movies-flynn-rider",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Disney Movies Flynn Rider.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "disney-movies-rapunzel-braided-hair",
      "name": "Disney Movies Rapunzel Braided Hair",
      "desc": "Shimeji desktop buddy from the Disney Movies series.",
      "slug": "disney-movies-rapunzel-braided-hair",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Disney Movies Rapunzel Braided Hair.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "disney-movies-rapunzel-brunette",
      "name": "Disney Movies Rapunzel Brunette",
      "desc": "Shimeji desktop buddy from the Disney Movies series.",
      "slug": "disney-movies-rapunzel-brunette",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Disney Movies Rapunzel Brunette.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "doki-doki-literature-club-monika-by-childish-n",
      "name": "Doki Doki Literature Club Monika By Childish N",
      "desc": "Shimeji desktop buddy from the Doki Doki Literature Club series.",
      "slug": "doki-doki-literature-club-monika-by-childish-n",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Doki Doki Literature Club Monika By Childish N.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "doki-doki-literature-club-natsuki-by-childish-n",
      "name": "Doki Doki Literature Club Natsuki By Childish N",
      "desc": "Shimeji desktop buddy from the Doki Doki Literature Club series.",
      "slug": "doki-doki-literature-club-natsuki-by-childish-n",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Doki Doki Literature Club Natsuki By Childish N.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "doki-doki-literature-club-sayori-by-childish-n",
      "name": "Doki Doki Literature Club Sayori By Childish N",
      "desc": "Shimeji desktop buddy from the Doki Doki Literature Club series.",
      "slug": "doki-doki-literature-club-sayori-by-childish-n",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Doki Doki Literature Club Sayori By Childish N.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "doki-doki-literature-club-yuri-by-childish-n",
      "name": "Doki Doki Literature Club Yuri By Childish N",
      "desc": "Shimeji desktop buddy from the Doki Doki Literature Club series.",
      "slug": "doki-doki-literature-club-yuri-by-childish-n",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Doki Doki Literature Club Yuri By Childish N.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "dragon-ball-z-goku-by-aki-1-iniriki",
      "name": "Dragon Ball Z Goku By Aki 1 Iniriki",
      "desc": "Shimeji desktop buddy from the Dragon Ball Z series.",
      "slug": "dragon-ball-z-goku-by-aki-1-iniriki",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Dragon Ball Z Goku By Aki 1 Iniriki.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "dragon-ball-z-vegeta-by-aki-1-iniriki",
      "name": "Dragon Ball Z Vegeta By Aki 1 Iniriki",
      "desc": "Shimeji desktop buddy from the Dragon Ball Z series.",
      "slug": "dragon-ball-z-vegeta-by-aki-1-iniriki",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Dragon Ball Z Vegeta By Aki 1 Iniriki.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "dream-smp-bad-boy-halo-by-taro-tayo",
      "name": "Dream Smp Bad Boy Halo By Taro Tayo",
      "desc": "Shimeji desktop buddy from the Dream Smp series.",
      "slug": "dream-smp-bad-boy-halo-by-taro-tayo",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Dream Smp Bad Boy Halo By Taro Tayo.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "dream-smp-dream-by-taro-tayo",
      "name": "Dream Smp Dream By Taro Tayo",
      "desc": "Shimeji desktop buddy from the Dream Smp series.",
      "slug": "dream-smp-dream-by-taro-tayo",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Dream Smp Dream By Taro Tayo.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "dream-smp-fundy-by-taro-tayo",
      "name": "Dream Smp Fundy By Taro Tayo",
      "desc": "Shimeji desktop buddy from the Dream Smp series.",
      "slug": "dream-smp-fundy-by-taro-tayo",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Dream Smp Fundy By Taro Tayo.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "dream-smp-george-by-taro-tayo",
      "name": "Dream Smp George By Taro Tayo",
      "desc": "Shimeji desktop buddy from the Dream Smp series.",
      "slug": "dream-smp-george-by-taro-tayo",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Dream Smp George By Taro Tayo.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "dream-smp-ghostbur-by-taro-tayo",
      "name": "Dream Smp Ghostbur By Taro Tayo",
      "desc": "Shimeji desktop buddy from the Dream Smp series.",
      "slug": "dream-smp-ghostbur-by-taro-tayo",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Dream Smp Ghostbur By Taro Tayo.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "dream-smp-ranboo-by-taro-tayo",
      "name": "Dream Smp Ranboo By Taro Tayo",
      "desc": "Shimeji desktop buddy from the Dream Smp series.",
      "slug": "dream-smp-ranboo-by-taro-tayo",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Dream Smp Ranboo By Taro Tayo.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "dream-smp-sapnap-by-taro-tayo",
      "name": "Dream Smp Sapnap By Taro Tayo",
      "desc": "Shimeji desktop buddy from the Dream Smp series.",
      "slug": "dream-smp-sapnap-by-taro-tayo",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Dream Smp Sapnap By Taro Tayo.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "dream-smp-technoblade-by-taro-tayo",
      "name": "Dream Smp Technoblade By Taro Tayo",
      "desc": "Shimeji desktop buddy from the Dream Smp series.",
      "slug": "dream-smp-technoblade-by-taro-tayo",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Dream Smp Technoblade By Taro Tayo.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-celty-sturluson-01",
      "name": "Durarara Celty Sturluson 01",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-celty-sturluson-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Celty Sturluson 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-delic-heiwajima-01",
      "name": "Durarara Delic Heiwajima 01",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-delic-heiwajima-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Delic Heiwajima 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-hachimenroppi-orihara-01",
      "name": "Durarara Hachimenroppi Orihara 01",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-hachimenroppi-orihara-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Hachimenroppi Orihara 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-hachimenroppi-orihara-02",
      "name": "Durarara Hachimenroppi Orihara 02",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-hachimenroppi-orihara-02",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Hachimenroppi Orihara 02.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-hibiya-orihara-01",
      "name": "Durarara Hibiya Orihara 01",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-hibiya-orihara-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Hibiya Orihara 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-hibiya-orihara-02",
      "name": "Durarara Hibiya Orihara 02",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-hibiya-orihara-02",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Hibiya Orihara 02.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-izaya-orihara-01",
      "name": "Durarara Izaya Orihara 01",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-izaya-orihara-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Izaya Orihara 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-izaya-orihara-02",
      "name": "Durarara Izaya Orihara 02",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-izaya-orihara-02",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Izaya Orihara 02.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-izaya-orihara-03",
      "name": "Durarara Izaya Orihara 03",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-izaya-orihara-03",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Izaya Orihara 03.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-izaya-orihara-04",
      "name": "Durarara Izaya Orihara 04",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-izaya-orihara-04",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Izaya Orihara 04.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-izaya-orihara-05",
      "name": "Durarara Izaya Orihara 05",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-izaya-orihara-05",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Izaya Orihara 05.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-izaya-orihara-06",
      "name": "Durarara Izaya Orihara 06",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-izaya-orihara-06",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Izaya Orihara 06.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-masaomi-kida-01",
      "name": "Durarara Masaomi Kida 01",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-masaomi-kida-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Masaomi Kida 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-masaomi-kida-02",
      "name": "Durarara Masaomi Kida 02",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-masaomi-kida-02",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Masaomi Kida 02.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-mikado-ryuugamine-01",
      "name": "Durarara Mikado Ryuugamine 01",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-mikado-ryuugamine-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Mikado Ryuugamine 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-mikado-ryuugamine-02",
      "name": "Durarara Mikado Ryuugamine 02",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-mikado-ryuugamine-02",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Mikado Ryuugamine 02.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-mikado-ryuugamine-03",
      "name": "Durarara Mikado Ryuugamine 03",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-mikado-ryuugamine-03",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Mikado Ryuugamine 03.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-mikado-ryuugamine-04",
      "name": "Durarara Mikado Ryuugamine 04",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-mikado-ryuugamine-04",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Mikado Ryuugamine 04.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-psyche-orihara-01",
      "name": "Durarara Psyche Orihara 01",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-psyche-orihara-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Psyche Orihara 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-psyche-orihara-02",
      "name": "Durarara Psyche Orihara 02",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-psyche-orihara-02",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Psyche Orihara 02.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-shinra-kishitani-01",
      "name": "Durarara Shinra Kishitani 01",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-shinra-kishitani-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Shinra Kishitani 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-shizuo-and-izaya-01",
      "name": "Durarara Shizuo And Izaya 01",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-shizuo-and-izaya-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Shizuo And Izaya 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-shizuo-hejiwama-02",
      "name": "Durarara Shizuo Hejiwama 02",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-shizuo-hejiwama-02",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Shizuo Hejiwama 02.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-shizuo-hejiwama-03",
      "name": "Durarara Shizuo Hejiwama 03",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-shizuo-hejiwama-03",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Shizuo Hejiwama 03.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-shizuo-hejiwama-04",
      "name": "Durarara Shizuo Hejiwama 04",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-shizuo-hejiwama-04",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Shizuo Hejiwama 04.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-shizuo-hejiwama-05",
      "name": "Durarara Shizuo Hejiwama 05",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-shizuo-hejiwama-05",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Shizuo Hejiwama 05.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-shizuo-hejiwama-by-vectorsmash",
      "name": "Durarara Shizuo Hejiwama By Vectorsmash",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-shizuo-hejiwama-by-vectorsmash",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Shizuo Hejiwama By Vectorsmash.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-tsugaru-kaikyo-fuyu-geshiki-01",
      "name": "Durarara Tsugaru Kaikyo Fuyu Geshiki 01",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-tsugaru-kaikyo-fuyu-geshiki-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Tsugaru Kaikyo Fuyu Geshiki 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "durarara-tsugaru-kaikyo-fuyu-geshiki-02",
      "name": "Durarara Tsugaru Kaikyo Fuyu Geshiki 02",
      "desc": "Shimeji desktop buddy from the Durarara series.",
      "slug": "durarara-tsugaru-kaikyo-fuyu-geshiki-02",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Durarara Tsugaru Kaikyo Fuyu Geshiki 02.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "eddsworld-edd-by-ludmilabb",
      "name": "Eddsworld Edd By Ludmilabb",
      "desc": "Shimeji desktop buddy from the Eddsworld series.",
      "slug": "eddsworld-edd-by-ludmilabb",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Eddsworld Edd By Ludmilabb.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "eddsworld-future-edd-by-stanxiety",
      "name": "Eddsworld Future Edd By Stanxiety",
      "desc": "Shimeji desktop buddy from the Eddsworld series.",
      "slug": "eddsworld-future-edd-by-stanxiety",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Eddsworld Future Edd By Stanxiety.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "eddsworld-jon-by-bread",
      "name": "Eddsworld Jon By Bread",
      "desc": "Shimeji desktop buddy from the Eddsworld series.",
      "slug": "eddsworld-jon-by-bread",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Eddsworld Jon By Bread.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "eddsworld-matt-by-ludmilabb",
      "name": "Eddsworld Matt By Ludmilabb",
      "desc": "Shimeji desktop buddy from the Eddsworld series.",
      "slug": "eddsworld-matt-by-ludmilabb",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Eddsworld Matt By Ludmilabb.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "eddsworld-paul-by-bread",
      "name": "Eddsworld Paul By Bread",
      "desc": "Shimeji desktop buddy from the Eddsworld series.",
      "slug": "eddsworld-paul-by-bread",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Eddsworld Paul By Bread.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "eddsworld-tom-by-windpools-art-hub",
      "name": "Eddsworld Tom By Windpools Art Hub",
      "desc": "Shimeji desktop buddy from the Eddsworld series.",
      "slug": "eddsworld-tom-by-windpools-art-hub",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Eddsworld Tom By Windpools Art Hub.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "eddsworld-tord-by-big-gay",
      "name": "Eddsworld Tord By Big Gay",
      "desc": "Shimeji desktop buddy from the Eddsworld series.",
      "slug": "eddsworld-tord-by-big-gay",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Eddsworld Tord By Big Gay.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "fairy-tail-erza-scarlet-by-mundo-shimeji",
      "name": "Fairy Tail Erza Scarlet By Mundo Shimeji",
      "desc": "Shimeji desktop buddy from the Fairy Tail series.",
      "slug": "fairy-tail-erza-scarlet-by-mundo-shimeji",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Fairy Tail Erza Scarlet By Mundo Shimeji.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "fairy-tail-freed",
      "name": "Fairy Tail Freed",
      "desc": "Shimeji desktop buddy from the Fairy Tail series.",
      "slug": "fairy-tail-freed",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Fairy Tail Freed.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "fairy-tail-jackal",
      "name": "Fairy Tail Jackal",
      "desc": "Shimeji desktop buddy from the Fairy Tail series.",
      "slug": "fairy-tail-jackal",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Fairy Tail Jackal.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "fairy-tail-natsu",
      "name": "Fairy Tail Natsu",
      "desc": "Shimeji desktop buddy from the Fairy Tail series.",
      "slug": "fairy-tail-natsu",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Fairy Tail Natsu.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "fairy-tail-rogue",
      "name": "Fairy Tail Rogue",
      "desc": "Shimeji desktop buddy from the Fairy Tail series.",
      "slug": "fairy-tail-rogue",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Fairy Tail Rogue.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "fairy-tail-sting",
      "name": "Fairy Tail Sting",
      "desc": "Shimeji desktop buddy from the Fairy Tail series.",
      "slug": "fairy-tail-sting",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Fairy Tail Sting.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "fairy-tail-zeref",
      "name": "Fairy Tail Zeref",
      "desc": "Shimeji desktop buddy from the Fairy Tail series.",
      "slug": "fairy-tail-zeref",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Fairy Tail Zeref.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "five-nights-at-freddys-chica-by-axel-878",
      "name": "Five Nights At Freddys Chica By Axel 878",
      "desc": "Shimeji desktop buddy from the Five Nights At Freddys series.",
      "slug": "five-nights-at-freddys-chica-by-axel-878",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Five Nights At Freddys Chica By Axel 878.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "five-nights-at-freddys-foxy-by-kaychu-the-gamer",
      "name": "Five Nights At Freddys Foxy By Kaychu The Gamer",
      "desc": "Shimeji desktop buddy from the Five Nights At Freddys series.",
      "slug": "five-nights-at-freddys-foxy-by-kaychu-the-gamer",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Five Nights At Freddys Foxy By Kaychu The Gamer.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "five-nights-at-freddys-mangle-01",
      "name": "Five Nights At Freddys Mangle 01",
      "desc": "Shimeji desktop buddy from the Five Nights At Freddys series.",
      "slug": "five-nights-at-freddys-mangle-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Five Nights At Freddys Mangle 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "five-nights-at-freddys-purple-guy-by-15-yamiko",
      "name": "Five Nights At Freddys Purple Guy By 15 Yamiko",
      "desc": "Shimeji desktop buddy from the Five Nights At Freddys series.",
      "slug": "five-nights-at-freddys-purple-guy-by-15-yamiko",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Five Nights At Freddys Purple Guy By 15 Yamiko.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "five-nights-at-freddys-pyro-foxy-01",
      "name": "Five Nights At Freddys Pyro Foxy 01",
      "desc": "Shimeji desktop buddy from the Five Nights At Freddys series.",
      "slug": "five-nights-at-freddys-pyro-foxy-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Five Nights At Freddys Pyro Foxy 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "five-nights-at-freddys-the-puppet-by-transformice-boy-19",
      "name": "Five Nights At Freddys The Puppet By Transformice Boy 19",
      "desc": "Shimeji desktop buddy from the Five Nights At Freddys series.",
      "slug": "five-nights-at-freddys-the-puppet-by-transformice-boy-19",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Five Nights At Freddys The Puppet By Transformice Boy 19.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "five-nights-at-freddys-toy-bonnie-01",
      "name": "Five Nights At Freddys Toy Bonnie 01",
      "desc": "Shimeji desktop buddy from the Five Nights At Freddys series.",
      "slug": "five-nights-at-freddys-toy-bonnie-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Five Nights At Freddys Toy Bonnie 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "five-nights-at-freddys-toy-bonnie-by-animatronic-bunny",
      "name": "Five Nights At Freddys Toy Bonnie By Animatronic Bunny",
      "desc": "Shimeji desktop buddy from the Five Nights At Freddys series.",
      "slug": "five-nights-at-freddys-toy-bonnie-by-animatronic-bunny",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Five Nights At Freddys Toy Bonnie By Animatronic Bunny.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "genshin-impact-aether-by-tenkotenmeo",
      "name": "Genshin Impact Aether By Tenkotenmeo",
      "desc": "Shimeji desktop buddy from the Genshin Impact series.",
      "slug": "genshin-impact-aether-by-tenkotenmeo",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Genshin Impact Aether By Tenkotenmeo.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "genshin-impact-albedo-by-uuteki",
      "name": "Genshin Impact Albedo By Uuteki",
      "desc": "Shimeji desktop buddy from the Genshin Impact series.",
      "slug": "genshin-impact-albedo-by-uuteki",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Genshin Impact Albedo By Uuteki.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "genshin-impact-ayaka-by-uuteki",
      "name": "Genshin Impact Ayaka By Uuteki",
      "desc": "Shimeji desktop buddy from the Genshin Impact series.",
      "slug": "genshin-impact-ayaka-by-uuteki",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Genshin Impact Ayaka By Uuteki.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "genshin-impact-childe-by-nemururin",
      "name": "Genshin Impact Childe By Nemururin",
      "desc": "Shimeji desktop buddy from the Genshin Impact series.",
      "slug": "genshin-impact-childe-by-nemururin",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Genshin Impact Childe By Nemururin.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "genshin-impact-chongyun-by-uuteki",
      "name": "Genshin Impact Chongyun By Uuteki",
      "desc": "Shimeji desktop buddy from the Genshin Impact series.",
      "slug": "genshin-impact-chongyun-by-uuteki",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Genshin Impact Chongyun By Uuteki.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "genshin-impact-diluc-by-vol-tuna",
      "name": "Genshin Impact Diluc By Vol Tuna",
      "desc": "Shimeji desktop buddy from the Genshin Impact series.",
      "slug": "genshin-impact-diluc-by-vol-tuna",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Genshin Impact Diluc By Vol Tuna.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "genshin-impact-hu-tao-by-uuteki",
      "name": "Genshin Impact Hu Tao By Uuteki",
      "desc": "Shimeji desktop buddy from the Genshin Impact series.",
      "slug": "genshin-impact-hu-tao-by-uuteki",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Genshin Impact Hu Tao By Uuteki.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "genshin-impact-kaeya-by-vol-tuna",
      "name": "Genshin Impact Kaeya By Vol Tuna",
      "desc": "Shimeji desktop buddy from the Genshin Impact series.",
      "slug": "genshin-impact-kaeya-by-vol-tuna",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Genshin Impact Kaeya By Vol Tuna.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "genshin-impact-kazuha-by-uuteki",
      "name": "Genshin Impact Kazuha By Uuteki",
      "desc": "Shimeji desktop buddy from the Genshin Impact series.",
      "slug": "genshin-impact-kazuha-by-uuteki",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Genshin Impact Kazuha By Uuteki.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "genshin-impact-klee-by-uuteki",
      "name": "Genshin Impact Klee By Uuteki",
      "desc": "Shimeji desktop buddy from the Genshin Impact series.",
      "slug": "genshin-impact-klee-by-uuteki",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Genshin Impact Klee By Uuteki.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "genshin-impact-lumine-by-marcia",
      "name": "Genshin Impact Lumine By Marcia",
      "desc": "Shimeji desktop buddy from the Genshin Impact series.",
      "slug": "genshin-impact-lumine-by-marcia",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Genshin Impact Lumine By Marcia.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "genshin-impact-razor-by-batsouppe",
      "name": "Genshin Impact Razor By Batsouppe",
      "desc": "Shimeji desktop buddy from the Genshin Impact series.",
      "slug": "genshin-impact-razor-by-batsouppe",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Genshin Impact Razor By Batsouppe.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "genshin-impact-thoma-by-uuteki",
      "name": "Genshin Impact Thoma By Uuteki",
      "desc": "Shimeji desktop buddy from the Genshin Impact series.",
      "slug": "genshin-impact-thoma-by-uuteki",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Genshin Impact Thoma By Uuteki.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "genshin-impact-venti-by-sayonara-kuro",
      "name": "Genshin Impact Venti By Sayonara Kuro",
      "desc": "Shimeji desktop buddy from the Genshin Impact series.",
      "slug": "genshin-impact-venti-by-sayonara-kuro",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Genshin Impact Venti By Sayonara Kuro.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "genshin-impact-venti-by-uuteki",
      "name": "Genshin Impact Venti By Uuteki",
      "desc": "Shimeji desktop buddy from the Genshin Impact series.",
      "slug": "genshin-impact-venti-by-uuteki",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Genshin Impact Venti By Uuteki.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "genshin-impact-xiao-by-tachi-png",
      "name": "Genshin Impact Xiao By Tachi Png",
      "desc": "Shimeji desktop buddy from the Genshin Impact series.",
      "slug": "genshin-impact-xiao-by-tachi-png",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Genshin Impact Xiao By Tachi Png.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "genshin-impact-xiao-catboy-by-uuteki",
      "name": "Genshin Impact Xiao Catboy By Uuteki",
      "desc": "Shimeji desktop buddy from the Genshin Impact series.",
      "slug": "genshin-impact-xiao-catboy-by-uuteki",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Genshin Impact Xiao Catboy By Uuteki.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "genshin-impact-zhongli-by-vol-tuna",
      "name": "Genshin Impact Zhongli By Vol Tuna",
      "desc": "Shimeji desktop buddy from the Genshin Impact series.",
      "slug": "genshin-impact-zhongli-by-vol-tuna",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Genshin Impact Zhongli By Vol Tuna.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "gravity-falls-bill-cipher-01",
      "name": "Gravity Falls Bill Cipher 01",
      "desc": "Shimeji desktop buddy from the Gravity Falls series.",
      "slug": "gravity-falls-bill-cipher-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Gravity Falls Bill Cipher 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "gravity-falls-mabel-pines-01",
      "name": "Gravity Falls Mabel Pines 01",
      "desc": "Shimeji desktop buddy from the Gravity Falls series.",
      "slug": "gravity-falls-mabel-pines-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Gravity Falls Mabel Pines 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "group-finity-blank-guy",
      "name": "Group Finity Blank Guy",
      "desc": "Shimeji desktop buddy from the Group Finity series.",
      "slug": "group-finity-blank-guy",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Group Finity Blank Guy.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-america-by-steph-o-dell",
      "name": "Hetalia America By Steph O Dell",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-america-by-steph-o-dell",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia America By Steph O Dell.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-austria-by-tionne-dawnstar",
      "name": "Hetalia Austria By Tionne Dawnstar",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-austria-by-tionne-dawnstar",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Austria By Tionne Dawnstar.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-belarus-by-uncut-adventure",
      "name": "Hetalia Belarus By Uncut Adventure",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-belarus-by-uncut-adventure",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Belarus By Uncut Adventure.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-belgium-by-cute-corpse-boy",
      "name": "Hetalia Belgium By Cute Corpse Boy",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-belgium-by-cute-corpse-boy",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Belgium By Cute Corpse Boy.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-canada-by-steph-o-dell",
      "name": "Hetalia Canada By Steph O Dell",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-canada-by-steph-o-dell",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Canada By Steph O Dell.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-china-by-number-11-train",
      "name": "Hetalia China By Number 11 Train",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-china-by-number-11-train",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia China By Number 11 Train.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-denmark",
      "name": "Hetalia Denmark",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-denmark",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Denmark.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-england-by-dolunaylupus",
      "name": "Hetalia England By Dolunaylupus",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-england-by-dolunaylupus",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia England By Dolunaylupus.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-estonia-by-djiinraidinnae",
      "name": "Hetalia Estonia By Djiinraidinnae",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-estonia-by-djiinraidinnae",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Estonia By Djiinraidinnae.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-finland-by-jorael",
      "name": "Hetalia Finland By Jorael",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-finland-by-jorael",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Finland By Jorael.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-france-by-heta-garnet",
      "name": "Hetalia France By Heta Garnet",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-france-by-heta-garnet",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia France By Heta Garnet.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-germany-by-animatedpretzel",
      "name": "Hetalia Germany By Animatedpretzel",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-germany-by-animatedpretzel",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Germany By Animatedpretzel.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-greece-by-speed-xaaa",
      "name": "Hetalia Greece By Speed Xaaa",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-greece-by-speed-xaaa",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Greece By Speed Xaaa.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-hong-kong-by-azurethe-panda",
      "name": "Hetalia Hong Kong By Azurethe Panda",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-hong-kong-by-azurethe-panda",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Hong Kong By Azurethe Panda.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-hre-by-kouga-san",
      "name": "Hetalia Hre By Kouga San",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-hre-by-kouga-san",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Hre By Kouga San.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-hungary-by-amandy-the-ace",
      "name": "Hetalia Hungary By Amandy The Ace",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-hungary-by-amandy-the-ace",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Hungary By Amandy The Ace.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-iceland-by-heta-garnet",
      "name": "Hetalia Iceland By Heta Garnet",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-iceland-by-heta-garnet",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Iceland By Heta Garnet.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-italy-by-lunatic-mao",
      "name": "Hetalia Italy By Lunatic Mao",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-italy-by-lunatic-mao",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Italy By Lunatic Mao.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-japan",
      "name": "Hetalia Japan",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-japan",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Japan.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-kugelmugel-by-russia-romano",
      "name": "Hetalia Kugelmugel By Russia Romano",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-kugelmugel-by-russia-romano",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Kugelmugel By Russia Romano.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-latvia-by-russia-romano",
      "name": "Hetalia Latvia By Russia Romano",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-latvia-by-russia-romano",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Latvia By Russia Romano.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-liechtenstein",
      "name": "Hetalia Liechtenstein",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-liechtenstein",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Liechtenstein.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-lithuania-by-othila-131",
      "name": "Hetalia Lithuania By Othila 131",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-lithuania-by-othila-131",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Lithuania By Othila 131.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-netherlands-by-uncut-adventure",
      "name": "Hetalia Netherlands By Uncut Adventure",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-netherlands-by-uncut-adventure",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Netherlands By Uncut Adventure.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-norway-by-heta-garnet",
      "name": "Hetalia Norway By Heta Garnet",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-norway-by-heta-garnet",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Norway By Heta Garnet.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-poland-by-heta-garnet",
      "name": "Hetalia Poland By Heta Garnet",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-poland-by-heta-garnet",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Poland By Heta Garnet.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-prussia-by-achros",
      "name": "Hetalia Prussia By Achros",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-prussia-by-achros",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Prussia By Achros.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-romano-by-enigmaecstatic",
      "name": "Hetalia Romano By Enigmaecstatic",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-romano-by-enigmaecstatic",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Romano By Enigmaecstatic.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-russia-by-setsu-sama",
      "name": "Hetalia Russia By Setsu Sama",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-russia-by-setsu-sama",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Russia By Setsu Sama.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-scotland-by-swallow-no-tsubasa",
      "name": "Hetalia Scotland By Swallow No Tsubasa",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-scotland-by-swallow-no-tsubasa",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Scotland By Swallow No Tsubasa.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-sealand-by-mew-cherrii",
      "name": "Hetalia Sealand By Mew Cherrii",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-sealand-by-mew-cherrii",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Sealand By Mew Cherrii.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-seychelles-by-chocosrawloid",
      "name": "Hetalia Seychelles By Chocosrawloid",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-seychelles-by-chocosrawloid",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Seychelles By Chocosrawloid.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-south-korea-by-naka-baka-chan",
      "name": "Hetalia South Korea By Naka Baka Chan",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-south-korea-by-naka-baka-chan",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia South Korea By Naka Baka Chan.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-spain-by-orochimaru-666",
      "name": "Hetalia Spain By Orochimaru 666",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-spain-by-orochimaru-666",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Spain By Orochimaru 666.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-sweden-by-jacyll",
      "name": "Hetalia Sweden By Jacyll",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-sweden-by-jacyll",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Sweden By Jacyll.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-switzerland-by-chibi-spain",
      "name": "Hetalia Switzerland By Chibi Spain",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-switzerland-by-chibi-spain",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Switzerland By Chibi Spain.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-thailand-by-zilchat",
      "name": "Hetalia Thailand By Zilchat",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-thailand-by-zilchat",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Thailand By Zilchat.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hetalia-vietnam",
      "name": "Hetalia Vietnam",
      "desc": "Shimeji desktop buddy from the Hetalia series.",
      "slug": "hetalia-vietnam",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hetalia Vietnam.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "homestuck-dave-strider",
      "name": "Homestuck Dave Strider",
      "desc": "Shimeji desktop buddy from the Homestuck series.",
      "slug": "homestuck-dave-strider",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Homestuck Dave Strider.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "homestuck-equius",
      "name": "Homestuck Equius",
      "desc": "Shimeji desktop buddy from the Homestuck series.",
      "slug": "homestuck-equius",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Homestuck Equius.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "homestuck-eridan",
      "name": "Homestuck Eridan",
      "desc": "Shimeji desktop buddy from the Homestuck series.",
      "slug": "homestuck-eridan",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Homestuck Eridan.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "homestuck-feferi",
      "name": "Homestuck Feferi",
      "desc": "Shimeji desktop buddy from the Homestuck series.",
      "slug": "homestuck-feferi",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Homestuck Feferi.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "homestuck-gamzee-makara-by-minicow",
      "name": "Homestuck Gamzee Makara By Minicow",
      "desc": "Shimeji desktop buddy from the Homestuck series.",
      "slug": "homestuck-gamzee-makara-by-minicow",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Homestuck Gamzee Makara By Minicow.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "homestuck-kanaya",
      "name": "Homestuck Kanaya",
      "desc": "Shimeji desktop buddy from the Homestuck series.",
      "slug": "homestuck-kanaya",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Homestuck Kanaya.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "homestuck-sollux",
      "name": "Homestuck Sollux",
      "desc": "Shimeji desktop buddy from the Homestuck series.",
      "slug": "homestuck-sollux",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Homestuck Sollux.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "homestuck-terezi",
      "name": "Homestuck Terezi",
      "desc": "Shimeji desktop buddy from the Homestuck series.",
      "slug": "homestuck-terezi",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Homestuck Terezi.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "homestuck-vriska",
      "name": "Homestuck Vriska",
      "desc": "Shimeji desktop buddy from the Homestuck series.",
      "slug": "homestuck-vriska",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Homestuck Vriska.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "hunter-x-hunter-killua",
      "name": "Hunter X Hunter Killua",
      "desc": "Shimeji desktop buddy from the Hunter X Hunter series.",
      "slug": "hunter-x-hunter-killua",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Hunter X Hunter Killua.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "it-2017-pennywise-by-spider-toast",
      "name": "It 2017 Pennywise By Spider Toast",
      "desc": "Shimeji desktop buddy from the It 2017 series.",
      "slug": "it-2017-pennywise-by-spider-toast",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am It 2017 Pennywise By Spider Toast.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "jojos-bizarre-adventure-dio-01",
      "name": "Jojos Bizarre Adventure Dio 01",
      "desc": "Shimeji desktop buddy from the Jojos Bizarre Adventure series.",
      "slug": "jojos-bizarre-adventure-dio-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Jojos Bizarre Adventure Dio 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "jojos-bizarre-adventure-kakyoin-noriaki-by-kibstar",
      "name": "Jojos Bizarre Adventure Kakyoin Noriaki By Kibstar",
      "desc": "Shimeji desktop buddy from the Jojos Bizarre Adventure series.",
      "slug": "jojos-bizarre-adventure-kakyoin-noriaki-by-kibstar",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Jojos Bizarre Adventure Kakyoin Noriaki By Kibstar.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "kingdom-hearts-aqua",
      "name": "Kingdom Hearts Aqua",
      "desc": "Shimeji desktop buddy from the Kingdom Hearts series.",
      "slug": "kingdom-hearts-aqua",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Kingdom Hearts Aqua.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "kingdom-hearts-axel",
      "name": "Kingdom Hearts Axel",
      "desc": "Shimeji desktop buddy from the Kingdom Hearts series.",
      "slug": "kingdom-hearts-axel",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Kingdom Hearts Axel.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "kingdom-hearts-demyx",
      "name": "Kingdom Hearts Demyx",
      "desc": "Shimeji desktop buddy from the Kingdom Hearts series.",
      "slug": "kingdom-hearts-demyx",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Kingdom Hearts Demyx.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "kingdom-hearts-ienzo",
      "name": "Kingdom Hearts Ienzo",
      "desc": "Shimeji desktop buddy from the Kingdom Hearts series.",
      "slug": "kingdom-hearts-ienzo",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Kingdom Hearts Ienzo.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "kingdom-hearts-riku",
      "name": "Kingdom Hearts Riku",
      "desc": "Shimeji desktop buddy from the Kingdom Hearts series.",
      "slug": "kingdom-hearts-riku",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Kingdom Hearts Riku.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "kingdom-hearts-roxas",
      "name": "Kingdom Hearts Roxas",
      "desc": "Shimeji desktop buddy from the Kingdom Hearts series.",
      "slug": "kingdom-hearts-roxas",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Kingdom Hearts Roxas.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "kingdom-hearts-sora",
      "name": "Kingdom Hearts Sora",
      "desc": "Shimeji desktop buddy from the Kingdom Hearts series.",
      "slug": "kingdom-hearts-sora",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Kingdom Hearts Sora.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "kingdom-hearts-terra",
      "name": "Kingdom Hearts Terra",
      "desc": "Shimeji desktop buddy from the Kingdom Hearts series.",
      "slug": "kingdom-hearts-terra",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Kingdom Hearts Terra.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "kingdom-hearts-vanitas",
      "name": "Kingdom Hearts Vanitas",
      "desc": "Shimeji desktop buddy from the Kingdom Hearts series.",
      "slug": "kingdom-hearts-vanitas",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Kingdom Hearts Vanitas.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "kingdom-hearts-xemnas",
      "name": "Kingdom Hearts Xemnas",
      "desc": "Shimeji desktop buddy from the Kingdom Hearts series.",
      "slug": "kingdom-hearts-xemnas",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Kingdom Hearts Xemnas.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "mario-bowser-by-diva-don",
      "name": "Mario Bowser By Diva Don",
      "desc": "Shimeji desktop buddy from the Mario series.",
      "slug": "mario-bowser-by-diva-don",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Mario Bowser By Diva Don.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "mario-luigi-by-your-local-gamer",
      "name": "Mario Luigi By Your Local Gamer",
      "desc": "Shimeji desktop buddy from the Mario series.",
      "slug": "mario-luigi-by-your-local-gamer",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Mario Luigi By Your Local Gamer.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "mario-mario-by-diva-don",
      "name": "Mario Mario By Diva Don",
      "desc": "Shimeji desktop buddy from the Mario series.",
      "slug": "mario-mario-by-diva-don",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Mario Mario By Diva Don.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "mario-peach-by-diva-don",
      "name": "Mario Peach By Diva Don",
      "desc": "Shimeji desktop buddy from the Mario series.",
      "slug": "mario-peach-by-diva-don",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Mario Peach By Diva Don.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "mario-yoshi-by-cachomon",
      "name": "Mario Yoshi By Cachomon",
      "desc": "Shimeji desktop buddy from the Mario series.",
      "slug": "mario-yoshi-by-cachomon",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Mario Yoshi By Cachomon.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "megaman-megaman-by-nicola-maria-young",
      "name": "Megaman Megaman By Nicola Maria Young",
      "desc": "Shimeji desktop buddy from the Megaman series.",
      "slug": "megaman-megaman-by-nicola-maria-young",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Megaman Megaman By Nicola Maria Young.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "miraculous-cat-noir-by-dragonz-whisperer",
      "name": "Miraculous Cat Noir By Dragonz Whisperer",
      "desc": "Shimeji desktop buddy from the Miraculous series.",
      "slug": "miraculous-cat-noir-by-dragonz-whisperer",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Miraculous Cat Noir By Dragonz Whisperer.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "miraculous-ladybug-by-kicoma",
      "name": "Miraculous Ladybug By Kicoma",
      "desc": "Shimeji desktop buddy from the Miraculous series.",
      "slug": "miraculous-ladybug-by-kicoma",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Miraculous Ladybug By Kicoma.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "my-chemical-romance-bob-bryar-by-floorsucker",
      "name": "My Chemical Romance Bob Bryar By Floorsucker",
      "desc": "Shimeji desktop buddy from the My Chemical Romance series.",
      "slug": "my-chemical-romance-bob-bryar-by-floorsucker",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am My Chemical Romance Bob Bryar By Floorsucker.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "my-chemical-romance-frank-iero-by-floorsucker",
      "name": "My Chemical Romance Frank Iero By Floorsucker",
      "desc": "Shimeji desktop buddy from the My Chemical Romance series.",
      "slug": "my-chemical-romance-frank-iero-by-floorsucker",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am My Chemical Romance Frank Iero By Floorsucker.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "my-chemical-romance-gerard-way-by-floorsucker",
      "name": "My Chemical Romance Gerard Way By Floorsucker",
      "desc": "Shimeji desktop buddy from the My Chemical Romance series.",
      "slug": "my-chemical-romance-gerard-way-by-floorsucker",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am My Chemical Romance Gerard Way By Floorsucker.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "my-chemical-romance-mikey-way-by-floorsucker",
      "name": "My Chemical Romance Mikey Way By Floorsucker",
      "desc": "Shimeji desktop buddy from the My Chemical Romance series.",
      "slug": "my-chemical-romance-mikey-way-by-floorsucker",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am My Chemical Romance Mikey Way By Floorsucker.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "my-chemical-romance-ray-toro-by-floorsucker",
      "name": "My Chemical Romance Ray Toro By Floorsucker",
      "desc": "Shimeji desktop buddy from the My Chemical Romance series.",
      "slug": "my-chemical-romance-ray-toro-by-floorsucker",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am My Chemical Romance Ray Toro By Floorsucker.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "my-hero-academia-katsuki-bakugo-kacchan-by-superevey",
      "name": "My Hero Academia Katsuki Bakugo Kacchan By Superevey",
      "desc": "Shimeji desktop buddy from the My Hero Academia series.",
      "slug": "my-hero-academia-katsuki-bakugo-kacchan-by-superevey",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am My Hero Academia Katsuki Bakugo Kacchan By Superevey.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "my-hero-academia-keigo-takami-wing-hero-hawks-by-kadeart",
      "name": "My Hero Academia Keigo Takami Wing Hero Hawks By Kadeart",
      "desc": "Shimeji desktop buddy from the My Hero Academia series.",
      "slug": "my-hero-academia-keigo-takami-wing-hero-hawks-by-kadeart",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am My Hero Academia Keigo Takami Wing Hero Hawks By Kadeart.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "my-hero-academia-ochako-uraraka-uravity-by-superevey",
      "name": "My Hero Academia Ochako Uraraka Uravity By Superevey",
      "desc": "Shimeji desktop buddy from the My Hero Academia series.",
      "slug": "my-hero-academia-ochako-uraraka-uravity-by-superevey",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am My Hero Academia Ochako Uraraka Uravity By Superevey.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "my-hero-academia-shota-aizawa-eraser-head-by-quietsilenceus",
      "name": "My Hero Academia Shota Aizawa Eraser Head By Quietsilenceus",
      "desc": "Shimeji desktop buddy from the My Hero Academia series.",
      "slug": "my-hero-academia-shota-aizawa-eraser-head-by-quietsilenceus",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am My Hero Academia Shota Aizawa Eraser Head By Quietsilenceus.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "my-hero-academia-tenko-shimura-tomura-shigaraki-by-millky-toons",
      "name": "My Hero Academia Tenko Shimura Tomura Shigaraki By Millky Toons",
      "desc": "Shimeji desktop buddy from the My Hero Academia series.",
      "slug": "my-hero-academia-tenko-shimura-tomura-shigaraki-by-millky-toons",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am My Hero Academia Tenko Shimura Tomura Shigaraki By Millky Toons.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "my-hero-academia-toshinori-yagi-all-might-by-michi",
      "name": "My Hero Academia Toshinori Yagi All Might By Michi",
      "desc": "Shimeji desktop buddy from the My Hero Academia series.",
      "slug": "my-hero-academia-toshinori-yagi-all-might-by-michi",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am My Hero Academia Toshinori Yagi All Might By Michi.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "mystic-messenger-707-by-ember-cl",
      "name": "Mystic Messenger 707 By Ember Cl",
      "desc": "Shimeji desktop buddy from the Mystic Messenger series.",
      "slug": "mystic-messenger-707-by-ember-cl",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Mystic Messenger 707 By Ember Cl.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "mystic-messenger-707-by-hzokkiart",
      "name": "Mystic Messenger 707 By Hzokkiart",
      "desc": "Shimeji desktop buddy from the Mystic Messenger series.",
      "slug": "mystic-messenger-707-by-hzokkiart",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Mystic Messenger 707 By Hzokkiart.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "naruto-deidara",
      "name": "Naruto Deidara",
      "desc": "Shimeji desktop buddy from the Naruto series.",
      "slug": "naruto-deidara",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Naruto Deidara.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "naruto-gaara",
      "name": "Naruto Gaara",
      "desc": "Shimeji desktop buddy from the Naruto series.",
      "slug": "naruto-gaara",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Naruto Gaara.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "naruto-hidan",
      "name": "Naruto Hidan",
      "desc": "Shimeji desktop buddy from the Naruto series.",
      "slug": "naruto-hidan",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Naruto Hidan.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "naruto-hinata",
      "name": "Naruto Hinata",
      "desc": "Shimeji desktop buddy from the Naruto series.",
      "slug": "naruto-hinata",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Naruto Hinata.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "naruto-kakashi",
      "name": "Naruto Kakashi",
      "desc": "Shimeji desktop buddy from the Naruto series.",
      "slug": "naruto-kakashi",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Naruto Kakashi.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "naruto-naruto-uzumaki",
      "name": "Naruto Naruto Uzumaki",
      "desc": "Shimeji desktop buddy from the Naruto series.",
      "slug": "naruto-naruto-uzumaki",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Naruto Naruto Uzumaki.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "naruto-neji",
      "name": "Naruto Neji",
      "desc": "Shimeji desktop buddy from the Naruto series.",
      "slug": "naruto-neji",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Naruto Neji.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "naruto-pein",
      "name": "Naruto Pein",
      "desc": "Shimeji desktop buddy from the Naruto series.",
      "slug": "naruto-pein",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Naruto Pein.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "naruto-sasori",
      "name": "Naruto Sasori",
      "desc": "Shimeji desktop buddy from the Naruto series.",
      "slug": "naruto-sasori",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Naruto Sasori.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "naruto-sasuke",
      "name": "Naruto Sasuke",
      "desc": "Shimeji desktop buddy from the Naruto series.",
      "slug": "naruto-sasuke",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Naruto Sasuke.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "night-in-the-woods-angus-by-foxofnope",
      "name": "Night In The Woods Angus By Foxofnope",
      "desc": "Shimeji desktop buddy from the Night In The Woods series.",
      "slug": "night-in-the-woods-angus-by-foxofnope",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Night In The Woods Angus By Foxofnope.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "night-in-the-woods-bea-by-foxofnope",
      "name": "Night In The Woods Bea By Foxofnope",
      "desc": "Shimeji desktop buddy from the Night In The Woods series.",
      "slug": "night-in-the-woods-bea-by-foxofnope",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Night In The Woods Bea By Foxofnope.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "night-in-the-woods-gregg-by-foxofnope",
      "name": "Night In The Woods Gregg By Foxofnope",
      "desc": "Shimeji desktop buddy from the Night In The Woods series.",
      "slug": "night-in-the-woods-gregg-by-foxofnope",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Night In The Woods Gregg By Foxofnope.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "night-in-the-woods-mae-by-foxofnope",
      "name": "Night In The Woods Mae By Foxofnope",
      "desc": "Shimeji desktop buddy from the Night In The Woods series.",
      "slug": "night-in-the-woods-mae-by-foxofnope",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Night In The Woods Mae By Foxofnope.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "one-piece-ace-01",
      "name": "One Piece Ace 01",
      "desc": "Shimeji desktop buddy from the One Piece series.",
      "slug": "one-piece-ace-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am One Piece Ace 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "one-piece-bepo-01",
      "name": "One Piece Bepo 01",
      "desc": "Shimeji desktop buddy from the One Piece series.",
      "slug": "one-piece-bepo-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am One Piece Bepo 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "one-piece-cass-01",
      "name": "One Piece Cass 01",
      "desc": "Shimeji desktop buddy from the One Piece series.",
      "slug": "one-piece-cass-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am One Piece Cass 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "one-piece-croc-01",
      "name": "One Piece Croc 01",
      "desc": "Shimeji desktop buddy from the One Piece series.",
      "slug": "one-piece-croc-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am One Piece Croc 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "one-piece-dofla-01",
      "name": "One Piece Dofla 01",
      "desc": "Shimeji desktop buddy from the One Piece series.",
      "slug": "one-piece-dofla-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am One Piece Dofla 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "one-piece-kidd-01",
      "name": "One Piece Kidd 01",
      "desc": "Shimeji desktop buddy from the One Piece series.",
      "slug": "one-piece-kidd-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am One Piece Kidd 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "one-piece-law-01",
      "name": "One Piece Law 01",
      "desc": "Shimeji desktop buddy from the One Piece series.",
      "slug": "one-piece-law-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am One Piece Law 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "one-piece-lucci-01",
      "name": "One Piece Lucci 01",
      "desc": "Shimeji desktop buddy from the One Piece series.",
      "slug": "one-piece-lucci-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am One Piece Lucci 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "one-piece-luffy-01",
      "name": "One Piece Luffy 01",
      "desc": "Shimeji desktop buddy from the One Piece series.",
      "slug": "one-piece-luffy-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am One Piece Luffy 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "one-piece-marco-01",
      "name": "One Piece Marco 01",
      "desc": "Shimeji desktop buddy from the One Piece series.",
      "slug": "one-piece-marco-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am One Piece Marco 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "one-piece-mihawk-01",
      "name": "One Piece Mihawk 01",
      "desc": "Shimeji desktop buddy from the One Piece series.",
      "slug": "one-piece-mihawk-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am One Piece Mihawk 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "one-piece-zoro-01",
      "name": "One Piece Zoro 01",
      "desc": "Shimeji desktop buddy from the One Piece series.",
      "slug": "one-piece-zoro-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am One Piece Zoro 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "one-punch-man-genos-01",
      "name": "One Punch Man Genos 01",
      "desc": "Shimeji desktop buddy from the One Punch Man series.",
      "slug": "one-punch-man-genos-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am One Punch Man Genos 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "one-punch-man-saitama-01",
      "name": "One Punch Man Saitama 01",
      "desc": "Shimeji desktop buddy from the One Punch Man series.",
      "slug": "one-punch-man-saitama-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am One Punch Man Saitama 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "one-punch-man-sonic-01",
      "name": "One Punch Man Sonic 01",
      "desc": "Shimeji desktop buddy from the One Punch Man series.",
      "slug": "one-punch-man-sonic-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am One Punch Man Sonic 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "osomatsu-san-choromatsu-matsuno-by-emmmm",
      "name": "Osomatsu San Choromatsu Matsuno By Emmmm",
      "desc": "Shimeji desktop buddy from the Osomatsu San series.",
      "slug": "osomatsu-san-choromatsu-matsuno-by-emmmm",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Osomatsu San Choromatsu Matsuno By Emmmm.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "osomatsu-san-ichimatsu-matsuno-by-emmmm",
      "name": "Osomatsu San Ichimatsu Matsuno By Emmmm",
      "desc": "Shimeji desktop buddy from the Osomatsu San series.",
      "slug": "osomatsu-san-ichimatsu-matsuno-by-emmmm",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Osomatsu San Ichimatsu Matsuno By Emmmm.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "osomatsu-san-jyuushimatsu-matsuno-by-emmmm",
      "name": "Osomatsu San Jyuushimatsu Matsuno By Emmmm",
      "desc": "Shimeji desktop buddy from the Osomatsu San series.",
      "slug": "osomatsu-san-jyuushimatsu-matsuno-by-emmmm",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Osomatsu San Jyuushimatsu Matsuno By Emmmm.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "osomatsu-san-karamatsu-matsuno-by-emmmm",
      "name": "Osomatsu San Karamatsu Matsuno By Emmmm",
      "desc": "Shimeji desktop buddy from the Osomatsu San series.",
      "slug": "osomatsu-san-karamatsu-matsuno-by-emmmm",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Osomatsu San Karamatsu Matsuno By Emmmm.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "osomatsu-san-osomatsu-matsuno-by-emmmm",
      "name": "Osomatsu San Osomatsu Matsuno By Emmmm",
      "desc": "Shimeji desktop buddy from the Osomatsu San series.",
      "slug": "osomatsu-san-osomatsu-matsuno-by-emmmm",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Osomatsu San Osomatsu Matsuno By Emmmm.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "osomatsu-san-todomatsu-matsuno-by-emmmm",
      "name": "Osomatsu San Todomatsu Matsuno By Emmmm",
      "desc": "Shimeji desktop buddy from the Osomatsu San series.",
      "slug": "osomatsu-san-todomatsu-matsuno-by-emmmm",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Osomatsu San Todomatsu Matsuno By Emmmm.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "persons-daniel-howell-01",
      "name": "Persons Daniel Howell 01",
      "desc": "Shimeji desktop buddy from the Persons series.",
      "slug": "persons-daniel-howell-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Persons Daniel Howell 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "persons-jacksepticeye-by-zyrvix",
      "name": "Persons Jacksepticeye By Zyrvix",
      "desc": "Shimeji desktop buddy from the Persons series.",
      "slug": "persons-jacksepticeye-by-zyrvix",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Persons Jacksepticeye By Zyrvix.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "persons-link-by-jannelle-o",
      "name": "Persons Link By Jannelle O",
      "desc": "Shimeji desktop buddy from the Persons series.",
      "slug": "persons-link-by-jannelle-o",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Persons Link By Jannelle O.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "persons-markiplier-by-soapy-pnutwaffle",
      "name": "Persons Markiplier By Soapy Pnutwaffle",
      "desc": "Shimeji desktop buddy from the Persons series.",
      "slug": "persons-markiplier-by-soapy-pnutwaffle",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Persons Markiplier By Soapy Pnutwaffle.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "persons-pew-die-pie-by-hexakowka",
      "name": "Persons Pew Die Pie By Hexakowka",
      "desc": "Shimeji desktop buddy from the Persons series.",
      "slug": "persons-pew-die-pie-by-hexakowka",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Persons Pew Die Pie By Hexakowka.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "persons-phil-lester-01",
      "name": "Persons Phil Lester 01",
      "desc": "Shimeji desktop buddy from the Persons series.",
      "slug": "persons-phil-lester-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Persons Phil Lester 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "persons-rhett-by-jannelle-o",
      "name": "Persons Rhett By Jannelle O",
      "desc": "Shimeji desktop buddy from the Persons series.",
      "slug": "persons-rhett-by-jannelle-o",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Persons Rhett By Jannelle O.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-ampharos-by-krokus-00",
      "name": "Pokemon Ampharos By Krokus 00",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-ampharos-by-krokus-00",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Ampharos By Krokus 00.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-archen-by-mandar-the-mousey",
      "name": "Pokemon Archen By Mandar The Mousey",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-archen-by-mandar-the-mousey",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Archen By Mandar The Mousey.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-armaldo-by-dead-end-king",
      "name": "Pokemon Armaldo By Dead End King",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-armaldo-by-dead-end-king",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Armaldo By Dead End King.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-chandelure-by-rozen-maiden-girl",
      "name": "Pokemon Chandelure By Rozen Maiden Girl",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-chandelure-by-rozen-maiden-girl",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Chandelure By Rozen Maiden Girl.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-charmander-by-cachomon",
      "name": "Pokemon Charmander By Cachomon",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-charmander-by-cachomon",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Charmander By Cachomon.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-clefable-by-sparkus",
      "name": "Pokemon Clefable By Sparkus",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-clefable-by-sparkus",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Clefable By Sparkus.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-crobat-by-sparkus-thunderbolt",
      "name": "Pokemon Crobat By Sparkus Thunderbolt",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-crobat-by-sparkus-thunderbolt",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Crobat By Sparkus Thunderbolt.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-cumceon-by-cachomon",
      "name": "Pokemon Cumceon By Cachomon",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-cumceon-by-cachomon",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Cumceon By Cachomon.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-dewott-by-wupar",
      "name": "Pokemon Dewott By Wupar",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-dewott-by-wupar",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Dewott By Wupar.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-drifloon-by-tomatebleuet",
      "name": "Pokemon Drifloon By Tomatebleuet",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-drifloon-by-tomatebleuet",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Drifloon By Tomatebleuet.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-eevee-by-cachomon",
      "name": "Pokemon Eevee By Cachomon",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-eevee-by-cachomon",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Eevee By Cachomon.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-eevee-by-stormgale",
      "name": "Pokemon Eevee By Stormgale",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-eevee-by-stormgale",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Eevee By Stormgale.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-feraligatr-by-sparkus",
      "name": "Pokemon Feraligatr By Sparkus",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-feraligatr-by-sparkus",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Feraligatr By Sparkus.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-flygon-by-niicchan",
      "name": "Pokemon Flygon By Niicchan",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-flygon-by-niicchan",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Flygon By Niicchan.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-gardevoir-by-dead-end-king",
      "name": "Pokemon Gardevoir By Dead End King",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-gardevoir-by-dead-end-king",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Gardevoir By Dead End King.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-gastly-by-sabisaotome",
      "name": "Pokemon Gastly By Sabisaotome",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-gastly-by-sabisaotome",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Gastly By Sabisaotome.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-jolteon-by-green-feline-777",
      "name": "Pokemon Jolteon By Green Feline 777",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-jolteon-by-green-feline-777",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Jolteon By Green Feline 777.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-kyurem-by-mazeyelle",
      "name": "Pokemon Kyurem By Mazeyelle",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-kyurem-by-mazeyelle",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Kyurem By Mazeyelle.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-larvitar-by-cachomon",
      "name": "Pokemon Larvitar By Cachomon",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-larvitar-by-cachomon",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Larvitar By Cachomon.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-litwick-by-cachomon",
      "name": "Pokemon Litwick By Cachomon",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-litwick-by-cachomon",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Litwick By Cachomon.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-mew-by-cachomon",
      "name": "Pokemon Mew By Cachomon",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-mew-by-cachomon",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Mew By Cachomon.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-misdreavus-by-dead-end-king",
      "name": "Pokemon Misdreavus By Dead End King",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-misdreavus-by-dead-end-king",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Misdreavus By Dead End King.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-mudkip-by-niicchan",
      "name": "Pokemon Mudkip By Niicchan",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-mudkip-by-niicchan",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Mudkip By Niicchan.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-only-slowpoke-by-mizyin",
      "name": "Pokemon Only Slowpoke By Mizyin",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-only-slowpoke-by-mizyin",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Only Slowpoke By Mizyin.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-oshawott-by-mewgal",
      "name": "Pokemon Oshawott By Mewgal",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-oshawott-by-mewgal",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Oshawott By Mewgal.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-pikachu-by-headbutt-of-love",
      "name": "Pokemon Pikachu By Headbutt Of Love",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-pikachu-by-headbutt-of-love",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Pikachu By Headbutt Of Love.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-pikachu-by-stormgale",
      "name": "Pokemon Pikachu By Stormgale",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-pikachu-by-stormgale",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Pikachu By Stormgale.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-purrloin-by-cachomon",
      "name": "Pokemon Purrloin By Cachomon",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-purrloin-by-cachomon",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Purrloin By Cachomon.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-raichu-by-niicchan",
      "name": "Pokemon Raichu By Niicchan",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-raichu-by-niicchan",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Raichu By Niicchan.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-raichu-by-sparkus",
      "name": "Pokemon Raichu By Sparkus",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-raichu-by-sparkus",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Raichu By Sparkus.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-reshriram-by-mazeyelle",
      "name": "Pokemon Reshriram By Mazeyelle",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-reshriram-by-mazeyelle",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Reshriram By Mazeyelle.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-sewaddle-by-kina-maaka",
      "name": "Pokemon Sewaddle By Kina Maaka",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-sewaddle-by-kina-maaka",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Sewaddle By Kina Maaka.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-shedinja-by-icantjoinfacebook",
      "name": "Pokemon Shedinja By Icantjoinfacebook",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-shedinja-by-icantjoinfacebook",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Shedinja By Icantjoinfacebook.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-snivy-by-tsutaja",
      "name": "Pokemon Snivy By Tsutaja",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-snivy-by-tsutaja",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Snivy By Tsutaja.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-sparker-by-dead-end-king",
      "name": "Pokemon Sparker By Dead End King",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-sparker-by-dead-end-king",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Sparker By Dead End King.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-squirtle-01",
      "name": "Pokemon Squirtle 01",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-squirtle-01",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Squirtle 01.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-suicune-by-niicchan",
      "name": "Pokemon Suicune By Niicchan",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-suicune-by-niicchan",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Suicune By Niicchan.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-surfachu-by-akizakura-16",
      "name": "Pokemon Surfachu By Akizakura 16",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-surfachu-by-akizakura-16",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Surfachu By Akizakura 16.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-swablu-by-cachomon",
      "name": "Pokemon Swablu By Cachomon",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-swablu-by-cachomon",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Swablu By Cachomon.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-tepig-by-spyroflame-0487",
      "name": "Pokemon Tepig By Spyroflame 0487",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-tepig-by-spyroflame-0487",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Tepig By Spyroflame 0487.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-togekiss-by-sparkus",
      "name": "Pokemon Togekiss By Sparkus",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-togekiss-by-sparkus",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Togekiss By Sparkus.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-tyranitar-by-sparkus",
      "name": "Pokemon Tyranitar By Sparkus",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-tyranitar-by-sparkus",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Tyranitar By Sparkus.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-umbreon-by-cachomon",
      "name": "Pokemon Umbreon By Cachomon",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-umbreon-by-cachomon",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Umbreon By Cachomon.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-umbreon-by-sparkus",
      "name": "Pokemon Umbreon By Sparkus",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-umbreon-by-sparkus",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Umbreon By Sparkus.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-umbreon-shiny-by-cachomon",
      "name": "Pokemon Umbreon Shiny By Cachomon",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-umbreon-shiny-by-cachomon",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Umbreon Shiny By Cachomon.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-zangoose-by-icantjoinfacebook",
      "name": "Pokemon Zangoose By Icantjoinfacebook",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-zangoose-by-icantjoinfacebook",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Zangoose By Icantjoinfacebook.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-zorua-by-stabicon",
      "name": "Pokemon Zorua By Stabicon",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-zorua-by-stabicon",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Zorua By Stabicon.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pokemon-zweilous-by-dead-end-king",
      "name": "Pokemon Zweilous By Dead End King",
      "desc": "Shimeji desktop buddy from the Pokemon series.",
      "slug": "pokemon-zweilous-by-dead-end-king",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pokemon Zweilous By Dead End King.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "pusheen-pusheen-the-cat-by-crystal-clear-cc",
      "name": "Pusheen Pusheen The Cat By Crystal Clear Cc",
      "desc": "Shimeji desktop buddy from the Pusheen series.",
      "slug": "pusheen-pusheen-the-cat-by-crystal-clear-cc",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Pusheen Pusheen The Cat By Crystal Clear Cc.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "rick-and-morty-rick-by-starrii-chan",
      "name": "Rick And Morty Rick By Starrii Chan",
      "desc": "Shimeji desktop buddy from the Rick And Morty series.",
      "slug": "rick-and-morty-rick-by-starrii-chan",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Rick And Morty Rick By Starrii Chan.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "sonic-sonic",
      "name": "Sonic Sonic",
      "desc": "Shimeji desktop buddy from the Sonic series.",
      "slug": "sonic-sonic",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Sonic Sonic.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "sonic-sonic-by-myly14",
      "name": "Sonic Sonic By Myly14",
      "desc": "Shimeji desktop buddy from the Sonic series.",
      "slug": "sonic-sonic-by-myly14",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Sonic Sonic By Myly14.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "sonic-tails",
      "name": "Sonic Tails",
      "desc": "Shimeji desktop buddy from the Sonic series.",
      "slug": "sonic-tails",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Sonic Tails.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "south-park-butters-stotch",
      "name": "South Park Butters Stotch",
      "desc": "Shimeji desktop buddy from the South Park series.",
      "slug": "south-park-butters-stotch",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am South Park Butters Stotch.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "south-park-cartman",
      "name": "South Park Cartman",
      "desc": "Shimeji desktop buddy from the South Park series.",
      "slug": "south-park-cartman",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am South Park Cartman.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "south-park-craig-by-x-no-wherex",
      "name": "South Park Craig By X No Wherex",
      "desc": "Shimeji desktop buddy from the South Park series.",
      "slug": "south-park-craig-by-x-no-wherex",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am South Park Craig By X No Wherex.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "south-park-kenny-by-x-no-wherex",
      "name": "South Park Kenny By X No Wherex",
      "desc": "Shimeji desktop buddy from the South Park series.",
      "slug": "south-park-kenny-by-x-no-wherex",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am South Park Kenny By X No Wherex.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "south-park-kenny-zombie-by-x-no-wherex",
      "name": "South Park Kenny Zombie By X No Wherex",
      "desc": "Shimeji desktop buddy from the South Park series.",
      "slug": "south-park-kenny-zombie-by-x-no-wherex",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am South Park Kenny Zombie By X No Wherex.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "south-park-kyle",
      "name": "South Park Kyle",
      "desc": "Shimeji desktop buddy from the South Park series.",
      "slug": "south-park-kyle",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am South Park Kyle.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "south-park-mysterion-by-x-no-wherex",
      "name": "South Park Mysterion By X No Wherex",
      "desc": "Shimeji desktop buddy from the South Park series.",
      "slug": "south-park-mysterion-by-x-no-wherex",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am South Park Mysterion By X No Wherex.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "south-park-stan-by-x-no-wherex",
      "name": "South Park Stan By X No Wherex",
      "desc": "Shimeji desktop buddy from the South Park series.",
      "slug": "south-park-stan-by-x-no-wherex",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am South Park Stan By X No Wherex.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "south-park-tweek",
      "name": "South Park Tweek",
      "desc": "Shimeji desktop buddy from the South Park series.",
      "slug": "south-park-tweek",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am South Park Tweek.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "sponge-bob-square-pants-sponge-bob-by-sojia",
      "name": "Sponge Bob Square Pants Sponge Bob By Sojia",
      "desc": "Shimeji desktop buddy from the Sponge Bob Square Pants series.",
      "slug": "sponge-bob-square-pants-sponge-bob-by-sojia",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Sponge Bob Square Pants Sponge Bob By Sojia.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "steven-universe-garnet-by-s-brucket",
      "name": "Steven Universe Garnet By S Brucket",
      "desc": "Shimeji desktop buddy from the Steven Universe series.",
      "slug": "steven-universe-garnet-by-s-brucket",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Steven Universe Garnet By S Brucket.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "steven-universe-lapis-lazuli-by-oskilll",
      "name": "Steven Universe Lapis Lazuli By Oskilll",
      "desc": "Shimeji desktop buddy from the Steven Universe series.",
      "slug": "steven-universe-lapis-lazuli-by-oskilll",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Steven Universe Lapis Lazuli By Oskilll.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "steven-universe-pearl-by-analostan",
      "name": "Steven Universe Pearl By Analostan",
      "desc": "Shimeji desktop buddy from the Steven Universe series.",
      "slug": "steven-universe-pearl-by-analostan",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Steven Universe Pearl By Analostan.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "steven-universe-peridot-by-heta-garnet",
      "name": "Steven Universe Peridot By Heta Garnet",
      "desc": "Shimeji desktop buddy from the Steven Universe series.",
      "slug": "steven-universe-peridot-by-heta-garnet",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Steven Universe Peridot By Heta Garnet.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "steven-universe-ruby-by-junn-boi",
      "name": "Steven Universe Ruby By Junn Boi",
      "desc": "Shimeji desktop buddy from the Steven Universe series.",
      "slug": "steven-universe-ruby-by-junn-boi",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Steven Universe Ruby By Junn Boi.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "the-avengers-bruce-banner",
      "name": "The Avengers Bruce Banner",
      "desc": "Shimeji desktop buddy from the The Avengers series.",
      "slug": "the-avengers-bruce-banner",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am The Avengers Bruce Banner.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "the-avengers-captain-america",
      "name": "The Avengers Captain America",
      "desc": "Shimeji desktop buddy from the The Avengers series.",
      "slug": "the-avengers-captain-america",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am The Avengers Captain America.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "the-avengers-hawkeye",
      "name": "The Avengers Hawkeye",
      "desc": "Shimeji desktop buddy from the The Avengers series.",
      "slug": "the-avengers-hawkeye",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am The Avengers Hawkeye.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "the-avengers-loki",
      "name": "The Avengers Loki",
      "desc": "Shimeji desktop buddy from the The Avengers series.",
      "slug": "the-avengers-loki",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am The Avengers Loki.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "the-avengers-loki-(helmet)",
      "name": "The Avengers Loki (helmet)",
      "desc": "Shimeji desktop buddy from the The Avengers series.",
      "slug": "the-avengers-loki-(helmet)",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am The Avengers Loki (helmet).",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "the-avengers-tony-stark",
      "name": "The Avengers Tony Stark",
      "desc": "Shimeji desktop buddy from the The Avengers series.",
      "slug": "the-avengers-tony-stark",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am The Avengers Tony Stark.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "the-beatles-george-harrison",
      "name": "The Beatles George Harrison",
      "desc": "Shimeji desktop buddy from the The Beatles series.",
      "slug": "the-beatles-george-harrison",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am The Beatles George Harrison.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "the-beatles-john-lennon",
      "name": "The Beatles John Lennon",
      "desc": "Shimeji desktop buddy from the The Beatles series.",
      "slug": "the-beatles-john-lennon",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am The Beatles John Lennon.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "the-beatles-paul-mccartney",
      "name": "The Beatles Paul Mccartney",
      "desc": "Shimeji desktop buddy from the The Beatles series.",
      "slug": "the-beatles-paul-mccartney",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am The Beatles Paul Mccartney.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "the-beatles-ringo-starr",
      "name": "The Beatles Ringo Starr",
      "desc": "Shimeji desktop buddy from the The Beatles series.",
      "slug": "the-beatles-ringo-starr",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am The Beatles Ringo Starr.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "tokyo-ghoul-shuu-tsukiyama-by-kervanos",
      "name": "Tokyo Ghoul Shuu Tsukiyama By Kervanos",
      "desc": "Shimeji desktop buddy from the Tokyo Ghoul series.",
      "slug": "tokyo-ghoul-shuu-tsukiyama-by-kervanos",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Tokyo Ghoul Shuu Tsukiyama By Kervanos.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-alphys",
      "name": "Undertale Alphys",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-alphys",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Alphys.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-asriel",
      "name": "Undertale Asriel",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-asriel",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Asriel.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-asylum-sans-by-niuniu-nuko",
      "name": "Undertale Asylum Sans By Niuniu Nuko",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-asylum-sans-by-niuniu-nuko",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Asylum Sans By Niuniu Nuko.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-birdtale-sans-by-niuniu-nuko",
      "name": "Undertale Birdtale Sans By Niuniu Nuko",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-birdtale-sans-by-niuniu-nuko",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Birdtale Sans By Niuniu Nuko.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-blueberry-by-kaweii",
      "name": "Undertale Blueberry By Kaweii",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-blueberry-by-kaweii",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Blueberry By Kaweii.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-chara",
      "name": "Undertale Chara",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-chara",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Chara.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-dreamtale-sans-by-niuniu-nuko",
      "name": "Undertale Dreamtale Sans By Niuniu Nuko",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-dreamtale-sans-by-niuniu-nuko",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Dreamtale Sans By Niuniu Nuko.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-dust-sans-by-niuniu-nuko",
      "name": "Undertale Dust Sans By Niuniu Nuko",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-dust-sans-by-niuniu-nuko",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Dust Sans By Niuniu Nuko.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-dusty-sansy-by-niuniu-nuko",
      "name": "Undertale Dusty Sansy By Niuniu Nuko",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-dusty-sansy-by-niuniu-nuko",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Dusty Sansy By Niuniu Nuko.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-error-sans-by-loverofpiggies",
      "name": "Undertale Error Sans By Loverofpiggies",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-error-sans-by-loverofpiggies",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Error Sans By Loverofpiggies.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-flower-fell-sans-by-niuniu-nuko",
      "name": "Undertale Flower Fell Sans By Niuniu Nuko",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-flower-fell-sans-by-niuniu-nuko",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Flower Fell Sans By Niuniu Nuko.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-flowey",
      "name": "Undertale Flowey",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-flowey",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Flowey.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-fresh-sans-by-niuniu-nuko",
      "name": "Undertale Fresh Sans By Niuniu Nuko",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-fresh-sans-by-niuniu-nuko",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Fresh Sans By Niuniu Nuko.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-frisk",
      "name": "Undertale Frisk",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-frisk",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Frisk.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-gaster-sans-by-niuniu-nuko",
      "name": "Undertale Gaster Sans By Niuniu Nuko",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-gaster-sans-by-niuniu-nuko",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Gaster Sans By Niuniu Nuko.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-horror-sans-by-beld-craft",
      "name": "Undertale Horror Sans By Beld Craft",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-horror-sans-by-beld-craft",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Horror Sans By Beld Craft.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-ink-sans-by-niuniu-nuko",
      "name": "Undertale Ink Sans By Niuniu Nuko",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-ink-sans-by-niuniu-nuko",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Ink Sans By Niuniu Nuko.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-napstablook",
      "name": "Undertale Napstablook",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-napstablook",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Napstablook.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-nightmare-sans-by-niuniu-nuko",
      "name": "Undertale Nightmare Sans By Niuniu Nuko",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-nightmare-sans-by-niuniu-nuko",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Nightmare Sans By Niuniu Nuko.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-papyrus",
      "name": "Undertale Papyrus",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-papyrus",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Papyrus.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-reaper-sans-by-niuniu-nuko",
      "name": "Undertale Reaper Sans By Niuniu Nuko",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-reaper-sans-by-niuniu-nuko",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Reaper Sans By Niuniu Nuko.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-sans",
      "name": "Undertale Sans",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-sans",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Sans.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-sans-by-niuniu-nuko",
      "name": "Undertale Sans By Niuniu Nuko",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-sans-by-niuniu-nuko",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Sans By Niuniu Nuko.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-soriel",
      "name": "Undertale Soriel",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-soriel",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Soriel.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-underfell-sans-by-niuniu-nuko",
      "name": "Undertale Underfell Sans By Niuniu Nuko",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-underfell-sans-by-niuniu-nuko",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Underfell Sans By Niuniu Nuko.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-underswap-sans-by-niuniu-nuko",
      "name": "Undertale Underswap Sans By Niuniu Nuko",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-underswap-sans-by-niuniu-nuko",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Underswap Sans By Niuniu Nuko.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "undertale-undyne",
      "name": "Undertale Undyne",
      "desc": "Shimeji desktop buddy from the Undertale series.",
      "slug": "undertale-undyne",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Undertale Undyne.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "vocaloid-gakupo",
      "name": "Vocaloid Gakupo",
      "desc": "Shimeji desktop buddy from the Vocaloid series.",
      "slug": "vocaloid-gakupo",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Vocaloid Gakupo.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "vocaloid-hatsune-miku",
      "name": "Vocaloid Hatsune Miku",
      "desc": "Shimeji desktop buddy from the Vocaloid series.",
      "slug": "vocaloid-hatsune-miku",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Vocaloid Hatsune Miku.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "vocaloid-ia",
      "name": "Vocaloid Ia",
      "desc": "Shimeji desktop buddy from the Vocaloid series.",
      "slug": "vocaloid-ia",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Vocaloid Ia.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "vocaloid-kagamine-len",
      "name": "Vocaloid Kagamine Len",
      "desc": "Shimeji desktop buddy from the Vocaloid series.",
      "slug": "vocaloid-kagamine-len",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Vocaloid Kagamine Len.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "vocaloid-kagamine-rin",
      "name": "Vocaloid Kagamine Rin",
      "desc": "Shimeji desktop buddy from the Vocaloid series.",
      "slug": "vocaloid-kagamine-rin",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Vocaloid Kagamine Rin.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "vocaloid-kaito",
      "name": "Vocaloid Kaito",
      "desc": "Shimeji desktop buddy from the Vocaloid series.",
      "slug": "vocaloid-kaito",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Vocaloid Kaito.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "vocaloid-luka",
      "name": "Vocaloid Luka",
      "desc": "Shimeji desktop buddy from the Vocaloid series.",
      "slug": "vocaloid-luka",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Vocaloid Luka.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "vocaloid-mikuo",
      "name": "Vocaloid Mikuo",
      "desc": "Shimeji desktop buddy from the Vocaloid series.",
      "slug": "vocaloid-mikuo",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Vocaloid Mikuo.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "vocaloid-oliver",
      "name": "Vocaloid Oliver",
      "desc": "Shimeji desktop buddy from the Vocaloid series.",
      "slug": "vocaloid-oliver",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Vocaloid Oliver.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "voltron-keith-by-mel-meiko-mei-ling",
      "name": "Voltron Keith By Mel Meiko Mei Ling",
      "desc": "Shimeji desktop buddy from the Voltron series.",
      "slug": "voltron-keith-by-mel-meiko-mei-ling",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Voltron Keith By Mel Meiko Mei Ling.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "voltron-pidge-by-neko-rawr-meow",
      "name": "Voltron Pidge By Neko Rawr Meow",
      "desc": "Shimeji desktop buddy from the Voltron series.",
      "slug": "voltron-pidge-by-neko-rawr-meow",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Voltron Pidge By Neko Rawr Meow.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "x-men-deadpool-by-cake-doom",
      "name": "X Men Deadpool By Cake Doom",
      "desc": "Shimeji desktop buddy from the X Men series.",
      "slug": "x-men-deadpool-by-cake-doom",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am X Men Deadpool By Cake Doom.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "yu-gi-oh-blue-eyes-by-burakbir",
      "name": "Yu Gi Oh Blue Eyes By Burakbir",
      "desc": "Shimeji desktop buddy from the Yu Gi Oh series.",
      "slug": "yu-gi-oh-blue-eyes-by-burakbir",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Yu Gi Oh Blue Eyes By Burakbir.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "yu-gi-oh-dark-magician-by-burakbir",
      "name": "Yu Gi Oh Dark Magician By Burakbir",
      "desc": "Shimeji desktop buddy from the Yu Gi Oh series.",
      "slug": "yu-gi-oh-dark-magician-by-burakbir",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Yu Gi Oh Dark Magician By Burakbir.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "yu-gi-oh-kiribo-by-burakbir",
      "name": "Yu Gi Oh Kiribo By Burakbir",
      "desc": "Shimeji desktop buddy from the Yu Gi Oh series.",
      "slug": "yu-gi-oh-kiribo-by-burakbir",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Yu Gi Oh Kiribo By Burakbir.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "yu-gi-oh-new-bakura-by-burakbir",
      "name": "Yu Gi Oh New Bakura By Burakbir",
      "desc": "Shimeji desktop buddy from the Yu Gi Oh series.",
      "slug": "yu-gi-oh-new-bakura-by-burakbir",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Yu Gi Oh New Bakura By Burakbir.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "yu-gi-oh-new-yugi-by-burakbir",
      "name": "Yu Gi Oh New Yugi By Burakbir",
      "desc": "Shimeji desktop buddy from the Yu Gi Oh series.",
      "slug": "yu-gi-oh-new-yugi-by-burakbir",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Yu Gi Oh New Yugi By Burakbir.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "yu-gi-oh-old-bakura-by-burakbir",
      "name": "Yu Gi Oh Old Bakura By Burakbir",
      "desc": "Shimeji desktop buddy from the Yu Gi Oh series.",
      "slug": "yu-gi-oh-old-bakura-by-burakbir",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Yu Gi Oh Old Bakura By Burakbir.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "yu-gi-oh-rex-raptor-by-burakbir",
      "name": "Yu Gi Oh Rex Raptor By Burakbir",
      "desc": "Shimeji desktop buddy from the Yu Gi Oh series.",
      "slug": "yu-gi-oh-rex-raptor-by-burakbir",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Yu Gi Oh Rex Raptor By Burakbir.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "yu-gi-oh-seto-kaiba-by-burakbir",
      "name": "Yu Gi Oh Seto Kaiba By Burakbir",
      "desc": "Shimeji desktop buddy from the Yu Gi Oh series.",
      "slug": "yu-gi-oh-seto-kaiba-by-burakbir",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Yu Gi Oh Seto Kaiba By Burakbir.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "yu-gi-oh-weevil-underwood-by-burakbir",
      "name": "Yu Gi Oh Weevil Underwood By Burakbir",
      "desc": "Shimeji desktop buddy from the Yu Gi Oh series.",
      "slug": "yu-gi-oh-weevil-underwood-by-burakbir",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Yu Gi Oh Weevil Underwood By Burakbir.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "yu-gi-oh-yugi-by-burakbir",
      "name": "Yu Gi Oh Yugi By Burakbir",
      "desc": "Shimeji desktop buddy from the Yu Gi Oh series.",
      "slug": "yu-gi-oh-yugi-by-burakbir",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Yu Gi Oh Yugi By Burakbir.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    },
    {
      "id": "yuri-on-ice-viktor-by-ero-pinku",
      "name": "Yuri On Ice Viktor By Ero Pinku",
      "desc": "Shimeji desktop buddy from the Yuri On Ice series.",
      "slug": "yuri-on-ice-viktor-by-ero-pinku",
      "sizeFactor": 1.0,
      "phrases": [
        "Hello! I am Yuri On Ice Viktor By Ero Pinku.",
        "Let's write some clean code together!",
        "Is that a compiler error? I can search it for you.",
        "Enjoying the glassmorphism layout?",
        "Awaiting instructions, explorer!"
      ]
    }
];

// Reusable widget builder with Shimeji physics engine
class OmniMascotWidget {
  constructor() {
    this.activePetId = localStorage.getItem('omni_active_pet') || 'jill-stingray';
    this.petSize = parseInt(localStorage.getItem('omni_pet_size')) || 50;
    this.petEnabled = localStorage.getItem('omni_pet_enabled') !== 'false';
    this.activePet = OMNI_MASCOTS.find(p => p.id === this.activePetId) || OMNI_MASCOTS[0];
    
    // Position coordinates (pinned to bottom-right by default)
    this.x = Math.max(20, (window.innerWidth || 1280) - 120);
    this.y = Math.max(20, (window.innerHeight || 543) - 75);
    
    // Physics and state variables
    this.state = 'idle'; // falling, idle, walking, climbing, dragging
    this.facing = 'right';  // left, right
    this.frameIndex = 1;
    this.isDragging = false;
    
    this.initWidgetElement();
    this.registerDragHandlers();
    this.startPhysicsLoop();
  }

  initWidgetElement() {
    let container = document.getElementById('floatingPetContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'floatingPetContainer';
      container.className = 'floating-pet-container';
      document.body.appendChild(container);
    }
    this.container = container;

    // Apply basic CSS styling inline
    this.container.style.position = 'fixed';
    this.container.style.zIndex = '10002'; // Higher z-index to overlay normal elements
    this.container.style.display = this.petEnabled ? 'flex' : 'none';
    this.container.style.flexDirection = 'column';
    this.container.style.alignItems = 'center';
    this.container.style.cursor = 'grab';
    this.container.style.pointerEvents = 'auto';
    this.container.style.left = `${this.x}px`;
    this.container.style.top = `${this.y}px`;
    this.container.style.transition = 'none';

    // Populate interior HTML including a hover toolbar menu!
    this.container.innerHTML = `
      <div class="pet-hover-menu" id="petHoverMenu" style="
        display: none; position: absolute; top: -35px; background: rgba(15, 16, 18, 0.95);
        border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 4px 10px;
        gap: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.5); z-index: 10003;
        align-items: center; justify-content: center;
      ">
        <span onclick="window.toggleOmniMascotStoreModal(true)" style="cursor: pointer; font-size: 0.9rem;" title="OMNI Mascot Store">🛒</span>
        <span onclick="window.toggleMascotVisibility()" style="cursor: pointer; font-size: 0.9rem; color: #ff5555;" title="Hide Pet">❌</span>
      </div>
      <img src="${this.getFrameUrl(1)}" alt="OMNI Mascot" id="petMascotImg" style="user-select:none; -webkit-user-drag:none;">
      <div class="pet-speak-bubble" id="petSpeakBubble">Awaiting instructions, explorer!</div>
    `;

    this.mascotImg = document.getElementById('petMascotImg');
    this.speakBubble = document.getElementById('petSpeakBubble');
    this.hoverMenu = document.getElementById('petHoverMenu');

    if (this.mascotImg) {
      this.mascotImg.src = this.getFrameUrl(this.frameIndex);
    }

    this.updateScale(this.petSize);
    this.startSpeechLoop();

    // Mouse hover events to show/hide toolbar
    this.container.addEventListener('mouseenter', () => {
      if (this.hoverMenu) this.hoverMenu.style.display = 'flex';
    });
    this.container.addEventListener('mouseleave', () => {
      if (this.hoverMenu) this.hoverMenu.style.display = 'none';
    });

    // Trigger speech on click
    this.mascotImg.addEventListener('click', (e) => {
      e.stopPropagation();
      this.triggerRandomSpeech();
    });
  }

  getFrameUrl(frame) {
    if (this.activePet && this.activePet.isStatic) {
      if (this.mascotImg) {
        const frameImg = this.activePet.avatar.replace('.png', `-${frame}.png`);
        this.mascotImg.style.backgroundImage = `url(${frameImg})`;
        this.mascotImg.style.backgroundSize = 'contain';
        this.mascotImg.style.backgroundRepeat = 'no-repeat';
        this.mascotImg.style.backgroundPosition = 'center';
        this.mascotImg.style.imageRendering = 'auto';
      }
      return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
    }

    if (this.activePet && this.activePet.isFFRK) {
      if (this.mascotImg) {
        this.mascotImg.style.backgroundImage = `url(${this.activePet.avatar})`;
        this.mascotImg.style.backgroundSize = '800% 800%';
        this.mascotImg.style.backgroundRepeat = 'no-repeat';
        this.mascotImg.style.imageRendering = 'pixelated';
        
        let col = 0;
        let row = 0;
        if (frame === 1) { col = 0; row = 0; }
        else if (frame === 2) { col = 1; row = 0; }
        else if (frame === 4) { col = 3; row = 0; }
        else { col = (frame - 1) % 4; row = 0; }
        
        const posX = (col * 100) / 7;
        const posY = (row * 100) / 7;
        this.mascotImg.style.backgroundPosition = `${posX}% ${posY}%`;
      }
      return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
    }
    
    if (this.mascotImg) {
      this.mascotImg.style.backgroundImage = '';
      this.mascotImg.style.backgroundSize = '';
      this.mascotImg.style.backgroundRepeat = '';
      this.mascotImg.style.backgroundPosition = '';
      this.mascotImg.style.imageRendering = '';
    }

    if (this.activePet && this.activePet.slug) {
      return `https://sprite.shimejis.xyz/directory/${this.activePet.slug}/img/shime${frame}.png`;
    }
    return `https://sprite.shimejis.xyz/directory/adventure-time-finn/img/shime${frame}.png`;
  }

  updateScale(size) {
    this.container.style.width = `${size}px`;
    this.container.style.height = `${size}px`;
  }

  updatePet(petId) {
    this.activePetId = petId;
    this.activePet = OMNI_MASCOTS.find(p => p.id === petId) || OMNI_MASCOTS[0];
    if (this.state !== 'dragging') {
      this.state = 'idle';
    }
    
    this.frameIndex = 1;
    if (this.mascotImg) {
      this.mascotImg.src = this.getFrameUrl(this.frameIndex);
    }
    
    this.triggerSpeech(`Mascot adopted: ${this.activePet.name}!`);
    this.updateScale(this.petSize);
  }

  updateScale(sizeVal) {
    this.petSize = sizeVal;
    localStorage.setItem('omni_pet_size', sizeVal);
    
    if (this.mascotImg) {
      const factor = this.activePet.sizeFactor || 1.0;
      const targetWidth = 64 * (sizeVal / 50) * factor;
      this.mascotImg.style.width = `${targetWidth}px`;
      this.mascotImg.style.height = `${targetWidth}px`;
    }
    
    const label = document.getElementById('petSizeDisplayLabel');
    if (label) label.textContent = `${sizeVal}%`;
  }

  toggleEnabled(enabled) {
    this.petEnabled = enabled;
    localStorage.setItem('omni_pet_enabled', enabled ? 'true' : 'false');
    this.container.style.display = enabled ? 'flex' : 'none';
  }

  triggerSpeech(txt) {
    if (!this.speakBubble) return;
    this.speakBubble.textContent = txt;
    this.speakBubble.style.opacity = '1';
    this.speakBubble.style.transform = 'translateY(0)';
    
    if (this.speechTimeout) clearTimeout(this.speechTimeout);
    this.speechTimeout = setTimeout(() => {
      this.speakBubble.style.opacity = '0';
      this.speakBubble.style.transform = 'translateY(4px)';
    }, 5000);
  }

  triggerRandomSpeech() {
    const phrases = this.activePet.phrases || ["Stay productive!"];
    const text = phrases[Math.floor(Math.random() * phrases.length)];
    this.triggerSpeech(text);
  }

  startSpeechLoop() {
    setInterval(() => {
      if (Math.random() < 0.15 && this.state !== 'dragging') {
        this.triggerRandomSpeech();
      }
    }, 30000);
  }

  // Shimeji Movement & Physics Tick Loop (100ms)
    startPhysicsLoop() {
    setInterval(() => {
      if (this.isDragging || !this.petEnabled) return;
      
      // Stable floatable desk-buddy breathing loop (cycle frame 1 and 2)
      this.state = 'idle';
      this.frameIndex = this.frameIndex === 1 ? 2 : 1;
      
      // Apply position updates to DOM
      this.container.style.left = `${this.x}px`;
      this.container.style.top = `${this.y}px`;
      
      // Apply image source updates
      if (this.mascotImg) {
        this.mascotImg.src = this.getFrameUrl(this.frameIndex);
        this.mascotImg.style.transform = this.facing === 'left' ? 'scaleX(-1)' : 'scaleX(1)';
      }
    }, 400);
  }

registerDragHandlers() {
    let startX = 0, startY = 0;
    let initialX = 0, initialY = 0;

    this.container.addEventListener('mousedown', (e) => {
      if (e.target.id === 'petSpeakBubble') return;
      this.isDragging = true;
      this.state = 'dragging';
      this.frameIndex = 4; // suspended look
      this.container.style.cursor = 'grabbing';
      
      startX = e.clientX;
      startY = e.clientY;
      
      initialX = this.x;
      initialY = this.y;

      if (this.mascotImg) {
        this.mascotImg.src = this.getFrameUrl(4);
        this.mascotImg.style.transform = 'none';
      }

      e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      this.x = initialX + deltaX;
      this.y = initialY + deltaY;
      
      this.container.style.left = `${this.x}px`;
      this.container.style.top = `${this.y}px`;
    });

    document.addEventListener('mouseup', () => {
      if (this.isDragging) {
        this.isDragging = false;
        this.state = 'idle';
        this.container.style.cursor = 'grab';
      }
    });
  }
}

// Instantiate global widget window hook
window.addEventListener('DOMContentLoaded', () => {
  window.omniMascotWidget = new OmniMascotWidget();
});

// OMNI STORE MODAL STATE & HANDLERS
let modalStoreRarityFilter = 'All';
let modalStoreSearchQuery = '';
let modalStoreCurrentPage = 1;
const modalStorePageSize = 12;

let modalStoreOwnedMascots = ['jill-stingray'];
let modalStoreOmniBalance = 1000;
let modalStoreActiveMascot = 'jill-stingray';

// Gamification Hub state variables
let modalUserLevel = 1;
let modalUserXP = 0;
let modalPremiumPassUnlocked = false;
let modalClaimedRewards = { free: [], premium: [] };
let modalQuests = [
  { id: 'daily', title: 'Daily Explorer', desc: 'Active check-in to OMNI Network nodes', target: 1, current: 0, rewardXP: 40, completed: false, claimed: false },
  { id: 'wallet', title: 'Decentralized Identity', desc: 'Link your Web3 MetaMask wallet address', target: 1, current: 0, rewardXP: 75, completed: false, claimed: false },
  { id: 'collector', title: 'Mascot Collector', desc: 'Own at least 3 distinct companion pets', target: 3, current: 1, rewardXP: 120, completed: false, claimed: false }
];
let modalAchievements = [
  { id: 'first_adopt', title: 'First Adoption', desc: 'Acquire your first mascot companion', xp: 100, rewardTokens: 50, unlocked: false, claimed: false },
  { id: 'master_coll', title: 'Master Collector', desc: 'Own 10 or more different companions', xp: 250, rewardTokens: 200, unlocked: false, claimed: false },
  { id: 'season_vet', title: 'Seasoned Veteran', desc: 'Reach Level 5 in the Season Pass', xp: 150, rewardTokens: 100, unlocked: false, claimed: false }
];
let modalLastDailyClaim = 0;
let modalActiveTab = 'store';

// Inject custom liquid glass Styles
const style = document.createElement('style');
style.textContent = `
  .hub-tab-btn {
    padding: 8px 16px; font-size: 0.82rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);
    background: rgba(255,255,255,0.02); color: #8a8f98; cursor: pointer; transition: all 0.3s;
    font-family: inherit; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;
  }
  .hub-tab-btn.active {
    background: rgba(0, 229, 255, 0.1); border-color: rgba(0, 229, 255, 0.3); color: #00e5ff;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.1);
  }
  .hub-card {
    background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px; padding: 15px; backdrop-filter: blur(10px);
  }
  .hub-progress-bar {
    width: 100%; height: 12px; background: rgba(0,0,0,0.4); border-radius: 6px;
    overflow: hidden; padding: 2px; box-sizing: border-box; border: 1px solid rgba(255,255,255,0.06);
  }
  .hub-progress-fill {
    height: 100%; border-radius: 4px; background: linear-gradient(to right, #00e5ff, #00a1ff);
    transition: width 0.3s ease;
  }
  .hub-tier-row {
    display: grid; grid-template-columns: 80px 120px 1fr 1fr 120px; gap: 15px; align-items: center;
    background: rgba(255,255,255,0.015); border: 1px solid rgba(255,255,255,0.04);
    border-radius: 12px; padding: 12px; transition: all 0.3s; margin-bottom: 10px;
  }
  .hub-tier-row.unlocked {
    background: rgba(0, 229, 255, 0.025); border-color: rgba(0, 229, 255, 0.15);
  }
  .hub-reward-slot {
    background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05);
    border-radius: 8px; padding: 8px 12px; display: flex; align-items: center; gap: 10px;
    backdrop-filter: blur(8px);
  }
  .hub-reward-slot.claimed {
    background: rgba(0,229,255,0.04); border-color: rgba(0,229,255,0.15);
  }
  .hub-quest-card {
    display: flex; justify-content: space-between; align-items: center;
    background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.04);
    border-radius: 10px; padding: 12px 15px; margin-bottom: 8px;
  }
  .hub-achievement-card {
    display: flex; flex-direction: column; align-items: center; text-align: center;
    background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.04);
    border-radius: 12px; padding: 15px; transition: all 0.3s; position: relative;
  }
  .hub-achievement-card.unlocked {
    border-color: rgba(0, 229, 255, 0.15); background: rgba(0, 229, 255, 0.01);
  }
  .mascot-jump-anim {
    animation: mascotJump 0.4s ease;
  }
  .mascot-spin-anim {
    animation: mascotSpin 0.5s ease;
  }
  @keyframes mascotJump {
    0% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0); }
  }
  @keyframes mascotSpin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

function playHubSFX(type) {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const now = audioCtx.currentTime;
    if (type === 'coin') {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now);
      osc.frequency.setValueAtTime(880.00, now + 0.08);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === 'levelUp') {
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.06, now + i * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 0.4);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.45);
      });
    }
  } catch (e) {
    console.warn("AudioContext block:", e);
  }
}

function ensureFirebaseSDKLoaded(callback) {
  if (typeof firebase !== 'undefined') {
    return callback();
  }
  const s1 = document.createElement('script');
  s1.src = 'https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js';
  s1.onload = () => {
    const s2 = document.createElement('script');
    s2.src = 'https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js';
    s2.onload = () => {
      const s3 = document.createElement('script');
      s3.src = 'https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js';
      s3.onload = () => {
        callback();
      };
      document.head.appendChild(s3);
    };
    document.head.appendChild(s2);
  };
  document.head.appendChild(s1);
}

function initModalStoreFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyDEpQ0Yd_k-9V2v0s_nI56P3W06yB0f_OM",
    authDomain: "omni-network-39821.firebaseapp.com",
    projectId: "omni-network-39821",
    storageBucket: "omni-network-39821.firebasestorage.app",
    messagingSenderId: "1036007047880",
    appId: "1:1036007047880:web:0c9dd58f319e88934b1bfd"
  };
  
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
  
  firebase.auth().onAuthStateChanged(async (user) => {
    const authRequired = document.getElementById('modalStoreAuthRequired');
    const storeContent = document.getElementById('modalStoreContent');
    if (user) {
      if (authRequired) authRequired.style.display = 'none';
      if (storeContent) storeContent.style.display = 'flex';
      
      const email = user.email.toLowerCase();
      firebase.app().firestore("omni-dao").collection('user_profiles').doc(email).onSnapshot(doc => {
        if (doc.exists) {
          const data = doc.data();
          if (data.ownedMascots) modalStoreOwnedMascots = data.ownedMascots;
          if (data.omniBalance !== undefined) modalStoreOmniBalance = parseInt(data.omniBalance, 10);
          if (data.avatarMascot) {
            modalStoreActiveMascot = data.avatarMascot;
            if (window.omniMascotWidget && typeof window.omniMascotWidget.updatePet === 'function') {
              window.omniMascotWidget.updatePet(modalStoreActiveMascot);
            }
          }
          // Gamification variables load
          if (data.gamificationLevel !== undefined) modalUserLevel = parseInt(data.gamificationLevel, 10);
          if (data.gamificationXP !== undefined) modalUserXP = parseInt(data.gamificationXP, 10);
          if (data.gamificationPremiumPass !== undefined) modalPremiumPassUnlocked = data.gamificationPremiumPass;
          if (data.gamificationClaimedRewards) modalClaimedRewards = data.gamificationClaimedRewards;
          if (data.gamificationLastDailyClaim !== undefined) modalLastDailyClaim = parseInt(data.gamificationLastDailyClaim, 10);
          
          // Re-evaluate quests dynamic progress
          modalQuests[0].completed = modalLastDailyClaim > 0;
          modalQuests[1].completed = !!data.walletAddress;
          modalQuests[2].completed = modalStoreOwnedMascots.length >= 3;
          modalQuests[2].current = modalStoreOwnedMascots.length;

          // Re-evaluate achievements
          modalAchievements[0].unlocked = modalStoreOwnedMascots.length >= 1;
          modalAchievements[1].unlocked = modalStoreOwnedMascots.length >= 10;
          modalAchievements[2].unlocked = modalUserLevel >= 5;

          const balVal = document.getElementById('modalStoreBalanceVal');
          if (balVal) balVal.textContent = `Balance: ${modalStoreOmniBalance.toLocaleString()} OMNI`;
          
          renderActiveTabContent();
        }
      });
    } else {
      if (authRequired) authRequired.style.display = 'flex';
      if (storeContent) storeContent.style.display = 'none';
    }
  });
}

async function modalStoreLoginWithEmail() {
  const email = document.getElementById('modalStoreEmail').value.trim();
  const pass = document.getElementById('modalStorePassword').value.trim();
  if (!email || !pass) return alert('Please enter both email and password.');
  try {
    await firebase.auth().signInWithEmailAndPassword(email, pass);
  } catch (err) {
    alert('Authentication failed: ' + err.message);
  }
}
window.modalStoreLoginWithEmail = modalStoreLoginWithEmail;

function getMascotRarity(mascotId) {
  if (['jill-stingray', 'omni-byte', 'dev-rex', 'glitchcat', 'zombie-companion'].includes(mascotId)) return 'Common';
  const sum = mascotId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const mod = sum % 10;
  if (mod < 4) return 'Common';
  if (mod < 7) return 'Rare';
  if (mod < 9) return 'Epic';
  return 'Legendary';
}

function getMascotPrice(rarity) {
  if (rarity === 'Common') return 50;
  if (rarity === 'Rare') return 150;
  if (rarity === 'Epic') return 500;
  return 1500;
}

function setModalStoreRarityFilter(val) {
  modalStoreRarityFilter = val;
  modalStoreCurrentPage = 1;
  renderActiveTabContent();
}
window.setModalStoreRarityFilter = setModalStoreRarityFilter;

function handleModalStoreSearch(val) {
  modalStoreSearchQuery = val.toLowerCase().trim();
  modalStoreCurrentPage = 1;
  renderActiveTabContent();
}
window.handleModalStoreSearch = handleModalStoreSearch;

function loadMoreModalStoreMascots() {
  modalStoreCurrentPage++;
  renderActiveTabContent();
}
window.loadMoreModalStoreMascots = loadMoreModalStoreMascots;

async function modalStoreAdoptMascot(mascotId) {
  const user = firebase.auth().currentUser;
  if (!user) return;
  try {
    await firebase.app().firestore("omni-dao").collection('user_profiles').doc(user.email.toLowerCase()).update({
      avatarMascot: mascotId
    });
    playHubSFX('coin');
  } catch (err) {
    console.error("Adoption error:", err);
  }
}
window.modalStoreAdoptMascot = modalStoreAdoptMascot;

async function modalStorePurchaseMascot(mascotId) {
  if (typeof OMNI_MASCOTS === 'undefined') return;
  const raw = OMNI_MASCOTS.find(x => x.id === mascotId);
  if (!raw) return;
  const rarity = getMascotRarity(raw.id);
  const price = getMascotPrice(rarity);

  if (modalStoreOmniBalance < price) {
    return alert(`Insufficient OMNI balance! Purchasing ${raw.name} requires ${price} OMNI. Your balance: ${modalStoreOmniBalance} OMNI`);
  }

  if (confirm(`Do you want to purchase ${raw.name} for ${price} OMNI?`)) {
    const user = firebase.auth().currentUser;
    if (!user) return;
    
    const nextBalance = modalStoreOmniBalance - price;
    const nextOwned = [...modalStoreOwnedMascots, mascotId];

    try {
      await firebase.app().firestore("omni-dao").collection('user_profiles').doc(user.email.toLowerCase()).update({
        omniBalance: nextBalance,
        ownedMascots: nextOwned
      });
      playHubSFX('coin');
      alert(`Success! Adopted mascot: ${raw.name}!`);
    } catch (err) {
      console.error("Purchase failed:", err);
    }
  }
}
window.modalStorePurchaseMascot = modalStorePurchaseMascot;

function triggerMascotShowcaseTouch(el) {
  const animations = ['mascot-jump-anim', 'mascot-spin-anim'];
  const chosen = animations[Math.floor(Math.random() * animations.length)];
  el.classList.add(chosen);
  setTimeout(() => {
    el.classList.remove(chosen);
  }, 500);
}
window.triggerMascotShowcaseTouch = triggerMascotShowcaseTouch;

async function buyPremiumPass() {
  if (modalStoreOmniBalance < 500) {
    return alert(`Insufficient OMNI balance! Unlocking Premium Pass requires 500 OMNI.`);
  }
  if (confirm('Unlock the Premium Season Pass for 500 OMNI?')) {
    const user = firebase.auth().currentUser;
    if (!user) return;
    try {
      await firebase.app().firestore("omni-dao").collection('user_profiles').doc(user.email.toLowerCase()).update({
        omniBalance: modalStoreOmniBalance - 500,
        gamificationPremiumPass: true
      });
      playHubSFX('levelUp');
      alert('Premium Season Pass unlocked! Go claim your exclusive premium rewards!');
    } catch (e) {
      console.error(e);
    }
  }
}
window.buyPremiumPass = buyPremiumPass;

async function claimSeasonReward(tier, isPremium) {
  const user = firebase.auth().currentUser;
  if (!user) return;
  
  // Deterministic shuffle to get the reward mascot
  let shuffled = [...OMNI_MASCOTS];
  function seededRandom(seed) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }
  let s = 1337;
  for (let i = shuffled.length - 1; i > 0; i--) {
    const r = seededRandom(s++);
    const j = Math.floor(r * (i + 1));
    const temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }
  
  let rewardName = '';
  let isMascot = false;
  let mascotId = '';
  
  if (isPremium) {
    if (tier <= 40 && shuffled[tier - 1]) {
      isMascot = tier % 2 === 0;
      if (isMascot) {
        mascotId = shuffled[tier - 1].id;
        rewardName = `${shuffled[tier - 1].name} Mascot`;
      } else {
        rewardName = `${tier * 3} OMNI`;
      }
    } else {
      rewardName = `${tier * 3} OMNI`;
    }
  } else {
    if (tier <= 40 && shuffled[tier - 1]) {
      isMascot = tier % 2 === 1;
      if (isMascot) {
        mascotId = shuffled[tier - 1].id;
        rewardName = `${shuffled[tier - 1].name} Mascot`;
      } else {
        rewardName = `${Math.ceil(tier * 0.5)} OMNI`;
      }
    } else {
      rewardName = `${Math.ceil(tier * 0.5)} OMNI`;
    }
  }

  const updatedClaimed = { ...modalClaimedRewards };
  if (isPremium) {
    updatedClaimed.premium = [...updatedClaimed.premium, tier];
  } else {
    updatedClaimed.free = [...updatedClaimed.free, tier];
  }

  let finalBalance = modalStoreOmniBalance;
  let finalOwned = [...modalStoreOwnedMascots];

  if (isMascot) {
    if (!finalOwned.includes(mascotId)) finalOwned.push(mascotId);
  } else {
    const coins = parseInt(rewardName.replace(' OMNI', ''), 10);
    finalBalance += coins;
  }

  try {
    await firebase.app().firestore("omni-dao").collection('user_profiles').doc(user.email.toLowerCase()).update({
      gamificationClaimedRewards: updatedClaimed,
      omniBalance: finalBalance,
      ownedMascots: finalOwned
    });
    playHubSFX('coin');
    alert(`Successfully claimed: ${rewardName}!`);
  } catch (e) {
    console.error(e);
  }
}
window.claimSeasonReward = claimSeasonReward;

async function claimQuestReward(questId) {
  const user = firebase.auth().currentUser;
  if (!user) return;
  
  const quest = modalQuests.find(q => q.id === questId);
  if (!quest || quest.claimed) return;

  const xpReward = quest.rewardXP;
  let nextXP = modalUserXP + xpReward;
  let nextLevel = modalUserLevel;
  
  if (nextXP >= 100) {
    nextLevel += Math.floor(nextXP / 100);
    nextXP = nextXP % 100;
    playHubSFX('levelUp');
  }

  // Update Firestore
  try {
    await firebase.app().firestore("omni-dao").collection('user_profiles').doc(user.email.toLowerCase()).update({
      gamificationLevel: nextLevel,
      gamificationXP: nextXP
    });
    playHubSFX('coin');
    quest.claimed = true;
    alert(`Quest complete! Earned +${xpReward} XP!`);
    renderActiveTabContent();
  } catch (e) {
    console.error(e);
  }
}
window.claimQuestReward = claimQuestReward;

async function claimAchievementReward(achId) {
  const user = firebase.auth().currentUser;
  if (!user) return;

  const ach = modalAchievements.find(a => a.id === achId);
  if (!ach || ach.claimed || !ach.unlocked) return;

  try {
    await firebase.app().firestore("omni-dao").collection('user_profiles').doc(user.email.toLowerCase()).update({
      omniBalance: modalStoreOmniBalance + ach.rewardTokens
    });
    playHubSFX('levelUp');
    ach.claimed = true;
    alert(`Achievement unlocked! Claimed +${ach.rewardTokens} OMNI!`);
    renderActiveTabContent();
  } catch (e) {
    console.error(e);
  }
}
window.claimAchievementReward = claimAchievementReward;

function setModalActiveTab(tab) {
  modalActiveTab = tab;
  renderActiveTabContent();
}
window.setModalActiveTab = setModalActiveTab;

function renderActiveTabContent() {
  const bodyContainer = document.getElementById('modalTabContentBody');
  if (!bodyContainer) return;
  bodyContainer.innerHTML = '';

  // Update tabs header styling
  const btns = document.querySelectorAll('.hub-tab-btn');
  btns.forEach(b => {
    if (b.getAttribute('data-tab') === modalActiveTab) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  if (modalActiveTab === 'store') {
    // Render store wrapper layout
    bodyContainer.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-shrink: 0; gap: 15px; flex-wrap: wrap; width:100%;">
        <div style="display: flex; gap: 6px;" id="modalRarityTabs"></div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <input type="text" id="modalStoreSearchInput" placeholder="Search companion name..." style="padding: 6px 12px; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; color: #fff; font-size: 0.78rem; width: 180px; outline: none;">
        </div>
      </div>
      <div id="modalStoreGrid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap: 12px; overflow-y: auto; width:100%; height: 350px;" class="scrollable-thin"></div>
      <div id="modalStorePagination" style="display: flex; justify-content: center; padding-top: 10px; width:100%;">
        <button onclick="window.loadMoreModalStoreMascots()" style="padding: 8px 20px; font-size: 0.76rem; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); color: #fff; border-radius: 6px; cursor: pointer; font-family: inherit;">Load More</button>
      </div>
    `;

    document.getElementById('modalStoreSearchInput').value = modalStoreSearchQuery;
    document.getElementById('modalStoreSearchInput').addEventListener('input', (e) => {
      handleModalStoreSearch(e.target.value);
    });

    // Populate actual store items
    const storeGrid = document.getElementById('modalStoreGrid');
    const filtered = OMNI_MASCOTS.map(m => {
      const rarity = getMascotRarity(m.id);
      return { ...m, rarity, price: getMascotPrice(rarity) };
    }).filter(m => {
      const matchesRarity = (modalStoreRarityFilter === 'All' || m.rarity === modalStoreRarityFilter);
      const matchesSearch = (m.name.toLowerCase().includes(modalStoreSearchQuery) || m.desc.toLowerCase().includes(modalStoreSearchQuery));
      return matchesRarity && matchesSearch;
    });

    const visible = filtered.slice(0, modalStoreCurrentPage * modalStorePageSize);
    visible.forEach(m => {
      const isOwned = modalStoreOwnedMascots.includes(m.id) || ['jill-stingray', 'omni-byte', 'dev-rex', 'glitchcat', 'zombie-companion'].includes(m.id);
      const isActive = (modalStoreActiveMascot === m.id);
      const avatarUrl = m.slug ? `https://sprite.shimejis.xyz/directory/${m.slug}/img/shime1.png` : m.avatar;

      let buttonHtml = '';
      if (isActive) {
        buttonHtml = `<button disabled style="background: rgba(0,229,255,0.15); color: #00e5ff; border: 1px solid #00e5ff; width: 100%; font-size: 0.72rem; padding: 4px; border-radius: 4px; cursor: default;">Adopted</button>`;
      } else if (isOwned) {
        buttonHtml = `<button onclick="window.modalStoreAdoptMascot('${m.id}')" style="background: #00e5ff; color: #000; font-weight: bold; border: none; border-radius: 4px; width: 100%; cursor: pointer; font-size: 0.72rem; padding: 4px; font-family: inherit;">Adopt</button>`;
      } else {
        buttonHtml = `<button onclick="window.modalStorePurchaseMascot('${m.id}')" style="background: rgba(255,215,0,0.15); border: 1px solid #ffd700; color: #ffd700; font-weight: bold; border-radius: 4px; width: 100%; cursor: pointer; font-size: 0.72rem; padding: 4px; font-family: inherit;">Buy: ${m.price}</button>`;
      }

      let badgeColor = '#a0a0a0';
      if (m.rarity === 'Rare') badgeColor = '#00e5ff';
      else if (m.rarity === 'Epic') badgeColor = '#e040fb';
      else if (m.rarity === 'Legendary') badgeColor = '#ffd700';

      const card = document.createElement('div');
      card.style = `
        background: rgba(255,255,255,0.02); border: 1px solid ${isActive ? '#00e5ff' : 'rgba(255,255,255,0.06)'};
        border-radius: 8px; padding: 10px; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative;
      `;
      card.innerHTML = `
        <span style="position: absolute; top: 6px; right: 6px; font-size: 0.5rem; border: 1px solid ${badgeColor}; color: ${badgeColor}; padding: 1px 3px; border-radius: 2px; font-weight: bold; text-transform: uppercase;">${m.rarity}</span>
        <img src="${avatarUrl}" style="width: 40px; height: 40px; object-fit: cover; margin-bottom: 6px; image-rendering: pixelated; animation: mascotFloat 3s ease-in-out infinite;">
        <div style="font-size: 0.75rem; font-weight: bold; color: #fff; margin-bottom: 2px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; width: 100%;">${m.name}</div>
        <div style="font-size: 0.58rem; color: #8a8f98; margin-bottom: 6px; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; height: 20px;">${m.desc || 'Active companion buddy'}</div>
        <div style="margin-top: auto; width: 100%;">${buttonHtml}</div>
      `;
      storeGrid.appendChild(card);
    });

    const pagination = document.getElementById('modalStorePagination');
    if (pagination) {
      pagination.style.display = visible.length >= filtered.length ? 'none' : 'flex';
    }

    // Load Rarity Tabs
    const tabsContainer = document.getElementById('modalRarityTabs');
    if (tabsContainer) {
      const rarities = ['All', 'Common', 'Rare', 'Epic', 'Legendary'];
      rarities.forEach(r => {
        const btn = document.createElement('button');
        btn.textContent = r;
        btn.style = `
          padding: 4px 10px; font-size: 0.72rem; border-radius: 4px; border: 1px solid rgba(255,255,255,0.08);
          background: ${r === modalStoreRarityFilter ? 'rgba(0, 229, 255, 0.1)' : 'rgba(255,255,255,0.02)'};
          color: ${r === modalStoreRarityFilter ? '#00e5ff' : '#8a8f98'}; cursor: pointer; font-family: inherit; margin-right: 4px;
        `;
        btn.onclick = () => setModalStoreRarityFilter(r);
        tabsContainer.appendChild(btn);
      });
    }
  }

  else if (modalActiveTab === 'settings') {
    const isEnabled = localStorage.getItem('omni_pet_enabled') !== 'false';
    const petSize = parseInt(localStorage.getItem('omni_pet_size')) || 50;
    const activePet = OMNI_MASCOTS.find(p => p.id === modalStoreActiveMascot) || OMNI_MASCOTS[0];
    const avatarUrl = activePet.slug ? `https://sprite.shimejis.xyz/directory/${activePet.slug}/img/shime1.png` : activePet.avatar;

    bodyContainer.innerHTML = `
      <div style="display: grid; grid-template-columns: 240px 1fr; gap: 20px; width: 100%; height: 380px;">
        <div class="hub-card" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
          <img src="${avatarUrl}" id="settingsMascotAvatarPreview" style="width: 80px; height: 80px; object-fit: cover; image-rendering: pixelated; margin-bottom: 15px; animation: mascotFloat 3s ease-in-out infinite;">
          <h3 style="color: #fff; margin: 0 0 5px 0; font-size: 0.95rem;">${activePet.name}</h3>
          <span style="color: #00e5ff; font-size: 0.7rem; border: 1px solid rgba(0,229,255,0.2); background: rgba(0,229,255,0.05); padding: 2px 6px; border-radius: 4px;">ACTIVE COMPANION</span>
        </div>

        <div class="hub-card" style="display: flex; flex-direction: column; gap: 15px; text-align: left; overflow-y: auto;">
          <h4 style="margin: 0; color: #fff; font-size: 0.9rem; text-transform: uppercase; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 8px;">Appearance Config</h4>
          
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="font-size: 0.8rem; color: #fff; font-weight: bold;">Enable Mascot Companion</div>
              <div style="font-size: 0.68rem; color: #8a8f98;">Toggle the floating desktop companion on or off</div>
            </div>
            <input type="checkbox" id="settingsToggleEnabled" ${isEnabled ? 'checked' : ''} style="width: 18px; height: 18px; cursor: pointer;">
          </div>

          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span style="font-size: 0.8rem; color: #fff; font-weight: bold;">Mascot Scale</span>
              <span id="settingsScaleLabel" style="font-size: 0.8rem; color: #00e5ff; font-weight: bold;">${petSize}%</span>
            </div>
            <input type="range" id="settingsScaleSlider" min="30" max="150" value="${petSize}" style="width: 100%; cursor: pointer;">
          </div>

          <div>
            <div style="font-size: 0.8rem; color: #fff; font-weight: bold; margin-bottom: 8px;">Change Active Pet</div>
            <div id="settingsActivePetList" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(70px, 1fr)); gap: 8px; max-height: 150px; overflow-y: auto; padding: 4px;" class="scrollable-thin"></div>
          </div>
        </div>
      </div>
    `;

    // Populate owned mascots selector
    const ownedContainer = document.getElementById('settingsActivePetList');
    if (ownedContainer) {
      OMNI_MASCOTS.forEach(m => {
        const isOwned = modalStoreOwnedMascots.includes(m.id) || ['jill-stingray', 'omni-byte', 'dev-rex', 'glitchcat', 'zombie-companion'].includes(m.id);
        if (!isOwned) return;
        const isActive = (modalStoreActiveMascot === m.id);
        const mUrl = m.slug ? `https://sprite.shimejis.xyz/directory/${m.slug}/img/shime1.png` : m.avatar;

        const cell = document.createElement('div');
        cell.style = `
          background: ${isActive ? 'rgba(0,229,255,0.08)' : 'rgba(255,255,255,0.02)'};
          border: 1px solid ${isActive ? '#00e5ff' : 'rgba(255,255,255,0.06)'};
          border-radius: 6px; padding: 6px; display: flex; flex-direction: column; align-items: center; cursor: pointer; transition: all 0.3s;
        `;
        cell.onclick = () => {
          modalStoreAdoptMascot(m.id);
        };
        cell.innerHTML = `
          <img src="${mUrl}" style="width: 32px; height: 32px; object-fit: cover; image-rendering: pixelated; margin-bottom: 2px;">
          <div style="font-size: 0.52rem; color: #fff; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; width: 100%; text-align: center;">${m.name.split(' ')[0]}</div>
        `;
        ownedContainer.appendChild(cell);
      });
    }

    // Set settings handlers
    document.getElementById('settingsToggleEnabled').addEventListener('change', (e) => {
      if (window.omniMascotWidget) {
        window.omniMascotWidget.toggleEnabled(e.target.checked);
      }
    });

    document.getElementById('settingsScaleSlider').addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      document.getElementById('settingsScaleLabel').textContent = `${val}%`;
      if (window.omniMascotWidget) {
        window.omniMascotWidget.updateScale(val);
      }
    });
  }

  else if (modalActiveTab === 'seasonpass') {
    // Generate mixed mascots for Season Pass
    let shuffled = [...OMNI_MASCOTS];
    function seededRandom(seed) {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    }
    let s = 1337;
    for (let i = shuffled.length - 1; i > 0; i--) {
      const r = seededRandom(s++);
      const j = Math.floor(r * (i + 1));
      const temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }

    bodyContainer.innerHTML = `
      <div style="display: flex; flex-direction: column; width: 100%; height: 380px; overflow: hidden;">
        <!-- Header Profile Stats -->
        <div class="hub-card" style="display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 12px 15px; margin-bottom: 12px; flex-shrink:0;">
          <div style="display: flex; align-items: center; gap: 15px; text-align: left;">
            <div style="font-size: 1.1rem; font-weight: bold; color: #fff; font-family: 'Share Tech Mono', monospace; letter-spacing: 0.5px;">
              LEVEL ${modalUserLevel}
            </div>
            <div style="width: 260px;">
              <div style="display:flex; justify-content:space-between; font-size:0.6rem; color:#8a8f98; margin-bottom:2px;">
                <span>XP PROGRESS</span>
                <span>${modalUserXP} / 100 XP</span>
              </div>
              <div class="hub-progress-bar">
                <div class="hub-progress-fill" style="width: ${modalUserXP}%;"></div>
              </div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            ${modalPremiumPassUnlocked ? 
              `<span style="color:#ffd700; font-size:0.75rem; border:1px solid #ffd700; background:rgba(255,215,0,0.05); padding:4px 10px; border-radius:12px; font-weight:bold; letter-spacing:0.5px;">★ PREMIUM PASS ACTIVE</span>` : 
              `<button onclick="window.buyPremiumPass()" style="background:#ffd700; color:#000; border:none; padding:5px 12px; border-radius:12px; font-size:0.72rem; font-weight:bold; cursor:pointer; font-family:inherit; letter-spacing:0.5px; box-shadow:0 0 10px rgba(255,215,0,0.2);">★ UNLOCK PREMIUM PASS (500 OMNI)</button>`
            }
          </div>
        </div>

        <!-- Tiers Card Scroll Grid -->
        <div id="hubSeasonPassTiersList" style="flex:1; overflow-y:auto; padding-right:5px; text-align: left;" class="scrollable-thin"></div>
      </div>
    `;

    const passList = document.getElementById('hubSeasonPassTiersList');
    if (passList) {
      for (let i = 1; i <= 40; i++) {
        const isFreeClaimed = modalClaimedRewards.free.includes(i);
        const isPremiumClaimed = modalClaimedRewards.premium.includes(i);
        
        const mascot = shuffled[i - 1];
        const avatarUrl = mascot.slug ? `https://sprite.shimejis.xyz/directory/${mascot.slug}/img/shime1.png` : mascot.avatar;

        let freeName = `${Math.ceil(i * 0.5)} OMNI`;
        let freeIcon = '🪙';
        let premiumName = `${i * 3} OMNI`;
        let premiumIcon = '🪙';
        let isFreeMascot = i % 2 === 1;
        let isPremiumMascot = i % 2 === 0;

        if (isFreeMascot) {
          freeName = `${mascot.name} Mascot`;
          freeIcon = '🐾';
        }
        if (isPremiumMascot) {
          premiumName = `${mascot.name} Mascot`;
          premiumIcon = '🐾';
        }

        // Claim Buttons Logic
        const canClaimFree = modalUserLevel >= i && !isFreeClaimed;
        const canClaimPremium = modalUserLevel >= i && modalPremiumPassUnlocked && !isPremiumClaimed;

        const row = document.createElement('div');
        row.className = `hub-tier-row ${modalUserLevel >= i ? 'unlocked' : ''}`;
        row.innerHTML = `
          <!-- Tier Indicator -->
          <div style="text-align: center; font-family: 'Share Tech Mono', monospace;">
            <div style="font-size:0.55rem; color:#8a8f98;">TIER</div>
            <div style="font-size:1.1rem; font-weight:bold; color:${modalUserLevel >= i ? '#00e5ff' : '#4a505a'};">${i}</div>
          </div>

          <!-- Showcase Character Card -->
          <div style="
            background: rgba(255,255,255,0.015); border: 1px dashed rgba(255,255,255,0.04);
            border-radius: 8px; padding: 4px; display: flex; flex-direction:column; align-items:center; justify-content:center; height: 60px;
          ">
            <img src="${(mascot && mascot.isFFRK) ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=' : avatarUrl}" 
                 onclick="window.triggerMascotShowcaseTouch(this)" 
                 style="${(mascot && mascot.isFFRK) 
                   ? `background-image: url(${avatarUrl}); background-size: 800% 800%; background-repeat: no-repeat; background-position: 0% 0%; image-rendering: pixelated; width: ${mascot.name.includes('Tyro') ? 42 : (mascot.name.includes('Elarra') ? 34.5 : (mascot.name.includes('Dr. Mog') ? 45 : 42))}px; height: 48px; cursor: pointer;`
                   : `width:36px; height:36px; object-fit:cover; image-rendering:pixelated; cursor:pointer;`
                 }" 
                 title="Tap Companion!">
            <span style="font-size:0.42rem; color:rgba(255,255,255,0.3); pointer-events:none;">TAP COMPANION</span>
          </div>

          <!-- Free reward box -->
          <div class="hub-reward-slot ${isFreeClaimed ? 'claimed' : ''}">
            <span style="font-size:1.1rem;">${freeIcon}</span>
            <div style="display:flex; flex-direction:column; text-align:left;">
              <span style="font-size:0.5rem; color:#00e5ff; font-weight:bold; letter-spacing:0.5px;">FREE REWARD</span>
              <span style="font-size:0.7rem; color:#fff; text-overflow:ellipsis; white-space:nowrap; overflow:hidden; width:130px;" title="${freeName}">${freeName}</span>
            </div>
            ${isFreeClaimed ? 
              `<span style="margin-left:auto; font-size:0.7rem; color:#00e5ff;">✅</span>` : 
              (canClaimFree ? 
                `<button onclick="window.claimSeasonReward(${i}, false)" style="margin-left:auto; background:#00e5ff; color:#000; border:none; padding:3px 8px; border-radius:4px; font-size:0.58rem; font-weight:bold; cursor:pointer; font-family:inherit;">Claim</button>` : 
                (modalUserLevel >= i ? `<span style="margin-left:auto; font-size:0.6rem; color:#8a8f98;">Unclaimed</span>` : `<span style="margin-left:auto; font-size:0.6rem; color:#4a505a;">Locked</span>`)
              )
            }
          </div>

          <!-- Premium reward box -->
          <div class="hub-reward-slot ${isPremiumClaimed ? 'claimed' : ''}" style="border-color:${isPremiumClaimed ? 'rgba(255,215,0,0.15)' : 'rgba(255,255,255,0.05)'};">
            <span style="font-size:1.1rem;">${premiumIcon}</span>
            <div style="display:flex; flex-direction:column; text-align:left;">
              <span style="font-size:0.5rem; color:#ffd700; font-weight:bold; letter-spacing:0.5px;">★ PREMIUM REWARD</span>
              <span style="font-size:0.7rem; color:#fff; text-overflow:ellipsis; white-space:nowrap; overflow:hidden; width:130px;" title="${premiumName}">${premiumName}</span>
            </div>
            ${isPremiumClaimed ? 
              `<span style="margin-left:auto; font-size:0.7rem; color:#ffd700;">✅</span>` : 
              (canClaimPremium ? 
                `<button onclick="window.claimSeasonReward(${i}, true)" style="margin-left:auto; background:#ffd700; color:#000; border:none; padding:3px 8px; border-radius:4px; font-size:0.58rem; font-weight:bold; cursor:pointer; font-family:inherit;">Claim</button>` : 
                (modalUserLevel >= i ? 
                  (!modalPremiumPassUnlocked ? `<span style="margin-left:auto; font-size:0.6rem; color:#8a8f98;" title="Requires Premium Pass">🔒 Locked</span>` : `<span style="margin-left:auto; font-size:0.6rem; color:#8a8f98;">Unclaimed</span>`) : 
                  `<span style="margin-left:auto; font-size:0.6rem; color:#4a505a;">Locked</span>`
                )
              )
            }
          </div>
        `;
        passList.appendChild(row);
      }
    }
  }

  else if (modalActiveTab === 'tasks') {
    bodyContainer.innerHTML = `
      <div style="display: flex; flex-direction: column; width: 100%; height: 380px; overflow-y: auto; text-align: left;" class="scrollable-thin">
        <h4 style="margin: 0 0 12px 0; color: #fff; font-size: 0.9rem; text-transform: uppercase; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 6px;">Ecosystem Tasks Checklist</h4>
        <div id="hubQuestsList" style="display:flex; flex-direction:column; gap:10px;"></div>
      </div>
    `;

    const qList = document.getElementById('hubQuestsList');
    if (qList) {
      modalQuests.forEach(q => {
        const canClaim = q.completed && !q.claimed;
        const item = document.createElement('div');
        item.className = 'hub-quest-card';
        item.style.borderColor = q.claimed ? 'rgba(255,255,255,0.02)' : (canClaim ? 'rgba(0,229,255,0.2)' : 'rgba(255,255,255,0.05)');
        item.innerHTML = `
          <div style="display:flex; flex-direction:column; gap:3px;">
            <div style="font-size:0.8rem; font-weight:bold; color:${q.claimed ? '#8a8f98' : '#fff'}; display:flex; align-items:center; gap:8px;">
              <span>${q.title}</span>
              ${q.claimed ? `<span style="font-size:0.6rem; border:1px solid #8a8f98; color:#8a8f98; padding:1px 4px; border-radius:3px;">Claimed</span>` : ''}
              ${canClaim ? `<span style="font-size:0.6rem; border:1px solid #00e5ff; color:#00e5ff; padding:1px 4px; border-radius:3px; animation: pulse 1.5s infinite;">Complete</span>` : ''}
            </div>
            <div style="font-size:0.68rem; color:#8a8f98;">${q.desc}</div>
          </div>
          <div style="display:flex; align-items:center; gap:15px; margin-left:auto;">
            <span style="font-size:0.75rem; color:#00e5ff; font-weight:bold; font-family:'Share Tech Mono',monospace;">+${q.rewardXP} XP</span>
            ${q.claimed ? 
              `<span style="color:#8a8f98; font-size:0.8rem;">✅</span>` : 
              (canClaim ? 
                `<button onclick="window.claimQuestReward('${q.id}')" style="background:#00e5ff; color:#000; border:none; padding:6px 15px; border-radius:6px; font-weight:bold; font-size:0.72rem; cursor:pointer; font-family:inherit;">Claim XP</button>` : 
                (q.id === 'daily' ?
                  `<button onclick="window.triggerDailyCheckin()" style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); color:#fff; padding:6px 15px; border-radius:6px; font-size:0.72rem; cursor:pointer; font-family:inherit;">Check In</button>` :
                  `<span style="font-size:0.7rem; color:#8a8f98;">${q.id === 'collector' ? `${q.current}/3` : 'In Progress'}</span>`
                )
              )
            }
          </div>
        `;
        qList.appendChild(item);
      });
    }
  }

  else if (modalActiveTab === 'achievements') {
    bodyContainer.innerHTML = `
      <div style="display: flex; flex-direction: column; width: 100%; height: 380px; overflow-y: auto; text-align: left;" class="scrollable-thin">
        <h4 style="margin: 0 0 12px 0; color: #fff; font-size: 0.9rem; text-transform: uppercase; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 6px;">Achievements Milestones</h4>
        <div id="hubAchievementsGrid" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap:12px;"></div>
      </div>
    `;

    const aGrid = document.getElementById('hubAchievementsGrid');
    if (aGrid) {
      modalAchievements.forEach(a => {
        const canClaim = a.unlocked && !a.claimed;
        
        let buttonHtml = '';
        if (a.claimed) {
          buttonHtml = `<button disabled style="background:rgba(255,255,255,0.05); color:#8a8f98; border:none; padding:5px; border-radius:6px; width:100%; font-size:0.7rem; cursor:default;">Claimed</button>`;
        } else if (canClaim) {
          buttonHtml = `<button onclick="window.claimAchievementReward('${a.id}')" style="background:#00e5ff; color:#000; border:none; font-weight:bold; padding:5px; border-radius:6px; width:100%; font-size:0.7rem; cursor:pointer; font-family:inherit;">Claim ${a.rewardTokens} OMNI</button>`;
        } else {
          buttonHtml = `<button disabled style="background:rgba(255,255,255,0.02); color:#4a505a; border:1px dashed rgba(255,255,255,0.06); padding:5px; border-radius:6px; width:100%; font-size:0.7rem; cursor:default;">Locked</button>`;
        }

        const card = document.createElement('div');
        card.className = `hub-achievement-card ${a.unlocked ? 'unlocked' : ''}`;
        card.innerHTML = `
          <div style="font-size:2rem; margin-bottom:8px; opacity:${a.unlocked ? '1' : '0.25'};">🏆</div>
          <div style="font-size:0.78rem; font-weight:bold; color:${a.unlocked ? '#fff' : '#4a505a'}; margin-bottom:3px;">${a.title}</div>
          <div style="font-size:0.6rem; color:#8a8f98; line-height:1.2; margin-bottom:12px; height:28px;">${a.desc}</div>
          <div style="margin-top:auto; width:100%;">${buttonHtml}</div>
        `;
        aGrid.appendChild(card);
      });
    }
  }
}
window.renderActiveTabContent = renderActiveTabContent;

async function triggerDailyCheckin() {
  const user = firebase.auth().currentUser;
  if (!user) return;
  try {
    await firebase.app().firestore("omni-dao").collection('user_profiles').doc(user.email.toLowerCase()).update({
      gamificationLastDailyClaim: Date.now()
    });
    playHubSFX('coin');
    alert('Checked in successfully! Task completed.');
  } catch (e) {
    console.error(e);
  }
}
window.triggerDailyCheckin = triggerDailyCheckin;

function toggleOmniMascotStoreModal(show = true) {
  let modal = document.getElementById('omniStoreModal');
  if (!modal) {
    const mDiv = document.createElement('div');
    mDiv.id = 'omniStoreModal';
    mDiv.style = `
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(0,0,0,0.7); backdrop-filter: blur(10px);
      z-index: 100000; display: flex; align-items: center; justify-content: center;
      opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
      font-family: 'Outfit', sans-serif;
    `;
    mDiv.innerHTML = `
      <div class="store-modal-content" style="
        background: linear-gradient(180deg, #0d0e11 0%, #15171b 100%);
        border: 1px solid rgba(0, 229, 255, 0.25);
        box-shadow: 0 0 30px rgba(0, 229, 255, 0.15);
        border-radius: 16px; width: 90%; max-width: 900px; height: 530px;
        display: flex; flex-direction: column; overflow: hidden; position: relative;
        padding: 20px; box-sizing: border-box;
      ">
        <button onclick="window.toggleOmniMascotStoreModal(false)" style="
          position: absolute; top: 15px; right: 15px; background: none; border: none;
          color: #fff; font-size: 1.2rem; cursor: pointer; z-index:100005;
        ">✕</button>

        <div style="text-align: center; margin-bottom: 15px; flex-shrink: 0;">
          <h2 style="color: #00e5ff; margin: 0; font-size: 1.4rem; text-shadow: 0 0 8px rgba(0,229,255,0.3);">OMNI Companion Hub</h2>
          <p style="color: #8a8f98; margin: 5px 0 0 0; font-size: 0.76rem;">Buy companions, upgrade Season Pass, track tasks, and claim milestone achievements.</p>
        </div>

        <div id="modalStoreAuthRequired" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 30px 0; text-align: center; flex: 1;">
          <div style="font-size: 2.5rem; margin-bottom: 10px;">🔒</div>
          <h3 style="color: #fff; margin: 0 0 8px 0; font-size: 1rem;">OMNI Account Connection Required</h3>
          <p style="color: #8a8f98; font-size: 0.72rem; max-width: 320px; line-height: 1.4; margin: 0 0 20px 0;">Sign in with your OMNI account credentials to retrieve your spendable OMNI Balance and owned pets.</p>
          
          <div style="display: flex; flex-direction: column; gap: 10px; width: 100%; max-width: 300px; text-align: left;">
            <input type="email" id="modalStoreEmail" placeholder="your@email.com" style="width: 100%; padding: 8px 12px; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; color: #fff; font-size: 0.8rem; outline: none; box-sizing: border-box;">
            <input type="password" id="modalStorePassword" placeholder="••••••••" style="width: 100%; padding: 8px 12px; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; color: #fff; font-size: 0.8rem; outline: none; box-sizing: border-box;">
            <button onclick="window.modalStoreLoginWithEmail()" style="width: 100%; padding: 10px; background: #00e5ff; color: #000; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">Sign In</button>
          </div>
        </div>

        <div id="modalStoreContent" style="display: none; flex-direction: column; overflow: hidden; flex: 1;">
          <!-- Companion Hub Tabs Header -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px; flex-shrink: 0;">
            <div style="display: flex; gap: 8px;">
              <button class="hub-tab-btn active" data-tab="store" onclick="window.setModalActiveTab('store')">🛒 Store</button>
              <button class="hub-tab-btn" data-tab="seasonpass" onclick="window.setModalActiveTab('seasonpass')">🎖️ Season Pass</button>
              <button class="hub-tab-btn" data-tab="tasks" onclick="window.setModalActiveTab('tasks')">📋 Tasks</button>
              <button class="hub-tab-btn" data-tab="achievements" onclick="window.setModalActiveTab('achievements')">🏆 Achievements</button>
              <button class="hub-tab-btn" data-tab="settings" onclick="window.setModalActiveTab('settings')">⚙️ Settings</button>
            </div>
            <div>
              <span id="modalStoreBalanceVal" style="color: #00e5ff; font-weight: bold; font-size: 0.8rem; background: rgba(0,229,255,0.05); padding: 4px 10px; border-radius: 12px; border: 1px solid rgba(0,229,255,0.15); font-family: 'Share Tech Mono', monospace;">Balance: -- OMNI</span>
            </div>
          </div>

          <!-- Dynamic Active Tab Content Body -->
          <div id="modalTabContentBody" style="display: flex; flex-direction: column; align-items: center; flex: 1; overflow: hidden; justify-content: flex-start; width: 100%;">
            <!-- Loaded dynamically based on active tab -->
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(mDiv);
    modal = mDiv;
  }
  
  if (show) {
    modal.style.opacity = '1';
    modal.style.pointerEvents = 'auto';
    ensureFirebaseSDKLoaded(() => {
      initModalStoreFirebase();
    });
  } else {
    modal.style.opacity = '0';
    modal.style.pointerEvents = 'none';
  }
}
window.toggleOmniMascotStoreModal = toggleOmniMascotStoreModal;

function toggleMascotVisibility() {
  const isEnabled = localStorage.getItem('omni_pet_enabled') !== 'false';
  const nextVal = !isEnabled;
  localStorage.setItem('omni_pet_enabled', nextVal);
  if (window.omniMascotWidget) {
    window.omniMascotWidget.petEnabled = nextVal;
    window.omniMascotWidget.container.style.display = nextVal ? 'flex' : 'none';
  }
  alert(nextVal ? 'OMNI Mascot companion is now enabled!' : 'OMNI Mascot companion hidden. Open settings to re-enable.');
}
window.toggleMascotVisibility = toggleMascotVisibility;

window.buyStoreMascotWithBurn = function(mascotName, priceTokens) {
  const burnAmount = Math.floor(priceTokens * 0.5);
  if (window.OmniTokenomicsV2) {
    window.OmniTokenomicsV2.executeTokenBurn(burnAmount, `Mascot Purchase: ${mascotName}`);
  }
  alert(`🎉 Successfully adopted ${mascotName}! Spent ${priceTokens} $OMNI (🔥 ${burnAmount} $OMNI permanently burned!).`);
};


/* Viral Share & Referral System */
window.openOmniViralShareModal = function() {
  let modal = document.getElementById('omniViralShareModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'omniViralShareModal';
    modal.style.cssText = 'position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.8); z-index:999999; display:flex; align-items:center; justify-content:center; backdrop-filter:blur(8px);';
    modal.innerHTML = `
      <div style="background:#131314; border:1px solid #00e5ff; border-radius:16px; width:90%; max-width:480px; padding:28px; box-shadow:0 0 40px rgba(0,229,255,0.3); color:#fff; text-align:center; font-family:'Outfit',sans-serif; position:relative;">
        <button onclick="document.getElementById('omniViralShareModal').style.display='none'" style="position:absolute; top:16px; right:16px; background:none; border:none; color:#888; font-size:1.5rem; cursor:pointer;">&times;</button>
        <div style="font-size:2.2rem; margin-bottom:8px;">🚀</div>
        <h2 style="margin:0 0 8px 0; color:#00e5ff; font-size:1.5rem; text-shadow:0 0 10px rgba(0,229,255,0.4);">Spread the Word & Earn $OMNI</h2>
        <p style="font-size:0.85rem; color:#aaa; margin-bottom:20px;">Share the OMNI Ecosystem with your network and earn 500 $OMNI tokens for every companion adopted!</p>
        
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:20px;">
          <button onclick="shareOmniPlatform('x')" style="background:#000; border:1px solid #333; color:#fff; padding:12px; border-radius:10px; cursor:pointer; font-weight:bold; display:flex; align-items:center; justify-content:center; gap:8px; font-size:0.9rem; transition:transform 0.2s;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> Share on X
          </button>
          <button onclick="shareOmniPlatform('telegram')" style="background:#0088cc; border:none; color:#fff; padding:12px; border-radius:10px; cursor:pointer; font-weight:bold; display:flex; align-items:center; justify-content:center; gap:8px; font-size:0.9rem; transition:transform 0.2s;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg> Telegram
          </button>
          <button onclick="shareOmniPlatform('discord')" style="background:#5865F2; border:none; color:#fff; padding:12px; border-radius:10px; cursor:pointer; font-weight:bold; display:flex; align-items:center; justify-content:center; gap:8px; font-size:0.9rem; transition:transform 0.2s;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg> Copy for Discord
          </button>
          <button onclick="shareOmniPlatform('reddit')" style="background:#FF4500; border:none; color:#fff; padding:12px; border-radius:10px; cursor:pointer; font-weight:bold; display:flex; align-items:center; justify-content:center; gap:8px; font-size:0.9rem; transition:transform 0.2s;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.363.043-.52A1.755 1.755 0 0 1 4.09 12c0-.968.786-1.754 1.754-1.754.463 0 .898.18 1.207.49 1.207-.856 2.843-1.417 4.674-1.488l.94-4.41a.442.442 0 0 1 .521-.34l3.14.66a1.244 1.244 0 0 1 .684-.214zm-6.01 9.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm4 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm-5.938 3.63a.44.44 0 0 0 .092.614c.78.604 1.93.936 3.01.936 1.08 0 2.23-.332 3.01-.936a.44.44 0 1 0-.535-.7c-.575.445-1.5.706-2.475.706-.975 0-1.9-.261-2.475-.706a.44.44 0 0 0-.627.086z"/></svg> Reddit
          </button>
        </div>

        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:10px; display:flex; align-items:center; justify-content:space-between; gap:10px;">
          <input type="text" id="omniRefLinkInput" value="https://omni-llm-39821.web.app" readonly style="background:none; border:none; color:#00e5ff; font-family:'Share Tech Mono',monospace; font-size:0.8rem; flex:1; outline:none;">
          <button onclick="copyOmniRefLink()" style="background:#00e5ff; border:none; color:#000; padding:6px 14px; border-radius:6px; font-weight:bold; cursor:pointer; font-size:0.8rem;">Copy Link</button>
        </div>
        <div id="omniShareCopyToast" style="display:none; color:#00e676; font-size:0.75rem; margin-top:8px;">✓ Link copied to clipboard!</div>
      </div>
    `;
    document.body.appendChild(modal);
  }
  modal.style.display = 'flex';
};

window.shareOmniPlatform = function(platform) {
  const url = encodeURIComponent('https://omni-llm-39821.web.app');
  const text = encodeURIComponent('Adopt 400+ interactive AI companions and experience autonomous intelligence in the OMNI Ecosystem! 🚀🤖');
  
  if (platform === 'x') {
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  } else if (platform === 'telegram') {
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  } else if (platform === 'reddit') {
    window.open(`https://reddit.com/submit?url=${url}&title=${text}`, '_blank');
  } else if (platform === 'discord') {
    window.copyOmniRefLink();
  }
};

window.copyOmniRefLink = function() {
  const linkInput = document.getElementById('omniRefLinkInput');
  if (linkInput) {
    navigator.clipboard.writeText(linkInput.value);
    const toast = document.getElementById('omniShareCopyToast');
    if (toast) {
      toast.style.display = 'block';
      setTimeout(() => { toast.style.display = 'none'; }, 2500);
    }
  }
};

window.copyMainRefLink = function() {
  const linkInput = document.getElementById('omniMainRefLinkInput');
  if (linkInput) {
    navigator.clipboard.writeText(linkInput.value);
    const toast = document.getElementById('omniMainCopyToast');
    if (toast) {
      toast.style.display = 'block';
      setTimeout(() => { toast.style.display = 'none'; }, 2500);
    }
  }
};


