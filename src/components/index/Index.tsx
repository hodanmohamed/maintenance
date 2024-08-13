import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
import styles from './styles.module.css'

const Index = () => {
const ref = useRef<ReturnType<typeof setTimeout>[]>([])
  const [items, set] = useState<string[]>([])
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#8fa5b6',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      // FFD700
      { transform: 'perspective(600px) rotateX(180deg)', color: '#B672FE' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    // 87CEEB
    leave: [{ color: '#8CA1F9' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    // F08080
    update: { color: '#4C40E0'},
  })

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Under', 'HodanDev.com', 'Construction']), 2000))
    ref.current.push(setTimeout(() => set(['Under', 'Construction']), 5000))
    ref.current.push(setTimeout(() => set(['Under', 'HodanDev.com', 'Construction']), 8000))
  }, [])

  useEffect(() => {
    reset()
    return () => ref.current.forEach(clearTimeout)
  }, [reset])

  return (
    <section className={styles.section}>
      <div className={styles.container}>
      <div className={styles.main}>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div className={styles.transitionsItem} style={rest} onClick={reset}>
            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Index