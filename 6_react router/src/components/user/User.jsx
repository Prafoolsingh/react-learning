import { useParams } from "react-router-dom"

export default function User() {
    const {_id}=useParams()
  return (
    <div className="bg-orange-400  h-screen flex justify-center items-center text-white">
        <div className="text-3xl">{`I am user with id ${_id}`} </div>
    </div>
  )
}
