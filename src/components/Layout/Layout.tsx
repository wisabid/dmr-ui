function Header() {
    return (
        <header style={{padding: '20px 0'}}>
            <h1 style={{color: '#fff'}}>Dmr Dashboard</h1>
        </header>
    )
}

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}
