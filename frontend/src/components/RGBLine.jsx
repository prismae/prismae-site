import './RGBLine.css'

export default function RGBLine({ width = 120, center = false }) {
  return (
    <div
      className={`rgb-line ${center ? 'center' : ''}`}
      style={{ width: `${width}px` }}
    />
  )
}
