import { Dispatch, SetStateAction } from "react"

const tipOptions = [

    {

        id: 'tip-0',
        value: 0,
        label: 'No aplica'

    }
    ,
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}

export default function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {
    return (
        <div>
            <h3 className=" font-black text-2xl mb-3">Propina</h3>
            <form className="space-y-3">

                {tipOptions.map(tipOption => (
                    <div
                        key={tipOption.id}
                        className="flex gap-2">
                        <label
                            className="text-lg font-bold"
                            htmlFor={tipOption.id}>{tipOption.label}</label>
                        <input

                            id={tipOption.id}
                            type="radio"
                            name="ip"
                            value={tipOption.value}
                            onChange={e => setTip(+e.target.value)}
                            checked={tipOption.value === tip}
                        />
                    </div>
                ))}

            </form>
        </div>
    )
}
