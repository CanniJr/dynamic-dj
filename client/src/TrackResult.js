import React from 'react'


function TrackResult({ track, chooseTrack }) {
    function playHandler(){
        chooseTrack(track)
    }

    // console.log(track)
    return (
        <div 
            className="d-flex m-2 align-items-center"
            style={{ cursor: 'pointer' }}
            onClick={playHandler}
        >
            <img src={track.albumUrl} style={{height: '64px', width: '64px'}} />
            <div className="ml-3">
                <div>{track.title}</div>
                <div className="text-muted">{track.artist}</div>
            </div>
        </div>
    )
}

export default TrackResult
