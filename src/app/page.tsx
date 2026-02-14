import Link from "next/link";

// Icons
const HeartIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-semibold text-gray-900">
            Wiktoria Szparaga.
          </Link>
          <ul className="hidden items-center gap-8 md:flex">
            <li>
              <a href="#o-mnie" className="text-gray-600 hover:text-gray-900 transition-colors">
                O mnie
              </a>
            </li>
            <li>
              <a href="#oferta" className="text-gray-600 hover:text-gray-900 transition-colors">
                Oferta
              </a>
            </li>
            <li>
              <a href="#kontakt" className="text-gray-600 hover:text-gray-900 transition-colors">
                Kontakt
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <a
              href="#kontakt"
              className="rounded-lg bg-coral px-5 py-2.5 text-sm font-medium text-white hover:bg-coral-dark transition-colors"
            >
              Zapisz się na wizytę
            </a>
            <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors hidden md:block">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-coral tracking-wide mb-6">
                <span>PSYCHOLOG</span>
                <span>•</span>
                <span>PSYCHOTERAPEUTA</span>
                <span>•</span>
                <span>BYDGOSZCZ</span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-gray-900 leading-tight">
                Odzyskaj spokój i{" "}
                <span className="relative">
                  <span className="relative z-10">harmonię</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-coral/30 -z-0"></span>
                </span>{" "}
                w swoim życiu.
              </h1>
              
              <p className="mt-6 text-gray-600 leading-relaxed max-w-lg">
                Wspieram w trudnych momentach, pomagam zrozumieć siebie i budować zdrowe relacje. 
                Zapraszam do mojego gabinetu w Bydgoszczy oraz na konsultacje online.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#kontakt"
                  className="rounded-lg bg-coral px-6 py-3 font-medium text-white hover:bg-coral-dark transition-colors"
                >
                  Umów wizytę
                </a>
                <a
                  href="#o-mnie"
                  className="flex items-center gap-2 px-6 py-3 font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Dowiedz się więcej
                  <span>+</span>
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto md:ml-auto rounded-3xl overflow-hidden bg-cream-dark">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span className="text-sm">Zdjęcie profilowe</span>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-0 md:right-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center text-white">
                  <LocationIcon />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Lokalizacja</p>
                  <p className="font-medium text-gray-900">Bydgoszcz & Online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="flex justify-center mb-6">
            <span className="text-coral text-5xl font-serif">&quot;</span>
          </div>
          <blockquote className="font-serif text-xl md:text-2xl italic text-gray-700 leading-relaxed">
            Celem terapii nie jest zmiana tego, kim jesteś, ale pomoc w staniu się tym, kim naprawdę chcesz być.
          </blockquote>
          <p className="mt-6 text-sm font-medium text-gray-500 tracking-wide">
            — WIKTORIA SZPARAGA
          </p>
        </div>
      </section>

      {/* O mnie Section */}
      <section id="o-mnie" className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex gap-4 justify-center lg:justify-start">
              <div className="w-40 h-56 rounded-2xl bg-cream-dark flex items-center justify-center text-gray-400 text-xs">
                Zdjęcie 1
              </div>
              <div className="w-40 h-56 rounded-2xl bg-cream-dark flex items-center justify-center text-gray-400 text-xs mt-8">
                Zdjęcie 2
              </div>
            </div>
            
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900">
                O mnie
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Nazywam się Wiktoria Szparaga. Jestem psychologiem z pasją do pomagania 
                  innym w odkrywaniu wewnętrznej równowagi i pewności. W mojej pracy kieruję się 
                  empatią, autentycznością i pełnym zaangażowaniem w proces terapeutyczny każdego pacjenta.
                </p>
                <p>
                  Ukończyłam studia psychologiczne ze specjalizacją psychologia kliniczna. 
                  Stale poszerzam swoje kompetencje, uczestnicząc w szkoleniach i konferencjach, 
                  aby zapewnić moim pacjentom opiekę zgodną z najnowszymi standardami wiedzy.
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
                    <p className="font-medium text-gray-900">Edukacja</p>
                    <p className="text-sm text-gray-500">Magister Psychologii</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center text-coral">
                    <ApproachIcon />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Podejście</p>
                    <p className="text-sm text-gray-500">Integracyjne i Holistyczne</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Obszary wsparcia Section */}
      <section id="oferta" className="py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900">
              Obszary wsparcia
            </h2>
            <p className="mt-4 text-gray-600">
              Oferuję profesjonalną pomoc psychologiczną dostosowaną do Twoich indywidualnych potrzeb.
            </p>
          </div>
          
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center text-coral mb-6">
                <HeartIcon />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Terapia indywidualna</h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Wsparcie w radzeniu sobie z objawami depresji, 
                stresem oraz problemami osobistymi. Praca nad 
                samooceną i rozwojem.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckIcon />
                  Depresja i obniżony nastrój
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckIcon />
                  Zaburzenia lękowe
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center text-coral mb-6">
                <HeartIcon />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Terapia par</h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Pomoc w rozwiązywaniu konfliktów, odbudowie 
                zaufania i poprawie komunikacji w związku.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckIcon />
                  Kryzysy w relacji
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckIcon />
                  Problemy w komunikacji
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center text-coral mb-6">
                <SparkleIcon />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Rozwój osobisty</h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Coaching i konsultacje dla osób pragnących lepiej 
                poznać siebie, swoje potrzeby i cele życiowe.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckIcon />
                  Asertywność
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckIcon />
                  Zarządzanie stresem
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 text-coral font-medium hover:text-coral-dark transition-colors"
            >
              Zobacz cennik i umów wizytę
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="bg-teal py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="text-white">
              <h2 className="font-serif text-3xl md:text-4xl font-medium">
                Kontakt
              </h2>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-coral flex items-center justify-center flex-shrink-0">
                    <LocationIcon />
                  </div>
                  <div>
                    <p className="font-medium">Gabinet Stacjonarny</p>
                    <p className="text-white/70 mt-1">ul. Gdańska 10/4</p>
                    <p className="text-white/70">85-006 Bydgoszcz</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-coral flex items-center justify-center flex-shrink-0">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-white/70 mt-1">+48 123 456 789</p>
                    <p className="text-white/50 text-sm">Kontakt telefoniczny: Pn-Pt 9:00 - 18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-coral flex items-center justify-center flex-shrink-0">
                    <MailIcon />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-white/70 mt-1">kontakt@wiktoriaszparaga.pl</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-white/70 text-sm mb-3">Znajdź mnie w social mediach</p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8">
                <h3 className="font-serif text-2xl font-medium text-gray-900">
                  Pierwsza wizyta?
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Konsultacja wstępna trwa 50 minut. To czas na poznanie Twoich potrzeb i 
                  ustalenie planu działania. Nie musisz się specjalnie przygotowywać – po prostu bądź.
                </p>
                <a
                  href="#"
                  className="mt-6 block w-full rounded-lg bg-coral py-4 text-center font-medium text-white hover:bg-coral-dark transition-colors"
                >
                  Zarezerwuj termin Online
                </a>
                <p className="mt-4 text-center text-sm text-gray-500">
                  System rezerwacji poprzez ZnanyLekarz lub Booksy
                </p>
              </div>
              
              <div className="relative h-64 rounded-2xl overflow-hidden bg-cream">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-serif text-2xl text-teal/50 italic">Mapa</p>
                    <p className="font-serif text-3xl text-teal/30 italic">Bydgoszczy</p>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-teal text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-1.5 shadow-lg">
                    <LocationIcon />
                    <span>Bydgoszcz, ul. Gdańska</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="font-semibold text-gray-900">Wiktoria Szparaga</p>
              <p className="text-sm text-gray-500">Twój psycholog w Bydgoszczy</p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <Link href="/polityka-prywatnosci" className="hover:text-gray-700 transition-colors">
                Polityka Prywatności
              </Link>
              <Link href="/regulamin" className="hover:text-gray-700 transition-colors">
                Regulamin
              </Link>
              <Link href="/rodo" className="hover:text-gray-700 transition-colors">
                RODO
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Wiktoria Szparaga. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
