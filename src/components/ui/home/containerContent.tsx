function ContainerContent({ children }: React.PropsWithChildren) {
    return <div className="grid grid-cols-[1fr_4px_1fr]">{children}</div>
}

export default ContainerContent
