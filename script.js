const searchInput = document.getElementById('searchInput');
const suggestions = document.getElementById('suggestions');
const result = document.getElementById('result');
const wordEl = document.getElementById('word');
const definitionEl = document.getElementById('definition');
const urduMeaningEl = document.getElementById('urduMeaning');
const playSound = document.getElementById('playSound');
const themeToggle = document.getElementById('themeToggle');

let currentWord = '';

// Toggle Theme
themeToggle.onclick = () => {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
};

// Sample keywords for suggestion (you can load from words.json)
const keywords = ["apple", "book", "computer", "dictionary", "education", "flower", "gold"];

// Show suggestions
searchInput.addEventListener('input', () => {
  const value = searchInput.value.toLowerCase();
  suggestions.innerHTML = '';
  if (value) {
    const filtered = keywords.filter(word => word.startsWith(value));
    filtered.forEach(word => {
      const li = document.createElement('li');
      li.textContent = word;
      li.onclick = () => searchWord(word);
      suggestions.appendChild(li);
    });
  }
});

// On Enter or manual search
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchWord(searchInput.value.trim());
  }
});

function searchWord(word) {
  currentWord = word;
  searchInput.value = word;
  suggestions.innerHTML = '';

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json())
    .then(data => {
      const definition = data[0]?.meanings[0]?.definitions[0]?.definition || 'Not found';
      const audioUrl = data[0]?.phonetics[0]?.audio || '';

      wordEl.textContent = word;
      definitionEl.textContent = definition;
      urduMeaningEl.textContent = getUrduMeaning(word);
      result.classList.remove('hidden');

      // Store audio URL for playback
      playSound.onclick = () => {
        const audio = new Audio(audioUrl);
        audio.play();
      };
    })
    .catch(() => {
      result.classList.remove('hidden');
      wordEl.textContent = word;
      definitionEl.textContent = 'Definition not found';
      urduMeaningEl.textContent = 'Urdu meaning not available';
    });
}

