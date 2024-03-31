"use client"
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const DarkModeSwitch = () => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    // const currentTheme = theme === 'system' ? systemTheme : theme
    return (
        <div>
            {
                resolvedTheme === 'dark' ? <Sun onClick={()=>setTheme('light')} className='text-xl cursor-pointer' /> : <Moon onClick={()=>setTheme('dark')} className='text-xl' />
            }
        </div>
    );
}

export default DarkModeSwitch;
