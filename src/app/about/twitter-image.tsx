import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'portfolio'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/svg+xml'

export default async function Image() {

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: `url('https://marceloandradedev.vercel.app/common/logoHeader.svg')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    backgroundColor: "#1d1d1d",
                }}
            >
            </div>
        ),
        {
            ...size,
        }
    )
}