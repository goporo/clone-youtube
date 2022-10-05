import { Box, Stack } from '@mui/system'
import React from 'react'
import { VideoCard, ChannelCard } from './'

const Videos = ({ videos, direction }) => {
    // console.log(videos[5].snippet.thumbnails.default);
    if (!videos?.length) return 'Loading...'

    return (
        <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
            {videos.map((item, idx) => (
                item.snippet ?
                    <Box key={idx}>
                        {item.id.videoId && <VideoCard video={item} />}
                        {item.id.channelId && <ChannelCard channelDetail={item} />}

                    </Box>
                    :
                    <div />
            ))}
        </Stack>
    )
}

export default Videos