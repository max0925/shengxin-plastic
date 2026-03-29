import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // 如果用户已经手动选过语言（URL 里有 /en 或 /zh），直接用 next-intl 处理
  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith('/en') || pathname.startsWith('/zh')) {
    return intlMiddleware(request);
  }

  // 首次访问根路径 /，根据地理位置判断
  // Vercel 自动提供 x-vercel-ip-country header
  const country = request.headers.get('x-vercel-ip-country') || '';

  // 中国大陆、香港、澳门、台湾 → 中文
  const chineseRegions = ['CN', 'HK', 'MO', 'TW'];
  const locale = chineseRegions.includes(country) ? 'zh' : 'en';

  // 重定向到对应语言版本
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return Response.redirect(url);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
