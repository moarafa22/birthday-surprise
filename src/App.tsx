import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

// ----- المحتوى الشخصي (عدل هنا) -----
const birthdayContent = {
  herName: 'ندوشتي',              // <- اسم حبيبتك
  myName: 'مودي حبيبك',               // <- اسمك
  birthdayMessage: `عيد ميلاد سعيد... يا عيدي انت و كل فرحي❤️\nأنا عايش بوجودك في حياتي.. انت حياتي نفسها اصلا❤️\nأنا بحبك اوووي❤🥹️`,
  loveLetter: `حبيبتي و حبيبة عمري و حبيبة ايامي و سنيني 🥺❤️\n\nكل سنة وأنتِ أجمل شيء في حياتي. أنتِ نور عيني وبهجة قلبي و فرحتي كل سنة وانت حبيبتي و نفسي الي بتنفسه كل سنه وانت كل الي ليا وماليه الدنيا عليا بضحكتك الي بتنور ايامي ....حقيقي انا بحمد ربنا على الصدفه و القدر و النصيب الي خلونا نعرف بعض و نكون سوا .....كل سنه واحنا في ضهر بعض و عايشين على حس بعض .... كل سنه وانت حلوه و حلاوتك بتزيد عن السنه الي قبلها يا احلى ما في الدنيا و الوجود....كل سنه وانت حضنك بيتي و اماني و ملجأي الوحيد....كل سنه وانت ندوشتي و حبيبة قلبي و أمي و صاحبتي و بنتي و ناسي و اهلي كلهم ....ربنا يخليكي ليا و ميخلينيش الا ليكي و ميحرمنيش منك ابدا يا نور عيني ....كل سنة وانت قلبي و روحي و عمري و خلي بالك عيد ميلادك الي جاي هتكون دبلة حبنا في ايدينا انا بحبك اوي يا حظي الي في الدنيا 🥹🫂❤️❤️❤️❤️❤️❤️❤️❤️\n\nكل عام وأنتِ بخير يا ندوشة قلبي ❤️`,
  finalMessage: `أريدك أن تعرفي أنكِ أغلى ما أملك. شكراً لأنكِ موجودة في حياتي.`,
  musicTitle: 'أغنيتنا',
  photoCaptions: ['أجمل ما رأت عيني🥹', 'عايش بضحكتك 🥺', 'هو فيه زيك !🫂', 'حظي في الدنيا كله خدته فيكي🥺💕', 'معاكي لأخر نفس فيا يا كل ما املك 🥺🫂❤️'],
  timelineCaptions: ['ثم...', 'تلك اللحظة...', 'ذكري أخري...', 'سبب آخر للابتسام...']
};

function Scene1({ onNext }: { onNext: () => void }) {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShowButton(true), 2800); return () => clearTimeout(t); }, []);

  return (
    <div style={{ height: '100%', width: '100%', background: '#0d0b0c', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div key={i} style={{ position: 'absolute', width: 2, height: 2, borderRadius: '50%', background: 'rgba(255,240,230,0.3)', top: Math.random() * 100 + '%', left: Math.random() * 100 + '%' }}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.4, 1] }}
          transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, ease: 'easeInOut' }} />
      ))}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.4 }} style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '2.8rem', fontWeight: 300, letterSpacing: '0.04em', color: '#f2ece6' }}>Hey...</motion.div>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 1.0 }} style={{ fontFamily: 'Reem Kufi, sans-serif', fontSize: '1.2rem', fontWeight: 300, color: '#d6cbc2', marginTop: '0.8rem', letterSpacing: '0.2em' }}>I made something for you nadosha.</motion.div>
      {showButton && (
        <motion.button initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={onNext} style={{ marginTop: '3rem', padding: '1rem 2.8rem', borderRadius: '60px', border: '0.5px solid rgba(255,235,220,0.25)', background: 'rgba(255,235,220,0.06)', backdropFilter: 'blur(10px)', color: '#f2ece6', fontSize: '1.1rem', fontWeight: 400, letterSpacing: '0.1em', cursor: 'pointer', boxShadow: '0 0 40px rgba(255,200,180,0.08)' }}>
          Open your surprise ✨
        </motion.button>
      )}
    </div>
  );
}

