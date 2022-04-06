import {useEffect, useState} from 'react'
import SearchTrainerForMod from './SearchTrainerForMod'

const AddModuleForm = ({su,addModuleHandler}) => {

    const[text, setText] = useState('')
    const[startTime, setStartTime] = useState('')
    const[endTime, setEndTime] = useState('')
    const[trainer, setTrainer] = useState('')
    const[trainerId, setTrainerId] = useState('')
    
    const onSubmit = e =>{

        e.preventDefault()
        addModuleHandler(text,startTime,endTime,trainer,trainerId)

    }

    useEffect(()=>{

        su.forEach(ut => {
            if(trainerId == ut.id){
                setTrainer(
                    ut.name
                )
            }
        });

    },[trainerId])

    const handleSearch = (skill,newTrainerId) => {
        setTrainerId(newTrainerId)
        setText(skill)
    }

  return (
      <div>
          <SearchTrainerForMod search = {handleSearch} su={su} />
          {(trainerId !== '' && text !== '') && <form className='addModuleForm' onSubmit={onSubmit}>
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
    </form>}
      </div>
    
  )
}

export default AddModuleForm