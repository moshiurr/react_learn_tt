

const AddTask = () => {
  return (
    <form className='add-form'>
      <div className="form-control">
        <label>Name</label>
        <input type="text" placeholder='Add Name' />
      </div>
      <div className="form-control">
        <label>Age</label>
        <input type="number" placeholder='Add Age' min='1' />
      </div>
      <div className="form-control form-control-check">
        <label>Set Active</label>
        <input type="checkbox" />
      </div> 
      <input type="submit" value='Save' className='btn btn-block'/>
    </form>
  )
}

export default AddTask