function Scene2({ onNext, herName }: { onNext: () => void, herName: string }) {
  return (
    <div style={{ height: '100%', width: '100%', background: 'radial-gradient(circle at 50% 40%, #2a1f1c, #0d0b0c 80%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
      <motion.div initial={{ opacity: 0, scale: 0.9, filter: 'blur(8px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}>
        <div style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '1.2rem', fontWeight: 300, letterSpacing: '0.3em', color: '#d6cbc2', marginBottom: '1rem' }}>Happy Birthday</div>
        <div style={{ fontFamily: 'El Messiri, serif', fontSize: '3.6rem', fontWeight: 500, color: '#f2ece6', textShadow: '0 0 60px rgba(255,200,180,0.15)' }}>{herName} ❤️</div>
      </motion.div>
      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.8 }} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={onNext} style={{ marginTop: '3.6rem', padding: '0.8rem 2.4rem', borderRadius: '60px', border: '0.5px solid rgba(255,235,220,0.15)', background: 'rgba(255,235,220,0.03)', backdropFilter: 'blur(8px)', color: '#d6cbc2', fontSize: '0.95rem', fontWeight: 300, letterSpacing: '0.1em', cursor: 'pointer' }}>There's more...</motion.button>
    </div>
  );
}

function Scene3({ onNext, message }: { onNext: () => void, message: string }) {
  const [lines, setLines] = useState<string[]>([]);
  const fullLines = message.split('\n').filter(l => l.trim().length > 0);
  const [revealIndex, setRevealIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (revealIndex < fullLines.length) {
      const timer = setTimeout(() => { setLines(prev => [...prev, fullLines[revealIndex]]); setRevealIndex(prev => prev + 1); }, 600);
      return () => clearTimeout(timer);
    } else { setDone(true); }
  }, [revealIndex, fullLines]);

  return (
    <div style={{ height: '100%', width: '100%', background: '#0d0b0c', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div className="glass" style={{ maxWidth: '400px', width: '100%', padding: '2.4rem 2rem', borderRadius: '32px', textAlign: 'left', lineHeight: 1.8 }}>
        {lines.map((line, i) => (
          <motion.p key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '1rem', fontWeight: 300, color: '#e8ddd4', marginBottom: '1rem' }}>{line}</motion.p>
        ))}
        {done && <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileTap={{ scale: 0.96 }} onClick={onNext} style={{ marginTop: '2rem', width: '100%', padding: '0.8rem', borderRadius: '60px', border: '0.5px solid rgba(255,235,220,0.15)', background: 'rgba(255,235,220,0.04)', color: '#d6cbc2', fontSize: '0.95rem', cursor: 'pointer', letterSpacing: '0.1em' }}>Continue</motion.button>}
      </div>
    </div>
  );
}

function Scene4({ onNext }: { onNext: () => void }) {
  const PHOTOS = [
    { src: '/assets/photos/photo-01.jpg', caption: birthdayContent.photoCaptions[0] || 'Memory' },
    { src: '/assets/photos/photo-02.jpg', caption: birthdayContent.photoCaptions[1] || 'Memory' },
    { src: '/assets/photos/photo-03.jpg', caption: birthdayContent.photoCaptions[2] || 'Memory' },
    { src: '/assets/photos/photo-04.jpg', caption: birthdayContent.photoCaptions[3] || 'Memory' },
    { src: '/assets/photos/photo-05.jpg', caption: birthdayContent.photoCaptions[4] || 'Memory' },
  ];
  const [index, setIndex] = useState(0);
  const nextPhoto = () => { if (index < PHOTOS.length - 1) setIndex(index + 1); };
  const prevPhoto = () => { if (index > 0) setIndex(index - 1); };

  return (
    <div style={{ height: '100%', width: '100%', background: '#0d0b0c', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', position: 'relative' }}>
      <div style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '0.8rem', letterSpacing: '0.2em', color: '#928a82', marginBottom: '1.2rem' }}>memories</div>
      <motion.div key={index} initial={{ opacity: 0, scale: 0.94, filter: 'blur(4px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} transition={{ duration: 0.5 }} style={{ width: '100%', maxWidth: '340px', aspectRatio: '4/5', borderRadius: '28px', overflow: 'hidden', background: '#1e1816', boxShadow: '0 20px 60px rgba(0,0,0,0.6)', position: 'relative' }}>
        <img src={PHOTOS[index].src} alt={PHOTOS[index].caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect width="200" height="200" fill="%231e1816"/%3E%3Ctext x="50" y="110" font-family="Inter" font-size="16" fill="%23928a82"%3Ephoto%3C/text%3E%3C/svg%3E'; }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.2rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.6))' }}>
          <p style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '0.9rem', fontWeight: 300, color: '#f2ece6', textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>{PHOTOS[index].caption}</p>
        </div>
      </motion.div>
      <div style={{ display: 'flex', gap: 24, marginTop: '1.6rem' }}>
        <button onClick={prevPhoto} style={{ background: 'none', border: '0.5px solid rgba(255,255,255,0.1)', borderRadius: '40px', padding: '0.4rem 1.4rem', color: '#d6cbc2', fontSize: '0.9rem' }}>‹</button>
        <span style={{ color: '#928a82', fontSize: '0.8rem' }}>{index+1}/{PHOTOS.length}</span>
        <button onClick={nextPhoto} style={{ background: 'none', border: '0.5px solid rgba(255,255,255,0.1)', borderRadius: '40px', padding: '0.4rem 1.4rem', color: '#d6cbc2', fontSize: '0.9rem' }}>›</button>
      </div>
      {index === PHOTOS.length - 1 && <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileTap={{ scale: 0.96 }} onClick={onNext} style={{ marginTop: '1.8rem', background: 'rgba(255,235,220,0.05)', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '60px', padding: '0.6rem 2rem', color: '#d6cbc2' }}>Next</motion.button>}
    </div>
  );
}

function Scene5({ onNext }: { onNext: () => void }) {
  const options = [{ label: 'Open this one 💌', id: 0 }, { label: 'Definitely this one 👀', id: 1 }, { label: 'Maybe this one ✨', id: 2 }];
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div style={{ height: '100%', width: '100%', background: 'radial-gradient(circle at 30% 30%, #1e1412, #0d0b0c 80%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
      <div style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '1.8rem', fontWeight: 300, color: '#f2ece6', marginBottom: '1.2rem' }}>Okay... one important question.</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%', maxWidth: '320px', marginTop: '1rem' }}>
        {options.map((opt) => (
          <motion.button key={opt.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.96 }} onClick={() => { setSelected(opt.id); setTimeout(onNext, 600); }} style={{ padding: '1rem', borderRadius: '60px', border: selected === opt.id ? '0.5px solid rgba(255,235,220,0.3)' : '0.5px solid rgba(255,235,220,0.06)', background: selected === opt.id ? 'rgba(255,235,220,0.05)' : 'rgba(255,235,220,0.02)', color: '#f2ece6', fontSize: '1rem', fontWeight: 300, letterSpacing: '0.02em', cursor: 'pointer', backdropFilter: 'blur(4px)' }}>
            {opt.label}
          </motion.button>
        ))}
      </div>
      {selected !== null && <div style={{ marginTop: '1.6rem', color: '#928a82', fontSize: '0.8rem' }}>✨</div>}
    </div>
  );
}

