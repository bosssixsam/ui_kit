import React, { HTMLInputTypeAttribute } from 'react'
import { Input } from '@/components/ui/input'
import { cn } from '@/shared/utils'

export interface BaseInputProps {
    className?: string
    loading?: boolean
    disabled?: boolean
    name: string
    value: string
    onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const BaseInput: React.FC<BaseInputProps> = ({ className, name, value, onChangeValue }) => {
    // return <Input className={cn(className)} name={name} type={type} disabled={disabled} value={value} onChange={onChangeValue} />
    return <div>input</div>
}

export default BaseInput
