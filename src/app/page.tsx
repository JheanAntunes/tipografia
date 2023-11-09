import SectionInitial from '@/components/ui/home/main/sectionInitial'
import Section_History from '@/components/ui/home/main/section_history'
import Section_O_Que_Tipografia from '@/components/ui/home/main/section_o_que_tipografia'

export default function Home() {
    return (
        <main className="my-16 flex flex-col gap-16">
            <SectionInitial />
            <Section_O_Que_Tipografia />
            <Section_History />
        </main>
    )
}
