import { useRouter } from "next/router";
import { useState, useEffect, useCallback, createContext, useContext } from "react";

const TransitionContext = createContext({
  isTransitioning: false,
  navigate: () => {},
});

export function usePageTransition() {
  return useContext(TransitionContext);
}

export function PageTransitionProvider({ children }) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isEntering, setIsEntering] = useState(true);

  // Entrance animation - unblur when page loads
  useEffect(() => {
    setIsTransitioning(false);
    setIsEntering(true);
    const timer = setTimeout(() => {
      setIsEntering(false);
    }, 50);
    return () => clearTimeout(timer);
  }, [router.asPath]);

  const navigate = useCallback(
    (href) => {
      if (href === router.asPath) return;

      setIsTransitioning(true);

      // Wait for blur animation, then navigate
      setTimeout(() => {
        router.push(href);
      }, 100);
    },
    [router]
  );

  // Intercept all internal link clicks
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;
      const link = target.closest("a");

      if (!link) return;

      const href = link.getAttribute("href");

      // Skip external links, hash links, and links with target
      if (
        !href ||
        href.startsWith("http") ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        link.target === "_blank"
      ) {
        return;
      }

      e.preventDefault();
      navigate(href);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [navigate]);

  const shouldBlur = isTransitioning || isEntering;

  return (
    <TransitionContext.Provider value={{ isTransitioning, navigate }}>
      <div
        className="transition-all duration-300 ease-out"
        style={{
          filter: shouldBlur ? "blur(10px)" : "blur(0px)",
          opacity: shouldBlur ? 0.85 : 1,
          transform: shouldBlur ? "scale(0.995)" : "scale(1)",
        }}
      >
        {children}
      </div>
    </TransitionContext.Provider>
  );
}