function Scene6({ onNext, letterContent }: { onNext: () => void, letterContent: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ height: '100%', width: '100%', background: '#0d0b0c', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div className="glass" style={{ maxWidth: '380px', width: '100%', padding: '2rem', borderRadius: '32px', textAlign: 'center' }}>
        {!open ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <div style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '1.8rem', fontWeight: 300, marginBottom: '1.2rem' }}>A letter for you.❤️</div>
            <motion.button whileTap={{ scale: 0.94 }} onClick={() => setOpen(true)} style={{ padding: '0.8rem 2.4rem', borderRadius: '60px', background: 'rgba(255,235,220,0.04)', border: '0.5px solid rgba(255,255,255,0.08)', color: '#f2ece6', fontSize: '1rem', cursor: 'pointer' }}>open ✦</motion.button>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.8, color: '#e8ddd4', textAlign: 'left', whiteSpace: 'pre-wrap' }}>{letterContent}</div>
            <motion.button whileTap={{ scale: 0.96 }} onClick={onNext} style={{ marginTop: '2rem', padding: '0.6rem 2rem', borderRadius: '60px', background: 'rgba(255,235,220,0.04)', border: '0.5px solid rgba(255,255,255,0.06)', color: '#d6cbc2', cursor: 'pointer' }}>continue</motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// ===== المشهد السابع (الموسيقى) - معدل =====
