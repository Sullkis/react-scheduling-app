import {useState} from 'react'

const AddModuleForm = ({addModuleHandler}) => {

    const[text, setText] = useState('')
    const[startTime, setStartTime] = useState('')
    const[endTime, setEndTime] = useState('')
    const[trainer, setTrainer] = useState('')
    const[trainerId, setTrainerId] = useState('')
    
    const onSubmit = e =>{

        e.preventDefault()
        addModuleHandler(text,startTime,endTime,trainer,trainerId)

    }

  return (
    <form className='addModuleForm' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Module</label>
            <input type="text" placeholder='Add Module' value={text} onChange={(e)=> setText(e.target.value)} required/>
        </div>
        <div className='form-control'>
            <label>Trainer Name</label>
            <input type="text" placeholder='Add Trainer Name' value={trainer} onChange={(e)=> setTrainer(e.target.value)} required/>
        </div>
        <div className='form-control'>
            <label>TrainerID</label>
            <input type="text" placeholder='Add Trainer Name' value={trainerId} onChange={(e)=> setTrainerId(e.target.value)} required/>
        </div>
        <div className='form-control'>
            <label>Start day and time</label>
            <input type="datetime-local" value={startTime} onChange={(e)=> setStartTime(e.target.value)} required/>
        </div>
        <div className='form-control'>
            <label>End day and time</label>
            <input type="datetime-local" value={endTime} onChange={(e)=> setEndTime(e.target.value)} required/>
        </div>
        <div>
        <input type="submit" value="add Module" />
        </div>
    </form>
  )
}

export default AddModuleForm