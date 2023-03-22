export default (fadeOutStyle) => {
  const initialForAnimation =
    fadeOutStyle === true
      ? {
          opacity: 1,
          y: 0,
        }
      : "start";

  const animateForAnimation =
    fadeOutStyle === true
      ? {
          opacity: 0,
          y: -5,
          transition: {
            type: "tween",
            ease: "linear",
            duration: 0.75,
          },
        }
      : undefined;

  return {
    initialForAnimation,
    animateForAnimation,
  };
};
