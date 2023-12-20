import { useNavigate } from "react-router-dom";

function CourseCard({data}) {
    const navigate = useNavigate();

    return (
        <div className="text-white w-[22rem] h-[430px] shadow-lg rounded-lg cursor-pointer group overflow-hidden bg-zinc-700">
            <div className="overflow-hidden">
                <img className="h-48 w-full rounded-tl-lg rounded-tr-lg group-hover:scale-[1,2] transition-all ease-in-out duration-300"
                 src={data?.thumbnail?.secure_url} alt="" />
            </div>

        </div>
    )


}

export default CourseCard;