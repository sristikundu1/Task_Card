import { GrAttachment } from "react-icons/gr";
import { PiChatsCircleLight } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";
import { LiaClipboardListSolid } from "react-icons/lia";
import { BsLayersFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const card = ({ item }) => {

    const { name, taskName, views, comments, date } = item;
    const [newfiles, setNewFiles] = useState([]);
    
     // show the file number from database 
     const url = "https://task-server-xi.vercel.app/taskfile"

     useEffect(() => {
         fetch(url)
             .then(res => res.json())
             .then(data => setNewFiles(data))
 
     }, [url])
 
 
     // upload the file in database 
     const handleUploadFile = e => {
 
         e.preventDefault();
 
         const form = e.target;
 
 
         const file = form.file.files[0].name;
 
         const uploadFile = { file };
         console.log(uploadFile);
 
 
         fetch("https://task-server-xi.vercel.app/taskfile", {
             method: 'POST',
             headers: {
                 'content-type': "application/json"
             },
             body: JSON.stringify(uploadFile)
         })
             .then(res => res.json())
             .then(data => {
                 console.log("Inside post response", data);
                 if (data.insertedId) {
 
                     Swal.fire({
                         title: 'success!',
                         text: 'You have successfully upload the file',
                         icon: 'success',
                         confirmButtonText: 'Ok'
                     })
                     form.reset();
                 }
             })
 
 
 
     }

    return (
        <div className=" h-[163px] w-72  p-2  bg-white rounded-lg">
            {/* people that created task  */}
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <img className="rounded-full w-6 h-6" src="https://st2.depositphotos.com/2024219/44924/i/450/depositphotos_449249930-stock-photo-teenager-caucasian-handsome-man-isolated.jpg" alt="" />
                    <h2 className="font-serif font-semibold text-xs">{name}</h2>
                </div>
                <div className="flex gap-2 items-center">
                    <img className="rounded-full w-6 h-6" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                    <h2 className="font-serif font-semibold text-xs">Sadik Istiak</h2>
                </div>
            </div>

            {/* task name  */}
            <div className="flex justify-between my-5">
                <div className="flex gap-1 items-center">
                    <BsLayersFill className="text-gray-500 text-xs"></BsLayersFill>
                    <p className="text-gray-500 text-xs">{taskName}</p>
                </div>
                <div className="flex gap-1 items-center p-1 rounded-lg bg-[#eff1f3]">
                    <LiaClipboardListSolid className="text-gray-800 text-xs"></LiaClipboardListSolid>
                    <p className="text-xs font-medium text-gray-700 ">1/2</p>
                </div>
            </div>

            {/* task information  */}
            <div className="flex gap-3 items-center">
                <img className="rounded-full w-6 h-6" src="https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg" alt="" />
                <img className="rounded-full w-6 h-6 " src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg" alt="" />

                <p className="rounded-full bg-[#eff1f3] w-7 h-5 font-medium text-center text-xs">{views}+</p>
                <div className="flex gap-1 items-center">
                    <PiChatsCircleLight className=" text-xs "></PiChatsCircleLight>
                    <p className="text-xs font-medium text-gray-700 ">{comments}</p>
                </div>

                <div className="flex gap-1 items-center">
                    <GrAttachment onClick={() => document.getElementById('my_modal_5').showModal()}
                        className=" text-xs "></GrAttachment>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg text-center text-[#025464]">Upload the file.</h3>
                            <form onSubmit={handleUploadFile} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">File</span>
                                    </label>
                                    <input type="file" name="file" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn capitalize bg-[#E57C23]">Submit</button>
                                </div>
                            </form>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    <p className="text-xs font-medium text-gray-700 ">{newfiles.length}</p>
                </div>

                <div className="flex gap-2 items-center">
                    <FaCalendarAlt className="text-gray-500 text-xs "></FaCalendarAlt>
                    <p className="text-xs font-medium text-gray-700 ">{date}</p>
                </div>
            </div>


        </div>
    );
};

export default card;