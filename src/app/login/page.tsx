'use client'

import { useState } from "react";
import Input from "@/components/Input/Input";

export default function LoginPage() {
    const [value, setValue] = useState('');

    return(
        <div>
            <Input value={value} onChange={setValue}/>
        </div>
    )
}