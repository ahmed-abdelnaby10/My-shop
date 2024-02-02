import FeatureCard from "./FeatureCard";
import feature1 from "../assests/features-01.jpg"
import feature2 from "../assests/features-02.jpg"
import feature3 from "../assests/features-03.jpg"

export default function Features() {
    return (
        <div className="mt-10 pt-10 bg-slate-50">
            <div className="saw-teeth"></div>
            <h1 className="w-fit h-12 text-3xl font-bold flex items-center px-5 border-2 bg-slate-200 border-solid border-slate-500 mx-auto mb-10 small:text-2xl">Features</h1>
            <div className="grid grid-cols-grid3 medium:grid-cols-grid1 small:grid-cols-grid1 large:grid-cols-grid2 gap-10 extralarge:mx-28 mx-5 small:mx-1 large:content-center">
                <FeatureCard title="Quality" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima" color="slate-500" img={feature1} />
                <FeatureCard title="Time" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima" color="slate-500" img={feature2} />
                <FeatureCard title="Passion" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima" color="slate-500" img={feature3} />
            </div>
        </div>
    )
}
