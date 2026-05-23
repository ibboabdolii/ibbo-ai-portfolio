const siteUrl = 'https://ai.ibboabdoli.com';
const imageUrl = `${siteUrl}/og-image.png`;

export function GET() {
  const html = `<!doctype html>
<html lang="sv">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Ibbo AI Portfolio</title>
  <meta name="description" content="Interaktiv AI-portfolio för Ibbo Abdoli — servicetekniker och automationstekniker i Sverige med fokus på industriell automation, PLC/I/O, ABB-robotar och maskinvision." />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="sv_SE" />
  <meta property="og:site_name" content="Ibbo AI Portfolio" />
  <meta property="og:title" content="Ibbo AI Portfolio" />
  <meta property="og:description" content="Servicetekniker / Automationstekniker | Industriell automation, PLC/I/O, ABB-robotar och maskinvision." />
  <meta property="og:url" content="${siteUrl}/share" />
  <meta property="og:image" content="${imageUrl}" />
  <meta property="og:image:secure_url" content="${imageUrl}" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Ibbo AI Portfolio" />
  <meta name="twitter:description" content="Interaktiv AI-portfolio för industriell automation, PLC/I/O, ABB-robotar och maskinvision." />
  <meta name="twitter:image" content="${imageUrl}" />
  <meta http-equiv="refresh" content="0;url=${siteUrl}" />
</head>
<body>
  <p>Opening <a href="${siteUrl}">Ibbo AI Portfolio</a>...</p>
</body>
</html>`;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
}
