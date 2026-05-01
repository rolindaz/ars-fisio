import { useEffect, useRef, useState } from "react";
import SmoothImage from "./SmoothImage";

export default function TeamCard({
  name,
  caption,
  image,
  description,
  socials,
  variant,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [descriptionHasOverflow, setDescriptionHasOverflow] = useState(false);
  const [descriptionIsAtEnd, setDescriptionIsAtEnd] = useState(false);
  const lastTapToggleRef = useRef(0);
  const descriptionRef = useRef(null);
  const tapGestureRef = useRef({
    pointerId: null,
    startedAt: 0,
    startX: 0,
    startY: 0,
    moved: false,
  });

  const descriptionParagraphs = Array.isArray(description)
    ? description
    : description
      ? [description]
      : [];

  const updateDescriptionOverflowState = () => {
    const descriptionElement = descriptionRef.current;

    if (!descriptionElement) {
      setDescriptionHasOverflow(false);
      setDescriptionIsAtEnd(false);
      return;
    }

    const { scrollHeight, clientHeight, scrollTop } = descriptionElement;
    const hasOverflow = scrollHeight - clientHeight > 4;
    const isAtEnd = !hasOverflow || scrollTop + clientHeight >= scrollHeight - 4;

    setDescriptionHasOverflow(hasOverflow);
    setDescriptionIsAtEnd(isAtEnd);
  };

  useEffect(() => {
    updateDescriptionOverflowState();

    const descriptionElement = descriptionRef.current;

    if (!descriptionElement || typeof ResizeObserver === "undefined") {
      return undefined;
    }

    const resizeObserver = new ResizeObserver(() => {
      updateDescriptionOverflowState();
    });

    resizeObserver.observe(descriptionElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, [descriptionParagraphs.length, isFlipped]);

  const isTapFlipContext = () => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia(
      "(hover: none), (pointer: coarse), (max-width: 767px)",
    ).matches;
  };

  const handleToggleFlip = (event) => {
    if (!isTapFlipContext()) {
      return;
    }

    if (event.target.closest("a, button, [data-team-card-scroll]")) {
      return;
    }

    setIsFlipped((current) => !current);
  };

  const handleDescriptionScroll = () => {
    updateDescriptionOverflowState();
  };

  const handleScrollToDescriptionEnd = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const descriptionElement = descriptionRef.current;

    if (!descriptionElement) {
      return;
    }

    descriptionElement.scrollTo({
      top: descriptionElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const resetTapGesture = () => {
    tapGestureRef.current = {
      pointerId: null,
      startedAt: 0,
      startX: 0,
      startY: 0,
      moved: false,
    };
  };

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" || !isTapFlipContext()) {
      return;
    }

    tapGestureRef.current = {
      pointerId: event.pointerId,
      startedAt: Date.now(),
      startX: event.clientX,
      startY: event.clientY,
      moved: false,
    };
  };

  const handlePointerMove = (event) => {
    const activeGesture = tapGestureRef.current;
    if (event.pointerId !== activeGesture.pointerId) {
      return;
    }

    const deltaX = Math.abs(event.clientX - activeGesture.startX);
    const deltaY = Math.abs(event.clientY - activeGesture.startY);

    if (deltaX > 10 || deltaY > 10) {
      tapGestureRef.current.moved = true;
    }
  };

  const handlePointerUp = (event) => {
    if (event.pointerType === "mouse") {
      return;
    }

    const activeGesture = tapGestureRef.current;
    if (event.pointerId !== activeGesture.pointerId) {
      return;
    }

    const pressDuration = Date.now() - activeGesture.startedAt;
    const shouldIgnoreTap = activeGesture.moved || pressDuration > 250;

    resetTapGesture();

    if (shouldIgnoreTap) {
      return;
    }

    const now = Date.now();
    if (now - lastTapToggleRef.current < 350) {
      return;
    }

    lastTapToggleRef.current = now;

    handleToggleFlip(event);
  };

  const handlePointerCancel = () => {
    resetTapGesture();
  };

  const handleKeyDown = (event) => {
    if (!isTapFlipContext()) {
      return;
    }

    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    setIsFlipped((current) => !current);
  };

  return (
    <>
      <div className="group perspective mx-auto w-full max-w-[340px] sm:w-[362px] md:w-[372px]">
        <div className="flex flex-col items-center">
          <div
            className={`team-card-inner ${isFlipped ? "team-card-inner--flipped" : ""} corners transform-style flex items-end justify-center overflow-visible bg-transparent
          h-[460px] w-full  shadow-xl mb-4 sm:h-[477px] md:h-[487px]  md:shadow-2xl md:mb-6
        `}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-pressed={isFlipped}
            aria-label={`Mostra o nascondi i dettagli di ${name}`}
          >
            <div className="team-card-inner-front corners backface-hidden">
              <div className="team-card-inner-front-bg corners" />
              <div className="h-[90%] team-card-image-shell">
                <SmoothImage
                  wrapperClassName="team-card-image-shell"
                  className="team-card-image relative z-10 object-cover object-bottom max-h-full"
                  src={image}
                  alt={name}
                />
              </div>
            </div>

            <div className="team-card-back absolute corners-inverted inset-0 backface-hidden rotate-y-180">
              <div className="team-card-back-bg relative px-5 py-6 flex flex-col justify-center">
                <div
                  ref={descriptionRef}
                  data-team-card-scroll
                  className="team-card-description overflow-y-auto space-y-3 text-base"
                  onScroll={handleDescriptionScroll}
                >
                  {descriptionParagraphs.map((paragraph, index) => (
                    <p
                      key={`${name}-paragraph-${index}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {descriptionHasOverflow && !descriptionIsAtEnd ? (
                  <div className="pointer-events-none absolute inset-x-5 bottom-0 flex justify-center pb-3 pt-10 team-card-description-fade">
                    <button
                      type="button"
                      className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(44,103,160,0.18)] bg-white/92 text-[var(--logo-main)] shadow-[0_12px_28px_-18px_rgba(18,50,80,0.6)] transition-transform duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(44,103,160,0.45)]"
                      onClick={handleScrollToDescriptionEnd}
                      onPointerDown={(event) => event.stopPropagation()}
                      aria-label={`Scorri fino alla fine della descrizione di ${name}`}
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        className="h-4 w-4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 7.5L10 13L15.5 7.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                ) : null}
              </div>

              {socials && (
                <div className="flex gap-3 mt-4">
                  {socials.map((s, i) => (
                    <a key={i} href={s.link} target="_blank" rel="noreferrer">
                      {s.icon}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="team-card-caption">
            <h3 className="team-card-name font-heading text-lg text-center">
              {name}
            </h3>
            <h4 className="team-card-caption-role text-center">{caption}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
