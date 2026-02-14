import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

// Icons
const HeartIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const PersonIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const SparkleIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const GraduationIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
);

const ApproachIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-8 md:px-6 py-4">
          <Link href="/" className="text-xl font-semibold text-gray-900 dark:text-white">
            Wiktoria Szparaga.
          </Link>
          <ul className="hidden items-center gap-8 md:flex">
            <li>
              <a href="#o-mnie" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                O mnie
              </a>
            </li>
            <li>
              <a href="#oferta" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Oferta
              </a>
            </li>
            <li>
              <a href="#kontakt" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Kontakt
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <a
              href="https://www.znanylekarz.pl/z/qGWhR5"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="rounded-lg bg-coral px-5 py-2.5 text-sm font-medium text-white hover:bg-coral-dark transition-colors"
            >
              Zapisz się na wizytę
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-cream dark:bg-gray-800 relative overflow-hidden">
        {/* Decorative gradient blobs */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-coral/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-72 h-72 bg-teal/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-coral/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <div className="mx-auto max-w-6xl px-8 md:px-6 py-16 md:py-24 relative z-10">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-medium text-coral tracking-wide mb-6 bg-coral/10 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-coral rounded-full animate-pulse"></span>
                <span>PSYCHOLOG</span>
                <span>•</span>
                <span>BYDGOSZCZ</span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-gray-900 dark:text-white leading-tight">
                Psycholog Bydgoszcz –{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">zdobądź</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-coral/40 to-coral/20 -z-0 rounded"></span>
                </span>{" "}
                spokój i zrozumienie
              </h1>
              
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                Wspieram w trudnych momentach, pomagam zrozumieć siebie i budować zdrowe relacje. 
                Zapraszam do mojego gabinetu w Bydgoszczy oraz na konsultacje online.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://www.znanylekarz.pl/z/qGWhR5"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="group rounded-xl bg-coral px-8 py-4 font-medium text-white hover:bg-coral-dark transition-all duration-300 shadow-lg shadow-coral/25 hover:shadow-xl hover:shadow-coral/30 hover:-translate-y-0.5"
                >
                  Umów wizytę
                  <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#o-mnie"
                  className="group flex items-center gap-2 px-6 py-4 font-medium text-gray-700 dark:text-gray-300 hover:text-coral transition-colors rounded-xl border-2 border-transparent hover:border-coral/20"
                >
                  Dowiedz się więcej
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-coral/20 via-transparent to-teal/20 rounded-[2rem] blur-2xl opacity-60"></div>
              
              <div className="relative aspect-[4/5] max-w-md mx-auto md:ml-auto rounded-3xl overflow-hidden bg-cream-dark shadow-2xl">
                <img 
                  src="/images/profile.webp" 
                  alt="Wiktoria Szparaga - Psycholog Bydgoszcz" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute bottom-6 right-0 md:right-4 glass dark:bg-gray-700/90 rounded-2xl shadow-xl px-5 py-4 flex items-center gap-4 border border-white/20">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center text-white shadow-lg">
                  <LocationIcon />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">Lokalizacja</p>
                  <p className="font-semibold text-gray-900 dark:text-white">Bydgoszcz & Online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-28 dark:bg-gray-900 relative">
        <div className="absolute inset-0 dots-pattern opacity-5"></div>
        <div className="mx-auto max-w-3xl px-8 md:px-6 text-center relative">
          <div className="flex justify-center mb-8">
            <span className="text-coral text-7xl font-serif opacity-80">&quot;</span>
          </div>
          <blockquote className="font-serif text-2xl md:text-3xl italic text-gray-700 dark:text-gray-300 leading-relaxed">
            Nie jesteśmy odpowiedzialni za to, co nam się przydarza, ale jesteśmy odpowiedzialni za to, co z tym zrobimy.
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-coral/40"></span>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-widest uppercase">
              Jean-Paul Sartre
            </p>
            <span className="w-12 h-px bg-coral/40"></span>
          </div>
        </div>
      </section>

      {/* O mnie Section */}
      <section id="o-mnie" className="py-16 md:py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-8 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex gap-8 justify-center lg:justify-start items-end">
              {/* Książka */}
              <div className="animate-float">
                <svg width="160" height="210" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg hover:scale-105 transition-transform duration-300">
                  {/* Grzbiet książki */}
                  <path d="M15 20 L15 145 Q15 150 20 150 L25 150 L25 15 Q25 10 20 10 L20 10 Q15 10 15 20Z" fill="#1A3A3A"/>
                  {/* Okładka tylna */}
                  <rect x="25" y="10" width="80" height="140" rx="2" fill="#E8956A"/>
                  {/* Strony */}
                  <rect x="28" y="15" width="74" height="130" rx="1" fill="#FDF8F3"/>
                  <line x1="32" y1="25" x2="98" y2="25" stroke="#E5DDD4" strokeWidth="1"/>
                  <line x1="32" y1="35" x2="98" y2="35" stroke="#E5DDD4" strokeWidth="1"/>
                  <line x1="32" y1="45" x2="90" y2="45" stroke="#E5DDD4" strokeWidth="1"/>
                  <line x1="32" y1="55" x2="95" y2="55" stroke="#E5DDD4" strokeWidth="1"/>
                  <line x1="32" y1="65" x2="85" y2="65" stroke="#E5DDD4" strokeWidth="1"/>
                  <line x1="32" y1="75" x2="98" y2="75" stroke="#E5DDD4" strokeWidth="1"/>
                  <line x1="32" y1="85" x2="92" y2="85" stroke="#E5DDD4" strokeWidth="1"/>
                  <line x1="32" y1="95" x2="88" y2="95" stroke="#E5DDD4" strokeWidth="1"/>
                  <line x1="32" y1="105" x2="98" y2="105" stroke="#E5DDD4" strokeWidth="1"/>
                  <line x1="32" y1="115" x2="80" y2="115" stroke="#E5DDD4" strokeWidth="1"/>
                  {/* Zakładka */}
                  <path d="M75 10 L75 45 L80 38 L85 45 L85 10" fill="#D4805A"/>
                </svg>
              </div>
              
              {/* Kot */}
              <div className="animate-float-delayed">
                <svg width="170" height="180" viewBox="0 0 130 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg hover:scale-105 transition-transform duration-300">
                  {/* Ogon */}
                  <path d="M100 95 Q130 80 120 55 Q118 50 115 52 Q110 70 95 85" fill="#1A3A3A" stroke="#1A3A3A" strokeWidth="2"/>
                  {/* Ciało */}
                  <ellipse cx="65" cy="100" rx="45" ry="30" fill="#1A3A3A"/>
                  {/* Łapy przednie */}
                  <ellipse cx="35" cy="125" rx="10" ry="8" fill="#1A3A3A"/>
                  <ellipse cx="55" cy="127" rx="10" ry="8" fill="#1A3A3A"/>
                  {/* Łapy tylne */}
                  <ellipse cx="85" cy="125" rx="12" ry="10" fill="#1A3A3A"/>
                  {/* Głowa */}
                  <circle cx="30" cy="75" r="28" fill="#1A3A3A"/>
                  {/* Uszy */}
                  <path d="M10 55 L18 35 L30 50 Z" fill="#1A3A3A"/>
                  <path d="M50 55 L42 35 L30 50 Z" fill="#1A3A3A"/>
                  {/* Wnętrze uszu */}
                  <path d="M14 52 L20 38 L28 50 Z" fill="#E8956A"/>
                  <path d="M46 52 L40 38 L32 50 Z" fill="#E8956A"/>
                  {/* Oczy */}
                  <ellipse cx="20" cy="72" rx="6" ry="7" fill="#E8956A"/>
                  <ellipse cx="40" cy="72" rx="6" ry="7" fill="#E8956A"/>
                  <ellipse cx="20" cy="72" rx="3" ry="5" fill="#0F2222"/>
                  <ellipse cx="40" cy="72" rx="3" ry="5" fill="#0F2222"/>
                  {/* Nos */}
                  <path d="M27 82 L30 78 L33 82 Z" fill="#E8956A"/>
                  {/* Wąsy */}
                  <line x1="5" y1="78" x2="22" y2="82" stroke="#F5EDE4" strokeWidth="1" strokeLinecap="round"/>
                  <line x1="5" y1="85" x2="22" y2="85" stroke="#F5EDE4" strokeWidth="1" strokeLinecap="round"/>
                  <line x1="38" y1="82" x2="55" y2="78" stroke="#F5EDE4" strokeWidth="1" strokeLinecap="round"/>
                  <line x1="38" y1="85" x2="55" y2="85" stroke="#F5EDE4" strokeWidth="1" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 dark:text-white">
                O mnie
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Nazywam się Wiktoria Szparaga. Jestem psychologiem z pasją do pomagania 
                  innym w odkrywaniu wewnętrznej równowagi i pewności. W mojej pracy kieruję się 
                  empatią, autentycznością i pełnym zaangażowaniem w pracę z każdym pacjentem.
                </p>
                <p>
Ukończyłam studia psychologiczne ze specjalnością psychologia kliniczna.
                  Stale poszerzam swoje kompetencje, uczestnicząc w szkoleniach i konferencjach, 
                  aby zapewnić moim pacjentom opiekę zgodną z najnowszymi standardami wiedzy. 
                  Prywatnie jestem miłośniczką kotów i dobrej książki – lektura to dla mnie sposób 
                  na relaks i ciągły rozwój.
                </p>
                <p>
                  W gabinecie tworzę bezpieczną, wolną od oceny przestrzeń, w której możesz 
                  otwarcie mówić o swoich problemach. Wierzę, że każdy krok, który stawiasz ku sobie, 
                  stanowi szansę na rozwój i pozytywną zmianę.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center text-coral">
                    <GraduationIcon />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Edukacja</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Magister Psychologii</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center text-coral">
                    <ApproachIcon />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Podejście</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Poznawczo-behawioralne</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Obszary wsparcia Section */}
      <section id="oferta" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coral/20 to-transparent"></div>
        <div className="mx-auto max-w-6xl px-8 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-coral text-sm font-medium tracking-wider uppercase mb-4">Oferta</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 dark:text-white">
              Obszary wsparcia
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Oferuję profesjonalną pomoc psychologiczną dostosowaną do Twoich indywidualnych potrzeb.
            </p>
          </div>
          
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="group bg-white dark:bg-gray-700 rounded-2xl p-8 border border-gray-100 dark:border-gray-600 card-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-coral/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-coral/20 to-coral/5 flex items-center justify-center text-coral mb-6 group-hover:scale-110 transition-transform duration-300">
                  <PersonIcon />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Terapia indywidualna</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Wsparcie w radzeniu sobie z objawami depresji, 
                  stresem oraz problemami osobistymi. Praca nad 
                  samooceną i rozwojem.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-coral/10 flex items-center justify-center">
                      <CheckIcon />
                    </span>
                    Depresja i obniżony nastrój
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-coral/10 flex items-center justify-center">
                      <CheckIcon />
                    </span>
                    Zaburzenia lękowe
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group bg-white dark:bg-gray-700 rounded-2xl p-8 border border-gray-100 dark:border-gray-600 card-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-coral/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-coral/20 to-coral/5 flex items-center justify-center text-coral mb-6 group-hover:scale-110 transition-transform duration-300">
                  <HeartIcon />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Terapia par</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Pomoc w rozwiązywaniu konfliktów, odbudowie 
                  zaufania i poprawie komunikacji w związku.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-coral/10 flex items-center justify-center">
                      <CheckIcon />
                    </span>
                    Kryzysy w relacji
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-coral/10 flex items-center justify-center">
                      <CheckIcon />
                    </span>
                    Problemy w komunikacji
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group bg-white dark:bg-gray-700 rounded-2xl p-8 border border-gray-100 dark:border-gray-600 card-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-coral/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-coral/20 to-coral/5 flex items-center justify-center text-coral mb-6 group-hover:scale-110 transition-transform duration-300">
                  <SparkleIcon />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Rozwój osobisty</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Coaching i konsultacje dla osób pragnących lepiej 
                  poznać siebie, swoje potrzeby i cele życiowe.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-coral/10 flex items-center justify-center">
                      <CheckIcon />
                    </span>
                    Asertywność
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-coral/10 flex items-center justify-center">
                      <CheckIcon />
                    </span>
                    Zarządzanie stresem
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-14 text-center">
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 text-coral font-medium hover:text-coral-dark transition-all px-6 py-3 rounded-full hover:bg-coral/5"
            >
              Umów wizytę
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="bg-cream-dark dark:bg-gray-800 py-20 md:py-28 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl opacity-50"></div>
        
        <div className="mx-auto max-w-6xl px-8 md:px-6 relative z-10">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left - Contact Card */}
            <div className="bg-white dark:bg-gray-700 rounded-3xl p-8 md:p-10 shadow-xl">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 dark:text-white">
                Kontakt
              </h2>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0 text-coral">
                    <LocationIcon />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Gabinet Stacjonarny</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">ul. Tadeusza Czackiego 45/27</p>
                    <p className="text-gray-600 dark:text-gray-300">Bydgoszcz</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0 text-coral">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Telefon</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">+48 123 456 789</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Kontakt telefoniczny: Pn-Pt 9:00 - 18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0 text-coral">
                    <MailIcon />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">kontakt@wiktoriaszparaga.pl</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="https://www.instagram.com/psycholog.wszparaga/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-medium hover:opacity-90 transition-opacity shadow-md"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Obserwuj na Instagramie
              </a>
            </div>
            
            {/* Right - CTA Card & Map */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8">
                <h3 className="font-serif text-2xl font-medium text-gray-900 dark:text-white">
                  Pierwsza wizyta?
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  Konsultacja wstępna trwa 50 minut. To czas na poznanie Twoich potrzeb i 
                  ustalenie planu działania. Nie musisz się specjalnie przygotowywać – po prostu bądź.
                </p>
                <a
                  href="https://www.znanylekarz.pl/z/qGWhR5"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-6 block w-full rounded-lg bg-coral py-4 text-center font-medium text-white hover:bg-coral-dark transition-colors"
                >
                  Zarezerwuj termin Online
                </a>
                <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
                  System rezerwacji poprzez ZnanyLekarz
                </p>
              </div>
              
              {/* Interactive Map */}
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2400.5!2d18.0!3d53.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVGFkZXVzemEgQ3phY2tpZWdvIDQ1LzI3LCBCeWRnb3N6Y3o!5e0!3m2!1spl!2spl!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja gabinetu"
                  className="absolute inset-0"
                ></iframe>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Tadeusza+Czackiego+45%2F27+Bydgoszcz+Poland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-coral text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-coral-dark transition-colors flex items-center gap-2 shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Wyznacz trasę
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-8">
        <div className="mx-auto max-w-6xl px-8 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Wiktoria Szparaga</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Twój psycholog w Bydgoszczy</p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400">
              <Link href="/polityka-prywatnosci" className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                Polityka Prywatności
              </Link>
            </div>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              © {new Date().getFullYear()} Wiktoria Szparaga. All rights reserved.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 text-center">
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Developed by{" "}
              <a
                href="https://www.linkedin.com/in/eryk-witkowski/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                Eryk Witkowski
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
