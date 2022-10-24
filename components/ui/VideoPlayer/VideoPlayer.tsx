
import React, { FC } from 'react'
import { useBgMovieLoaded } from '@components/context'
interface Props {
    mp4: string
    webm: string
    poster?: string
}

const VideoPlayer: FC<Props> = ({ mp4, webm, poster }: Props) => {

    const { onLoaded } = useBgMovieLoaded()
    return (
        <video autoPlay loop muted playsInline onPlay={onLoaded} style={{ objectFit:"cover", height:"100%", width:"100%" }} poster={poster} className='absolute w-full h-screen'>
            <source src={webm} type='video/webm; codecs=vp9' />
            <source src={mp4} type='video/mp4; codecs=hvc1' />
        </video>
    )
}

export default VideoPlayer