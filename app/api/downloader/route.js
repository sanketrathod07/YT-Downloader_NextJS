import ytdl from "ytdl-core";
import { NextResponse } from "next/server";


// Function to convert seconds to minutes with 2 digits after the decimal point
function secondsToMinutes(durationInSeconds) {
  return (durationInSeconds / 60).toFixed(2);
}


// Function to convert bytes to megabytes
function bytesToMegabytes(bytes) {
  if (bytes < 1024) {
    return bytes + " MB";
  } else {
    const megabytes = bytes / (1024 * 1024);
    if (megabytes < 1024) {
      return megabytes.toFixed(2) + " MB";
    } else {
      const gigabytes = megabytes / 1024;
      return gigabytes.toFixed(1) + " GB";
    }
  }
}
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL parameter is missing" }, { status: 400 });
  }

  try {
    const info = await ytdl.getInfo(url);

    // Extract relevant information
    const title = info.videoDetails.title;
    const duration = info.videoDetails.lengthSeconds;
    const views = info.videoDetails.viewCount;
    const likes = info.videoDetails.likes;
    const dislikes = info.videoDetails.dislikes;
    const thumbnail = info.videoDetails.thumbnails[0].url;

    // Get all available video formats
    const videoFormats = info.formats;

    // Calculate download size for each format
    videoFormats.forEach(format => {
      // Calculate estimated download size using bitrate and duration
      const bitrate = parseInt(format.bitrate);
      const sizeInBytes = bitrate * duration;
      format.downloadSize = bytesToMegabytes(sizeInBytes);
    });

    // Get the highest quality audio format
    const audioFormat = ytdl.chooseFormat(info.formats, { quality: "highestaudio" });

    // Create response object
    const response = {
      videoInfo: {
        title,
        duration : secondsToMinutes(duration),
        views,
        likes,
        dislikes,
        thumbnail,
      },
      videoFormats,
      audioFormat,
    };

    // Return the response
    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching video information:", error);
    return NextResponse.json({ error: "Failed to fetch video information" }, { status: 500 });
  }
}
