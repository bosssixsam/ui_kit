'use client'

import React from 'react'
import * as Kit from '@/modules/home/components'

const Home = () => {
    return (
        <div className="p-8 space-y-4">
            <div className="space-y-3">
                <h2>Input</h2>
                <Kit.Input />
            </div>
        </div>
    )
}

export default Home
