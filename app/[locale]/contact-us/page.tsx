// Contact Us Page - 联系我们页面

'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import ScrollAnimations from '@/components/ui/ScrollAnimations';

export default function ContactPage() {
  const t = useTranslations('contact');
  const locale = useLocale();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Call API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          locale: locale, // Include locale for email language
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Success
        setSubmitStatus('success');

        // Reset form
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          subject: '',
          message: '',
        });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        // API returned error
        setSubmitStatus('error');
        console.error('Form submission error:', data.error);

        // Reset error message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      // Network or other error
      console.error('Form submission failed:', error);
      setSubmitStatus('error');

      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);

  // Google Maps fallback state
  const [showMapFallback, setShowMapFallback] = useState(true);
  const [mapLoadTimeout, setMapLoadTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsNewsletterSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsNewsletterSubmitting(false);
      setNewsletterEmail('');
      alert(t('newsletterSuccess'));
    }, 1500);
  };

  const handleMapLoad = () => {
    // Map loaded successfully, hide fallback
    if (mapLoadTimeout) {
      clearTimeout(mapLoadTimeout);
    }
    setShowMapFallback(false);
  };

  // Set timeout for map loading (4 seconds)
  useEffect(() => {
    const timeout = setTimeout(() => {
      // If map hasn't loaded in 4 seconds, keep showing fallback
      setShowMapFallback(true);
    }, 4000);

    setMapLoadTimeout(timeout);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <>
      <ScrollAnimations />

      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-[#064E3B]">
        {/* Background Image with Overlay */}
        <img
          src="/factory.jpg"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#064E3B]/95 via-[#1B5E3A]/90 to-[#00695C]/85" />

        {/* Geometric Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <div
            className="text-center"
            data-animate="fade-up"
          >
            <div className="inline-block mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-xs md:text-sm font-semibold tracking-widest uppercase">
                {t('heroLabel')}
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
            >
              {t('heroTitle')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              {t('heroSubtitle')}
            </p>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1B5E3A] via-[#FF8F00] to-[#00695C]" />
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F9F8]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

            {/* Left Column - Contact Information (40% / 2 cols) */}
            <div className="lg:col-span-2" data-animate="fade-left">
              {/* Label */}
              <div className="text-[#00695C] text-xs font-bold tracking-[0.2em] uppercase mb-3">
                {t('infoLabel')}
              </div>

              {/* Title */}
              <h2
                className="text-[#1C2B25] text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
              >
                {t('infoTitle')}
              </h2>

              {/* Description */}
              <p className="text-[#37474F] text-base md:text-lg leading-relaxed mb-10">
                {t('infoDescription')}
              </p>

              {/* Contact Items */}
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#1B5E3A] to-[#00695C] rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#1C2B25] font-bold text-lg mb-2">
                      {t('addressLabel')}
                    </h3>
                    <p className="text-[#37474F] text-base leading-relaxed">
                      {t('address')}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#1B5E3A] to-[#00695C] rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#1C2B25] font-bold text-lg mb-2">
                      {t('emailLabel')}
                    </h3>
                    <a
                      href="mailto:tengk958@hotmail.com"
                      className="text-[#00695C] hover:text-[#1B5E3A] transition-colors text-base font-medium"
                    >
                      tengk958@hotmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#1B5E3A] to-[#00695C] rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#1C2B25] font-bold text-lg mb-2">
                      {t('phoneLabel')}
                    </h3>
                    <div className="space-y-1">
                      <a
                        href="tel:+8613957833126"
                        className="block text-[#37474F] hover:text-[#00695C] transition-colors text-base"
                      >
                        +86 139 5783 3126
                      </a>
                      <a
                        href="tel:+12154333611"
                        className="block text-[#37474F] hover:text-[#00695C] transition-colors text-base"
                      >
                        +1 215 433 3611
                      </a>
                    </div>
                    <p className="text-sm text-[#37474F]/70 mt-2">
                      WhatsApp / WeChat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form (60% / 3 cols) */}
            <div className="lg:col-span-3" data-animate="fade-right">
              <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 lg:p-10">
                <h3
                  className="text-[#1C2B25] text-2xl md:text-3xl font-bold mb-6"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
                >
                  {t('formTitle')}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Name | Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#1C2B25] mb-2">
                        {t('formName')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-[#00695C] focus:ring-2 focus:ring-[#00695C]/20 outline-none transition-all"
                        placeholder={t('formNamePlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-[#1C2B25] mb-2">
                        {t('formCompany')}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-[#00695C] focus:ring-2 focus:ring-[#00695C]/20 outline-none transition-all"
                        placeholder={t('formCompanyPlaceholder')}
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone | Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[#1C2B25] mb-2">
                        {t('formPhone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-[#00695C] focus:ring-2 focus:ring-[#00695C]/20 outline-none transition-all"
                        placeholder={t('formPhonePlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#1C2B25] mb-2">
                        {t('formEmail')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-[#00695C] focus:ring-2 focus:ring-[#00695C]/20 outline-none transition-all"
                        placeholder={t('formEmailPlaceholder')}
                      />
                    </div>
                  </div>

                  {/* Row 3: Subject (Full Width) */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-[#1C2B25] mb-2">
                      {t('formSubject')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-[#00695C] focus:ring-2 focus:ring-[#00695C]/20 outline-none transition-all"
                      placeholder={t('formSubjectPlaceholder')}
                    />
                  </div>

                  {/* Row 4: Message (Full Width) */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#1C2B25] mb-2">
                      {t('formMessage')} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-[#00695C] focus:ring-2 focus:ring-[#00695C]/20 outline-none transition-all resize-none"
                      placeholder={t('formMessagePlaceholder')}
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#1B5E3A] to-[#00695C] text-white font-bold py-4 px-8 rounded-md hover:from-[#00695C] hover:to-[#1B5E3A] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="w-5 h-5 animate-spin"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                          </svg>
                          {t('formSubmitting')}
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m22 2-7 20-4-9-9-4Z" />
                            <path d="M22 2 11 13" />
                          </svg>
                          {t('formSubmit')}
                        </>
                      )}
                    </button>
                  </div>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border-2 border-green-200 text-green-800 px-4 py-3 rounded-md">
                      {t('formSuccess')}
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border-2 border-red-200 text-red-800 px-4 py-3 rounded-md">
                      {t('formError')}
                    </div>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section with Fallback */}
      <section className="relative h-[400px] md:h-[450px] lg:h-[500px]" data-animate="fade-up">
        {/* Fallback Content (shown by default or when map fails to load) */}
        {showMapFallback && (
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#064E3B] via-[#1B5E3A] to-[#00695C]">
            <div className="h-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
              <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

                {/* Left: Location Information */}
                <div className="flex flex-col justify-center space-y-6 md:space-y-8">
                  <div>
                    <div className="inline-block mb-3 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                      <span className="text-xs font-semibold tracking-wider uppercase text-white/90">
                        {t('infoLabel')}
                      </span>
                    </div>
                    <h3
                      className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
                    >
                      {t('mapFallbackTitle')}
                    </h3>
                    <p className="text-white/80 text-base md:text-lg leading-relaxed">
                      {t('mapFallbackDescription')}
                    </p>
                  </div>

                  {/* Address Details */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                        <svg
                          className="w-5 h-5 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg">
                          {t('mapFallbackAddress')}
                        </p>
                        <p className="text-white/70 text-sm">
                          {t('mapFallbackCity')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                        <svg
                          className="w-5 h-5 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold">
                          {t('mapFallbackPhone1')}
                        </p>
                        <p className="text-white/70 text-sm">
                          {t('mapFallbackPhone2')}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Baidu Maps Button */}
                  <div>
                    <a
                      href="https://map.baidu.com/marker?location=29.820642597636052,121.48992776870725&title=宁波市海曙盛欣塑化有限公司&content=宁波市海曙区石碶街道双江安丰家村&autoOpen=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF8F00] hover:bg-[#F57C00] text-white font-bold rounded-md transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {t('mapFallbackBaidu')}
                    </a>
                  </div>
                </div>

                {/* Right: Factory Image */}
                <div className="hidden lg:flex items-center justify-center">
                  <div className="relative w-full h-full max-h-[400px]">
                    {/* Decorative border */}
                    <div className="absolute -top-4 -right-4 w-full h-full border-2 border-white/20 rounded-lg" />

                    {/* Image container */}
                    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                      <img
                        src="/factory.jpg"
                        alt="Factory Location"
                        className="w-full h-full object-cover"
                      />
                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Google Maps iframe (hidden initially, shown if loads successfully) */}
        <div className={`w-full h-full ${showMapFallback ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
          <iframe
            src="https://maps.google.com/maps?q=29.820642597636052,121.48992776870725&hl=zh-CN&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
            onLoad={handleMapLoad}
          />

          {/* Map Overlay Card (only shown when map is visible) */}
          {!showMapFallback && (
            <div className="absolute bottom-8 left-4 md:left-8 bg-white rounded-lg shadow-2xl p-6 max-w-sm z-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1B5E3A] rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#1C2B25] text-lg mb-1">
                    {t('mapCardTitle')}
                  </h4>
                  <p className="text-sm text-[#37474F] leading-relaxed">
                    {t('address')}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription Bar */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-[#1B5E3A] via-[#00695C] to-[#1B5E3A]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: Text */}
            <div className="text-white text-center md:text-left">
              <h3
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
              >
                {t('newsletterTitle')}
              </h3>
              <p className="text-white/80 text-sm md:text-base">
                {t('newsletterSubtitle')}
              </p>
            </div>

            {/* Right: Form */}
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                placeholder={t('newsletterPlaceholder')}
                className="px-5 py-3 rounded-md border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:bg-white/20 focus:border-white/40 outline-none transition-all w-full sm:w-80"
              />
              <button
                type="submit"
                disabled={isNewsletterSubmitting}
                className="px-8 py-3 bg-[#FF8F00] hover:bg-[#F57C00] text-white font-bold rounded-md transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isNewsletterSubmitting ? (
                  <svg
                    className="w-5 h-5 animate-spin inline"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                ) : (
                  t('newsletterButton')
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
