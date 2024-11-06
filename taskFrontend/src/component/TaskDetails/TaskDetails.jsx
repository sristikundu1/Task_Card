import { useEffect, useState } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import Card from "../Card";

const TaskDetails = () => {
    const [tasks, setTasks] = useState([]);

    // Fetch Data 
    useEffect(() => {
        fetch("./taskDetails.json")
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

    // Filter data according to category 
    const incomplete = tasks.filter(task => task.category === 'incomplete')
    const todo = tasks.filter(task => task.category === 'todo')
    const doing = tasks.filter(task => task.category === 'doing')
    const under_review = tasks.filter(task => task.category === 'review')
    const completed = tasks.filter(task => task.category === 'completed')
    const overdue = tasks.filter(task => task.category === 'overdue')

    return (
        
        <div className="overflow-x-auto max-w-full ">
            <div className="grid grid-cols-6 gap-1 ml-2 ">

                 {/* incomplete task   */}

                <div className="bg-gray-200 flex flex-col gap-3 items-center justify-start my-7 py-3 max-h-screen overflow-y-auto  w-[310px] ">
                    <div className="flex gap-32 ">
                        <div className="flex gap-2 items-center  ">
                            <BsFillCircleFill className="text-[#c1121f] text-3xl"></BsFillCircleFill>
                            <h2 className=" font-serif font-medium">Incomplete</h2>
                        </div>
                        <div className="w-6 h-6 rounded-lg bg-[#eff1f3] pl-2">
                            <p className=" font-medium text-gray-700 ">0</p>
                        </div>
                    </div>
                    {
                        incomplete.map(item => <Card
                            key={item.id} item={item}></Card>)
                    }
                </div>

                {/* to do task  */}

                <div className="bg-gray-200  flex flex-col gap-3 items-center justify-start my-7  py-3 overflow-y-auto max-h-screen w-[310px]" >
                    <div className="flex gap-40">
                        <div className="flex gap-2 items-center  ">
                            <BsFillCircleFill className="text-[#00bbf9] text-3xl"></BsFillCircleFill>
                            <h2 className=" font-serif font-medium">To Do</h2>
                        </div>
                        <div className="w-6 h-6 rounded-lg bg-[#eff1f3] pl-2">
                            <p className=" font-medium text-gray-700 ">0</p>
                        </div>
                    </div>

                    {
                        todo.map(item => <Card
                            key={item.id} item={item}></Card>)
                    }

                </div>

                {/* doing task  */}

                <div className="bg-gray-200  flex flex-col gap-3 items-center justify-start my-7 py-3 overflow-y-auto max-h-screen w-[310px]">
                    <div className="flex gap-44">
                        <div className="flex gap-2 items-center ">
                            <BsFillCircleFill className="text-[#fee440] text-3xl"></BsFillCircleFill>
                            <h2 className=" font-serif font-medium">Doing</h2>
                        </div>
                        <div className="w-6 h-6 rounded-lg bg-[#eff1f3] pl-2">
                            <p className=" font-medium text-gray-700 ">0</p>
                        </div>
                    </div>

                    {
                        doing.map(item => <Card
                            key={item.id} item={item}></Card>)
                    }

                </div>

                {/* review task  */}
                <div className="bg-gray-200  flex flex-col gap-3 items-center justify-start my-7  py-3 overflow-y-auto max-h-screen w-[310px]">
                    <div className="flex gap-40">
                        <div className="flex gap-2 items-center">

                            <h2 className=" font-serif font-medium">Under Review</h2>
                        </div>
                        <div className="w-6 h-6 rounded-lg bg-[#eff1f3] pl-2">
                            <p className=" font-medium text-gray-700 ">0</p>
                        </div>
                    </div>

                    {
                        under_review.map(item => <Card
                            key={item.id} item={item}></Card>)
                    }

                </div>

                {/* completed task  */}
                <div className="bg-gray-200  flex flex-col gap-3 items-center justify-start my-7 py-3 overflow-y-auto max-h-screen w-[310px]">
                    <div className="flex gap-44">
                        <div className="flex gap-2 items-center  ">
                         
                            <h2 className=" font-serif font-medium">Completed</h2>
                        </div>
                        <div className="w-6 h-6 rounded-lg bg-[#eff1f3] pl-2">
                            <p className=" font-medium text-gray-700 ">0</p>
                        </div>
                    </div>

                    {
                        completed.map(item => <Card
                            key={item.id} item={item}></Card>)
                    }

                </div>

                {/* overdue task  */}
                <div className="bg-gray-200  flex flex-col gap-3 items-center justify-start my-7  py-3 overflow-y-auto max-h-screen w-[310px]">
                    <div className="flex gap-48">
                        <div className="flex gap-2 items-center  ">
                           
                            <h2 className=" font-serif font-medium">Overdue</h2>
                        </div>
                        <div className="w-6 h-6 rounded-lg bg-[#eff1f3] pl-2">
                            <p className=" font-medium text-gray-700 ">0</p>
                        </div>
                    </div>

                    {
                        overdue.map(item => <Card
                            key={item.id} item={item}></Card>)
                    }

                </div>

            </div>
        </div>
    );
};

export default TaskDetails;