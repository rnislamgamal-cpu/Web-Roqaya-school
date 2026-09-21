const SUBJECTS = [
  {
    "id": "arabic",
    "name": "اللُّغَةُ الْعَرَبِيَّة",
    "icon": "أ",
    "color": "#eee4fb",
    "desc": "حُرُوفٌ وَكَلِمَاتٌ وَكِتَابَة",
    "lessons": [
      {
        "id": "ar0",
        "title": "حُرُوفِي: الْمَجْمُوعَةُ الْأُولَى",
        "cards": [
          {
            "front": "أ",
            "word": "أَسَد",
            "detail": "🦁  أ مِثْلُ أَسَد",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «أَسَد»؟",
            "options": [
              "أ",
              "ث",
              "ر"
            ],
            "answer": "أ"
          },
          {
            "front": "ب",
            "word": "بَطَّة",
            "detail": "🦆  ب مِثْلُ بَطَّة",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «بَطَّة»؟",
            "options": [
              "ب",
              "ج",
              "ز"
            ],
            "answer": "ب"
          },
          {
            "front": "ت",
            "word": "تُفَّاحَة",
            "detail": "🍎  ت مِثْلُ تُفَّاحَة",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «تُفَّاحَة»؟",
            "options": [
              "ت",
              "ح",
              "س"
            ],
            "answer": "ت"
          },
          {
            "front": "ث",
            "word": "ثَعْلَب",
            "detail": "🦊  ث مِثْلُ ثَعْلَب",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «ثَعْلَب»؟",
            "options": [
              "ث",
              "خ",
              "ش"
            ],
            "answer": "ث"
          },
          {
            "front": "ج",
            "word": "جَمَل",
            "detail": "🐪  ج مِثْلُ جَمَل",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «جَمَل»؟",
            "options": [
              "ج",
              "د",
              "ص"
            ],
            "answer": "ج"
          },
          {
            "front": "ح",
            "word": "حِصَان",
            "detail": "🐎  ح مِثْلُ حِصَان",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «حِصَان»؟",
            "options": [
              "ح",
              "ذ",
              "ض"
            ],
            "answer": "ح"
          },
          {
            "front": "خ",
            "word": "خَرُوف",
            "detail": "🐑  خ مِثْلُ خَرُوف",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «خَرُوف»؟",
            "options": [
              "خ",
              "ر",
              "ط"
            ],
            "answer": "خ"
          }
        ]
      },
      {
        "id": "ar1",
        "title": "حُرُوفِي: الْمَجْمُوعَةُ الثَّانِيَة",
        "cards": [
          {
            "front": "د",
            "word": "دُبّ",
            "detail": "🐻  د مِثْلُ دُبّ",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «دُبّ»؟",
            "options": [
              "د",
              "ز",
              "ظ"
            ],
            "answer": "د"
          },
          {
            "front": "ذ",
            "word": "ذُرَة",
            "detail": "🌽  ذ مِثْلُ ذُرَة",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «ذُرَة»؟",
            "options": [
              "ذ",
              "س",
              "ع"
            ],
            "answer": "ذ"
          },
          {
            "front": "ر",
            "word": "رُمَّان",
            "detail": "🍎  ر مِثْلُ رُمَّان",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «رُمَّان»؟",
            "options": [
              "ر",
              "ش",
              "غ"
            ],
            "answer": "ر"
          },
          {
            "front": "ز",
            "word": "زَهْرَة",
            "detail": "🌼  ز مِثْلُ زَهْرَة",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «زَهْرَة»؟",
            "options": [
              "ز",
              "ص",
              "ف"
            ],
            "answer": "ز"
          },
          {
            "front": "س",
            "word": "سَمَكَة",
            "detail": "🐟  س مِثْلُ سَمَكَة",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «سَمَكَة»؟",
            "options": [
              "س",
              "ض",
              "ق"
            ],
            "answer": "س"
          },
          {
            "front": "ش",
            "word": "شَمْس",
            "detail": "☀️  ش مِثْلُ شَمْس",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «شَمْس»؟",
            "options": [
              "ش",
              "ط",
              "ك"
            ],
            "answer": "ش"
          },
          {
            "front": "ص",
            "word": "صَقْر",
            "detail": "🦅  ص مِثْلُ صَقْر",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «صَقْر»؟",
            "options": [
              "ص",
              "ظ",
              "ل"
            ],
            "answer": "ص"
          }
        ]
      },
      {
        "id": "ar2",
        "title": "حُرُوفِي: الْمَجْمُوعَةُ الثَّالِثَة",
        "cards": [
          {
            "front": "ض",
            "word": "ضِفْدَع",
            "detail": "🐸  ض مِثْلُ ضِفْدَع",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «ضِفْدَع»؟",
            "options": [
              "ض",
              "ع",
              "م"
            ],
            "answer": "ض"
          },
          {
            "front": "ط",
            "word": "طَائِرَة",
            "detail": "✈️  ط مِثْلُ طَائِرَة",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «طَائِرَة»؟",
            "options": [
              "ط",
              "غ",
              "ن"
            ],
            "answer": "ط"
          },
          {
            "front": "ظ",
            "word": "ظَرْف",
            "detail": "✉️  ظ مِثْلُ ظَرْف",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «ظَرْف»؟",
            "options": [
              "ظ",
              "ف",
              "ه"
            ],
            "answer": "ظ"
          },
          {
            "front": "ع",
            "word": "عِنَب",
            "detail": "🍇  ع مِثْلُ عِنَب",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «عِنَب»؟",
            "options": [
              "ع",
              "ق",
              "و"
            ],
            "answer": "ع"
          },
          {
            "front": "غ",
            "word": "غَزَال",
            "detail": "🦌  غ مِثْلُ غَزَال",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «غَزَال»؟",
            "options": [
              "غ",
              "ك",
              "ي"
            ],
            "answer": "غ"
          },
          {
            "front": "ف",
            "word": "فَرَاشَة",
            "detail": "🦋  ف مِثْلُ فَرَاشَة",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «فَرَاشَة»؟",
            "options": [
              "ف",
              "ل",
              "أ"
            ],
            "answer": "ف"
          },
          {
            "front": "ق",
            "word": "قَمَر",
            "detail": "🌙  ق مِثْلُ قَمَر",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «قَمَر»؟",
            "options": [
              "ق",
              "م",
              "ب"
            ],
            "answer": "ق"
          }
        ]
      },
      {
        "id": "ar3",
        "title": "حُرُوفِي: الْمَجْمُوعَةُ الرَّابِعَة",
        "cards": [
          {
            "front": "ك",
            "word": "كِتَاب",
            "detail": "📖  ك مِثْلُ كِتَاب",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «كِتَاب»؟",
            "options": [
              "ك",
              "ن",
              "ت"
            ],
            "answer": "ك"
          },
          {
            "front": "ل",
            "word": "لَيْمُون",
            "detail": "🍋  ل مِثْلُ لَيْمُون",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «لَيْمُون»؟",
            "options": [
              "ل",
              "ه",
              "ث"
            ],
            "answer": "ل"
          },
          {
            "front": "م",
            "word": "مَوْز",
            "detail": "🍌  م مِثْلُ مَوْز",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «مَوْز»؟",
            "options": [
              "م",
              "و",
              "ج"
            ],
            "answer": "م"
          },
          {
            "front": "ن",
            "word": "نَحْلَة",
            "detail": "🐝  ن مِثْلُ نَحْلَة",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «نَحْلَة»؟",
            "options": [
              "ن",
              "ي",
              "ح"
            ],
            "answer": "ن"
          },
          {
            "front": "ه",
            "word": "هِلَال",
            "detail": "🌙  ه مِثْلُ هِلَال",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «هِلَال»؟",
            "options": [
              "ه",
              "أ",
              "خ"
            ],
            "answer": "ه"
          },
          {
            "front": "و",
            "word": "وَرْدَة",
            "detail": "🌹  و مِثْلُ وَرْدَة",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «وَرْدَة»؟",
            "options": [
              "و",
              "ب",
              "د"
            ],
            "answer": "و"
          },
          {
            "front": "ي",
            "word": "يَد",
            "detail": "✋  ي مِثْلُ يَد",
            "lang": "ar",
            "q": "مَا أَوَّلُ حَرْفٍ فِي كَلِمَةِ «يَد»؟",
            "options": [
              "ي",
              "ت",
              "ذ"
            ],
            "answer": "ي"
          }
        ]
      },
      {
        "id": "vowels",
        "title": "الْحَرَكَاتُ الْقَصِيرَة",
        "cards": [
          {
            "front": "بَ",
            "word": "بَاءٌ مَفْتُوحَةٌ",
            "detail": "فَتْحَةٌ فَوْقَ الْبَاءِ: بَ، صَوْتُهَا بَ.",
            "lang": "ar",
            "q": "أَيُّ حَرْفٍ عَلَيْهِ فَتْحَةٌ؟",
            "options": [
              "بَ",
              "بِ",
              "بُ"
            ],
            "answer": "بَ"
          },
          {
            "front": "بِ",
            "word": "بَاءٌ مَكْسُورَةٌ",
            "detail": "كَسْرَةٌ تَحْتَ الْبَاءِ: بِ، صَوْتُهَا بِ.",
            "lang": "ar",
            "q": "أَيُّ حَرْفٍ تَحْتَهُ كَسْرَةٌ؟",
            "options": [
              "بَ",
              "بِ",
              "بُ"
            ],
            "answer": "بِ"
          },
          {
            "front": "بُ",
            "word": "بَاءٌ مَضْمُومَةٌ",
            "detail": "ضَمَّةٌ فَوْقَ الْبَاءِ: بُ، صَوْتُهَا بُ.",
            "lang": "ar",
            "q": "أَيُّ حَرْفٍ عَلَيْهِ ضَمَّةٌ؟",
            "options": [
              "بَ",
              "بِ",
              "بُ"
            ],
            "answer": "بُ"
          }
        ]
      }
    ]
  },
  {
    "id": "english",
    "name": "English",
    "icon": "🔤",
    "color": "#e1efff",
    "desc": "Letters, words & writing",
    "lessons": [
      {
        "id": "en0",
        "title": "ABC 1",
        "cards": [
          {
            "front": "A a",
            "word": "Apple",
            "detail": "🍎  A is for Apple",
            "lang": "en",
            "q": "Choose the first letter: Apple",
            "options": [
              "A",
              "E",
              "L"
            ],
            "answer": "A"
          },
          {
            "front": "B b",
            "word": "Ball",
            "detail": "⚽  B is for Ball",
            "lang": "en",
            "q": "Choose the first letter: Ball",
            "options": [
              "B",
              "F",
              "M"
            ],
            "answer": "B"
          },
          {
            "front": "C c",
            "word": "Cat",
            "detail": "🐱  C is for Cat",
            "lang": "en",
            "q": "Choose the first letter: Cat",
            "options": [
              "C",
              "G",
              "N"
            ],
            "answer": "C"
          },
          {
            "front": "D d",
            "word": "Dog",
            "detail": "🐶  D is for Dog",
            "lang": "en",
            "q": "Choose the first letter: Dog",
            "options": [
              "D",
              "H",
              "O"
            ],
            "answer": "D"
          },
          {
            "front": "E e",
            "word": "Elephant",
            "detail": "🐘  E is for Elephant",
            "lang": "en",
            "q": "Choose the first letter: Elephant",
            "options": [
              "E",
              "I",
              "P"
            ],
            "answer": "E"
          },
          {
            "front": "F f",
            "word": "Fish",
            "detail": "🐟  F is for Fish",
            "lang": "en",
            "q": "Choose the first letter: Fish",
            "options": [
              "F",
              "J",
              "Q"
            ],
            "answer": "F"
          },
          {
            "front": "G g",
            "word": "Goat",
            "detail": "🐐  G is for Goat",
            "lang": "en",
            "q": "Choose the first letter: Goat",
            "options": [
              "G",
              "K",
              "R"
            ],
            "answer": "G"
          }
        ]
      },
      {
        "id": "en1",
        "title": "ABC 2",
        "cards": [
          {
            "front": "H h",
            "word": "Hat",
            "detail": "🎩  H is for Hat",
            "lang": "en",
            "q": "Choose the first letter: Hat",
            "options": [
              "H",
              "L",
              "S"
            ],
            "answer": "H"
          },
          {
            "front": "I i",
            "word": "Igloo",
            "detail": "🧊  I is for Igloo",
            "lang": "en",
            "q": "Choose the first letter: Igloo",
            "options": [
              "I",
              "M",
              "T"
            ],
            "answer": "I"
          },
          {
            "front": "J j",
            "word": "Juice",
            "detail": "🧃  J is for Juice",
            "lang": "en",
            "q": "Choose the first letter: Juice",
            "options": [
              "J",
              "N",
              "U"
            ],
            "answer": "J"
          },
          {
            "front": "K k",
            "word": "Kite",
            "detail": "🪁  K is for Kite",
            "lang": "en",
            "q": "Choose the first letter: Kite",
            "options": [
              "K",
              "O",
              "V"
            ],
            "answer": "K"
          },
          {
            "front": "L l",
            "word": "Lion",
            "detail": "🦁  L is for Lion",
            "lang": "en",
            "q": "Choose the first letter: Lion",
            "options": [
              "L",
              "P",
              "W"
            ],
            "answer": "L"
          },
          {
            "front": "M m",
            "word": "Moon",
            "detail": "🌙  M is for Moon",
            "lang": "en",
            "q": "Choose the first letter: Moon",
            "options": [
              "M",
              "Q",
              "X"
            ],
            "answer": "M"
          },
          {
            "front": "N n",
            "word": "Nest",
            "detail": "🪺  N is for Nest",
            "lang": "en",
            "q": "Choose the first letter: Nest",
            "options": [
              "N",
              "R",
              "Y"
            ],
            "answer": "N"
          }
        ]
      },
      {
        "id": "en2",
        "title": "ABC 3",
        "cards": [
          {
            "front": "O o",
            "word": "Orange",
            "detail": "🍊  O is for Orange",
            "lang": "en",
            "q": "Choose the first letter: Orange",
            "options": [
              "O",
              "S",
              "Z"
            ],
            "answer": "O"
          },
          {
            "front": "P p",
            "word": "Pencil",
            "detail": "✏️  P is for Pencil",
            "lang": "en",
            "q": "Choose the first letter: Pencil",
            "options": [
              "P",
              "T",
              "A"
            ],
            "answer": "P"
          },
          {
            "front": "Q q",
            "word": "Queen",
            "detail": "👑  Q is for Queen",
            "lang": "en",
            "q": "Choose the first letter: Queen",
            "options": [
              "Q",
              "U",
              "B"
            ],
            "answer": "Q"
          },
          {
            "front": "R r",
            "word": "Rabbit",
            "detail": "🐰  R is for Rabbit",
            "lang": "en",
            "q": "Choose the first letter: Rabbit",
            "options": [
              "R",
              "V",
              "C"
            ],
            "answer": "R"
          },
          {
            "front": "S s",
            "word": "Sun",
            "detail": "☀️  S is for Sun",
            "lang": "en",
            "q": "Choose the first letter: Sun",
            "options": [
              "S",
              "W",
              "D"
            ],
            "answer": "S"
          },
          {
            "front": "T t",
            "word": "Tree",
            "detail": "🌳  T is for Tree",
            "lang": "en",
            "q": "Choose the first letter: Tree",
            "options": [
              "T",
              "X",
              "E"
            ],
            "answer": "T"
          },
          {
            "front": "U u",
            "word": "Umbrella",
            "detail": "☂️  U is for Umbrella",
            "lang": "en",
            "q": "Choose the first letter: Umbrella",
            "options": [
              "U",
              "Y",
              "F"
            ],
            "answer": "U"
          }
        ]
      },
      {
        "id": "en3",
        "title": "ABC 4",
        "cards": [
          {
            "front": "V v",
            "word": "Van",
            "detail": "🚐  V is for Van",
            "lang": "en",
            "q": "Choose the first letter: Van",
            "options": [
              "V",
              "Z",
              "G"
            ],
            "answer": "V"
          },
          {
            "front": "W w",
            "word": "Whale",
            "detail": "🐳  W is for Whale",
            "lang": "en",
            "q": "Choose the first letter: Whale",
            "options": [
              "W",
              "A",
              "H"
            ],
            "answer": "W"
          },
          {
            "front": "X x",
            "word": "Xylophone",
            "detail": "🎵  X is for Xylophone",
            "lang": "en",
            "q": "Choose the first letter: Xylophone",
            "options": [
              "X",
              "B",
              "I"
            ],
            "answer": "X"
          },
          {
            "front": "Y y",
            "word": "Yo-yo",
            "detail": "🪀  Y is for Yo-yo",
            "lang": "en",
            "q": "Choose the first letter: Yo-yo",
            "options": [
              "Y",
              "C",
              "J"
            ],
            "answer": "Y"
          },
          {
            "front": "Z z",
            "word": "Zebra",
            "detail": "🦓  Z is for Zebra",
            "lang": "en",
            "q": "Choose the first letter: Zebra",
            "options": [
              "Z",
              "D",
              "K"
            ],
            "answer": "Z"
          }
        ]
      },
      {
        "id": "enwords",
        "title": "My first words",
        "cards": [
          {
            "front": "👋",
            "word": "Hello",
            "detail": "Hello, Roqaya!",
            "lang": "en",
            "q": "What do we say when we meet?",
            "options": [
              "Hello",
              "Goodbye",
              "Good night"
            ],
            "answer": "Hello"
          },
          {
            "front": "🙏",
            "word": "Thank you",
            "detail": "Thank you for helping me.",
            "lang": "en",
            "q": "Someone helps you. Say...",
            "options": [
              "Thank you",
              "Goodbye",
              "No"
            ],
            "answer": "Thank you"
          },
          {
            "front": "👩",
            "word": "Mother",
            "detail": "This is my mother.",
            "lang": "en",
            "q": "Who is she? 👩",
            "options": [
              "Mother",
              "Father",
              "Baby"
            ],
            "answer": "Mother"
          },
          {
            "front": "👨",
            "word": "Father",
            "detail": "This is my father.",
            "lang": "en",
            "q": "Who is he? 👨",
            "options": [
              "Mother",
              "Father",
              "Baby"
            ],
            "answer": "Father"
          }
        ]
      }
    ]
  },
  {
    "id": "math",
    "name": "الرِّيَاضِيَّات",
    "icon": "🔢",
    "color": "#fff0d6",
    "desc": "عَدٌّ وَأَشْكَالٌ وَحِسَاب",
    "lessons": [
      {
        "id": "num0",
        "title": "الْأَعْدَادُ مِنْ 0 إِلَى 5",
        "cards": [
          {
            "front": "0",
            "word": "0",
            "detail": "لَا تُوجَدُ تُفَّاحَاتٌ",
            "lang": "ar",
            "q": "كَمْ تُفَّاحَةً أَمَامِي؟",
            "options": [
              "0",
              "1",
              "3"
            ],
            "answer": "0"
          },
          {
            "front": "1",
            "word": "1",
            "detail": "🍎",
            "lang": "ar",
            "q": "كَمْ تُفَّاحَةً أَمَامِي؟",
            "options": [
              "1",
              "2",
              "4"
            ],
            "answer": "1"
          },
          {
            "front": "2",
            "word": "2",
            "detail": "🍎🍎",
            "lang": "ar",
            "q": "كَمْ تُفَّاحَةً أَمَامِي؟",
            "options": [
              "2",
              "3",
              "5"
            ],
            "answer": "2"
          },
          {
            "front": "3",
            "word": "3",
            "detail": "🍎🍎🍎",
            "lang": "ar",
            "q": "كَمْ تُفَّاحَةً أَمَامِي؟",
            "options": [
              "3",
              "4",
              "6"
            ],
            "answer": "3"
          },
          {
            "front": "4",
            "word": "4",
            "detail": "🍎🍎🍎🍎",
            "lang": "ar",
            "q": "كَمْ تُفَّاحَةً أَمَامِي؟",
            "options": [
              "4",
              "5",
              "7"
            ],
            "answer": "4"
          },
          {
            "front": "5",
            "word": "5",
            "detail": "🍎🍎🍎🍎🍎",
            "lang": "ar",
            "q": "كَمْ تُفَّاحَةً أَمَامِي؟",
            "options": [
              "5",
              "6",
              "8"
            ],
            "answer": "5"
          }
        ]
      },
      {
        "id": "num6",
        "title": "الْأَعْدَادُ مِنْ 6 إِلَى 10",
        "cards": [
          {
            "front": "6",
            "word": "6",
            "detail": "🍎🍎🍎🍎🍎🍎",
            "lang": "ar",
            "q": "كَمْ تُفَّاحَةً أَمَامِي؟",
            "options": [
              "6",
              "7",
              "9"
            ],
            "answer": "6"
          },
          {
            "front": "7",
            "word": "7",
            "detail": "🍎🍎🍎🍎🍎🍎🍎",
            "lang": "ar",
            "q": "كَمْ تُفَّاحَةً أَمَامِي؟",
            "options": [
              "7",
              "8",
              "10"
            ],
            "answer": "7"
          },
          {
            "front": "8",
            "word": "8",
            "detail": "🍎🍎🍎🍎🍎🍎🍎🍎",
            "lang": "ar",
            "q": "كَمْ تُفَّاحَةً أَمَامِي؟",
            "options": [
              "8",
              "9",
              "11"
            ],
            "answer": "8"
          },
          {
            "front": "9",
            "word": "9",
            "detail": "🍎🍎🍎🍎🍎🍎🍎🍎🍎",
            "lang": "ar",
            "q": "كَمْ تُفَّاحَةً أَمَامِي؟",
            "options": [
              "9",
              "10",
              "12"
            ],
            "answer": "9"
          },
          {
            "front": "10",
            "word": "10",
            "detail": "🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎",
            "lang": "ar",
            "q": "كَمْ تُفَّاحَةً أَمَامِي؟",
            "options": [
              "10",
              "11",
              "13"
            ],
            "answer": "10"
          }
        ]
      },
      {
        "id": "num11",
        "title": "الْأَعْدَادُ مِنْ 11 إِلَى 20",
        "cards": [
          {
            "front": "11",
            "word": "11",
            "detail": "🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎",
            "lang": "ar",
            "q": "كَمْ تُفَّاحَةً أَمَامِي؟",
            "options": [
              "11",
              "12",
              "14"
            ],
            "answer": "11"
          },
          {
            "front": "12",
            "word": "12",
            "detail": "🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎",
            "lang": "ar",
            "q": "كَمْ تُفَّاحَةً أَمَامِي؟",
            "options": [
              "12",
              "13",
              "15"
            ],
            "answer": "12"
          },
          {
            "front": "13",
            "word": "13",
            "detail": "🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎",
            "lang": "ar",
            "q": "كَمْ تُفَّاحَةً أَمَامِي؟",
            "options": [
              "13",
              "14",
              "16"
            ],
            "answer": "13"
          },
          {
            "front": "14",
            "word": "14",
            "detail": "🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎",
            "lang": "ar",
            "q": "كَمْ تُفَّاحَةً أَمَامِي؟",
            "options": [
              "14",
              "15",
              "17"
            ],
            "answer": "14"
          },
          {
            "front": "15",
            "word": "15",
            "detail": "🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎",
            "lang": "ar",
            "q": "كَمْ تُفَّاحَةً أَمَامِي؟",
            "options": [
              "15",
              "16",
              "18"
            ],
            "answer": "15"
          },
          {
            "front": "16",
            "word": "16",
            "detail": "🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎",
            "lang": "ar",
            "q": "كَمْ تُفَّاحَةً أَمَامِي؟",
            "options": [
              "16",
              "17",
              "19"
            ],
            "answer": "16"
          },
          {
            "front": "17",
            "word": "17",
            "detail": "🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎",
            "lang": "ar",
            "q": "كَمْ تُفَّاحَةً أَمَامِي؟",
            "options": [
              "17",
              "18",
              "20"
            ],
            "answer": "17"
          },
          {
            "front": "18",
            "word": "18",
            "detail": "🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎",
            "lang": "ar",
            "q": "كَمْ تُفَّاحَةً أَمَامِي؟",
            "options": [
              "18",
              "19",
              "0"
            ],
            "answer": "18"
          },
          {
            "front": "19",
            "word": "19",
            "detail": "🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎",
            "lang": "ar",
            "q": "كَمْ تُفَّاحَةً أَمَامِي؟",
            "options": [
              "19",
              "20",
              "1"
            ],
            "answer": "19"
          },
          {
            "front": "20",
            "word": "20",
            "detail": "🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎",
            "lang": "ar",
            "q": "كَمْ تُفَّاحَةً أَمَامِي؟",
            "options": [
              "20",
              "0",
              "2"
            ],
            "answer": "20"
          }
        ]
      },
      {
        "id": "shapes",
        "title": "الْأَشْكَال",
        "cards": [
          {
            "front": "●",
            "word": "دَائِرَة",
            "detail": "الدَّائِرَةُ لَيْسَ لَهَا أَضْلَاعٌ.",
            "lang": "ar",
            "q": "مَا اسْمُ هَذَا الشَّكْلِ؟",
            "options": [
              "دَائِرَة",
              "مُرَبَّع",
              "مُثَلَّث",
              "مُسْتَطِيل"
            ],
            "answer": "دَائِرَة"
          },
          {
            "front": "■",
            "word": "مُرَبَّع",
            "detail": "لِلْمُرَبَّعِ أَرْبَعَةُ أَضْلَاعٍ مُتَسَاوِيَةٍ.",
            "lang": "ar",
            "q": "مَا اسْمُ هَذَا الشَّكْلِ؟",
            "options": [
              "دَائِرَة",
              "مُرَبَّع",
              "مُثَلَّث",
              "مُسْتَطِيل"
            ],
            "answer": "مُرَبَّع"
          },
          {
            "front": "▲",
            "word": "مُثَلَّث",
            "detail": "لِلْمُثَلَّثِ ثَلَاثَةُ أَضْلَاعٍ.",
            "lang": "ar",
            "q": "مَا اسْمُ هَذَا الشَّكْلِ؟",
            "options": [
              "دَائِرَة",
              "مُرَبَّع",
              "مُثَلَّث",
              "مُسْتَطِيل"
            ],
            "answer": "مُثَلَّث"
          },
          {
            "front": "▬",
            "word": "مُسْتَطِيل",
            "detail": "فِي الْمُسْتَطِيلِ، كُلُّ ضِلْعَيْنِ مُتَقَابِلَيْنِ مُتَسَاوِيَانِ.",
            "lang": "ar",
            "q": "مَا اسْمُ هَذَا الشَّكْلِ؟",
            "options": [
              "دَائِرَة",
              "مُرَبَّع",
              "مُثَلَّث",
              "مُسْتَطِيل"
            ],
            "answer": "مُسْتَطِيل"
          }
        ]
      },
      {
        "id": "compare",
        "title": "أَكْبَرُ وَأَصْغَر",
        "cards": [
          {
            "front": "🐘  🐭",
            "word": "كَبِيرٌ وَصَغِير",
            "detail": "الْفِيلُ أَكْبَرُ مِنَ الْفَأْرِ.",
            "lang": "ar",
            "q": "أَيُّ الْحَيَوَانَيْنِ أَكْبَرُ؟",
            "options": [
              "🐘",
              "🐭"
            ],
            "answer": "🐘"
          },
          {
            "front": "3   5",
            "word": "أَكْثَرُ وَأَقَلّ",
            "detail": "خَمْسَةٌ أَكْثَرُ مِنْ ثَلَاثَةٍ.",
            "lang": "ar",
            "q": "أَيُّ الْعَدَدَيْنِ أَكْبَرُ؟",
            "options": [
              "3",
              "5"
            ],
            "answer": "5"
          },
          {
            "front": "2   1",
            "word": "أَقَلّ",
            "detail": "وَاحِدٌ أَقَلُّ مِنِ اثْنَيْنِ.",
            "lang": "ar",
            "q": "أَيُّ الْعَدَدَيْنِ أَصْغَرُ؟",
            "options": [
              "2",
              "1"
            ],
            "answer": "1"
          },
          {
            "front": "🔴 🔵 🔴 🔵",
            "word": "نَمَطٌ مُتَكَرِّر",
            "detail": "أَحْمَرُ ثُمَّ أَزْرَقُ، وَنُكَرِّرُ.",
            "lang": "ar",
            "q": "مَا اللَّوْنُ التَّالِي؟",
            "options": [
              "🔴",
              "🔵",
              "🟡"
            ],
            "answer": "🔴"
          }
        ]
      },
      {
        "id": "add",
        "title": "نَجْمَعُ وَنَطْرَح",
        "cards": [
          {
            "front": "🍎 + 🍎",
            "word": "وَاحِدٌ زَائِدُ وَاحِدٍ يُسَاوِي اثْنَيْنِ.",
            "detail": "1 + 1 = 2",
            "lang": "ar",
            "q": "1 + 1 = ؟",
            "options": [
              "1",
              "2",
              "3"
            ],
            "answer": "2"
          },
          {
            "front": "🍎🍎 + 🍎",
            "word": "اثْنَانِ زَائِدُ وَاحِدٍ يُسَاوِي ثَلَاثَةً.",
            "detail": "2 + 1 = 3",
            "lang": "ar",
            "q": "2 + 1 = ؟",
            "options": [
              "1",
              "2",
              "3"
            ],
            "answer": "3"
          },
          {
            "front": "🍎🍎🍎 − 🍎",
            "word": "ثَلَاثَةٌ نَاقِصُ وَاحِدٍ يُسَاوِي اثْنَيْنِ.",
            "detail": "3 − 1 = 2",
            "lang": "ar",
            "q": "3 − 1 = ؟",
            "options": [
              "1",
              "2",
              "3"
            ],
            "answer": "2"
          }
        ]
      }
    ]
  },
  {
    "id": "science",
    "name": "أَكْتَشِفُ الْعَالَم",
    "icon": "🌱",
    "color": "#dff3e7",
    "desc": "عُلُومٌ وَحَيَوَانَاتٌ وَحَوَاسّ",
    "lessons": [
      {
        "id": "senses",
        "title": "جِسْمِي وَحَوَاسِّي",
        "cards": [
          {
            "front": "👁️",
            "word": "الْعَيْن",
            "detail": "أَرَى بِعَيْنَيَّ.",
            "lang": "ar",
            "q": "بِمَاذَا نَرَى؟",
            "options": [
              "الْعَيْن",
              "الْأُذُن",
              "الْأَنْف"
            ],
            "answer": "الْعَيْن"
          },
          {
            "front": "👂",
            "word": "الْأُذُن",
            "detail": "أَسْمَعُ بِأُذُنَيَّ.",
            "lang": "ar",
            "q": "بِمَاذَا نَسْمَعُ؟",
            "options": [
              "الْيَد",
              "الْأُذُن",
              "الْعَيْن"
            ],
            "answer": "الْأُذُن"
          },
          {
            "front": "👃",
            "word": "الْأَنْف",
            "detail": "أَشُمُّ بِأَنْفِي.",
            "lang": "ar",
            "q": "بِمَاذَا نَشُمُّ؟",
            "options": [
              "الْأَنْف",
              "الْأُذُن",
              "الْيَد"
            ],
            "answer": "الْأَنْف"
          },
          {
            "front": "👅",
            "word": "اللِّسَان",
            "detail": "أَتَذَوَّقُ بِلِسَانِي.",
            "lang": "ar",
            "q": "بِمَاذَا نَتَذَوَّقُ؟",
            "options": [
              "الْعَيْن",
              "اللِّسَان",
              "الْأُذُن"
            ],
            "answer": "اللِّسَان"
          },
          {
            "front": "✋",
            "word": "الْجِلْد",
            "detail": "أَشْعُرُ بِاللَّمْسِ عَنْ طَرِيقِ جِلْدِي.",
            "lang": "ar",
            "q": "بِمَاذَا نَشْعُرُ بِاللَّمْسِ؟",
            "options": [
              "الْجِلْد",
              "الْعَيْن",
              "الْأَنْف"
            ],
            "answer": "الْجِلْد"
          }
        ]
      },
      {
        "id": "animals",
        "title": "الْحَيَوَانَاتُ وَبُيُوتُهَا",
        "cards": [
          {
            "front": "🐟",
            "word": "سَمَكَة",
            "detail": "تَعِيشُ السَّمَكَةُ فِي الْمَاءِ.",
            "lang": "ar",
            "q": "أَيْنَ تَعِيشُ السَّمَكَةُ؟",
            "options": [
              "فِي الْمَاءِ",
              "فِي الصَّحْرَاءِ",
              "فِي الْعُشِّ"
            ],
            "answer": "فِي الْمَاءِ"
          },
          {
            "front": "🐦",
            "word": "عُصْفُور",
            "detail": "يَبْنِي الْعُصْفُورُ عُشًّا.",
            "lang": "ar",
            "q": "أَيْنَ يَضَعُ الْعُصْفُورُ بَيْضَهُ؟",
            "options": [
              "فِي الْعُشِّ",
              "فِي الْبَحْرِ",
              "فِي الْكُوبِ"
            ],
            "answer": "فِي الْعُشِّ"
          },
          {
            "front": "🐄",
            "word": "بَقَرَة",
            "detail": "تُعْطِينَا الْبَقَرَةُ الْحَلِيبَ.",
            "lang": "ar",
            "q": "أَيُّ حَيَوَانٍ يُعْطِينَا الْحَلِيبَ؟",
            "options": [
              "الْبَقَرَة",
              "الْعُصْفُور",
              "السَّمَكَة"
            ],
            "answer": "الْبَقَرَة"
          },
          {
            "front": "🐪",
            "word": "جَمَل",
            "detail": "يَسْتَطِيعُ الْجَمَلُ الْعَيْشَ فِي الصَّحْرَاءِ.",
            "lang": "ar",
            "q": "أَيُّ حَيَوَانٍ يَعِيشُ فِي الصَّحْرَاءِ؟",
            "options": [
              "الْجَمَل",
              "الْحُوت",
              "السَّمَكَة"
            ],
            "answer": "الْجَمَل"
          }
        ]
      },
      {
        "id": "nature",
        "title": "النَّبَاتُ وَالطَّقْس",
        "cards": [
          {
            "front": "🌱",
            "word": "نَبَات",
            "detail": "يَحْتَاجُ النَّبَاتُ إِلَى الْمَاءِ وَالضَّوْءِ وَالْهَوَاءِ.",
            "lang": "ar",
            "q": "مَاذَا يَحْتَاجُ النَّبَاتُ لِيَكْبَرَ؟",
            "options": [
              "مَاءٌ وَضَوْءٌ وَهَوَاء",
              "حَلْوَى",
              "أَلْعَاب"
            ],
            "answer": "مَاءٌ وَضَوْءٌ وَهَوَاء"
          },
          {
            "front": "🌧️",
            "word": "مَطَر",
            "detail": "تَسْقُطُ قَطَرَاتُ الْمَاءِ مِنَ السُّحُبِ.",
            "lang": "ar",
            "q": "مَاذَا نَسْتَخْدِمُ لِلْوِقَايَةِ مِنَ الْمَطَرِ؟",
            "options": [
              "مِظَلَّة",
              "نَظَّارَةُ سِبَاحَة",
              "مِرْوَحَة"
            ],
            "answer": "مِظَلَّة"
          },
          {
            "front": "☀️",
            "word": "نَهَار",
            "detail": "نَرَى الشَّمْسَ فِي النَّهَارِ.",
            "lang": "ar",
            "q": "مَتَى نَرَى الشَّمْسَ عَادَةً؟",
            "options": [
              "فِي النَّهَارِ",
              "فِي مُنْتَصَفِ اللَّيْلِ"
            ],
            "answer": "فِي النَّهَارِ"
          },
          {
            "front": "🍂",
            "word": "خَرِيف",
            "detail": "تَسْقُطُ أَوْرَاقُ بَعْضِ الْأَشْجَارِ فِي الْخَرِيفِ.",
            "lang": "ar",
            "q": "فِي أَيِّ فَصْلٍ تَسْقُطُ أَوْرَاقُ بَعْضِ الْأَشْجَارِ؟",
            "options": [
              "فِي الْخَرِيفِ",
              "فِي الصَّيْفِ"
            ],
            "answer": "فِي الْخَرِيفِ"
          }
        ]
      }
    ]
  },
  {
    "id": "values",
    "name": "آدَابِي وَعَادَاتِي",
    "icon": "💛",
    "color": "#ffe6de",
    "desc": "تَعَاوُنٌ وَنَظَافَةٌ وَآدَاب",
    "lessons": [
      {
        "id": "kind",
        "title": "أَتَصَرَّفُ بِلُطْف",
        "cards": [
          {
            "front": "🤝",
            "word": "أَتَعَاوَن",
            "detail": "أُشَارِكُ أَلْعَابِي وَأَنْتَظِرُ دَوْرِي.",
            "lang": "ar",
            "q": "صَدِيقٌ يُرِيدُ اللَّعِبَ مَعِي. مَاذَا أَفْعَلُ؟",
            "options": [
              "نَتَبَادَلُ الْأَدْوَارَ",
              "آخُذُ كُلَّ الْأَلْعَابِ"
            ],
            "answer": "نَتَبَادَلُ الْأَدْوَارَ"
          },
          {
            "front": "💬",
            "word": "أَسْتَأْذِن",
            "detail": "أَقُولُ «مِنْ فَضْلِكَ» عِنْدَ الطَّلَبِ.",
            "lang": "ar",
            "q": "مَاذَا أَقُولُ عِنْدَمَا أَطْلُبُ شَيْئًا؟",
            "options": [
              "مِنْ فَضْلِكَ",
              "أَعْطِنِي الْآنَ"
            ],
            "answer": "مِنْ فَضْلِكَ"
          },
          {
            "front": "💗",
            "word": "أَعْتَذِر",
            "detail": "أَعْتَذِرُ عِنْدَمَا أُخْطِئُ.",
            "lang": "ar",
            "q": "مَاذَا أَفْعَلُ إِذَا أَخْطَأْتُ؟",
            "options": [
              "أَعْتَذِرُ",
              "أَتَجَاهَلُ الْأَمْرَ"
            ],
            "answer": "أَعْتَذِرُ"
          },
          {
            "front": "🧸",
            "word": "أُرَتِّبُ أَلْعَابِي",
            "detail": "أُعِيدُ أَلْعَابِي إِلَى مَكَانِهَا.",
            "lang": "ar",
            "q": "مَاذَا أَفْعَلُ بَعْدَ اللَّعِبِ؟",
            "options": [
              "أُرَتِّبُ أَلْعَابِي",
              "أَتْرُكُهَا عَلَى الْأَرْضِ"
            ],
            "answer": "أُرَتِّبُ أَلْعَابِي"
          }
        ]
      },
      {
        "id": "habits",
        "title": "عَادَاتِي الْجَمِيلَة",
        "cards": [
          {
            "front": "🧼",
            "word": "أَغْسِلُ يَدَيَّ",
            "detail": "أَغْسِلُ يَدَيَّ بِالْمَاءِ وَالصَّابُونِ قَبْلَ الْأَكْلِ.",
            "lang": "ar",
            "q": "مَاذَا أَفْعَلُ قَبْلَ الْأَكْلِ؟",
            "options": [
              "أَغْسِلُ يَدَيَّ",
              "أَلْمَسُ الْأَرْضَ"
            ],
            "answer": "أَغْسِلُ يَدَيَّ"
          },
          {
            "front": "🪥",
            "word": "أُنَظِّفُ أَسْنَانِي",
            "detail": "أُنَظِّفُ أَسْنَانِي بِمُسَاعَدَةِ شَخْصٍ بَالِغٍ.",
            "lang": "ar",
            "q": "بِمَاذَا أُنَظِّفُ أَسْنَانِي؟",
            "options": [
              "بِفُرْشَاةٍ وَمَعْجُونٍ",
              "بِلُعْبَةٍ"
            ],
            "answer": "بِفُرْشَاةٍ وَمَعْجُونٍ"
          },
          {
            "front": "🥗",
            "word": "أُنَوِّعُ طَعَامِي",
            "detail": "آكُلُ خُضْرَوَاتٍ وَفَاكِهَةً وَأَطْعِمَةً مُتَنَوِّعَةً.",
            "lang": "ar",
            "q": "أَيَّ وَجْبَةٍ أَخْتَارُ؟",
            "options": [
              "وَجْبَةً مُتَنَوِّعَةً",
              "حَلْوَى فَقَطْ"
            ],
            "answer": "وَجْبَةً مُتَنَوِّعَةً"
          },
          {
            "front": "🚦",
            "word": "أَعْبُرُ بِأَمَان",
            "detail": "أُمْسِكُ بِيَدِ شَخْصٍ بَالِغٍ عِنْدَ عُبُورِ الطَّرِيقِ.",
            "lang": "ar",
            "q": "كَيْفَ أَعْبُرُ الطَّرِيقَ؟",
            "options": [
              "مَعَ شَخْصٍ بَالِغٍ",
              "وَحْدِي"
            ],
            "answer": "مَعَ شَخْصٍ بَالِغٍ"
          }
        ]
      },
      {
        "id": "faith",
        "title": "آدَابٌ إِسْلَامِيَّةٌ بَسِيطَة",
        "cards": [
          {
            "front": "🍽️",
            "word": "بِسْمِ اللَّه",
            "detail": "أَقُولُ «بِسْمِ اللَّهِ» قَبْلَ الْأَكْلِ.",
            "lang": "ar",
            "q": "مَاذَا أَقُولُ قَبْلَ الْأَكْلِ؟",
            "options": [
              "بِسْمِ اللَّهِ",
              "مَعَ السَّلَامَةِ"
            ],
            "answer": "بِسْمِ اللَّهِ"
          },
          {
            "front": "🤲",
            "word": "الْحَمْدُ لِلَّه",
            "detail": "أَقُولُ «الْحَمْدُ لِلَّهِ» وَأَشْكُرُ اللَّهَ عَلَى نِعَمِهِ.",
            "lang": "ar",
            "q": "مَاذَا أَقُولُ لِشُكْرِ اللَّهِ؟",
            "options": [
              "الْحَمْدُ لِلَّهِ",
              "صَبَاحُ الْخَيْرِ"
            ],
            "answer": "الْحَمْدُ لِلَّهِ"
          },
          {
            "front": "👋",
            "word": "السَّلَامُ عَلَيْكُمْ",
            "detail": "أُلْقِي السَّلَامَ بِلُطْفٍ.",
            "lang": "ar",
            "q": "مَا تَحِيَّةُ الْإِسْلَامِ؟",
            "options": [
              "السَّلَامُ عَلَيْكُمْ",
              "تُصْبِحُ عَلَى خَيْرٍ"
            ],
            "answer": "السَّلَامُ عَلَيْكُمْ"
          }
        ]
      }
    ]
  },
  {
    "id": "art",
    "name": "أَلْوَانٌ وَإِبْدَاع",
    "icon": "🎨",
    "color": "#fce3f1",
    "desc": "أَلْوَانٌ وَرَسْمٌ وَتَتَبُّع",
    "lessons": [
      {
        "id": "colors",
        "title": "أَلْوَانِي",
        "cards": [
          {
            "front": "🔴",
            "word": "أَحْمَر",
            "detail": "نَرَى هَذَا اللَّوْنَ حَوْلَنَا.",
            "lang": "ar",
            "q": "مَا اسْمُ هَذَا اللَّوْنِ؟",
            "options": [
              "أَحْمَر",
              "أَزْرَق",
              "أَصْفَر",
              "أَخْضَر",
              "بَنَفْسَجِيّ",
              "بُرْتُقَالِيّ"
            ],
            "answer": "أَحْمَر"
          },
          {
            "front": "🔵",
            "word": "أَزْرَق",
            "detail": "نَرَى هَذَا اللَّوْنَ حَوْلَنَا.",
            "lang": "ar",
            "q": "مَا اسْمُ هَذَا اللَّوْنِ؟",
            "options": [
              "أَحْمَر",
              "أَزْرَق",
              "أَصْفَر",
              "أَخْضَر",
              "بَنَفْسَجِيّ",
              "بُرْتُقَالِيّ"
            ],
            "answer": "أَزْرَق"
          },
          {
            "front": "🟡",
            "word": "أَصْفَر",
            "detail": "نَرَى هَذَا اللَّوْنَ حَوْلَنَا.",
            "lang": "ar",
            "q": "مَا اسْمُ هَذَا اللَّوْنِ؟",
            "options": [
              "أَحْمَر",
              "أَزْرَق",
              "أَصْفَر",
              "أَخْضَر",
              "بَنَفْسَجِيّ",
              "بُرْتُقَالِيّ"
            ],
            "answer": "أَصْفَر"
          },
          {
            "front": "🟢",
            "word": "أَخْضَر",
            "detail": "نَرَى هَذَا اللَّوْنَ حَوْلَنَا.",
            "lang": "ar",
            "q": "مَا اسْمُ هَذَا اللَّوْنِ؟",
            "options": [
              "أَحْمَر",
              "أَزْرَق",
              "أَصْفَر",
              "أَخْضَر",
              "بَنَفْسَجِيّ",
              "بُرْتُقَالِيّ"
            ],
            "answer": "أَخْضَر"
          },
          {
            "front": "🟣",
            "word": "بَنَفْسَجِيّ",
            "detail": "نَرَى هَذَا اللَّوْنَ حَوْلَنَا.",
            "lang": "ar",
            "q": "مَا اسْمُ هَذَا اللَّوْنِ؟",
            "options": [
              "أَحْمَر",
              "أَزْرَق",
              "أَصْفَر",
              "أَخْضَر",
              "بَنَفْسَجِيّ",
              "بُرْتُقَالِيّ"
            ],
            "answer": "بَنَفْسَجِيّ"
          },
          {
            "front": "🟠",
            "word": "بُرْتُقَالِيّ",
            "detail": "نَرَى هَذَا اللَّوْنَ حَوْلَنَا.",
            "lang": "ar",
            "q": "مَا اسْمُ هَذَا اللَّوْنِ؟",
            "options": [
              "أَحْمَر",
              "أَزْرَق",
              "أَصْفَر",
              "أَخْضَر",
              "بَنَفْسَجِيّ",
              "بُرْتُقَالِيّ"
            ],
            "answer": "بُرْتُقَالِيّ"
          }
        ]
      }
    ]
  }
];
function bare(s){return String(s).replace(/[\u064b-\u065f\u0670]/g,'');}
function arText(s){return String(s);}
function digits(s){return String(s).replace(/[0-9]/g,n=>'٠١٢٣٤٥٦٧٨٩'[n]);}
