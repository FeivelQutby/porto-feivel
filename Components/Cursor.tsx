// 'use client'

// import { useEffect, useRef } from 'react'

// interface Point {
//     x: number
//     y: number
//     pressure: number
// }

// export default function Cursor() {
//     const canvasRef = useRef<HTMLCanvasElement>(null)
//     const points = useRef<Point[]>([])
//     const strokes = useRef<{ points: Point[]; alpha: number }[]>([])
//     const isIdle = useRef(false)
//     const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
//     const poolSize = useRef(0)
//     const rafId = useRef<number>(0)
//     const lastPos = useRef({ x: -100, y: -100 })
//     const currentPos = useRef({ x: -100, y: -100 })

//     useEffect(() => {
//         const canvas = canvasRef.current!
//         const ctx = canvas.getContext('2d')!

//         const resize = () => {
//             canvas.width = window.innerWidth
//             canvas.height = window.innerHeight
//         }
//         resize()
//         window.addEventListener('resize', resize)

//         const onMove = (e: MouseEvent) => {
//             lastPos.current = { ...currentPos.current }
//             currentPos.current = { x: e.clientX, y: e.clientY }

//             const dx = e.clientX - lastPos.current.x
//             const dy = e.clientY - lastPos.current.y
//             const speed = Math.sqrt(dx * dx + dy * dy)
//             // lambat = pressure tinggi = tebal, cepat = tipis
//             const pressure = Math.max(0.15, Math.min(1, 1 - speed / 80))

//             points.current.push({ x: e.clientX, y: e.clientY, pressure })

//             // max 80 point per stroke sebelum di-commit
//             if (points.current.length > 80) {
//                 strokes.current.push({ points: [...points.current], alpha: 1 })
//                 points.current = [points.current[points.current.length - 1]]
//             }

//             isIdle.current = false
//             poolSize.current = 0
//             if (idleTimer.current) clearTimeout(idleTimer.current)
//             idleTimer.current = setTimeout(() => {
//                 isIdle.current = true
//                 // commit stroke saat diam
//                 if (points.current.length > 1) {
//                     strokes.current.push({ points: [...points.current], alpha: 1 })
//                     points.current = []
//                 }
//             }, 150)
//         }

//         window.addEventListener('mousemove', onMove)

//         const drawBrushStroke = (
//             pts: Point[],
//             alpha: number,
//             isLive = false
//         ) => {
//             if (pts.length < 2) return

//             ctx.save()
//             ctx.globalAlpha = alpha
//             ctx.lineCap = 'round'
//             ctx.lineJoin = 'round'

//             for (let i = 1; i < pts.length; i++) {
//                 const prev = pts[i - 1]
//                 const curr = pts[i]

//                 const width = curr.pressure * 7 + 1

//                 // main stroke
//                 ctx.beginPath()
//                 ctx.moveTo(prev.x, prev.y)

//                 if (i < pts.length - 1) {
//                     const next = pts[i + 1]
//                     const mx = (curr.x + next.x) / 2
//                     const my = (curr.y + next.y) / 2
//                     ctx.quadraticCurveTo(curr.x, curr.y, mx, my)
//                 } else {
//                     ctx.lineTo(curr.x, curr.y)
//                 }

//                 ctx.strokeStyle = `rgba(10, 10, 10, 0.82)`
//                 ctx.lineWidth = width
//                 ctx.stroke()

//                 // edge texture — slightly offset, lower opacity
//                 if (curr.pressure > 0.4) {
//                     ctx.beginPath()
//                     ctx.moveTo(prev.x + 0.8, prev.y + 0.8)
//                     ctx.lineTo(curr.x + 0.8, curr.y + 0.8)
//                     ctx.strokeStyle = `rgba(10, 10, 10, 0.12)`
//                     ctx.lineWidth = width * 0.4
//                     ctx.stroke()
//                 }
//             }

//             ctx.restore()
//         }

//         const draw = () => {
//             ctx.clearRect(0, 0, canvas.width, canvas.height)

//             // fade dan gambar committed strokes
//             strokes.current = strokes.current.filter(s => s.alpha > 0.01)
//             strokes.current.forEach(s => {
//                 drawBrushStroke(s.points, s.alpha)
//                 s.alpha *= 0.965 // fade speed — naikkan untuk fade lebih cepat
//             })

//             // live stroke — ngikut mouse realtime
//             if (points.current.length > 1) {
//                 drawBrushStroke(points.current, 1, true)
//             }

//             // ink pool saat idle
//             if (isIdle.current) {
//                 poolSize.current = Math.min(10, poolSize.current + 0.3)
//                 if (poolSize.current > 0.5) {
//                     const x = currentPos.current.x
//                     const y = currentPos.current.y
//                     const r = poolSize.current

//                     // bleed luar
//                     const grad = ctx.createRadialGradient(x, y, 0, x, y, r * 2.2)
//                     grad.addColorStop(0, 'rgba(10,10,10,0.18)')
//                     grad.addColorStop(1, 'rgba(10,10,10,0)')
//                     ctx.beginPath()
//                     ctx.arc(x, y, r * 2.2, 0, Math.PI * 2)
//                     ctx.fillStyle = grad
//                     ctx.fill()

//                     // core
//                     ctx.beginPath()
//                     ctx.arc(x, y, r, 0, Math.PI * 2)
//                     ctx.fillStyle = 'rgba(10,10,10,0.88)'
//                     ctx.fill()
//                 }
//             }

//             // dot ujung pena
//             ctx.beginPath()
//             ctx.arc(currentPos.current.x, currentPos.current.y, 2, 0, Math.PI * 2)
//             ctx.fillStyle = 'rgba(10,10,10,0.95)'
//             ctx.fill()

//             rafId.current = requestAnimationFrame(draw)
//         }

//         draw()

//         return () => {
//             window.removeEventListener('mousemove', onMove)
//             window.removeEventListener('resize', resize)
//             cancelAnimationFrame(rafId.current)
//             if (idleTimer.current) clearTimeout(idleTimer.current)
//         }
//     }, [])

//     return (
//         <canvas
//             ref={canvasRef}
//             style={{
//                 position: 'fixed',
//                 top: 0,
//                 left: 0,
//                 pointerEvents: 'none',
//                 zIndex: 9999,
//             }}
//         />
//     )
// }