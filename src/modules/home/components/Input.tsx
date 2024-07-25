import React from 'react'
import { CurrencyInput } from '@/components/input'
import { Input as UInput } from '@/components/ui/input'

export interface KitInputProps {}

const Input: React.FC<KitInputProps> = () => {
    const [value, setValue] = React.useState<string>('')
    const [number, setNumber] = React.useState<number>(0)

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(Number(e.target.value))
    }

    return (
        <>
            <div className="space-y-2">
                <h4>BaseInput</h4>
                <UInput />
            </div>
            <div className="space-y-2">
                <h4>Currency Input</h4>
                <CurrencyInput name="currency" value={number} onChangeValue={handleNumber} />
            </div>
        </>
    )
}

export default Input
