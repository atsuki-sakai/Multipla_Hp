import React, { FC } from 'react'
import { useCanPlayMovie } from '@components/context'

interface Props {
    mp4: string
    webm: string
    poster?: string
    onPlay?: () => void
}

const VideoPlayer: FC<Props> = ({ mp4, webm, poster, onPlay }: Props) => {
    const { isPlaying } = useCanPlayMovie()
    return (
        <video autoPlay loop muted playsInline onPlay={onPlay} style={{ objectFit:"cover", height:"100%", width:"100%" }} poster={poster} className='absolute w-full h-screen'>
            <source src={mp4} type='video/mp4; codecs=hvc1' />
            <source src={webm} type='video/webm; codecs=vp9' />
        </video>
    )
}

export default VideoPlayer