import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności - Wiktoria Szparaga",
  description: "Polityka prywatności gabinetu psychologicznego Wiktoria Szparaga w Bydgoszczy.",
};

export default function PolitykaPrywatnosci() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-semibold text-gray-900 dark:text-white">
            Wiktoria Szparaga.
          </Link>
          <Link
            href="/"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            ← Powrót do strony głównej
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-serif text-4xl font-medium text-gray-900 dark:text-white">
          Polityka Prywatności
        </h1>
        
        <div className="mt-8 prose prose-gray dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              1. Administrator danych osobowych
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Administratorem Twoich danych osobowych jest Wiktoria Szparaga, prowadząca działalność 
              pod adresem ul. Gdańska 10/4, 85-006 Bydgoszcz. W sprawach związanych z ochroną danych 
              osobowych możesz kontaktować się pod adresem e-mail: kontakt@wiktoriaszparaga.pl
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              2. Cel i podstawa przetwarzania danych
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Twoje dane osobowe przetwarzane są w celu:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Świadczenia usług psychologicznych</li>
              <li>• Kontaktu w sprawie umówienia wizyty</li>
              <li>• Wystawiania dokumentów księgowych</li>
              <li>• Realizacji obowiązków prawnych</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              3. Okres przechowywania danych
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Dane osobowe będą przechowywane przez okres niezbędny do realizacji celów, 
              dla których zostały zebrane, a po tym czasie przez okres wymagany przepisami prawa, 
              w szczególności przepisami dotyczącymi dokumentacji medycznej i psychologicznej.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              4. Twoje prawa
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Masz prawo do:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Dostępu do swoich danych osobowych</li>
              <li>• Sprostowania danych</li>
              <li>• Usunięcia danych (prawo do bycia zapomnianym)</li>
              <li>• Ograniczenia przetwarzania</li>
              <li>• Przenoszenia danych</li>
              <li>• Wniesienia sprzeciwu wobec przetwarzania</li>
              <li>• Wniesienia skargi do organu nadzorczego (UODO)</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              5. Pliki cookies
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Strona internetowa może wykorzystywać pliki cookies w celu zapewnienia prawidłowego 
              funkcjonowania serwisu oraz analizy ruchu na stronie. Możesz zarządzać ustawieniami 
              cookies w swojej przeglądarce internetowej.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              6. Kontakt
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              W przypadku pytań dotyczących polityki prywatności lub przetwarzania danych osobowych, 
              prosimy o kontakt:
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              E-mail: kontakt@wiktoriaszparaga.pl<br />
              Adres: ul. Gdańska 10/4, 85-006 Bydgoszcz
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-8 mt-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Wiktoria Szparaga. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
