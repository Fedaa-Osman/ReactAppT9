import React, { useState } from 'react';

const Form = () => {
    const [form , setForm] = useState({
        firstName:'',
        lastName:'',
        education:'',
        email:'',
        phone:'',
        experience:'',
        address:''
    })

    const handleChanges = (e) => {
        let formIname = e.target.name;
        let formIvalue = e.target.value;
        setForm(({ ...form, [formIname]: formIvalue }));
        console.log(form);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                <label>First Name :</label>
                <input name="firstName" value={form.firstName} onChange={handleChanges}
                />
            </div>
            <div>
                <label>Last Name :</label>
                <input name="lastName" value={form.lastName} onChange={handleChanges}
                />
            </div>
            <div>
                <label>Education :</label>
                <input name="education" value={form.education} onChange={handleChanges}
                />
            </div>
            <div>
                <label>Email :</label>
                <input name="email" value={form.email} onChange={handleChanges} />
            </div>
            <div>
                <label>Phone :</label>
                <input name="phone" value={form.phone} onChange={handleChanges} />
            </div>
            <div>
                <label>Experience :</label>
                <input name="experience" value={form.experience} onChange={handleChanges}
                />
            </div>
            <div>
                <label>Address :</label>
                <input name="address" value={form.address} onChange={handleChanges}
                />
            </div>
            <input type="submit" value="submit" />
            </form>
        </div>
        );
    }

export default Form