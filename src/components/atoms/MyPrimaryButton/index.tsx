import './MyPrimaryButton.scss';

interface ButtonProps {
  text: string
}

export default function MyPrimaryButton(props: ButtonProps) {
  return (
    <input className="my-primary-button"
           type="submit"
           placeholder={props.text}
    />
  )
}