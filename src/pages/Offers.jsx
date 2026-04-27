import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Gift, Share2, Copy, Check, Star, Sparkles,
  ChevronRight, Users, Phone, MessageCircle, Crown,
  ArrowRight, Heart, Zap, Shield, Bell
} from 'lucide-react';

const STUDIO_PHONE = '919839550961';

const reasons = [
  { icon: <Crown className="w-6 h-6" />, title: 'Award-Winning Artists', desc: 'Sunita Gupta and her team are recognized as top makeup artists in Kanpur.' },
  { icon: <Star className="w-6 h-6" />, title: '500+ Happy Brides', desc: 'Hundreds of brides have trusted us for their most special day.' },
  { icon: <Sparkles className="w-6 h-6" />, title: 'Premium Products Only', desc: 'We use high-end international brands to ensure your look lasts all day.' },
  { icon: <Shield className="w-6 h-6" />, title: 'Skin-Safe Guarantee', desc: 'All treatments are hypoallergenic and done with certified techniques.' },
  { icon: <Heart className="w-6 h-6" />, title: 'Personalized Service', desc: 'Every look is custom-crafted to match your style, outfit & personality.' },
  { icon: <Zap className="w-6 h-6" />, title: 'On-Time Delivery', desc: 'We respect your schedule. Your makeup is always ready when you need it.' },
];

const eligibleServices = [
  'Bridal Makeup', 'Party Makeup', 'Hair Styling', 'Skin Facial',
  'Manicure & Pedicure', 'Body Polishing', 'Hair Extensions', 'Pre-Bridal Package',
];

