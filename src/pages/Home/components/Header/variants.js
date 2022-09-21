const variantsLogo = {
  initial: {
    x: "-100vw"
  },
  visible: {
    x: "0vh",
    transition: { type: "spring", stiffness: 40, duration: 0.5 }
  },
};

const variantsUl = {
  initial: {
    y: "-100vh"
  },
  visible: {
    y: "0vh",
    transition: { type: "spring", stiffness: 30, duration: 0.5, delay: 0.3 }
  }
}

const variantsColors = {
  hover: {
    color: "#008742"
  }
}

const variantsButton = {
  initial: {
    x: "100vw"
  },
  visible: {
    x: "0vh",
    transition: { type: "spring", stiffness: 40, duration: 0.5, delay: 1 }
  },
}

export { variantsLogo, variantsUl, variantsColors, variantsButton };
