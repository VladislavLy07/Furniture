import Link from 'next/link';

const footerNav = ['Каталог', 'Коллекции', 'О бренде', 'Доставка', 'Контакты'];

export function Footer() {
  return (
    <footer className="mt-12 border-t border-[#d9d0c6] bg-[#2f2722] text-[#f3e8db]">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-8">
        <div>
          <p className="text-3xl font-semibold tracking-tight">Мебель</p>
          <p className="mt-3 text-sm text-[#d5c6b8]">Premium furniture brand для современных интерьеров.</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#e6d7c8]">Навигация</h3>
          <ul className="mt-4 space-y-2 text-sm text-[#d5c6b8]">
            {footerNav.map((item) => (
              <li key={item}>
                <Link href="#" className="transition hover:text-white">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#e6d7c8]">Контакты</h3>
          <ul className="mt-4 space-y-2 text-sm text-[#d5c6b8]">
            <li>+7 (999) 123-45-67</li>
            <li>info@mebel-premium.ru</li>
            <li>Москва, Кутузовский проспект, 18</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#e6d7c8]">Соцсети</h3>
          <ul className="mt-4 space-y-2 text-sm text-[#d5c6b8]">
            <li>
              <Link href="#" className="transition hover:text-white">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="#" className="transition hover:text-white">
                Pinterest
              </Link>
            </li>
            <li>
              <Link href="#" className="transition hover:text-white">
                Telegram
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-[#d5c6b8]">
        © {new Date().getFullYear()} Мебель. Все права защищены.
      </div>
    </footer>
  );
}
