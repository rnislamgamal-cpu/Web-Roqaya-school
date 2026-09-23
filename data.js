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

/* Guided curriculum 4.0: authored lessons and a flexible twelve-week path. */
const GUIDED_LESSONS = [{"subject": "arabic", "id": "ar_start", "title": "حُرُوفٌ نَبْدَأُ بِهَا", "cards": [{"front": "ب", "word": "بَاء", "detail": "نَتَعَرَّفُ عَلَى شَكْلِ الْحَرْفِ وَاسْمِهِ.", "q": "أَيْنَ حَرْفُ بَاء؟", "options": ["ب", "ت", "ك"], "answer": "ب", "lang": "ar", "writing": ["ب"], "practice": "trace", "speech": "هَذَا حَرْفُ بَاء"}, {"front": "ت", "word": "تَاء", "detail": "نَتَعَرَّفُ عَلَى شَكْلِ الْحَرْفِ وَاسْمِهِ.", "q": "أَيْنَ حَرْفُ تَاء؟", "options": ["ت", "ك", "ر"], "answer": "ت", "lang": "ar", "writing": ["ت"], "practice": "trace", "speech": "هَذَا حَرْفُ تَاء"}, {"front": "ك", "word": "كَاف", "detail": "نَتَعَرَّفُ عَلَى شَكْلِ الْحَرْفِ وَاسْمِهِ.", "q": "أَيْنَ حَرْفُ كَاف؟", "options": ["ك", "ر", "س"], "answer": "ك", "lang": "ar", "writing": ["ك"], "practice": "trace", "speech": "هَذَا حَرْفُ كَاف"}, {"front": "ر", "word": "رَاء", "detail": "نَتَعَرَّفُ عَلَى شَكْلِ الْحَرْفِ وَاسْمِهِ.", "q": "أَيْنَ حَرْفُ رَاء؟", "options": ["ر", "س", "م"], "answer": "ر", "lang": "ar", "writing": ["ر"], "practice": "trace", "speech": "هَذَا حَرْفُ رَاء"}, {"front": "س", "word": "سِين", "detail": "نَتَعَرَّفُ عَلَى شَكْلِ الْحَرْفِ وَاسْمِهِ.", "q": "أَيْنَ حَرْفُ سِين؟", "options": ["س", "م", "د"], "answer": "س", "lang": "ar", "writing": ["س"], "practice": "trace", "speech": "هَذَا حَرْفُ سِين"}, {"front": "م", "word": "مِيم", "detail": "نَتَعَرَّفُ عَلَى شَكْلِ الْحَرْفِ وَاسْمِهِ.", "q": "أَيْنَ حَرْفُ مِيم؟", "options": ["م", "د", "ب"], "answer": "م", "lang": "ar", "writing": ["م"], "practice": "trace", "speech": "هَذَا حَرْفُ مِيم"}, {"front": "د", "word": "دَال", "detail": "نَتَعَرَّفُ عَلَى شَكْلِ الْحَرْفِ وَاسْمِهِ.", "q": "أَيْنَ حَرْفُ دَال؟", "options": ["د", "ب", "ت"], "answer": "د", "lang": "ar", "writing": ["د"], "practice": "trace", "speech": "هَذَا حَرْفُ دَال"}], "prereq": [], "guided": true, "criterion": "تُسَمِّي أَوْ تُشِيرُ إِلَى ٦ حُرُوفٍ مِنْ ٧ بِاسْتِقْلَالٍ فِي يَوْمَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "ب وَت: نَعُدُّ النُّقَاطَ وَنُلَاحِظُ مَكَانَهَا، وَلَا نُسْرِعُ فِي الْإِجَابَةِ."}, {"subject": "arabic", "id": "ar_forms", "title": "شَكْلُ الْحَرْفِ وَاتِّصَالُهُ", "cards": [{"front": "ب / بـ / ـبـ / ـب", "word": "ب", "detail": "أَوَّلُ الْكَلِمَةِ • وَسَطُ الْكَلِمَةِ • آخِرُ الْكَلِمَةِ", "q": "أَيُّ شَكْلٍ لِلْحَرْفِ فِي وَسَطِ الْكَلِمَةِ؟", "options": ["بـ", "ـبـ", "ـب"], "answer": "ـبـ", "lang": "ar", "writing": ["بـ", "ـبـ", "ـب"], "practice": "copy"}, {"front": "ت / تـ / ـتـ / ـت", "word": "ت", "detail": "أَوَّلُ الْكَلِمَةِ • وَسَطُ الْكَلِمَةِ • آخِرُ الْكَلِمَةِ", "q": "أَيُّ شَكْلٍ لِلْحَرْفِ فِي وَسَطِ الْكَلِمَةِ؟", "options": ["تـ", "ـتـ", "ـت"], "answer": "ـتـ", "lang": "ar", "writing": ["تـ", "ـتـ", "ـت"], "practice": "copy"}, {"front": "ك / كـ / ـكـ / ـك", "word": "ك", "detail": "أَوَّلُ الْكَلِمَةِ • وَسَطُ الْكَلِمَةِ • آخِرُ الْكَلِمَةِ", "q": "أَيُّ شَكْلٍ لِلْحَرْفِ فِي وَسَطِ الْكَلِمَةِ؟", "options": ["كـ", "ـكـ", "ـك"], "answer": "ـكـ", "lang": "ar", "writing": ["كـ", "ـكـ", "ـك"], "practice": "copy"}, {"front": "م / مـ / ـمـ / ـم", "word": "م", "detail": "أَوَّلُ الْكَلِمَةِ • وَسَطُ الْكَلِمَةِ • آخِرُ الْكَلِمَةِ", "q": "أَيُّ شَكْلٍ لِلْحَرْفِ فِي وَسَطِ الْكَلِمَةِ؟", "options": ["مـ", "ـمـ", "ـم"], "answer": "ـمـ", "lang": "ar", "writing": ["مـ", "ـمـ", "ـم"], "practice": "copy"}, {"front": "أ د ذ ر ز و", "word": "حُرُوفٌ لَا تَتَّصِلُ بِمَا بَعْدَهَا", "detail": "تَقْبَلُ هَذِهِ الْحُرُوفُ الِاتِّصَالَ مِنَ الْيَمِينِ عِنْدَ إِمْكَانِهِ، وَلَا تَتَّصِلُ بِالْحَرْفِ الَّذِي يَأْتِي بَعْدَهَا عَلَى الْيَسَارِ.", "q": "هَلْ يَتَّصِلُ حَرْفُ د بِالْحَرْفِ الَّذِي بَعْدَهُ؟", "options": ["نَعَمْ", "لَا"], "answer": "لَا", "lang": "ar", "writing": []}], "prereq": ["ar_start"], "guided": true, "criterion": "٤ مُحَاوَلَاتٍ صَحِيحَةٌ مِنْ ٥، دُونَ تَلْقِينٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "إِذَا تَرَدَّدَتْ، قُلْ: نُجَرِّبُ مَعًا، ثُمَّ نُعِيدُ الْمُحَاوَلَةَ بِمِثَالٍ أَسْهَلَ."}, {"subject": "arabic", "id": "ar_fatha", "title": "صَوْتُ الْحَرْفِ: فَتْحَة", "cards": [{"front": "بَ", "word": "بَ", "detail": "الْحَرَكَةُ فَوْقَ الْحَرْفِ. نَنْطِقُ صَوْتًا قَصِيرًا دُونَ مَدٍّ.", "q": "اِخْتَارِي الْحَرْفَ مَعَ فَتْحَةٍ.", "options": ["بَ", "بُ", "بِ"], "answer": "بَ", "lang": "ar", "writing": ["بَ"], "practice": "trace", "speech": "بَ. بَ"}, {"front": "تَ", "word": "تَ", "detail": "الْحَرَكَةُ فَوْقَ الْحَرْفِ. نَنْطِقُ صَوْتًا قَصِيرًا دُونَ مَدٍّ.", "q": "اِخْتَارِي الْحَرْفَ مَعَ فَتْحَةٍ.", "options": ["تَ", "تُ", "تِ"], "answer": "تَ", "lang": "ar", "writing": ["تَ"], "practice": "trace", "speech": "تَ. تَ"}, {"front": "مَ", "word": "مَ", "detail": "الْحَرَكَةُ فَوْقَ الْحَرْفِ. نَنْطِقُ صَوْتًا قَصِيرًا دُونَ مَدٍّ.", "q": "اِخْتَارِي الْحَرْفَ مَعَ فَتْحَةٍ.", "options": ["مَ", "مُ", "مِ"], "answer": "مَ", "lang": "ar", "writing": ["مَ"], "practice": "trace", "speech": "مَ. مَ"}, {"front": "كَ", "word": "كَ", "detail": "نَدْمِجُ الْحَرْفَ مَعَ الْفَتْحَةِ فِي صَوْتٍ قَصِيرٍ.", "q": "اِخْتَارِي الْحَرْفَ الْمَفْتُوحَ.", "options": ["كَ", "كُ", "كِ"], "answer": "كَ", "lang": "ar", "writing": ["كَ"], "speech": "كَ"}, {"front": "رَ", "word": "رَ", "detail": "نَدْمِجُ الْحَرْفَ مَعَ الْفَتْحَةِ فِي صَوْتٍ قَصِيرٍ.", "q": "اِخْتَارِي الْحَرْفَ الْمَفْتُوحَ.", "options": ["رَ", "رُ", "رِ"], "answer": "رَ", "lang": "ar", "writing": ["رَ"], "speech": "رَ"}, {"front": "سَ", "word": "سَ", "detail": "نَدْمِجُ الْحَرْفَ مَعَ الْفَتْحَةِ فِي صَوْتٍ قَصِيرٍ.", "q": "اِخْتَارِي الْحَرْفَ الْمَفْتُوحَ.", "options": ["سَ", "سُ", "سِ"], "answer": "سَ", "lang": "ar", "writing": ["سَ"], "speech": "سَ"}, {"front": "دَ", "word": "دَ", "detail": "نَدْمِجُ الْحَرْفَ مَعَ الْفَتْحَةِ فِي صَوْتٍ قَصِيرٍ.", "q": "اِخْتَارِي الْحَرْفَ الْمَفْتُوحَ.", "options": ["دَ", "دُ", "دِ"], "answer": "دَ", "lang": "ar", "writing": ["دَ"], "speech": "دَ"}], "prereq": ["ar_start"], "guided": true, "criterion": "٤ مُحَاوَلَاتٍ صَحِيحَةٌ مِنْ ٥، دُونَ تَلْقِينٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "نُقَصِّرُ الصَّوْتَ؛ بَ لَيْسَتْ بَا. نُلَاحِظُ مَكَانَ الْحَرَكَةِ ثُمَّ نُقَلِّدُ النَّمُوذَجَ."}, {"subject": "arabic", "id": "ar_damma", "title": "صَوْتُ الْحَرْفِ: ضَمَّة", "cards": [{"front": "بُ", "word": "بُ", "detail": "الْحَرَكَةُ فَوْقَ الْحَرْفِ. نَنْطِقُ صَوْتًا قَصِيرًا دُونَ مَدٍّ.", "q": "اِخْتَارِي الْحَرْفَ مَعَ ضَمَّةٍ.", "options": ["بَ", "بُ", "بِ"], "answer": "بُ", "lang": "ar", "writing": ["بُ"], "practice": "trace", "speech": "بُ. بُ"}, {"front": "تُ", "word": "تُ", "detail": "الْحَرَكَةُ فَوْقَ الْحَرْفِ. نَنْطِقُ صَوْتًا قَصِيرًا دُونَ مَدٍّ.", "q": "اِخْتَارِي الْحَرْفَ مَعَ ضَمَّةٍ.", "options": ["تَ", "تُ", "تِ"], "answer": "تُ", "lang": "ar", "writing": ["تُ"], "practice": "trace", "speech": "تُ. تُ"}, {"front": "مُ", "word": "مُ", "detail": "الْحَرَكَةُ فَوْقَ الْحَرْفِ. نَنْطِقُ صَوْتًا قَصِيرًا دُونَ مَدٍّ.", "q": "اِخْتَارِي الْحَرْفَ مَعَ ضَمَّةٍ.", "options": ["مَ", "مُ", "مِ"], "answer": "مُ", "lang": "ar", "writing": ["مُ"], "practice": "trace", "speech": "مُ. مُ"}], "prereq": ["ar_read_a"], "guided": true, "criterion": "٤ مُحَاوَلَاتٍ صَحِيحَةٌ مِنْ ٥، دُونَ تَلْقِينٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "نُقَصِّرُ الصَّوْتَ؛ بَ لَيْسَتْ بَا. نُلَاحِظُ مَكَانَ الْحَرَكَةِ ثُمَّ نُقَلِّدُ النَّمُوذَجَ."}, {"subject": "arabic", "id": "ar_kasra", "title": "صَوْتُ الْحَرْفِ: كَسْرَة", "cards": [{"front": "بِ", "word": "بِ", "detail": "الْكَسْرَةُ تَحْتَ الْحَرْفِ. نَنْطِقُ صَوْتًا قَصِيرًا دُونَ مَدٍّ.", "q": "اِخْتَارِي الْحَرْفَ مَعَ كَسْرَةٍ.", "options": ["بَ", "بُ", "بِ"], "answer": "بِ", "lang": "ar", "writing": ["بِ"], "practice": "trace", "speech": "بِ. بِ"}, {"front": "تِ", "word": "تِ", "detail": "الْكَسْرَةُ تَحْتَ الْحَرْفِ. نَنْطِقُ صَوْتًا قَصِيرًا دُونَ مَدٍّ.", "q": "اِخْتَارِي الْحَرْفَ مَعَ كَسْرَةٍ.", "options": ["تَ", "تُ", "تِ"], "answer": "تِ", "lang": "ar", "writing": ["تِ"], "practice": "trace", "speech": "تِ. تِ"}, {"front": "مِ", "word": "مِ", "detail": "الْكَسْرَةُ تَحْتَ الْحَرْفِ. نَنْطِقُ صَوْتًا قَصِيرًا دُونَ مَدٍّ.", "q": "اِخْتَارِي الْحَرْفَ مَعَ كَسْرَةٍ.", "options": ["مَ", "مُ", "مِ"], "answer": "مِ", "lang": "ar", "writing": ["مِ"], "practice": "trace", "speech": "مِ. مِ"}], "prereq": ["ar_damma"], "guided": true, "criterion": "٤ مُحَاوَلَاتٍ صَحِيحَةٌ مِنْ ٥، دُونَ تَلْقِينٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "نُقَصِّرُ الصَّوْتَ؛ بَ لَيْسَتْ بَا. نُلَاحِظُ مَكَانَ الْحَرَكَةِ ثُمَّ نُقَلِّدُ النَّمُوذَجَ."}, {"subject": "arabic", "id": "ar_read_a", "title": "نَقْرَأُ بِالْفَتْحَةِ", "cards": [{"front": "✍️", "word": "كَتَبَ", "detail": "شَخْصٌ كَتَبَ عَلَى الْوَرَقِ.", "q": "أَيُّ كَلِمَةٍ تُنَاسِبُ الصُّورَةَ؟", "options": ["كَتَبَ", "رَسَمَ"], "answer": "كَتَبَ", "lang": "ar", "syllables": ["كَ", "تَ", "بَ"], "speech": "كَ . تَ . بَ. كَتَبَ", "writing": ["كَتَبَ"], "practice": "copy", "visual": {"type": "picture", "value": "✍️"}, "earlyReading": true}, {"front": "🎨", "word": "رَسَمَ", "detail": "شَخْصٌ رَسَمَ صُورَةً.", "q": "أَيُّ كَلِمَةٍ تُنَاسِبُ الصُّورَةَ؟", "options": ["رَسَمَ", "دَرَسَ"], "answer": "رَسَمَ", "lang": "ar", "syllables": ["رَ", "سَ", "مَ"], "speech": "رَ . سَ . مَ. رَسَمَ", "writing": ["رَسَمَ"], "practice": "copy", "visual": {"type": "picture", "value": "🎨"}, "earlyReading": true}, {"front": "📚", "word": "دَرَسَ", "detail": "شَخْصٌ دَرَسَ وَتَعَلَّمَ.", "q": "أَيُّ كَلِمَةٍ تُنَاسِبُ الصُّورَةَ؟", "options": ["دَرَسَ", "كَتَبَ"], "answer": "دَرَسَ", "lang": "ar", "syllables": ["دَ", "رَ", "سَ"], "speech": "دَ . رَ . سَ. دَرَسَ", "writing": ["دَرَسَ"], "practice": "copy", "visual": {"type": "picture", "value": "📚"}, "earlyReading": true}], "prereq": ["ar_fatha"], "guided": true, "criterion": "٤ مُحَاوَلَاتٍ صَحِيحَةٌ مِنْ ٥، دُونَ تَلْقِينٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "نَقُولُ كَ ـ تَ ـ بَ، ثُمَّ كَتَبَ. نَدْمِجُ الْأَصْوَاتَ، وَلَا نَكْتَفِي بِأَسْمَاءِ الْحُرُوفِ."}, {"subject": "arabic", "id": "ar_more", "title": "حُرُوفٌ جَدِيدَةٌ لِكَلِمَاتِنَا", "cards": [{"front": "ف", "word": "فَاء", "detail": "نَتَعَرَّفُ عَلَى الْحَرْفِ، ثُمَّ نَقْرَأُهُ بِالْحَرَكَاتِ الثَّلَاثِ: فَ فُ فِ", "q": "أَيْنَ حَرْفُ فَاء؟", "options": ["ف", "ب", "ت"], "answer": "ف", "lang": "ar", "writing": ["فَ", "فُ", "فِ"]}, {"front": "ه", "word": "هَاء", "detail": "نَتَعَرَّفُ عَلَى الْحَرْفِ، ثُمَّ نَقْرَأُهُ بِالْحَرَكَاتِ الثَّلَاثِ: هَ هُ هِ", "q": "أَيْنَ حَرْفُ هَاء؟", "options": ["ه", "ب", "ت"], "answer": "ه", "lang": "ar", "writing": ["هَ", "هُ", "هِ"]}, {"front": "ش", "word": "شِين", "detail": "نَتَعَرَّفُ عَلَى الْحَرْفِ، ثُمَّ نَقْرَأُهُ بِالْحَرَكَاتِ الثَّلَاثِ: شَ شُ شِ", "q": "أَيْنَ حَرْفُ شِين؟", "options": ["ش", "ب", "ت"], "answer": "ش", "lang": "ar", "writing": ["شَ", "شُ", "شِ"]}], "prereq": ["ar_kasra"], "guided": true, "criterion": "٤ مُحَاوَلَاتٍ صَحِيحَةٌ مِنْ ٥، دُونَ تَلْقِينٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "إِذَا تَرَدَّدَتْ، قُلْ: نُجَرِّبُ مَعًا، ثُمَّ نُعِيدُ الْمُحَاوَلَةَ بِمِثَالٍ أَسْهَلَ."}, {"subject": "arabic", "id": "ar_mix", "title": "نَدْمِجُ الْحَرَكَاتِ", "cards": [{"front": "🥤", "word": "شَرِبَ", "detail": "شَرِبَ الْوَلَدُ مَاءً.", "q": "اِقْرَئِي، ثُمَّ اخْتَارِي الْكَلِمَةَ الْمُنَاسِبَةَ.", "options": ["شَرِبَ", "فَهِمَ"], "answer": "شَرِبَ", "lang": "ar", "syllables": ["شَ", "رِ", "بَ"], "speech": "شَ . رِ . بَ. شَرِبَ", "writing": ["شَرِبَ"], "earlyReading": true, "visual": {"type": "picture", "value": "🥤"}}, {"front": "💡", "word": "فَهِمَ", "detail": "فَهِمَ الطِّفْلُ الْفِكْرَةَ.", "q": "اِقْرَئِي، ثُمَّ اخْتَارِي الْكَلِمَةَ الْمُنَاسِبَةَ.", "options": ["فَهِمَ", "كَتَبَ"], "answer": "فَهِمَ", "lang": "ar", "syllables": ["فَ", "هِ", "مَ"], "speech": "فَ . هِ . مَ. فَهِمَ", "writing": ["فَهِمَ"], "earlyReading": true, "visual": {"type": "picture", "value": "💡"}}, {"front": "🌱", "word": "كَبُرَ", "detail": "كَانَ صَغِيرًا ثُمَّ كَبُرَ.", "q": "اِقْرَئِي، ثُمَّ اخْتَارِي الْكَلِمَةَ الْمُنَاسِبَةَ.", "options": ["كَبُرَ", "شَرِبَ"], "answer": "كَبُرَ", "lang": "ar", "syllables": ["كَ", "بُ", "رَ"], "speech": "كَ . بُ . رَ. كَبُرَ", "writing": ["كَبُرَ"], "earlyReading": true, "visual": {"type": "picture", "value": "🌱"}}], "prereq": ["ar_more"], "guided": true, "criterion": "٤ مُحَاوَلَاتٍ صَحِيحَةٌ مِنْ ٥، دُونَ تَلْقِينٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "إِذَا تَرَدَّدَتْ، قُلْ: نُجَرِّبُ مَعًا، ثُمَّ نُعِيدُ الْمُحَاوَلَةَ بِمِثَالٍ أَسْهَلَ."}, {"subject": "arabic", "id": "ar_missing", "title": "نُكْمِلُ وَنُكَوِّنُ كَلِمَةً", "cards": [{"front": "كَ ـ ؟ ـ بَ", "word": "كَتَبَ", "detail": "نَسْمَعُ الْكَلِمَةَ، ثُمَّ نُكْمِلُ الْحَرْفَ النَّاقِصَ.", "q": "مَا الْجُزْءُ النَّاقِصُ فِي كَتَبَ؟", "options": ["تَ", "سَ", "مَ"], "answer": "تَ", "lang": "ar", "writing": ["كَتَبَ"]}, {"front": "رَ + سَ + مَ", "word": "رَسَمَ", "detail": "نَرَتِّبُ بِطَاقَاتِ الْحُرُوفِ مِنَ الْيَمِينِ إِلَى الْيَسَارِ.", "q": "مَا الْكَلِمَةُ الَّتِي نُكَوِّنُهَا؟", "options": ["رَسَمَ", "كَتَبَ"], "answer": "رَسَمَ", "lang": "ar", "writing": ["رَسَمَ"]}], "prereq": ["ar_read_a"], "guided": true, "criterion": "٤ مُحَاوَلَاتٍ صَحِيحَةٌ مِنْ ٥، دُونَ تَلْقِينٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "إِذَا تَرَدَّدَتْ، قُلْ: نُجَرِّبُ مَعًا، ثُمَّ نُعِيدُ الْمُحَاوَلَةَ بِمِثَالٍ أَسْهَلَ."}, {"subject": "arabic", "id": "ar_dictation", "title": "إِمْلَاءٌ قَصِيرٌ", "cards": [{"front": "🔊", "word": "كَتَبَ", "detail": "نَسْمَعُ الْكَلِمَةَ ثُمَّ نَكْتُبُهَا. نُظْهِرُ النَّمُوذَجَ عِنْدَ الْمُرَاجَعَةِ.", "q": "اِسْمَعِي وَاكْتُبِي.", "options": ["كَتَبَ", "رَسَمَ"], "answer": "كَتَبَ", "lang": "ar", "writing": ["كَتَبَ"], "practice": "dictation", "speech": "كَتَبَ"}, {"front": "🔊", "word": "رَسَمَ", "detail": "نَسْمَعُ الْكَلِمَةَ ثُمَّ نَكْتُبُهَا. نُظْهِرُ النَّمُوذَجَ عِنْدَ الْمُرَاجَعَةِ.", "q": "اِسْمَعِي وَاكْتُبِي.", "options": ["رَسَمَ", "كَتَبَ"], "answer": "رَسَمَ", "lang": "ar", "writing": ["رَسَمَ"], "practice": "dictation", "speech": "رَسَمَ"}, {"front": "🔊", "word": "دَرَسَ", "detail": "نَسْمَعُ الْكَلِمَةَ ثُمَّ نَكْتُبُهَا. نُظْهِرُ النَّمُوذَجَ عِنْدَ الْمُرَاجَعَةِ.", "q": "اِسْمَعِي وَاكْتُبِي.", "options": ["دَرَسَ", "رَسَمَ"], "answer": "دَرَسَ", "lang": "ar", "writing": ["دَرَسَ"], "practice": "dictation", "speech": "دَرَسَ"}], "prereq": ["ar_read_a", "ar_missing"], "guided": true, "criterion": "تَكْتُبُ كَلِمَتَيْنِ مِنْ ٣ مِنَ السَّمْعِ، وَتُصَحِّحُ بِالْمُرَاجَعَةِ، فِي يَوْمَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "إِذَا تَرَدَّدَتْ، قُلْ: نُجَرِّبُ مَعًا، ثُمَّ نُعِيدُ الْمُحَاوَلَةَ بِمِثَالٍ أَسْهَلَ."}, {"subject": "arabic", "id": "ar_sukun", "title": "السُّكُونُ: لَاحِقًا", "cards": [{"front": "دَ رْ س", "word": "دَرْس", "detail": "نَنْطِقُ الْحَرْفَ السَّاكِنَ مَعَ الْحَرْفِ الَّذِي قَبْلَهُ، دُونَ إِضَافَةِ حَرَكَةٍ.", "q": "اِخْتَارِي نَمُوذَجَ الدَّرْسِ.", "options": ["دَرْس", "كَتَبَ"], "answer": "دَرْس", "lang": "ar", "writing": ["دَرْس"], "speech": "دَرْس. نَنْطِقُ الرَّاءَ دُونَ فَتْحَةٍ أَوْ ضَمَّةٍ أَوْ كَسْرَةٍ."}], "prereq": ["ar_mix"], "guided": true, "criterion": "٤ مُحَاوَلَاتٍ صَحِيحَةٌ مِنْ ٥، دُونَ تَلْقِينٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "إِذَا تَرَدَّدَتْ، قُلْ: نُجَرِّبُ مَعًا، ثُمَّ نُعِيدُ الْمُحَاوَلَةَ بِمِثَالٍ أَسْهَلَ.", "optional": true}, {"subject": "arabic", "id": "ar_long", "title": "الْمَدُّ: لَاحِقًا", "cards": [{"front": "بَ / بَا", "word": "بَاب", "detail": "نُطِيلُ الصَّوْتَ مَعَ أَلِفِ الْمَدِّ. نُقَارِنُ بَ وَبَا.", "q": "اِخْتَارِي نَمُوذَجَ الدَّرْسِ.", "options": ["بَاب", "كَتَبَ"], "answer": "بَاب", "lang": "ar", "writing": ["بَاب"]}], "prereq": ["ar_sukun"], "guided": true, "criterion": "٤ مُحَاوَلَاتٍ صَحِيحَةٌ مِنْ ٥، دُونَ تَلْقِينٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "إِذَا تَرَدَّدَتْ، قُلْ: نُجَرِّبُ مَعًا، ثُمَّ نُعِيدُ الْمُحَاوَلَةَ بِمِثَالٍ أَسْهَلَ.", "optional": true}, {"subject": "arabic", "id": "ar_shadda", "title": "الشَّدَّةُ: لَاحِقًا", "cards": [{"front": "رْ + رَ", "word": "مَرَّ", "detail": "الشَّدَّةُ تُمَثِّلُ حَرْفَيْنِ: الْأَوَّلُ سَاكِنٌ وَالثَّانِي مُتَحَرِّكٌ.", "q": "اِخْتَارِي نَمُوذَجَ الدَّرْسِ.", "options": ["مَرَّ", "كَتَبَ"], "answer": "مَرَّ", "lang": "ar", "writing": ["مَرَّ"], "speech": "مَرَّ. الشَّدَّةُ عَلَى الرَّاء. رَاءٌ سَاكِنَةٌ ثُمَّ رَاءٌ مَفْتُوحَةٌ."}], "prereq": ["ar_sukun"], "guided": true, "criterion": "٤ مُحَاوَلَاتٍ صَحِيحَةٌ مِنْ ٥، دُونَ تَلْقِينٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "إِذَا تَرَدَّدَتْ، قُلْ: نُجَرِّبُ مَعًا، ثُمَّ نُعِيدُ الْمُحَاوَلَةَ بِمِثَالٍ أَسْهَلَ.", "optional": true}, {"subject": "arabic", "id": "ar_tanwin", "title": "التَّنْوِينُ: لَاحِقًا", "cards": [{"front": "كُتُبٌ", "word": "كُتُبٌ", "detail": "نَسْمَعُ نُونًا فِي آخِرِ الْكَلِمَةِ عِنْدَ الْوَصْلِ وَلَا نَكْتُبُ حَرْفَ نُونٍ.", "q": "اِخْتَارِي نَمُوذَجَ الدَّرْسِ.", "options": ["كُتُبٌ", "كَتَبَ"], "answer": "كُتُبٌ", "lang": "ar", "writing": ["كُتُبٌ"]}], "prereq": ["ar_mix"], "guided": true, "criterion": "٤ مُحَاوَلَاتٍ صَحِيحَةٌ مِنْ ٥، دُونَ تَلْقِينٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "إِذَا تَرَدَّدَتْ، قُلْ: نُجَرِّبُ مَعًا، ثُمَّ نُعِيدُ الْمُحَاوَلَةَ بِمِثَالٍ أَسْهَلَ.", "optional": true}, {"subject": "english", "id": "en_me", "title": "أُعَرِّفُ بِنَفْسِي", "cards": [{"front": "👧", "word": "My name is Roqaya.", "detail": "اسْمِي رُقَيَّة.", "q": "What is your name?", "options": ["My name is Roqaya.", "I am six years old."], "answer": "My name is Roqaya.", "lang": "en", "meaning": "اسْمِي رُقَيَّة.", "context": "عِنْدَ التَّعَارُفِ.", "variation": "My name is Eso.", "activity": "قُولَا اسْمَيْكُمَا بِالتَّبَادُلِ.", "dialogue": ["What is your name?", "My name is Roqaya."], "speech": "My name is Roqaya.", "writing": [], "practice": "oral", "visual": {"type": "picture", "value": "👧"}}, {"front": "🎂", "word": "I am six years old.", "detail": "عُمْرِي سِتُّ سَنَوَاتٍ.", "q": "How old are you?", "options": ["I am six years old.", "My name is Roqaya."], "answer": "I am six years old.", "lang": "en", "meaning": "عُمْرِي سِتُّ سَنَوَاتٍ.", "context": "عِنْدَ السُّؤَالِ عَنِ الْعُمْرِ.", "variation": "I am five years old.", "activity": "اِعُدِّي سِتَّةَ أَصَابِعَ مَعَ إِيسُو.", "dialogue": ["How old are you?", "I am six years old."], "speech": "I am six years old.", "writing": [], "practice": "oral", "visual": {"type": "picture", "value": "🎂"}}], "prereq": [], "guided": true, "criterion": "تَسْتَخْدِمُ جُمْلَتَيْنِ فِي مَوْقِفَيْنِ، دُونَ تَرْدِيدٍ خَلْفَ إِيسُو، فِي يَوْمَيْنِ.", "easier": "مَثِّلْ مَعْنَى الْجُمْلَةِ، ثُمَّ قُلْهَا بِبُطْءٍ وَاطْلُبْ تَرْدِيدَهَا.", "harder": "غَيِّرْ كَلِمَةً وَاحِدَةً فِي الْجُمْلَةِ وَمَثِّلْ مَوْقِفًا جَدِيدًا.", "mistake": "نُعِيدُ الْجُمْلَةَ الصَّحِيحَةَ بِلُطْفٍ، ثُمَّ نَتْرُكُ لَهَا فُرْصَةَ اسْتِخْدَامِهَا."}, {"subject": "english", "id": "en_family", "title": "أُسْرَتِي", "cards": [{"front": "👨", "word": "This is my dad.", "detail": "هَذَا أَبِي.", "q": "Look at the picture. Which sentence matches?", "options": ["This is my dad.", "This is my mum."], "answer": "This is my dad.", "lang": "en", "meaning": "هَذَا أَبِي.", "context": "عِنْدَ تَقْدِيمِ صُورَةٍ لِأَبِي.", "variation": "This is my mum.", "activity": "أَشِيرِي إِلَى صُورَةٍ عَائِلِيَّةٍ.", "dialogue": ["Who is this?", "This is my dad."], "speech": "This is my dad.", "writing": [], "practice": "oral", "visual": {"type": "picture", "value": "👨"}}, {"front": "👩", "word": "This is my mum.", "detail": "هَذِهِ أُمِّي.", "q": "Look at the picture. Which sentence matches?", "options": ["This is my mum.", "This is my dad."], "answer": "This is my mum.", "lang": "en", "meaning": "هَذِهِ أُمِّي.", "context": "عِنْدَ تَقْدِيمِ صُورَةٍ لِأُمِّي.", "variation": "This is my dad.", "activity": "بَدِّلَا الصُّوَرَ وَالْجُمَلَ.", "dialogue": ["Who is this?", "This is my mum."], "speech": "This is my mum.", "writing": [], "practice": "oral", "visual": {"type": "picture", "value": "👩"}}], "prereq": [], "guided": true, "criterion": "تَسْتَخْدِمُ جُمْلَتَيْنِ فِي مَوْقِفَيْنِ، دُونَ تَرْدِيدٍ خَلْفَ إِيسُو، فِي يَوْمَيْنِ.", "easier": "مَثِّلْ مَعْنَى الْجُمْلَةِ، ثُمَّ قُلْهَا بِبُطْءٍ وَاطْلُبْ تَرْدِيدَهَا.", "harder": "غَيِّرْ كَلِمَةً وَاحِدَةً فِي الْجُمْلَةِ وَمَثِّلْ مَوْقِفًا جَدِيدًا.", "mistake": "نُعِيدُ الْجُمْلَةَ الصَّحِيحَةَ بِلُطْفٍ، ثُمَّ نَتْرُكُ لَهَا فُرْصَةَ اسْتِخْدَامِهَا."}, {"subject": "english", "id": "en_toys", "title": "أَلْعَابِي وَأَلْوَانِي", "cards": [{"front": "🔴 ⚽", "word": "This is a red ball.", "detail": "هَذِهِ كُرَةٌ حَمْرَاءُ.", "q": "Look at the picture. Which sentence matches?", "options": ["This is a red ball.", "I have a teddy bear."], "answer": "This is a red ball.", "lang": "en", "meaning": "هَذِهِ كُرَةٌ حَمْرَاءُ.", "context": "عِنْدَ وَصْفِ لُعْبَةٍ.", "variation": "This is a blue ball.", "activity": "أَحْضِرَا كُرَةً وَغَيِّرَا اللَّوْنَ فِي الْجُمْلَةِ.", "dialogue": ["What is this?", "This is a red ball."], "speech": "This is a red ball.", "writing": [], "practice": "oral", "visual": {"type": "picture", "value": "🔴 ⚽"}}, {"front": "🧸", "word": "I have a teddy bear.", "detail": "لَدَيَّ دُبٌّ لُعْبَةٌ.", "q": "Look at the picture. Which sentence matches?", "options": ["I have a teddy bear.", "This is a red ball."], "answer": "I have a teddy bear.", "lang": "en", "meaning": "لَدَيَّ دُبٌّ لُعْبَةٌ.", "context": "عِنْدَ الْحَدِيثِ عَنِ الْأَلْعَابِ.", "variation": "I have a ball.", "activity": "كُلُّ وَاحِدٍ يُرِي الْآخَرَ لُعْبَتَهُ.", "dialogue": ["What do you have?", "I have a teddy bear."], "speech": "I have a teddy bear.", "writing": [], "practice": "oral", "visual": {"type": "picture", "value": "🧸"}}], "prereq": [], "guided": true, "criterion": "تَسْتَخْدِمُ جُمْلَتَيْنِ فِي مَوْقِفَيْنِ، دُونَ تَرْدِيدٍ خَلْفَ إِيسُو، فِي يَوْمَيْنِ.", "easier": "مَثِّلْ مَعْنَى الْجُمْلَةِ، ثُمَّ قُلْهَا بِبُطْءٍ وَاطْلُبْ تَرْدِيدَهَا.", "harder": "غَيِّرْ كَلِمَةً وَاحِدَةً فِي الْجُمْلَةِ وَمَثِّلْ مَوْقِفًا جَدِيدًا.", "mistake": "نُعِيدُ الْجُمْلَةَ الصَّحِيحَةَ بِلُطْفٍ، ثُمَّ نَتْرُكُ لَهَا فُرْصَةَ اسْتِخْدَامِهَا."}, {"subject": "english", "id": "en_food", "title": "طَعَامٌ أُحِبُّهُ", "cards": [{"front": "🍎", "word": "I like apples.", "detail": "أُحِبُّ التُّفَّاحَ.", "q": "Look at the picture. Which sentence matches?", "options": ["I like apples.", "I like bananas."], "answer": "I like apples.", "lang": "en", "meaning": "أُحِبُّ التُّفَّاحَ.", "context": "عِنْدَ الْحَدِيثِ عَنِ الطَّعَامِ.", "variation": "I like bananas.", "activity": "اِخْتَارِي فَاكِهَةً وَبَدِّلِي اسْمَهَا.", "dialogue": ["What do you like?", "I like apples."], "speech": "I like apples.", "writing": [], "practice": "oral", "visual": {"type": "picture", "value": "🍎"}}, {"front": "🍌", "word": "I like bananas.", "detail": "أُحِبُّ الْمَوْزَ.", "q": "Look at the picture. Which sentence matches?", "options": ["I like bananas.", "I like apples."], "answer": "I like bananas.", "lang": "en", "meaning": "أُحِبُّ الْمَوْزَ.", "context": "عِنْدَ اخْتِيَارِ وَجْبَةٍ خَفِيفَةٍ.", "variation": "I like apples.", "activity": "اِلْعَبَا دَوْرَ بَائِعِ الْفَاكِهَةِ وَالزَّبُونِ.", "dialogue": ["What do you like?", "I like bananas."], "speech": "I like bananas.", "writing": [], "practice": "oral", "visual": {"type": "picture", "value": "🍌"}}], "prereq": [], "guided": true, "criterion": "تَسْتَخْدِمُ جُمْلَتَيْنِ فِي مَوْقِفَيْنِ، دُونَ تَرْدِيدٍ خَلْفَ إِيسُو، فِي يَوْمَيْنِ.", "easier": "مَثِّلْ مَعْنَى الْجُمْلَةِ، ثُمَّ قُلْهَا بِبُطْءٍ وَاطْلُبْ تَرْدِيدَهَا.", "harder": "غَيِّرْ كَلِمَةً وَاحِدَةً فِي الْجُمْلَةِ وَمَثِّلْ مَوْقِفًا جَدِيدًا.", "mistake": "نُعِيدُ الْجُمْلَةَ الصَّحِيحَةَ بِلُطْفٍ، ثُمَّ نَتْرُكُ لَهَا فُرْصَةَ اسْتِخْدَامِهَا."}, {"subject": "english", "id": "en_please", "title": "أَطْلُبُ بِأَدَبٍ", "cards": [{"front": "💧", "word": "I want water, please.", "detail": "أُرِيدُ مَاءً، مِنْ فَضْلِكَ.", "q": "What do you want?", "options": ["I want water, please.", "Thank you."], "answer": "I want water, please.", "lang": "en", "meaning": "أُرِيدُ مَاءً، مِنْ فَضْلِكَ.", "context": "عِنْدَ الْعَطَشِ.", "variation": "I want milk, please.", "activity": "طَلَبٌ وَاسْتِجَابَةٌ: Here you are.", "dialogue": ["What do you want?", "I want water, please."], "speech": "I want water, please.", "writing": [], "practice": "oral", "visual": {"type": "picture", "value": "💧"}}, {"front": "🙏", "word": "Thank you.", "detail": "شُكْرًا لَكَ.", "q": "Here you are.", "options": ["Thank you.", "I want water, please."], "answer": "Thank you.", "lang": "en", "meaning": "شُكْرًا لَكَ.", "context": "بَعْدَ اسْتِلَامِ شَيْءٍ.", "variation": "You are welcome.", "activity": "تَبَادَلَا كُوبًا فَارِغًا وَقُولَا الْعِبَارَتَيْنِ.", "dialogue": ["Here you are.", "Thank you."], "speech": "Thank you.", "writing": [], "practice": "oral", "visual": {"type": "picture", "value": "🙏"}}], "prereq": [], "guided": true, "criterion": "تَسْتَخْدِمُ جُمْلَتَيْنِ فِي مَوْقِفَيْنِ، دُونَ تَرْدِيدٍ خَلْفَ إِيسُو، فِي يَوْمَيْنِ.", "easier": "مَثِّلْ مَعْنَى الْجُمْلَةِ، ثُمَّ قُلْهَا بِبُطْءٍ وَاطْلُبْ تَرْدِيدَهَا.", "harder": "غَيِّرْ كَلِمَةً وَاحِدَةً فِي الْجُمْلَةِ وَمَثِّلْ مَوْقِفًا جَدِيدًا.", "mistake": "نُعِيدُ الْجُمْلَةَ الصَّحِيحَةَ بِلُطْفٍ، ثُمَّ نَتْرُكُ لَهَا فُرْصَةَ اسْتِخْدَامِهَا."}, {"subject": "english", "id": "en_feelings", "title": "مَشَاعِرِي", "cards": [{"front": "😊", "word": "I feel happy.", "detail": "أَشْعُرُ بِالسَّعَادَةِ.", "q": "Look at the picture. Which sentence matches?", "options": ["I feel happy.", "I feel tired."], "answer": "I feel happy.", "lang": "en", "meaning": "أَشْعُرُ بِالسَّعَادَةِ.", "context": "عِنْدَ الْحَدِيثِ عَنْ شُعُورِكِ.", "variation": "I feel sad.", "activity": "مَثِّلَا الْوَجْهَ ثُمَّ قُولَا الْجُمْلَةَ.", "dialogue": ["How do you feel?", "I feel happy."], "speech": "I feel happy.", "writing": [], "practice": "oral", "visual": {"type": "picture", "value": "😊"}}, {"front": "😴", "word": "I feel tired.", "detail": "أَشْعُرُ بِالتَّعَبِ.", "q": "Look at the picture. Which sentence matches?", "options": ["I feel tired.", "I feel happy."], "answer": "I feel tired.", "lang": "en", "meaning": "أَشْعُرُ بِالتَّعَبِ.", "context": "عِنْدَ الِاحْتِيَاجِ إِلَى اسْتِرَاحَةٍ.", "variation": "I feel happy.", "activity": "مَثِّلِي التَّعَبَ وَاطْلُبِي اسْتِرَاحَةً.", "dialogue": ["How do you feel?", "I feel tired."], "speech": "I feel tired.", "writing": [], "practice": "oral", "visual": {"type": "picture", "value": "😴"}}], "prereq": [], "guided": true, "criterion": "تَسْتَخْدِمُ جُمْلَتَيْنِ فِي مَوْقِفَيْنِ، دُونَ تَرْدِيدٍ خَلْفَ إِيسُو، فِي يَوْمَيْنِ.", "easier": "مَثِّلْ مَعْنَى الْجُمْلَةِ، ثُمَّ قُلْهَا بِبُطْءٍ وَاطْلُبْ تَرْدِيدَهَا.", "harder": "غَيِّرْ كَلِمَةً وَاحِدَةً فِي الْجُمْلَةِ وَمَثِّلْ مَوْقِفًا جَدِيدًا.", "mistake": "نُعِيدُ الْجُمْلَةَ الصَّحِيحَةَ بِلُطْفٍ، ثُمَّ نَتْرُكُ لَهَا فُرْصَةَ اسْتِخْدَامِهَا."}, {"subject": "english", "id": "en_help", "title": "أَتَكَلَّمُ فِي يَوْمِي", "cards": [{"front": "🤝", "word": "Help me, please.", "detail": "سَاعِدْنِي، مِنْ فَضْلِكَ.", "q": "What can you say when you need help?", "options": ["Help me, please.", "Goodbye."], "answer": "Help me, please.", "lang": "en", "meaning": "سَاعِدْنِي، مِنْ فَضْلِكَ.", "context": "عِنْدَ صُعُوبَةِ مُهِمَّةٍ.", "variation": "Thank you.", "activity": "اُطْلُبِي مُسَاعَدَةً فِي فَتْحِ عُلْبَةٍ.", "dialogue": ["What can you say when you need help?", "Help me, please."], "speech": "Help me, please.", "writing": [], "practice": "oral", "visual": {"type": "picture", "value": "🤝"}}, {"front": "👋", "word": "Goodbye.", "detail": "إِلَى اللِّقَاءِ.", "q": "What can you say when you leave?", "options": ["Goodbye.", "Help me, please."], "answer": "Goodbye.", "lang": "en", "meaning": "إِلَى اللِّقَاءِ.", "context": "عِنْدَ نِهَايَةِ اللِّقَاءِ.", "variation": "Hello.", "activity": "مَثِّلَا بَدَايَةَ اللِّقَاءِ وَنِهَايَتَهُ.", "dialogue": ["What can you say when you leave?", "Goodbye."], "speech": "Goodbye.", "writing": [], "practice": "oral", "visual": {"type": "picture", "value": "👋"}}], "prereq": [], "guided": true, "criterion": "تَسْتَخْدِمُ جُمْلَتَيْنِ فِي مَوْقِفَيْنِ، دُونَ تَرْدِيدٍ خَلْفَ إِيسُو، فِي يَوْمَيْنِ.", "easier": "مَثِّلْ مَعْنَى الْجُمْلَةِ، ثُمَّ قُلْهَا بِبُطْءٍ وَاطْلُبْ تَرْدِيدَهَا.", "harder": "غَيِّرْ كَلِمَةً وَاحِدَةً فِي الْجُمْلَةِ وَمَثِّلْ مَوْقِفًا جَدِيدًا.", "mistake": "نُعِيدُ الْجُمْلَةَ الصَّحِيحَةَ بِلُطْفٍ، ثُمَّ نَتْرُكُ لَهَا فُرْصَةَ اسْتِخْدَامِهَا."}, {"subject": "math", "id": "math_count", "title": "نَعُدُّ وَنَفْهَمُ الصِّفْرَ", "cards": [{"front": "0", "word": "0", "detail": "الْمَجْمُوعَةُ فَارِغَةٌ: عَدَدُ الْمُكَعَّبَاتِ صِفْرٌ.", "q": "كَمْ مُكَعَّبًا تَرَيْنَ؟", "options": ["0", "1", "2"], "answer": "0", "lang": "ar", "visual": {"type": "quantity", "counts": [0]}, "writing": ["0"]}, {"front": "1", "word": "1", "detail": "نَلْمَسُ كُلَّ مُكَعَّبٍ مَرَّةً وَاحِدَةً؛ آخِرُ عَدَدٍ نَقُولُهُ يُخْبِرُنَا بِالْكَمِّيَّةِ.", "q": "كَمْ مُكَعَّبًا تَرَيْنَ؟", "options": ["1", "2", "3"], "answer": "1", "lang": "ar", "visual": {"type": "quantity", "counts": [1]}, "writing": ["1"]}, {"front": "2", "word": "2", "detail": "نَلْمَسُ كُلَّ مُكَعَّبٍ مَرَّةً وَاحِدَةً وَنَعُدُّ. آخِرُ عَدَدٍ نَقُولُهُ يُخْبِرُنَا بِعَدَدِ الْمُكَعَّبَاتِ.", "q": "كَمْ مُكَعَّبًا تَرَيْنَ؟", "options": ["2", "3", "1"], "answer": "2", "lang": "ar", "visual": {"type": "quantity", "counts": [2]}, "writing": ["2"]}, {"front": "3", "word": "3", "detail": "نَلْمَسُ كُلَّ مُكَعَّبٍ مَرَّةً وَاحِدَةً؛ آخِرُ عَدَدٍ نَقُولُهُ يُخْبِرُنَا بِالْكَمِّيَّةِ.", "q": "كَمْ مُكَعَّبًا تَرَيْنَ؟", "options": ["3", "4", "5"], "answer": "3", "lang": "ar", "visual": {"type": "quantity", "counts": [3]}, "writing": ["3"]}, {"front": "4", "word": "4", "detail": "نَلْمَسُ كُلَّ مُكَعَّبٍ مَرَّةً وَاحِدَةً وَنَعُدُّ. آخِرُ عَدَدٍ نَقُولُهُ يُخْبِرُنَا بِعَدَدِ الْمُكَعَّبَاتِ.", "q": "كَمْ مُكَعَّبًا تَرَيْنَ؟", "options": ["4", "5", "3"], "answer": "4", "lang": "ar", "visual": {"type": "quantity", "counts": [4]}, "writing": ["4"]}, {"front": "5", "word": "5", "detail": "نَلْمَسُ كُلَّ مُكَعَّبٍ مَرَّةً وَاحِدَةً؛ آخِرُ عَدَدٍ نَقُولُهُ يُخْبِرُنَا بِالْكَمِّيَّةِ.", "q": "كَمْ مُكَعَّبًا تَرَيْنَ؟", "options": ["5", "0", "1"], "answer": "5", "lang": "ar", "visual": {"type": "quantity", "counts": [5]}, "writing": ["5"]}], "prereq": [], "guided": true, "criterion": "٤ مُحَاوَلَاتٍ صَحِيحَةٌ مِنْ ٥، دُونَ تَلْقِينٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "نَنْقُلُ كُلَّ قِطْعَةٍ إِلَى جَانِبٍ بَعْدَ عَدِّهَا حَتَّى لَا نَعُدَّهَا مَرَّتَيْنِ."}, {"subject": "math", "id": "math_groups", "title": "أَكْثَرُ وَأَقَلُّ وَمُتَسَاوٍ", "cards": [{"front": "", "word": "الْيُمْنَى أَكْثَرُ", "detail": "نُقَابِلُ كُلَّ قِطْعَةٍ بِقِطْعَةٍ؛ تَبْقَى قِطَعٌ فِي الْمَجْمُوعَةِ الْيُمْنَى.", "q": "قَارِنِي عَدَدَ الْقِطَعِ فِي الْمَجْمُوعَتَيْنِ.", "options": ["الْيُمْنَى أَكْثَرُ", "الْيُسْرَى أَكْثَرُ", "مُتَسَاوِيَتَانِ"], "answer": "الْيُمْنَى أَكْثَرُ", "lang": "ar", "visual": {"type": "quantity", "counts": [2, 4]}, "writing": []}, {"front": "", "word": "الْيُسْرَى أَكْثَرُ", "detail": "تَبْقَى قِطَعٌ فِي الْمَجْمُوعَةِ الْيُسْرَى.", "q": "قَارِنِي عَدَدَ الْقِطَعِ فِي الْمَجْمُوعَتَيْنِ.", "options": ["الْيُمْنَى أَكْثَرُ", "الْيُسْرَى أَكْثَرُ", "مُتَسَاوِيَتَانِ"], "answer": "الْيُسْرَى أَكْثَرُ", "lang": "ar", "visual": {"type": "quantity", "counts": [3, 1]}, "writing": []}, {"front": "", "word": "مُتَسَاوِيَتَانِ", "detail": "لِكُلِّ قِطْعَةٍ قِطْعَةٌ تُقَابِلُهَا.", "q": "قَارِنِي عَدَدَ الْقِطَعِ فِي الْمَجْمُوعَتَيْنِ.", "options": ["الْيُمْنَى أَكْثَرُ", "الْيُسْرَى أَكْثَرُ", "مُتَسَاوِيَتَانِ"], "answer": "مُتَسَاوِيَتَانِ", "lang": "ar", "visual": {"type": "quantity", "counts": [3, 3]}, "writing": []}], "prereq": ["math_count"], "guided": true, "criterion": "٤ مُحَاوَلَاتٍ صَحِيحَةٌ مِنْ ٥، دُونَ تَلْقِينٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "إِذَا تَرَدَّدَتْ، قُلْ: نُجَرِّبُ مَعًا، ثُمَّ نُعِيدُ الْمُحَاوَلَةَ بِمِثَالٍ أَسْهَلَ."}, {"subject": "math", "id": "math_order", "title": "السَّابِقُ وَالتَّالِي", "cards": [{"front": "6", "word": "6", "detail": "نَلْمَسُ كُلَّ مُكَعَّبٍ مَرَّةً وَاحِدَةً وَنَعُدُّ. آخِرُ عَدَدٍ نَقُولُهُ يُخْبِرُنَا بِعَدَدِ الْمُكَعَّبَاتِ.", "q": "كَمْ مُكَعَّبًا تَرَيْنَ؟", "options": ["6", "7", "5"], "answer": "6", "lang": "ar", "visual": {"type": "quantity", "counts": [6]}, "writing": ["6"]}, {"front": "7", "word": "7", "detail": "نَلْمَسُ كُلَّ مُكَعَّبٍ مَرَّةً وَاحِدَةً وَنَعُدُّ. آخِرُ عَدَدٍ نَقُولُهُ يُخْبِرُنَا بِعَدَدِ الْمُكَعَّبَاتِ.", "q": "كَمْ مُكَعَّبًا تَرَيْنَ؟", "options": ["7", "8", "6"], "answer": "7", "lang": "ar", "visual": {"type": "quantity", "counts": [7]}, "writing": ["7"]}, {"front": "8", "word": "8", "detail": "نَلْمَسُ كُلَّ مُكَعَّبٍ مَرَّةً وَاحِدَةً وَنَعُدُّ. آخِرُ عَدَدٍ نَقُولُهُ يُخْبِرُنَا بِعَدَدِ الْمُكَعَّبَاتِ.", "q": "كَمْ مُكَعَّبًا تَرَيْنَ؟", "options": ["8", "9", "7"], "answer": "8", "lang": "ar", "visual": {"type": "quantity", "counts": [8]}, "writing": ["8"]}, {"front": "9", "word": "9", "detail": "نَلْمَسُ كُلَّ مُكَعَّبٍ مَرَّةً وَاحِدَةً وَنَعُدُّ. آخِرُ عَدَدٍ نَقُولُهُ يُخْبِرُنَا بِعَدَدِ الْمُكَعَّبَاتِ.", "q": "كَمْ مُكَعَّبًا تَرَيْنَ؟", "options": ["9", "10", "8"], "answer": "9", "lang": "ar", "visual": {"type": "quantity", "counts": [9]}, "writing": ["9"]}, {"front": "10", "word": "10", "detail": "نَلْمَسُ كُلَّ مُكَعَّبٍ مَرَّةً وَاحِدَةً وَنَعُدُّ. آخِرُ عَدَدٍ نَقُولُهُ يُخْبِرُنَا بِعَدَدِ الْمُكَعَّبَاتِ.", "q": "كَمْ مُكَعَّبًا تَرَيْنَ؟", "options": ["10", "11", "9"], "answer": "10", "lang": "ar", "visual": {"type": "quantity", "counts": [10]}, "writing": ["10"]}, {"front": "2 ؟ 4", "word": "3", "detail": "نَعُدُّ: اثْنَانِ، ثَلَاثَةٌ، أَرْبَعَةٌ.", "q": "مَا الْعَدَدُ النَّاقِصُ؟", "options": ["1", "3", "5"], "answer": "3", "lang": "ar", "writing": ["3"], "visual": {"type": "sequence", "items": ["2", "؟", "4"]}}, {"front": "5 6 ؟", "word": "7", "detail": "نَزِيدُ خُطْوَةً وَاحِدَةً عَلَى خَطِّ الْأَعْدَادِ.", "q": "مَا الْعَدَدُ التَّالِي؟", "options": ["4", "7", "8"], "answer": "7", "lang": "ar", "writing": ["7"], "visual": {"type": "sequence", "items": ["5", "6", "؟"]}}, {"front": "؟ 8 9", "word": "7", "detail": "نَرْجِعُ خُطْوَةً وَاحِدَةً.", "q": "مَا الْعَدَدُ السَّابِقُ لِثَمَانِيَةٍ؟", "options": ["7", "9", "10"], "answer": "7", "lang": "ar", "writing": ["7"], "visual": {"type": "sequence", "items": ["؟", "8", "9"]}}], "prereq": ["math_count"], "guided": true, "criterion": "٤ مُحَاوَلَاتٍ صَحِيحَةٌ مِنْ ٥، دُونَ تَلْقِينٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "إِذَا تَرَدَّدَتْ، قُلْ: نُجَرِّبُ مَعًا، ثُمَّ نُعِيدُ الْمُحَاوَلَةَ بِمِثَالٍ أَسْهَلَ."}, {"subject": "math", "id": "math_8_11", "title": "لِمَاذَا ١١ أَكْبَرُ مِنْ ٨؟", "cards": [{"front": "", "word": "11", "detail": "نُقَارِنُ الْكَمِّيَّتَيْنِ وَنَعُدُّ الْقِطَعَ الزَّائِدَةَ.", "q": "أَيُّ الْعَدَدَيْنِ أَكْبَرُ؟", "options": ["8", "11"], "answer": "11", "lang": "ar", "visual": {"type": "quantity", "counts": [8, 11], "labels": true}, "writing": []}, {"front": "", "word": "12", "detail": "نُقَارِنُ الْكَمِّيَّتَيْنِ وَنَعُدُّ الْقِطَعَ الزَّائِدَةَ.", "q": "أَيُّ الْعَدَدَيْنِ أَكْبَرُ؟", "options": ["9", "12"], "answer": "12", "lang": "ar", "visual": {"type": "quantity", "counts": [9, 12], "labels": true}, "writing": []}, {"front": "", "word": "10", "detail": "نُقَارِنُ الْكَمِّيَّتَيْنِ وَنَعُدُّ الْقِطَعَ الزَّائِدَةَ.", "q": "أَيُّ الْعَدَدَيْنِ أَكْبَرُ؟", "options": ["10", "7"], "answer": "10", "lang": "ar", "visual": {"type": "quantity", "counts": [10, 7], "labels": true}, "writing": []}], "prereq": ["math_groups", "math_order"], "guided": true, "criterion": "٤ مُحَاوَلَاتٍ صَحِيحَةٌ مِنْ ٥، دُونَ تَلْقِينٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "لَا نُقَارِنُ ٨ بِالرَّقْمِ الْأَخِيرِ مِنْ ١١؛ نُمَثِّلُ الْعَدَدَ كُلَّهُ بِالْقِطَعِ."}, {"subject": "math", "id": "math_symbols", "title": "عَلَامَاتُ الْمُقَارَنَةِ", "cards": [{"front": "3 < 5", "word": "3 < 5", "detail": "الْفَتْحَةُ الْوَاسِعَةُ تَتَّجِهُ نَحْوَ الْعَدَدِ الْأَكْبَرِ، وَعَلَامَةُ = لِلتَّسَاوِي.", "q": "3 ؟ 5", "options": [">", "<", "="], "answer": "<", "lang": "ar", "visual": {"type": "quantity", "counts": [3, 5], "labels": true}, "writing": []}, {"front": "8 > 2", "word": "8 > 2", "detail": "الْفَتْحَةُ الْوَاسِعَةُ تَتَّجِهُ نَحْوَ الْعَدَدِ الْأَكْبَرِ، وَعَلَامَةُ = لِلتَّسَاوِي.", "q": "8 ؟ 2", "options": [">", "<", "="], "answer": ">", "lang": "ar", "visual": {"type": "quantity", "counts": [8, 2], "labels": true}, "writing": []}, {"front": "4 = 4", "word": "4 = 4", "detail": "الْفَتْحَةُ الْوَاسِعَةُ تَتَّجِهُ نَحْوَ الْعَدَدِ الْأَكْبَرِ، وَعَلَامَةُ = لِلتَّسَاوِي.", "q": "4 ؟ 4", "options": [">", "<", "="], "answer": "=", "lang": "ar", "visual": {"type": "quantity", "counts": [4, 4], "labels": true}, "writing": []}], "prereq": ["math_8_11"], "guided": true, "criterion": "٤ مُحَاوَلَاتٍ صَحِيحَةٌ مِنْ ٥، دُونَ تَلْقِينٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "إِذَا تَرَدَّدَتْ، قُلْ: نُجَرِّبُ مَعًا، ثُمَّ نُعِيدُ الْمُحَاوَلَةَ بِمِثَالٍ أَسْهَلَ."}, {"subject": "math", "id": "math_tens", "title": "الْآحَادُ وَالْعَشَرَاتُ", "cards": [{"front": "10", "word": "10", "detail": "10 = 10 + 0. نَجْمَعُ كُلَّ عَشْرِ قِطَعٍ فِي حُزْمَةٍ.", "q": "كَمْ عَشْرَةً فِي الْعَدَدِ؟", "options": ["1", "0", "10"], "answer": "1", "lang": "ar", "visual": {"type": "place", "value": 10}, "writing": ["10"]}, {"front": "24", "word": "24", "detail": "24 = 20 + 4. نَجْمَعُ كُلَّ عَشْرِ قِطَعٍ فِي حُزْمَةٍ.", "q": "كَمْ وَاحِدًا خَارِجَ حُزَمِ الْعَشَرَاتِ؟", "options": ["2", "4", "24"], "answer": "4", "lang": "ar", "visual": {"type": "place", "value": 24}, "writing": ["24"]}, {"front": "35", "word": "35", "detail": "35 = 30 + 5. نَجْمَعُ كُلَّ عَشْرِ قِطَعٍ فِي حُزْمَةٍ.", "q": "كَمْ عَشْرَةً فِي الْعَدَدِ؟", "options": ["3", "5", "35"], "answer": "3", "lang": "ar", "visual": {"type": "place", "value": 35}, "writing": ["35"]}], "prereq": ["math_8_11"], "guided": true, "criterion": "٤ مُحَاوَلَاتٍ صَحِيحَةٌ مِنْ ٥، دُونَ تَلْقِينٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "٢٤ لَيْسَ ٢ + ٤؛ قِيمَةُ الرَّقْمِ ٢ هِيَ عِشْرُونَ لِأَنَّهُ فِي خَانَةِ الْعَشَرَاتِ."}, {"subject": "math", "id": "math_compare2", "title": "نُقَارِنُ عَدَدَيْنِ مِنْ رَقْمَيْنِ", "cards": [{"front": "", "word": "21", "detail": "نُقَارِنُ الْعَشَرَاتِ أَوَّلًا. إِذَا تَسَاوَتْ، نُقَارِنُ الْآحَادَ.", "q": "أَيُّ الْعَدَدَيْنِ أَكْبَرُ؟", "options": ["19", "21"], "answer": "21", "lang": "ar", "visual": {"type": "comparePlace", "values": [19, 21]}, "writing": []}, {"front": "", "word": "35", "detail": "نُقَارِنُ الْعَشَرَاتِ أَوَّلًا. إِذَا تَسَاوَتْ، نُقَارِنُ الْآحَادَ.", "q": "أَيُّ الْعَدَدَيْنِ أَكْبَرُ؟", "options": ["35", "32"], "answer": "35", "lang": "ar", "visual": {"type": "comparePlace", "values": [35, 32]}, "writing": []}, {"front": "", "word": "40", "detail": "نُقَارِنُ الْعَشَرَاتِ أَوَّلًا. إِذَا تَسَاوَتْ، نُقَارِنُ الْآحَادَ.", "q": "أَيُّ الْعَدَدَيْنِ أَكْبَرُ؟", "options": ["40", "39"], "answer": "40", "lang": "ar", "visual": {"type": "comparePlace", "values": [40, 39]}, "writing": []}], "prereq": ["math_tens"], "guided": true, "criterion": "٤ مُحَاوَلَاتٍ صَحِيحَةٌ مِنْ ٥، دُونَ تَلْقِينٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "إِذَا تَرَدَّدَتْ، قُلْ: نُجَرِّبُ مَعًا، ثُمَّ نُعِيدُ الْمُحَاوَلَةَ بِمِثَالٍ أَسْهَلَ."}, {"subject": "math", "id": "math_hundreds", "title": "الْمِئَاتُ: عِنْدَ الِاسْتِعْدَادِ", "cards": [{"front": "123", "word": "123", "detail": "123 = 100 + 20 + 3. كُلُّ عَشْرِ عَشَرَاتٍ تَكُونُ مِئَةً.", "q": "كَمْ عَشْرَةً بَعْدَ الْمِئَةِ؟", "options": ["1", "2", "3"], "answer": "2", "lang": "ar", "visual": {"type": "place", "value": 123}, "writing": ["123"]}, {"front": "105", "word": "105", "detail": "105 = 100 + 0 + 5. كُلُّ عَشْرِ عَشَرَاتٍ تَكُونُ مِئَةً.", "q": "كَمْ عَشْرَةً خَارِجَ الْمِئَةِ؟", "options": ["0", "1", "5"], "answer": "0", "lang": "ar", "visual": {"type": "place", "value": 105}, "writing": ["105"]}, {"front": "210", "word": "210", "detail": "210 = 200 + 10 + 0. كُلُّ عَشْرِ عَشَرَاتٍ تَكُونُ مِئَةً.", "q": "كَمْ مِئَةً فِي الْعَدَدِ؟", "options": ["2", "1", "0"], "answer": "2", "lang": "ar", "visual": {"type": "place", "value": 210}, "writing": ["210"]}], "prereq": ["math_tens", "math_compare2"], "guided": true, "criterion": "٤ مُحَاوَلَاتٍ صَحِيحَةٌ مِنْ ٥، دُونَ تَلْقِينٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "فِي ١٠٥، الصِّفْرُ يَحْفَظُ مَكَانَ الْعَشَرَاتِ؛ الْعَدَدُ لَيْسَ ١٥.", "optional": true}, {"subject": "math", "id": "math_add5", "title": "نَجْمَعُ وَنَطْرَحُ دَاخِلَ 5", "cards": [{"front": "2 + 1", "word": "3", "detail": "الْكَمِّيَّةُ فِي الْبِدَايَةِ: 2. نُضِيفُ: 1. نَعُدُّ الْقِطَعَ لِنَعْرِفَ النَّتِيجَةَ.", "q": "2 + 1 = ؟", "options": ["3", "4", "2"], "answer": "3", "lang": "ar", "visual": {"type": "operation", "a": 2, "b": 1, "op": "+"}, "writing": ["3"]}, {"front": "3 − 1", "word": "2", "detail": "الْكَمِّيَّةُ فِي الْبِدَايَةِ: 3. نَأْخُذُ مِنْهَا: 1. نَعُدُّ الْقِطَعَ لِنَعْرِفَ النَّتِيجَةَ.", "q": "3 − 1 = ؟", "options": ["2", "3", "1"], "answer": "2", "lang": "ar", "visual": {"type": "operation", "a": 3, "b": 1, "op": "−"}, "writing": ["2"]}, {"front": "2 + 0", "word": "2", "detail": "الْكَمِّيَّةُ فِي الْبِدَايَةِ: 2. نُضِيفُ: 0. نَعُدُّ الْقِطَعَ لِنَعْرِفَ النَّتِيجَةَ.", "q": "2 + 0 = ؟", "options": ["2", "3", "1"], "answer": "2", "lang": "ar", "visual": {"type": "operation", "a": 2, "b": 0, "op": "+"}, "writing": ["2"]}, {"front": "3 − 3", "word": "0", "detail": "الْكَمِّيَّةُ فِي الْبِدَايَةِ: 3. نَأْخُذُ مِنْهَا: 3. نَعُدُّ الْقِطَعَ لِنَعْرِفَ النَّتِيجَةَ.", "q": "3 − 3 = ؟", "options": ["0", "1", "2"], "answer": "0", "lang": "ar", "visual": {"type": "operation", "a": 3, "b": 3, "op": "−"}, "writing": ["0"]}], "prereq": ["math_count"], "guided": true, "criterion": "٤ مُحَاوَلَاتٍ صَحِيحَةٌ مِنْ ٥، دُونَ تَلْقِينٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "الْجَمْعُ إِضَافَةٌ، وَالطَّرْحُ أَخْذٌ. نُمَثِّلُ الْقِصَّةَ بِالْقِطَعِ قَبْلَ اسْتِخْدَامِ الرُّمُوزِ."}, {"subject": "math", "id": "math_add10", "title": "نَجْمَعُ وَنَطْرَحُ دَاخِلَ 10", "cards": [{"front": "5 + 2", "word": "7", "detail": "الْكَمِّيَّةُ فِي الْبِدَايَةِ: 5. نُضِيفُ: 2. نَعُدُّ الْقِطَعَ لِنَعْرِفَ النَّتِيجَةَ.", "q": "5 + 2 = ؟", "options": ["7", "8", "6"], "answer": "7", "lang": "ar", "visual": {"type": "operation", "a": 5, "b": 2, "op": "+"}, "writing": ["7"]}, {"front": "9 − 3", "word": "6", "detail": "الْكَمِّيَّةُ فِي الْبِدَايَةِ: 9. نَأْخُذُ مِنْهَا: 3. نَعُدُّ الْقِطَعَ لِنَعْرِفَ النَّتِيجَةَ.", "q": "9 − 3 = ؟", "options": ["6", "7", "5"], "answer": "6", "lang": "ar", "visual": {"type": "operation", "a": 9, "b": 3, "op": "−"}, "writing": ["6"]}, {"front": "7 − 0", "word": "7", "detail": "الْكَمِّيَّةُ فِي الْبِدَايَةِ: 7. نَأْخُذُ مِنْهَا: 0. نَعُدُّ الْقِطَعَ لِنَعْرِفَ النَّتِيجَةَ.", "q": "7 − 0 = ؟", "options": ["7", "8", "6"], "answer": "7", "lang": "ar", "visual": {"type": "operation", "a": 7, "b": 0, "op": "−"}, "writing": ["7"]}], "prereq": ["math_add5"], "guided": true, "criterion": "٤ مُحَاوَلَاتٍ صَحِيحَةٌ مِنْ ٥، دُونَ تَلْقِينٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "الْجَمْعُ إِضَافَةٌ، وَالطَّرْحُ أَخْذٌ. نُمَثِّلُ الْقِصَّةَ بِالْقِطَعِ قَبْلَ اسْتِخْدَامِ الرُّمُوزِ."}, {"subject": "math", "id": "math_add20", "title": "نَجْمَعُ وَنَطْرَحُ دَاخِلَ 20", "cards": [{"front": "10 + 4", "word": "14", "detail": "الْكَمِّيَّةُ فِي الْبِدَايَةِ: 10. نُضِيفُ: 4. نَعُدُّ الْقِطَعَ لِنَعْرِفَ النَّتِيجَةَ.", "q": "10 + 4 = ؟", "options": ["14", "15", "13"], "answer": "14", "lang": "ar", "visual": {"type": "operation", "a": 10, "b": 4, "op": "+"}, "writing": ["14"]}, {"front": "18 − 5", "word": "13", "detail": "الْكَمِّيَّةُ فِي الْبِدَايَةِ: 18. نَأْخُذُ مِنْهَا: 5. نَعُدُّ الْقِطَعَ لِنَعْرِفَ النَّتِيجَةَ.", "q": "18 − 5 = ؟", "options": ["13", "14", "12"], "answer": "13", "lang": "ar", "visual": {"type": "operation", "a": 18, "b": 5, "op": "−"}, "writing": ["13"]}, {"front": "12 + 0", "word": "12", "detail": "الْكَمِّيَّةُ فِي الْبِدَايَةِ: 12. نُضِيفُ: 0. نَعُدُّ الْقِطَعَ لِنَعْرِفَ النَّتِيجَةَ.", "q": "12 + 0 = ؟", "options": ["12", "13", "11"], "answer": "12", "lang": "ar", "visual": {"type": "operation", "a": 12, "b": 0, "op": "+"}, "writing": ["12"]}], "prereq": ["math_add10"], "guided": true, "criterion": "٤ مُحَاوَلَاتٍ صَحِيحَةٌ مِنْ ٥، دُونَ تَلْقِينٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "الْجَمْعُ إِضَافَةٌ، وَالطَّرْحُ أَخْذٌ. نُمَثِّلُ الْقِصَّةَ بِالْقِطَعِ قَبْلَ اسْتِخْدَامِ الرُّمُوزِ."}, {"subject": "art", "id": "art_lines", "title": "أَتَحَكَّمُ بِالْقَلَمِ", "cards": [{"front": "🎨", "word": "خُطُوطٌ وَدَوَائِرُ", "detail": "أَضِيفِي لَمْسَتَكِ وَاخْتَارِي أَلْوَانَكِ.", "q": "مَا الَّذِي نَرْسُمُهُ فِي هَذَا النَّشَاطِ؟", "options": ["خُطُوطٌ وَدَوَائِرُ", "الْحَرْفُ ب"], "answer": "خُطُوطٌ وَدَوَائِرُ", "lang": "ar", "steps": ["نَرْسُمُ خَطًّا مُسْتَقِيمًا.", "نَرْسُمُ خَطًّا مَائِلًا.", "نَرْسُمُ خَطًّا مُتَعَرِّجًا.", "نَرْسُمُ دَائِرَةً."], "drawOps": [[["line", 25, 30, 125, 30]], [["line", 35, 100, 115, 60]], [["line", 25, 145, 50, 120, 75, 145, 100, 120, 125, 145]], [["circle", 210, 95, 45]]], "shapes": "خُطُوطٌ وَدَائِرَةٌ", "colorTip": "لَوِّنِي كُلَّ خَطٍّ بِلَوْنٍ تُحِبِّينَهُ.", "practice": "draw", "writing": [""], "visual": {"type": "drawing"}}, {"front": "🎨", "word": "أَشْكَالِي", "detail": "أَضِيفِي لَمْسَتَكِ وَاخْتَارِي أَلْوَانَكِ.", "q": "مَا الَّذِي نَرْسُمُهُ فِي هَذَا النَّشَاطِ؟", "options": ["أَشْكَالِي", "الْحَرْفُ ب"], "answer": "أَشْكَالِي", "lang": "ar", "steps": ["نَرْسُمُ دَائِرَةً.", "نَرْسُمُ مُرَبَّعًا.", "نَرْسُمُ مُثَلَّثًا.", "نَرْسُمُ مُسْتَطِيلًا وَشَكْلًا بَيْضَاوِيًّا."], "drawOps": [[["circle", 55, 50, 25]], [["rect", 115, 25, 50, 50]], [["line", 225, 20, 195, 75, 255, 75, 225, 20]], [["rect", 25, 120, 85, 40], ["ellipse", 215, 140, 45, 23]]], "shapes": "دَائِرَةٌ، مُرَبَّعٌ، مُثَلَّثٌ، مُسْتَطِيلٌ، شَكْلٌ بَيْضَاوِيٌّ", "colorTip": "جَرِّبِي أَلْوَانًا مُخْتَلِفَةً.", "practice": "draw", "writing": [""], "visual": {"type": "drawing"}}], "prereq": [], "guided": true, "criterion": "تُقَلِّدُ ٣ أَنْوَاعٍ مِنَ الْخُطُوطِ وَدَائِرَةً بِرَاحَةٍ فِي يَوْمَيْنِ.", "easier": "اِرْسُمَا بِالْإِصْبَعِ فِي الْهَوَاءِ ثُمَّ عَلَى وَرَقَةٍ كَبِيرَةٍ.", "harder": "رَكِّبِي الْخُطُوطَ لِتَكْوِينِ شَكْلٍ مِنْ خَيَالِكِ.", "mistake": "إِذَا تَرَدَّدَتْ، قُلْ: نُجَرِّبُ مَعًا، ثُمَّ نُعِيدُ الْمُحَاوَلَةَ بِمِثَالٍ أَسْهَلَ."}, {"subject": "art", "id": "art_objects", "title": "نُرَكِّبُ الْأَشْكَالَ", "cards": [{"front": "🎨", "word": "بَيْتٌ", "detail": "أَضِيفِي لَمْسَتَكِ وَاخْتَارِي أَلْوَانَكِ.", "q": "مَا الَّذِي نَرْسُمُهُ فِي هَذَا النَّشَاطِ؟", "options": ["بَيْتٌ", "الْحَرْفُ ب"], "answer": "بَيْتٌ", "lang": "ar", "steps": ["مُرَبَّعٌ لِلْبَيْتِ.", "مُثَلَّثٌ لِلسَّقْفِ.", "مُسْتَطِيلٌ لِلْبَابِ.", "نَافِذَتَانِ.", "نُضِيفُ شَمْسًا وَنُلَوِّنُ."], "drawOps": [[["rect", 90, 75, 120, 100]], [["line", 75, 75, 150, 20, 225, 75, 75, 75]], [["rect", 140, 120, 25, 55]], [["rect", 105, 95, 20, 20], ["rect", 175, 95, 20, 20]], [["circle", 255, 35, 17]]], "shapes": "مُرَبَّعٌ وَمُثَلَّثٌ وَمُسْتَطِيلٌ وَدَائِرَةٌ", "colorTip": "جَرِّبِي سَقْفًا أَحْمَرَ وَجُدْرَانًا صَفْرَاءَ.", "practice": "draw", "writing": [""], "visual": {"type": "drawing"}}, {"front": "🎨", "word": "شَمْسٌ", "detail": "أَضِيفِي لَمْسَتَكِ وَاخْتَارِي أَلْوَانَكِ.", "q": "مَا الَّذِي نَرْسُمُهُ فِي هَذَا النَّشَاطِ؟", "options": ["شَمْسٌ", "الْحَرْفُ ب"], "answer": "شَمْسٌ", "lang": "ar", "steps": ["نَرْسُمُ دَائِرَةً.", "نُضِيفُ أَشِعَّةً فَوْقَهَا وَتَحْتَهَا.", "نُضِيفُ أَشِعَّةً عَلَى الْجَانِبَيْنِ.", "نَرْسُمُ وَجْهًا مُبْتَسِمًا."], "drawOps": [[["circle", 150, 100, 45]], [["line", 150, 20, 150, 45], ["line", 150, 155, 150, 180]], [["line", 65, 100, 95, 100], ["line", 205, 100, 235, 100]], [["circle", 135, 90, 4], ["circle", 165, 90, 4], ["line", 130, 112, 150, 124, 170, 112]]], "shapes": "دَائِرَةٌ وَخُطُوطٌ", "colorTip": "اِخْتَارِي الْأَصْفَرَ أَوِ الْبُرْتُقَالِيَّ.", "practice": "draw", "writing": [""], "visual": {"type": "drawing"}}, {"front": "🎨", "word": "شَجَرَةٌ", "detail": "أَضِيفِي لَمْسَتَكِ وَاخْتَارِي أَلْوَانَكِ.", "q": "مَا الَّذِي نَرْسُمُهُ فِي هَذَا النَّشَاطِ؟", "options": ["شَجَرَةٌ", "الْحَرْفُ ب"], "answer": "شَجَرَةٌ", "lang": "ar", "steps": ["مُسْتَطِيلٌ لِلْجِذْعِ.", "دَائِرَةٌ لِلْأَوْرَاقِ.", "دَائِرَتَانِ إِضَافِيَّتَانِ.", "نُضِيفُ ثِمَارًا وَأَرْضًا."], "drawOps": [[["rect", 140, 100, 25, 80]], [["circle", 150, 65, 35]], [["circle", 120, 95, 30], ["circle", 185, 95, 30]], [["circle", 120, 80, 6], ["circle", 170, 55, 6], ["line", 50, 180, 250, 180]]], "shapes": "مُسْتَطِيلٌ وَدَوَائِرُ", "colorTip": "لَوِّنِي الْأَوْرَاقَ كَمَا تَتَخَيَّلِينَ الْفَصْلَ.", "practice": "draw", "writing": [""], "visual": {"type": "drawing"}}, {"front": "🎨", "word": "زَهْرَةٌ", "detail": "أَضِيفِي لَمْسَتَكِ وَاخْتَارِي أَلْوَانَكِ.", "q": "مَا الَّذِي نَرْسُمُهُ فِي هَذَا النَّشَاطِ؟", "options": ["زَهْرَةٌ", "الْحَرْفُ ب"], "answer": "زَهْرَةٌ", "lang": "ar", "steps": ["دَائِرَةٌ فِي الْوَسَطِ.", "بَتَلَتَانِ فَوْقَ وَتَحْتَ.", "بَتَلَتَانِ عَلَى الْجَانِبَيْنِ.", "سَاقٌ وَوَرَقَةٌ."], "drawOps": [[["circle", 150, 75, 16]], [["ellipse", 150, 40, 15, 23], ["ellipse", 150, 110, 15, 23]], [["ellipse", 115, 75, 23, 15], ["ellipse", 185, 75, 23, 15]], [["line", 150, 128, 150, 185], ["ellipse", 170, 153, 20, 10]]], "shapes": "دَائِرَةٌ وَأَشْكَالٌ بَيْضَاوِيَّةٌ", "colorTip": "لَوِّنِي الْبَتَلَاتِ بِأَلْوَانٍ مِنِ اخْتِيَارِكِ.", "practice": "draw", "writing": [""], "visual": {"type": "drawing"}}, {"front": "🎨", "word": "وَجْهٌ", "detail": "أَضِيفِي لَمْسَتَكِ وَاخْتَارِي أَلْوَانَكِ.", "q": "مَا الَّذِي نَرْسُمُهُ فِي هَذَا النَّشَاطِ؟", "options": ["وَجْهٌ", "الْحَرْفُ ب"], "answer": "وَجْهٌ", "lang": "ar", "steps": ["دَائِرَةٌ لِلْوَجْهِ.", "دَائِرَتَانِ صَغِيرَتَانِ لِلْعَيْنَيْنِ.", "خَطٌّ صَغِيرٌ لِلْأَنْفِ.", "فَمٌ مُبْتَسِمٌ وَشَعْرٌ."], "drawOps": [[["circle", 150, 100, 65]], [["circle", 130, 85, 6], ["circle", 170, 85, 6]], [["line", 150, 95, 145, 115, 155, 115]], [["line", 120, 125, 150, 140, 180, 125], ["line", 100, 55, 120, 25, 140, 40, 160, 22, 190, 55]]], "shapes": "دَوَائِرُ وَخُطُوطٌ", "colorTip": "اِرْسُمِي شُعُورًا تُرِيدِينَ التَّعْبِيرَ عَنْهُ.", "practice": "draw", "writing": [""], "visual": {"type": "drawing"}}], "prereq": ["art_lines"], "guided": true, "criterion": "تُرَكِّبُ رَسْمَتَيْنِ مِنَ الْأَشْكَالِ وَتُضِيفُ تَفْصِيلًا مِنْ خَيَالِهَا.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "إِذَا تَرَدَّدَتْ، قُلْ: نُجَرِّبُ مَعًا، ثُمَّ نُعِيدُ الْمُحَاوَلَةَ بِمِثَالٍ أَسْهَلَ."}, {"subject": "art", "id": "art_animals", "title": "حَيَوَانَاتٌ بِخُطُوَاتٍ", "cards": [{"front": "🎨", "word": "سَمَكَةٌ", "detail": "أَضِيفِي لَمْسَتَكِ وَاخْتَارِي أَلْوَانَكِ.", "q": "مَا الَّذِي نَرْسُمُهُ فِي هَذَا النَّشَاطِ؟", "options": ["سَمَكَةٌ", "الْحَرْفُ ب"], "answer": "سَمَكَةٌ", "lang": "ar", "steps": ["شَكْلٌ بَيْضَاوِيٌّ لِلْجِسْمِ.", "مُثَلَّثٌ لِلذَّيْلِ.", "عَيْنٌ وَفَمٌ.", "زِعْنَفَةٌ وَفُقَاعَاتٌ."], "drawOps": [[["ellipse", 135, 100, 65, 40]], [["line", 195, 100, 245, 60, 245, 140, 195, 100]], [["circle", 95, 90, 5], ["line", 75, 108, 90, 108]], [["line", 130, 70, 155, 95, 120, 95], ["circle", 45, 70, 7], ["circle", 35, 45, 5]]], "shapes": "شَكْلٌ بَيْضَاوِيٌّ وَمُثَلَّثٌ وَدَوَائِرُ", "colorTip": "اِخْتَارِي لَوْنًا لِسَمَكَتِكِ.", "practice": "draw", "writing": [""], "visual": {"type": "drawing"}}, {"front": "🎨", "word": "قِطَّةٌ", "detail": "أَضِيفِي لَمْسَتَكِ وَاخْتَارِي أَلْوَانَكِ.", "q": "مَا الَّذِي نَرْسُمُهُ فِي هَذَا النَّشَاطِ؟", "options": ["قِطَّةٌ", "الْحَرْفُ ب"], "answer": "قِطَّةٌ", "lang": "ar", "steps": ["دَائِرَةٌ لِلرَّأْسِ.", "مُثَلَّثَانِ لِلْأُذُنَيْنِ.", "عَيْنَانِ وَأَنْفٌ.", "شَوَارِبُ وَفَمٌ."], "drawOps": [[["circle", 150, 105, 55]], [["line", 100, 75, 100, 25, 135, 55], ["line", 165, 55, 200, 25, 200, 75]], [["circle", 130, 90, 5], ["circle", 170, 90, 5], ["line", 142, 110, 158, 110, 150, 120, 142, 110]], [["line", 95, 112, 125, 118], ["line", 95, 130, 125, 126], ["line", 175, 118, 205, 112], ["line", 175, 126, 205, 130], ["line", 140, 133, 150, 140, 160, 133]]], "shapes": "دَائِرَةٌ وَمُثَلَّثَانِ وَخُطُوطٌ", "colorTip": "أَضِيفِي بُقَعًا أَوْ خُطُوطًا لِلْفَرْوِ.", "practice": "draw", "writing": [""], "visual": {"type": "drawing"}}, {"front": "🎨", "word": "أَرْنَبٌ", "detail": "أَضِيفِي لَمْسَتَكِ وَاخْتَارِي أَلْوَانَكِ.", "q": "مَا الَّذِي نَرْسُمُهُ فِي هَذَا النَّشَاطِ؟", "options": ["أَرْنَبٌ", "الْحَرْفُ ب"], "answer": "أَرْنَبٌ", "lang": "ar", "steps": ["دَائِرَةٌ لِلْوَجْهِ.", "أُذُنَانِ طَوِيلَتَانِ.", "عَيْنَانِ وَأَنْفٌ.", "شَوَارِبُ وَسِنَّانِ."], "drawOps": [[["circle", 150, 130, 50]], [["ellipse", 125, 60, 16, 50], ["ellipse", 175, 60, 16, 50]], [["circle", 132, 120, 5], ["circle", 168, 120, 5], ["circle", 150, 137, 5]], [["line", 90, 140, 125, 145], ["line", 175, 145, 210, 140], ["rect", 140, 149, 10, 17], ["rect", 150, 149, 10, 17]]], "shapes": "دَائِرَةٌ وَأَشْكَالٌ بَيْضَاوِيَّةٌ وَمُسْتَطِيلَانِ", "colorTip": "لَوِّنِي دَاخِلَ الْأُذُنَيْنِ بِلَوْنٍ فَاتِحٍ.", "practice": "draw", "writing": [""], "visual": {"type": "drawing"}}, {"front": "🎨", "word": "فَرَاشَةٌ", "detail": "أَضِيفِي لَمْسَتَكِ وَاخْتَارِي أَلْوَانَكِ.", "q": "مَا الَّذِي نَرْسُمُهُ فِي هَذَا النَّشَاطِ؟", "options": ["فَرَاشَةٌ", "الْحَرْفُ ب"], "answer": "فَرَاشَةٌ", "lang": "ar", "steps": ["شَكْلٌ بَيْضَاوِيٌّ لِلْجِسْمِ.", "جَنَاحَانِ فَوْقَ.", "جَنَاحَانِ تَحْتَ.", "قَرْنَا اسْتِشْعَارٍ وَزَخَارِفُ."], "drawOps": [[["ellipse", 150, 100, 13, 55]], [["ellipse", 107, 72, 32, 38], ["ellipse", 193, 72, 32, 38]], [["ellipse", 112, 132, 27, 28], ["ellipse", 188, 132, 27, 28]], [["line", 145, 48, 125, 25], ["line", 155, 48, 175, 25], ["circle", 105, 70, 10], ["circle", 195, 70, 10]]], "shapes": "أَشْكَالٌ بَيْضَاوِيَّةٌ وَدَوَائِرُ", "colorTip": "جَرِّبِي تَكْرَارَ لَوْنٍ عَلَى الْجَنَاحَيْنِ، أَوِ اخْتَارِي تَصْمِيمَكِ.", "practice": "draw", "writing": [""], "visual": {"type": "drawing"}}], "prereq": ["art_objects"], "guided": true, "criterion": "تَتَّبِعُ خُطُوَاتِ رَسْمَةٍ وَتُضِيفُ تَفْصِيلًا، دُونَ اشْتِرَاطِ مُطَابَقَةِ النَّمُوذَجِ.", "easier": "اِعْرِضْ خِيَارَيْنِ فَقَطْ، وَنَفِّذْ مِثَالًا ثُمَّ جَرِّبَا مَعًا.", "harder": "غَيِّرْ تَرْتِيبَ الْأَمْثِلَةِ وَاطْلُبْ مِنْهَا شَرْحَ اخْتِيَارِهَا.", "mistake": "إِذَا تَرَدَّدَتْ، قُلْ: نُجَرِّبُ مَعًا، ثُمَّ نُعِيدُ الْمُحَاوَلَةَ بِمِثَالٍ أَسْهَلَ."}];
for(const lesson of GUIDED_LESSONS)SUBJECTS.find(s=>s.id===lesson.subject).lessons.push(lesson);
const CURRICULUM = {"weeks": [{"title": "نَكْتَشِفُ بَدَايَتَنَا", "goal": "حُرُوفٌ أَسَاسِيَّةٌ، تَعَارُفٌ، عَدٌّ حَتَّى ٥، وَتَحَكُّمٌ بِالْقَلَمِ.", "lessons": ["ar_start", "en_me", "math_count", "art_lines"], "days": [{"name": "نَكْتَشِفُ", "lessons": ["ar_start", "math_count"], "minutes": 35, "materials": "خَمْسُ مُكَعَّبَاتٍ، وَرَقَةٌ، قَلَمٌ، وَبِطَاقَاتُ ب وَت وَم.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَلْعَبُ لِنَعْرِفَ مَا تُحِبِّينَ تَعَلُّمَهُ. يُمْكِنُ أَنْ نُحَاوِلَ مَعًا.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["اِفْتَحْ لُعْبَةَ الْبِدَايَةِ وَسَجِّلِ الْمُلَاحَظَاتِ دُونَ تَلْقِينٍ.", "أَشِرْ إِلَى ب وَت. قُلْ: أَيْنَ الْبَاءُ؟ نُقْطَةٌ تَحْتَ الْحَرْفِ.", "قُلْ: أَعْطِينِي ثَلَاثَ قِطَعٍ. تَلْمَسُ كُلَّ قِطْعَةٍ مَرَّةً.", "أَفْرِغِ الْمَجْمُوعَةَ وَقُلْ: لَمْ يَبْقَ شَيْءٌ؛ هَذَا صِفْرٌ.", "اِخْتَتِمْ بِاخْتِيَارِ نَشَاطٍ أَحَبَّتْهُ."], "checks": [["أَيْنَ ب؟", "تُشِيرُ إِلَى ب بَيْنَ ب وَت."], ["أَعْطِينِي ٣ قِطَعٍ.", "تُقَدِّمُ ثَلَاثَ قِطَعٍ."], ["كَمْ قِطْعَةً فِي الْمَجْمُوعَةِ الْفَارِغَةِ؟", "صِفْرٌ."]]}, {"name": "نَتَكَلَّمُ وَنَرْسُمُ", "lessons": ["en_me", "art_lines"], "minutes": 35, "materials": "دُمْيَةٌ، وَرَقٌ، وَقَلَمُ تَلْوِينٍ عَرِيضٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "My name is Eso. What is your name? ثُمَّ نَرْسُمُ خُطُوطًا تَسِيرُ مِثْلَ الطَّرِيقِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["اِسْتَخْدِمِ الدُّمْيَةَ لِتَقْدِيمِ نَفْسِكَ بِالْإِنْجِلِيزِيَّةِ.", "قُلِ الْجُمْلَةَ ثُمَّ اتْرُكْ فُرْصَةً لِرُقَيَّة لِقَوْلِ اسْمِهَا.", "رَدِّدَا I am six years old مَعَ عَدِّ الْأَصَابِعِ.", "اِرْسُمْ خَطًّا وَاتْرُكْهَا تَرْسُمُ طَرِيقَهَا.", "مَثِّلَا التَّعَارُفَ مَرَّةً أُخْرَى دُونَ نَمُوذَجٍ إِنِ اسْتَطَاعَتْ."], "checks": [["What is your name?", "My name is Roqaya."], ["How old are you?", "I am six years old."], ["اِرْسُمِي طَرِيقًا مُنْحَنِيًا.", "خَطٌّ مُنْحَنٍ، وَلَا يُشْتَرَطُ تَطَابُقُهُ مَعَ النَّمُوذَجِ."]]}, {"name": "نُجَرِّبُ مِنْ جَدِيدٍ", "lessons": ["ar_start", "math_count"], "minutes": 35, "materials": "بِطَاقَاتُ ب وَت وَم، وَخَمْسُ قِطَعٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "سَأُخْفِي حَرْفًا؛ هَلْ تَجِدِينَهُ؟ ثُمَّ نَجْمَعُ الْمُكَعَّبَاتِ لِلدُّمْيَةِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["رَاجِعْ ثَلَاثَ بِطَاقَاتٍ بِتَرْتِيبٍ مُخْتَلِفٍ.", "اِطْلُبْ مِنْهَا الْبَحْثَ عَنْ حَرْفٍ فِي الْبِطَاقَاتِ.", "ضَعْ أَرْبَعَ قِطَعٍ مُتَبَاعِدَةً ثُمَّ قَرِّبْهَا؛ الْكَمِّيَّةُ لَا تَتَغَيَّرُ.", "نَفِّذَا دَوْرَيْنِ فِي التَّطْبِيقِ ثُمَّ اسْتَرِيحَا."], "checks": [["أَيْنَ م؟", "تُشِيرُ إِلَى م."], ["هَلْ تَغَيَّرَ الْعَدَدُ بَعْدَ تَقْرِيبِ الْقِطَعِ؟", "لَا؛ نُعِيدُ الْعَدَّ لِلتَّأَكُّدِ."]]}, {"name": "نُمَثِّلُ وَنُبْدِعُ", "lessons": ["en_me", "art_lines"], "minutes": 35, "materials": "دُمْيَةٌ وَأَلْوَانٌ وَوَرَقَةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "الْيَوْمَ الدُّمْيَةُ تَسْأَلُ، وَأَنْتِ تُجِيبِينَ. بَعْدَهَا نَرْسُمُ دَائِرَةً وَنُضِيفُ لَهَا وَجْهًا.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["مَثِّلَا حِوَارَ الِاسْمِ وَالْعُمْرِ بِصَوْتَيْنِ مُخْتَلِفَيْنِ.", "بَدِّلِ الِاسْمَ فِي الْجُمْلَةِ لِتَتَكَلَّمَ الدُّمْيَةُ.", "اِرْسُمَا دَائِرَةً بِحَرَكَةٍ كَبِيرَةٍ، ثُمَّ عَلَى السَّبُّورَةِ.", "اِتْرُكْهَا تُضِيفُ تَفَاصِيلَ مِنْ خَيَالِهَا."], "checks": [["What is your name?", "My name is Roqaya."], ["هَلْ يُمْكِنُ أَنْ نُغَيِّرَ شَكْلَ الْوَجْهِ؟", "نَعَمْ؛ لَهَا حُرِّيَّةُ الْإِضَافَةِ وَالتَّلْوِينِ."]]}, {"name": "يَوْمُ الْمُرَاجَعَةِ وَاللَّعِبِ", "lessons": ["ar_start", "en_me", "math_count", "art_lines"], "minutes": 35, "materials": "أَدَوَاتُ الْأُسْبُوعِ نَفْسُهَا.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَخْتَارُ لُعْبَتَيْنِ مِنَ الْأُسْبُوعِ، ثُمَّ نُرِي بَعْضَنَا شَيْئًا تَعَلَّمْنَاهُ.", "review": true, "blocks": ["٣ دَقَائِقَ: نَخْتَارُ لُعْبَتَيْنِ مِنْ أَنْشِطَةِ الْأُسْبُوعِ.", "١٠ دَقَائِقَ: لُعْبَةٌ أُولَى.", "٣ دَقَائِقَ: حَرَكَةٌ.", "١٠ دَقَائِقَ: لُعْبَةٌ ثَانِيَةٌ أَوْ مَشْرُوعٌ.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: نَعْرِضُ إِنْجَازَنَا وَنُسَجِّلُ الْمُلَاحَظَاتِ."], "steps": ["اِلْعَبَا بَحْثَ الْحُرُوفِ بِتَرْتِيبٍ جَدِيدٍ.", "اِلْعَبَا مَتْجَرَ الْمُكَعَّبَاتِ: أُرِيدُ ٢، ثُمَّ ٤.", "أَوِ اخْتَارَا حِوَارَ التَّعَارُفِ وَرَسْمَةً حُرَّةً.", "سَجِّلْ كَيْفَ أَدَّتِ الْمَهَارَةَ الْيَوْمَ.", "إِنْ احْتَاجَتْ مُسَاعَدَةً، كَرِّرَا النَّشَاطَ فِي الْأُسْبُوعِ التَّالِي."], "checks": [["أَعْطِينِي ٤ قِطَعٍ.", "أَرْبَعُ قِطَعٍ مَعَ عَدٍّ مُنَظَّمٍ."], ["What is your name?", "My name is Roqaya."]]}]}, {"title": "أَشْكَالٌ وَكَمِّيَّاتٌ", "goal": "نُمَيِّزُ أَشْكَالَ الْحَرْفِ، وَنُقَارِنُ مَجْمُوعَاتٍ.", "lessons": ["ar_forms", "en_family", "math_groups", "art_lines"], "days": [{"name": "نَكْتَشِفُ", "lessons": ["ar_forms", "math_groups"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نَتَكَلَّمُ وَنَرْسُمُ", "lessons": ["en_family", "art_lines"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نُجَرِّبُ مِنْ جَدِيدٍ", "lessons": ["ar_forms", "math_groups"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نُمَثِّلُ وَنُبْدِعُ", "lessons": ["en_family", "art_lines"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "يَوْمُ الْمُرَاجَعَةِ وَاللَّعِبِ", "lessons": ["ar_forms", "en_family", "math_groups", "art_lines"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": true, "blocks": ["٣ دَقَائِقَ: نَخْتَارُ لُعْبَتَيْنِ مِنْ أَنْشِطَةِ الْأُسْبُوعِ.", "١٠ دَقَائِقَ: لُعْبَةٌ أُولَى.", "٣ دَقَائِقَ: حَرَكَةٌ.", "١٠ دَقَائِقَ: لُعْبَةٌ ثَانِيَةٌ أَوْ مَشْرُوعٌ.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: نَعْرِضُ إِنْجَازَنَا وَنُسَجِّلُ الْمُلَاحَظَاتِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}]}, {"title": "نَسْمَعُ الْفَتْحَةَ", "goal": "أَصْوَاتٌ قَصِيرَةٌ، جُمَلٌ عَنِ الْأَلْعَابِ، وَالسَّابِقُ وَالتَّالِي.", "lessons": ["ar_fatha", "en_toys", "math_order", "art_objects"], "days": [{"name": "نَكْتَشِفُ", "lessons": ["ar_fatha", "math_order"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نَتَكَلَّمُ وَنَرْسُمُ", "lessons": ["en_toys", "art_objects"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نُجَرِّبُ مِنْ جَدِيدٍ", "lessons": ["ar_fatha", "math_order"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نُمَثِّلُ وَنُبْدِعُ", "lessons": ["en_toys", "art_objects"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "يَوْمُ الْمُرَاجَعَةِ وَاللَّعِبِ", "lessons": ["ar_fatha", "en_toys", "math_order", "art_objects"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": true, "blocks": ["٣ دَقَائِقَ: نَخْتَارُ لُعْبَتَيْنِ مِنْ أَنْشِطَةِ الْأُسْبُوعِ.", "١٠ دَقَائِقَ: لُعْبَةٌ أُولَى.", "٣ دَقَائِقَ: حَرَكَةٌ.", "١٠ دَقَائِقَ: لُعْبَةٌ ثَانِيَةٌ أَوْ مَشْرُوعٌ.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: نَعْرِضُ إِنْجَازَنَا وَنُسَجِّلُ الْمُلَاحَظَاتِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}]}, {"title": "أَوَّلُ كَلِمَاتِنَا", "goal": "نَدْمِجُ أَصْوَاتَ كَتَبَ وَرَسَمَ وَدَرَسَ. نُمَثِّلُ الْجَمْعَ وَالطَّرْحَ.", "lessons": ["ar_read_a", "en_food", "math_add5", "art_objects"], "days": [{"name": "نَكْتَشِفُ", "lessons": ["ar_read_a", "math_add5"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نَتَكَلَّمُ وَنَرْسُمُ", "lessons": ["en_food", "art_objects"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نُجَرِّبُ مِنْ جَدِيدٍ", "lessons": ["ar_read_a", "math_add5"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نُمَثِّلُ وَنُبْدِعُ", "lessons": ["en_food", "art_objects"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "يَوْمُ الْمُرَاجَعَةِ وَاللَّعِبِ", "lessons": ["ar_read_a", "en_food", "math_add5", "art_objects"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": true, "blocks": ["٣ دَقَائِقَ: نَخْتَارُ لُعْبَتَيْنِ مِنْ أَنْشِطَةِ الْأُسْبُوعِ.", "١٠ دَقَائِقَ: لُعْبَةٌ أُولَى.", "٣ دَقَائِقَ: حَرَكَةٌ.", "١٠ دَقَائِقَ: لُعْبَةٌ ثَانِيَةٌ أَوْ مَشْرُوعٌ.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: نَعْرِضُ إِنْجَازَنَا وَنُسَجِّلُ الْمُلَاحَظَاتِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}]}, {"title": "نُكَوِّنُ وَنَطْلُبُ", "goal": "حَرْفٌ نَاقِصٌ، طَلَبٌ مُهَذَّبٌ، وَمُقَارَنَةُ ٨ وَ١١ بِالْقِطَعِ.", "lessons": ["ar_missing", "en_please", "math_8_11", "art_objects"], "days": [{"name": "نَكْتَشِفُ", "lessons": ["ar_missing", "math_8_11"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نَتَكَلَّمُ وَنَرْسُمُ", "lessons": ["en_please", "art_objects"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نُجَرِّبُ مِنْ جَدِيدٍ", "lessons": ["ar_missing", "math_8_11"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نُمَثِّلُ وَنُبْدِعُ", "lessons": ["en_please", "art_objects"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "يَوْمُ الْمُرَاجَعَةِ وَاللَّعِبِ", "lessons": ["ar_missing", "en_please", "math_8_11", "art_objects"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": true, "blocks": ["٣ دَقَائِقَ: نَخْتَارُ لُعْبَتَيْنِ مِنْ أَنْشِطَةِ الْأُسْبُوعِ.", "١٠ دَقَائِقَ: لُعْبَةٌ أُولَى.", "٣ دَقَائِقَ: حَرَكَةٌ.", "١٠ دَقَائِقَ: لُعْبَةٌ ثَانِيَةٌ أَوْ مَشْرُوعٌ.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: نَعْرِضُ إِنْجَازَنَا وَنُسَجِّلُ الْمُلَاحَظَاتِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}]}, {"title": "نَسْمَعُ الضَّمَّةَ", "goal": "نُقَارِنُ الْفَتْحَةَ وَالضَّمَّةَ، وَنَفْهَمُ رُمُوزَ الْمُقَارَنَةِ.", "lessons": ["ar_damma", "en_feelings", "math_symbols", "art_animals"], "days": [{"name": "نَكْتَشِفُ", "lessons": ["ar_damma", "math_symbols"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نَتَكَلَّمُ وَنَرْسُمُ", "lessons": ["en_feelings", "art_animals"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نُجَرِّبُ مِنْ جَدِيدٍ", "lessons": ["ar_damma", "math_symbols"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نُمَثِّلُ وَنُبْدِعُ", "lessons": ["en_feelings", "art_animals"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "يَوْمُ الْمُرَاجَعَةِ وَاللَّعِبِ", "lessons": ["ar_damma", "en_feelings", "math_symbols", "art_animals"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": true, "blocks": ["٣ دَقَائِقَ: نَخْتَارُ لُعْبَتَيْنِ مِنْ أَنْشِطَةِ الْأُسْبُوعِ.", "١٠ دَقَائِقَ: لُعْبَةٌ أُولَى.", "٣ دَقَائِقَ: حَرَكَةٌ.", "١٠ دَقَائِقَ: لُعْبَةٌ ثَانِيَةٌ أَوْ مَشْرُوعٌ.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: نَعْرِضُ إِنْجَازَنَا وَنُسَجِّلُ الْمُلَاحَظَاتِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}]}, {"title": "نَسْمَعُ الْكَسْرَةَ", "goal": "نُمَيِّزُ الْحَرَكَاتِ الثَّلَاثَ وَنَطْلُبُ الْمُسَاعَدَةَ.", "lessons": ["ar_kasra", "en_help", "math_add10", "art_animals"], "days": [{"name": "نَكْتَشِفُ", "lessons": ["ar_kasra", "math_add10"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نَتَكَلَّمُ وَنَرْسُمُ", "lessons": ["en_help", "art_animals"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نُجَرِّبُ مِنْ جَدِيدٍ", "lessons": ["ar_kasra", "math_add10"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نُمَثِّلُ وَنُبْدِعُ", "lessons": ["en_help", "art_animals"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "يَوْمُ الْمُرَاجَعَةِ وَاللَّعِبِ", "lessons": ["ar_kasra", "en_help", "math_add10", "art_animals"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": true, "blocks": ["٣ دَقَائِقَ: نَخْتَارُ لُعْبَتَيْنِ مِنْ أَنْشِطَةِ الْأُسْبُوعِ.", "١٠ دَقَائِقَ: لُعْبَةٌ أُولَى.", "٣ دَقَائِقَ: حَرَكَةٌ.", "١٠ دَقَائِقَ: لُعْبَةٌ ثَانِيَةٌ أَوْ مَشْرُوعٌ.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: نَعْرِضُ إِنْجَازَنَا وَنُسَجِّلُ الْمُلَاحَظَاتِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}]}, {"title": "نُجَمِّعُ الْعَشَرَاتِ", "goal": "حُرُوفٌ إِضَافِيَّةٌ، وَعَشْرُ وَحَدَاتٍ تَكُونُ عَشْرَةً وَاحِدَةً.", "lessons": ["ar_more", "en_food", "math_tens", "art_objects"], "days": [{"name": "نَكْتَشِفُ", "lessons": ["ar_more", "math_tens"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نَتَكَلَّمُ وَنَرْسُمُ", "lessons": ["en_food", "art_objects"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نُجَرِّبُ مِنْ جَدِيدٍ", "lessons": ["ar_more", "math_tens"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نُمَثِّلُ وَنُبْدِعُ", "lessons": ["en_food", "art_objects"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "يَوْمُ الْمُرَاجَعَةِ وَاللَّعِبِ", "lessons": ["ar_more", "en_food", "math_tens", "art_objects"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": true, "blocks": ["٣ دَقَائِقَ: نَخْتَارُ لُعْبَتَيْنِ مِنْ أَنْشِطَةِ الْأُسْبُوعِ.", "١٠ دَقَائِقَ: لُعْبَةٌ أُولَى.", "٣ دَقَائِقَ: حَرَكَةٌ.", "١٠ دَقَائِقَ: لُعْبَةٌ ثَانِيَةٌ أَوْ مَشْرُوعٌ.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: نَعْرِضُ إِنْجَازَنَا وَنُسَجِّلُ الْمُلَاحَظَاتِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}]}, {"title": "نَقْرَأُ وَنُقَارِنُ", "goal": "كَلِمَاتٌ بِحَرَكَاتٍ مُخْتَلِفَةٍ وَمُقَارَنَةُ ١٩ وَ٢١ وَ٣٥ وَ٣٢.", "lessons": ["ar_mix", "en_toys", "math_compare2", "art_animals"], "days": [{"name": "نَكْتَشِفُ", "lessons": ["ar_mix", "math_compare2"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نَتَكَلَّمُ وَنَرْسُمُ", "lessons": ["en_toys", "art_animals"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نُجَرِّبُ مِنْ جَدِيدٍ", "lessons": ["ar_mix", "math_compare2"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نُمَثِّلُ وَنُبْدِعُ", "lessons": ["en_toys", "art_animals"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "يَوْمُ الْمُرَاجَعَةِ وَاللَّعِبِ", "lessons": ["ar_mix", "en_toys", "math_compare2", "art_animals"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": true, "blocks": ["٣ دَقَائِقَ: نَخْتَارُ لُعْبَتَيْنِ مِنْ أَنْشِطَةِ الْأُسْبُوعِ.", "١٠ دَقَائِقَ: لُعْبَةٌ أُولَى.", "٣ دَقَائِقَ: حَرَكَةٌ.", "١٠ دَقَائِقَ: لُعْبَةٌ ثَانِيَةٌ أَوْ مَشْرُوعٌ.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: نَعْرِضُ إِنْجَازَنَا وَنُسَجِّلُ الْمُلَاحَظَاتِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}]}, {"title": "نَكْتُبُ مِنَ السَّمْعِ", "goal": "إِمْلَاءٌ قَصِيرٌ مِنَ الْكَلِمَاتِ الْمُتَعَلَّمَةِ وَحِسَابٌ دَاخِلَ ٢٠.", "lessons": ["ar_dictation", "en_please", "math_add20", "art_animals"], "days": [{"name": "نَكْتَشِفُ", "lessons": ["ar_dictation", "math_add20"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نَتَكَلَّمُ وَنَرْسُمُ", "lessons": ["en_please", "art_animals"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نُجَرِّبُ مِنْ جَدِيدٍ", "lessons": ["ar_dictation", "math_add20"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نُمَثِّلُ وَنُبْدِعُ", "lessons": ["en_please", "art_animals"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "يَوْمُ الْمُرَاجَعَةِ وَاللَّعِبِ", "lessons": ["ar_dictation", "en_please", "math_add20", "art_animals"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": true, "blocks": ["٣ دَقَائِقَ: نَخْتَارُ لُعْبَتَيْنِ مِنْ أَنْشِطَةِ الْأُسْبُوعِ.", "١٠ دَقَائِقَ: لُعْبَةٌ أُولَى.", "٣ دَقَائِقَ: حَرَكَةٌ.", "١٠ دَقَائِقَ: لُعْبَةٌ ثَانِيَةٌ أَوْ مَشْرُوعٌ.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: نَعْرِضُ إِنْجَازَنَا وَنُسَجِّلُ الْمُلَاحَظَاتِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}]}, {"title": "مَشْرُوعُ مَتْجَرِنَا", "goal": "نَكْتُبُ وَنَطْلُبُ وَنَعُدُّ فِي لُعْبَةِ مَتْجَرٍ مُصَغَّرٍ.", "lessons": ["ar_mix", "en_food", "math_compare2", "art_objects"], "days": [{"name": "نَكْتَشِفُ", "lessons": ["ar_mix", "math_compare2"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نَتَكَلَّمُ وَنَرْسُمُ", "lessons": ["en_food", "art_objects"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نُجَرِّبُ مِنْ جَدِيدٍ", "lessons": ["ar_mix", "math_compare2"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نُمَثِّلُ وَنُبْدِعُ", "lessons": ["en_food", "art_objects"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "يَوْمُ الْمُرَاجَعَةِ وَاللَّعِبِ", "lessons": ["ar_mix", "en_food", "math_compare2", "art_objects"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": true, "blocks": ["٣ دَقَائِقَ: نَخْتَارُ لُعْبَتَيْنِ مِنْ أَنْشِطَةِ الْأُسْبُوعِ.", "١٠ دَقَائِقَ: لُعْبَةٌ أُولَى.", "٣ دَقَائِقَ: حَرَكَةٌ.", "١٠ دَقَائِقَ: لُعْبَةٌ ثَانِيَةٌ أَوْ مَشْرُوعٌ.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: نَعْرِضُ إِنْجَازَنَا وَنُسَجِّلُ الْمُلَاحَظَاتِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}]}, {"title": "نَحْتَفِلُ وَنُرَاجِعُ", "goal": "نُعِيدُ لُعْبَةَ الْبِدَايَةِ وَنُقَارِنُ رُقَيَّة بِنَفْسِهَا. الْمِئَاتُ اخْتِيَارِيَّةٌ بَعْدَ الْإِتْقَانِ.", "lessons": ["ar_dictation", "en_me", "math_tens", "art_animals"], "days": [{"name": "نَكْتَشِفُ", "lessons": ["ar_dictation", "math_tens"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نَتَكَلَّمُ وَنَرْسُمُ", "lessons": ["en_me", "art_animals"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نُجَرِّبُ مِنْ جَدِيدٍ", "lessons": ["ar_dictation", "math_tens"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "نُمَثِّلُ وَنُبْدِعُ", "lessons": ["en_me", "art_animals"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}, {"name": "يَوْمُ الْمُرَاجَعَةِ وَاللَّعِبِ", "lessons": ["ar_dictation", "en_me", "math_tens", "art_animals"], "minutes": 35, "materials": "وَرَقٌ وَأَلْوَانٌ، ٢٠ قِطْعَةً كَبِيرَةً لِلْعَدِّ، وَبِطَاقَاتٌ وَرَقِيَّةٌ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَكْتَشِفُ مَعًا. سَأُجَرِّبُ أَنَا، ثُمَّ تُجَرِّبِينَ أَنْتِ.", "review": true, "blocks": ["٣ دَقَائِقَ: نَخْتَارُ لُعْبَتَيْنِ مِنْ أَنْشِطَةِ الْأُسْبُوعِ.", "١٠ دَقَائِقَ: لُعْبَةٌ أُولَى.", "٣ دَقَائِقَ: حَرَكَةٌ.", "١٠ دَقَائِقَ: لُعْبَةٌ ثَانِيَةٌ أَوْ مَشْرُوعٌ.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: نَعْرِضُ إِنْجَازَنَا وَنُسَجِّلُ الْمُلَاحَظَاتِ."], "steps": ["نَفِّذْ مِثَالًا وَاحِدًا مِنَ الدَّرْسِ.", "اِفْتَحِ النَّشَاطَ الْمُشْتَرَكَ وَتَبَادَلَا الْأَدْوَارَ.", "اُطْلُبْ مِنْهَا تَطْبِيقَ الْفِكْرَةِ بِأَدَاةٍ مَنْزِلِيَّةٍ.", "سَجِّلِ الْمُلَاحَظَةَ، وَاخْتَرِ الْبَدِيلَ الْأَسْهَلَ عِنْدَ الْحَاجَةِ."]}]}], "assessment": [{"id": "base_ar", "title": "لُعْبَةُ الْحُرُوفِ", "prompt": "اِعْرِضْ ب، ت، م بِتَرْتِيبٍ مُخْتَلِفٍ. اُطْلُبْ تَسْمِيَتَهَا أَوِ الْإِشَارَةَ إِلَيْهَا.", "challenge": "إِنْ عَرَفَتْهَا، جَرِّبْ بَ، بُ، بِ ثُمَّ كَتَبَ، دُونَ تَلْقِينٍ.", "start": "إِنْ تَرَدَّدَتْ فِي الْحُرُوفِ فَابْدَأْ بِـ«حُرُوفٌ نَبْدَأُ بِهَا». إِنْ عَرَفَتْهَا وَتَرَدَّدَتْ فِي الدَّمْجِ، فَرَاجِعِ الْفَتْحَةَ.", "lesson": "ar_start"}, {"id": "base_en", "title": "الدُّمْيَةُ تَتَعَرَّفُ عَلَيْكِ", "prompt": "قُلْ: Hello. What is your name? وَانْتَظِرْ.", "challenge": "اِسْأَلْ: How old are you? لَا تُقَدِّمِ الْإِجَابَةَ قَبْلَ مُحَاوَلَتِهَا.", "start": "إِنِ احْتَاجَتْ نَمُوذَجًا، نَبْدَأُ بِجُمْلَةِ الِاسْمِ. إِنْ أَجَابَتْ، نُمَثِّلُ مَوْقِفًا جَدِيدًا.", "lesson": "en_me"}, {"id": "base_math", "title": "مَتْجَرُ الْمُكَعَّبَاتِ", "prompt": "اُطْلُبْ ٣ قِطَعٍ مِنْ أَصْلِ ٥، ثُمَّ اسْأَلْ عَنِ الْمَجْمُوعَةِ الْفَارِغَةِ.", "challenge": "إِنْ عَدَّتْ بِرَاحَةٍ، اِعْرِضْ ٨ قِطَعٍ وَ١١ قِطْعَةً وَاسْأَلْ: أَيُّهُمَا أَكْثَرُ؟ لِمَاذَا؟", "start": "نَبْدَأُ بِالْعَدِّ عِنْدَ تَكْرَارِ الْقِطْعَةِ أَوْ نَسْيَانِهَا. نُنَمِّي الْمُقَارَنَةَ عِنْدَ إِتْقَانِ الْعَدِّ.", "lesson": "math_count"}, {"id": "base_art", "title": "طَرِيقٌ وَدَائِرَةٌ", "prompt": "اِرْسُمْ خَطًّا وَدَائِرَةً، وَاطْلُبْ مِنْهَا مُحَاوَلَةً عَلَى الْوَرَقِ.", "challenge": "إِنْ كَانَتْ مُرْتَاحَةً، اِطْلُبْ تَرْكِيبَ بَيْتٍ مِنْ مُرَبَّعٍ وَمُثَلَّثٍ.", "start": "اِخْتَرْ خُطُوطًا كَبِيرَةً إِنْ احْتَاجَتْ مُسَاعَدَةً، أَوْ تَرْكِيبَ أَشْكَالٍ إِنْ كَانَتْ مُسْتَعِدَّةً.", "lesson": "art_lines"}]};
const Curriculum={
 defaults(){return {track:'beginner',week:0,day:0,ratings:{}};},
 lesson(id){for(const subject of ALL_SUBJECTS){const lesson=subject.lessons.find(x=>x.id===id);if(lesson)return {subject,lesson};}return null;},
 valid(c){if(!c||!['beginner','practice'].includes(c.track)||!Number.isInteger(c.week)||c.week<0||c.week>11||!Number.isInteger(c.day)||c.day<0||c.day>4||(c.ratings!==undefined&&(typeof c.ratings!=='object'||!c.ratings||Array.isArray(c.ratings))))return false;return Object.entries(c.ratings||{}).every(([key,r])=>(this.lesson(key)||CURRICULUM.assessment.some(a=>a.id===key)||LEGACY_ASSESSMENTS.includes(key))&&r&&[1,2,3].includes(r.level)&&Number.isInteger(r.days)&&r.days>=0&&r.days<=2&&/^\d{4}-\d{2}-\d{2}$/.test(r.date));},
 day(){const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');},
 rate(course,id,level,date=this.day()){const old=course.ratings?.[id];const days=level===3?Math.min(2,old?.level===3?(old.days+(old.date!==date?1:0)):1):0;return {...course,ratings:{...course.ratings,[id]:{level,days,date}}};},
 mastered(course,id){const r=course.ratings?.[id];return r?.level===3&&r.days>=2;},
 missing(course,id){return (this.lesson(id)?.lesson.prereq||[]).filter(x=>!this.mastered(course,x));},
 review(course){return Object.keys(course.ratings||{}).filter(id=>this.lesson(id)?.subject.id==='arabic'&&!this.mastered(course,id));},
 canAdvance(course){return CURRICULUM.weeks[course.week].lessons.every(id=>this.mastered(course,id));},
 label(level){return {1:'تَحْتَاجُ إِلَى تَدْرِيبٍ',2:'تُؤَدِّيهَا بِمُسَاعَدَةٍ',3:'تُؤَدِّيهَا وَحْدَهَا'}[level]||'لَمْ نُجَرِّبْ بَعْدُ';}
};

const ALL_SUBJECTS=[...SUBJECTS];
const LEGACY_ASSESSMENTS=CURRICULUM.assessment.map(a=>a.id);
const BOOK_LESSONS=[{"id": "book_start", "subject": "arabic", "title": "👂 أَسْمَعُ أَوَّلَ الْكَلِمَةِ", "cards": [{"front": "🐟", "word": "سَمَكَة", "q": "اِسْمَعِي الْكَلِمَةَ. بِأَيِّ حَرْفٍ تَبْدَأُ؟", "options": ["س", "م", "ك"], "answer": "س", "detail": "نَسْتَمِعُ إِلَى الْكَلِمَةِ؛ لَا نَحْتَاجُ إِلَى قِرَاءَتِهَا كُلِّهَا.", "lang": "ar", "writing": [], "speech": "سَمَكَة. نَسْمَعُ الصَّوْتَ الْأَوَّلَ.", "listenWord": "سَمَكَة", "visual": {"type": "picture", "value": "🐟"}}, {"front": "🍎", "word": "تُفَّاح", "q": "اِسْمَعِي الْكَلِمَةَ. بِأَيِّ حَرْفٍ تَبْدَأُ؟", "options": ["ب", "ت", "ث"], "answer": "ت", "detail": "نَسْتَمِعُ إِلَى الْكَلِمَةِ؛ لَا نَحْتَاجُ إِلَى قِرَاءَتِهَا كُلِّهَا.", "lang": "ar", "writing": [], "speech": "تُفَّاح. نَسْمَعُ الصَّوْتَ الْأَوَّلَ.", "listenWord": "تُفَّاح", "visual": {"type": "picture", "value": "🍎"}}, {"front": "🐪", "word": "جَمَل", "q": "اِسْمَعِي الْكَلِمَةَ. بِأَيِّ حَرْفٍ تَبْدَأُ؟", "options": ["ح", "خ", "ج"], "answer": "ج", "detail": "نَسْتَمِعُ إِلَى الْكَلِمَةِ؛ لَا نَحْتَاجُ إِلَى قِرَاءَتِهَا كُلِّهَا.", "lang": "ar", "writing": [], "speech": "جَمَل. نَسْمَعُ الصَّوْتَ الْأَوَّلَ.", "listenWord": "جَمَل", "visual": {"type": "picture", "value": "🐪"}}, {"front": "✏️", "word": "قَلَم", "q": "اِسْمَعِي الْكَلِمَةَ. بِأَيِّ حَرْفٍ تَبْدَأُ؟", "options": ["ف", "ق", "ك"], "answer": "ق", "detail": "نَسْتَمِعُ إِلَى الْكَلِمَةِ؛ لَا نَحْتَاجُ إِلَى قِرَاءَتِهَا كُلِّهَا.", "lang": "ar", "writing": [], "speech": "قَلَم. نَسْمَعُ الصَّوْتَ الْأَوَّلَ.", "listenWord": "قَلَم", "visual": {"type": "picture", "value": "✏️"}}], "guided": true, "bookActivity": true, "group": "sound", "bookPages": [6, 7], "prereq": [], "criterion": "تُؤَدِّي الْمَهَارَةَ فِي ٤ مُحَاوَلَاتٍ مِنْ ٥ بِاسْتِقْلَالٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "نُقَدِّمُ مِثَالًا، ثُمَّ نُجَرِّبُ خِيَارَيْنِ وَنَمْنَحُ وَقْتًا لِلتَّفْكِيرِ.", "harder": "نُغَيِّرُ الْمِثَالَ وَنَطْلُبُ شَرْحَ الِاخْتِيَارِ دُونَ تَلْقِينٍ.", "mistake": "نَقُولُ: نُجَرِّبُ مَعًا. نُعِيدُ الصَّوْتَ أَوِ النَّمُوذَجَ، ثُمَّ نُعِيدُ الْمُحَاوَلَةَ."}, {"id": "book_end", "subject": "arabic", "title": "👂 أَسْمَعُ آخِرَ الْكَلِمَةِ", "cards": [{"front": "📕", "word": "كِتَاب", "q": "اِسْمَعِي الْكَلِمَةَ. مَا الْحَرْفُ الْأَخِيرُ؟", "options": ["ب", "ت", "ك"], "answer": "ب", "detail": "نُصْغِي إِلَى نِهَايَةِ الْكَلِمَةِ وَنُسَمِّي الْحَرْفَ.", "lang": "ar", "writing": [], "speech": "كِتَاب", "listenWord": "كِتَاب", "visual": {"type": "picture", "value": "📕"}}, {"front": "✏️", "word": "قَلَم", "q": "اِسْمَعِي الْكَلِمَةَ. مَا الْحَرْفُ الْأَخِيرُ؟", "options": ["ق", "ل", "م"], "answer": "م", "detail": "نُصْغِي إِلَى نِهَايَةِ الْكَلِمَةِ وَنُسَمِّي الْحَرْفَ.", "lang": "ar", "writing": [], "speech": "قَلَم", "listenWord": "قَلَم", "visual": {"type": "picture", "value": "✏️"}}, {"front": "🐪", "word": "جَمَل", "q": "اِسْمَعِي الْكَلِمَةَ. مَا الْحَرْفُ الْأَخِيرُ؟", "options": ["ج", "م", "ل"], "answer": "ل", "detail": "نُصْغِي إِلَى نِهَايَةِ الْكَلِمَةِ وَنُسَمِّي الْحَرْفَ.", "lang": "ar", "writing": [], "speech": "جَمَل", "listenWord": "جَمَل", "visual": {"type": "picture", "value": "🐪"}}, {"front": "🏠", "word": "بَيْت", "q": "اِسْمَعِي الْكَلِمَةَ. مَا الْحَرْفُ الْأَخِيرُ؟", "options": ["ب", "ي", "ت"], "answer": "ت", "detail": "نُصْغِي إِلَى نِهَايَةِ الْكَلِمَةِ وَنُسَمِّي الْحَرْفَ.", "lang": "ar", "writing": [], "speech": "بَيْت", "listenWord": "بَيْت", "visual": {"type": "picture", "value": "🏠"}}], "guided": true, "bookActivity": true, "group": "sound", "bookPages": [6], "prereq": ["book_start"], "criterion": "تُؤَدِّي الْمَهَارَةَ فِي ٤ مُحَاوَلَاتٍ مِنْ ٥ بِاسْتِقْلَالٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "نُقَدِّمُ مِثَالًا، ثُمَّ نُجَرِّبُ خِيَارَيْنِ وَنَمْنَحُ وَقْتًا لِلتَّفْكِيرِ.", "harder": "نُغَيِّرُ الْمِثَالَ وَنَطْلُبُ شَرْحَ الِاخْتِيَارِ دُونَ تَلْقِينٍ.", "mistake": "نَقُولُ: نُجَرِّبُ مَعًا. نُعِيدُ الصَّوْتَ أَوِ النَّمُوذَجَ، ثُمَّ نُعِيدُ الْمُحَاوَلَةَ."}, {"id": "book_build", "subject": "arabic", "title": "🧩 أُرَكِّبُ كَلِمَةً", "cards": [{"front": "✍️", "word": "كَتَبَ", "q": "رَتِّبِي الْحُرُوفَ لِتَكْوِينِ الْكَلِمَةِ الَّتِي تَسْمَعِينَها.", "options": ["كَتَبَ", "رَسَمَ"], "answer": "كَتَبَ", "detail": "نَضَعُ الْحُرُوفَ مِنَ الْيَمِينِ إِلَى الْيَسَارِ، ثُمَّ نَقْرَأُ الْكَلِمَةَ.", "lang": "ar", "writing": ["كَتَبَ"], "practice": "build", "tiles": ["كَ", "تَ", "بَ"], "speech": "كَتَبَ", "visual": {"type": "picture", "value": "✍️"}}, {"front": "🎨", "word": "رَسَمَ", "q": "رَتِّبِي الْحُرُوفَ لِتَكْوِينِ الْكَلِمَةِ الَّتِي تَسْمَعِينَها.", "options": ["رَسَمَ", "كَتَبَ"], "answer": "رَسَمَ", "detail": "نَضَعُ الْحُرُوفَ مِنَ الْيَمِينِ إِلَى الْيَسَارِ، ثُمَّ نَقْرَأُ الْكَلِمَةَ.", "lang": "ar", "writing": ["رَسَمَ"], "practice": "build", "tiles": ["رَ", "سَ", "مَ"], "speech": "رَسَمَ", "visual": {"type": "picture", "value": "🎨"}}, {"front": "📚", "word": "دَرَسَ", "q": "رَتِّبِي الْحُرُوفَ لِتَكْوِينِ الْكَلِمَةِ الَّتِي تَسْمَعِينَها.", "options": ["دَرَسَ", "رَسَمَ"], "answer": "دَرَسَ", "detail": "نَضَعُ الْحُرُوفَ مِنَ الْيَمِينِ إِلَى الْيَسَارِ، ثُمَّ نَقْرَأُ الْكَلِمَةَ.", "lang": "ar", "writing": ["دَرَسَ"], "practice": "build", "tiles": ["دَ", "رَ", "سَ"], "speech": "دَرَسَ", "visual": {"type": "picture", "value": "📚"}}], "guided": true, "bookActivity": true, "group": "build", "bookPages": [42, 168], "prereq": ["ar_read_a"], "criterion": "تُؤَدِّي الْمَهَارَةَ فِي ٤ مُحَاوَلَاتٍ مِنْ ٥ بِاسْتِقْلَالٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "نُقَدِّمُ مِثَالًا، ثُمَّ نُجَرِّبُ خِيَارَيْنِ وَنَمْنَحُ وَقْتًا لِلتَّفْكِيرِ.", "harder": "نُغَيِّرُ الْمِثَالَ وَنَطْلُبُ شَرْحَ الِاخْتِيَارِ دُونَ تَلْقِينٍ.", "mistake": "نَقُولُ: نُجَرِّبُ مَعًا. نُعِيدُ الصَّوْتَ أَوِ النَّمُوذَجَ، ثُمَّ نُعِيدُ الْمُحَاوَلَةَ."}, {"id": "book_trace", "subject": "arabic", "title": "✏️ أَتَتَبَّعُ ثُمَّ أَكْتُبُ", "cards": [{"front": "ب", "word": "بَاء", "q": "أَيْنَ حَرْفُ بَاء؟", "options": ["ب", "د", "ر"], "answer": "ب", "detail": "نَتَتَبَّعُ النَّمُوذَجَ، ثُمَّ نَنْسَخُهُ، ثُمَّ نَكْتُبُ دُونَ نَمُوذَجٍ.", "lang": "ar", "writing": ["ب", "ب", "ب"], "practice": "trace", "traceLetter": "ب", "speech": "حَرْفُ بَاء. نَتْبَعُ السَّهْمَ، ثُمَّ نَكْتُبُ."}, {"front": "ت", "word": "تَاء", "q": "أَيْنَ حَرْفُ تَاء؟", "options": ["ت", "ب", "د"], "answer": "ت", "detail": "نَتَتَبَّعُ النَّمُوذَجَ، ثُمَّ نَنْسَخُهُ، ثُمَّ نَكْتُبُ دُونَ نَمُوذَجٍ.", "lang": "ar", "writing": ["ت", "ت", "ت"], "practice": "trace", "traceLetter": "ت", "speech": "حَرْفُ تَاء. نَتْبَعُ السَّهْمَ، ثُمَّ نَكْتُبُ."}, {"front": "ث", "word": "ثَاء", "q": "أَيْنَ حَرْفُ ثَاء؟", "options": ["ث", "ب", "د"], "answer": "ث", "detail": "نَتَتَبَّعُ النَّمُوذَجَ، ثُمَّ نَنْسَخُهُ، ثُمَّ نَكْتُبُ دُونَ نَمُوذَجٍ.", "lang": "ar", "writing": ["ث", "ث", "ث"], "practice": "trace", "traceLetter": "ث", "speech": "حَرْفُ ثَاء. نَتْبَعُ السَّهْمَ، ثُمَّ نَكْتُبُ."}, {"front": "د", "word": "دَال", "q": "أَيْنَ حَرْفُ دَال؟", "options": ["د", "ب", "ر"], "answer": "د", "detail": "نَتَتَبَّعُ النَّمُوذَجَ، ثُمَّ نَنْسَخُهُ، ثُمَّ نَكْتُبُ دُونَ نَمُوذَجٍ.", "lang": "ar", "writing": ["د", "د", "د"], "practice": "trace", "traceLetter": "د", "speech": "حَرْفُ دَال. نَتْبَعُ السَّهْمَ، ثُمَّ نَكْتُبُ."}, {"front": "ذ", "word": "ذَال", "q": "أَيْنَ حَرْفُ ذَال؟", "options": ["ذ", "ب", "د"], "answer": "ذ", "detail": "نَتَتَبَّعُ النَّمُوذَجَ، ثُمَّ نَنْسَخُهُ، ثُمَّ نَكْتُبُ دُونَ نَمُوذَجٍ.", "lang": "ar", "writing": ["ذ", "ذ", "ذ"], "practice": "trace", "traceLetter": "ذ", "speech": "حَرْفُ ذَال. نَتْبَعُ السَّهْمَ، ثُمَّ نَكْتُبُ."}, {"front": "ر", "word": "رَاء", "q": "أَيْنَ حَرْفُ رَاء؟", "options": ["ر", "ب", "د"], "answer": "ر", "detail": "نَتَتَبَّعُ النَّمُوذَجَ، ثُمَّ نَنْسَخُهُ، ثُمَّ نَكْتُبُ دُونَ نَمُوذَجٍ.", "lang": "ar", "writing": ["ر", "ر", "ر"], "practice": "trace", "traceLetter": "ر", "speech": "حَرْفُ رَاء. نَتْبَعُ السَّهْمَ، ثُمَّ نَكْتُبُ."}], "guided": true, "bookActivity": true, "group": "trace", "bookPages": [7, 62, 82], "prereq": ["ar_start"], "criterion": "تُؤَدِّي الْمَهَارَةَ فِي ٤ مُحَاوَلَاتٍ مِنْ ٥ بِاسْتِقْلَالٍ، فِي يَوْمَيْنِ مُخْتَلِفَيْنِ.", "easier": "نُقَدِّمُ مِثَالًا، ثُمَّ نُجَرِّبُ خِيَارَيْنِ وَنَمْنَحُ وَقْتًا لِلتَّفْكِيرِ.", "harder": "نُغَيِّرُ الْمِثَالَ وَنَطْلُبُ شَرْحَ الِاخْتِيَارِ دُونَ تَلْقِينٍ.", "mistake": "نَقُولُ: نُجَرِّبُ مَعًا. نُعِيدُ الصَّوْتَ أَوِ النَّمُوذَجَ، ثُمَّ نُعِيدُ الْمُحَاوَلَةَ."}, {"id": "book_home", "subject": "arabic", "title": "🐦 الْعُصْفُورُ وَالْعُشُّ", "cards": [{"front": "🐦 🌳", "word": "الْمَشْهَدُ 1", "q": "أَيْنَ وَقَفَ الْعُصْفُورُ؟", "options": ["عَلَى غُصْنٍ", "فِي الْمَاءِ"], "answer": "عَلَى غُصْنٍ", "detail": "خَرَجَ عُصْفُورٌ صَغِيرٌ مِنْ عُشِّهِ. وَقَفَ عَلَى غُصْنٍ وَنَظَرَ حَوْلَهُ.", "lang": "ar", "writing": [], "sceneText": "خَرَجَ عُصْفُورٌ صَغِيرٌ مِنْ عُشِّهِ. وَقَفَ عَلَى غُصْنٍ وَنَظَرَ حَوْلَهُ.", "speech": "خَرَجَ عُصْفُورٌ صَغِيرٌ مِنْ عُشِّهِ. وَقَفَ عَلَى غُصْنٍ وَنَظَرَ حَوْلَهُ.", "visual": {"type": "picture", "value": "🐦 🌳"}}, {"front": "🐦 🐟 💧", "word": "الْمَشْهَدُ 2", "q": "أَيْنَ تَعِيشُ السَّمَكَةُ؟", "options": ["فِي الْعُشِّ", "فِي الْمَاءِ"], "answer": "فِي الْمَاءِ", "detail": "رَأَى الْعُصْفُورُ سَمَكَةً. قَالَتْ: أَنَا أَسْبَحُ فِي الْمَاءِ، وَأَنْتَ تَطِيرُ فِي الْهَوَاءِ.", "lang": "ar", "writing": [], "sceneText": "رَأَى الْعُصْفُورُ سَمَكَةً. قَالَتْ: أَنَا أَسْبَحُ فِي الْمَاءِ، وَأَنْتَ تَطِيرُ فِي الْهَوَاءِ.", "speech": "رَأَى الْعُصْفُورُ سَمَكَةً. قَالَتْ: أَنَا أَسْبَحُ فِي الْمَاءِ، وَأَنْتَ تَطِيرُ فِي الْهَوَاءِ.", "visual": {"type": "picture", "value": "🐦 🐟 💧"}}, {"front": "🐦 🪺 🌳", "word": "الْمَشْهَدُ 3", "q": "إِلَى أَيْنَ عَادَ الْعُصْفُورُ؟", "options": ["إِلَى عُشِّهِ", "إِلَى الْبَحْرِ"], "answer": "إِلَى عُشِّهِ", "detail": "عَادَ الْعُصْفُورُ إِلَى عُشِّهِ فَوْقَ الشَّجَرَةِ. وَجَدَ أُمَّهُ فَفَرِحَ.", "lang": "ar", "writing": [], "sceneText": "عَادَ الْعُصْفُورُ إِلَى عُشِّهِ فَوْقَ الشَّجَرَةِ. وَجَدَ أُمَّهُ فَفَرِحَ.", "speech": "عَادَ الْعُصْفُورُ إِلَى عُشِّهِ فَوْقَ الشَّجَرَةِ. وَجَدَ أُمَّهُ فَفَرِحَ.", "visual": {"type": "picture", "value": "🐦 🪺 🌳"}}], "guided": true, "bookActivity": true, "group": "story", "bookPages": [10, 12], "prereq": [], "criterion": "تُجِيبُ عَنْ سُؤَالَيْنِ مِنْ ثَلَاثَةٍ بَعْدَ الِاسْتِمَاعِ، وَتَحْكِي حَدَثًا بِكَلِمَاتِهَا.", "easier": "نُقَدِّمُ مِثَالًا، ثُمَّ نُجَرِّبُ خِيَارَيْنِ وَنَمْنَحُ وَقْتًا لِلتَّفْكِيرِ.", "harder": "نُغَيِّرُ الْمِثَالَ وَنَطْلُبُ شَرْحَ الِاخْتِيَارِ دُونَ تَلْقِينٍ.", "mistake": "نَقُولُ: نُجَرِّبُ مَعًا. نُعِيدُ الصَّوْتَ أَوِ النَّمُوذَجَ، ثُمَّ نُعِيدُ الْمُحَاوَلَةَ."}, {"id": "book_tidy", "subject": "arabic", "title": "🧸 نُرَتِّبُ أَدَوَاتَنَا", "cards": [{"front": "👧 🖍️ ❓", "word": "الْمَشْهَدُ 1", "q": "عَمَّ بَحَثَتْ رُقَيَّةُ؟", "options": ["عَنْ قَلَمِهَا", "عَنْ حِذَائِهَا"], "answer": "عَنْ قَلَمِهَا", "detail": "أَرَادَتْ رُقَيَّةُ أَنْ تَرْسُمَ. بَحَثَتْ عَنْ قَلَمِهَا فَلَمْ تَجِدْهُ.", "lang": "ar", "writing": [], "sceneText": "أَرَادَتْ رُقَيَّةُ أَنْ تَرْسُمَ. بَحَثَتْ عَنْ قَلَمِهَا فَلَمْ تَجِدْهُ.", "speech": "أَرَادَتْ رُقَيَّةُ أَنْ تَرْسُمَ. بَحَثَتْ عَنْ قَلَمِهَا فَلَمْ تَجِدْهُ.", "visual": {"type": "picture", "value": "👧 🖍️ ❓"}}, {"front": "👨 👧 📦", "word": "الْمَشْهَدُ 2", "q": "أَيْنَ وَضَعَا الْأَقْلَامَ؟", "options": ["تَحْتَ السَّرِيرِ", "فِي عُلْبَةٍ"], "answer": "فِي عُلْبَةٍ", "detail": "سَاعَدَهَا إِيسُو. وَضَعَا الْأَقْلَامَ فِي عُلْبَةٍ، وَالْأَوْرَاقَ عَلَى الطَّاوِلَةِ.", "lang": "ar", "writing": [], "sceneText": "سَاعَدَهَا إِيسُو. وَضَعَا الْأَقْلَامَ فِي عُلْبَةٍ، وَالْأَوْرَاقَ عَلَى الطَّاوِلَةِ.", "speech": "سَاعَدَهَا إِيسُو. وَضَعَا الْأَقْلَامَ فِي عُلْبَةٍ، وَالْأَوْرَاقَ عَلَى الطَّاوِلَةِ.", "visual": {"type": "picture", "value": "👨 👧 📦"}}, {"front": "👧 🎨 ☀️", "word": "الْمَشْهَدُ 3", "q": "مَاذَا رَسَمَتْ رُقَيَّةُ؟", "options": ["شَمْسًا", "سَمَكَةً"], "answer": "شَمْسًا", "detail": "وَجَدَتْ رُقَيَّةُ قَلَمَهَا وَرَسَمَتْ شَمْسًا. قَالَتْ: التَّرْتِيبُ يُسَاعِدُنِي.", "lang": "ar", "writing": [], "sceneText": "وَجَدَتْ رُقَيَّةُ قَلَمَهَا وَرَسَمَتْ شَمْسًا. قَالَتْ: التَّرْتِيبُ يُسَاعِدُنِي.", "speech": "وَجَدَتْ رُقَيَّةُ قَلَمَهَا وَرَسَمَتْ شَمْسًا. قَالَتْ: التَّرْتِيبُ يُسَاعِدُنِي.", "visual": {"type": "picture", "value": "👧 🎨 ☀️"}}], "guided": true, "bookActivity": true, "group": "story", "bookPages": [52], "prereq": [], "criterion": "تُجِيبُ عَنْ سُؤَالَيْنِ مِنْ ثَلَاثَةٍ بَعْدَ الِاسْتِمَاعِ، وَتَحْكِي حَدَثًا بِكَلِمَاتِهَا.", "easier": "نُقَدِّمُ مِثَالًا، ثُمَّ نُجَرِّبُ خِيَارَيْنِ وَنَمْنَحُ وَقْتًا لِلتَّفْكِيرِ.", "harder": "نُغَيِّرُ الْمِثَالَ وَنَطْلُبُ شَرْحَ الِاخْتِيَارِ دُونَ تَلْقِينٍ.", "mistake": "نَقُولُ: نُجَرِّبُ مَعًا. نُعِيدُ الصَّوْتَ أَوِ النَّمُوذَجَ، ثُمَّ نُعِيدُ الْمُحَاوَلَةَ."}, {"id": "book_friend", "subject": "arabic", "title": "🤝 نَلْعَبُ وَنَتَعَاوَنُ", "cards": [{"front": "👧 🧒 🧩", "word": "الْمَشْهَدُ 1", "q": "مَاذَا كَانَتَا تَفْعَلَانِ؟", "options": ["تُرَكِّبَانِ صُورَةً", "تَغْسِلَانِ الْأَطْبَاقَ"], "answer": "تُرَكِّبَانِ صُورَةً", "detail": "كَانَتْ رُقَيَّةُ تُرَكِّبُ صُورَةً مَعَ صَدِيقَتِهَا. بَقِيَ مَكَانٌ فَارِغٌ.", "lang": "ar", "writing": [], "sceneText": "كَانَتْ رُقَيَّةُ تُرَكِّبُ صُورَةً مَعَ صَدِيقَتِهَا. بَقِيَ مَكَانٌ فَارِغٌ.", "speech": "كَانَتْ رُقَيَّةُ تُرَكِّبُ صُورَةً مَعَ صَدِيقَتِهَا. بَقِيَ مَكَانٌ فَارِغٌ.", "visual": {"type": "picture", "value": "👧 🧒 🧩"}}, {"front": "🧒 🧩 👧", "word": "الْمَشْهَدُ 2", "q": "مَاذَا قَالَتْ رُقَيَّةُ؟", "options": ["شُكْرًا لَكِ", "اِبْتَعِدِي عَنِّي"], "answer": "شُكْرًا لَكِ", "detail": "وَجَدَتْ صَدِيقَتُهَا الْقِطْعَةَ الْأَخِيرَةَ. أَعْطَتْهَا لِرُقَيَّةَ فَقَالَتْ: شُكْرًا لَكِ.", "lang": "ar", "writing": [], "sceneText": "وَجَدَتْ صَدِيقَتُهَا الْقِطْعَةَ الْأَخِيرَةَ. أَعْطَتْهَا لِرُقَيَّةَ فَقَالَتْ: شُكْرًا لَكِ.", "speech": "وَجَدَتْ صَدِيقَتُهَا الْقِطْعَةَ الْأَخِيرَةَ. أَعْطَتْهَا لِرُقَيَّةَ فَقَالَتْ: شُكْرًا لَكِ.", "visual": {"type": "picture", "value": "🧒 🧩 👧"}}, {"front": "👧 🧒 🖼️ 💜", "word": "الْمَشْهَدُ 3", "q": "مَا الَّذِي سَاعَدَهُمَا؟", "options": ["الشِّجَارُ", "التَّعَاوُنُ"], "answer": "التَّعَاوُنُ", "detail": "اِكْتَمَلَتِ الصُّورَةُ وَفَرِحَتَا. قَالَتَا: التَّعَاوُنُ يُسَاعِدُنَا.", "lang": "ar", "writing": [], "sceneText": "اِكْتَمَلَتِ الصُّورَةُ وَفَرِحَتَا. قَالَتَا: التَّعَاوُنُ يُسَاعِدُنَا.", "speech": "اِكْتَمَلَتِ الصُّورَةُ وَفَرِحَتَا. قَالَتَا: التَّعَاوُنُ يُسَاعِدُنَا.", "visual": {"type": "picture", "value": "👧 🧒 🖼️ 💜"}}], "guided": true, "bookActivity": true, "group": "story", "bookPages": [132, 162], "prereq": [], "criterion": "تُجِيبُ عَنْ سُؤَالَيْنِ مِنْ ثَلَاثَةٍ بَعْدَ الِاسْتِمَاعِ، وَتَحْكِي حَدَثًا بِكَلِمَاتِهَا.", "easier": "نُقَدِّمُ مِثَالًا، ثُمَّ نُجَرِّبُ خِيَارَيْنِ وَنَمْنَحُ وَقْتًا لِلتَّفْكِيرِ.", "harder": "نُغَيِّرُ الْمِثَالَ وَنَطْلُبُ شَرْحَ الِاخْتِيَارِ دُونَ تَلْقِينٍ.", "mistake": "نَقُولُ: نُجَرِّبُ مَعًا. نُعِيدُ الصَّوْتَ أَوِ النَّمُوذَجَ، ثُمَّ نُعِيدُ الْمُحَاوَلَةَ."}];
SUBJECTS[0].lessons.push(...BOOK_LESSONS);
SUBJECTS.splice(1);
Object.assign(CURRICULUM,{"weeks": [{"title": "حُرُوفٌ نَبْدَأُ بِهَا", "goal": "نَسْتَمِعُ وَنَفْهَمُ، ثُمَّ نَلْعَبُ بِالْحُرُوفِ وَنَكْتُبُ.", "lessons": ["ar_start", "book_home"], "days": [{"name": "نَسْتَكْشِفُ", "lessons": ["ar_start"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نَسْتَمِعُ وَنَحْكِي", "lessons": ["book_home"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُجَرِّبُ وَنَكْتُبُ", "lessons": ["ar_start"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُثَبِّتُ مَا تَعَلَّمْنَا", "lessons": ["book_home"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُرَاجِعُ وَنَلْعَبُ", "lessons": ["ar_start", "book_home"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": true, "blocks": ["٣ دَقَائِقَ: نَخْتَارُ لُعْبَتَيْنِ مِنْ أَنْشِطَةِ الْأُسْبُوعِ.", "١٠ دَقَائِقَ: لُعْبَةٌ أُولَى.", "٣ دَقَائِقَ: حَرَكَةٌ.", "١٠ دَقَائِقَ: لُعْبَةٌ ثَانِيَةٌ أَوْ مَشْرُوعٌ.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: نَعْرِضُ إِنْجَازَنَا وَنُسَجِّلُ الْمُلَاحَظَاتِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}]}, {"title": "شَكْلُ الْحَرْفِ وَاتِّصَالُهُ", "goal": "نَسْتَمِعُ وَنَفْهَمُ، ثُمَّ نَلْعَبُ بِالْحُرُوفِ وَنَكْتُبُ.", "lessons": ["ar_forms", "book_trace"], "days": [{"name": "نَسْتَكْشِفُ", "lessons": ["ar_forms"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نَسْتَمِعُ وَنَحْكِي", "lessons": ["book_trace"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُجَرِّبُ وَنَكْتُبُ", "lessons": ["ar_forms"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُثَبِّتُ مَا تَعَلَّمْنَا", "lessons": ["book_trace"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُرَاجِعُ وَنَلْعَبُ", "lessons": ["ar_forms", "book_trace"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": true, "blocks": ["٣ دَقَائِقَ: نَخْتَارُ لُعْبَتَيْنِ مِنْ أَنْشِطَةِ الْأُسْبُوعِ.", "١٠ دَقَائِقَ: لُعْبَةٌ أُولَى.", "٣ دَقَائِقَ: حَرَكَةٌ.", "١٠ دَقَائِقَ: لُعْبَةٌ ثَانِيَةٌ أَوْ مَشْرُوعٌ.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: نَعْرِضُ إِنْجَازَنَا وَنُسَجِّلُ الْمُلَاحَظَاتِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}]}, {"title": "صَوْتُ الْحَرْفِ: فَتْحَة", "goal": "نَسْتَمِعُ وَنَفْهَمُ، ثُمَّ نَلْعَبُ بِالْحُرُوفِ وَنَكْتُبُ.", "lessons": ["ar_fatha", "book_start"], "days": [{"name": "نَسْتَكْشِفُ", "lessons": ["ar_fatha"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نَسْتَمِعُ وَنَحْكِي", "lessons": ["book_start"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُجَرِّبُ وَنَكْتُبُ", "lessons": ["ar_fatha"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُثَبِّتُ مَا تَعَلَّمْنَا", "lessons": ["book_start"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُرَاجِعُ وَنَلْعَبُ", "lessons": ["ar_fatha", "book_start"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": true, "blocks": ["٣ دَقَائِقَ: نَخْتَارُ لُعْبَتَيْنِ مِنْ أَنْشِطَةِ الْأُسْبُوعِ.", "١٠ دَقَائِقَ: لُعْبَةٌ أُولَى.", "٣ دَقَائِقَ: حَرَكَةٌ.", "١٠ دَقَائِقَ: لُعْبَةٌ ثَانِيَةٌ أَوْ مَشْرُوعٌ.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: نَعْرِضُ إِنْجَازَنَا وَنُسَجِّلُ الْمُلَاحَظَاتِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}]}, {"title": "نَقْرَأُ بِالْفَتْحَةِ", "goal": "نَسْتَمِعُ وَنَفْهَمُ، ثُمَّ نَلْعَبُ بِالْحُرُوفِ وَنَكْتُبُ.", "lessons": ["ar_read_a", "book_build"], "days": [{"name": "نَسْتَكْشِفُ", "lessons": ["ar_read_a"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نَسْتَمِعُ وَنَحْكِي", "lessons": ["book_build"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُجَرِّبُ وَنَكْتُبُ", "lessons": ["ar_read_a"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُثَبِّتُ مَا تَعَلَّمْنَا", "lessons": ["book_build"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُرَاجِعُ وَنَلْعَبُ", "lessons": ["ar_read_a", "book_build"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": true, "blocks": ["٣ دَقَائِقَ: نَخْتَارُ لُعْبَتَيْنِ مِنْ أَنْشِطَةِ الْأُسْبُوعِ.", "١٠ دَقَائِقَ: لُعْبَةٌ أُولَى.", "٣ دَقَائِقَ: حَرَكَةٌ.", "١٠ دَقَائِقَ: لُعْبَةٌ ثَانِيَةٌ أَوْ مَشْرُوعٌ.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: نَعْرِضُ إِنْجَازَنَا وَنُسَجِّلُ الْمُلَاحَظَاتِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}]}, {"title": "نُكْمِلُ وَنُكَوِّنُ كَلِمَةً", "goal": "نَسْتَمِعُ وَنَفْهَمُ، ثُمَّ نَلْعَبُ بِالْحُرُوفِ وَنَكْتُبُ.", "lessons": ["ar_missing", "book_end"], "days": [{"name": "نَسْتَكْشِفُ", "lessons": ["ar_missing"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نَسْتَمِعُ وَنَحْكِي", "lessons": ["book_end"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُجَرِّبُ وَنَكْتُبُ", "lessons": ["ar_missing"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُثَبِّتُ مَا تَعَلَّمْنَا", "lessons": ["book_end"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُرَاجِعُ وَنَلْعَبُ", "lessons": ["ar_missing", "book_end"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": true, "blocks": ["٣ دَقَائِقَ: نَخْتَارُ لُعْبَتَيْنِ مِنْ أَنْشِطَةِ الْأُسْبُوعِ.", "١٠ دَقَائِقَ: لُعْبَةٌ أُولَى.", "٣ دَقَائِقَ: حَرَكَةٌ.", "١٠ دَقَائِقَ: لُعْبَةٌ ثَانِيَةٌ أَوْ مَشْرُوعٌ.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: نَعْرِضُ إِنْجَازَنَا وَنُسَجِّلُ الْمُلَاحَظَاتِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}]}, {"title": "صَوْتُ الْحَرْفِ: ضَمَّة", "goal": "نَسْتَمِعُ وَنَفْهَمُ، ثُمَّ نَلْعَبُ بِالْحُرُوفِ وَنَكْتُبُ.", "lessons": ["ar_damma", "book_tidy"], "days": [{"name": "نَسْتَكْشِفُ", "lessons": ["ar_damma"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نَسْتَمِعُ وَنَحْكِي", "lessons": ["book_tidy"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُجَرِّبُ وَنَكْتُبُ", "lessons": ["ar_damma"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُثَبِّتُ مَا تَعَلَّمْنَا", "lessons": ["book_tidy"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُرَاجِعُ وَنَلْعَبُ", "lessons": ["ar_damma", "book_tidy"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": true, "blocks": ["٣ دَقَائِقَ: نَخْتَارُ لُعْبَتَيْنِ مِنْ أَنْشِطَةِ الْأُسْبُوعِ.", "١٠ دَقَائِقَ: لُعْبَةٌ أُولَى.", "٣ دَقَائِقَ: حَرَكَةٌ.", "١٠ دَقَائِقَ: لُعْبَةٌ ثَانِيَةٌ أَوْ مَشْرُوعٌ.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: نَعْرِضُ إِنْجَازَنَا وَنُسَجِّلُ الْمُلَاحَظَاتِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}]}, {"title": "صَوْتُ الْحَرْفِ: كَسْرَة", "goal": "نَسْتَمِعُ وَنَفْهَمُ، ثُمَّ نَلْعَبُ بِالْحُرُوفِ وَنَكْتُبُ.", "lessons": ["ar_kasra", "book_trace"], "days": [{"name": "نَسْتَكْشِفُ", "lessons": ["ar_kasra"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نَسْتَمِعُ وَنَحْكِي", "lessons": ["book_trace"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُجَرِّبُ وَنَكْتُبُ", "lessons": ["ar_kasra"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُثَبِّتُ مَا تَعَلَّمْنَا", "lessons": ["book_trace"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُرَاجِعُ وَنَلْعَبُ", "lessons": ["ar_kasra", "book_trace"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": true, "blocks": ["٣ دَقَائِقَ: نَخْتَارُ لُعْبَتَيْنِ مِنْ أَنْشِطَةِ الْأُسْبُوعِ.", "١٠ دَقَائِقَ: لُعْبَةٌ أُولَى.", "٣ دَقَائِقَ: حَرَكَةٌ.", "١٠ دَقَائِقَ: لُعْبَةٌ ثَانِيَةٌ أَوْ مَشْرُوعٌ.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: نَعْرِضُ إِنْجَازَنَا وَنُسَجِّلُ الْمُلَاحَظَاتِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}]}, {"title": "حُرُوفٌ جَدِيدَةٌ لِكَلِمَاتِنَا", "goal": "نَسْتَمِعُ وَنَفْهَمُ، ثُمَّ نَلْعَبُ بِالْحُرُوفِ وَنَكْتُبُ.", "lessons": ["ar_more", "book_start"], "days": [{"name": "نَسْتَكْشِفُ", "lessons": ["ar_more"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نَسْتَمِعُ وَنَحْكِي", "lessons": ["book_start"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُجَرِّبُ وَنَكْتُبُ", "lessons": ["ar_more"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُثَبِّتُ مَا تَعَلَّمْنَا", "lessons": ["book_start"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُرَاجِعُ وَنَلْعَبُ", "lessons": ["ar_more", "book_start"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": true, "blocks": ["٣ دَقَائِقَ: نَخْتَارُ لُعْبَتَيْنِ مِنْ أَنْشِطَةِ الْأُسْبُوعِ.", "١٠ دَقَائِقَ: لُعْبَةٌ أُولَى.", "٣ دَقَائِقَ: حَرَكَةٌ.", "١٠ دَقَائِقَ: لُعْبَةٌ ثَانِيَةٌ أَوْ مَشْرُوعٌ.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: نَعْرِضُ إِنْجَازَنَا وَنُسَجِّلُ الْمُلَاحَظَاتِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}]}, {"title": "نَدْمِجُ الْحَرَكَاتِ", "goal": "نَسْتَمِعُ وَنَفْهَمُ، ثُمَّ نَلْعَبُ بِالْحُرُوفِ وَنَكْتُبُ.", "lessons": ["ar_mix", "book_friend"], "days": [{"name": "نَسْتَكْشِفُ", "lessons": ["ar_mix"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نَسْتَمِعُ وَنَحْكِي", "lessons": ["book_friend"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُجَرِّبُ وَنَكْتُبُ", "lessons": ["ar_mix"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُثَبِّتُ مَا تَعَلَّمْنَا", "lessons": ["book_friend"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُرَاجِعُ وَنَلْعَبُ", "lessons": ["ar_mix", "book_friend"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": true, "blocks": ["٣ دَقَائِقَ: نَخْتَارُ لُعْبَتَيْنِ مِنْ أَنْشِطَةِ الْأُسْبُوعِ.", "١٠ دَقَائِقَ: لُعْبَةٌ أُولَى.", "٣ دَقَائِقَ: حَرَكَةٌ.", "١٠ دَقَائِقَ: لُعْبَةٌ ثَانِيَةٌ أَوْ مَشْرُوعٌ.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: نَعْرِضُ إِنْجَازَنَا وَنُسَجِّلُ الْمُلَاحَظَاتِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}]}, {"title": "إِمْلَاءٌ قَصِيرٌ", "goal": "نَسْتَمِعُ وَنَفْهَمُ، ثُمَّ نَلْعَبُ بِالْحُرُوفِ وَنَكْتُبُ.", "lessons": ["ar_dictation", "book_build"], "days": [{"name": "نَسْتَكْشِفُ", "lessons": ["ar_dictation"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نَسْتَمِعُ وَنَحْكِي", "lessons": ["book_build"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُجَرِّبُ وَنَكْتُبُ", "lessons": ["ar_dictation"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُثَبِّتُ مَا تَعَلَّمْنَا", "lessons": ["book_build"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُرَاجِعُ وَنَلْعَبُ", "lessons": ["ar_dictation", "book_build"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": true, "blocks": ["٣ دَقَائِقَ: نَخْتَارُ لُعْبَتَيْنِ مِنْ أَنْشِطَةِ الْأُسْبُوعِ.", "١٠ دَقَائِقَ: لُعْبَةٌ أُولَى.", "٣ دَقَائِقَ: حَرَكَةٌ.", "١٠ دَقَائِقَ: لُعْبَةٌ ثَانِيَةٌ أَوْ مَشْرُوعٌ.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: نَعْرِضُ إِنْجَازَنَا وَنُسَجِّلُ الْمُلَاحَظَاتِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}]}, {"title": "👂 أَسْمَعُ آخِرَ الْكَلِمَةِ", "goal": "نَسْتَمِعُ وَنَفْهَمُ، ثُمَّ نَلْعَبُ بِالْحُرُوفِ وَنَكْتُبُ.", "lessons": ["book_end", "book_tidy"], "days": [{"name": "نَسْتَكْشِفُ", "lessons": ["book_end"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نَسْتَمِعُ وَنَحْكِي", "lessons": ["book_tidy"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُجَرِّبُ وَنَكْتُبُ", "lessons": ["book_end"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُثَبِّتُ مَا تَعَلَّمْنَا", "lessons": ["book_tidy"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُرَاجِعُ وَنَلْعَبُ", "lessons": ["book_end", "book_tidy"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": true, "blocks": ["٣ دَقَائِقَ: نَخْتَارُ لُعْبَتَيْنِ مِنْ أَنْشِطَةِ الْأُسْبُوعِ.", "١٠ دَقَائِقَ: لُعْبَةٌ أُولَى.", "٣ دَقَائِقَ: حَرَكَةٌ.", "١٠ دَقَائِقَ: لُعْبَةٌ ثَانِيَةٌ أَوْ مَشْرُوعٌ.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: نَعْرِضُ إِنْجَازَنَا وَنُسَجِّلُ الْمُلَاحَظَاتِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}]}, {"title": "نَدْمِجُ الْحَرَكَاتِ", "goal": "نَسْتَمِعُ وَنَفْهَمُ، ثُمَّ نَلْعَبُ بِالْحُرُوفِ وَنَكْتُبُ.", "lessons": ["ar_mix", "ar_dictation", "book_friend"], "days": [{"name": "نَسْتَكْشِفُ", "lessons": ["ar_mix"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نَسْتَمِعُ وَنَحْكِي", "lessons": ["ar_dictation"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُجَرِّبُ وَنَكْتُبُ", "lessons": ["book_friend"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُثَبِّتُ مَا تَعَلَّمْنَا", "lessons": ["ar_mix"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": false, "blocks": ["٣ دَقَائِقَ: تَهْيِئَةٌ وَاخْتِيَارُ الْأَدَوَاتِ.", "١٠ دَقَائِقَ: النَّشَاطُ الْأَوَّلُ.", "٣ دَقَائِقَ: حَرَكَةٌ وَمَاءٌ.", "١٠ دَقَائِقَ: النَّشَاطُ الثَّانِي.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: لُعْبَةُ مُرَاجَعَةٍ وَمُلَاحَظَةُ التَّقَدُّمِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}, {"name": "نُرَاجِعُ وَنَلْعَبُ", "lessons": ["ar_mix", "ar_dictation", "book_friend"], "minutes": 35, "materials": "وَرَقَةٌ، قَلَمٌ، أَلْوَانٌ، وَبِطَاقَاتُ حُرُوفٍ.", "movement": "نَقِفُ وَنَمُدُّ الذِّرَاعَيْنِ، ثُمَّ نَمْشِي خَمْسَ خُطُوَاتٍ.", "script": "نَتَعَلَّمُ مَعًا. خُذِي وَقْتَكِ، وَيُمْكِنُنَا أَنْ نُحَاوِلَ مَرَّةً أُخْرَى.", "review": true, "blocks": ["٣ دَقَائِقَ: نَخْتَارُ لُعْبَتَيْنِ مِنْ أَنْشِطَةِ الْأُسْبُوعِ.", "١٠ دَقَائِقَ: لُعْبَةٌ أُولَى.", "٣ دَقَائِقَ: حَرَكَةٌ.", "١٠ دَقَائِقَ: لُعْبَةٌ ثَانِيَةٌ أَوْ مَشْرُوعٌ.", "٣ دَقَائِقَ: اسْتِرَاحَةٌ.", "٦ دَقَائِقَ: نَعْرِضُ إِنْجَازَنَا وَنُسَجِّلُ الْمُلَاحَظَاتِ."], "steps": ["نَسْتَعْرِضُ الْبِطَاقَاتِ وَنَسْتَمِعُ إِلَى النَّمُوذَجِ.", "نَتَبَادَلُ الْأَدْوَارَ فِي النَّشَاطِ.", "نُجَرِّبُ مِثَالًا عَلَى الْوَرَقِ أَوْ نَحْكِي مَا فَهِمْنَاهُ.", "نُسَجِّلُ الْمُلَاحَظَةَ وَنَخْتِمُ بِالتَّشْجِيعِ."]}]}], "assessment": [{"id": "base_ar", "title": "أَعْرِفُ الْحُرُوفَ", "prompt": "اِعْرِضْ ب وَت وَم. اطْلُبْ مِنْ رُقَيَّةَ أَنْ تُشِيرَ إِلَى ب، ثُمَّ م.", "challenge": "هَلْ تَسْتَطِيعُ تَسْمِيَةَ الْحُرُوفِ؟", "start": "إِذَا احْتَاجَتْ مُسَاعَدَةً، نَبْدَأُ بِحُرُوفٍ نَبْدَأُ بِهَا."}, {"id": "base_sound", "title": "أَسْمَعُ الصَّوْتَ", "prompt": "قُلْ: سَمَكَة. هَلْ تَبْدَأُ بِسِينٍ أَمْ مِيمٍ؟", "challenge": "قُلْ: قَلَم. مَا الْحَرْفُ الْأَخِيرُ؟", "start": "عِنْدَ الصُّعُوبَةِ نَبْدَأُ بِنَشَاطِ أَوَّلِ الْكَلِمَةِ."}, {"id": "base_read", "title": "أَجْمَعُ الْأَصْوَاتَ", "prompt": "اِعْرِضْ بَ، ثُمَّ كَتَبَ. دَعْهَا تُحَاوِلُ دُونَ تَلْقِينٍ.", "challenge": "هَلْ تَقْرَأُ رَسَمَ؟", "start": "إِذَا سَمَّتِ الْحُرُوفَ فَقَطْ، نُرَاجِعُ الْفَتْحَةَ وَدَمْجَ الْأَصْوَاتِ."}, {"id": "base_write", "title": "أَكْتُبُ وَأَحْكِي", "prompt": "اطْلُبْ مِنْهَا نَسْخَ ب، ثُمَّ حِكَايَةَ شَيْءٍ حَدَثَ الْيَوْمَ.", "challenge": "هَلْ تَكْتُبُ ب دُونَ نَمُوذَجٍ؟", "start": "نُقَدِّمُ التَّتَبُّعَ لِلْكِتَابَةِ، وَقِصَّةً قَصِيرَةً لِلْفَهْمِ وَالتَّعْبِيرِ."}]});
