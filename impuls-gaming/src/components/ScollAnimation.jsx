import React, { useEffect, useRef } from "react";

const IntersectionObserverComponent = ({ children, className = "hidden" }) => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const hiddenElements = Array.from(
      document.getElementsByClassName(className)
    );
    hiddenElements.map((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [className]);

  return <div>{children}</div>;
};

export default IntersectionObserverComponent;
