import LinhaVerticalContent from '../../linhaVerticalContent'
import Sub_Section_Atencao_Leitor from './sub_section_atencao_leitor'
import Sub_Section_Font_Cursiva from './sub_section_font_cursiva'
import Sub_Section_Font_Display from './sub_section_font_display'
import Sub_Section_Font_Sans_Serif from './sub_section_font_sans_serif'
import Sub_Section_Font_Serif from './sub_section_font_serif'
import Sub_Section_Hierarquinha from './sub_section_hierarquinha'
import Sub_Section_Tipos_Fontes from './sub_section_tipos_fontes'

function Section_Tipos() {
    return (
        <section
            id="#fontes"
            className="layoutResponsivo @5xl:containerGrid overflow-hidden"
        >
            <Sub_Section_Tipos_Fontes />
            <Sub_Section_Font_Serif />
            <Sub_Section_Font_Sans_Serif />
            <Sub_Section_Font_Cursiva />
            <Sub_Section_Font_Display />
            <Sub_Section_Hierarquinha />
            <Sub_Section_Atencao_Leitor />
            <LinhaVerticalContent className="linhaVertical" />
        </section>
    )
}

export default Section_Tipos