function Scene7({ 
  onNext, 
  musicTitle,
  isPlaying,
  onPlay,
  onPause,
  progress
}: { 
  onNext: () => void, 
  musicTitle: string,
  isPlaying: boolean,
  onPlay: () => void,
  onPause: () => void,
  progress: number
}) {
  const togglePlay = () => {
    if (isPlaying) {
      onPause();
    } else {
      onPlay();
    }
  };

  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isTouching, setIsTouching] = useState(false);

  // قائمة الصور (استخدم الصور اللي عندك)
  const photos = [
    { src: '/assets/photos/photo-01.jpg', caption: 'ذكري جميلة' },
    { src: '/assets/photos/photo-02.jpg', caption: 'ابتسامة' },
    { src: '/assets/photos/photo-03.jpg', caption: 'لحظة لا تنسي' },
    { src: '/assets/photos/photo-04.jpg', caption: 'سبب للفرح' },
    { src: '/assets/photos/photo-05.jpg', caption: 'أجمل الأوقات' },
  ];

  // إضافة قلب عند النقر
  const addHeart = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    let x, y;
    if ('touches' in e) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }
    const newHeart = { id: Date.now() + Math.random(), x, y };
    setHearts(prev => [...prev, newHeart]);
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== newHeart.id));
    }, 1500);

    const newSparkle = { id: Date.now() + Math.random(), x, y };
    setSparkles(prev => [...prev, newSparkle]);
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
    }, 800);
  };

  // توليد موجات صوتية
  const bars = Array.from({ length: 20 }, (_, i) => ({
    height: 10 + Math.random() * 30,
    delay: Math.random() * 0.5,
  }));

  return (
    <div 
      style={{ 
        height: '100%', width: '100%', 
        background: 'radial-gradient(circle at 60% 30%, #1a1110, #0d0b0c 80%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', 
        padding: '2rem', textAlign: 'center', position: 'relative', overflow: 'hidden',
        cursor: 'pointer',
      }}
      onClick={addHeart}
      onTouchStart={addHeart}
      onMouseEnter={() => setIsTouching(true)}
      onMouseLeave={() => setIsTouching(false)}
    >
      {/* ===== صور هادئة في الخلفية (تظهر بس لما الأغنية تشتغل) ===== */}
      {isPlaying && photos.map((photo, index) => {
        // توزيع الصور في أماكن مختلفة في الخلفية
        const positions = [
          { top: '5%', left: '5%', size: 80 },
          { top: '15%', right: '8%', size: 70 },
          { bottom: '20%', left: '10%', size: 90 },
          { bottom: '10%', right: '5%', size: 75 },
          { top: '45%', left: '35%', size: 60 },
        ];
        const pos = positions[index % positions.length];

        return (
          <motion.div
            key={index}
            style={{
              position: 'absolute',
              width: pos.size,
              height: pos.size,
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.06)',
              opacity: 0.5, // شفافية خفيفة عشان متغطيش على الكلام
              zIndex: 1,
              ...pos,
            }}
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={{ 
              opacity: 0.5,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 2 + index * 0.3,
              delay: index * 0.4,
              ease: 'easeOut',
            }}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                pointerEvents: 'none',
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect width="200" height="200" fill="%232a1f1c"/%3E%3Ctext x="50" y="110" font-family="Inter" font-size="14" fill="%23928a82"%3E📸%3C/text%3E%3C/svg%3E';
              }}
            />
            {/* إطار رومانسي خفيف */}
            <div style={{
              position: 'absolute',
              inset: 0,
              border: '1px solid rgba(255,235,220,0.1)',
              borderRadius: '20px',
              pointerEvents: 'none',
              boxShadow: 'inset 0 0 60px rgba(255,200,180,0.05)',
            }} />
          </motion.div>
        );
      })}

      {/* ===== قلوب متطايرة ===== */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ opacity: 1, scale: 0.5, y: 0 }}
          animate={{ opacity: 0, scale: 1.5, y: -80 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            left: heart.x - 15,
            top: heart.y - 15,
            fontSize: '2rem',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* ===== بريق ===== */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ opacity: 1, scale: 0.3 }}
          animate={{ opacity: 0, scale: 1.8 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            left: sparkle.x - 10,
            top: sparkle.y - 10,
            fontSize: '1.2rem',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          ✨
        </motion.div>
      ))}

      {/* ===== المحتوى الرئيسي (في المقدمة مع خلفية شفافة) ===== */}
      <div style={{ 
        zIndex: 5, 
        position: 'relative', 
        background: 'rgba(13, 11, 12, 0.4)', 
        padding: '1.5rem 2rem', 
        borderRadius: '28px', 
        backdropFilter: 'blur(12px)',
        border: '0.5px solid rgba(255,255,255,0.04)',
        maxWidth: '360px',
        width: '100%',
      }}>
        {/* عنوان الأغنية */}
        <motion.div
          animate={isPlaying ? { scale: [1, 1.02, 1] } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '2rem', fontWeight: 300, marginBottom: '0.3rem' }}
        >
          🎵
        </motion.div>

        <div style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '1.2rem', fontWeight: 300, color: '#d6cbc2', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>
          {musicTitle}
        </div>

        {/* رسالة تفاعلية */}
        <motion.div
          animate={isTouching ? { scale: 1.05, color: '#e8d5c4' } : { scale: 1, color: '#928a82' }}
          transition={{ duration: 0.3 }}
          style={{ 
            fontFamily: 'Tajawal, sans-serif', 
            fontSize: '0.7rem', 
            color: '#928a82', 
            marginBottom: '0.5rem',
            letterSpacing: '0.05em',
            opacity: 0.6,
          }}
        >
          {isTouching ? '✨ حبككككككك✨' : '👆 اضغطي على الشاشة كدا يا توتو'}
        </motion.div>

        {/* شريط التقدم */}
        <div style={{ width: '100%', maxWidth: '280px', height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 4, margin: '0.4rem auto', position: 'relative' }}>
          <motion.div 
            style={{ 
              width: `${progress}%`, 
              height: '100%', 
              background: 'linear-gradient(90deg, #d6cbc2, #e8d5c4)',
              borderRadius: 4,
              boxShadow: '0 0 20px rgba(230, 210, 190, 0.15)',
            }} 
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* موجات صوتية */}
        <div style={{ 
          display: 'flex', 
          gap: 3, 
          alignItems: 'center', 
          justifyContent: 'center',
          height: 35,
          margin: '0.3rem 0',
          opacity: isPlaying ? 1 : 0.2,
          transition: 'opacity 0.5s',
        }}>
          {bars.slice(0, 16).map((bar, i) => (
            <motion.div
              key={i}
              style={{
                width: 3,
                background: isPlaying ? '#e8d5c4' : 'rgba(255,255,255,0.15)',
                borderRadius: 2,
                height: 8,
                transformOrigin: 'bottom',
              }}
              animate={isPlaying ? {
                height: [8, 8 + Math.random() * 25 * (isTouching ? 1.4 : 1), 8],
                background: ['#e8d5c4', '#d4b8a8', '#e8d5c4'],
              } : {
                height: 8,
                background: 'rgba(255,255,255,0.15)',
              }}
              transition={{
                duration: 0.3 + Math.random() * 0.2,
                repeat: Infinity,
                delay: bar.delay,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* عدد القلوب */}
        <div style={{ 
          fontFamily: 'Reem Kufi, sans-serif', 
          fontSize: '0.55rem', 
          color: '#928a82', 
          opacity: 0.3,
          marginBottom: '0.4rem',
        }}>
          {isPlaying && `✨ ${hearts.length} ❤️`}
          {!isPlaying && '🎵 شغل الأغنية'}
        </div>

        {/* أزرار التحكم */}
        <motion.button 
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.04 }}
          onClick={(e) => { e.stopPropagation(); togglePlay(); }} 
          style={{ 
            padding: '0.7rem 2.4rem', 
            borderRadius: '60px', 
            background: isPlaying ? 'rgba(255,235,220,0.08)' : 'rgba(255,235,220,0.04)',
            border: isPlaying ? '0.5px solid rgba(255,235,220,0.15)' : '0.5px solid rgba(255,255,255,0.06)', 
            color: '#f2ece6', 
            fontSize: '0.95rem', 
            cursor: 'pointer', 
            transition: 'all 0.3s',
            boxShadow: isPlaying ? '0 0 30px rgba(255,200,180,0.03)' : 'none',
          }}
        >
          {isPlaying ? '⏸ أوقف الأغنية' : '▶ شغل أغنيتنا'}
        </motion.button>

        {/* زر التالي */}
        <motion.button 
          whileTap={{ scale: 0.96 }}
          onClick={(e) => { e.stopPropagation(); onNext(); }} 
          style={{ 
            marginTop: '0.8rem', 
            background: 'none', 
            border: 'none', 
            color: '#928a82', 
            fontSize: '0.7rem', 
            cursor: 'pointer', 
            letterSpacing: '0.1em',
            display: 'block',
            width: '100%',
            opacity: 0.5,
          }}
        >
          التالي ✦
        </motion.button>
      </div>
    </div>
  );
}

