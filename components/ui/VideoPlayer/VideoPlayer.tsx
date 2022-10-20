
import React, { FC } from 'react'

interface Props {
    mp4: string
    webm: string
    poster?: string
}

const VideoPlayer: FC<Props> = ({ mp4, webm, poster }: Props) => {

    return (
        <video autoPlay loop muted playsInline style={{ objectFit:"cover", height:"100%", width:"100%" }} poster={poster} className='absolute w-full h-screen'>
            <source src={mp4} type='video/mp4; codecs=hvc1' />
            <source src={webm} type='video/webm; codecs=vp9' />
        </video>
    )
}

export default VideoPlayer