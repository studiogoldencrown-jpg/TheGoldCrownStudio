import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Gift, Share2, Copy, Check, Star, Sparkles,
  ChevronRight, Users, Phone, MessageCircle, Crown,
  ArrowRight, Heart, Zap, Shield
} from 'lucide-react';

const STUDIO_PHONE = '919839550961';

/* ── Reasons to choose us ── */
const reasons = [
  { icon: <Crown className="w-6 h-6" />, title: 'Award-Winning Artists', desc: 'Sunita Gupta and her team are recognized as top makeup artists in Kanpur.' },
  { icon: <Star className="w-6 h-6" />, title: '500+ Happy Brides', desc: 'Hundreds of brides have trusted us for their most special day.' },
  { icon: <Sparkles className="w-6 h-6" />, title: 'Premium Products Only', desc: 'We use high-end international brands to ensure your look lasts all day.' },
  { icon: <Shield className="w-6 h-6" />, title: 'Skin-Safe Guarantee', desc: 'All treatments are hypoallergenic and done with certified techniques.' },
  { icon: <Heart className="w-6 h-6" />, title: 'Personalized Service', desc: 'Every look is custom-crafted to match your style, outfit & personality.' },
  { icon: <Zap className="w-6 h-6" />, title: 'On-Time Delivery', desc: 'We respect your schedule. Your makeup is always ready when you need it.' },
];

/* ── Services eligible for ₹300 discount ── */
const eligibleServices = [
  'Bridal Makeup', 'Party Makeup', 'Hair Styling', 'Skin Facial',
  'Manicure & Pedicure', 'Body Polishing', 'Hair Extensions', 'Pre-Bridal Package',
];

