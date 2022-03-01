import './MyCard.scss';

interface CardProps {
  img: any,
  title: string
}


export default function MyCard(props: CardProps) {
  return (
    <div className="card">
      <img alt={props.title} className="img" src={props.img} />
      <div className="card-content">
        <label><strong>{props.title}</strong></label>
      </div>
    </div>
  );
}