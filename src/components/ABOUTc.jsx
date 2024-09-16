import Heading from "../constants/Heading.jsx";


const About = () => {
    return(
        <>
            <div className={`min-w-full lg:flex bg-blue-600`}>
                <Heading className={`h1 text-n-1 bg-blue-650 pt-10`} title='About The Event'/>
            </div>
            <div className={`grid auto-rows-[192px] grid-cols-3 gap-4`}>
                {[...Array(7)].map((_, i) => (
                    <div
                        key={i}
                        className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${
                            i === 3 || i === 6 ? "col-span-2" : ""}`}
                    >

                    </div>
                ))}

            </div>
        </>
    )
}

export default About;