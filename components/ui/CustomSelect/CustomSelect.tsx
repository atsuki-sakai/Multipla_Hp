
interface Props {
    id: string
    name: string
    label: string
    defaultText?: string
    options?: string[]
}

const CustomSelect = ({ id, name, label, defaultText = "お問合せ内容を選択して下さい", options = [] }: Props) => {

    return (
        <>
            <div className="my-4 text-left">
                <label htmlFor={id} className="text-sm ml-2 text-gray-500">{label}</label>
                <select className="w-full h-12 bg-indigo-50 rounded-md pl-2 focus:outline-none" name={name} id={id} >
                    <option value="">{defaultText}</option>
                    {
                        options.map((option, index) => {
                            return <option key={index} value={option}>{option}</option>;
                        })
                    }
                </select>
            </div>
        </>
    )
}


export default CustomSelect