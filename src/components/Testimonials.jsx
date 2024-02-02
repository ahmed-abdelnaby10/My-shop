import avatar1 from "../assests/avatar-01.png";
import avatar2 from "../assests/avatar-03.png";
import avatar3 from "../assests/avatar-05.png";
import avatar4 from "../assests/disney-1.jpg";
import avatar5 from "../assests/disney-3.jpg";
import avatar6 from "../assests/disney-7.png";
import Reviewer from "./Reviwer";

export default function Testimonials() {
    return (
        <>
            <h1 className="w-fit h-12 text-3xl font-bold flex items-center px-5 border-2 bg-slate-200 border-solid border-slate-500 mx-auto mb-20 mt-20 small:text-2xl">Testimonials</h1>
            <div className="grid grid-cols-grid3 large:grid-cols-grid2 medium:grid-cols-grid2 small:grid-cols-grid1 extralarge:mx-28 mx-5 small:mx-3 gap-10 mb-20">
                <Reviewer img={avatar1} name="Reviewer One" job="Manager" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus"/>
                <Reviewer img={avatar2} name="Reviewer Two" job="Designer" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus"/>
                <Reviewer img={avatar3} name="Reviewer Three" job="Engineer" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus"/>
                <Reviewer img={avatar4} name="Reviewer Four" job="Manager" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus"/>
                <Reviewer img={avatar5} name="Reviewer Five" job="Designer" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus"/>
                <Reviewer img={avatar6} name="Reviewer Six" job="Engineer" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus"/>
            </div>
        </>
    )
}
