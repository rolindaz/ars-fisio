import { useRef, useState } from "react";

export default function TeamCard({
  name,
  caption,
  image,
  description,
  socials,
  variant,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const lastTapToggleRef = useRef(0);
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

    if (event.target.closest("a")) {
      return;
    }

    setIsFlipped((current) => !current);
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
      <div className="group perspective mx-auto w-fit">
        <div className="flex flex-col items-center">
          <div
            className={`team-card-inner ${isFlipped ? "team-card-inner--flipped" : ""} corners transform-style flex items-end justify-center overflow-visible bg-transparent
          h-[460px] w-[340px] shadow-xl mb-4 sm:h-[477px] sm:w-[362px] md:h-[487px] md:w-[372px] md:shadow-2xl md:mb-6
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
              <div className="h-[90%]">
                <img className="relative z-10 object-cover object-bottom max-h-full"
                  src={image}
                  alt=""/>
              </div>
            </div>

            <div className="team-card-back absolute corners-inverted inset-0 backface-hidden rotate-y-180">
              <div className="team-card-back-bg px-5 flex flex-col justify-center">
                <div className="team-card-description text-base">
                  {descriptionParagraphs.map((paragraph, index) => (
                    <p
                      key={`${name}-paragraph-${index}`}
                      className={
                        index < descriptionParagraphs.length - 1 ? "mb-3" : ""
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
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
