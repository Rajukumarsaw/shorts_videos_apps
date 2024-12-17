import { FcMusic } from "react-icons/fc";
const Footer = ({userName, description, song}) => {
  return (
    <>
      <div className="  text-gray-200">
        <h3 className=" text-lg font-semibold">{userName}</h3>
        {
          (description.length>100)?(<p>{description.slice(0, 100)}...</p>):(<p>{description}</p>)
        }
        <div className="flex  items-center ">
        <FcMusic/>
        <div className=" overflow-hidden">
        <div className=" animate-ticker ">{song}</div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Footer
