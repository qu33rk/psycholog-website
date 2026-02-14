export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-xl font-semibold text-gray-900">
            Gabinet Psychologiczny
          </div>
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
          <a
            href="#kontakt"
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
          >
            Umów wizytę
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Profesjonalna pomoc psychologiczna
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Oferuję wsparcie psychologiczne w bezpiecznej i przyjaznej atmosferze. 
            Pomagam w radzeniu sobie z trudnościami życiowymi, stresem, lękiem oraz 
            w budowaniu zdrowych relacji.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#kontakt"
              className="rounded-lg bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-800 transition-colors"
            >
              Umów konsultację
            </a>
            <a
              href="#oferta"
              className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Poznaj ofertę
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-mnie" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-gray-900">O mnie</h2>
          <p className="mt-6 max-w-3xl text-gray-600 leading-relaxed">
            [Tutaj dodaj informacje o sobie - wykształcenie, doświadczenie, 
            specjalizacje, podejście terapeutyczne.]
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="oferta" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-gray-900">Oferta</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">Terapia indywidualna</h3>
              <p className="mt-4 text-gray-600">
                Wsparcie w radzeniu sobie z trudnościami emocjonalnymi i życiowymi.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">Konsultacje</h3>
              <p className="mt-4 text-gray-600">
                Jednorazowe spotkania diagnostyczne i poradnicze.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">Terapia par</h3>
              <p className="mt-4 text-gray-600">
                Pomoc w rozwiązywaniu konfliktów i budowaniu zdrowych relacji.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-gray-900">Kontakt</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-gray-600">
                Zapraszam do kontaktu w celu umówienia wizyty lub uzyskania 
                dodatkowych informacji.
              </p>
              <div className="mt-6 space-y-4">
                <p className="text-gray-700">
                  <span className="font-medium">Telefon:</span> [Numer telefonu]
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Email:</span> [Adres email]
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Adres:</span> [Adres gabinetu]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Gabinet Psychologiczny. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
}
