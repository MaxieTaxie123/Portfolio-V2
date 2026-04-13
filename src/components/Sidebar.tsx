import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(true)

    return (
        <>
            {/* Sidebar: slides on/off screen, fixed width */}
            <aside
                className={`fixed z-40 left-0 top-0 h-full w-[20vw] overflow-hidden bg-gray-900 transition-transform duration-300 ${collapsed ? '-translate-x-full' : 'translate-x-0'}`}
            >
                <div className="h-full flex flex-col gap-3 p-6 justify-center items-center">
                        <button className="w-full uppercase cursor-pointer text-3xl tracking-wide text-white/80 hover:text-white py-3 px-4 rounded transition-colors"
                            onClick={() => {
                                document.getElementById('Home')?.scrollIntoView({ behavior: 'smooth' });
                                setCollapsed(true);
                            }}>
                        Home</button>
                        <button
                            className="w-full uppercase cursor-pointer text-3xl tracking-wide text-white/80 hover:text-white py-3 px-4 rounded transition-colors"
                            onClick={() => {
                                document.getElementById('Projects')?.scrollIntoView({ behavior: 'smooth' });
                                setCollapsed(true);
                            }}
                        >
                            Projects
                        </button>
                                                <button
                            className="w-full uppercase cursor-pointer text-3xl tracking-wide text-white/80 hover:text-white py-3 px-4 rounded transition-colors"
                            onClick={() => {
                                document.getElementById('About')?.scrollIntoView({ behavior: 'smooth' });
                                setCollapsed(true);
                            }}
                        >
                            About Me
                        </button>
                </div>
            </aside>

            {/* Toggle: fixed so it always stays visible */}
            <button
                onClick={() => setCollapsed(!collapsed)}
                aria-expanded={!collapsed}
                aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                className={`fixed top-4 z-50 rounded-full p-12 text-white cursor-pointer transition-[left] duration-300 ${collapsed ? 'left-[1vw]' : 'left-[calc(20vw-3.5rem)]'}`}
            >
                {collapsed ? <Menu size={32} /> : <X size={32} />}
            </button>
        </>
    )
}