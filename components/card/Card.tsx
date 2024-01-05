interface CardProps {
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({children}) => {
    return ( 
        <section className="w-[300px] rounded-lg">
            {children}
        </section>
     );
}
 
export default Card;