function Scene8({ 
  onNext, 
  onVideoPlay,
  onVideoPause,
}: { 
  onNext: () => void,
  onVideoPlay: () => void,
  onVideoPause: () => void,
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);

  // تشغيل/إيقاف الفيديو مع التحكم في الموسيقى
  const togglePlay = () => {
  if (!videoRef.current) return;
  if (isPlaying) {
    videoRef.current.pause();
    onVideoPause(); // تشغيل الموسيقى الخلفية والأغنية الرئيسية توقف
    setShowPlayButton(true);
  } else {
    videoRef.current.play();
    // أوقف الأغنية الرئيسية والموسيقى الخلفية
    if (onVideoPlay) onVideoPlay();
    setShowPlayButton(false);
    setTimeout(() => {
      setShowPlayButton(false);
    }, 2000);
  }
  setIsPlaying(!isPlaying);

  setIsPlaying(!isPlaying);
};

  // لما المستخدم يوقف الفيديو بايده (من غير الزر)
  const handlePause = () => {
  setIsPlaying(false);
  setShowPlayButton(true);
  onVideoPause(); // تشغيل الموسيقى الخلفية
};

  // لما المستخدم يشغل الفيديو بايده
  const handlePlay = () => {
  setIsPlaying(true);
  setShowPlayButton(false);
  if (onVideoPlay) onVideoPlay(); // أوقف الأغنية الرئيسية
  setTimeout(() => {
    setShowPlayButton(false);
  }, 2000);
};

  // تحديث شريط التقدم
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadeddata', () => setIsLoaded(true));
    video.addEventListener('pause', handlePause);
    video.addEventListener('play', handlePlay);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('loadeddata', () => setIsLoaded(true));
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('play', handlePlay);
    };
  }, []);

  // إعادة التشغيل لما يخلص
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      video.currentTime = 0;
      setShowPlayButton(true);
      onVideoPause();
    };

    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, [onVideoPause]);

  return (
    <div style={{
      height: '100%', width: '100%',
      background: '#0d0b0c',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '1rem',
    }}>
      {/* حاوية الفيديو بحجم Reels (9:16) */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '360px',
        aspectRatio: '9 / 16', // نسبة الـ Reels بالضبط
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.7)',
        border: '0.5px solid rgba(255,255,255,0.04)',
        background: '#0d0b0c',
      }}>
        <video
          ref={videoRef}
          src="/assets/videos/birthday-video.mp4"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain', // الفيديو كامل بدون تقطيع
            display: isLoaded ? 'block' : 'none',
            background: '#0d0b0c',
          }}
          playsInline
          preload="metadata"
          onError={(e) => {
            console.log('فيديو مش موجود');
            (e.target as HTMLVideoElement).style.display = 'none';
            const parent = (e.target as HTMLVideoElement).parentElement;
            if (parent) {
              const fallback = document.createElement('div');
              fallback.style.cssText = `
                width: 100%; height: 100%;
                display: flex; align-items: center; justify-content: center;
                flex-direction: column;
                background: radial-gradient(circle at 50% 50%, #2a1f1c, #0d0b0c 80%);
                color: #928a82; font-family: Alexandria, sans-serif;
                font-size: 0.9rem; gap: 0.5rem;
                border-radius: 24px;
              `;
              fallback.innerHTML = `
                <span style="font-size: 3rem;">🎬</span>
                <span style="color: #d6cbc2;">ضع الفيديو في</span>
                <span style="font-size: 0.7rem; opacity: 0.5;">public/assets/videos/birthday-video.mp4</span>
              `;
              parent.appendChild(fallback);
            }
          }}
        />

        {/* شاشة التحميل */}
        {!isLoaded && (
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0d0b0c',
            color: '#928a82',
            fontFamily: 'Alexandria, sans-serif',
            fontSize: '0.9rem',
            flexDirection: 'column',
            gap: '0.5rem',
            borderRadius: '24px',
          }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              style={{ fontSize: '2rem' }}
            >
              🎬
            </motion.div>
            <span>جاري التحميل...</span>
          </div>
        )}

        {/* طبقة داكنة خفيفة عشان النص يبان */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4))',
          pointerEvents: 'none',
          borderRadius: '24px',
        }} />

        {/* زر التشغيل (يختفي بعد 2 ثانية) */}
        {showPlayButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            whileTap={{ scale: 0.92 }}
            onClick={togglePlay}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.06)',
              border: '0.5px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
              color: '#f2ece6',
              fontSize: '2rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 3,
              transition: 'all 0.3s',
              boxShadow: '0 0 60px rgba(255,200,180,0.05)',
            }}
          >
            {isPlaying ? '⏸' : '▶'}
          </motion.button>
        )}

        {/* شريط التقدم (أسفل الفيديو) */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '10%',
          right: '10%',
          height: 3,
          background: 'rgba(255,255,255,0.06)',
          borderRadius: 4,
          zIndex: 3,
        }}>
          <motion.div
            style={{
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #d6cbc2, #e8d5c4)',
              borderRadius: 4,
              boxShadow: '0 0 20px rgba(230, 210, 190, 0.1)',
            }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>

      {/* زر التالي */}
      <motion.button
        whileTap={{ scale: 0.96 }}
        onClick={onNext}
        style={{
          marginTop: '1.2rem',
          padding: '0.6rem 2.4rem',
          borderRadius: '60px',
          background: 'rgba(255,235,220,0.04)',
          border: '0.5px solid rgba(255,255,255,0.06)',
          color: '#d6cbc2',
          fontSize: '0.85rem',
          cursor: 'pointer',
          letterSpacing: '0.1em',
          transition: 'all 0.3s',
        }}
      >
        التالي ✦
      </motion.button>
    </div>
  );
}

