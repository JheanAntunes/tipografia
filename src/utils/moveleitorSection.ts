export const moveLeitorSection = (id: string) => {
    const sectionTop = document.getElementById(id)?.offsetTop
    window.scroll({ behavior: 'smooth', top: sectionTop })
}
