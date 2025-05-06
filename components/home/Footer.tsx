import Link from 'next/link';
import { useTranslations } from 'next-intl';

// function InfoLink({
//   href,
//   title,
//   target,
//   type,
// }: {
//   href: string;
//   title: string;
//   target?: HTMLAttributeAnchorTarget;
//   type?: string;
// }) {
//   return (
//     <Link
//       href={href}
//       title={title}
//       className='whitespace-nowrap text-xs hover:opacity-70 lg:text-sm'
//       target={target}
//       type={type}
//     >
//       {title}
//     </Link>
//   );
// }

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className='w-full bg-black'>
      <div className='mx-auto flex min-h-[251px] max-w-pc flex-col items-center justify-between p-10 pb-5 lg:h-[180px] lg:flex-row lg:px-0 lg:pb-10'>
        <div className='flex flex-col items-center lg:items-stretch'>
          <p className='text-xl font-bold text-white lg:h-8 lg:text-[32px]'>{t('title')}</p>
          <p className='text-xs'>{t('subTitle')}</p>
          <div className='mt-5 flex gap-6'>
            <Link target='_blank' href='https://github.com/6677-ai/tap4-ai-webui' rel='noopener noreferrer'>
              <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 42 42' fill='none'>
                <g clipPath='url(#clip0_7060_1018)'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M21.0004 0.875C16.015 0.877587 11.1931 2.6433 7.39693 5.85642C3.60072 9.06953 1.07774 13.5205 0.279111 18.4135C-0.519516 23.3065 0.45828 28.3224 3.03768 32.5643C5.61708 36.8062 9.62988 39.9976 14.3585 41.5677C15.4018 41.7613 15.7947 41.1148 15.7947 40.565C15.7947 40.0152 15.7738 38.4213 15.7669 36.6786C9.92485 37.9407 8.69038 34.2134 8.69038 34.2134C7.73758 31.793 6.36052 31.1568 6.36052 31.1568C4.45491 29.8637 6.50311 29.8879 6.50311 29.8879C8.61389 30.0365 9.72318 32.042 9.72318 32.042C11.594 35.2333 14.6367 34.3102 15.8329 33.7708C16.0207 32.4188 16.5667 31.4991 17.1683 30.977C12.5016 30.4515 7.59848 28.6604 7.59848 20.6595C7.56955 18.5845 8.34395 16.5778 9.76143 15.0547C9.54583 14.5291 8.826 12.4062 9.96658 9.5225C9.96658 9.5225 11.7296 8.96237 15.7426 11.6628C19.1846 10.7268 22.8162 10.7268 26.2582 11.6628C30.2676 8.96237 32.0272 9.5225 32.0272 9.5225C33.1712 12.3992 32.4514 14.5222 32.2358 15.0547C33.6578 16.5781 34.4338 18.5882 34.4023 20.6664C34.4023 28.6846 29.4887 30.4515 24.8151 30.9667C25.5662 31.6167 26.2373 32.8856 26.2373 34.8357C26.2373 37.6295 26.213 39.8769 26.213 40.565C26.213 41.1217 26.592 41.7717 27.6561 41.5677C32.3853 39.9974 36.3985 36.8055 38.9779 32.5628C41.5572 28.3202 42.5345 23.3035 41.735 18.4101C40.9354 13.5167 38.4112 9.06562 34.6137 5.85306C30.8163 2.6405 25.9933 0.875947 21.0073 0.875H21.0004Z'
                    fill='white'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_7060_1018'>
                    <rect width='42' height='42' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </div>
        <div className='mt-5 flex flex-col items-center gap-y-5 lg:mt-0 lg:flex-row lg:items-stretch lg:gap-x-10'>
          <div className='flex flex-col items-center gap-1 lg:items-start'>
            <p className='text-white/40'>Feature</p>
            <ul className='flex flex-col items-center gap-3 lg:items-start'>
              <li>
                <Link href='/'>
                  <div
                    title='AI Tools'
                    className='flex items-center gap-1 text-nowrap text-xs hover:opacity-70 lg:text-sm'
                  >
                    AI Tools
                  </div>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <div
                    title='Submit AI'
                    className='flex items-center gap-1 text-nowrap text-xs hover:opacity-70 lg:text-sm'
                  >
                    Submit AI
                  </div>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <div
                    title='Articles'
                    className='flex items-center gap-1 text-nowrap text-xs hover:opacity-70 lg:text-sm'
                  >
                    Articles
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='lucide lucide-square-arrow-out-up-right size-4'
                    >
                      <path d='M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6' />
                      <path d='m21 3-9 9' />
                      <path d='M15 3h6v6' />
                    </svg>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex flex-col items-center gap-1 lg:items-start'>
            <p className='text-white/40'>Support</p>
            <ul className='flex flex-col items-center gap-3 lg:items-start'>
              <li>
                <Link href='/privacy-policy/'>
                  <div
                    title='Privacy policy'
                    className='flex items-center gap-1 text-nowrap text-xs hover:opacity-70 lg:text-sm'
                  >
                    Privacy policy
                  </div>
                </Link>
              </li>
              <li>
                <Link href='/terms-of-service/'>
                  <div
                    title='Terms & Conditions'
                    className='flex items-center gap-1 text-nowrap text-xs hover:opacity-70 lg:text-sm'
                  >
                    Terms & Conditions
                  </div>
                </Link>
              </li>
              <li>
                <a
                  title='Contact Us'
                  className='flex items-center gap-1 text-nowrap text-xs hover:opacity-70 lg:text-sm'
                  href='mailto:undefined'
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='h-px w-full bg-white/20' />
      <div className='mx-auto grid w-full max-w-pc grid-cols-3 items-center justify-center gap-5 p-5 lg:flex lg:h-16 lg:p-0'>
        <a lang='en' className='hover:underline' href='/'>
          English
        </a>
        <a lang='ja' className='hover:underline' href='/'>
          日本語
        </a>
        <a lang='pt' className='hover:underline' href='/'>
          Português
        </a>
        <a lang='es' className='hover:underline' href='/'>
          Español
        </a>
        <a lang='de' className='hover:underline' href='/'>
          Deutsch
        </a>
        <a lang='ru' className='hover:underline' href='/'>
          Русский
        </a>
        <a lang='fr' className='hover:underline' href='/'>
          Français
        </a>
        <a lang='cn' className='hover:underline' href='/'>
          简体中文
        </a>
        <a lang='tw' className='hover:underline' href='/'>
          繁體中文
        </a>
        <a lang='ko' className='hover:underline' href='/'>
          한국어
        </a>
        <a lang='th' className='hover:underline' href='/'>
          ไทย
        </a>
        <a lang='vi' className='hover:underline' href='/'>
          Tiếng Việt
        </a>
      </div>
    </footer>
  );
}