function Scene9({ onNext, herName, finalMessage }: { onNext: () => void, herName: string, finalMessage: string }) {
  return (
    <div style={{ height: '100%', width: '100%', background: 'radial-gradient(circle at 50% 50%, #1a1110, #0d0b0c 85%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2.4rem', textAlign: 'center' }}>
      <motion.div initial={{ opacity: 0, filter: 'blur(4px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ duration: 1.4, ease: 'easeOut' }}>
        <div style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '2rem', fontWeight: 300, color: '#f2ece6', marginBottom: '1.2rem' }}>Before you go...</div>
        <div style={{ fontFamily: 'Reem Kufi, sans-serif', fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.8, color: '#e8ddd4', maxWidth: '340px', margin: '0 auto' }}>{finalMessage}</div>
        <div style={{ fontFamily: 'El Messiri, serif', fontSize: '2.4rem', fontWeight: 400, marginTop: '1.8rem', color: '#f2ece6' }}>Happy Birthday, {herName} ❤️</div>
        <div style={{ fontFamily: 'Reem Kufi, sans-serif', fontSize: '0.9rem', fontWeight: 300, color: '#928a82', marginTop: '0.6rem' }}>Here's to many more memories.</div>
        <motion.button whileTap={{ scale: 0.96 }} onClick={onNext} style={{ marginTop: '2.4rem', padding: '0.6rem 2.4rem', borderRadius: '60px', background: 'rgba(255,235,220,0.04)', border: '0.5px solid rgba(255,255,255,0.06)', color: '#d6cbc2', cursor: 'pointer' }}>one last thing</motion.button>
      </motion.div>
    </div>
  );
}