export default function Offers() {
  // ── Link Generator state ──
  const [refName,  setRefName]  = useState('');
  const [refPhone, setRefPhone] = useState('');
  const [genLink,  setGenLink]  = useState('');
  const [copied,   setCopied]   = useState(false);

  // ── Data read from URL when arriving via a referral link ──
  const [referrerName,  setReferrerName]  = useState('');
  const [referrerPhone, setReferrerPhone] = useState('');

  // ── Claim form ──
  const [claimName,  setClaimName]  = useState('');
  const [claimPhone, setClaimPhone] = useState('');
  const [claimSvc,   setClaimSvc]   = useState(eligibleServices[0]);
  const [claimDone,  setClaimDone]  = useState(false);

  const claimRef = useRef(null);

  /* Flow:
     1. Generated link: /TheGoldCrownStudio/offers?ref=Priya&phone=98765
     2. GitHub Pages serves our custom 404.html
     3. 404.html redirects to: /TheGoldCrownStudio/#/offers?ref=Priya&phone=98765
     4. HashRouter renders Offers page, params now sit in window.location.hash */
  useEffect(() => {
    // After 404 redirect, params are in the hash: #/offers?ref=X&phone=Y
    const hash = window.location.hash;
    const qIndex = hash.indexOf('?');
    if (qIndex !== -1) {
      const params = new URLSearchParams(hash.slice(qIndex));
      const ref   = params.get('ref');
      const phone = params.get('phone');
      if (ref)   setReferrerName(decodeURIComponent(ref));
      if (phone) setReferrerPhone(decodeURIComponent(phone));
    } else {
      // Fallback for local dev (no 404 redirect)
      const search = new URLSearchParams(window.location.search);
      const ref   = search.get('ref');
      const phone = search.get('phone');
      if (ref)   setReferrerName(decodeURIComponent(ref));
      if (phone) setReferrerPhone(decodeURIComponent(phone));
    }
  }, []);

  /* Generate plain /offers?ref=...&phone=... links (NO hash).
     WhatsApp preserves plain query strings. Our 404.html then
     redirects into HashRouter with params intact. */
  const getOffersBase = () => {
    const base = window.location.origin;
    return base.includes('github.io')
      ? `${base}/TheGoldCrownStudio/offers`
      : `${base}/offers`;
  };

  /* Generate referral link including phone */
  const handleGenerate = () => {
    if (!refName.trim() || !refPhone.trim()) return;
    const link = `${getOffersBase()}?ref=${encodeURIComponent(refName.trim())}&phone=${encodeURIComponent(refPhone.trim())}`;
    setGenLink(link);
  };

  /* Copy link */
  const handleCopy = () => {
    navigator.clipboard.writeText(genLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  /* Share via WhatsApp */
  const handleShare = () => {
    const msg = `🌟 Hi! I'm sharing my referral link from *Gold Crown Studio* Kanpur 💄\n\nUse this link to get *₹300 off* on any service!\n\n👉 ${genLink}\n\n📍 Lajpat Nagar, Kanpur\n📞 +91 98395 50961`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
  };

  /* Claim discount — notify STUDIO + REFERRER on WhatsApp */
  const handleClaim = (e) => {
    e.preventDefault();
    if (!claimName.trim() || !claimPhone.trim()) return;

    const studioMsg = [
      `🎉 *New Referral Discount Claim!*`,
      ``,
      `👤 *New Customer:* ${claimName.trim()}`,
      `📞 *Customer Phone:* ${claimPhone.trim()}`,
      `💅 *Service Requested:* ${claimSvc}`,
      referrerName  ? `🔗 *Referred By:* ${referrerName}` : `🔗 *Referred By:* Direct`,
      referrerPhone ? `📱 *Referrer Phone:* ${referrerPhone}` : '',
      ``,
      `✅ Please apply ₹300 discount on the above service.`,
      referrerPhone ? `✅ Also give ₹300 reward to the referrer on their next visit.` : '',
    ].filter(Boolean).join('\n');

    // 1️⃣ Open WhatsApp to studio
    window.open(`https://wa.me/${STUDIO_PHONE}?text=${encodeURIComponent(studioMsg)}`, '_blank');

    // 2️⃣ If referrer's phone is known, also notify them after a small delay
    if (referrerPhone) {
      const referrerMsg = [
        `🎊 *Congratulations ${referrerName}!*`,
        ``,
        `Someone just used your Gold Crown Studio referral link!`,
        ``,
        `👤 *New Customer:* ${claimName.trim()}`,
        `💅 *Service:* ${claimSvc}`,
        ``,
        `🎁 You have earned a *₹300 discount* on your next visit to Gold Crown Studio!`,
        `📞 Call us to book: +91 98395 50961`,
      ].join('\n');

      // Clean phone: remove leading 0, add 91 if needed
      const cleanPhone = referrerPhone.replace(/\D/g, '').replace(/^0/, '');
      const waPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;

      setTimeout(() => {
        window.open(`https://wa.me/${waPhone}?text=${encodeURIComponent(referrerMsg)}`, '_blank');
      }, 1500);
    }

    setClaimDone(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ── Hero ── */}
      <div className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #b8860b 0%, transparent 60%), radial-gradient(circle at 80% 20%, #b8860b 0%, transparent 50%)' }} />
        <div className="relative max-w-5xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Gift size={16} /> Exclusive Offer — Limited Time
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
            Share &amp; <span className="text-gold">Save ₹300</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Refer a friend to Gold Crown Studio and <strong className="text-white">both of you get ₹300 off</strong> — you get notified on WhatsApp every time someone uses your link!
          </p>
          <a href="#generate" className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-full transition-colors shadow-lg">
            Create My Link <ChevronRight size={18} />
          </a>
        </div>
      </div>

      {/* ── Referrer Banner ── */}
      {referrerName && (
        <div className="bg-green-600 text-white text-center py-4 px-4">
          <p className="font-semibold text-base">
            🎁 You were referred by <span className="font-bold underline">{referrerName}</span>!
            Fill the form below to claim your <strong>₹300 discount</strong>.
          </p>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* ── How it works ── */}
        <section id="how-it-works">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">How It Works</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Share your link → get notified on WhatsApp → earn ₹300 off!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', icon: <Share2 size={26} />, title: 'Enter Name & Phone', desc: 'Your WhatsApp number is needed so we can notify you when someone uses your link.' },
              { step: '2', icon: <MessageCircle size={26} />, title: 'Get Your Link', desc: 'A unique referral link is generated with your name and number embedded.' },
              { step: '3', icon: <Users size={26} />, title: 'Share with Anyone', desc: 'Send your link on WhatsApp, Instagram, or anywhere.' },
              { step: '4', icon: <Bell size={26} />, title: 'Get Notified!', desc: 'When someone claims using your link, you get a WhatsApp message instantly!' },
            ].map((s) => (
              <div key={s.step} className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gold text-black font-bold text-sm flex items-center justify-center shadow">
                  {s.step}
                </div>
                <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-gold mx-auto mb-3 mt-2">
                  {s.icon}
                </div>
                <h3 className="font-serif font-bold text-gray-900 mb-1 text-sm">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Generate Link ── */}
        <section id="generate" className="scroll-mt-24 bg-black text-white rounded-3xl px-6 py-12 md:px-16 shadow-2xl">
          <div className="max-w-2xl mx-auto text-center">
            <Share2 size={40} className="text-gold mx-auto mb-4" />
            <h2 className="text-3xl font-serif font-bold mb-2">Create Your Referral Link</h2>
            <p className="text-gray-400 mb-2 text-sm">Enter your name and WhatsApp number — you'll be notified when someone claims using your link.</p>
            <p className="text-yellow-400 text-xs mb-8">⚠️ Your phone number is only embedded in your private link. It is never shown publicly.</p>

            <div className="flex flex-col gap-3 mb-4">
              <input
                type="text"
                placeholder="Your full name (e.g. Priya Sharma)"
                value={refName}
                onChange={(e) => setRefName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <input
                type="tel"
                placeholder="Your WhatsApp number (e.g. 9876543210)"
                value={refPhone}
                onChange={(e) => setRefPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                onClick={handleGenerate}
                className="bg-gold hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl transition-colors"
              >
                Generate My Referral Link
              </button>
            </div>

            {genLink && (
              <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 text-left mt-2">
                <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">Your referral link:</p>
                <p className="text-gold text-xs break-all mb-4">{genLink}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleCopy}
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2.5 rounded-lg transition-colors text-sm font-medium"
                  >
                    {copied ? <><Check size={16} className="text-green-400" /> Copied!</> : <><Copy size={16} /> Copy Link</>}
                  </button>
                  <button
                    onClick={handleShare}
                    className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2.5 rounded-lg transition-colors text-sm font-medium"
                  >
                    <MessageCircle size={16} /> Share on WhatsApp
                  </button>
                </div>
                <div className="mt-4 bg-green-900/30 border border-green-700/40 rounded-lg p-3 text-xs text-green-400">
                  ✅ When someone claims using this link, <strong>you will get a WhatsApp notification</strong> on {refPhone} telling you who booked and what service!
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">Why Gold Crown Studio?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">We don't just do makeup — we create memories.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-gold mb-4 group-hover:scale-105 transition-transform">
                  {r.icon}
                </div>
                <h3 className="font-serif font-bold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Claim ₹300 Discount ── */}
        <section ref={claimRef} id="claim" className="scroll-mt-24">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-black to-gray-900 px-8 py-8 text-center">
              <Gift size={36} className="text-gold mx-auto mb-3" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                Claim Your <span className="text-gold">₹300 Discount</span>
              </h2>
              <p className="text-gray-400 text-sm">
                {referrerName
                  ? `You were referred by ${referrerName}. Fill the form — your discount is confirmed!`
                  : 'Arrive here via a referral link? Fill the form to get ₹300 off your first service!'}
              </p>
            </div>

            <div className="px-8 py-8">
              {claimDone ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Claim Sent! 🎉</h3>
                  <p className="text-gray-500 text-sm mb-2">
                    ✅ A WhatsApp message has been sent to <strong>Gold Crown Studio</strong>.
                  </p>
                  {referrerPhone && (
                    <p className="text-gray-500 text-sm mb-6">
                      ✅ <strong>{referrerName}</strong> has also been notified on WhatsApp that you used their link — they'll get their ₹300 reward too!
                    </p>
                  )}
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                    View Contact Info <ArrowRight size={16} />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleClaim} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Your Full Name *</label>
                    <input
                      required type="text" placeholder="e.g. Anjali Verma"
                      value={claimName} onChange={(e) => setClaimName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Your WhatsApp Number *</label>
                    <input
                      required type="tel" placeholder="e.g. 9876543210"
                      value={claimPhone} onChange={(e) => setClaimPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Service You Want</label>
                    <select
                      value={claimSvc} onChange={(e) => setClaimSvc(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold"
                    >
                      {eligibleServices.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>

                  {referrerName ? (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-sm text-green-800">
                      ✅ Referred by: <strong>{referrerName}</strong> — ₹300 discount confirmed!<br />
                      <span className="text-xs text-green-600 mt-1 block">They will also receive a WhatsApp notification when you submit this form.</span>
                    </div>
                  ) : (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-sm text-yellow-800">
                      ⚠️ No referral link detected. Ask a friend to share their referral link so you both get ₹300 off!
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-yellow-500 text-black font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow"
                  >
                    <Phone size={18} /> Claim ₹300 Discount via WhatsApp
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    This will open WhatsApp with your details. Our team will confirm your booking shortly.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── Terms ── */}
        <section className="text-center">
          <h3 className="text-lg font-serif font-semibold text-gray-800 mb-4">Terms & Conditions</h3>
          <ul className="text-sm text-gray-500 space-y-1.5 max-w-xl mx-auto text-left list-disc list-inside">
            <li>₹300 discount is valid for one service per new customer.</li>
            <li>The referrer gets ₹300 off on their next visit after their friend books.</li>
            <li>Discount cannot be combined with other offers.</li>
            <li>Valid on all services at Gold Crown Studio, Lajpat Nagar, Kanpur.</li>
            <li>Gold Crown Studio reserves the right to withdraw this offer at any time.</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
