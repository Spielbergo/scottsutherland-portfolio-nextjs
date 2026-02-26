export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/project-pages/'],
      },
    ],
    sitemap: 'https://www.scottsutherland.info/sitemap.xml',
  };
}