function Scene10({ myName }: { myName: string }) {
  const [celebrate, setCelebrate] = useState(false);

  return (
    <div style={{ height: '100%', width: '100%', background: '#0d0b0c', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      {celebrate && Array.from({ length: 40 }).map((_, i) => (
        <motion.div key={i} initial={{ opacity: 0, scale: 0, x: (Math.random() - 0.5) * 300, y: (Math.random() - 0.5) * 300 }}
          animate={{ opacity: [0, 1, 0], scale: [0.4, 1.2, 0.6], x: (Math.random() - 0.5) * 400, y: (Math.random() - 0.5) * 400 }}
          transition={{ duration: 2 + Math.random() * 2, delay: Math.random() * 0.8, repeat: Infinity }}
          style={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', background: ['#e8d5c4', '#b89a8a', '#d4b8a8', '#f2ece6'][i % 4] }} />
      ))}
      <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
        <div style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '2rem', fontWeight: 300, color: '#f2ece6' }}>One last thing...</div>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.92 }} onClick={() => setCelebrate(true)} style={{ marginTop: '2rem', padding: '1rem 2.8rem', borderRadius: '80px', border: '0.5px solid rgba(255,235,220,0.2)', background: 'rgba(255,235,220,0.03)', color: '#f2ece6', fontSize: '1.4rem', cursor: 'pointer', boxShadow: '0 0 50px rgba(255,200,180,0.05)' }}>✦</motion.button>
        {celebrate && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} style={{ marginTop: '2.4rem', fontFamily: 'Alexandria, sans-serif', fontSize: '0.9rem', color: '#928a82', letterSpacing: '0.1em' }}>Made with ❤️ by {myName}</motion.div>}
      </motion.div>
    </div>
  );
}

