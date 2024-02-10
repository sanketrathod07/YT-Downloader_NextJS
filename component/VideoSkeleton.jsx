import React from 'react'

const VideoSkeleton = () => {
    return (
        <div className="PromptCardSkeleton">
            <div className="imgSkeletonContainer">
                <div className="imageskeleton"></div>
            </div>
            <div className="titleContainer">
                <div className="titleSkeleton"></div>
                <div className="cardSkeleton">
                    <div className="cardSkeletoncard"></div>
                    <div className="cardSkeletoncard"></div>
                    <div className="cardSkeletoncard"></div>
                    <div className="cardSkeletoncard"></div>
                </div>
            </div>
        </div>
    )
}

export default VideoSkeleton
