interface BannerProps {
    children: React.ReactNode
}

const Banner: React.FC<BannerProps> = ({children}) => {
    return ( 
        <div className="w-[80%] bg-orange-600 rounded-lg m-auto shadow-teste">
            {children}
        </div>
     );
}
 
export default Banner;