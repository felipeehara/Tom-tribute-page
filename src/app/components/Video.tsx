export const Video = () => {
    return(
        <div className="flex justify-center">
            <div className="flex mt-7 w-80 items-center justify-center md:w-[900px]">
                        <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/AMP9QYHP7sM"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                />
            </div>
        </div>
    )
}