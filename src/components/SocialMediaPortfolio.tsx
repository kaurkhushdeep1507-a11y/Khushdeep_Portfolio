import { useState, useEffect } from 'react';
import { SOCIAL_MEDIA_POSTS } from '../data';
import { ChevronLeft, ChevronRight, Heart, MessageSquare, Bookmark, Home, Search, PlusSquare, User } from 'lucide-react';

import carouselImage1 from '../../assets/images/Social/carousel/food_menu_2.jpeg';
import carouselImage2 from '../../assets/images/Social/carousel/food_menu_3.jpeg';
import carouselImage3 from '../../assets/images/Social/carousel/food_menu_4.jpeg';
import carouselImage4 from '../../assets/images/Social/carousel/food_menu.jpeg';

import workImage1 from '../../assets/images/Social/carouselImages/office-5.png';
import workImage2 from '../../assets/images/Social/carouselImages/office-6.png';
import workImage3 from '../../assets/images/Social/carouselImages/office-7.png';
import workImage4 from '../../assets/images/Social/carouselImages/office-8.png';

import instaImage1 from '../../assets/images/Social/instagram/food_menu.jpeg';
import instaImage2 from '../../assets/images/Social/instagram/food_menu_2.jpeg';
import instaImage3 from '../../assets/images/Social/instagram/food_menu_3.jpeg';
import instaImage4 from '../../assets/images/Social/instagram/food_menu_4.jpeg';

import adImage1 from '../../assets/images/Social/Advertisement/office-3.png';
import adImage2 from '../../assets/images/Social/Advertisement/office-4.jpg';
import adImage3 from '../../assets/images/Social/Advertisement/office-1.png';
import adImage4 from '../../assets/images/Social/Advertisement/office-2.jpg';

