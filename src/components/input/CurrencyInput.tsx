import React from 'react'
import { Input } from '@/components/ui/input'
import { cn } from '@/shared/utils'
import { BaseInputProps } from './BaseInput'

export interface CurrencyInputProps extends Omit<BaseInputProps, 'value'> {
    value: number
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({ className, name, value, onChangeValue }) => {
    return (
        <div className={cn('flex h-10 items-center px-3 py-2 space-x-2 border border-input rounded-md', className)}>
            <Input
                className="px-0 py-0 h-auto border-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none pin"
                type="number"
                name={name}
            />
            <span className="text-sm font-medium text-gray-500">USD</span>
        </div>
    )
}

export default CurrencyInput