function getUrduMeaning(word) {
  const meanings = {
    "apple": "سیب",
    "book": "کتاب",
    "computer": "کمپیوٹر",
    "dictionary": "لغت",
    "education": "تعلیم",
    "flower": "پھول",
    "gold": "سونا", 
    "abandon": "ترک کرنا",
"aberration": "انحراف",
"abhor": "نفرت کرنا",
"abide": "رہنا",
"abstain": "پرہیز کرنا",
"accolade": "تعریف",
"acquiesce": "راضی ہونا",
"adage": "کہاوت",
"adamant": "پکا",
"adroit": "ماہر",
"adulation": "چاپلوسی",
"affable": "خوش مزاج",
"affluent": "دولت مند",
"alacrity": "تیزی",
"allude": "اشارہ کرنا",
"ambiguous": "مبہم",
"ameliorate": "بہتر بنانا",
"anomaly": "غیر معمولی",
"antagonist": "مخالف",
"apathy": "بے رغبتی",
"appease": "تسلی دینا",
"ardent": "جوشیلے",
"articulate": "واضح",
"ascertain": "معلوم کرنا",
"assiduous": "محنتی",
"audacious": "جرات مندانہ",
"belligerent": "جنگجو",
"benevolent": "خیرات دینے والا",
"blatant": "واضح",
"brevity": "اختصار",
"cacophony": "ہنگامہ",
"candor": "سچائی",
"capricious": "ناچیز",
"cathartic": "صاف کرنے والا",
"censure": "مذمت کرنا",
"chicanery": "چالبازی",
"coerce": "مجبور کرنا",
"cogent": "مضبوط",
"collaborate": "مل کر کام کرنا",
"commemorate": "یاد رکھنا",
"compelling": "دلچسپ",
"concur": "متفق ہونا",
"condone": "معاف کرنا",
"congenial": "ہم آہنگ",
"conscientious": "ضمیر والا",
"conspicuous": "نمایاں",
"contumacious": "سرکشی",
"copious": "کثیر",
"corroborate": "تصدیق کرنا",
"credulous": "آسانی سے یقین کرنے والا",
"culpable": "ذمہ دار",
"cursory": "جلدی سے",
"debilitate": "کمزور کرنا",
"deference": "احترام",
"defenestration": "کھڑکی سے باہر پھینکنا",
"defiant": "چیلنج کرنے والا",
"deleterious": "نقصان دہ",
"demure": "شرمیلا",
"denounce": "مذمت کرنا",
"deride": "مذاق اڑانا",
"despot": "آمر",
"diatribe": "شدید تنقید",
"diffident": "شرمیلا",
"diligent": "محنتی",
"discreet": "ہوشیار",
"disdain": "حقارت",
"disseminate": "پھیلانا",
"divulge": "ظاہر کرنا",
"dogmatic": "جزم پیشہ",
"duress": "دباؤ",
"ebullient": "جوشیلے",
"eclectic": "مختلف ذرائع سے منتخب",
"effervescent": "جھاگ دار",
"elucidate": "واضح کرنا",
"emulate": "مشابہت کرنا",
"enervate": "کمزور کرنا",
"ephemeral": "فانی",
"equanimity": "برداشت",
"esoteric": "خفیہ",
"ethereal": "نازک",
"euphemism": "نرم لفظ",
"exacerbate": "مزید بگاڑنا",
"exemplary": "نمونہ",
"exonerate": "بری کرنا",
"expedite": "جلدی کرنا",
"extemporaneous": "بغیر تیاری کے",
"facetious": "مذاق کرنے والا",
"fallacious": "غلط",
"fatuous": "احمقانہ",
"flabbergasted": "حیران",
"fortuitous": "اتفاقی",
"frivolous": "فضول",
"garrulous": "بکواس کرنے والا",
"germane": "متعلقہ",
"grandiose": "عظیم",
"gregarious": "ملنسار",
"guile": "چالبازی",
"harangue": "طویل تقریر",
"hegemony": "غلبہ",
"iconoclast": "مذہبی روایات کا مخالف",
"ignominious": "شرمناک",
"imbroglio": "پریشانی",
"impasse": "بند گلی",
"impeccable": "بے عیب",
"impervious": "ناقابل penetrable",
"impetuous": "جذبے سے",
"implacable": "غصے والا",
"impugn": "مذمت کرنا",
"incendiary": "آگ لگانے والا",
"incognito": "نامعلوم",
"indefatigable": "ناقابل تھکاؤ",
"indolent": "سست",
"ineffable": "ناقابل بیان",
"inept": "نااہل",
"inexorable": "ناقابل روک",
"infallible": "غلطی سے پاک",
"infamous": "بدنام",
"ingenious": "ہوشیار",
"innocuous": "نقصان دہ نہیں",
"insidious": "چالباز",
"insipid": "بے ذائقہ",
"intrepid": "بہادر",
"inveterate": "پرانی عادت والا",
"irascible": "غصے والا",
"jovial": "خوش مزاج",
"juxtapose": "موازنہ کرنا",
"laconic": "مختصر",
"languid": "کمزور",
"latent": "نہ ظاہر ہونے والا",
"laudable": "تعریف کے قابل",
"lethargic": "سست",
"lucid": "واضح",
"magnanimous": "بڑا دل",
"malevolent": "بدخواہ",
"mellifluous": "میٹھا",
"meticulous": "دقیق",
"mundane": "دنیاوی",
"nefarious": "بدنام",
"obfuscate": "مبہم کرنا",
"oblivious": "غافل",
"obsequious": "چاپلوس",
"odious": "نفرت انگیز",
"omnipotent": "سب طاقتور",
"opulent": "دولت مند",
"ostentatious": "دکھاوا",
"panacea": "علاج",
"paradigm": "مثال",
"pedantic": "علمی",
"penultimate": "آخری سے ایک",
"perfidious": "غدار",
"perfunctory": "روٹین کا",
"perspicacious": "دور اندیش",
"phlegmatic": "سکون والا",
"plethora": "کثرت",
"precipitous": "تیز",
"proclivity": "رجحان",
"prodigal": "فضول خرچ",
"prolific": "زرخیز",
"propensity": "رجحان",
"prosaic": "عام",
"pugnacious": "لڑاکا",
"pulchritudinous": "خوبصورت",
"quixotic": "خوابوں میں رہنے والا",
"recalcitrant": "سرکش",
"recondite": "گہرا",
"redundant": "اضافی",
"rejuvenate": "نیا کرنا",
"relinquish": "چھوڑ دینا",
"remonstrate": "اعتراض کرنا",
"reprehensible": "قابل مذمت",
"resilient": "لچکدار",
"reticent": "خاموش",
"rhetoric": "بلاغت",
"sagacious": "دانشمند",
"sanguine": "خوش مزاج",
"serendipity": "اتفاقی خوشی",
"soliloquy": "خود کلامی",
"sophisticated": "نفیس",
"spurious": "جعلی",
"stoic": "بردبار",
"supercilious": "مغرور",
"susceptible": "حساس",
"sycophant": "چاپلوس",
"taciturn": "خاموش",
"tantamount": "برابر",
"tenacious": "مضبوط",
"terse": "مختصر",
"tacit": "خاموش",
"trepidation": "خوف",
"ubiquitous": "ہر جگہ موجود",
"vacillate": "ہچکچانا",
"vacuous": "خالی",
"venerate": "عزت دینا",
"verbose": "طویل",
"vindicate": "بری کرنا",
"virulent": "زہریلا",
"voracious": "بھوک لگان",
"warranted": "مجاز",
"wary": "ہوشیار",
"winsome": "دلکش"
  };
  return meanings[word.toLowerCase()] || "Urdu meaning not found";
}
