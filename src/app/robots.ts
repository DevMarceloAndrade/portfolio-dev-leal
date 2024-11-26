import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        host:'https://marceloandradedev.vercel.app/',
        rules: [            
            {
                userAgent: ['Googlebot','Applebot', 'Bingbot'],
                allow: ['/'],
            },
        ],
        sitemap: 'https://marceloandradedev.vercel.app/sitemap.xml',
    }
}