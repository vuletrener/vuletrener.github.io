'use client'
import React, { useState, useRef, useEffect } from 'react';
import styles from './Accordion.module.css';

const Accordion = ({ title, children, paddingCH = '1rem', maxH, transition }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [childrenHeight, setChildrenHeight] = useState(0);
  const containerRef = useRef(null);

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const recalculateChildrenHeight = () => {
    if (!collapsed && containerRef.current) {
      const childElements = containerRef.current.children;
      let totalHeight = 0;
      for (let i = 0; i < childElements.length; i++) {
        totalHeight += childElements[i].clientHeight;
      }
      setChildrenHeight(totalHeight);
    }
  };

  useEffect(() => {
    recalculateChildrenHeight();
  }, [collapsed, children]);

  useEffect(() => {
    const observer = new ResizeObserver(recalculateChildrenHeight);

    const childElements = containerRef.current.children;
    for (let i = 0; i < childElements.length; i++) {
      observer.observe(childElements[i]);
    }

    return () => {
      observer.disconnect();
    };
  }, [collapsed, children]);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${collapsed ? styles.containerCollapsed : ''}`}
      style={{
        maxHeight: collapsed ? maxH || '4rem' : `${childrenHeight}px`,
        transition: transition || ".5s all ease", // Use the prop value or default if not provided
      }}
    >
      <div
        className={styles.titleWrapper}
        style={{ height: maxH || '4rem' }}
        onClick={handleCollapsed}
      >
        <p className={styles.title}>{title}</p>
        <p className={collapsed ? styles.arrowPassive : styles.arrowActive}>ᐁ</p>
      </div>
      <div
        className={styles.childElementContainer}
        style={{ padding: paddingCH }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