export default function SocialMediaPortfolio() {
  const [filter, setFilter] = useState<'All' | 'Lifestyle' | 'Advertisement' | 'Carousel'>('All');

  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  // iPhone mockup + 4 side images (from carousel folder)
  const carouselImages = [
    carouselImage1,
    carouselImage2,
    carouselImage3,
    carouselImage4,
  ];


  // Work showcase images (from carouselImages folder)
  const workImages = [
    workImage1,
    workImage2,
    workImage3,
    workImage4,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowcaseIndex((prev) => (prev + 1) % workImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [workImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const lifestylePosts = [
    {
      id: 's-life-1',
      platform: 'Lifestyle' as const,
      imageUrl: instaImage1,
      title: 'Burger Menu Promotional Design',
      description: 'A modern food promotion design created to showcase a special burger offer. The layout uses bold visuals, clear pricing, and eye-catching typography to attract customers and encourage orders.'
    },
    {
      id: 's-life-2',
      platform: 'Lifestyle' as const,
      imageUrl: instaImage2,
      title: 'Cold Coffee Promotional Design',
      description: 'A clean and modern promotional design created for a cold coffee campaign. The layout combines rich coffee visuals, bold typography, and a warm color palette to highlight the product and attract customer attention.'
    },
    {
      id: 's-life-3',
      platform: 'Lifestyle' as const,
      imageUrl: instaImage3,
      title: 'Pizza Promotional Design',
      description: 'A vibrant promotional design created to showcase a delicious pizza offer. The layout features bold typography, appetizing visuals, and a striking color scheme to attract attention and encourage customer orders.'
    },
    {
      id: 's-life-4',
      platform: 'Lifestyle' as const,
      imageUrl: instaImage4,
      title: 'Mango Ice Cream Promotional Design',
      description: 'A bright and refreshing promotional design created to showcase mango ice cream. The design uses vibrant colors, appealing visuals, and clear call-to-action elements to highlight the product and attract customer attention.'
    }
  ];

  const advertisementPosts = [
    {
      id: 's-ad-1',
      platform: 'Advertisement' as const,
      imageUrl: adImage1,
      title: 'ITR Filing Season Campaign Design',
      description: 'A bold and professional promotional design created for the ITR filing season. The layout highlights important filing dates, service packages, and clear call-to-action elements to help users stay informed and file their returns on time.'
    },
    {
      id: 's-ad-2',
      platform: 'Advertisement' as const,
      imageUrl: adImage2,
      title: 'ITR-1 Filing Promotional Design',
      description: 'A modern promotional design created to advertise ITR-1 filing services. The design highlights affordability, ease of filing, and expert support through engaging visuals, clear messaging, and a strong call to action.'
    },
    {
      id: 's-ad-3',
      platform: 'Advertisement' as const,
      imageUrl: adImage3,
      title: 'Income Tax Return (ITR) Filing Campaign Design',
      description: 'A professional social media design created to promote Income Tax Return filing services. The design uses strong visuals, clear messaging, and deadline-focused elements to encourage timely tax filing and increase customer engagement.'
    },
    {
      id: 's-ad-4',
      platform: 'Advertisement' as const,
      imageUrl: adImage4,
      title: 'ITR Deadline Awareness Campaign Design',
      description: 'A creative social media design developed to promote timely Income Tax Return filing. The design combines attention-grabbing visuals, deadline reminders, and clear service highlights to encourage users to file their ITR before the due date.'
    }
  ];

  const allPosts = [
    lifestylePosts[0],
    lifestylePosts[1],
    advertisementPosts[0],
    advertisementPosts[1],
  ];

  const filteredPosts = filter === 'All' 
    ? allPosts
    : filter === 'Lifestyle'
    ? lifestylePosts
    : filter === 'Advertisement'
    ? advertisementPosts
    : workImages.map((img, idx) => ({
        id: `carousel-${idx}`,
        platform: 'Work' as const,
        imageUrl: img,
        title: `Work Design ${idx + 1}`,
        description: 'Professional work design for social media engagement and brand storytelling.'
      }));

  return (
    <section id="social-media" className="py-24 bg-app-bg relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <span className="text-stone-500 text-xs font-mono uppercase tracking-widest block mb-2">// SOCIAL MEDIA DESIGN</span>
            <h2 className="font-serif text-3xl md:text-5xl text-black font-semibold tracking-tight">
              Social Designs That Get Noticed
            </h2>
          </div>

          <div className="flex flex-wrap gap-1.5 border border-white/50 p-1 bg-white/30 backdrop-blur-md rounded-full shadow-sm">
            {(['All', 'Lifestyle', 'Advertisement', 'Carousel'] as const).map((plat) => (
              <button
                key={plat}
                onClick={() => setFilter(plat)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                  filter === plat
                    ? 'bg-black text-white border-black font-semibold'
                    : 'bg-transparent text-stone-700 hover:text-black hover:bg-white/40'
                }`}
              >
                {plat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT: Posts Grid OR Work Spread Layout */}
          <div className="lg:col-span-8 order-2 lg:order-1">

            {/* Normal Grid for All, Lifestyle, Advertisement */}
            {filter !== 'Carousel' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="glass-card glass-card-hover overflow-hidden relative flex flex-col justify-between text-left"
                  >
                    <div className="aspect-square bg-white/10 overflow-hidden relative rounded-t-[24px]">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover pointer-events-none"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-[9px] font-mono uppercase py-1.5 px-3 tracking-widest rounded-lg shadow-sm">
                        {post.platform}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-center text-stone-500 mb-3 border-b border-black/5 pb-3">
                        <span className="text-[10px] uppercase font-mono tracking-wider font-semibold">PROJECT: {post.id}</span>
                        <div className="flex items-center gap-3">
                          <Heart size={14} className="hover:text-red-500 cursor-pointer transition-colors" />
                          <MessageSquare size={14} className="hover:text-black cursor-pointer transition-colors" />
                          <Bookmark size={14} className="hover:text-black cursor-pointer transition-colors" />
                        </div>
                      </div>

                      <h3 className="font-serif text-md font-bold text-black mb-2">
                        {post.title}
                      </h3>
                      <p className="text-stone-700 text-xs font-light leading-relaxed">
                        {post.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* SPECIAL: Work Spread Layout */}
            {filter === 'Carousel' && (
              <div className="relative w-full min-h-[700px] flex items-center justify-center">

                {/* 4 Side Images - from carousel folder */}
                <div className="absolute top-0 left-0 w-[32%] rounded-[20px] overflow-hidden shadow-xl border border-stone-200 rotate-[-6deg] hover:rotate-0 transition-transform duration-300">
                  <img src={carouselImages[0]} alt="Carousel 1" className="w-full aspect-square object-cover" />
                </div>

                <div className="absolute top-0 right-0 w-[32%] rounded-[20px] overflow-hidden shadow-xl border border-stone-200 rotate-[6deg] hover:rotate-0 transition-transform duration-300">
                  <img src={carouselImages[1]} alt="Carousel 2" className="w-full aspect-square object-cover" />
                </div>

                <div className="absolute bottom-0 left-0 w-[32%] rounded-[20px] overflow-hidden shadow-xl border border-stone-200 rotate-[6deg] hover:rotate-0 transition-transform duration-300">
                  <img src={carouselImages[2]} alt="Carousel 3" className="w-full aspect-square object-cover" />
                </div>

                <div className="absolute bottom-0 right-0 w-[32%] rounded-[20px] overflow-hidden shadow-xl border border-stone-200 rotate-[-6deg] hover:rotate-0 transition-transform duration-300">
                  <img src={carouselImages[3]} alt="Carousel 4" className="w-full aspect-square object-cover" />
                </div>

                {/* CENTER: iPhone Mockup - LIGHT THEME - shows carousel folder images */}
                <div className="relative z-10 w-[38%]">
                  <div className="bg-stone-900 rounded-[40px] p-[10px] shadow-2xl border border-stone-800">
                    <div className="bg-white rounded-[32px] overflow-hidden relative">

                      {/* Dynamic Island */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-b-[18px] z-30"></div>

                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-6 pt-3 pb-1">
                        <span className="text-[9px] font-semibold text-black">9:41</span>
                        <div className="flex gap-1 items-center">
                          <svg width="12" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          <svg width="12" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 5 13zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                          </svg>
                          <span className="text-[8px] font-bold text-black">100%</span>
                        </div>
                      </div>

                      {/* Instagram Header */}
                      <div className="flex justify-between items-center px-4 py-2 border-b border-stone-100">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
                            <rect x="3" y="3" width="18" height="18" rx="6"/>
                            <circle cx="12" cy="12" r="5"/>
                            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                          </svg>
                        </div>
                        <span className="text-black font-serif text-[14px] tracking-tight" style={{fontFamily: 'cursive'}}>Instagram</span>
                        <div className="flex gap-3 items-center">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                          </svg>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
                            <path d="M22 2L11 13"/>
                            <path d="M22 2l-7 20-4-9-9-4 20-7z"/>
                          </svg>
                        </div>
                      </div>

                      {/* Story Avatar Row */}
                      <div className="flex items-center gap-2 px-4 py-2 border-b border-stone-100">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[1.5px]">
                          <div className="w-full h-full rounded-full bg-white flex items-center justify-center border border-white">
                            <span className="text-[7px] font-bold text-black">KK</span>
                          </div>
                        </div>
                        <span className="text-[9px] font-semibold text-black">khushdeep.kaur</span>
                      </div>

                      {/* Screen Image - from carousel folder */}
                      <div className="aspect-square relative bg-stone-50">
                        {carouselImages.map((img, idx) => (
                          <div
                            key={idx}
                            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                              idx === mobileIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                          >
                            <img 
                              src={img} 
                              alt={`Slide ${idx + 1}`} 
                              className="w-full h-full object-cover" 
                            />
                          </div>
                        ))}

                        {/* Right Side Progress Bars */}
                        <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex flex-col gap-[3px] z-20">
                          {carouselImages.map((_, idx) => (
                            <span
                              key={idx}
                              className={`w-[2.5px] rounded-full transition-all ${
                                idx === mobileIndex ? 'bg-black h-4' : 'bg-black/30 h-2'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Instagram Bottom */}
                      <div className="px-3 py-2 border-t border-stone-100 bg-white">
                        <div className="flex justify-between items-center mb-1.5">
                          <div className="flex gap-3.5">
                            <Heart size={18} className="text-black fill-red-500" />
                            <MessageSquare size={18} className="text-black" />
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
                              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                              <polyline points="16 6 12 2 8 6"/>
                              <line x1="12" y1="2" x2="12" y2="15"/>
                            </svg>
                          </div>
                          <Bookmark size={18} className="text-black" />
                        </div>
                        <span className="text-[10px] font-semibold text-black block mb-0.5">2,847 likes</span>
                        <div className="flex items-center gap-1 mb-0.5">
                          <span className="text-[10px] font-semibold text-black">khushdeep.kaur</span>
                          <span className="text-[10px] text-stone-600">Carousel Design {mobileIndex + 1} ✨</span>
                        </div>
                        <span className="text-[9px] text-stone-400 block">View all 124 comments</span>
                        <div className="flex justify-center gap-1 mt-1.5">
                          {carouselImages.map((_, idx) => (
                            <span
                              key={idx}
                              className={`w-1.5 h-1.5 rounded-full transition-all ${
                                idx === mobileIndex ? 'bg-sky-500' : 'bg-stone-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Bottom Navigation Bar */}
                      <div className="flex justify-between items-center px-5 py-2 border-t border-stone-100 bg-white">
                        <Home size={20} className="text-black fill-black" />
                        <Search size={20} className="text-black" />
                        <PlusSquare size={20} className="text-black" />
                        <Heart size={20} className="text-black" />
                        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[1px]">
                          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                            <span className="text-[5px] font-bold text-black">KK</span>
                          </div>
                        </div>
                      </div>

                      {/* Home Indicator */}
                      <div className="flex justify-center pb-2 pt-0 bg-white">
                        <div className="w-28 h-[4px] bg-black rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* RIGHT: Work Showcase - from carouselImages folder */}
          <div className="lg:col-span-4 order-1 lg:order-2">
            <div className="bg-black/90 backdrop-blur-xl rounded-[24px] p-6 text-white border border-white/10 shadow-xl flex flex-col gap-6 text-left relative overflow-hidden">

              <div className="flex justify-between items-center">
                <span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest">
                  // WORK SHOWCASE
                </span>
                <span className="text-amber-500 font-mono text-[9px] tracking-wider uppercase">
                  Auto-Scroll
                </span>
              </div>

              <h3 className="font-serif text-lg font-bold text-stone-100">
                Work Designs
              </h3>

              <div className="relative aspect-square rounded-[20px] overflow-hidden border border-white/10 bg-stone-900">
                {workImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                      idx === showcaseIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <img src={img} alt={`Work ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 z-20">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[10px] font-mono text-amber-500 uppercase tracking-wider">
                        {workImages[showcaseIndex]?.split('/').pop()?.replace('.png', '').replace(/_/g, ' ').toUpperCase()}
                      </span>
                      <p className="text-[9px] text-stone-400 font-mono mt-1">
                        SLIDE {showcaseIndex + 1} OF {workImages.length}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      {workImages.map((_, idx) => (
                        <span
                          key={idx}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === showcaseIndex ? 'bg-amber-500 w-4' : 'bg-white/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setShowcaseIndex((prev) => (prev > 0 ? prev - 1 : workImages.length - 1))}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all z-20 cursor-pointer border border-white/10"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={() => setShowcaseIndex((prev) => (prev < workImages.length - 1 ? prev + 1 : 0))}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all z-20 cursor-pointer border border-white/10"
                >
                  <ChevronRight size={14} />
                </button>
              </div>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => setShowcaseIndex((prev) => (prev > 0 ? prev - 1 : workImages.length - 1))}
                  className="py-2 px-4 bg-white/10 hover:bg-white/20 hover:text-white border border-white/10 rounded-full transition-all uppercase font-mono tracking-widest text-[9px] flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft size={12} /> Prev
                </button>

                <p className="font-mono text-[9px] text-stone-500 uppercase tracking-widest">
                  {workImages.length} SLIDES
                </p>

                <button
                  onClick={() => setShowcaseIndex((prev) => (prev < workImages.length - 1 ? prev + 1 : 0))}
                  className="py-2 px-4 bg-white/10 hover:bg-white/20 hover:text-white border border-white/10 rounded-full transition-all uppercase font-mono tracking-widest text-[9px] flex items-center gap-1 cursor-pointer"
                >
                  Next <ChevronRight size={12} />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}