import React from 'react'
import Player from './components/Player'

export default function App() {
  const localPath = "C:\\Users\\nitiksh\\Videos\\1005.mp4"
  const encodedPath = encodeURIComponent(localPath)
  const videoUrl = `http://127.0.0.1:7878/?file=${encodedPath}`

  return (
    <div>
      <Player path={videoUrl} />
    </div>
  )
}
