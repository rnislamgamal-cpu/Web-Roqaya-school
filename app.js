'use strict';
const KEY='roqaya_kg1_progress_v1', root=document.getElementById('app');
const fresh=()=>({v:1,best:{},seen:{},sound:true});
let state=fresh();try{const x=JSON.parse(localStorage.getItem(KEY));if(valid(x))state=x;}catch(e){}
let current=null, mode='home', index=0, questions=[], qi=0, score=0, misses=0, answered=false;
function valid(x){return x&&x.v===1&&typeof x.sound==='boolean'&&x.best&&x.seen&&typeof x.best==='object'&&typeof x.seen==='object'&&!Array.isArray(x.best)&&!Array.isArray(x.seen)&&Object.values(x.best).every(n=>Number.isInteger(n)&&n>=0&&n<=20)&&Object.values(x.seen).every(n=>Number.isInteger(n)&&n>=0&&n<=100);}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch(e){alert('تَعَذَّرَ حِفْظُ التَّقَدُّمِ. قَدْ تَكُونُ مِسَاحَةُ الْجِهَازِ مُمْتَلِئَةً.');}}
function el(tag,text,cls){const e=document.createElement(tag);if(text!==null&&text!==undefined)e.textContent=digits(arText(text));if(cls)e.className=cls;return e;}
function add(parent,...children){children.forEach(c=>parent.append(c));return parent;}
function button(text,fn,cls){const b=el('button',text,cls);b.onclick=(...args)=>{playEffect('tap');return fn(...args);};return b;}
let audioCtx;function playEffect(kind){if(!state.sound)return;try{const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)return;audioCtx=audioCtx||new Audio();if(audioCtx.state==='suspended')audioCtx.resume();const tones=kind==='correct'?[523,659,784]:kind==='wrong'?[310,240]:[600];tones.forEach((hz,i)=>{const osc=audioCtx.createOscillator(),gain=audioCtx.createGain(),start=audioCtx.currentTime+i*.09;osc.type='sine';osc.frequency.value=hz;gain.gain.setValueAtTime(.001,start);gain.gain.exponentialRampToValueAtTime(.09,start+.01);gain.gain.exponentialRampToValueAtTime(.001,start+.095);osc.connect(gain);gain.connect(audioCtx.destination);osc.start(start);osc.stop(start+.11);});}catch(ignore){}}
function reset(m){mode=m;root.replaceChildren();window.scrollTo(0,0);stopSpeech();}
function stopSpeech(){if(window.Android)Android.stop();else if(window.speechSynthesis)speechSynthesis.cancel();}
function speak(text,lang='ar'){if(!state.sound)return;text=speechText(text,lang);if(window.Android){Android.speak(text,lang);return;}if(window.speechSynthesis){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang=lang==='en'?'en-GB':'ar';u.rate=1.05;speechSynthesis.speak(u);}}
function total(){return Object.values(state.best).reduce((a,b)=>a+b,0);}
function key(){return current.lesson.id;}
function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function title(t,sub){add(root,el('h2',t));if(sub)add(root,el('p',sub,'muted'));}
function home(){current=null;reset('home');const hero=el('section',null,'hero');add(hero,el('span','🐰','mascot'),el('div','KG 1 • رِحْلَتِي الْجَمِيلَةُ','eyebrow'),el('h1','أَهْلًا يَا رُقَيَّة!'),el('p','مَاذَا سَنَكْتَشِفُ الْيَوْمَ؟'),el('p','دَرْسٌ صَغِيرٌ… وَفَرْحَةٌ كَبِيرَةٌ 💜','muted'));root.append(hero);const stats=el('div',null,'stats');add(stats,el('span','⭐ النُّجُومُ: '+total(),'pill'),el('span','📚 الدُّرُوسُ: '+Object.keys(state.seen).length,'pill'));root.append(stats);const grid=el('div',null,'grid');SUBJECTS.forEach(s=>{const b=button('',()=>subject(s),'subject');b.style.setProperty('--card',s.color);add(b,el('span',s.icon,'icon'),el('strong',s.name),el('small',s.desc));grid.append(b);});root.append(grid);const row=el('div',null,'row');add(row,button('🌟 مُلْصَقَاتِي',rewards,'secondary'),button('👨‍👩‍👧 لِوَلِيِّ الْأَمْرِ',parentGate));root.append(row);}
function subject(s){reset('subject');current={subject:s};title(s.icon+' '+s.name,'نَتَعَلَّمُ أَوَّلًا، ثُمَّ نَلْعَبُ مَعًا.');const list=el('div',null,'lesson-list');s.lessons.forEach(l=>{const b=button('',()=>{current={subject:s,lesson:l};index=0;learn();});add(b,el('strong',l.title),el('small','الْبِطَاقَاتُ: '+l.cards.length+' • ⭐ '+(state.best[l.id]||0)));list.append(b);});root.append(list);if(['art','arabic','english','math'].includes(s.id))root.append(button('✏️ لَوْحَةُ الرَّسْمِ وَالْكِتَابَةِ',()=>draw(s),'primary drawing-entry'));}
function learn(){
 reset('learn');const l=current.lesson,c=l.cards[index];state.seen[key()]=Math.max(state.seen[key()]||0,index+1);save();
 title(l.title,'الْبِطَاقَةُ '+(index+1)+' مِنْ '+l.cards.length);
 const p=el('div',null,'panel center');add(p,cardVisual(c),el('div',c.word,'word'));
 if(l.id==='add'){const d=el('div',c.detail,'equation');d.dir='ltr';p.append(d);}
 else if(l.id.startsWith('num'))p.append(el('div',c.detail,'count'));
 else p.append(el('p',c.detail,'muted'));
 p.append(button('🔊 اِسْتَمِعِي',()=>speak(lessonSpeech(c),c.lang),'secondary'));root.append(p);
 const row=el('div',null,'nav');const prev=button('السَّابِقُ',()=>{index--;learn();});prev.disabled=index===0;
 add(row,prev,button(index===l.cards.length-1?'🎯 نَلْعَبُ الْآنَ':'التَّالِي',()=>{if(index<l.cards.length-1){index++;learn();}else startQuiz();},'primary'));
 add(root,row,button('رُجُوعٌ إِلَى الدُّرُوسِ',()=>subject(current.subject)));
}
function startQuiz(){questions=shuffle(current.lesson.cards);qi=score=misses=0;showQuestion();}
let shownOptions=[];
function showQuestion(){
 reset('quiz');answered=false;misses=0;const c=questions[qi];shownOptions=shuffle(c.options);
 title('اِخْتَارِي الْإِجَابَةَ','السُّؤَالُ '+(qi+1)+' مِنْ '+questions.length);
 const bar=el('div',null,'progress'),fill=el('i');fill.style.width=(qi/questions.length*100)+'%';bar.append(fill);root.append(bar);
 const p=el('div',null,'panel center');
 if(current.lesson.id.startsWith('num'))p.append(el('div',c.detail,'count'));
 const isPattern=c.front==='🔴 🔵 🔴 🔵';
 const q=el('h2',isPattern?'مَا اللَّوْنُ التَّالِي؟':c.q,current.lesson.id==='add'?'equation':'');q.dir=current.lesson.id==='add'?'ltr':c.lang==='en'?'ltr':'rtl';p.append(q);
 if(isPattern)p.append(patternVisual());else if(['compare','shapes','colors'].includes(current.lesson.id))p.append(cardVisual(c));
 p.append(button('🔊 اِسْمَعِي السُّؤَالَ وَالْإِجَابَاتِ',()=>speak(questionSpeech(c,shownOptions),c.lang),'secondary'));root.append(p);
 const choices=el('div',null,'choices'),feedback=el('p','','feedback center');feedback.setAttribute('aria-live','polite');
 shownOptions.forEach((opt,i)=>{
  const holder=el('div',null,'answer-card');
  const b=button('',()=>{
   if(answered)return;
   if(opt===c.answer){playEffect('correct');answered=true;if(misses===0)score++;b.classList.add('correct');feedback.textContent=arText('أَحْسَنْتِ يَا رُقَيَّة! 🌟');speak('أَحْسَنْتِ يَا رُقَيَّة. الْإِجَابَةُ '+speechText(c.answer,c.lang),'ar');choices.querySelectorAll('.choice').forEach(x=>x.disabled=true);
    root.append(button(qi===questions.length-1?'اِكْتَشِفِي إِنْجَازَكِ 🎉':'التَّالِي ←',()=>{qi++;if(qi===questions.length)finish();else showQuestion();},'primary'));
   }else{playEffect('wrong');misses++;b.disabled=true;b.classList.add('wrong');feedback.textContent=arText('مُحَاوَلَةٌ جَمِيلَةٌ، جَرِّبِي مَرَّةً أُخْرَى 💛');speak('جَرِّبِي مَرَّةً أُخْرَى');}
  },'choice');b.dataset.answer=opt;
  const number=el('span',i+1,'answer-number');number.setAttribute('aria-hidden','true');b.append(number);
  const picture=optionPicture(opt);if(picture){const e=el('span',picture,'answer-picture');e.setAttribute('aria-hidden','true');b.append(e);}
  const txt=el('span',opt,'answer-label');txt.dir=c.lang==='en'?'ltr':'auto';b.append(txt);
  b.setAttribute('aria-label',arText('رَقْمُ '+(i+1)+'. '+speechText(opt,c.lang)));
  add(holder,b,button('🔊 '+digits(i+1),()=>speak(optionSpeech(opt,i,c.lang),c.lang),'listen-choice'));choices.append(holder);
 });add(root,choices,feedback);
}
function finish(){reset('result');const earned=score===questions.length?3:score>=Math.ceil(questions.length/2)?2:1;state.best[key()]=Math.max(state.best[key()]||0,earned);save();const p=el('div',null,'panel center');add(p,el('div','🎉','big'),el('h1','أَحْسَنْتِ يَا رُقَيَّة!'),el('div','⭐'.repeat(earned),'stars'),el('p','إِجَابَاتُكِ الصَّحِيحَةُ مِنَ الْمُحَاوَلَةِ الْأُولَى: '+score+' مِنْ '+questions.length),el('p','نَتَعَلَّمُ شَيْئًا جَدِيدًا مَعَ كُلِّ مُحَاوَلَةٍ.','muted'),button('دَرْسٌ آخَرُ',()=>subject(current.subject),'primary'),button('الْمُلْصَقَاتُ',rewards,'secondary'));root.append(p);}
function rewards(){reset('rewards');title('🌟 حَدِيقَةُ إِنْجَازَاتِي','نَحْفَظُ أَفْضَلَ نَتِيجَةٍ لِكُلِّ دَرْسٍ. أَعِيدِي الدَّرْسَ لِتَحْسِينِ نَتِيجَتِكِ!');const p=el('div',null,'panel center');const thresholds=[0,3,8,15,25,40,55,69];['🌱','🌷','🦋','🐰','🌈','🦄','🏰','👑'].forEach((b,i)=>{const e=el('span',b,'badge'+(total()<thresholds[i]?' locked':''));e.title=thresholds[i]+' نَجْمَة';p.append(e);});add(p,el('p',total()+' نَجْمَة • الْهَدَفُ: 69'),el('p','الْمُلْصَقُ الْأَوَّلُ هَدِيَّةٌ! ثُمَّ نَجْمَعُ النُّجُومَ: 3، 8، 15، 25، 40، 55، 69.','muted'));root.append(p);root.append(button('نُكْمِلُ التَّعَلُّمَ',home,'primary'));}
function draw(s){reset('draw');title('✏️ أَرْسُمُ وَأَكْتُبُ','تَتَبَّعِي النَّمُوذَجَ الْفَاتِحَ بِإِصْبَعِكِ. هَذِهِ لَوْحَةُ تَدْرِيبٍ حُرٍّ.');const targets=s.id==='arabic'?SUBJECTS[0].lessons.slice(0,4).flatMap(l=>l.cards.map(c=>c.word)):s.id==='english'?SUBJECTS[1].lessons.slice(0,4).flatMap(l=>l.cards.map(c=>c.word)):s.id==='math'?Array.from({length:21},(_,i)=>digits(i)):['','○','△','□'];let t=0,color='#7753c7',down=false;const label=el('p','','center'),canvas=el('canvas',null,'trace');canvas.width=900;canvas.height=600;const ctx=canvas.getContext('2d');function clear(){ctx.clearRect(0,0,900,600);[180,300,420].forEach((y,i)=>{ctx.strokeStyle='#d7cde5';ctx.lineWidth=2;ctx.setLineDash(s.id==='english'&&i===1?[12,8]:[]);ctx.beginPath();ctx.moveTo(20,y);ctx.lineTo(880,y);ctx.stroke();});ctx.setLineDash([]);ctx.font=(targets[t].length>5?'105':'150')+'px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#e8e1f0';ctx.fillText(targets[t],450,310);label.textContent=arText(targets[t]?'تَدْرِيبٌ: '+targets[t]:'لَوْحَةُ رَسْمٍ حُرَّةٌ');}function pos(e){const r=canvas.getBoundingClientRect();return[(e.clientX-r.left)*900/r.width,(e.clientY-r.top)*600/r.height];}canvas.onpointerdown=e=>{down=true;canvas.setPointerCapture(e.pointerId);ctx.beginPath();ctx.moveTo(...pos(e));};canvas.onpointermove=e=>{if(!down)return;ctx.strokeStyle=color;ctx.lineWidth=12;ctx.lineCap='round';ctx.lineJoin='round';ctx.lineTo(...pos(e));ctx.stroke();};canvas.onpointerup=canvas.onpointercancel=()=>down=false;add(root,label,canvas);const palette=el('div',null,'palette');['#7753c7','#eb6487','#369a78','#277fc5','#e79722'].forEach((c,i)=>{const b=button('',()=>{color=c;palette.querySelectorAll('button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');},'swatch'+(i===0?' selected':''));b.style.background=c;b.setAttribute('aria-label','لَوْنٌ '+(i+1));palette.append(b);});root.append(palette);const nav=el('div',null,'nav');add(nav,button('السَّابِقُ',()=>{t=(t+targets.length-1)%targets.length;clear();}),button('اِمْسَحِي',clear,'secondary'),button('التَّالِي',()=>{t=(t+1)%targets.length;clear();}));add(root,nav,button('رُجُوعٌ',()=>subject(s)));clear();}
function parentGate(){reset('gate');title('لِوَلِيِّ الْأَمْرِ','لِحِمَايَةِ الْإِعْدَادَاتِ مِنَ الضَّغْطِ بِالْخَطَأِ، اُحْسُبِ النَّاتِجَ:');const a=7+Math.floor(Math.random()*8),b=4+Math.floor(Math.random()*6);const p=el('div',null,'panel');const question=el('p',a+' + '+b+' = ؟','equation');question.dir='ltr';const input=el('input');input.type='number';input.inputMode='numeric';input.setAttribute('aria-label','نَاتِجُ الْجَمْعِ');const feedback=el('p');add(p,question,input,button('دُخُولٌ',()=>{if(Number(input.value.replace(/[٠-٩]/g,n=>'٠١٢٣٤٥٦٧٨٩'.indexOf(n)))===a+b)parents();else feedback.textContent=arText('حَاوِلْ مَرَّةً أُخْرَى.');},'primary'),feedback);root.append(p);}
function parents(){reset('parents');title('مُتَابَعَةُ رُقَيَّة','مُحْتَوًى تَأْسِيسِيٌّ عَامٌّ لِمَرْحَلَةِ KG1؛ لَا يَدَّعِي مُطَابَقَةَ مَنْهَجِ مَدْرَسَةٍ مُحَدَّدَةٍ.');const p=el('div',null,'panel');SUBJECTS.forEach(s=>{const points=s.lessons.reduce((n,l)=>n+(state.best[l.id]||0),0);p.append(el('p',s.icon+' '+s.name+': '+points+' / '+s.lessons.length*3+' نَجْمَة'));});add(p,el('p','اِقْتِرَاحٌ: دَرْسٌ وَاحِدٌ، ثُمَّ لُعْبَةٌ قَصِيرَةٌ، ثُمَّ اِسْتِرَاحَةٌ. لَا يُوجَدُ عِقَابٌ عَلَى الْخَطَأِ.','muted'),el('p','يَحْتَاجُ النُّطْقُ إِلَى تَثْبِيتِ صَوْتَيِ الْعَرَبِيَّةِ وَالْإِنْجِلِيزِيَّةِ. تُحْفَظُ النَّتَائِجُ عَلَى جِهَازِكِ. تُرْسَلُ الْإِجَابَاتُ وَخُطُوطُ السَّبُّورَةِ إِلَى الْخِدْمَةِ عِنْدَ اللَّعِبِ عَلَى جِهَازَيْنِ.','muted'));root.append(p);title('نُسْخَةٌ احْتِيَاطِيَّةٌ لِلتَّقَدُّمِ','اِنْسَخِ النَّصَّ وَاحْفَظْهُ فِي مَكَانٍ آمِنٍ. لِإِرْجَاعِ التَّقَدُّمِ، أَلْصِقْهُ وَاضْغَطْ «اِسْتِعَادَةٌ».');const box=el('textarea');box.value=JSON.stringify(state);box.setAttribute('aria-label','بَيَانَاتُ النُّسْخَةِ الِاحْتِيَاطِيَّةِ');root.append(box);add(root,button('تَحْدِيدُ النَّصِّ لِلنَّسْخِ',()=>{box.focus();box.select();box.setSelectionRange(0,box.value.length);}),button('اِسْتِعَادَةُ التَّقَدُّمِ',()=>{try{const x=JSON.parse(box.value);if(!valid(x))throw Error();const ids=SUBJECTS.flatMap(s=>s.lessons.map(l=>l.id));if(Object.keys(x.best).some(k=>!ids.includes(k)||x.best[k]>3)||Object.keys(x.seen).some(k=>!ids.includes(k)))throw Error();if(confirm('هَلْ تَسْتَبْدِلُ التَّقَدُّمَ الْحَالِيَّ بِالنُّسْخَةِ الْمُلْصَقَةِ؟')){state={v:1,best:x.best,seen:x.seen,sound:x.sound};save();updateSound();parents();}}catch(e){alert('النُّسْخَةُ غَيْرُ صَالِحَةٍ. لَمْ يَتَغَيَّرِ التَّقَدُّمُ.');}},'secondary'));add(root,el('p','قَدْ يُؤَدِّي حَذْفُ التَّطْبِيقِ إِلَى حَذْفِ التَّقَدُّمِ؛ اِحْفَظْ نُسْخَةً قَبْلَ ذَلِكَ.','muted'),button('مَسْحُ التَّقَدُّمِ',()=>{if(confirm('هَلْ تُرِيدُ مَسْحَ جَمِيعِ النُّجُومِ وَالتَّقَدُّمِ؟')){state=fresh();save();updateSound();parents();}}));}
function updateSound(){document.getElementById('sound').textContent=state.sound?'🔊':'🔇';}
document.getElementById('sound').onclick=()=>{state.sound=!state.sound;save();updateSound();stopSpeech();};document.getElementById('home').onclick=home;
window.appBack=()=>{if(mode==='home')return false;if(current&&current.subject&&['learn','quiz','result','draw'].includes(mode))subject(current.subject);else home();return true;};

