/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    {
                        key: "Link",
                        value: [
                            '</_next/static/media/e96136126885e368-s.p.woff2>; rel=preload; as=font; crossorigin',
                            '<https://readme-typing-svg.herokuapp.com/?color=0073fa&size=40&vCenter=true&width=1000&lines=Ol%C3%A1,+Meu+nome+%C3%A9+Marcelo;Eu+tenho+26+anos,+sou+do+Brasil;Desenvolvedor+FullStack+Web;Seja+Bem+Vindo!+:%29>; rel=preload; as=image',
                            '</_next/static/css/f059dc1753247609.css>; rel=preload; as=style',
                            '</_next/static/css/343082b14da4da87.css>; rel=preload; as=style',
                        ].join(", ")
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
