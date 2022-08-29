const variants_1 = {
    hidden: {
        x: "-100vw"
    },
    visible: {
        x: "0vw",
        transition: { type: "spring", stiffness: 30, duration: 1.5 }
    }
}

const variants_2 = {
    hidden: {
        x: "100vw"
    },
    visible: {
        x: "0vw",
        transition: { type: "spring", stiffness: 30, duration: 1.5 }
    }
}

const variants = {
    hidden: {
       opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { delay: 1.1, duration: 1 }
    }
}

export { variants_1, variants_2, variants }