import React from 'react'
import {useForm} from 'react-hook-form'

const AddTransaction = ({addTransaction}) => {

  const {register, formState: {errors}, handleSubmit} = useForm();

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={handleSubmit((data) => addTransaction(data))}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." {...register("text", {required:true})}/>
          {errors.text?.type == "required" && (
            <p className="text-danger">This field is required.</p>
          )}

        </div>
        
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount" placeholder="Enter amount..." {...register("amount", {required:true})} />
          {errors.amount?.type == "required" && (
            <p className="text-danger">This field is required.</p>
          )}

        </div>

        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
