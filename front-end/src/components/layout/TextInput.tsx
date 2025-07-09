'use client'

interface TextInputProps {
  title: string
  placeholder: string
  onText: (text: string) => void;
}
export default function TextInput(props: TextInputProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      props.onText?.(e.target.value)
    }
  return (
    <div>
      <p>{props.title}</p>
      <input 
      type="text" 
      onChange={handleChange}
      placeholder={props.placeholder}
      className="bg-medium-green rounded p-5  w-[15rem]"
      />
    </div>
  )
}