const EMOJI_WORDS={'🔴':'أَحْمَر','🔵':'أَزْرَق','🟡':'أَصْفَر','🟢':'أَخْضَر','🟣':'بَنَفْسَجِيّ','🟠':'بُرْتُقَالِيّ','🐘':'فِيل','🐭':'فَأْر','●':'دَائِرَة','■':'مُرَبَّع','▲':'مُثَلَّث','▬':'مُسْتَطِيل'};
const AR_NUMBERS=['صِفْر','وَاحِد','اثْنَان','ثَلَاثَة','أَرْبَعَة','خَمْسَة','سِتَّة','سَبْعَة','ثَمَانِيَة','تِسْعَة','عَشَرَة','أَحَدَ عَشَر','اثْنَا عَشَر','ثَلَاثَةَ عَشَر','أَرْبَعَةَ عَشَر','خَمْسَةَ عَشَر','سِتَّةَ عَشَر','سَبْعَةَ عَشَر','ثَمَانِيَةَ عَشَر','تِسْعَةَ عَشَر','عِشْرُون'];
const LETTER_NAMES={'أ':'أَلِف','ب':'بَاء','ت':'تَاء','ث':'ثَاء','ج':'جِيم','ح':'حَاء','خ':'خَاء','د':'دَال','ذ':'ذَال','ر':'رَاء','ز':'زَاي','س':'سِين','ش':'شِين','ص':'صَاد','ض':'ضَاد','ط':'طَاء','ظ':'ظَاء','ع':'عَيْن','غ':'غَيْن','ف':'فَاء','ق':'قَاف','ك':'كَاف','ل':'لَام','م':'مِيم','ن':'نُون','ه':'هَاء','و':'وَاو','ي':'يَاء'};
function speechText(text,lang='ar'){
 text=String(text);if(lang==='en')return text.replace(/[^a-zA-Z0-9 .,!?;:'-]/g,' ');
 if(LETTER_NAMES[text])return LETTER_NAMES[text];
 for(const [symbol,word] of Object.entries(EMOJI_WORDS))text=text.split(symbol).join(' '+word+' ');
 text=text.replace(/[٠-٩]/g,n=>'٠١٢٣٤٥٦٧٨٩'.indexOf(n)).replace(/\d+/g,n=>AR_NUMBERS[Number(n)]||n).replace(/\+/g,' زَائِد ').replace(/[−-]/g,' نَاقِص ').replace(/=/g,' يُسَاوِي ').replace(/؟/g,'؟ ');
 text=arText(text).replace(/بَطَّة/g,'بَطَّهْ').replace(/رُقَيَّة/g,'رُقَيَّهْ').replace(/رقية/g,'رُقَيَّهْ');
 return text.replace(/[^\u0600-\u06ff\s.,!:]/g,' ').replace(/\s+/g,' ').trim();
}
function optionSpeech(opt,i,lang){const prefix=lang==='en'?'Option '+(i+1):'الْخِيَارُ '+['','الْأَوَّل','الثَّانِي','الثَّالِث','الرَّابِع','الْخَامِس','السَّادِس'][i+1];return prefix+'. '+speechText(opt,lang)+'.';}
function questionSpeech(c,options){
 let question=c.q;
 if(current.lesson.id==='add')question='كَمْ يُسَاوِي '+c.q.split('=')[0]+'؟';
 if(current.lesson.id==='shapes')question='مَا اسْمُ الشَّكْلِ الْمَعْرُوضِ؟';
 if(current.lesson.id==='colors')question='مَا اسْمُ اللَّوْنِ الْمَعْرُوضِ؟';
 return speechText(question,c.lang)+'. '+options.map((opt,i)=>optionSpeech(opt,i,c.lang)).join(' ... ');
}
function lessonSpeech(c){if(current.lesson.id==='add')return arText(c.word);if(current.subject.id==='arabic'){if(LETTER_NAMES[c.front])return LETTER_NAMES[c.front]+'. '+c.word+'. '+c.word;if(current.lesson.id==='vowels')return 'الْحَرْفُ '+c.front+'. '+c.word+'. '+c.detail;}if(c.lang==='en'&&/^[A-Z] [a-z]$/.test(c.front)){const letter=c.front[0];return letter+'. '+c.word+'. '+letter+' is for '+c.word+'.';}if(current.lesson.id.startsWith('num'))return AR_NUMBERS[Number(c.front)];return c.word+'. '+c.detail;}
function patternVisual(){const box=el('div',null,'pattern-row');box.dir='ltr';['🔴','🔵','🔴','🔵','؟'].forEach(x=>box.append(el('span',x)));return box;}
function cardVisual(c){
 if(current.lesson.id==='add'){
  const box=el('div',null,'apple-equation');box.dir='ltr';const parts=c.front.split(/ ([+−]) /);
  parts.forEach((part,i)=>{const e=el('span',part,i===1?'operator':'apple-group');box.append(e);});return box;
 }
 if(c.front==='🔴 🔵 🔴 🔵')return patternVisual();
 if(current.lesson.id==='compare'){const box=el('div',null,'compare-pair');box.dir='ltr';for(const part of c.front.trim().split(/\s+/))box.append(el('span',part,'compare-item'));return box;}
 const box=el('div',c.front,'big'+(current.lesson.id==='compare'?' compare-visual':''));box.dir=c.lang==='en'||current.subject.id==='math'?'ltr':'auto';return box;
}
function optionPicture(opt){return {'أغسل يدي':'🧼 👐','بفرشاة ومعجون':'🪥','بلعبة':'🧸','وجبة متنوعة':'🥗 🍎','مع شخص بالغ':'👩‍👧','في الماء':'💧','في العش':'🪺','في الصحراء':'🏜️','في البحر':'🌊','في الكوب':'🥛','في النهار':'☀️','في منتصف الليل':'🌙','في الخريف':'🍂','في الصيف':'☀️','أعتذر':'🤝','من فضلك':'🙏','أرتب ألعابي':'🧸 📦','أتركها على الأرض':'🧸 🧩','أغسل يدي':'🧼 👐','ألمس الأرض':'🖐️','نتبادل الأدوار':'👧 🤝 👧','آخذ كل الألعاب':'🧸 🧸','فرشاة ومعجون':'🪥','لعبة':'🧸','متنوعة':'🥗 🍎','حلوى فقط':'🍬 🍬','مع شخص كبير':'👩‍👧','وحدي':'🚶‍♀️','العين':'👁️','الأذن':'👂','الأنف':'👃','اليد':'✋','اللسان':'👅','الجلد':'✋','الماء':'💧','العش':'🪺','الصحراء':'🏜️','البحر':'🌊','الكوب':'🥛','البقرة':'🐄','العصفور':'🐦','السمكة':'🐟','الجمل':'🐪','الحوت':'🐳','ماء وضوء وهواء':'💧 ☀️','حلوى':'🍬','ألعاب':'🧸','مظلة':'☂️','نظارة سباحة':'🥽','مروحة':'🪭','النهار':'☀️','منتصف الليل':'🌙','الخريف':'🍂','دائرة':'●','مربع':'■','مثلث':'▲','مستطيل':'▬','أحمر':'🔴','أزرق':'🔵','أصفر':'🟡','أخضر':'🟢','بنفسجي':'🟣','برتقالي':'🟠'}[bare(opt)]||'';}
updateSound();