export default function Offers() {
  const [refName, setRefName]     = useState('');
  const [genLink, setGenLink]     = useState('');
  const [copied, setCopied]       = useState(false);
  const [referrer, setReferrer]   = useState('');

  /* Claim-offer form */
  const [claimName,  setClaimName]   = useState('');
  const [claimPhone, setClaimPhone]  = useState('');
  const [claimSvc,   setClaimSvc]    = useState(eligibleServices[0]);
  const [claimDone,  setClaimDone]   = useState(false);

  const claimRef = useRef(null);

  /* Read ?ref= from URL on mount */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref');
    if (ref) setReferrer(decodeURIComponent(ref));
  }, []);

  /* Generate shareable link */
  const handleGenerate = () => {
    if (!refName.trim()) return;
    const base = window.location.origin + window.location.pathname;
    // For GitHub Pages with BrowserRouter basename
    const path = base.includes('/TheGoldCrownStudio')
      ? base.split('/TheGoldCrownStudio')[0] + '/TheGoldCrownStudio/#/offers'
      : base.replace(/\/$/, '') + '/#/offers';
    setGenLink(`${path}?ref=${encodeURIComponent(refName.trim())}`);
  };

  /* Copy to clipboard */
  const handleCopy = () => {
    navigator.clipboard.writeText(genLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  /* Share via WhatsApp */
  const handleShare = () => {
    const msg = `🌟 Hey! I'm using Gold Crown Studio in Kanpur for beauty services and I love it! Use my referral link to get ₹300 off on any service 💄✨\n\n${genLink}\n\n📍 Gold Crown Studio, Lajpat Nagar, Kanpur\n📞 +91 98395 50961`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
  };

  /* Claim offer → send WhatsApp to studio */
  const handleClaim = (e) => {
    e.preventDefault();
    if (!claimName.trim() || !claimPhone.trim()) return;

    const msg = [
      `🎉 *New Referral Discount Claim!*`,
      ``,
      `👤 *New Customer:* ${claimName.trim()}`,
      `📞 *Phone:* ${claimPhone.trim()}`,
      `💅 *Service Requested:* ${claimSvc}`,
      referrer ? `🔗 *Referred By:* ${referrer}` : `🔗 *Referred By:* Direct / Unknown`,
      ``,
      `Please apply ₹300 discount on the above service.`,
    ].join('\n');

    window.open(`https://wa.me/${STUDIO_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
    setClaimDone(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ── Hero Banner ── */}
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
            Refer a friend to Gold Crown Studio and <strong className="text-white">both of you get ₹300 off</strong> on any service — bridal makeup, hair styling, skin care &amp; more!
          </p>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-full transition-colors shadow-lg"
          >
            See How It Works <ChevronRight size={18} />
          </a>
        </div>
      </div>

      {/* ── Referrer-specific banner ── */}
      {referrer && (
        <div className="bg-green-600 text-white text-center py-4 px-4">
          <p className="font-semibold text-base">
            🎁 You were referred by <span className="font-bold underline">{referrer}</span>!
            Claim your <strong>₹300 discount</strong> below by filling the form.
          </p>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* ── Why Choose Us ── */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">Why Gold Crown Studio?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">We don't just do makeup — we create memories. Here's what makes us the #1 choice in Kanpur.</p>
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

        {/* ── How it works ── */}
        <section id="how-it-works" className="scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">How the Referral Works</h2>
            <p className="text-gray-500 max-w-xl mx-auto">It's dead simple — 3 steps and you both save money!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '1', icon: <Share2 size={28} />, title: 'Generate Your Link', desc: 'Enter your name below and get a unique referral link with your name in it.' },
              { step: '2', icon: <Users size={28} />, title: 'Share with Friends', desc: 'Send the link via WhatsApp, Instagram, or any social media to people you know.' },
              { step: '3', icon: <Gift size={28} />, title: 'Both Save ₹300', desc: 'When your friend books a service, they get ₹300 off — and so do you on your next visit!' },
            ].map((s) => (
              <div key={s.step} className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gold text-black font-bold text-sm flex items-center justify-center shadow">
                  {s.step}
                </div>
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-gold mx-auto mb-4 mt-2">
                  {s.icon}
                </div>
                <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Generate Link ── */}
        <section className="bg-black text-white rounded-3xl px-6 py-12 md:px-16 shadow-2xl">
          <div className="max-w-2xl mx-auto text-center">
            <Share2 size={40} className="text-gold mx-auto mb-4" />
            <h2 className="text-3xl font-serif font-bold mb-2">Create Your Referral Link</h2>
            <p className="text-gray-400 mb-8 text-sm">Enter your name and we'll generate a personal link you can share instantly.</p>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="text"
                placeholder="Your name (e.g. Priya Sharma)"
                value={refName}
                onChange={(e) => setRefName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                onClick={handleGenerate}
                className="bg-gold hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
              >
                Generate Link
              </button>
            </div>

            {genLink && (
              <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 text-left mt-4">
                <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">Your referral link:</p>
                <p className="text-gold text-sm break-all mb-4">{genLink}</p>
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
              </div>
            )}
          </div>
        </section>

        {/* ── Claim ₹300 Discount (for new customer arriving via referral) ── */}
        <section ref={claimRef} id="claim" className="scroll-mt-24">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-black to-gray-900 px-8 py-8 text-center">
              <Gift size={36} className="text-gold mx-auto mb-3" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                Claim Your <span className="text-gold">₹300 Discount</span>
              </h2>
              <p className="text-gray-400 text-sm">
                {referrer
                  ? `You were referred by ${referrer}. Fill the form and we'll contact you to book your appointment!`
                  : 'If someone shared this link with you, fill the form to get ₹300 off your first service!'}
              </p>
            </div>

            <div className="px-8 py-8">
              {claimDone ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Claim Sent! 🎉</h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Your request has been sent to Gold Crown Studio on WhatsApp. Our team will reach out to you within a few hours to confirm your appointment and apply the ₹300 discount!
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                    View Contact Info <ArrowRight size={16} />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleClaim} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Your Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Anjali Verma"
                      value={claimName}
                      onChange={(e) => setClaimName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Your WhatsApp Number *</label>
                    <input
                      required
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={claimPhone}
                      onChange={(e) => setClaimPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Service You Want</label>
                    <select
                      value={claimSvc}
                      onChange={(e) => setClaimSvc(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    >
                      {eligibleServices.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  {referrer && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-sm text-green-800">
                      ✅ Referred by: <strong>{referrer}</strong> — ₹300 discount will be applied automatically!
                    </div>
                  )}
                  {!referrer && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-sm text-yellow-800">
                      ⚠️ No referral link detected. Ask a friend to share their link so you both get ₹300 off!
                    </div>
                  )}
                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-yellow-500 text-black font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow"
                  >
                    <Phone size={18} /> Claim ₹300 Discount via WhatsApp
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Clicking this will open WhatsApp with your details pre-filled. Our team will confirm your booking shortly.
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
            <li>₹300 discount is valid for one service per customer.</li>
            <li>The referrer also gets ₹300 off on their next visit.</li>
            <li>Discount cannot be combined with other offers.</li>
            <li>Valid on all services at Gold Crown Studio, Kanpur.</li>
            <li>Gold Crown Studio reserves the right to withdraw this offer at any time.</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
