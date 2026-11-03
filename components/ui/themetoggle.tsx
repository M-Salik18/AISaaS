"use client"

import * as React from "react"
import { Icon, Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react";
import { cn } from "cn"

const themes = [
    {
        name: "Light",
        Icon: Sun,
        Value: "light",
    },
    {
        name: "Dark",
        Icon: Moon,
        Value: "dark",
    },
    {
        name: "System",
        Icon: Monitor,
        Value: "system",
    }
]

export function ThemeToggle() {

    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="ghost" size="icon" />}>
                {resolvedTheme === "dark" ? <Moon /> : <Sun />}
                <span className="sr-only">Toggle theme</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {themes.map((theme) => (
                    <DropdownMenuItem key={theme.Value} onClick={() => setTheme(theme.Value)} className={cn("cursor-pointer")}>
                        <theme.Icon className="size-4" />
                        <span>{theme.name}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ThemeToggle
