import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './AppointMent.css';

const Appointment = () => {
    const history = useHistory()
    const handleAppointment = () => {
        history.push('/home')
    }
    const { register, handleSubmit , formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h1 className=" pt-5 text-danger fw-bold head">Appointment Form</h1>
            <form className="appointment-form" onSubmit={handleSubmit(onSubmit)}>      
      <input defaultValue={user.displayName} {...register("name")} />
      <input defaultValue={user.email} {...register("email", { required: true })} />
      {errors.email && <span className="error">This field is required</span>}
      <input placeholder="Name" defaultValue="" {...register("personname")} />
      <input placeholder="City" defaultValue="" {...register("city")} />
      <input placeholder="Age" defaultValue="" {...register("age")} />
      <input placeholder="Occupation" defaultValue="" {...register("occupation")} />
      <input placeholder="Phone" defaultValue="" {...register("phone")} />
      <input onClick={handleAppointment} className="appointment-btn" type="submit" />
    </form>
        </div>
    );
};

export default Appointment;