// ===== التطبيق الرئيسي (App) - معدل =====
export default function App() {
  const [currentScene, setCurrentScene] = useState(0);
  const prefersReduced = useReducedMotion();
  
  // مرجع للأغنية الرئيسية
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // مرجع للموسيقى الخلفية
  const bgAudioRef = useRef<HTMLAudioElement | null>(null);
  // حالة عشان نعرف الأغنية الرئيسية شغالة ولا لأ
  const [isMainSongPlaying, setIsMainSongPlaying] = useState(false);
  // تقدم الأغنية
  const [progress, setProgress] = useState(0);

  // ----- تهيئة الموسيقى الخلفية (تشغل تلقائياً) -----
  useEffect(() => {
  const bgAudio = new Audio('/assets/music/background-music.mp3');
  bgAudio.loop = true;
  bgAudio.volume = 0.3;
  bgAudioRef.current = bgAudio;

  const playBgOnInteraction = () => {
    if (bgAudioRef.current && !isMainSongPlaying) {
      bgAudioRef.current.play().catch(() => {});
    }
    document.removeEventListener('click', playBgOnInteraction);
    document.removeEventListener('touchstart', playBgOnInteraction);
  };

  document.addEventListener('click', playBgOnInteraction);
  document.addEventListener('touchstart', playBgOnInteraction);

  return () => {
    if (bgAudioRef.current) {
      bgAudioRef.current.pause();
      bgAudioRef.current = null;
    }
    document.removeEventListener('click', playBgOnInteraction);
    document.removeEventListener('touchstart', playBgOnInteraction);
  };
}, [isMainSongPlaying]);
  // ----- تهيئة الأغنية الرئيسية -----
  useEffect(() => {
    const audio = new Audio('/assets/music/birthday-song.mp3');
    audio.preload = 'auto';
    audio.loop = true;
    audioRef.current = audio;
    
    // متابعة تقدم الأغنية
    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };
    audio.addEventListener('timeupdate', updateProgress);
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      audio.removeEventListener('timeupdate', updateProgress);
    };
  }, []);

  // ----- دوال التحكم في الأغاني -----
  const playMainSong = () => {
  // أوقف الموسيقى الخلفية
  if (bgAudioRef.current) {
    bgAudioRef.current.pause();
  }
  // شغل الأغنية الرئيسية
  if (audioRef.current) {
    audioRef.current.play().catch(() => {});
    setIsMainSongPlaying(true);
  }

};

  const pauseMainSong = () => {
  // أوقف الأغنية الرئيسية
  if (audioRef.current) {
    audioRef.current.pause();
    setIsMainSongPlaying(false);
  }
  // شغل الموسيقى الخلفية تاني
  if (bgAudioRef.current) {
    bgAudioRef.current.play().catch(() => {});
  }
  // مش هنشغل الموسيقى الخلفية هنا عشان الفيديو شغال
};
  useEffect(() => {
  // لو وصلنا للمشهد الثامن (index 7)
  if (currentScene === 7) {
    // أوقف الأغنية الرئيسية لو شغالة
    if (audioRef.current && isMainSongPlaying) {
      audioRef.current.pause();
      setIsMainSongPlaying(false);
    }
    // الموسيقى الخلفية تتوقف بردو
    if (bgAudioRef.current) {
      bgAudioRef.current.pause();
    }
  } 
  // لو رجعنا لمشهد قبل الثامن (0-6)
  else if (currentScene < 7) {
    // شغل الموسيقى الخلفية تاني (لو مش شغالة)
    if (bgAudioRef.current && !isMainSongPlaying) {
      bgAudioRef.current.play().catch(() => {});
    }
  }
}, [currentScene]);

  const goNext = () => {
  if (currentScene < 9) {
    const nextScene = currentScene + 1;
    
    // لو هنروح للمشهد الثامن (index 7)
    if (nextScene === 7) {
      // أوقف الأغنية الرئيسية لو شغالة
      if (audioRef.current && isMainSongPlaying) {
        audioRef.current.pause();
        setIsMainSongPlaying(false);
      }
      // أوقف الموسيقى الخلفية
      if (bgAudioRef.current) {
        bgAudioRef.current.pause();
      }
    }
    
    setCurrentScene(nextScene);
  }
};;

  // ----- المشاهد -----
  const scenes = [
    <Scene1 onNext={goNext} />,
    <Scene2 onNext={goNext} herName={birthdayContent.herName} />,
    <Scene3 onNext={goNext} message={birthdayContent.birthdayMessage} />,
    <Scene4 onNext={goNext} />,
    <Scene5 onNext={goNext} />,
    <Scene6 onNext={goNext} letterContent={birthdayContent.loveLetter} />,
    <Scene7 
      onNext={goNext} 
      musicTitle={birthdayContent.musicTitle}
      isPlaying={isMainSongPlaying}
      onPlay={playMainSong}
      onPause={pauseMainSong}
      progress={progress}
    />,
    <Scene8 
    onNext={goNext}
    onVideoPlay={playMainSong}
    onVideoPause={pauseMainSong}
  />,
    <Scene9 onNext={goNext} herName={birthdayContent.herName} finalMessage={birthdayContent.finalMessage} />,
    <Scene10 onNext={() => {}} myName={birthdayContent.myName} />,
  ];

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative', overflow: 'hidden' }}>
      <AnimatePresence mode="wait">
        <motion.div key={currentScene} initial={{ opacity: 0, filter: 'blur(6px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} exit={{ opacity: 0, filter: 'blur(8px)' }} transition={{ duration: prefersReduced ? 0.01 : 0.6, ease: [0.25, 0.1, 0.25, 1] }} style={{ height: '100%', width: '100%', position: 'absolute', inset: 0 }}>
          {scenes[currentScene]}
        </motion.div>
      </AnimatePresence>
      <div style={{ position: 'fixed', bottom: 20, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 8, zIndex: 999, pointerEvents: 'none' }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: i === currentScene ? '#e8d5c4' : 'rgba(255,255,255,0.15)', transition: 'background 0.3s' }} />
        ))}
      </div>
    </div>
  );
}